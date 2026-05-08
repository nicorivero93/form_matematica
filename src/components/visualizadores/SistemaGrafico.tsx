import { useState } from 'react';

/**
 * Sistema de 2 ecuaciones lineales: dos rectas y su intersección.
 * El alumno mueve m1, b1, m2, b2 y ve dónde se cortan, o si son
 * paralelas (sin solución) o coincidentes (infinitas soluciones).
 */
export default function SistemaGrafico() {
  const [m1, setM1] = useState(1);
  const [b1, setB1] = useState(2);
  const [m2, setM2] = useState(-1);
  const [b2, setB2] = useState(4);

  const min = -10;
  const max = 10;
  const size = 320;
  const escala = size / (max - min);
  const xPx = (x: number) => (x - min) * escala;
  const yPx = (y: number) => size - (y - min) * escala;

  // Intersección: m1·x + b1 = m2·x + b2 → x = (b2 − b1) / (m1 − m2)
  const paralelas = m1 === m2 && b1 !== b2;
  const coincidentes = m1 === m2 && b1 === b2;
  const corta = !paralelas && !coincidentes;

  let xInt = 0;
  let yInt = 0;
  if (corta) {
    xInt = (b2 - b1) / (m1 - m2);
    yInt = m1 * xInt + b1;
  }

  const dentroDelGrafico = corta && xInt >= min && xInt <= max && yInt >= min && yInt <= max;

  let diagnostico: string;
  let color: string;
  if (paralelas) {
    diagnostico = 'Sistema incompatible (rectas paralelas, no hay solución)';
    color = 'text-rose-600 dark:text-rose-400';
  } else if (coincidentes) {
    diagnostico = 'Sistema indeterminado (misma recta, infinitas soluciones)';
    color = 'text-amber-600 dark:text-amber-400';
  } else {
    diagnostico = `Sistema compatible determinado: x = ${xInt.toFixed(2)}, y = ${yInt.toFixed(2)}`;
    color = 'text-emerald-600 dark:text-emerald-400';
  }

  return (
    <div className="card p-5 space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h4 className="font-semibold">Sistema gráfico</h4>
        <div className="font-mono text-xs text-slate-500 dark:text-slate-400 text-right">
          <div className="text-sky-600 dark:text-sky-400">y = {m1}x {b1 >= 0 ? '+' : '−'} {Math.abs(b1)}</div>
          <div className="text-rose-600 dark:text-rose-400">y = {m2}x {b2 >= 0 ? '+' : '−'} {Math.abs(b2)}</div>
        </div>
      </div>

      <div className="flex justify-center">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="w-full max-w-[540px]"
          role="img"
          aria-label={`Sistema gráfico de y=${m1}x+${b1} y y=${m2}x+${b2}`}
        >
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
          {/* Etiquetas numéricas */}
          {[-10, -8, -6, -4, -2, 2, 4, 6, 8, 10].map((v) => (
            <g key={`tick-${v}`}>
              <text x={xPx(v)} y={yPx(0) + 12} textAnchor="middle" className="fill-slate-500 dark:fill-slate-400" fontSize="9">{v}</text>
              <text x={xPx(0) - 6} y={yPx(v) + 3} textAnchor="end" className="fill-slate-500 dark:fill-slate-400" fontSize="9">{v}</text>
            </g>
          ))}
          {/* Letras de los ejes */}
          <text x={size - 4} y={yPx(0) - 6} textAnchor="end" className="fill-slate-600 dark:fill-slate-300 italic" fontSize="11" fontWeight="600">x</text>
          <text x={xPx(0) + 8} y={12} className="fill-slate-600 dark:fill-slate-300 italic" fontSize="11" fontWeight="600">y</text>

          {/* Recta 1 (azul) */}
          <line
            x1={xPx(min)}
            y1={yPx(m1 * min + b1)}
            x2={xPx(max)}
            y2={yPx(m1 * max + b1)}
            className="stroke-sky-500"
            strokeWidth={2.5}
          />
          {/* Recta 2 (rosa). Si es coincidente, la dibujo más fina punteada arriba */}
          <line
            x1={xPx(min)}
            y1={yPx(m2 * min + b2)}
            x2={xPx(max)}
            y2={yPx(m2 * max + b2)}
            className="stroke-rose-500"
            strokeWidth={coincidentes ? 1.5 : 2.5}
            strokeDasharray={coincidentes ? '5 4' : undefined}
          />

          {/* Punto de intersección */}
          {dentroDelGrafico && (
            <g>
              {/* Líneas guía punteadas hacia los ejes */}
              <line x1={xPx(0)} y1={yPx(yInt)} x2={xPx(xInt)} y2={yPx(yInt)} className="stroke-emerald-400" strokeWidth={1} strokeDasharray="3 3" />
              <line x1={xPx(xInt)} y1={yPx(0)} x2={xPx(xInt)} y2={yPx(yInt)} className="stroke-emerald-400" strokeWidth={1} strokeDasharray="3 3" />
              <circle cx={xPx(xInt)} cy={yPx(yInt)} r={6} className="fill-emerald-500 stroke-white dark:stroke-slate-900" strokeWidth={2} />
              <text
                x={xPx(xInt) + 8}
                y={yPx(yInt) - 8}
                className="fill-emerald-600 dark:fill-emerald-300 font-semibold"
                fontSize="11"
              >
                ({xInt.toFixed(1)}, {yInt.toFixed(1)})
              </text>
            </g>
          )}
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Slider label="m₁" min={-5} max={5} step={0.5} value={m1} onChange={setM1} color="sky" />
        <Slider label="b₁" min={-8} max={8} step={1} value={b1} onChange={setB1} color="sky" />
        <Slider label="m₂" min={-5} max={5} step={0.5} value={m2} onChange={setM2} color="rose" />
        <Slider label="b₂" min={-8} max={8} step={1} value={b2} onChange={setB2} color="rose" />
      </div>

      <p className={`text-sm text-center font-semibold ${color}`}>{diagnostico}</p>

      <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
        Probá: igual pendiente y distinta b → paralelas · todo igual → coincidentes · pendientes distintas → corte único.
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
  color,
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  color: 'sky' | 'rose';
}) {
  const colorClass = color === 'sky' ? 'text-sky-600 dark:text-sky-400' : 'text-rose-600 dark:text-rose-400';
  return (
    <label className="block">
      <div className="flex items-center justify-between mb-1">
        <span className={`text-sm font-medium ${colorClass}`}>{label}</span>
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
