import { useState } from 'react';
import type { PreguntaMultiple as Pregunta } from '@/data/temas/tipos';
import type { EstadoRespuesta } from './QuizRunner';
import { ResultadoFeedback } from './ResultadoFeedback';
import { TextoConLatex } from '../TextoConLatex';

type Props = {
  numero: number;
  pregunta: Pregunta;
  estado: EstadoRespuesta;
  onResponder: (correcta: boolean) => void;
};

export function PreguntaMultiple({ numero, pregunta, estado, onResponder }: Props) {
  const [seleccionado, setSeleccionado] = useState<number | null>(null);
  const bloqueado = estado !== 'sin-responder';

  function verificar() {
    if (bloqueado || seleccionado === null) return;
    onResponder(seleccionado === pregunta.correcta);
  }

  return (
    <div className="card p-4 space-y-3">
      <div className="flex gap-3">
        <span className="font-semibold text-slate-400 shrink-0">{numero}.</span>
        <p className="font-medium">
          <TextoConLatex texto={pregunta.enunciado} />
        </p>
      </div>
      <ul className="space-y-2">
        {pregunta.opciones.map((opcion, i) => {
          const elegida = seleccionado === i;
          let estilos = 'border-slate-300 dark:border-slate-700';
          if (bloqueado) {
            if (i === pregunta.correcta) estilos = 'border-emerald-500 bg-emerald-500/10';
            else if (elegida) estilos = 'border-rose-500 bg-rose-500/10';
            else estilos = 'border-slate-300 dark:border-slate-700 opacity-60';
          } else if (elegida) {
            estilos = 'border-brand-500 ring-2 ring-brand-500/30';
          }
          return (
            <li key={i}>
              <button
                type="button"
                onClick={() => setSeleccionado(i)}
                disabled={bloqueado}
                className={`w-full text-left rounded-lg border px-3 py-2.5 transition-all ${estilos} disabled:cursor-not-allowed`}
                aria-pressed={elegida}
              >
                <span className="font-mono text-xs text-slate-400 mr-2">
                  {String.fromCharCode(97 + i)})
                </span>
                <TextoConLatex texto={opcion} />
              </button>
            </li>
          );
        })}
      </ul>
      {!bloqueado && (
        <button
          type="button"
          onClick={verificar}
          disabled={seleccionado === null}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Verificar
        </button>
      )}
      <ResultadoFeedback
        estado={estado}
        explicacion={pregunta.explicacion}
        respuestaCorrecta={pregunta.opciones[pregunta.correcta]}
      />
    </div>
  );
}
