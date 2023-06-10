---
title: Le serveur Casbin est lancé !
author: Helong Zhang
authorTitle: Mainteneur de Casbin
authorURL: "http://github.com/BetaCat0"
authorImageURL: "https://avatars.githubusercontent.com/BetaCat0"
---

Certains de nos clients demandent si Casbin peut être utilisé comme un service au lieu d'une bibliothèque. La réponse est **OUI**. Aujourd'hui, nous avons lancé le projet [Casbin Server](https://github.com/casbin/casbin-server) en tant que solution concrète pour **Le contrôle d'accès en tant que service**.

**Le serveur Casbin** est en cours de développement par notre équipe de base. Il a plusieurs caractéristiques :

- Purement développé à Golang.
- Peut gérer des milliers d'instances Casbin, de sorte que vous pouvez déplacer la logique d'application de la politique de plusieurs services vers un seul serveur Casbin.
- **gRPC** est utilisé pour communiquer avec le serveur Casbin. Nous envisageons également d'ajouter le support **RESTful** dans un avenir proche.
- Un portail administrateur web convivial est fourni aux administrateurs non-développeurs pour gérer tous les détails tels que les instances, les modèles, les politiques de stockage et l'équilibrage de charge.



Le code source est hébergé sur GitHub : https://github.com/casbin/casbin-server

Tous les problèmes ou demandes de fusion sont les bienvenus :)
