import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { Home } from '@/pages/Home';
import { Acerca } from '@/pages/Acerca';
import { NotFound } from '@/pages/NotFound';
import { useScrollRestoration } from '@/lib/useScrollRestoration';

// Lazy: estas páginas tiran de framer-motion / katex / fuse y solo hacen falta
// cuando el usuario navega ahí. Reduce ~80kb el bundle inicial.
const Anio = lazy(() => import('@/pages/Anio').then((m) => ({ default: m.Anio })));
const Tema = lazy(() => import('@/pages/Tema').then((m) => ({ default: m.Tema })));
const Buscar = lazy(() => import('@/pages/Buscar').then((m) => ({ default: m.Buscar })));
const MiProgreso = lazy(() =>
  import('@/pages/MiProgreso').then((m) => ({ default: m.MiProgreso }))
);

function FallbackPagina() {
  return (
    <div
      role="status"
      aria-label="Cargando"
      className="min-h-[40vh] flex items-center justify-center"
    >
      <div className="animate-pulse text-slate-400">Cargando…</div>
    </div>
  );
}

function RutasConScroll() {
  useScrollRestoration();
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/anio/:anioId"
          element={
            <Suspense fallback={<FallbackPagina />}>
              <Anio />
            </Suspense>
          }
        />
        <Route
          path="/tema/:slug"
          element={
            <Suspense fallback={<FallbackPagina />}>
              <Tema />
            </Suspense>
          }
        />
        <Route
          path="/buscar"
          element={
            <Suspense fallback={<FallbackPagina />}>
              <Buscar />
            </Suspense>
          }
        />
        <Route
          path="/mi-progreso"
          element={
            <Suspense fallback={<FallbackPagina />}>
              <MiProgreso />
            </Suspense>
          }
        />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <RutasConScroll />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
