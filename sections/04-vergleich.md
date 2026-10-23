---
layout: default
---

# Vergleich

<style>
table { font-size: 0.7em; width: 100%; }
th, td { padding: 0.25rem 0.5rem !important; }
</style>

| | **Greptile** | **Copilot** | **CodeRabbit** | **IntelliJ AI** |
|---|---|---|---|---|
| Einsatz | PR + CLI | PR (GitHub) | PR + CLI | lokal in der IDE |
| Trigger | automatisch | automatisch | automatisch / Kommentar | manuell im Chat |
| Output | PR-Kommentare | Overview + Session Log | PR-Kommentare + Summary | nur IDE-Chat |
| Jira / MCP | Integration (beta) | Rovo MCP | Integration | Atlassian MCP |
| Steuerung | Custom Rules (teils ignoriert) | `copilot-instructions.md` + Skill | `.coderabbit.yaml` (kaum Effekt) | Rules im Repo |
| Schwäche | nicht deterministisch | Overview fix | Blackbox | kein PR-Kommentar |
| Kosten | 1$ pro Credit (1 Review mind. 1 Credit)| Copilot-Seat | 24$ | AI-Assistant-Lizenz (ca. 1 Credit/Review) |

<!-- Owner: Thomas -->
