---
layout: quadrants
---

# Was kann CodeRabbit?

::one::

### PR-Review
Zusammenfassung, Ablaufdiagramme und Inline-Kommentare direkt im PR, plus eigene Web-UI.

::two::

### Projektkontext
Bezieht Guidelines, Learnings, Issue-Tracker und MCP ein.

::three::

### CI-Analyse
Analysiert CI-Fehler und schlägt Fixes vor.

::four::

### Lokal
Per **CLI** auch lokal vor dem Push nutzbar.

---
layout: two-cols-header
---

# CodeRabbit: Aufsetzen & Bedienung

::left::

### Setup
1. Repos im WebUI freigeben
2. `.coderabbit.yaml` ins Repo-Root legen<br><span class="text-xs opacity-70">(muss im Feature-Branch liegen)</span>
3. Integrationen wie Jira/MCP in der Web-UI verbinden

### CLI Review

```bash
cr auth login            # Einmalig anmelden
cr --base develop        # Branch gegen develop prüfen
cr --type uncommitted    # Nur lokale Änderungen
```

::right::

### PR Review
- **Automatisch** bei neuen PRs und Push
- **Manuell** per PR-Kommentar

```text
@coderabbitai review        # nur neue Änderungen
@coderabbitai full review   # ganzer PR neu
@coderabbitai configuration
@coderabbitai resolve
```

Auf Inline-Kommentare antworten → Chat mit dem Bot

---
layout: default
---

# Pre-Merge-Checks

<div class="grid grid-cols-2 gap-4 mt-2 items-center">

<img
src="/coderabbit/Summary1.png"
class="mx-auto max-h-[400px] w-auto object-contain rounded shadow-lg"
/>

<img
src="/coderabbit/Summary2.png"
class="mx-auto max-h-[400px] w-auto object-contain rounded shadow-lg"
/>

</div>

---
layout: default
---

# Inline comments

<div class="flex justify-center items-center h-[420px]">

<img
src="/coderabbit/Comment.png"
class="max-h-[400px] w-auto object-contain rounded shadow-lg"
/>

</div>

---
layout: default
class: '!pt-4'
---

# Jira Integration

<div class="flex justify-center items-center h-[470px]">

<img
src="/coderabbit/Jira.png"
class="max-h-[460px] w-auto object-contain rounded shadow-lg"
/>

</div>

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
- Oberflächliche Tiefe
- Jira-Abgleich nur auf Zuruf


