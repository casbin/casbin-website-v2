---
title: Casbin Server wird gestartet!
author: Helong Zhang
authorTitle: Casbin-Betreuer
authorURL: "http://github.com/BetaCat0"
authorImageURL: "https://avatars.githubusercontent.com/BetaCat0"
---

Einige unserer Kunden fragen, ob Casbin als Service anstelle einer Bibliothek genutzt werden kann. Die Antwort lautet **JA**. Heute haben wir das [Casbin Server](https://github.com/casbin/casbin-server) Projekt als konkrete Lösung für **Access Control as a Service** gestartet.

**Casbin Server** wird von unserem Kernteam aktiv weiterentwickelt. Es hat mehrere Eigenschaften:

- Rein entwickelt in Golang.
- Kann tausende Casbin-Instanzen verwalten, so dass Sie die Logik der Durchsetzung von Richtlinien von mehreren Diensten auf einen Casbin-Server umstellen können.
- **gRPC** wird verwendet, um mit Casbin Server zu kommunizieren. Wir erwägen auch, in naher Zukunft den **RESTful** Support hinzuzufügen.
- Ein benutzerfreundliches Web-Administratorportal für nicht-Entwickler Administratoren zur Verwaltung aller Details wie Casbin-Instanzen, Modelle, Richtlinienspeicherung und Lastausgleich.



Der Quellcode wird auf GitHub gehostet: https://github.com/casbin/casbin-server

Alle Tickets oder Pull-Requests sind willkommen :)
