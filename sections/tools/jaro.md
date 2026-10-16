---
layout: quadrants
---

# CodeRabbit (Jaro)

::one::

### Was ist es?
KI-Reviewer für Pull Requests: Summary, Walkthrough und Inline-Kommentare direkt im PR, zusätzlich als **CLI**. Das **Modell ist nicht wählbar**.
::two::

### Konfigurierbarkeit
`.coderabbit.yaml` und Guidelines im Markdown-Format hatten **kaum spürbaren Effekt**. Das Review folgt einem festen Muster.

::three::

### MCP Anbindung möglich
Jira MCP konnte aber **nicht** im Review Prozess verwendet werden. Erst ein expliziter PR-Kommentar hat eine Prüfung ausgelöst.

::four::

### 🔍 Review-Tiefe
Es wurden **keine Tests ausgeführt**. Viele Kommentare waren generisch und unabhängig vom Issue, das Review blieb eher oberflächlich.

---
layout: two-cols-header
---

# CodeRabbit: Aufsetzen & Bedienung

::left::

### Setup
1. Repos freigeben im WebUI freigeben
2. `.coderabbit.yaml` ins Repo-Root legen<br><span class="text-xs opacity-70">(muss im Feature-Branch liegen)</span>
3. Integrationen wie Jira/MCP in der Web-UI verbinden

### Review auslösen
- **Automatisch** bei neuen PRs und Push
- **Manuell** per PR-Kommentar

```text
@coderabbitai review        # nur neue Änderungen
@coderabbitai full review   # ganzer PR neu
```

::right::

### Weitere PR-Commands

```text
@coderabbitai pause | resume
@coderabbitai resolve
@coderabbitai configuration
@coderabbitai generate unit tests
@coderabbitai help
```

Auf Inline-Kommentare antworten → Chat mit dem Bot

### CLI (lokal vor dem Push)

```bash
cr auth login --region eu
cr --base develop   # Review der Änderungen
```

---
layout: two-cols-header
---

# Fazit: CodeRabbit

Ein vorgegebenes Gerüst: Konfiguration ist möglich, hat im Review aber **wenig Gewicht**.

::left::

### Stärken
- Einfache GitHub-Integration, dazu die CLI
- Hilfreiche PR-Zusammenfassungen

::right::

### Schwächen
- Kaum steuerbar, eine Blackbox-Pipeline
- Keine Tests, oberflächliche Tiefe
- Jira-Abgleich nur auf Zuruf

<div class="mt-8 text-sm opacity-80">

**Empfehlung:** als Ergänzung zum menschlichen Review einsetzen, nicht als Ersatz für Tests oder die fachliche Prüfung.

</div>