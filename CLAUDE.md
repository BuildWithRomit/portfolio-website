# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

Monorepo with two independent sub-projects:

- `frontend/` — React 19 + TypeScript + Vite SPA (single-page portfolio)
- `backend/` — FastAPI Python API (minimal; currently just health/root endpoints)

## Commands

### Frontend (`cd frontend`)

```bash
npm run dev        # start Vite dev server at http://localhost:5173
npm run build      # type-check (tsc -b) then Vite build → dist/
npm run lint       # ESLint
npm run preview    # serve the built dist/
```

### Backend (`cd backend`)

```bash
# Activate venv first (Windows PowerShell)
.\venv\Scripts\Activate.ps1

uvicorn app.main:app --reload   # dev server at http://localhost:8000
```

## Architecture

### Frontend

Single-page app with no router — all sections are rendered on one page, stacked vertically:

`App.tsx` → `Navbar`, then section components in order: `Hero → About → Experience → Education → Research → Projects → Music → Contact → Footer`

**Data layer:** All static content (experience, education, projects, music, socials, contact email) lives in [`frontend/src/data/portfolio.ts`](frontend/src/data/portfolio.ts). Update this file to change displayed content — no component edits needed for data-only changes.

**Theming:** CSS custom properties (`--bg`, `--text`, etc.) controlled by `ThemeContext`. The `dark` class on `<html>` switches themes. Theme is persisted to `localStorage`. Tailwind v4 is used alongside raw CSS variables.

**Animation:** Framer Motion for section/element entrance animations. `overflowX: clip` on the root wrapper prevents horizontal scroll caused by initial transforms.

**Path alias:** `@/` maps to `frontend/src/` (configured in `tsconfig.json` and `vite.config`).

**Email:** Contact form uses `@emailjs/browser` (no backend call needed for sending emails).

### Backend

Minimal FastAPI app in `backend/app/main.py`. CORS is configured for `localhost:5173` and the production domain. Add new routes directly in `main.py` or create new router files and include them there.
