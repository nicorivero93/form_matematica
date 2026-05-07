import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { TEMAS } from '@/data/temas';
import { buscar, MIN_QUERY_LENGTH } from '@/lib/buscador';
import { TemaCard } from '@/components/TemaCard';

export function Buscar() {
  const [q, setQ] = useState('');
  const resultados = useMemo(() => buscar(q, TEMAS), [q]);

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Buscar</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Buscá entre {TEMAS.length} temas por título, tag o resumen.
        </p>
      </header>

      <div className="card flex items-center gap-2 px-4">
        <Search size={18} className="text-slate-400" aria-hidden />
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Ej: fracciones, multiplicación, perímetro..."
          className="flex-1 py-3 bg-transparent border-0 outline-none text-base"
          aria-label="Texto de búsqueda"
          autoFocus
        />
      </div>

      {q.length === 0 && (
        <p className="text-center text-sm text-slate-500 dark:text-slate-400">
          Escribí algo arriba para empezar.
        </p>
      )}
      {q.length > 0 && q.length < MIN_QUERY_LENGTH && (
        <p className="text-center text-sm text-slate-500 dark:text-slate-400">
          Necesitás al menos {MIN_QUERY_LENGTH} caracteres.
        </p>
      )}
      {q.length >= MIN_QUERY_LENGTH && resultados.length === 0 && (
        <p className="text-center text-sm text-slate-500 dark:text-slate-400">
          No encontramos temas para "{q}".
        </p>
      )}
      {resultados.length > 0 && (
        <>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {resultados.length} {resultados.length === 1 ? 'resultado' : 'resultados'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resultados.map((r) => (
              <TemaCard key={r.tema.slug} tema={r.tema} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
