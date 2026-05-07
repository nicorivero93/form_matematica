import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Nivel } from '@/data/temas/tipos';

type Tema = 'dark' | 'light';

type PrefsState = {
  /** Filtro de nivel en la página de año. `null` = mostrar todos. */
  nivel: Nivel | null;
  tema: Tema;
  setNivel: (n: Nivel | null) => void;
  setTema: (t: Tema) => void;
  toggleTema: () => void;
};

function applyTema(tema: Tema) {
  const root = document.documentElement;
  if (tema === 'dark') root.classList.add('dark');
  else root.classList.remove('dark');
}

export const usePrefs = create<PrefsState>()(
  persist(
    (set, get) => ({
      nivel: null,
      tema: 'dark',
      setNivel: (n) => set({ nivel: n }),
      setTema: (t) => {
        applyTema(t);
        set({ tema: t });
      },
      toggleTema: () => {
        const next = get().tema === 'dark' ? 'light' : 'dark';
        applyTema(next);
        set({ tema: next });
      },
    }),
    {
      name: 'mate:prefs',
      onRehydrateStorage: () => (state) => {
        if (state?.tema) applyTema(state.tema);
      },
    }
  )
);
