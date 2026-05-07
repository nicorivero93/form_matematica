# CLAUDE.md — `form-matematicas`

Reglas específicas del proyecto. Extiende las globales en `~/.claude/CLAUDE.md` y `~/.claude/rules/testing.md`.

---

## Qué es

App educativa de Matemática estilo PWA, navegación primaria por **año escolar** (4to grado primaria → 5to año secundaria), filtro secundario por **área** (Aritmética, Álgebra, Geometría, Trigonometría, Estadística, etc.). Cubre teoría conceptual, ejemplos paso a paso, errores comunes, visualizadores interactivos y quizzes con autocorrección. Currículum base: **NAP (Núcleos de Aprendizaje Prioritarios, Argentina)**.

Sin backend, sin cuentas: contenido estático en `src/data/temas/`, progreso en `localStorage` vía Zustand persist.

---

## Stack

React 18 · TypeScript strict · Vite 5 · Tailwind 3 · Zustand 5 · React Router 6 · KaTeX · Framer Motion · Fuse.js · Lucide · vite-plugin-pwa · Sentry · Vitest + Testing Library + jsdom.

Hosting: Firebase Hosting only (`npm run deploy`).

---

## Convenciones

- **Idioma**: español (Argentina) para todo lo visible al usuario y nombres de variables del dominio (`tema`, `anio`, `ejemplo`, `errorComun`).
- **Default dark mode** con toggle persistido (regla global #9).
- **Mobile-first**: BottomNav en mobile (Home / Buscar / Progreso / Acerca), header en desktop.
- **Inputs `font-size: 16px`** global (regla global #9, evita zoom iOS).
- **Footer único** `© {año} · tomerivero.dev` en todas las rutas (regla global #11).
- **Sentry**: init condicional `import.meta.env.PROD && VITE_SENTRY_DSN` (regla global #12).

---

## Cómo agregar un tema nuevo

1. Crear `src/data/temas/<anio>/<slug>.ts` exportando un `Tema` (ver `src/data/temas/tipos.ts`).
2. Importarlo y agregarlo al array de `src/data/temas/<anio>/index.ts`.
3. Reglas:
   - `slug` único globalmente, kebab-case, sin tildes.
   - `relacionados[]` debe contener slugs que existan (sino el index agregador throwea en build).
   - LaTeX siempre con escapes dobles (`\\cdot`, `\\frac{a}{b}`).
   - `visualizadorId` debe existir en `src/components/visualizadores/_registry.ts` o quedar undefined.
4. Un tema sin teoría/ejemplos no rompe nada pero pierde el sentido. Mínimo: 2 ejemplos + 3 errores comunes.

---

## Cómo agregar un visualizador

1. Crear `src/components/visualizadores/MiVisualizador.tsx` (export default, lazy-friendly).
2. Registrar id en `src/components/visualizadores/_registry.ts`:
   ```ts
   'mi-visualizador': lazy(() => import('./MiVisualizador')),
   ```
3. Usarlo desde un tema con `visualizadorId: 'mi-visualizador'`.

---

## Tests

- Vitest + jsdom según `~/.claude/rules/testing.md`.
- Tests **junto al archivo** (`foo.ts` + `foo.test.ts`).
- Mínimo cubierto:
  - `src/data/temas/index.test.ts` — slugs únicos, `relacionados` que existen.
  - `src/lib/buscador.test.ts` — fuzzy search devuelve resultados ordenados.
  - `src/store/progreso.test.ts` — marcar tema persiste y suma % por año.
  - `src/components/Quiz/QuizRunner.test.tsx` — flujo de respuestas correctas/incorrectas.
- `npm test` antes de cada deploy.

---

## Estructura

```
src/
├── components/
│   ├── Layout, Footer, Header, BottomNav, ErrorBoundary
│   ├── MateLatex                              KaTeX wrapper
│   ├── TemaCard, AnioCard
│   ├── BloqueTeoria, EjemploPasoAPaso, ErroresComunes
│   ├── Quiz/{QuizRunner, PreguntaNumerica, PreguntaMultiple, PreguntaVF}
│   ├── visualizadores/{_registry, FraccionesPizza, RectaNumerica, ...}
│   ├── buscador/{BuscadorOverlay, ResultadoItem, AtajoBuscador}
│   ├── AreaFilterChips, NivelToggle, TemaToggle
├── data/
│   ├── anios.ts, areas.ts
│   └── temas/{tipos, index, primaria-4..7, secundaria-1..5}/
├── pages/{Home, Anio, Tema, Buscar, MiProgreso, Acerca, NotFound}
├── store/{progreso, prefs, recientes, buscadorAbierto}
├── lib/{sentry, buscador, slug, useScrollRestoration, tipos}
├── styles/index.css
├── test/setup.ts
├── App.tsx, main.tsx
```

---

## Lo que NO hacemos en esta app

- No hay Firebase Auth/Firestore — todo localStorage.
- No hay generación dinámica de ejercicios con IA — quizzes fijos en `data/`.
- No hay sincronización entre dispositivos.
- No hay cuentas de usuario ni roles (alumno/profesor).
- No hay archivos espejo cliente↔servidor (no hay servidor).

---

## Comandos

```bash
npm install
npm run dev          # dev server con HMR
npm run build        # tsc -b && vite build (chequea types y compila)
npm run preview      # sirve dist/
npm test             # vitest run
npm run test:watch   # watch mode
npm run deploy       # build + firebase deploy --only hosting
```
