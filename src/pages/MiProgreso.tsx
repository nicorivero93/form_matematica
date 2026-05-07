import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { ANIOS } from '@/data/anios';
import { TEMAS, getTemaPorSlug } from '@/data/temas';
import { useProgreso } from '@/store/progreso';
import { useRecientes } from '@/store/recientes';

export function MiProgreso() {
  const completados = useProgreso((s) => s.completados);
  const limpiarProgreso = useProgreso((s) => s.limpiar);
  const recientes = useRecientes((s) => s.slugs);
  const limpiarRecientes = useRecientes((s) => s.limpiar);

  const totalCompletados = completados.length;
  const totalTemas = TEMAS.length;
  const pctGlobal = totalTemas === 0 ? 0 : Math.round((totalCompletados / totalTemas) * 100);

  const porAnio = ANIOS.map((a) => {
    const temasAnio = TEMAS.filter((t) => t.anios.includes(a.id));
    const hechos = temasAnio.filter((t) => completados.includes(t.slug)).length;
    const pct = temasAnio.length === 0 ? 0 : Math.round((hechos / temasAnio.length) * 100);
    return { anio: a, total: temasAnio.length, hechos, pct };
  }).filter((p) => p.total > 0);

  function pedirYLimpiar() {
    const ok = window.confirm('¿Borrar todo tu progreso? Esto no se puede deshacer.');
    if (ok) limpiarProgreso();
  }

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Mi progreso</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Tu progreso se guarda solo en este dispositivo (no usamos cuentas ni servidor).
        </p>
      </header>

      <section className="card p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-slate-500 dark:text-slate-400">Total aprendidos</div>
            <div className="text-3xl font-bold mt-1">
              {totalCompletados}
              <span className="text-base font-normal text-slate-400"> / {totalTemas}</span>
            </div>
          </div>
          <div className="text-2xl font-mono font-semibold text-brand-600 dark:text-brand-400">
            {pctGlobal}%
          </div>
        </div>
        <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
          <div
            className="h-full bg-brand-500 transition-all"
            style={{ width: `${pctGlobal}%` }}
          />
        </div>
        {totalCompletados > 0 && (
          <button
            type="button"
            onClick={pedirYLimpiar}
            className="text-xs text-rose-600 dark:text-rose-400 hover:underline inline-flex items-center gap-1"
          >
            <Trash2 size={12} aria-hidden /> Borrar todo el progreso
          </button>
        )}
      </section>

      {porAnio.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Por año</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {porAnio.map(({ anio, total, hechos, pct }) => (
              <Link
                key={anio.id}
                to={`/anio/${anio.id}`}
                className="card p-4 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">{anio.nombre}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {hechos}/{total} · {pct}%
                  </div>
                </div>
                <div className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <div
                    className={`h-full bg-${anio.color}-500 transition-all`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {recientes.length > 0 && (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Visitados recientemente</h2>
            <button
              type="button"
              onClick={limpiarRecientes}
              className="text-xs text-slate-500 dark:text-slate-400 hover:underline"
            >
              Limpiar
            </button>
          </div>
          <ul className="space-y-2">
            {recientes.slice(0, 8).map((slug) => {
              const t = getTemaPorSlug(slug);
              if (!t) return null;
              return (
                <li key={slug}>
                  <Link
                    to={`/tema/${slug}`}
                    className="card p-3 block hover:shadow-md transition-all"
                  >
                    <div className="font-medium">{t.titulo}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                      {t.resumen}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {totalCompletados === 0 && recientes.length === 0 && (
        <div className="card p-8 text-center text-sm text-slate-500 dark:text-slate-400">
          Todavía no tenés progreso. Entrá a un tema y marcalo como aprendido para empezar.
        </div>
      )}
    </div>
  );
}
