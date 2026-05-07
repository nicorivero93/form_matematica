import type { FormulaClave } from '@/data/temas/tipos';
import { MateLatex } from './MateLatex';
import { TextoConLatex } from './TextoConLatex';

type Props = {
  formula: FormulaClave;
};

export function FormulaCard({ formula }: Props) {
  return (
    <div className="card p-4 space-y-3">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-semibold text-sm">
          <TextoConLatex texto={formula.nombre} />
        </h3>
      </div>
      <div className="overflow-x-auto no-scrollbar py-2">
        <MateLatex latex={formula.latex} display ariaLabel={formula.nombre} />
      </div>
      {formula.cuandoUsar && (
        <p className="text-xs text-slate-500 dark:text-slate-400 italic">
          <TextoConLatex texto={formula.cuandoUsar} />
        </p>
      )}
      {formula.variables.length > 0 && (
        <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-300">
          {formula.variables.map((v) => (
            <li key={v.simbolo} className="flex gap-2">
              <span className="font-mono font-semibold min-w-[1.5rem]">
                <MateLatex latex={v.simbolo} />
              </span>
              <span>
                <TextoConLatex texto={v.nombre} />
                {v.unidad ? <span className="text-slate-400"> ({v.unidad})</span> : null}
                {v.desc && (
                  <span className="text-slate-500">
                    {' '}— <TextoConLatex texto={v.desc} />
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
