import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Ejemplo } from '@/data/temas/tipos';
import { MateLatex } from './MateLatex';
import { TextoConLatex } from './TextoConLatex';

type Props = {
  ejemplo: Ejemplo;
  /** Si true, arranca abierto. Default true para el primer ejemplo. */
  inicialmenteAbierto?: boolean;
};

export function EjemploPasoAPaso({ ejemplo, inicialmenteAbierto = true }: Props) {
  const [abierto, setAbierto] = useState(inicialmenteAbierto);

  return (
    <div className="card overflow-hidden">
      <button
        type="button"
        onClick={() => setAbierto((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-slate-50 dark:hover:bg-slate-700/40"
        aria-expanded={abierto}
      >
        <div>
          <div className="text-sm font-semibold">
            <TextoConLatex texto={ejemplo.titulo} />
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            <TextoConLatex texto={ejemplo.enunciado} />
          </div>
        </div>
        <ChevronDown
          size={18}
          className={`shrink-0 transition-transform ${abierto ? 'rotate-180' : ''}`}
        />
      </button>

      {abierto && (
        <div className="px-4 pb-4 pt-1 space-y-3 border-t border-slate-200 dark:border-slate-700">
          <ol className="list-decimal pl-5 space-y-3 marker:text-slate-400">
            {ejemplo.pasos.map((p, i) => (
              <li key={i} className="pl-1">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <TextoConLatex texto={p.explicacion} />
                </p>
                {p.latex && (
                  <div className="mt-1.5 overflow-x-auto no-scrollbar">
                    <MateLatex latex={p.latex} display />
                  </div>
                )}
              </li>
            ))}
          </ol>
          <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 px-3 py-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-emerald-600 dark:text-emerald-400 mr-2">
              Resultado
            </span>
            <span className="text-sm font-medium">
              <TextoConLatex texto={ejemplo.resultado} />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
