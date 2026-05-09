<p align="center">
  <img src="public/logo.svg" width="92" height="92" alt="AI Home Lab logo" />
</p>

<h1 align="center">AI Home Lab</h1>

<p align="center">
  A premium, responsive catalog of open-source and self-hosted AI tools for building a private local AI home lab.
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-19-0f0f0f?style=for-the-badge&labelColor=17191f&color=c6d8f5" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.9-0f0f0f?style=for-the-badge&labelColor=17191f&color=7f91b8" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-0f0f0f?style=for-the-badge&labelColor=17191f&color=d8a937" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-7-0f0f0f?style=for-the-badge&labelColor=17191f&color=f4d36b" />
</p>

## ✨ Overview

AI Home Lab helps people discover practical AI tools they can run locally or self-host at home. It is designed for both technical and non-technical users, with clear categories, search, favorites, license visibility, and verification sources.

The interface follows a dark arctic visual identity inspired by the Hey Initium channel design: black surfaces, icy blue accents, controlled gold highlights, and a clean futuristic layout.

## ⚡ Highlights

- Curated catalog of local AI interfaces, inference servers, RAG tools, voice models, image generators, automations, and agent frameworks.
- Responsive Tailwind UI built for desktop, tablet, and mobile.
- English and French interface with typed translation parity.
- Browser-persisted favorites and language preference.
- License, commercial-use status, and verification source disclosure on each project card.
- Custom SVG favicon and premium dark visual system.

## 🛠️ Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS v4
- Lucide React icons
- Browser `localStorage`

## 🚀 Getting Started

```bash
npm install
npm run dev
```

The development server runs on `http://127.0.0.1:5173/` by default.

## ✅ Quality Checks

```bash
npm run lint
npm run build
```

Run both commands before opening a pull request or shipping a change.

## 🗂️ Project Structure

```text
src/
  app/              Page composition and UI state
  components/       Reusable interface components
  data/             Catalog projects and category taxonomy
  hooks/            Browser-persisted favorites
  i18n/             Locale dictionaries and language provider
  styles/           Tailwind import, theme tokens, and custom effects
  types/            Shared TypeScript types
  utils/            Filtering, class names, and storage helpers
```

## 🧭 Maintenance

- Add or edit catalog entries in `src/data/projects.ts`.
- Edit localized copy in `src/i18n/locales/en.ts` and `src/i18n/locales/fr.ts`; English defines the required key set and TypeScript validates French parity during `npm run build`.
- Keep most styling in Tailwind utilities. Use `src/styles/index.css` only for global tokens, custom visual effects, and keyframes.
- Read `ARCHITECTURE.md` for the short technical onboarding guide.

## 👤 Author

- [@nixiz0](https://github.com/nixiz0).
