---
title: Casbin 服务器已启动！
author: Helong Zhang
authorTitle: Casbin 维护者
authorURL: "http://github.com/BetaCat0"
authorImageURL: "https://avatars.githubusercontent.com/BetaCat0"
---

我们的一些客户询问Casbin是否可以用作服务而不是图书馆。 答案是 **当然可以**。 今天，我们启动了 [Casbin Server](https://github.com/casbin/casbin-server) 项目，作为 **访问控制作为服务** 的具体解决方案。

**Casbin Server** 正在由我们的核心团队积极开发。 它有以下几个特点：

- 纯粹是由Golang开发的。
- 可以管理数以千计的 Casbin 实例，这样您就可以将策略执行逻辑从多个服务移动到一个Casbin 服务器。
- **gRPC** 被用于与 Casbin 服务器通信。 我们还考虑在不久的将来添加 **RESTTful** 支持。
- 为非开发者管理员提供了一个友好的网站管理员门户，用于管理所有细节，如Casbin实例、模型、政策存储和负载平衡。



源代码托管在 GitHub 上： https://github.com/casbin/casbin-server

欢迎任何问题或合并请求 :)
