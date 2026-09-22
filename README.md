# Personal Portfolio

My personal website: an engineering notebook about my work, product ownership, and the software I build.

[Visit the website](https://valentincaceres.xyz/) · [LinkedIn](https://www.linkedin.com/in/vcvalentin/)

## Built with

React, TypeScript, Vite, and Tailwind CSS, with English/Spanish content and light/dark themes.

The page includes interactive margin notes and an experience timeline. Each role has a visible introduction and expandable details. Both translations live in `src/content/portfolio.ts`.

On the first visit, the page uses the first supported language in the browser's language preferences, falling back to English. Choosing ES or EN saves an explicit preference for subsequent visits. Automatic detection is never saved as a manual choice. The theme similarly follows the system until manually changed. Both controls work when browser storage is unavailable.

## Run locally

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Check changes

Use Node.js 22.18+ (or Node.js 24 LTS) for the native TypeScript preference tests.

```bash
npm test
npm run build
npm run lint
```
