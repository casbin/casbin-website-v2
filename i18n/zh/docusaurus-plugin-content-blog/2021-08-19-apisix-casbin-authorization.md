---
title: 使用 Casbin 在 APISX 中授权
author: Rushikesh Tote
authorTitle: Casbin 成员
authorURL: "http://github.com/rushitote"
authorImageURL: "https://avatars.githubusercontent.com/rushitote"
---

## 简介

[APISIX](https://apisix.apache.org/) 是一个基于Nginx 等的高性能和可缩放云端本地的 API 网关。 这是Apache Software 基金会的一个开放源码项目。 除此以外，APIIX 非常好的是在可以用于实现认证等功能的插件中建立的许多强大的支持。 监视、路由等。 APISIX中的插件被热重新加载(未重启) 这一事实使其非常活跃。

但在使用 APISIX时，可能会出现您想要在应用程序中添加复杂的授权逻辑的情况。 Authz-casbin可能会帮助您。 authz-casbin 是基于 [Lua Casbin](https://github.com/casbin/lua-casbin/) 的APIIX 插件，它允许基于各种访问控制模型的强大授权。 [Casbin](/) is an authorization library which supports access control models like ACL, RBAC, ABAC. 它最初是用Go编写的，已被移植到许多语言，Lua Casbin是Casbin的Lua实现。 Authz-casbin的开发始于我们在APISIX 存储库中提出了一个新的授权插件([#4674](https://github.com/apache/apisix/issues/4674))，核心成员同意了这个插件。 经过一些有助益的审查导致了一些重大变化和改进，最终合并了PR ([#4710](https://github.com/apache/apisix/pull/4710))。

在这个博客中， 我们将使用authz-casbin 插件来显示您如何在 APISIX中实现基于角色访问控制的授权模式。

**备注**: 您将需要使用其他插件或自定义工作流来验证用户，因为Casbin只会进行授权而不是身份验证。

## 创建模型

插件使用三个参数授权任何请求 - 主题(subject)、对象(object) 和动作(action)。 这里的主题是用户名头的值，可能是 `[用户名：别名]`。 然后，对象是正在访问的 URL 路径和正在使用的请求方法。

让我们说我们想要在路径上用三个资源创建一个模型 - `/` `/res1` 和 `/res2`。 我们希望有这样的模式：

![图像](https://i.imgur.com/7BlvBNR.png)

这将意味着所有用户 (`*`) 都像 `jack` 可以访问首页 (`/`)。 并且拥有 `管理员` 权限的用户，比如 `` 和 `bob` 可以访问所有页面和资源 (例如 `res1` 和 `res2`)。 另外，让我们限制没有任何管理员权限的用户仅使用 `GET` 请求方法。 在这种情况下，我们可以将模式定义为：

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

## 创建策略

根据上述设想，策略将是：

```csv
p, *, /, GET
p, admin, *, *
g, alice, admin
g, bob, admin
```

来自模型的匹配器是指：

1. `(g(r.sub, p.sub) || keyMatch(r.sub, p.sub))`: 请求的主题作为策略的主题或请求的主题与策略的主题匹配 `keyMatch`。 `keyMatch` 是在 Lua Casbin 中构建的。 您可以在这里查看函数的描述和更多可能有用的函数 [](https://github.com/casbin/lua-casbin/blob/master/src/util/BuiltInFunctions.lua)
2. `keyMatch(r.obj, p.obj)`: 请求的对象匹配策略的对象(URL路径在这里)。
3. `keyMatch(r.act, p.act)`: 请求的动作与策略的动作匹配(HTTP 请求方法在这里)。

## 启用路由插件

创建模型和策略后，您可以使用APISIX Admin API在路由上启用它。 要使用模型和策略文件路径启用它：

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

在这里，用户名字段是您将要在主题中传递的标题名称。 例如，如果您将通过用户名头以 `user: Alice`, 您将使用 `"username": "user"`.

对于使用模型/策略文本而不是文件，您可以使用 `模型` 和 `策略` 字段替代：

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

## 启用使用全局模型/策略的插件

在某些情况下，您可能希望跨多个路由使用单个模型和策略配置。 您可以首先发送`PUT`请求，通过以下方式将模型和策略配置添加到插件的元数据中：

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

然后在某些路由上启用相同的配置，使用管理员API发送请求：

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

这将添加插件元数据配置到路由中。 您也可以轻松地更新插件元数据配置，通过更新模型和政策配置重新发送插件元数据请求， 插件将使用插件元数据自动更新所有路由。

## 应用案例

- 此插件的主要用途是在您的 API 中执行授权。 您可以轻松地将此插件添加到您正在使用的任何API路径中，并使用您的授权模型和策略配置。
- 如果您想要为您的所有API使用单一授权模式，您可以使用全局模式/策略方法。 这使得更新策略对所有路由都很容易，因为您只需要更新元数据等。
- 如果你想对每个不同的路由使用不同的模型，你可以使用路由方法。 当不同的 API 路由拥有不同的用户权限时，这是有用的。 当您处理更大的策略时，您也可以使用这个策略，因为当过滤多条路由时，它会使授权变得更快。
