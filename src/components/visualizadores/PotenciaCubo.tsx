import { useState } from 'react';

/**
 * Visualiza una potencia chica (n²) como un grilla cuadrada y (n³) como cubo.
 */
export default function PotenciaCubo() {
  const [n, setN] = useState(4);
  const [exponente, setExponente] = useState<2 | 3>(2);
  const resultado = exponente === 2 ? n * n : n * n * n;

  return (
    <div className="card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Potencias visualizadas</h4>
        <div className="font-mono text-2xl tabular-nums text-indigo-600 dark:text-indigo-400">
          {n}^{exponente} = {resultado}
        </div>
      </div>

      <div className="flex justify-center min-h-[180px]">
        {exponente === 2 ? (
          <Grid n={n} />
        ) : (
          <CuboIso n={n} />
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <label className="block">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium">Base (n)</span>
            <span className="font-mono text-sm">{n}</span>
          </div>
          <input
            type="range"
            min={1}
            max={8}
            value={n}
            onChange={(e) => setN(parseInt(e.target.value, 10))}
            className="w-full"
            aria-label="Base"
          />
        </label>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setExponente(2)}
            className={`btn flex-1 ${exponente === 2 ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'}`}
          >
            n²
          </button>
          <button
            type="button"
            onClick={() => setExponente(3)}
            className={`btn flex-1 ${exponente === 3 ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'}`}
          >
            n³
          </button>
        </div>
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
        {exponente === 2
          ? `Un cuadrado de ${n} × ${n} tiene ${resultado} cuadraditos.`
          : `Un cubo de ${n} × ${n} × ${n} tiene ${resultado} cubitos.`}
      </p>
    </div>
  );
}

function Grid({ n }: { n: number }) {
  const cell = 24;
  const size = n * cell;
  const cells = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      cells.push(
        <rect
          key={`${i}-${j}`}
          x={j * cell}
          y={i * cell}
          width={cell}
          height={cell}
          className="fill-indigo-500/30 stroke-indigo-500"
          strokeWidth={1}
        />
      );
    }
  }
  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="max-w-[200px]" role="img" aria-label={`Cuadrado de ${n} por ${n}`}>
      {cells}
    </svg>
  );
}

function CuboIso({ n }: { n: number }) {
  const cell = 18;
  const offset = cell * 0.55;
  const totalW = n * cell + n * offset + 20;
  const totalH = n * cell + n * offset + 20;
  const baseX = 10;
  const baseY = totalH - 10 - n * cell;

  // Renderizamos solo las 3 caras visibles (frente, derecha, arriba) — no todos los cubitos individuales para mantener simple.
  const front: [number, number][] = [
    [baseX, baseY],
    [baseX + n * cell, baseY],
    [baseX + n * cell, baseY + n * cell],
    [baseX, baseY + n * cell],
  ];
  const right: [number, number][] = [
    [baseX + n * cell, baseY],
    [baseX + n * cell + n * offset, baseY - n * offset],
    [baseX + n * cell + n * offset, baseY + n * cell - n * offset],
    [baseX + n * cell, baseY + n * cell],
  ];
  const top: [number, number][] = [
    [baseX, baseY],
    [baseX + n * offset, baseY - n * offset],
    [baseX + n * cell + n * offset, baseY - n * offset],
    [baseX + n * cell, baseY],
  ];

  const path = (pts: [number, number][]) => `M ${pts.map((p) => p.join(',')).join(' L ')} Z`;

  // Líneas de grilla en la cara frontal
  const lines = [];
  for (let i = 1; i < n; i++) {
    lines.push(
      <line
        key={`h${i}`}
        x1={baseX}
        y1={baseY + i * cell}
        x2={baseX + n * cell}
        y2={baseY + i * cell}
        className="stroke-indigo-700"
        strokeWidth={0.5}
      />,
      <line
        key={`v${i}`}
        x1={baseX + i * cell}
        y1={baseY}
        x2={baseX + i * cell}
        y2={baseY + n * cell}
        className="stroke-indigo-700"
        strokeWidth={0.5}
      />
    );
  }

  return (
    <svg viewBox={`0 0 ${totalW} ${totalH}`} className="max-w-[260px]" role="img" aria-label={`Cubo de lado ${n}`}>
      <path d={path(top)} className="fill-indigo-500/20 stroke-indigo-500" strokeWidth={1.5} />
      <path d={path(right)} className="fill-indigo-500/30 stroke-indigo-500" strokeWidth={1.5} />
      <path d={path(front)} className="fill-indigo-500/40 stroke-indigo-500" strokeWidth={1.5} />
      {lines}
    </svg>
  );
}
