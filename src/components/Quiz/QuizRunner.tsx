import { useState } from 'react';
import { RotateCcw, CheckCircle2 } from 'lucide-react';
import type { Quiz, PreguntaQuiz } from '@/data/temas/tipos';
import { useProgreso } from '@/store/progreso';
import { PreguntaNumerica } from './PreguntaNumerica';
import { PreguntaMultiple } from './PreguntaMultiple';
import { PreguntaVF } from './PreguntaVF';

type Props = {
  /** Slug del tema — para persistir el score. */
  temaSlug: string;
  quiz: Quiz;
};

export type EstadoRespuesta = 'sin-responder' | 'correcta' | 'incorrecta';

export function QuizRunner({ temaSlug, quiz }: Props) {
  const [estados, setEstados] = useState<EstadoRespuesta[]>(
    () => quiz.preguntas.map(() => 'sin-responder')
  );
  const [terminado, setTerminado] = useState(false);
  const guardarScoreQuiz = useProgreso((s) => s.guardarScoreQuiz);

  const totalRespondidas = estados.filter((e) => e !== 'sin-responder').length;
  const correctas = estados.filter((e) => e === 'correcta').length;
  const total = quiz.preguntas.length;

  function manejarRespuesta(idx: number, fueCorrecta: boolean) {
    setEstados((prev) => {
      const next = [...prev];
      next[idx] = fueCorrecta ? 'correcta' : 'incorrecta';
      // Si todas respondidas, persistimos score y mostramos resumen.
      const respondidas = next.filter((e) => e !== 'sin-responder').length;
      if (respondidas === total) {
        const ok = next.filter((e) => e === 'correcta').length;
        guardarScoreQuiz(temaSlug, ok, total);
        setTerminado(true);
      }
      return next;
    });
  }

  function reiniciar() {
    setEstados(quiz.preguntas.map(() => 'sin-responder'));
    setTerminado(false);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-500 dark:text-slate-400">
          {totalRespondidas}/{total} respondidas
        </span>
        {totalRespondidas > 0 && !terminado && (
          <span className="text-slate-500 dark:text-slate-400">
            {correctas} correctas
          </span>
        )}
      </div>

      {quiz.preguntas.map((p, i) => (
        <PreguntaItem
          key={i}
          numero={i + 1}
          pregunta={p}
          estado={estados[i]}
          onResponder={(ok) => manejarRespuesta(i, ok)}
        />
      ))}

      {terminado && (
        <div className="card p-5 text-center space-y-3 border-emerald-500/40 bg-emerald-500/5">
          <CheckCircle2 className="text-emerald-500 mx-auto" size={36} aria-hidden />
          <h3 className="text-lg font-semibold">
            {correctas === total
              ? '¡Excelente, todas correctas!'
              : `${correctas} de ${total} correctas`}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {correctas === total
              ? 'Probá marcar el tema como aprendido.'
              : 'Repasá las que fallaste y volvé a intentar.'}
          </p>
          <button onClick={reiniciar} className="btn-secondary inline-flex">
            <RotateCcw size={16} aria-hidden />
            Reintentar
          </button>
        </div>
      )}
    </div>
  );
}

function PreguntaItem({
  numero,
  pregunta,
  estado,
  onResponder,
}: {
  numero: number;
  pregunta: PreguntaQuiz;
  estado: EstadoRespuesta;
  onResponder: (correcta: boolean) => void;
}) {
  switch (pregunta.tipo) {
    case 'numerica':
      return (
        <PreguntaNumerica
          numero={numero}
          pregunta={pregunta}
          estado={estado}
          onResponder={onResponder}
        />
      );
    case 'multiple':
      return (
        <PreguntaMultiple
          numero={numero}
          pregunta={pregunta}
          estado={estado}
          onResponder={onResponder}
        />
      );
    case 'verdadero-falso':
      return (
        <PreguntaVF
          numero={numero}
          pregunta={pregunta}
          estado={estado}
          onResponder={onResponder}
        />
      );
  }
}
