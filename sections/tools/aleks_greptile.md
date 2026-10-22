---
layout: default
---

# Greptile

- KI-Code-Review: PRs (GitHub, GitLab, Bitbucket u. a.) + lokal per CLI
- Repo-Graph: Dateien, Funktionen, Abhängigkeiten
- Output: PR-Kommentare, Terminal
- Lernen: Team-Feedback, Custom Rules
- Hosting: Cloud oder Self-Hosting (Enterprise)
- 22.000+ Teams (Brex, Nvidia, Substack)

<!-- Owner: Aleks -->

---
layout: default
---

# Greptile: Setup

- OAuth (GitHub, Google …)
- Freigabe pro Repo
- Vorschau des PR-Kommentars schon beim Einrichten


---
layout: default
---

# Greptile: Reviews

- Strenge und Confidence-Schwelle einstellbar
- Draft-PRs und Limit für geänderte Dateien
- Auto-Re-Review bei neuen Commits
- Analytics-Dashboard (Reviews, gefundene Bugs)

---
layout: default
---

# Greptile: Memory / Kontext

- Custom Rules (Dashboard, `.greptile/rules.md`):
- Gleiche Regel in `CODING_CONVENTIONS.md` wurde ignoriert
- Cross-Repo Context
- Lernen: 👍/👎 + Antworten
- `@greptileai` mit Regel als Antwort → sofort Custom Rule
- Knowledge Base (beta): bei uns leer geblieben
- Jira (beta): liest Tickets automatisch (Key aus Branch, Titel, Text), zitiert sie aber nur, wenn ein Finding darauf aufbaut

---
layout: default
---

# Greptile: T-REX (beta)

<div class="flex gap-6 items-start">
<div class="flex-1">

- Laut Greptile: App in Sandbox starten, PR zur Laufzeit validieren, Logs im PR
- **Anfangs:** 3 von 4 Läufen blockiert (kein JDK, Java 21 / Maven Wrapper)
- Lief nur, wenn der Beweis ohne Java auskam (Repo-Check statt Maven-Test), unabhängig vom Diff
- **Seit Mitte Oktober:** installiert selbst ein JDK, führt Quarkus-Tests aus, aber nicht jeder Agent: im selben PR ein Finding mit JDK, eines weiter blockiert
- Findings mit Vorher/Nachher-Test belegt, Artefakte verlinkt
- Sandbox-Konfiguration: keine Doku

</div>
<img src="/greptile/summary-trex-blocked.png" alt="Greptile-Summary mit „T-Rex validation blocked“" class="w-72 rounded shadow" />
</div>

---
layout: default
---

# Greptile: Ablauf eines Reviews

<div class="flex gap-6 items-start">
<div class="flex-1">

- 👀 = PR erkannt, 👍 = Review fertig
- Summary: Confidence-Score, T-REX, letzter Commit
- Abschnitte ein-/ausblendbar, Reihenfolge fix
- Inline-Findings mit Fix-Prompt (Claude, Codex, Cursor, Conductor)

</div>
<img src="/greptile/inline-finding.png" alt="Inline-Finding von Greptile mit „Fix in Claude“-Button" class="w-80 rounded shadow" />
</div>

---
layout: default
---

# Greptile: Beobachtungen 👍

- Relevante Bugs, z. B. Optimistic Locking: 500 statt 409
- Rückfragen: klare Antwort, was geprüft wurde und was nicht
- 16/16 Findings echt, kein False Positive

---
layout: default
---

# Greptile: Beobachtungen 👎

- **Nicht deterministisch:** gleicher Commit, 4 PRs → 1 / 1 / 4 / 5 Findings
  - Locking-Bug nur im 1. Lauf
  - Mit Regel: Ticket-Abschnitt, fehlendes Ticket gemeldet, aber verletztes Akzeptanzkriterium als „beabsichtigt“ durchgewunken
  - Auf Nachfrage im PR: gleiches Kriterium korrekt als Verstoß erkannt

---
layout: default
---

# Greptile: Severity

- Herunterstufen: leicht. Hochstufen: kaum
- Manuelle Änderung: nicht in Dashboard-Tabelle

<div class="flex flex-col gap-4 mt-6 items-start">
<img src="/greptile/severity-reply.png" alt="Greptile lehnt Hochstufung auf P1 ab und bleibt bei P3" class="w-96 rounded shadow" />
<img src="/greptile/severity-dashboard.png" alt="Dashboard zeigt das Finding weiterhin als P1" class="w-[32rem] rounded shadow" />
</div>

---
layout: default
---

# Greptile: ⚠️ Achtung – „Fix in Claude“-Deep-Link

- Öffnet Claude Code im Home-Verzeichnis (`--deep-link-cwd=/Users/<name>`)
- Klick: nur Prompt vorausgefüllt, keine Ausführung
- „Trust this folder“ → Lesezugriff auf ganzes Home inkl. `~/.ssh`, `~/.aws`
- **Empfehlung:** Prompt kopieren, im Repo-Ordner starten


---
layout: default
---

# Greptile: Preise

| | **Starter** | **Pro** | **Enterprise** |
|---|---|---|---|
| Preis | kostenlos | $30 / Seat / Monat | auf Anfrage |
| Für | 1 aktive:r Entwickler:in | Teams | große Organisationen |
| Credits | 50 / Monat | 50 / Seat / Monat, +$1 / Credit | individuell |
| Extras | unbegrenzte Repos | Custom Rules, Integrationen, 14 Tage Trial | Self-Hosting, SSO/SAML, GitHub Enterprise |

- **Seat:** Entwickler:in mit Review im Abrechnungszeitraum
- **Credits/Review:** Base 1, Plus 3, Apex 10
- **Rabatte:** Open Source gratis, Startups (vor Series A) −50 %

<!-- Quelle: greptile.com/pricing, Stand Oktober 2026 -->
