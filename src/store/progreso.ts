import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ScoreQuiz = {
  /** Cantidad de respuestas correctas en el último intento. */
  correctas: number;
  /** Cantidad total de preguntas del quiz. */
  total: number;
  /** Timestamp ISO del último intento. */
  ultimoIntento: string;
};

type ProgresoState = {
  /** Set de slugs de temas marcados como aprendidos. */
  completados: string[];
  /** Score por slug de tema (último intento de quiz). */
  scoresQuiz: Record<string, ScoreQuiz>;
  /** Última visita por slug — útil para "seguir donde dejé". */
  ultimaVisita: Record<string, string>;

  marcarCompletado: (slug: string) => void;
  desmarcarCompletado: (slug: string) => void;
  toggleCompletado: (slug: string) => void;
  estaCompletado: (slug: string) => boolean;

  guardarScoreQuiz: (slug: string, correctas: number, total: number) => void;
  getScoreQuiz: (slug: string) => ScoreQuiz | undefined;

  marcarVisita: (slug: string) => void;

  totales: () => { completados: number };
  limpiar: () => void;
};

export const useProgreso = create<ProgresoState>()(
  persist(
    (set, get) => ({
      completados: [],
      scoresQuiz: {},
      ultimaVisita: {},

      marcarCompletado: (slug) =>
        set((s) =>
          s.completados.includes(slug) ? s : { completados: [...s.completados, slug] }
        ),
      desmarcarCompletado: (slug) =>
        set((s) => ({ completados: s.completados.filter((x) => x !== slug) })),
      toggleCompletado: (slug) =>
        set((s) =>
          s.completados.includes(slug)
            ? { completados: s.completados.filter((x) => x !== slug) }
            : { completados: [...s.completados, slug] }
        ),
      estaCompletado: (slug) => get().completados.includes(slug),

      guardarScoreQuiz: (slug, correctas, total) =>
        set((s) => ({
          scoresQuiz: {
            ...s.scoresQuiz,
            [slug]: { correctas, total, ultimoIntento: new Date().toISOString() },
          },
        })),
      getScoreQuiz: (slug) => get().scoresQuiz[slug],

      marcarVisita: (slug) =>
        set((s) => ({
          ultimaVisita: { ...s.ultimaVisita, [slug]: new Date().toISOString() },
        })),

      totales: () => ({ completados: get().completados.length }),
      limpiar: () => set({ completados: [], scoresQuiz: {}, ultimaVisita: {} }),
    }),
    { name: 'mate:progreso' }
  )
);
