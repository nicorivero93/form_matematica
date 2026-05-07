import { Lightbulb, AlertTriangle, BookOpen } from 'lucide-react';
import type { BloqueTeoria as BloqueTeoriaTipo } from '@/data/temas/tipos';
import { MateLatex } from './MateLatex';
import { TextoConLatex } from './TextoConLatex';

type Props = {
  bloque: BloqueTeoriaTipo;
};

const VARIANTE_CALLOUT = {
  tip: { icon: Lightbulb, color: 'emerald', titulo: 'Tip' },
  cuidado: { icon: AlertTriangle, color: 'amber', titulo: 'Cuidado' },
  definicion: { icon: BookOpen, color: 'sky', titulo: 'Definición' },
} as const;

export function BloqueTeoria({ bloque }: Props) {
  switch (bloque.tipo) {
    case 'parrafo':
      return (
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
          <TextoConLatex texto={bloque.texto} />
        </p>
      );

    case 'lista': {
      const items = bloque.items.map((it, i) => (
        <li key={i}>
          <TextoConLatex texto={it} />
        </li>
      ));
      return bloque.ordenada ? (
        <ol className="list-decimal pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
          {items}
        </ol>
      ) : (
        <ul className="list-disc pl-6 space-y-1.5 text-slate-700 dark:text-slate-300">
          {items}
        </ul>
      );
    }

    case 'latex':
      return (
        <div
          className={`flex justify-center ${
            bloque.display ? 'py-2' : ''
          } overflow-x-auto no-scrollbar`}
        >
          <MateLatex latex={bloque.latex} display={bloque.display ?? true} />
        </div>
      );

    case 'callout': {
      const cfg = VARIANTE_CALLOUT[bloque.variante];
      const Icon = cfg.icon;
      return (
        <div
          className={`rounded-lg border border-${cfg.color}-500/30 bg-${cfg.color}-500/10 p-4 flex gap-3`}
        >
          <Icon className={`text-${cfg.color}-500 shrink-0 mt-0.5`} size={18} aria-hidden />
          <div>
            <p
              className={`text-sm font-semibold text-${cfg.color}-700 dark:text-${cfg.color}-300 mb-1`}
            >
              {bloque.titulo ?? cfg.titulo}
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <TextoConLatex texto={bloque.texto} />
            </p>
          </div>
        </div>
      );
    }

    case 'tabla':
      return (
        <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
          <table className="w-full text-sm">
            <thead className="bg-slate-100 dark:bg-slate-800">
              <tr>
                {bloque.encabezados.map((e, i) => (
                  <th key={i} className="px-3 py-2 text-left font-semibold">
                    <TextoConLatex texto={e} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {bloque.filas.map((fila, i) => (
                <tr key={i}>
                  {fila.map((celda, j) => (
                    <td key={j} className="px-3 py-2">
                      <TextoConLatex texto={celda} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}
