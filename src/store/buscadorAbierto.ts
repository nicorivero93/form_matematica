import { create } from 'zustand';

/**
 * Estado del overlay de búsqueda. No persiste — siempre arranca cerrado.
 * Coordina lupa del header, atajo Cmd/Ctrl+K y el overlay mismo.
 */
type BuscadorAbiertoState = {
  abierto: boolean;
  abrir: () => void;
  cerrar: () => void;
  toggle: () => void;
};

export const useBuscadorAbierto = create<BuscadorAbiertoState>((set, get) => ({
  abierto: false,
  abrir: () => set({ abierto: true }),
  cerrar: () => set({ abierto: false }),
  toggle: () => set({ abierto: !get().abierto }),
}));
