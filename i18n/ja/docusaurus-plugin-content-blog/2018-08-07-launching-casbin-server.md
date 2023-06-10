---
title: Casbin Server が起動しました！
author: Helong Zhang
authorTitle: カスビンメンテナー
authorURL: "http://github.com/BetaCat0"
authorImageURL: "https://avatars.githubusercontent.com/BetaCat0"
---

一部のお客様は、Casbinがライブラリの代わりにサービスとして使用できるかどうかを尋ねています。 の答えは **はい** です。 本日、 [Casbin Server](https://github.com/casbin/casbin-server) プロジェクトを、 **Access Control as a Service** の具体的なソリューションとして開始しました。

**Casbin Server** はコアチームによって積極的に開発されています。 いくつかの機能があります:

- 純粋にゴランで開発されました。
- 数千のCasbinインスタンスを管理できるため、ポリシー執行ロジックを複数のサービスから1つのCasbinサーバーに移動できます。
- **gRPC** はCasbin Server との通信に使用されます。 また、近い将来、 **RESTful** のサポートを追加することも検討しています。
- 開発者以外の管理者は、Casbinインスタンス、モデル、ポリシーストレージ、ロードバランシングなどのすべての詳細を管理するためのフレンドリーなWeb管理者ポータルが提供されています。



ソースコードは GitHub でホストされています: https://github.com/casbin/casbin-server

問題やプルリクエストは歓迎します:)
