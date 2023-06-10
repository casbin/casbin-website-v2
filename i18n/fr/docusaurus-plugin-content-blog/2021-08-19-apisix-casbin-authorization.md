---
title: Autorisation dans APISIX à l'aide de Casbin
author: Rushikesh Tote
authorTitle: Membre de Casbin
authorURL: "http://github.com/rushitote"
authorImageURL: "https://avatars.githubusercontent.com/rushitote"
---

## Introduction

[APISIX](https://apisix.apache.org/) est une passerelle native de nuage haute performance et évolutive basée sur Nginx et etcd. C'est un projet open source de la Fondation du logiciel Apache. En plus de cela, ce qui rend APISIX si bon est le support de nombreux plugins qui pourraient être utilisés pour implémenter des fonctionnalités comme l'authentification, surveillance, routage, etc. Et le fait que les plugins d'APISIX soient rechargés à chaud (sans redémarrage) le rend très dynamique.

Mais lorsque vous utilisez APISIX, il peut y avoir des scénarios où vous pourriez vouloir ajouter une logique d'autorisation complexe dans votre application. C'est là que authz-casbin pourrait vous aider, authz-casbin est un plugin APISIX basé sur [Lua Casbin](https://github.com/casbin/lua-casbin/) qui permet une autorisation puissante basée sur différents modèles de contrôle d'accès. [Casbin](/) est une bibliothèque d'autorisation qui prend en charge les modèles de contrôle d'accès comme ACL, RBAC, ABAC. Initialement écrit en Go, il a été porté dans de nombreuses langues et Lua Casbin est l'implémentation Lua de Casbin. Le développement de authz-casbin a commencé quand nous avons proposé un nouveau plugin d'autorisation dans le dépôt APISIX ([#4674](https://github.com/apache/apisix/issues/4674)) auquel les membres du noyau se sont mis d'accord. Et après les critiques utiles qui ont conduit à des changements et améliorations majeurs, le PR (<a bref="https://github.com/apache/apisix/pull/4710">#4710</a>) a finalement été fusionné.

Dans ce blog, nous utiliserons le plugin authz-casbin pour montrer comment vous pouvez implémenter un modèle d'autorisation basé sur le contrôle d'accès basé sur les rôles (RBAC) dans APISIX.

**NOTE**: Vous devrez utiliser un autre plugin ou un workflow personnalisé pour l'authentification de l'utilisateur puisque Casbin ne fera que l'autorisation et non l'authentification.

## Création d'un modèle

Le plugin utilise trois paramètres pour autoriser toute requête - sujet, objet et action. Ici, le sujet est la valeur de l'en-tête du nom d'utilisateur, qui pourrait être quelque chose comme `[username: alice]`. Ensuite, l'objet est le chemin URL auquel on accède et l'action est la méthode de requête utilisée.

Disons que nous voulons créer un modèle avec trois ressources dans les chemins - `/`, `/res1` et `/res2`. Et nous voulons avoir un modèle comme celui-ci :

![image](https://i.imgur.com/7BlvBNR.png)

Cela signifierait que tous les utilisateurs (`*`) comme par exemple `jack` peuvent accéder à la page d'accueil (`/`). Et les utilisateurs avec les permissions `admin` comme `alice` et `bob` peuvent accéder à toutes les pages et toutes les ressources (comme `res1` et `res2`). Aussi, limitons les utilisateurs qui n'ont pas les permissions d'administration à utiliser uniquement la méthode de requête `GET`. Pour ce scénario, nous pourrions définir le modèle comme:

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

## Créer une politique

À partir du scénario ci-dessus, la politique serait:

```csv
p, *, /, GET
p, admin, *, *
g, alice, admin
g, bob, admin
```

La correspondance du modèle signifie :

1. `(g(r.sub, p.sub) || keyMatch(r.sub, p. ub))`: Soit le sujet de la requête a un rôle en tant que sujet de la règle ou celui de la requête correspond au sujet de la règle dans `keyMatch`. `keyMatch` est inclus dans la fonction Lua Casbin, vous pouvez jeter un œil à la description de la fonction et plus de fonctions qui pourraient être utiles [ici](https://github.com/casbin/lua-casbin/blob/master/src/util/BuiltInFunctions.lua).
2. `keyMatch(r.obj, p.obj)`: l'objet de la requête correspond à l'objet de la politique (chemin URL ici).
3. `keyMatch(r.act, p.act)`: l'action de la requête correspond à l'action de la politique (méthode de requête HTTP ici).

## Activation du plugin sur la route

Une fois que vous avez créé le modèle et la politique, vous pouvez l'activer sur une route en utilisant l'API Admin APISIX. Pour l'activer en utilisant les chemins du modèle et des fichiers de régulation :

```sh
curl http://127.0.0. :9080/apisix/admin/routes/1 -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '
{
    "plugins": {
        "authz-casbin": {
            "model_path": "/path/to/model. onf",
            "policy_path": "/path/to/policy. sv",
            "username": "username"
        }
    },
    "amon": {
        "nodes": {
            "127. 0.1:1980": 1
        },
        "type": "roundrobin"
    },
    "uri": "/*"
}'
```

Ici, le champ nom d'utilisateur est le nom d'en-tête que vous utiliserez pour passer dans le sujet. Par exemple, si vous passez l'en-tête du nom d'utilisateur en tant qu'utilisateur `: alice`, vous utiliserez `"username": "user"`.

Pour utiliser le texte modèle/politique au lieu de fichiers, vous pouvez utiliser les champs `modèle` et `politique` à la place:

```sh
curl http://127.0.0. :9080/apisix/admin/routes/1 -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '
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
            e = quelque part (où (p. ft == allow))

            [matchers]
            m = (g(r. ub, p. ub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p. ct)",

            "polices": "p, *, /, GET
            p, admin, *, *
            g, alice, admin
            g, bob, admin",

            "username": "username"
        }
    },
    "amon": {
        "nodes": {
            "127. 0.1:1980": 1
        },
        "type": "roundrobin"
    },
    "uri": "/*"
}'
```

## Activer le plugin en utilisant un modèle/politique global

Il peut y avoir des situations où vous pourriez vouloir utiliser un modèle unique et une configuration de règles sur plusieurs routes. Vous pouvez le faire d'abord en envoyant une requête `PUT` pour ajouter le modèle et la configuration de la politique aux métadonnées du plugin par:

```sh
curl http://127.0.0. :9080/apisix/admin/plugin_metadata/authz-casbin -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -i -X PUT -d '
{
"modèle": "[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act

[role_definition]
g = _, _

[policy_effect]
e = quelque part (où (p. ft == allow))

[matchers]
m = (g(r.sub, p.sub) || keyMatch(r. ub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r. ct, p.act)",

"policy": "p, *, /, GET
p, admin, *, *
g, alice, admin
g, bob, admin"
}'
```

Et puis pour activer la même configuration sur une certaine route, envoyez une requête en utilisant l'API Admin :

```sh
curl http://127.0.0. :9080/apisix/admin/routes/1 -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '
{
    "plugins": {
        "authz-casbin": {
            "username": "username"
        }
    },
    "amon": {
        "nodes": {
            "127. 0.1:1980": 1
        },
        "type": "roundrobin"
    },
    "uri": "/route1/*"
}'
```

Ceci ajoutera la configuration des métadonnées du plugin à la route. Vous pouvez aussi facilement mettre à jour la configuration des métadonnées du plugin en renvoyant la demande vers les métadonnées du plugin avec la mise à jour du modèle et la configuration de la politique, le plugin mettra à jour automatiquement toutes les routes en utilisant les métadonnées du plugin.

## Cas d'utilisation

- Le cas d'utilisation principal de ce plugin serait l'implémentation de l'autorisation dans vos API. Vous pouvez facilement ajouter ce plugin sur n'importe quelle route API que vous utilisez avec votre modèle d'autorisation et la configuration de la politique.
- Si vous voulez avoir un modèle d'autorisation unique pour toutes vos API, vous pouvez utiliser la méthode du modèle global. Cela rend la mise à jour de la politique facile pour tous les itinéraires, car vous n'avez qu'à mettre à jour les métadonnées dans etcd.
- Si vous souhaitez utiliser un modèle différent pour chaque itinéraire, vous pouvez utiliser la méthode de l'itinéraire. Ceci est utile lorsque les différentes routes de l'API ont différents ensembles de permissions d'utilisateur. Vous pouvez également utiliser cela lorsque vous avez affaire à des politiques plus importantes, car cela rendra l’autorisation plus rapide lorsque filtrée sur plusieurs routes.
