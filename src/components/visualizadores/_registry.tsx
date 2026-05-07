import { lazy, Suspense, type LazyExoticComponent, type ComponentType } from 'react';

/**
 * Registry de visualizadores. Cada `Tema.visualizadorId` debe matchear una key.
 * Lazy loading: el componente se carga solo cuando se renderiza el tema.
 */

const visualizadores: Record<string, LazyExoticComponent<ComponentType>> = {
  'fracciones-pizza': lazy(() => import('./FraccionesPizza')),
  'recta-numerica': lazy(() => import('./RectaNumerica')),
  'tabla-pitagorica': lazy(() => import('./TablaPitagorica')),
  'regla-perimetro': lazy(() => import('./ReglaPerimetro')),
  'barra-porcentaje': lazy(() => import('./BarraPorcentaje')),
  'volumen-prisma': lazy(() => import('./VolumenPrisma')),
  'potencia-cubo': lazy(() => import('./PotenciaCubo')),
  'plano-cartesiano': lazy(() => import('./PlanoCartesiano')),
  'graficador-lineal': lazy(() => import('./GraficadorLineal')),
  'pitagoras': lazy(() => import('./Pitagoras')),
  'graficador-cuadratica': lazy(() => import('./GraficadorCuadratica')),
  'circulo-trig': lazy(() => import('./CirculoTrig')),
  'graficador-exp-log': lazy(() => import('./GraficadorExpLog')),
  'area-bajo-curva': lazy(() => import('./AreaBajoCurva')),
};

export function VisualizadorPorId({ id }: { id: string }) {
  const Comp = visualizadores[id];
  if (!Comp) {
    if (import.meta.env.DEV) {
      console.warn(`[visualizadores] id no registrado: "${id}"`);
    }
    return null;
  }
  return (
    <Suspense
      fallback={
        <div className="card p-6 flex items-center justify-center min-h-[160px] text-sm text-slate-400">
          Cargando…
        </div>
      }
    >
      <Comp />
    </Suspense>
  );
}

export const VISUALIZADOR_IDS = Object.keys(visualizadores);
