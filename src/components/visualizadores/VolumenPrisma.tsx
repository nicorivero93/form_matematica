import { useState } from 'react';

/**
 * Visualiza el volumen de un prisma rectangular (caja) con sliders para
 * largo, ancho y alto. Renderiza una proyección isométrica simple.
 */
export default function VolumenPrisma() {
  const [largo, setLargo] = useState(5);
  const [ancho, setAncho] = useState(3);
  const [alto, setAlto] = useState(4);

  const volumen = largo * ancho * alto;
  const escala = 18;

  // Proyección isométrica simple: x desplaza horizontal, y vertical y z (alto) sube.
  // dx, dy son los offsets de la dimensión "ancho" (z hacia atrás-arriba)
  const dxAncho = ancho * escala * 0.6;
  const dyAncho = -ancho * escala * 0.4;

  const ax = 70;
  const ay = 200;
  const wPx = largo * escala;
  const hPx = alto * escala;

  // 8 vértices del prisma (frente y atrás)
  const f1 = [ax, ay];
  const f2 = [ax + wPx, ay];
  const f3 = [ax + wPx, ay - hPx];
  const f4 = [ax, ay - hPx];
  const b1 = [ax + dxAncho, ay + dyAncho];
  const b2 = [ax + wPx + dxAncho, ay + dyAncho];
  const b3 = [ax + wPx + dxAncho, ay - hPx + dyAncho];
  const b4 = [ax + dxAncho, ay - hPx + dyAncho];

  const path = (pts: number[][]) => `M ${pts.map((p) => p.join(',')).join(' L ')} Z`;

  const vbWidth = wPx + dxAncho + 100;
  const vbHeight = hPx + Math.abs(dyAncho) + 80;

  return (
    <div className="card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Volumen de un prisma rectangular</h4>
        <div className="font-mono text-lg text-purple-600 dark:text-purple-400">
          V = {volumen} cm³
        </div>
      </div>

      <div className="flex justify-center overflow-x-auto no-scrollbar">
        <svg
          viewBox={`0 0 ${vbWidth} ${vbHeight}`}
          className="w-full max-w-[420px]"
          role="img"
          aria-label={`Prisma de ${largo}×${ancho}×${alto}`}
        >
          {/* Cara trasera */}
          <path d={path([b1, b2, b3, b4])} className="fill-purple-500/20 stroke-purple-500" strokeWidth={1.5} />
          {/* Aristas que conectan frente con atrás */}
          <line x1={f1[0]} y1={f1[1]} x2={b1[0]} y2={b1[1]} className="stroke-purple-500" strokeWidth={1.5} />
          <line x1={f2[0]} y1={f2[1]} x2={b2[0]} y2={b2[1]} className="stroke-purple-500" strokeWidth={1.5} />
          <line x1={f3[0]} y1={f3[1]} x2={b3[0]} y2={b3[1]} className="stroke-purple-500" strokeWidth={1.5} />
          <line x1={f4[0]} y1={f4[1]} x2={b4[0]} y2={b4[1]} className="stroke-purple-500" strokeWidth={1.5} />
          {/* Cara frontal */}
          <path d={path([f1, f2, f3, f4])} className="fill-purple-500/40 stroke-purple-500" strokeWidth={2} />

          {/* Etiquetas */}
          <text x={ax + wPx / 2} y={ay + 24} textAnchor="middle" className="fill-current text-slate-600 dark:text-slate-300 font-semibold" fontSize="13">
            largo {largo} cm
          </text>
          <text x={ax - 12} y={ay - hPx / 2} textAnchor="end" dominantBaseline="middle" className="fill-current text-slate-600 dark:text-slate-300 font-semibold" fontSize="13">
            alto {alto} cm
          </text>
          <text x={ax + wPx + dxAncho / 2 + 4} y={ay + dyAncho / 2 + 14} className="fill-current text-slate-600 dark:text-slate-300 font-semibold" fontSize="13">
            ancho {ancho} cm
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Slider label="Largo" min={1} max={10} value={largo} onChange={setLargo} />
        <Slider label="Ancho" min={1} max={6} value={ancho} onChange={setAncho} />
        <Slider label="Alto" min={1} max={10} value={alto} onChange={setAlto} />
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
        V = largo × ancho × alto = {largo} × {ancho} × {alto} = <strong>{volumen} cm³</strong>
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
        <span className="font-mono text-sm">{value} cm</span>
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
