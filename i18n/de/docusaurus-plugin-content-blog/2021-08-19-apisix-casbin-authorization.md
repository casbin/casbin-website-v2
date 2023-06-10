---
title: Autorisierung in APISIX mit Casbin
author: Rushikesh Tote
authorTitle: Mitglied von Casbin
authorURL: "http://github.com/rushitote"
authorImageURL: "https://avatars.githubusercontent.com/rushitote"
---

## Einführung

[APISIX](https://apisix.apache.org/) ist ein hochleistungsfähiges und skalierbares natives API Gateway basierend auf Nginx und etc. Es ist ein Open-Source-Projekt der Apache Software Foundation. Außerdem ist das, was APISIX so gut macht, die Unterstützung vieler großartiger Plugins, die verwendet werden könnten, um Funktionen wie Authentifizierung zu implementieren, überwachen, routing, etc. Und die Tatsache, dass Plugins in APISIX heiß neu geladen werden (ohne Neustart) macht es sehr dynamisch.

Bei Verwendung von APISIX kann es jedoch zu Szenarien kommen, bei denen Sie möglicherweise komplexe Autorisierungslogik in Ihrer Anwendung hinzufügen möchten. Hier könnte Ihnen authz-casbin helfen authz-casbin ist ein APISIX-Plugin, das auf [Lua Casbin](https://github.com/casbin/lua-casbin/) basiert, das eine leistungsstarke Autorisierung basierend auf verschiedenen Zugriffskontrollmodellen ermöglicht. [Casbin](/) is an authorization library which supports access control models like ACL, RBAC, ABAC. Ursprünglich in Go geschrieben, wurde es in viele Sprachen portiert und Lua Casbin ist die Lua-Implementierung von Casbin. Die Entwicklung von authz-casbin startete, als wir ein neues Plugin für die Autorisierung im APISIX-Repository ([#4674](https://github.com/apache/apisix/issues/4674)), dem die Kernmitglieder zugestimmt haben, vorschlugen. Und nach den hilfreichen Bewertungen, die zu einigen wesentlichen Änderungen und Verbesserungen geführt haben, wurde die PR ([#4710](https://github.com/apache/apisix/pull/4710)) schließlich zusammengeführt.

In diesem Blog, wir werden das authz-casbin Plugin verwenden, um zu zeigen, wie Sie ein Autorisierungsmodell basierend auf der Role Based Access Control (RBAC) in APISIX implementieren können.

**HINWEIS**: Sie müssen ein anderes Plugin oder einen benutzerdefinierten Workflow verwenden, um den Benutzer zu authentifizieren, da Casbin nur die Autorisierung und keine Authentifizierung durchführt.

## Erstellen eines Modells

Das Plugin verwendet drei Parameter, um jede Anfrage zu autorisieren - Subjekt, Objekt und Aktion. Betreff ist hier der Wert des Benutzernamen-Headers, der so etwas wie `[Benutzername: alice]` sein könnte. Dann ist das Objekt der URL-Pfad, auf den zugegriffen wird und die Aktion ist die Anfragemethode, die verwendet wird.

Nehmen wir an, wir wollen ein Modell mit drei Ressourcen an den Pfaden erstellen - `/`, `/res1` und `/res2`. Und wir wollen ein Modell wie dies:

![bild](https://i.imgur.com/7BlvBNR.png)

Dies würde bedeuten, dass alle Benutzer (`*`) wie zum Beispiel `jack` auf die Homepage zugreifen können (`/`). Und Benutzer mit `admin` Berechtigungen wie `alice` und `bob` können auf alle Seiten und Ressourcen zugreifen (wie `res1` und `res2`). Lass uns Benutzer ohne Administratorrechte auf nur `GET` Anfragemethode beschränken. Für dieses Szenario könnten wir das Modell definieren als:

```ini
[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, handeln

[role_definition]
g = _, _

[policy_effect]
e = irgendwo (p. ft == allow))

[matchers]
m = (g(r.sub, p.sub) || keyMatch(r.sub, p. ub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p.act)
```

## Richtlinien erstellen

Aus dem oben genannten Szenario wäre die Politik folgende:

```csv
p, *, /, GET
p, admin, *, *
g, alice, admin
g, bob, admin
```

Der Matcher des Modells bedeutet:

1. `(g(r.sub, p.sub) || keyMatch(r.sub, p. ub))`: Entweder hat der Betreff des Antrags eine Rolle als Betreff der Richtlinie, oder der Betreff des Antrags passt in `keyMatch`. `keyMatch` ist in Funktion in Lua Kasbin Sie können einen Blick auf die Beschreibung der Funktion werfen und mehr solche Funktionen, die hier [nützlich sein könnten](https://github.com/casbin/lua-casbin/blob/master/src/util/BuiltInFunctions.lua).
2. `keyMatch(r.obj, p.obj)`: Das Objekt der Anfrage entspricht dem Objekt der Richtlinie (URL-Pfad hier).
3. `keyMatch(r.act, p.act)`: Die Aktion des Requests stimmt mit der Aktion der Richtlinie überein (HTTP-Request-Methode hier).

## Aktiviere das Plugin auf der Route

Sobald Sie das Modell und die Richtlinie erstellt haben, können Sie es auf einer Route mit der APISIX Admin API aktivieren. Um es mit Modell- und Richtlinien-Datei-Pfaden zu aktivieren:

```sh
curl http://127.0.0. :9080/apisix/admin/routes/1 -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '
{
    "plugins": {
        "authz-casbin": {
            "model_path": "/path/to/model". onf",
            "policy_path": "/path/to/policy. sv",
            "Benutzername": "Benutzername"
        }
    },
    "upstream": {
        "nodes": {
            "127. .0.1:1980": 1
        },
        "type": "roundrobin"
    },
    "uri": "/*"
}'
```

Hier ist das Feld Benutzername der Headername, den Sie im Betreff übergeben werden. Wenn Sie zum Beispiel den Benutzernamen als `Benutzer übergeben werden: Alice`, würden Sie `"Benutzername": "Benutzer"` verwenden.

Um Modell-/Richtlinien-Text anstelle von Dateien zu verwenden, können Sie stattdessen das `-Modell` und `Richtlinie` Felder verwenden:

```sh
curl http://127.0.0. :9080/apisix/admin/routes/1 -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '
{
    "plugins": {
        "authz-casbin": {
            "model": "[request_definition]
            r = sub, obj, Akt

            [policy_definition]
            p = sub, obj, act

            [role_definition]
            g = _, _

            [policy_effect]
            e = irgendwo (p. ft == allow))

            [matchers]
            m = (g(r. ub, p. ub) || keyMatch(r.sub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r.act, p. ct)",

            "policy": "p, *, /, GET
            p, admin, *, *
            g, alice, admin
            g, bob, admin",

            "Benutzername": "Benutzername"
        }
    },
    "upstream": {
        "nodes": {
            "127. .0.1:1980": 1
        },
        "type": "roundrobin"
    },
    "uri": "/*"
}'
```

## Aktiviere das Plugin mit einem globalen Modell/Richtlinie

Es kann Situationen geben, in denen Sie ein einzelnes Modell und die Richtlinien-Konfiguration über mehrere Routen hinweg verwenden möchten. Sie können dies tun, indem Sie zuerst eine `PUT` Anfrage senden, um das Modell und die Richtlinien-Konfiguration zu den Metadaten des Plugins hinzuzufügen von:

```sh
curl http://127.0.0. :9080/apisix/admin/plugin_metadata/authz-casbin -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -i -X PUT -d '
{
"model": "[request_definition]
r = sub, obj, act

[policy_definition]
p = sub, obj, act

[role_definition]
g = _, _

[policy_effect]
e = irgendwo (p. ft == allow))

[matchers]
m = (g(r.sub, p.sub) || keyMatch(r. ub, p.sub)) && keyMatch(r.obj, p.obj) && keyMatch(r. ct, p.act)",

"policy": "p, *, /, GET
p, admin, *, *
g, alice, admin
g, bob, admin"
}'
```

Und um dann die gleiche Konfiguration auf einer Route zu aktivieren, senden Sie eine Anfrage mit der Admin API:

```sh
curl http://127.0.0. :9080/apisix/admin/routes/1 -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '
{
    "plugins": {
        "authz-casbin": {
            "username": "username"
        }
    },
    "upstream": {
        "nodes": {
            "127. .0.1:1980": 1
        },
        "type": "roundrobin"
    },
    "uri": "/route1/*"
}'
```

Dies wird die Plugin-Metadatenkonfiguration zur Route hinzufügen. Sie können die Metadatenkonfiguration des Plugins auch ganz einfach aktualisieren, indem Sie die Anfrage an die Metadaten des Plugins mit aktualisiertem Modell und Richtlinien-Konfiguration erneut schicken, das Plugin aktualisiert automatisch alle Routen mit dem Plugin Metadata.

## Verwende Fälle

- Der primäre Anwendungsfall dieses Plugins wäre die Implementierung der Autorisierung in Ihren APIs. Sie können dieses Plugin ganz einfach auf jeder API-Route hinzufügen, die Sie mit Ihrem Autorisierungsmodell und Ihrer Richtlinien-Konfiguration verwenden.
- Wenn Sie ein einziges Autorisierungsmodell für alle Ihre APIs haben möchten, können Sie globale Modelle/Richtlinien-Methode verwenden. Dies erleichtert die Aktualisierung der Richtlinie für alle Routen, da Sie nur die Metadaten in etcd aktualisieren müssen.
- Wenn Sie für jede Route ein anderes Modell verwenden möchten, können Sie die Routenmethode verwenden. Dies ist hilfreich, wenn verschiedene API-Routen unterschiedliche Benutzerberechtigungen haben. Sie können dies auch verwenden, wenn Sie sich mit größeren Richtlinien befassen, da es die Autorisierung beschleunigen wird, wenn Sie in mehrere Routen gefiltert werden.
