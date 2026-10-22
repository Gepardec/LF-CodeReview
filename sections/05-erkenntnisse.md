---
layout: quadrants
---

# Erkenntnisse

::one::

### Anforderung ist der Hebel
- Qualität vom Code Review hängt stark von der Qualität der Anforderung ab
- Ohne klares Ticket nur generische Findings
- Jira-Anbindung (MCP) macht den Unterschied

::two::

### Gute Ergänzung zum eigenen Review
- Manchmal übersieht man selbst Sachen
- KI Review als Grundlage für eigenen Review

::three::

### Setup/Verwendung
- Man bekommt ziemlich schnell ein Ergebnis
- Das Setup benötigt Zeit zum Refinen, damit der PR so funktioniert wie erwartet.
- Reviews sind nicht deterministisch (gleicher PR liefert wechselnde Findings)
- Tools reagieren sehr unterschiedlich auf Repo-Regeln & Guidelines

::four::
### Empfehlung
- Lokal vor dem PR: **IntelliJ AI Assistant** mit Rules im Repo + Atlassian MCP
- Im PR: Copilot/Greptile/CodeRabbit als Ergänzung
  - Wenn im Projekt bereits Github verwendet wird, **Github Copilot** verwenden um kein neues Tool zu benötigen
- Immer zusätzlich menschliches Review, kein Ersatz

<!-- Owner: ganzes Team -->

