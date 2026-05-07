import { useState } from 'react';

/**
 * Visualiza un porcentaje como barra rellena. Slider del 0 al 100.
 */
export default function BarraPorcentaje() {
  const [pct, setPct] = useState(35);
  const total = 200;
  const valor = Math.round((total * pct) / 100);

  return (
    <div className="card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Barra de porcentaje</h4>
        <div className="font-mono text-2xl tabular-nums text-emerald-600 dark:text-emerald-400">
          {pct}%
        </div>
      </div>

      <div className="space-y-2">
        <div
          className="h-10 w-full rounded-lg overflow-hidden border-2 border-slate-300 dark:border-slate-700 relative"
          role="img"
          aria-label={`Barra al ${pct} por ciento`}
        >
          <div
            className="h-full bg-emerald-500 transition-all duration-150"
            style={{ width: `${pct}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold mix-blend-difference text-white">
            {pct}% de {total} = {valor}
          </div>
        </div>
      </div>

      <label className="block">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium">Porcentaje</span>
          <span className="font-mono text-sm">{pct}%</span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={pct}
          onChange={(e) => setPct(parseInt(e.target.value, 10))}
          className="w-full"
          aria-label="Porcentaje"
        />
      </label>

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
        {[10, 25, 50, 75, 100].map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setPct(p)}
            className={`btn text-sm ${
              pct === p
                ? 'bg-emerald-500 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            {p}%
          </button>
        ))}
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
        El {pct}% de {total} se calcula así: ({pct} ÷ 100) × {total} = <strong>{valor}</strong>.
      </p>
    </div>
  );
}
