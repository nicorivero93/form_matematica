import { AlertCircle } from 'lucide-react';
import { TextoConLatex } from './TextoConLatex';

type Props = {
  errores: string[];
};

export function ErroresComunes({ errores }: Props) {
  if (errores.length === 0) return null;
  return (
    <ul className="space-y-2">
      {errores.map((e, i) => (
        <li
          key={i}
          className="flex gap-3 rounded-lg border border-rose-500/30 bg-rose-500/10 px-4 py-2.5"
        >
          <AlertCircle className="text-rose-500 shrink-0 mt-0.5" size={18} aria-hidden />
          <span className="text-sm text-slate-700 dark:text-slate-200">
            <TextoConLatex texto={e} />
          </span>
        </li>
      ))}
    </ul>
  );
}
