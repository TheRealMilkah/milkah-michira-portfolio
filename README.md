# Milkah Michira — Portfolio

A responsive, single-page personal portfolio built with React, TypeScript, Vite, Three.js / React Three Fiber and Framer Motion.

## Local development

Requirements: Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Deploy to Vercel

1. Create a new public GitHub repository named `milkah-michira-portfolio` under `TheRealMilkah`.
2. Upload/push this project to the repository's root (do not upload `node_modules`).
3. In Vercel, choose **Add New → Project**, import `TheRealMilkah/milkah-michira-portfolio`.
4. Keep the detected Vite settings: build command `npm run build`, output directory `dist`.
5. Deploy. Vercel will provide a public `*.vercel.app` URL.

## Notes

- The supplied portrait is stored at `public/images/milkah-michira.jpg`.
- The 3D hero is an animated translucent torus-knot sculpture. Reduced-motion users receive a static fallback treatment.
- Project descriptions intentionally distinguish individual and collaborative work and identify prototype limitations where known.
- Review all project URLs and profile details before public launch. FinAssist's public demo status has not been confirmed.
