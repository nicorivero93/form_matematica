import { useState } from 'react';

/**
 * Graficador de la parábola y = ax² + bx + c. Sliders para a, b y c.
 */
export default function GraficadorCuadratica() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const min = -8;
  const max = 8;
  const size = 320;
  const escala = size / (max - min);

  const xPx = (x: number) => (x - min) * escala;
  const yPx = (y: number) => size - (y - min) * escala;

  // Generar puntos de la parábola
  const puntos: string[] = [];
  for (let xi = min; xi <= max; xi += 0.2) {
    const yi = a * xi * xi + b * xi + c;
    if (yi >= min && yi <= max) {
      puntos.push(`${xPx(xi)},${yPx(yi)}`);
    }
  }
  const path = puntos.length > 0 ? `M ${puntos.join(' L ')}` : '';

  // Vértice
  const xv = a !== 0 ? -b / (2 * a) : 0;
  const yv = a * xv * xv + b * xv + c;

  return (
    <div className="card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Función cuadrática</h4>
        <div className="font-mono text-sm text-violet-600 dark:text-violet-400">
          y = {a}x² {b >= 0 ? '+' : '-'} {Math.abs(b)}x {c >= 0 ? '+' : '-'} {Math.abs(c)}
        </div>
      </div>

      <div className="flex justify-center">
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-[320px]" role="img" aria-label="Gráfico parábola">
          {/* Grilla */}
          {Array.from({ length: max - min + 1 }, (_, i) => i + min).map((v) => (
            <g key={v}>
              <line x1={xPx(v)} y1={0} x2={xPx(v)} y2={size} className="stroke-slate-200 dark:stroke-slate-700" strokeWidth={0.5} />
              <line x1={0} y1={yPx(v)} x2={size} y2={yPx(v)} className="stroke-slate-200 dark:stroke-slate-700" strokeWidth={0.5} />
            </g>
          ))}
          {/* Ejes */}
          <line x1={xPx(min)} y1={yPx(0)} x2={xPx(max)} y2={yPx(0)} className="stroke-slate-500" strokeWidth={1.5} />
          <line x1={xPx(0)} y1={yPx(min)} x2={xPx(0)} y2={yPx(max)} className="stroke-slate-500" strokeWidth={1.5} />
          {/* Etiquetas numéricas de los ejes */}
          {[-8, -6, -4, -2, 2, 4, 6, 8].map((v) => (
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
          {/* Parábola */}
          <path d={path} className="stroke-violet-500" strokeWidth={2.5} fill="none" />
          {/* Vértice */}
          {yv >= min && yv <= max && (
            <circle cx={xPx(xv)} cy={yPx(yv)} r={5} className="fill-violet-500" />
          )}
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Slider label="a" min={-3} max={3} step={0.5} value={a} onChange={setA} />
        <Slider label="b" min={-6} max={6} step={1} value={b} onChange={setB} />
        <Slider label="c" min={-6} max={6} step={1} value={c} onChange={setC} />
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
        Vértice ≈ ({xv.toFixed(2)}, {yv.toFixed(2)}) · Abre {a > 0 ? 'arriba' : a < 0 ? 'abajo' : 'no es parábola'}
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
