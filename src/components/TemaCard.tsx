import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import type { Tema } from '@/data/temas/tipos';
import { getArea } from '@/data/areas';
import { useProgreso } from '@/store/progreso';
import { TextoConLatex } from './TextoConLatex';

type Props = {
  tema: Tema;
};

const NIVEL_LABEL: Record<Tema['nivel'], string> = {
  intro: 'Intro',
  intermedio: 'Intermedio',
  avanzado: 'Avanzado',
};

export function TemaCard({ tema }: Props) {
  const area = getArea(tema.area);
  const completado = useProgreso((s) => s.completados.includes(tema.slug));

  return (
    <Link
      to={`/tema/${tema.slug}`}
      className={`card p-4 hover:shadow-md transition-all border-l-4 border-l-${area.color}-500 hover:-translate-y-0.5 flex flex-col gap-2`}
    >
      <div className="flex items-start justify-between gap-2">
        <span className={`chip bg-${area.color}-500/15 text-${area.color}-700 dark:text-${area.color}-300`}>
          <span className="mr-1" aria-hidden>{area.icono}</span>
          {area.nombre}
        </span>
        {completado && (
          <span
            className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 text-white"
            aria-label="Aprendido"
            title="Aprendido"
          >
            <Check size={14} />
          </span>
        )}
      </div>
      <h3 className="text-base font-semibold tracking-tight">
        <TextoConLatex texto={tema.titulo} />
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
        <TextoConLatex texto={tema.resumen} />
      </p>
      <div className="mt-auto flex items-center gap-2 pt-2">
        <span className="chip bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
          {NIVEL_LABEL[tema.nivel]}
        </span>
        {tema.quiz && tema.quiz.preguntas.length > 0 && (
          <span className="chip bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
            Quiz
          </span>
        )}
        {tema.visualizadorId && (
          <span className="chip bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
            Interactivo
          </span>
        )}
      </div>
    </Link>
  );
}
