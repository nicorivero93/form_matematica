import { useState } from 'react';
import type { PreguntaNumerica as Pregunta } from '@/data/temas/tipos';
import type { EstadoRespuesta } from './QuizRunner';
import { ResultadoFeedback } from './ResultadoFeedback';
import { TextoConLatex } from '../TextoConLatex';

type Props = {
  numero: number;
  pregunta: Pregunta;
  estado: EstadoRespuesta;
  onResponder: (correcta: boolean) => void;
};

export function PreguntaNumerica({ numero, pregunta, estado, onResponder }: Props) {
  const [valor, setValor] = useState('');
  const bloqueado = estado !== 'sin-responder';

  function verificar(e: React.FormEvent) {
    e.preventDefault();
    if (bloqueado) return;
    const num = parseFloat(valor.replace(',', '.'));
    if (Number.isNaN(num)) return;
    const tol = pregunta.tolerancia ?? 0.001;
    const ok = Math.abs(num - pregunta.respuesta) <= tol;
    onResponder(ok);
  }

  return (
    <form onSubmit={verificar} className="card p-4 space-y-3">
      <div className="flex gap-3">
        <span className="font-semibold text-slate-400 shrink-0">{numero}.</span>
        <p className="font-medium">
          <TextoConLatex texto={pregunta.enunciado} />
        </p>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          inputMode="decimal"
          autoComplete="off"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          disabled={bloqueado}
          placeholder="Tu respuesta"
          className="flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900 disabled:opacity-60"
          aria-label={`Respuesta a la pregunta ${numero}`}
        />
        {pregunta.unidad && (
          <span className="text-sm text-slate-500 dark:text-slate-400">{pregunta.unidad}</span>
        )}
        <button
          type="submit"
          disabled={bloqueado || valor.trim() === ''}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Verificar
        </button>
      </div>
      <ResultadoFeedback
        estado={estado}
        explicacion={pregunta.explicacion}
        respuestaCorrecta={`${pregunta.respuesta}${pregunta.unidad ? ' ' + pregunta.unidad : ''}`}
      />
    </form>
  );
}
