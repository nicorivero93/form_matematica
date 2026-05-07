import type { PreguntaVF as Pregunta } from '@/data/temas/tipos';
import type { EstadoRespuesta } from './QuizRunner';
import { ResultadoFeedback } from './ResultadoFeedback';
import { TextoConLatex } from '../TextoConLatex';

type Props = {
  numero: number;
  pregunta: Pregunta;
  estado: EstadoRespuesta;
  onResponder: (correcta: boolean) => void;
};

export function PreguntaVF({ numero, pregunta, estado, onResponder }: Props) {
  const bloqueado = estado !== 'sin-responder';

  function elegir(valor: boolean) {
    if (bloqueado) return;
    onResponder(valor === pregunta.correcta);
  }

  return (
    <div className="card p-4 space-y-3">
      <div className="flex gap-3">
        <span className="font-semibold text-slate-400 shrink-0">{numero}.</span>
        <p className="font-medium">
          <TextoConLatex texto={pregunta.enunciado} />
        </p>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => elegir(true)}
          disabled={bloqueado}
          className="btn-secondary flex-1 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Verdadero
        </button>
        <button
          type="button"
          onClick={() => elegir(false)}
          disabled={bloqueado}
          className="btn-secondary flex-1 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Falso
        </button>
      </div>
      <ResultadoFeedback
        estado={estado}
        explicacion={pregunta.explicacion}
        respuestaCorrecta={pregunta.correcta ? 'Verdadero' : 'Falso'}
      />
    </div>
  );
}
