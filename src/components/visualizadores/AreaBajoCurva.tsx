import { useState } from 'react';

/**
 * Visualiza área bajo y = x² entre a y b. Slider para a y b.
 */
export default function AreaBajoCurva() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(2);
  const min = -3;
  const max = 5;
  const yMin = -1;
  const yMax = 12;
  const size = 320;
  const escalaX = size / (max - min);
  const escalaY = size / (yMax - yMin);

  const xPx = (x: number) => (x - min) * escalaX;
  const yPx = (y: number) => size - (y - yMin) * escalaY;

  // Curva y = x²
  const puntos: string[] = [];
  for (let xi = min; xi <= max; xi += 0.05) {
    const yi = xi * xi;
    if (yi >= yMin && yi <= yMax) puntos.push(`${xPx(xi)},${yPx(yi)}`);
  }
  const path = puntos.length > 0 ? `M ${puntos.join(' L ')}` : '';

  // Área (polígono)
  const areaPts: string[] = [`${xPx(a)},${yPx(0)}`];
  for (let xi = a; xi <= b; xi += 0.05) {
    const yi = Math.min(xi * xi, yMax);
    areaPts.push(`${xPx(xi)},${yPx(yi)}`);
  }
  areaPts.push(`${xPx(b)},${yPx(0)}`);
  const areaPath = `M ${areaPts.join(' L ')} Z`;

  // Cálculo del área (integral de x² es x³/3)
  const areaValor = (b * b * b - a * a * a) / 3;

  return (
    <div className="card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Área bajo $y = x^2$</h4>
        <div className="font-mono text-sm text-rose-600 dark:text-rose-400">
          Área ≈ {areaValor.toFixed(3)}
        </div>
      </div>

      <div className="flex justify-center">
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-[540px]">
          {/* Grilla */}
          <line x1={xPx(min)} y1={yPx(0)} x2={xPx(max)} y2={yPx(0)} className="stroke-slate-500" strokeWidth={1.5} />
          <line x1={xPx(0)} y1={yPx(yMin)} x2={xPx(0)} y2={yPx(yMax)} className="stroke-slate-500" strokeWidth={1.5} />
          {/* Etiquetas numéricas — eje x */}
          {[-3, -2, -1, 1, 2, 3, 4, 5].map((v) => (
            <text
              key={`xtick-${v}`}
              x={xPx(v)}
              y={yPx(0) + 12}
              textAnchor="middle"
              className="fill-slate-500 dark:fill-slate-400"
              fontSize="9"
            >
              {v}
            </text>
          ))}
          {/* Etiquetas numéricas — eje y */}
          {[2, 4, 6, 8, 10, 12].map((v) => (
            <text
              key={`ytick-${v}`}
              x={xPx(0) - 6}
              y={yPx(v) + 3}
              textAnchor="end"
              className="fill-slate-500 dark:fill-slate-400"
              fontSize="9"
            >
              {v}
            </text>
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
          {/* Área */}
          <path d={areaPath} className="fill-rose-500/30 stroke-rose-500" strokeWidth={1} />
          {/* Curva */}
          <path d={path} className="stroke-rose-600" strokeWidth={2.5} fill="none" />
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Slider label="a (inicio)" min={-2} max={4} step={0.5} value={a} onChange={setA} />
        <Slider label="b (fin)" min={-2} max={4} step={0.5} value={b} onChange={setB} />
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
        $\\int_{`{${a}}^{${b}}`} x^2 \\, dx = \\dfrac{`{${b}^3 - ${a}^3}`}{`3`} \\approx {areaValor.toFixed(3)}$
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
