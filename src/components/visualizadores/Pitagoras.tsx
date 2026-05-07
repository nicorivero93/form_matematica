import { useState } from 'react';

/**
 * Visualiza el teorema de Pitágoras: triángulo rectángulo con cuadrados sobre cada lado.
 * Slider para los catetos.
 */
export default function Pitagoras() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);
  const c = Math.sqrt(a * a + b * b);
  const c2 = a * a + b * b;

  const escala = 18;
  const padding = 20;
  // Triángulo en (padding, padding+a*escala) -> (padding+b*escala, padding+a*escala) -> (padding, padding)
  const aPx = a * escala;
  const bPx = b * escala;

  const x0 = padding + aPx;
  const y0 = padding + aPx;
  const triA: [number, number] = [x0, y0];
  const triB: [number, number] = [x0 + bPx, y0];
  const triC: [number, number] = [x0, y0 - aPx];

  // Cuadrado sobre cateto a (a la izquierda del triángulo)
  const cuadA = `M ${triA[0]} ${triA[1]} L ${triA[0] - aPx} ${triA[1]} L ${triA[0] - aPx} ${triA[1] - aPx} L ${triA[0]} ${triA[1] - aPx} Z`;

  // Cuadrado sobre cateto b (debajo del triángulo)
  const cuadB = `M ${triA[0]} ${triA[1]} L ${triB[0]} ${triB[1]} L ${triB[0]} ${triB[1] + bPx} L ${triA[0]} ${triA[1] + bPx} Z`;

  // Cuadrado sobre hipotenusa: rotado. Calculamos puntos.
  // Vector hipotenusa (de C a B): (bPx, aPx). Perpendicular hacia "afuera": (aPx, -bPx) (girar 90° hacia adelante).
  const hx = bPx;
  const hy = aPx;
  const px = hy; // perpendicular x (rotado +90)
  const py = -hx;
  const cuadH = `M ${triC[0]} ${triC[1]} L ${triB[0]} ${triB[1]} L ${triB[0] + px} ${triB[1] + py} L ${triC[0] + px} ${triC[1] + py} Z`;

  const vbWidth = Math.max(triB[0] + px, triA[0]) + padding;
  const vbHeight = Math.max(triA[1] + bPx, triA[1]) + padding;

  return (
    <div className="card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Teorema de Pitágoras</h4>
        <div className="font-mono text-lg text-rose-600 dark:text-rose-400">
          c² = {c2} → c ≈ {c.toFixed(2)}
        </div>
      </div>

      <div className="flex justify-center overflow-x-auto no-scrollbar">
        <svg
          viewBox={`-${padding} -${padding} ${vbWidth + padding} ${vbHeight + padding}`}
          className="w-full max-w-[400px]"
          role="img"
          aria-label={`Triángulo rectángulo con catetos ${a} y ${b}`}
        >
          <path d={cuadA} className="fill-blue-500/30 stroke-blue-500" strokeWidth={1.5} />
          <text x={triA[0] - aPx / 2} y={triA[1] - aPx / 2 + 4} textAnchor="middle" className="fill-current text-blue-600 dark:text-blue-300 font-semibold" fontSize="13">
            a² = {a * a}
          </text>
          <path d={cuadB} className="fill-emerald-500/30 stroke-emerald-500" strokeWidth={1.5} />
          <text x={triA[0] + bPx / 2} y={triA[1] + bPx / 2 + 4} textAnchor="middle" className="fill-current text-emerald-600 dark:text-emerald-300 font-semibold" fontSize="13">
            b² = {b * b}
          </text>
          <path d={cuadH} className="fill-rose-500/30 stroke-rose-500" strokeWidth={1.5} />
          {/* Triángulo encima */}
          <path
            d={`M ${triA[0]} ${triA[1]} L ${triB[0]} ${triB[1]} L ${triC[0]} ${triC[1]} Z`}
            className="fill-slate-500/30 stroke-slate-700 dark:stroke-slate-200"
            strokeWidth={2}
          />
          <text x={triA[0] + bPx / 2 + 5} y={triC[1] + aPx / 2 - 2} className="fill-current text-rose-600 dark:text-rose-300 font-semibold" fontSize="13">
            c
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Slider label="Cateto a" min={1} max={8} value={a} onChange={setA} />
        <Slider label="Cateto b" min={1} max={8} value={b} onChange={setB} />
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
        a² + b² = c² → {a}² + {b}² = {a * a} + {b * b} = <strong>{c2}</strong> → c = √{c2} ≈ <strong>{c.toFixed(2)}</strong>
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
