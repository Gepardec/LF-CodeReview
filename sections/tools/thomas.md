---
layout: quadrants
---

# IntelliJ AI Assistant

::one::

### MCP Configuration
- direkt in den IntelliJ Settings
  - Settings -> Tools -> AI Assistant -> Model Context Protocol (MCP)
  - Add -> As JSON (Beispiel-Config in `docs/ai/`)
- Login per OAuth im Browser beim ersten Jira-Call

::two::

### Rules im Repo
- `.aiassistant/rules/code-review.md`
  - Aufruf im Chat: `@rule:code-review`
    - Jira-Key aus Branch / Commits (z.B. LAKWYC-3)
    - Anforderungen via MCP laden
    - Coding conventions von `coding-conventions.md` laden
    - Ausgabe Format der Findings definiert

::three::

### Ablauf
1. Feature-Branch auschecken
2. `@rule:code-review` im AI Chat aufrufen
3. Findings prüfen
4. Findings selbst fixen oder mittels AI Chat fixen lassen

::four::



<!-- Owner: Thomas L -->
