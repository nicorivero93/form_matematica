import { useState } from 'react';

/**
 * Plano cartesiano interactivo. Click en el plano para colocar un punto.
 */
export default function PlanoCartesiano() {
  const [punto, setPunto] = useState({ x: 3, y: 2 });
  const min = -8;
  const max = 8;
  const size = 320;
  const escala = size / (max - min);

  const xPx = (x: number) => (x - min) * escala;
  const yPx = (y: number) => size - (y - min) * escala;

  function onClickSvg(e: React.MouseEvent<SVGSVGElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * (max - min) + min);
    const y = Math.round(max - ((e.clientY - rect.top) / rect.height) * (max - min));
    setPunto({
      x: Math.max(min, Math.min(max, x)),
      y: Math.max(min, Math.min(max, y)),
    });
  }

  return (
    <div className="card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Plano cartesiano</h4>
        <div className="font-mono text-lg text-indigo-600 dark:text-indigo-400">
          ({punto.x}, {punto.y})
        </div>
      </div>

      <div className="flex justify-center">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="w-full max-w-[540px] cursor-crosshair touch-none"
          onClick={onClickSvg}
          role="img"
          aria-label={`Plano cartesiano con punto en ${punto.x}, ${punto.y}`}
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
          {/* Punto */}
          <line
            x1={xPx(0)}
            y1={yPx(punto.y)}
            x2={xPx(punto.x)}
            y2={yPx(punto.y)}
            className="stroke-indigo-400"
            strokeWidth={1}
            strokeDasharray="3 3"
          />
          <line
            x1={xPx(punto.x)}
            y1={yPx(0)}
            x2={xPx(punto.x)}
            y2={yPx(punto.y)}
            className="stroke-indigo-400"
            strokeWidth={1}
            strokeDasharray="3 3"
          />
          <circle cx={xPx(punto.x)} cy={yPx(punto.y)} r={6} className="fill-indigo-500" />
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Slider label="x" min={min} max={max} value={punto.x} onChange={(x) => setPunto((p) => ({ ...p, x }))} />
        <Slider label="y" min={min} max={max} value={punto.y} onChange={(y) => setPunto((p) => ({ ...p, y }))} />
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
        El punto ({punto.x}, {punto.y}) está en el cuadrante{' '}
        {punto.x > 0 && punto.y > 0
          ? 'I'
          : punto.x < 0 && punto.y > 0
          ? 'II'
          : punto.x < 0 && punto.y < 0
          ? 'III'
          : punto.x > 0 && punto.y < 0
          ? 'IV'
          : 'sobre un eje'}.
      </p>
    </div>
  );
}

function Slider({
  label,
  min,
  max,
  value,
  onChange,
}: {
  label: string;
  min: number;
  max: number;
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
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className="w-full"
        aria-label={label}
      />
    </label>
  );
}
