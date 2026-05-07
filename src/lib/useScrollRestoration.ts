import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * Scroll restoration manual.
 *
 * - PUSH/REPLACE: scrollea al top en cada navegación nueva.
 * - POP (back/forward): intenta restaurar la posición guardada.
 *
 * La posición se guarda continuamente para `location.key` actual con throttle vía
 * RAF. En cleanup se hace un snapshot final, así no se pierde el último valor.
 */
const STORAGE_KEY = 'mate:scroll';
const MAX_ENTRIES = 50;

type Entry = { key: string; y: number };

function leer(): Entry[] {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (e): e is Entry =>
        typeof e === 'object' && e !== null && typeof e.key === 'string' && typeof e.y === 'number'
    );
  } catch {
    return [];
  }
}

function escribir(entries: Entry[]) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch {
    // sessionStorage puede fallar en modo privado o cuota llena
  }
}

function guardarPosicion(key: string, y: number) {
  const lista = leer().filter((e) => e.key !== key);
  lista.push({ key, y });
  while (lista.length > MAX_ENTRIES) lista.shift();
  escribir(lista);
}

function restaurarPosicion(key: string): number | undefined {
  return leer().find((e) => e.key === key)?.y;
}

export function useScrollRestoration() {
  const location = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    const keyActual = location.key;
    let rafId: number | null = null;

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        guardarPosicion(keyActual, window.scrollY);
        rafId = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    const onPageHide = () => guardarPosicion(keyActual, window.scrollY);
    window.addEventListener('pagehide', onPageHide);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      guardarPosicion(keyActual, window.scrollY);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pagehide', onPageHide);
    };
  }, [location.key]);

  useEffect(() => {
    if (navType === 'POP') {
      const y = restaurarPosicion(location.key) ?? 0;
      requestAnimationFrame(() => window.scrollTo(0, y));
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.key, navType]);
}
