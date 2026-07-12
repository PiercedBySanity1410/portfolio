# Gurjot Singh — Portfolio

A single-page portfolio built with Vite, React, and Framer Motion. Dark, terminal/systems-flavored theme built around a handshake/packet-relay motif — a nod to the encrypted chat system in the projects section.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

Output goes to `dist/`, ready to deploy to Vercel, Netlify, GitHub Pages, etc.

## Structure

```
src/
  components/
    Nav.jsx        top navigation bar
    Hero.jsx        intro + animated handshake diagram (signature visual)
    About.jsx       bio + quick stats panel
    Experience.jsx  timeline of roles
    Projects.jsx     project cards with generated placeholder graphics
    Skills.jsx       skills grouped as a manifest
    Contact.jsx      contact links + footer
  App.jsx
  main.jsx
  index.css          design tokens (colors, type, spacing)
```

## Things to swap in before you ship this

- **Links**: `src/components/Contact.jsx` and the nav "resume.pdf" button currently point to `#` — drop in your real GitHub, LinkedIn, LeetCode, and Codeforces URLs, plus a real resume PDF.
- **Project images**: `Projects.jsx` currently renders generated abstract diagrams (`ProjectGlyph`) as stand-ins. Swap these for real screenshots or GIFs of Shadow Room / your other projects when ready — an `<img>` tag or a short looping `<video>` in place of `<ProjectGlyph seed={p.seed} />` works well.
- **Repo links**: point `p.links.repo` in `Projects.jsx` to your actual repos.
- **Fonts** are self-hosted via `@fontsource`, so the site works fully offline — no external font requests.

## Stack

Vite · React 18 · Framer Motion · plain CSS (no framework) — colors and type live in `src/index.css` as CSS variables if you want to retheme.
