import { useState } from 'react';

/**
 * Graficador de funciones lineales y = mx + b. Sliders para m y b.
 */
export default function GraficadorLineal() {
  const [m, setM] = useState(2);
  const [b, setB] = useState(1);
  const min = -10;
  const max = 10;
  const size = 320;
  const escala = size / (max - min);

  const xPx = (x: number) => (x - min) * escala;
  const yPx = (y: number) => size - (y - min) * escala;

  // Calcular dos puntos del extremo del gráfico
  const x1 = min;
  const y1 = m * x1 + b;
  const x2 = max;
  const y2 = m * x2 + b;

  return (
    <div className="card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Función lineal</h4>
        <div className="font-mono text-lg text-purple-600 dark:text-purple-400">
          y = {m}x {b >= 0 ? '+' : '-'} {Math.abs(b)}
        </div>
      </div>

      <div className="flex justify-center">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="w-full max-w-[320px]"
          role="img"
          aria-label={`Gráfico de y = ${m}x + ${b}`}
        >
          {/* Grilla */}
          {Array.from({ length: max - min + 1 }, (_, i) => i + min).map((v) => (
            <g key={v}>
              <line
                x1={xPx(v)}
                y1={0}
                x2={xPx(v)}
                y2={size}
                className="stroke-slate-200 dark:stroke-slate-700"
                strokeWidth={0.5}
              />
              <line
                x1={0}
                y1={yPx(v)}
                x2={size}
                y2={yPx(v)}
                className="stroke-slate-200 dark:stroke-slate-700"
                strokeWidth={0.5}
              />
            </g>
          ))}
          {/* Ejes */}
          <line
            x1={xPx(min)}
            y1={yPx(0)}
            x2={xPx(max)}
            y2={yPx(0)}
            className="stroke-slate-500"
            strokeWidth={1.5}
          />
          <line
            x1={xPx(0)}
            y1={yPx(min)}
            x2={xPx(0)}
            y2={yPx(max)}
            className="stroke-slate-500"
            strokeWidth={1.5}
          />
          {/* Recta */}
          <line
            x1={xPx(x1)}
            y1={yPx(y1)}
            x2={xPx(x2)}
            y2={yPx(y2)}
            className="stroke-purple-500"
            strokeWidth={2.5}
          />
          {/* Ordenada al origen */}
          <circle cx={xPx(0)} cy={yPx(b)} r={5} className="fill-purple-500" />
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Slider label="Pendiente (m)" min={-5} max={5} step={0.5} value={m} onChange={setM} />
        <Slider label="Ordenada (b)" min={-8} max={8} step={1} value={b} onChange={setB} />
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
        Pendiente {m} · Corta al eje y en (0, {b}) · {m > 0 ? 'creciente' : m < 0 ? 'decreciente' : 'constante'}
      </p>
    </div>
  );
}

function Slider({
  label,
  min,
  max,
  step,
  value,
  onChange,
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="font-mono text-sm">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full"
        aria-label={label}
      />
    </label>
  );
}
