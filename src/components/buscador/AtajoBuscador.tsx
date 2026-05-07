import { useEffect } from 'react';
import { useBuscadorAbierto } from '@/store/buscadorAbierto';

/**
 * Hook para registrar atajos globales del buscador:
 *  - Ctrl/Cmd + K abre/toggle.
 *  - "/" cuando no hay input enfocado abre el buscador.
 */
export function useAtajoBuscador() {
  const toggle = useBuscadorAbierto((s) => s.toggle);
  const abrir = useBuscadorAbierto((s) => s.abrir);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const meta = e.metaKey || e.ctrlKey;
      if (meta && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        toggle();
        return;
      }
      if (e.key === '/' && !meta) {
        const target = e.target as HTMLElement | null;
        if (
          target &&
          (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)
        ) {
          return;
        }
        e.preventDefault();
        abrir();
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [toggle, abrir]);
}
