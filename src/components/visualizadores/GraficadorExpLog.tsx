import { useState } from 'react';

/**
 * Graficador de funciones exponenciales y logarítmicas. Slider para la base.
 */
export default function GraficadorExpLog() {
  const [base, setBase] = useState(2);
  const [tipo, setTipo] = useState<'exp' | 'log'>('exp');

  const min = -6;
  const max = 6;
  const size = 320;
  const escala = size / (max - min);
  const xPx = (x: number) => (x - min) * escala;
  const yPx = (y: number) => size - (y - min) * escala;

  // Generar puntos
  const puntos: string[] = [];
  if (tipo === 'exp') {
    for (let xi = min; xi <= max; xi += 0.1) {
      const yi = Math.pow(base, xi);
      if (yi >= min && yi <= max) puntos.push(`${xPx(xi)},${yPx(yi)}`);
    }
  } else {
    for (let xi = 0.05; xi <= max; xi += 0.05) {
      const yi = Math.log(xi) / Math.log(base);
      if (yi >= min && yi <= max) puntos.push(`${xPx(xi)},${yPx(yi)}`);
    }
  }
  const path = puntos.length > 0 ? `M ${puntos.join(' L ')}` : '';

  return (
    <div className="card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">{tipo === 'exp' ? 'Exponencial' : 'Logarítmica'}</h4>
        <div className="font-mono text-sm text-amber-600 dark:text-amber-400">
          {tipo === 'exp' ? `y = ${base}^x` : `y = log_${base}(x)`}
        </div>
      </div>

      <div className="flex justify-center">
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-[540px]">
          {Array.from({ length: max - min + 1 }, (_, i) => i + min).map((v) => (
            <g key={v}>
              <line x1={xPx(v)} y1={0} x2={xPx(v)} y2={size} className="stroke-slate-200 dark:stroke-slate-700" strokeWidth={0.5} />
              <line x1={0} y1={yPx(v)} x2={size} y2={yPx(v)} className="stroke-slate-200 dark:stroke-slate-700" strokeWidth={0.5} />
            </g>
          ))}
          <line x1={xPx(min)} y1={yPx(0)} x2={xPx(max)} y2={yPx(0)} className="stroke-slate-500" strokeWidth={1.5} />
          <line x1={xPx(0)} y1={yPx(min)} x2={xPx(0)} y2={yPx(max)} className="stroke-slate-500" strokeWidth={1.5} />
          {/* Etiquetas numéricas de los ejes */}
          {[-6, -4, -2, 2, 4, 6].map((v) => (
            <g key={`tick-${v}`}>
              <text
                x={xPx(v)}
                y={yPx(0) + 12}
                textAnchor="middle"
                className="fill-slate-500 dark:fill-slate-400"
                fontSize="9"
              >
                {v}
              </text>
              <text
                x={xPx(0) - 6}
                y={yPx(v) + 3}
                textAnchor="end"
                className="fill-slate-500 dark:fill-slate-400"
                fontSize="9"
              >
                {v}
              </text>
            </g>
          ))}
          {/* Letras de los ejes */}
          <text
            x={size - 4}
            y={yPx(0) - 6}
            textAnchor="end"
            className="fill-slate-600 dark:fill-slate-300 italic"
            fontSize="11"
            fontWeight="600"
          >
            x
          </text>
          <text
            x={xPx(0) + 8}
            y={12}
            className="fill-slate-600 dark:fill-slate-300 italic"
            fontSize="11"
            fontWeight="600"
          >
            y
          </text>
          <path d={path} className="stroke-amber-500" strokeWidth={2.5} fill="none" />
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <label className="block">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium">Base</span>
            <span className="font-mono text-sm">{base}</span>
          </div>
          <input
            type="range"
            min={1.5}
            max={5}
            step={0.5}
            value={base}
            onChange={(e) => setBase(parseFloat(e.target.value))}
            className="w-full"
            aria-label="Base"
          />
        </label>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => setTipo('exp')}
            className={`btn flex-1 text-sm ${tipo === 'exp' ? 'bg-amber-500 text-white' : 'bg-slate-100 dark:bg-slate-800'}`}
          >
            Exp
          </button>
          <button
            type="button"
            onClick={() => setTipo('log')}
            className={`btn flex-1 text-sm ${tipo === 'log' ? 'bg-amber-500 text-white' : 'bg-slate-100 dark:bg-slate-800'}`}
          >
            Log
          </button>
        </div>
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
        {tipo === 'exp'
          ? `Pasa por (0, 1) y (1, ${base}). Asíntota horizontal y = 0.`
          : `Pasa por (1, 0) y (${base}, 1). Asíntota vertical x = 0.`}
      </p>
    </div>
  );
}
