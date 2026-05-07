import { Link } from 'react-router-dom';
import type { Anio } from '@/data/anios';
import { useProgreso } from '@/store/progreso';
import { getTemasPorAnio } from '@/data/temas';

type Props = {
  anio: Anio;
};

export function AnioCard({ anio }: Props) {
  const completados = useProgreso((s) => s.completados);
  const temas = getTemasPorAnio(anio.id);
  const total = temas.length;
  const hechos = temas.filter((t) => completados.includes(t.slug)).length;
  const pct = total > 0 ? Math.round((hechos / total) * 100) : 0;

  return (
    <Link
      to={`/anio/${anio.id}`}
      className={`card p-4 sm:p-5 hover:shadow-md transition-all border-${anio.color}-500/40 hover:border-${anio.color}-500 hover:-translate-y-0.5`}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-xl bg-${anio.color}-500/15 text-${anio.color}-600 dark:text-${anio.color}-300 text-2xl`}
          aria-hidden
        >
          {anio.icono}
        </div>
        <span
          className={`chip bg-${anio.color}-500/15 text-${anio.color}-700 dark:text-${anio.color}-300`}
        >
          {anio.etapa === 'primaria' ? 'Primaria' : 'Secundaria'}
        </span>
      </div>

      <h3 className="mt-3 text-lg font-semibold tracking-tight">{anio.nombre}</h3>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 line-clamp-3">
        {anio.descripcion}
      </p>

      <div className="mt-4">
        {total === 0 ? (
          <p className="text-xs text-slate-400 italic">Próximamente</p>
        ) : (
          <>
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
              <span>
                {hechos}/{total} aprendidos
              </span>
              <span>{pct}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
              <div
                className={`h-full bg-${anio.color}-500 transition-all`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
