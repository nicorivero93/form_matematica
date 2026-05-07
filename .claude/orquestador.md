# `.claude/orquestador.md` — `form-matematicas`

Bootstrap del repo. Ruta: contenido estático educativo de Matemática (NAP Argentina), pensado como hermano de `form-fisica`.

## Stack detectado

- React 18 + TypeScript strict + Vite 5
- Tailwind CSS 3 (dark mode `class`, default dark)
- Zustand 5 con `persist` middleware (progreso, prefs, recientes)
- React Router DOM 6 (SPA, lazy pages)
- KaTeX para LaTeX, Framer Motion para visualizadores, Fuse.js para búsqueda
- vite-plugin-pwa (autoUpdate + Workbox)
- Sentry (`@sentry/react`) opcional, init condicional PROD
- Vitest + Testing Library + jsdom

## Convenciones

- **Idioma**: español (Argentina). UI, slugs, identificadores de dominio en español (`tema`, `anio`, `ejemplo`, `pregunta`).
- **Slugs**: kebab-case, sin tildes, únicos globalmente. Validados en build (`src/data/temas/index.ts` throwea si hay duplicado o `relacionados` rota).
- **Currículum**: NAP genérico Argentina. Cada tema declara `anios: AnioId[]` y `area: AreaId`.
- **Niveles**: `intro | intermedio | avanzado` (chip por tema, filtro en página de año).
- **Mobile-first**: BottomNav siempre en mobile, header con logo + buscador + toggles en desktop. Inputs 16px. Safe areas respetadas (notch iPhone).
- **Footer**: único en `Layout.tsx`, `© {año} · tomerivero.dev` (regla global #11).
- **Sentry**: `src/lib/sentry.ts` con `initSentry()`, no inicializa si `VITE_SENTRY_DSN` está vacío.

## Cómo se organiza el contenido

- `src/data/anios.ts` — los 9 años (primaria 4-7, secundaria 1-5) con metadata visual.
- `src/data/areas.ts` — áreas matemáticas (numeros-y-operaciones, fracciones-decimales, geometria, medida, algebra, funciones, trigonometria, estadistica-probabilidad, analisis).
- `src/data/temas/tipos.ts` — tipo `Tema` con teoría, fórmulas clave, ejemplos paso a paso, errores comunes, quiz, visualizador, relacionados.
- `src/data/temas/<anio>/<slug>.ts` — un archivo por tema. Index del año los agrega.
- `src/data/temas/index.ts` — agregador global, valida slugs únicos y referencias `relacionados`.

## Cómo se agrega contenido

1. Tema nuevo → archivo `<slug>.ts` en la carpeta del año + agregar al `index.ts` del año.
2. Visualizador nuevo → componente en `src/components/visualizadores/` + registrar en `_registry.ts`.
3. Quiz: incluido en el `Tema` mismo (`quiz.preguntas[]`).

## Archivos espejo cliente↔servidor

Ninguno. No hay servidor en esta app.

## Comandos comunes

```bash
npm run dev              # dev server (puerto Vite default, 5173)
npm run build            # tsc -b && vite build — chequea types y compila
npm run preview          # sirve dist/
npm test                 # vitest run (un solo pase)
npm run test:watch       # watch
npm run test:coverage    # con coverage
npm run deploy           # build + firebase deploy --only hosting
```

## Routing actual

| Ruta | Página | Lazy |
|---|---|---|
| `/` | Home | no |
| `/anio/:anioId` | Anio | sí |
| `/tema/:slug` | Tema | sí |
| `/buscar` | Buscar | sí |
| `/mi-progreso` | MiProgreso | sí |
| `/acerca` | Acerca | no |
| `*` | NotFound | no |

## Deuda / pendientes

- Solo 4to grado primaria tiene contenido completo. Los otros 8 años (5°/6°/7° primaria + 1°-5° secundaria) están con `index.ts` exportando `[]`.
- Visualizadores iniciales: `fracciones-pizza`, `recta-numerica`, `tabla-pitagorica`, `regla-perimetro`. Los de años más altos (graficador de funciones, círculo trigonométrico, etc.) se agregarán cuando se cargue el contenido del año correspondiente.
- Sin tests E2E (Playwright). Mínimo cubierto con unit tests.

## Reglas globales aplicadas

- #8 `.gitignore` con `docs/propuestas/`, `*.pdf`, `ADENDA-*.md`.
- #9 PWA mobile-first: viewport-fit=cover, apple-mobile-web-app-capable, inputs 16px, BottomNav, manifest con `purpose: 'any maskable'`.
- #11 Footer único `© {año} · tomerivero.dev`.
- #12 Sentry condicional con `VITE_SENTRY_DSN`.
- Testing: Vitest + jsdom + colocation; setup en `src/test/setup.ts`.
