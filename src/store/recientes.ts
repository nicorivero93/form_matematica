import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const MAX = 10;

type RecientesState = {
  slugs: string[];
  push: (slug: string) => void;
  limpiar: () => void;
};

export const useRecientes = create<RecientesState>()(
  persist(
    (set) => ({
      slugs: [],
      push: (slug) =>
        set((s) => {
          const sin = s.slugs.filter((x) => x !== slug);
          return { slugs: [slug, ...sin].slice(0, MAX) };
        }),
      limpiar: () => set({ slugs: [] }),
    }),
    { name: 'mate:recientes' }
  )
);
