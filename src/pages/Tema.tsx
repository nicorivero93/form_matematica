import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft, Check, Plus } from 'lucide-react';
import { getTemaPorSlug } from '@/data/temas';
import { getArea } from '@/data/areas';
import { getAnio } from '@/data/anios';
import { useProgreso } from '@/store/progreso';
import { useRecientes } from '@/store/recientes';
import { BloqueTeoria } from '@/components/BloqueTeoria';
import { EjemploPasoAPaso } from '@/components/EjemploPasoAPaso';
import { ErroresComunes } from '@/components/ErroresComunes';
import { FormulaCard } from '@/components/FormulaCard';
import { QuizRunner } from '@/components/Quiz/QuizRunner';
import { TextoConLatex } from '@/components/TextoConLatex';
import { VisualizadorPorId } from '@/components/visualizadores/_registry';
import { NotFound } from './NotFound';

const NIVEL_LABEL = {
  intro: 'Intro',
  intermedio: 'Intermedio',
  avanzado: 'Avanzado',
} as const;

export function Tema() {
  const { slug } = useParams<{ slug: string }>();
  const tema = slug ? getTemaPorSlug(slug) : undefined;
  const completado = useProgreso((s) => (slug ? s.completados.includes(slug) : false));
  const toggleCompletado = useProgreso((s) => s.toggleCompletado);
  const marcarVisita = useProgreso((s) => s.marcarVisita);
  const pushReciente = useRecientes((s) => s.push);

  useEffect(() => {
    if (slug && tema) {
      marcarVisita(slug);
      pushReciente(slug);
    }
  }, [slug, tema, marcarVisita, pushReciente]);

  if (!tema || !slug) return <NotFound />;

  const area = getArea(tema.area);
  const anioPrimary = tema.anios[0] ? getAnio(tema.anios[0]) : null;

  return (
    <article className="space-y-8 pb-8">
      <Link
        to={anioPrimary ? `/anio/${anioPrimary.id}` : '/'}
        className="inline-flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
      >
        <ChevronLeft size={16} aria-hidden /> Volver
        {anioPrimary ? ` a ${anioPrimary.nombre}` : ' al inicio'}
      </Link>

      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`chip bg-${area.color}-500/15 text-${area.color}-700 dark:text-${area.color}-300`}
          >
            <span className="mr-1" aria-hidden>{area.icono}</span>
            {area.nombre}
          </span>
          {tema.anios.map((aid) => {
            const a = getAnio(aid);
            return (
              <span
                key={aid}
                className={`chip bg-${a.color}-500/15 text-${a.color}-700 dark:text-${a.color}-300`}
              >
                {a.nombre}
              </span>
            );
          })}
          <span className="chip bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {NIVEL_LABEL[tema.nivel]}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          <TextoConLatex texto={tema.titulo} />
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          <TextoConLatex texto={tema.resumen} />
        </p>
        <button
          type="button"
          onClick={() => toggleCompletado(slug)}
          className={
            completado
              ? 'btn bg-emerald-500 text-white hover:bg-emerald-600'
              : 'btn-secondary'
          }
        >
          {completado ? (
            <>
              <Check size={16} aria-hidden /> Aprendido
            </>
          ) : (
            <>
              <Plus size={16} aria-hidden /> Marcar como aprendido
            </>
          )}
        </button>
      </header>

      {tema.teoria.length > 0 && (
        <section aria-labelledby="teoria" className="space-y-4">
          <h2 id="teoria" className="text-xl font-semibold tracking-tight">
            Teoría
          </h2>
          <div className="space-y-4">
            {tema.teoria.map((b, i) => (
              <BloqueTeoria key={i} bloque={b} />
            ))}
          </div>
        </section>
      )}

      {tema.formulasClave && tema.formulasClave.length > 0 && (
        <section aria-labelledby="formulas" className="space-y-4">
          <h2 id="formulas" className="text-xl font-semibold tracking-tight">
            Fórmulas clave
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tema.formulasClave.map((f, i) => (
              <FormulaCard key={i} formula={f} />
            ))}
          </div>
        </section>
      )}

      {tema.ejemplos.length > 0 && (
        <section aria-labelledby="ejemplos" className="space-y-4">
          <h2 id="ejemplos" className="text-xl font-semibold tracking-tight">
            Ejemplos resueltos
          </h2>
          <div className="space-y-3">
            {tema.ejemplos.map((e, i) => (
              <EjemploPasoAPaso key={i} ejemplo={e} inicialmenteAbierto={i === 0} />
            ))}
          </div>
        </section>
      )}

      {tema.visualizadorId && (
        <section aria-labelledby="visualizador" className="space-y-4">
          <h2 id="visualizador" className="text-xl font-semibold tracking-tight">
            Visualizador interactivo
          </h2>
          <VisualizadorPorId id={tema.visualizadorId} />
        </section>
      )}

      {tema.erroresComunes.length > 0 && (
        <section aria-labelledby="errores" className="space-y-4">
          <h2 id="errores" className="text-xl font-semibold tracking-tight">
            Errores comunes
          </h2>
          <ErroresComunes errores={tema.erroresComunes} />
        </section>
      )}

      {tema.quiz && tema.quiz.preguntas.length > 0 && (
        <section aria-labelledby="quiz" className="space-y-4">
          <h2 id="quiz" className="text-xl font-semibold tracking-tight">
            Practicá
          </h2>
          <QuizRunner temaSlug={slug} quiz={tema.quiz} />
        </section>
      )}

      {tema.relacionados && tema.relacionados.length > 0 && (
        <section aria-labelledby="relacionados" className="space-y-4">
          <h2 id="relacionados" className="text-xl font-semibold tracking-tight">
            Temas relacionados
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tema.relacionados.map((s) => {
              const t = getTemaPorSlug(s);
              if (!t) return null;
              return (
                <li key={s}>
                  <Link
                    to={`/tema/${s}`}
                    className="card p-3 block hover:shadow-md transition-all"
                  >
                    <div className="font-medium">
                      <TextoConLatex texto={t.titulo} />
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5">
                      <TextoConLatex texto={t.resumen} />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </article>
  );
}
