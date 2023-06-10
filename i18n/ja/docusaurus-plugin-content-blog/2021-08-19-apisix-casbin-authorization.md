---
title: Casbin を使用して APISIX での承認
author: Rushikesh Tote
authorTitle: カスビンメンバー
authorURL: "http://github.com/rushitote"
authorImageURL: "https://avatars.githubusercontent.com/rushitote"
---

## はじめに

[APISIX](https://apisix.apache.org/) は Nginx や etcd に基づく高性能でスケーラブルなクラウド ネイティブ API ゲートウェイです。 これは、Apache Software Foundationによるオープンソースプロジェクトです。 それに加えて、APISIXがとても良いのは、認証のような機能を実装するために使用できる多くの偉大なプラグインのサポートです。 モニタリングルーティングなど APISIX のプラグインが(再起動なしで)ホットリロードされているという事実は、それを非常に動的にします。

しかし、APISIXを使用している間に、アプリケーションに複雑な認可ロジックを追加するシナリオがあるかもしれません。 ここで、authz-casbinがあなたを助けるかもしれません。 authz-casbin は [Lua Casbin](https://github.com/casbin/lua-casbin/) をベースにした APISIX プラグインで、さまざまなアクセス制御モデルに基づいた強力な認証を可能にします。 [Casbin](/) is an authorization library which supports access control models like ACL, RBAC, ABAC. もともとはGoで書かれており、それは多くの言語に移植されており、Lua CasbinはCasbinのLua実装です。 authz-casbinの開発は、コアメンバーが合意したAPISIXリポジトリ([#4674](https://github.com/apache/apisix/issues/4674))で承認のための新しいプラグインを提案した時に始まりました。 そして、大きな変更と改善につながった役立つレビューの後、PR ([#4710](https://github.com/apache/apisix/pull/4710)) が最終的にマージされました。

このブログで APISIXのロールベースアクセス制御(RBAC)に基づいて認証モデルを実装する方法を示すために、authz-casbinプラグインを使用します。

**注意**: Casbinは認証のみを行い、認証しないので、ユーザーを認証するために、他のプラグインまたはカスタムワークフローを使用する必要があります。

## モデルの作成

このプラグインは、すべてのリクエストを承認するために3つのパラメータを使用します - 件名、オブジェクト、およびアクション。 ここで、subject はユーザー名ヘッダーの値で、 `[username: alice]` のようなものになる可能性があります。 次に、オブジェクトはアクセスされているURLパスであり、アクションはリクエストメソッドが使用されています。

Let's say we want to create a model with three resources at the paths - `/`, `/res1` and `/res2`. 次のようなモデルが必要です

![画像](https://i.imgur.com/7BlvBNR.png)

例えば、`jack`のようなすべてのユーザー( `*` )がホームページにアクセスできることを意味します(`/`)。 `alice` や `bob` のような `管理者` 権限を持つユーザーは、( `res1` や `res2` のような) すべてのページとリソースにアクセスできます。 また、 `GET` リクエストメソッドのみを使用するように、管理者権限のないユーザーを制限しましょう。 このシナリオでは、次のようにモデルを定義できます。

```ini
[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act

[role_definition]
g = _, _

[policy_effect]
e = some(where (p.eft == allow))

[matchers]
m = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)
```

## ポリシーの作成

上記のシナリオから、ポリシーは次のようになります。

```csv
p, *, /, GET
p, admin, *, *
g, alice, admin
g, bob, admin
```

モデルからのマッチャは以下のことを意味します:

1. `(g(r.sub, p.sub) || keyMatch(r.sub, p. ub)) <code>`: リクエストの件名は、ポリシーの件名としての役割を持っているか、リクエストの件名は、 `keyMatch` 内のポリシーの件名と一致します。 `keyMatch` is built in function in Lua Casbin, you can take a look at the function's description and more such functions that could be useful [here](https://github.com/casbin/lua-casbin/blob/master/src/util/BuiltInFunctions.lua).
2. `keyMatch(r.obj, p.obj)`: リクエストのオブジェクトはポリシーのオブジェクト (URLパスはこちら) に一致します。
3. `keyMatch(r.act, p.act)`: リクエストのアクションはポリシーのアクション (HTTP リクエストメソッドはこちら) と一致します。

## ルート上でプラグインを有効にしています

モデルとポリシーを作成したら、APISIX Admin API を使用してルート上で有効にできます。 モデルとポリシーのファイルパスを使用して有効にするには:

```sh
curl http://127.0.0.1:9080/apisix/admin/routes/1 -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '
{
    "plugins": {
        "authz-casbin": {
            "model_path": "/path/to/model.conf",
            "policy_path": "/path/to/policy.csv",
            "username": "username"
        }
    },
    "upstream": {
        "nodes": {
            "127.0.0.1:1980": 1
        },
        "type": "roundrobin"
    },
    "uri": "/*"
}'
```

ここで、username フィールドは、subject に渡すために使用するヘッダー名です。 例えば、ユーザー名ヘッダーを `user: alice`として渡す場合は、 `"username": "user"` を使用します。

ファイルの代わりにモデル/ポリシーテキストを使用するには、代わりに `モデル` と `ポリシー` フィールドを使用できます。

```sh
curl http://127.0.0.1:9080/apisix/admin/routes/1 -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '
{
    "plugins": {
        "authz-casbin": {
            "model": "[request_definition]
            r = sub, obj, act

            [policy_definition]
            p = sub, obj, act

            [role_definition]
            g = _, _

            [policy_effect]
            e = some(where (p.eft == allow))

            [matchers]
            m = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)",

            "policy": "p, *, /, GET
            p, admin, *, *
            g, alice, admin
            g, bob, admin",

            "username": "username"
        }
    },
    "upstream": {
        "nodes": {
            "127.0.0.1:1980": 1
        },
        "type": "roundrobin"
    },
    "uri": "/*"
}'
```

## グローバルモデル/ポリシーを使用してプラグインを有効にする

複数のルートで単一のモデルとポリシー構成を使用したい場合があります。 まず、 `PUT` のリクエストを送信して、モデルとポリシーの設定をプラグインのメタデータに追加できます:

```sh
curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/authz-casbin -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -i -X PUT -d '
{
"model": "[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act

[role_definition]
g = _, _

[policy_effect]
e = some(where (p.eft == allow))

[matchers]
m = (g(r.sub, p.sub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)",

"policy": "p, *, /, GET
p, admin, *, *
g, alice, admin
g, bob, admin"
}'
```

そして、いくつかのルートで同じ設定を有効にするには、Admin API を使用してリクエストを送信します。

```sh
curl http://127.0.0.1:9080/apisix/admin/routes/1 -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '
{
    "plugins": {
        "authz-casbin": {
            "username": "username"
        }
    },
    "upstream": {
        "nodes": {
            "127.0.0.1:1980": 1
        },
        "type": "roundrobin"
    },
    "uri": "/route1/*"
}'
```

これにより、プラグインのメタデータの設定がルートに追加されます。 また、更新されたモデルとポリシー設定を使用してプラグインのメタデータにリクエストを再送することで、プラグインのメタデータ設定を簡単に更新することもできます。 プラグインはメタデータを使ってルートを自動的に更新します

## ユースケース

- このプラグインの主な使用例は、API での認証を実装することです。 このプラグインは、認証モデルとポリシーの設定で使用しているAPIルートに簡単に追加できます。
- すべての API に対して単一の認可モデルを使用したい場合は、グローバルモデル/ポリシーメソッドを使用できます。 これにより、etcd 内のメタデータのみを更新する必要があるため、すべてのルートでポリシーの更新が容易になります。
- 異なるルートごとに異なるモデルを使用したい場合は、route (ルート)メソッドを使用できます。 これは、異なるAPIルートが異なるユーザ権限セットを持つ場合に役立ちます。 より大きなポリシーを扱っている場合にもこれを使用できます。複数のルートにフィルタされると認可が速くなりますので。
