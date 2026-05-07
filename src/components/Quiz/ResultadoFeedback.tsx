import { CheckCircle2, XCircle } from 'lucide-react';
import type { EstadoRespuesta } from './QuizRunner';
import { TextoConLatex } from '../TextoConLatex';

type Props = {
  estado: EstadoRespuesta;
  explicacion: string;
  respuestaCorrecta?: string;
};

export function ResultadoFeedback({ estado, explicacion, respuestaCorrecta }: Props) {
  if (estado === 'sin-responder') return null;
  const ok = estado === 'correcta';
  const Icon = ok ? CheckCircle2 : XCircle;
  return (
    <div
      className={`rounded-lg px-3 py-2 flex gap-2 text-sm ${
        ok
          ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300'
          : 'bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300'
      }`}
      role="status"
    >
      <Icon size={18} className="shrink-0 mt-0.5" aria-hidden />
      <div className="space-y-1">
        <p className="font-semibold">{ok ? '¡Correcto!' : 'Incorrecto'}</p>
        {!ok && respuestaCorrecta && (
          <p>
            Respuesta correcta:{' '}
            <strong>
              <TextoConLatex texto={respuestaCorrecta} />
            </strong>
          </p>
        )}
        <p className="text-slate-700 dark:text-slate-300">
          <TextoConLatex texto={explicacion} />
        </p>
      </div>
    </div>
  );
}
