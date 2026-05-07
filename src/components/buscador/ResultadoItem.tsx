import { ArrowRight } from 'lucide-react';
import type { Tema } from '@/data/temas/tipos';
import { getArea } from '@/data/areas';
import { getAnio } from '@/data/anios';
import { TextoConLatex } from '../TextoConLatex';

type Props = {
  tema: Tema;
  resaltado: boolean;
  onClick: () => void;
};

export function ResultadoItem({ tema, resaltado, onClick }: Props) {
  const area = getArea(tema.area);
  const anio = tema.anios[0] ? getAnio(tema.anios[0]) : null;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
        resaltado
          ? 'bg-brand-500/10'
          : 'hover:bg-slate-100 dark:hover:bg-slate-700/50'
      }`}
    >
      <span
        className={`flex items-center justify-center w-9 h-9 rounded-lg bg-${area.color}-500/15 text-${area.color}-600 dark:text-${area.color}-300 text-lg shrink-0`}
        aria-hidden
      >
        {area.icono}
      </span>
      <div className="flex-1 min-w-0">
        <div className="font-medium truncate">
          <TextoConLatex texto={tema.titulo} />
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
          {anio?.nombre} · {area.nombre}
        </div>
      </div>
      <ArrowRight
        size={16}
        className={resaltado ? 'text-brand-500' : 'text-slate-400'}
        aria-hidden
      />
    </button>
  );
}
