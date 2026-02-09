# Venture Foresight Tools

Interactive web-based tools for entrepreneurial thinking, planning, and customer discovery. Deployed on Vercel.

## Project Structure

- `static/*/` — Static HTML tools (8 tools)
- `{tool-name}/` (root level) — **Built output** served by Vercel (do NOT edit directly)
- `shared.css` — Shared CSS variables and navigation styles
- `index.html` — Home page / navigation hub
- `build.js` — Build script (copies static dirs to root)

## Build & Deploy Workflow

**Critical**: Vercel serves built output from root-level directories, not from `static/`.

After changing any tool source in `static/*/`:
1. Commit the source changes
2. Run `npm run build`
3. Commit the rebuilt output (root-level `{tool-name}/` directory)
4. Push both commits

Preview locally: `npx serve .`

## Tools

| Tool | Source | Purpose |
|------|--------|---------|
| Problem-Solution Fit | `static/problem-solution-fit/` | Map market problems to solution components |
| Customer Persona | `static/customer-persona/` | Build detailed customer persona cards |
| Futures Wheel | `static/futures-wheel/` | Explore trend implications across 3 levels |
| Scenario Planning | `static/scenario-planning/` | 2x2 uncertainty matrix with scenario narratives |
| Cone of Plausibility | `static/cone-of-plausibility/` | Concentric zones from projected to preposterous futures |
| Futures Triangle | `static/futures-triangle/` | Three forces shaping the future |
| Future Readiness | `static/future-readiness/` | Self-assessment across 4 foresight dimensions |
| Causal Layered Analysis | `static/causal-layered-analysis/` | Four-layer deep analysis from litany to myth |

## Styling Conventions

- **Fonts**: Crimson Pro (headers/branding), Source Sans 3 (body/UI)
- **Theme**: Light — `#f8fafc` background, `#ffffff` cards, `#e2e8f0` borders
- **Text**: `#1e293b` primary, `#64748b` secondary
- **Accents**: Terracotta `#c05929`, Deep Teal `#2b6777`, Brown `#8b5e3c`, Olive `#6a7b4a`, Purple `#7c5295`
- **Google Fonts link**: `Crimson+Pro:wght@400;600;700&family=Source+Sans+3:wght@300;400;600`
- CSS variables defined in `shared.css`

## Navigation

Every tool page has a `<nav class="site-nav">` linking to all tools. When adding or removing a tool, update navigation in **all 9 files**:
- `index.html` (home page — add a tool card)
- 8 static tools: `static/*/index.html`

## Data Persistence

All tools use localStorage for saving work in progress. Each tool uses a unique storage key prefix.
