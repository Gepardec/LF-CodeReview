# AI Code Review – Slides

Slidev-Deck im Gepardec-Theme ([`@gepardec/slidev-theme-gepardec`](https://github.com/Gepardec/slidev-theme-gepardec)).

## Loslegen

```bash
npm install
npm run dev        # Live-Vorschau im Browser
npm run export     # PDF exportieren
npm run build      # statische Website in dist/
```

## Wer bearbeitet was

`slides.md` setzt die Abschnitte nur zusammen (Cover, Agenda, Zwischenfolien, Abschluss).
Inhalte bitte in der eigenen Datei unter `sections/` pflegen – so gibt es keine Merge-Konflikte.

| Datei                                | Folie                    | Owner     |
| ------------------------------------ | ------------------------ | --------- |
| `sections/01-ausgangssituation.md`   | Ausgangssituation        | Thomas L  |
| `sections/02-lernziele.md`           | Lernziele                | Thomas L  |
| `sections/tools/greptile.md`         | Greptile                 | TODO      |
| `sections/tools/aleks.md`            | Tool von Aleks           | Aleks     |
| `sections/tools/chiara.md`           | Tool von Chiara          | Chiara    |
| `sections/tools/jaro.md`             | Tool von Jaro            | Jaro      |
| `sections/tools/thomas.md`           | Tool von Thomas          | Thomas L  |
| `sections/04-demo.md`                | Demo                     | TODO      |
| `sections/05-erkenntnisse.md`        | Erkenntnisse             | Team      |

Offene Stellen sind mit `TODO` markiert: `grep -rn TODO slides.md sections/`

## Layouts

- `default` – Titel + `//`-Bullets (Ausgangssituation, Lernziele, Tool Aleks)
- `quadrants` – Titel + 4 Blöcke `::one::` … `::four::`, jeweils mit `### Überschrift` (Tool-Folien, Erkenntnisse)
- `section` – Zwischenfolie mit Gepard (Evaluierte Technologien, Demo)
- `statement` – ein großer Satz, `**fett**` wird gelb (Abschlussfolie)

Mehr Folien in einem Abschnitt: einfach in derselben Datei mit `---` trennen.
Bilder (Screenshots etc.) nach `public/` legen und mit `![](/datei.png)` einbinden;
Dateinamen mit Abschnitt präfixen, z. B. `public/jaro-dashboard.png`.

Sprechernotizen: HTML-Kommentar am Ende einer Folie (`<!-- ... -->`), sichtbar im Presenter-Modus.

## Hinweis zu `vite.config.ts`

Slidev 53 / Vite 8 bricht beim Build am CSS-Minifier ab (Fehler in Slidevs eigenem CSS,
nicht im Gepardec-Theme). `vite.config.ts` schaltet die CSS-Minifizierung ab – kann
entfernt werden, sobald Slidev das behebt.
