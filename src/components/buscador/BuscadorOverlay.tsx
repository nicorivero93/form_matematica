import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { useBuscadorAbierto } from '@/store/buscadorAbierto';
import { TEMAS } from '@/data/temas';
import { buscar, MIN_QUERY_LENGTH } from '@/lib/buscador';
import { ResultadoItem } from './ResultadoItem';

export function BuscadorOverlay() {
  const abierto = useBuscadorAbierto((s) => s.abierto);
  const cerrar = useBuscadorAbierto((s) => s.cerrar);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [q, setQ] = useState('');
  const [idxResaltado, setIdxResaltado] = useState(0);

  const resultados = useMemo(() => buscar(q, TEMAS), [q]);

  useEffect(() => {
    if (abierto) {
      setQ('');
      setIdxResaltado(0);
      const id = setTimeout(() => inputRef.current?.focus(), 30);
      return () => clearTimeout(id);
    }
    return;
  }, [abierto]);

  useEffect(() => {
    if (!abierto) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault();
        cerrar();
        return;
      }
      if (resultados.length === 0) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setIdxResaltado((i) => (i + 1) % resultados.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setIdxResaltado((i) => (i - 1 + resultados.length) % resultados.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const elegido = resultados[idxResaltado];
        if (elegido) {
          navigate(`/tema/${elegido.tema.slug}`);
          cerrar();
        }
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [abierto, resultados, idxResaltado, cerrar, navigate]);

  // Bloquear scroll del body cuando el overlay está abierto.
  useEffect(() => {
    if (!abierto) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [abierto]);

  if (!abierto) return null;

  const queryCorto = q.length > 0 && q.length < MIN_QUERY_LENGTH;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Buscador de temas"
    >
      <button
        type="button"
        onClick={cerrar}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        aria-label="Cerrar buscador"
        tabIndex={-1}
      />
      <div className="relative w-full max-w-xl card overflow-hidden">
        <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-700 px-4">
          <Search size={18} className="text-slate-400" aria-hidden />
          <input
            ref={inputRef}
            type="text"
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setIdxResaltado(0);
            }}
            placeholder="Buscar un tema..."
            className="flex-1 py-3 bg-transparent border-0 outline-none text-base"
            aria-label="Texto de búsqueda"
          />
          <button
            type="button"
            onClick={cerrar}
            className="p-2 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            aria-label="Cerrar"
          >
            <X size={18} />
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto">
          {q.length === 0 && (
            <p className="p-6 text-sm text-slate-500 dark:text-slate-400 text-center">
              Escribí para buscar entre {TEMAS.length} temas. Atajo: Ctrl+K · /.
            </p>
          )}
          {queryCorto && (
            <p className="p-6 text-sm text-slate-500 dark:text-slate-400 text-center">
              Necesitás al menos {MIN_QUERY_LENGTH} caracteres.
            </p>
          )}
          {q.length >= MIN_QUERY_LENGTH && resultados.length === 0 && (
            <p className="p-6 text-sm text-slate-500 dark:text-slate-400 text-center">
              No encontramos temas para "{q}".
            </p>
          )}
          {resultados.length > 0 && (
            <ul className="divide-y divide-slate-200 dark:divide-slate-700">
              {resultados.map((r, i) => (
                <li key={r.tema.slug}>
                  <ResultadoItem
                    tema={r.tema}
                    resaltado={i === idxResaltado}
                    onClick={() => {
                      navigate(`/tema/${r.tema.slug}`);
                      cerrar();
                    }}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
