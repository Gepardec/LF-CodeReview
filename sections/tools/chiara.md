---
layout: quadrants
---

# GitHub Copilot mit RovoMCP

::one::

### MCP Configuration
- direkt in den Repo Settings
  - Settings -> Copilot -> MCP servers
- Standard-Config aus der Atlassian Doku
- Atlassian API-Key nötig -> Service User!

::two::

### copilot-instructions.md
- Verwendung des **code-review** Agent Skills
- Anweisungen was pro Review gemacht werden soll
  - Jira-Anforderungen prüfen
  - Technisches Review durchführen
  - Coding Guidelines prüfen

::three::

### code-review Skill
- gibt vor:
  - welcher MCP Server -> atlassian-rovo-mcp
  - welche Tickets relevant sind -> LAKWYC-*
  - guardrails -> lesender Zugriff, erlaubte Jira cloudId

::four::

### WICHTIG
- Copilot-Seat f. Session-Log
- PR Overview nicht veränderbar
- Session Log lässt eigenes Layout zu
- API-Key v. Service-User statt personal

<!-- Owner: Chiara -->
