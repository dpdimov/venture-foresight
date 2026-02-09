# Venture Foresight

Interactive tools for strategic foresight, venture discovery, and navigating uncertainty.

Each tool is a self-contained, single-file HTML application — no frameworks, no build dependencies beyond Node.js for the copy step. Data persists in the browser via localStorage.

## Tools

| Tool | Description |
|------|-------------|
| **Problem-Solution Fit** | Define market problems with diagnostic sliders (urgency, market coverage), then map solution components with effectiveness and advantage ratings. Includes scatter-plot visualisations. |
| **Customer Persona** | Build detailed persona cards with goals, frustrations, behaviours, and day-in-the-life narratives. |
| **Futures Wheel** | Explore cascading implications of a trend across three rings of effects, with tree and radial SVG views. |
| **Scenario Planning** | Define two uncertainty axes, then develop four narrative scenarios in a 2×2 matrix with signals, implications, and strategic responses. |
| **Cone of Plausibility** | Map futures across concentric zones — projected, probable, plausible, possible, preposterous — and position a preferred future. |
| **Futures Triangle** | Analyse the interplay of three forces: push of the present, pull of the future, and weight of the past, with strength sliders per factor. |
| **Future Readiness** | Self-assess across four dimensions (uncertainty tolerance, systems awareness, agency orientation, temporal flexibility) with a radar chart visualisation. |
| **Causal Layered Analysis** | Unpack an issue through four layers — litany, systemic causes, worldview, myth/metaphor — then reimagine from the bottom up. Iceberg-style SVG diagram. |

## Getting Started

Preview locally:

```bash
npx serve .
```

## Build & Deploy

Source files live in `static/*/`. The build script copies them to root-level directories for Vercel deployment:

```bash
npm run build
```

Vercel config expects `buildCommand: ""` and `outputDirectory: "."` — the built output is committed to the repo.

## Tech Stack

- Vanilla HTML / CSS / JavaScript (no frameworks)
- [Crimson Pro](https://fonts.google.com/specimen/Crimson+Pro) + [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3) (Google Fonts)
- SVG visualisations (hand-coded, no charting libraries)
- localStorage for persistence
- Export: PDF (via print) and JSON download

## Author

Dimo Dimov
