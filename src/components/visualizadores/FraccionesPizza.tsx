import { useState } from 'react';

/**
 * Visualizador de fracciones como porciones de pizza.
 * El alumno controla numerador y denominador con sliders.
 */
export default function FraccionesPizza() {
  const [denominador, setDenominador] = useState(4);
  const [numerador, setNumerador] = useState(1);

  const num = Math.min(numerador, denominador);

  return (
    <div className="card p-5 space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h4 className="font-semibold">Visualizador de fracciones</h4>
        <div className="font-mono text-2xl tabular-nums">
          <span className="text-amber-600 dark:text-amber-400">{num}</span>
          <span className="mx-1 text-slate-400">/</span>
          <span>{denominador}</span>
        </div>
      </div>

      <div className="flex justify-center">
        <Pizza partes={denominador} pintadas={num} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ControlSlider
          label="Numerador"
          min={0}
          max={denominador}
          valor={num}
          onChange={setNumerador}
          color="amber"
        />
        <ControlSlider
          label="Denominador"
          min={1}
          max={12}
          valor={denominador}
          onChange={(v) => {
            setDenominador(v);
            if (numerador > v) setNumerador(v);
          }}
          color="sky"
        />
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
        La pizza está dividida en {denominador} partes iguales y {num === 1 ? 'tomamos' : 'tomamos'}{' '}
        {num} {num === 1 ? 'parte' : 'partes'}.
      </p>
    </div>
  );
}

function Pizza({ partes, pintadas }: { partes: number; pintadas: number }) {
  const cx = 100;
  const cy = 100;
  const r = 90;

  // Caso especial: 1 parte completa
  if (partes === 1) {
    return (
      <svg viewBox="0 0 200 200" className="w-72 h-72 sm:w-80 sm:h-80" role="img" aria-label={`Pizza completa, ${pintadas} de 1 partes pintadas`}>
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill={pintadas === 1 ? 'currentColor' : 'transparent'}
          stroke="currentColor"
          strokeWidth={2}
          className={pintadas === 1 ? 'text-amber-500' : 'text-slate-400'}
        />
      </svg>
    );
  }

  const slices = Array.from({ length: partes }, (_, i) => {
    const angInicio = (i / partes) * 2 * Math.PI - Math.PI / 2;
    const angFin = ((i + 1) / partes) * 2 * Math.PI - Math.PI / 2;
    const x1 = cx + r * Math.cos(angInicio);
    const y1 = cy + r * Math.sin(angInicio);
    const x2 = cx + r * Math.cos(angFin);
    const y2 = cy + r * Math.sin(angFin);
    const largeArc = (angFin - angInicio) > Math.PI ? 1 : 0;
    const d = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
    return { d, pintada: i < pintadas };
  });

  return (
    <svg viewBox="0 0 200 200" className="w-72 h-72 sm:w-80 sm:h-80" role="img" aria-label={`Pizza con ${partes} partes, ${pintadas} pintadas`}>
      {slices.map((s, i) => (
        <path
          key={i}
          d={s.d}
          fill={s.pintada ? 'currentColor' : 'transparent'}
          className={s.pintada ? 'text-amber-500' : ''}
          stroke="currentColor"
          strokeWidth={1.5}
        />
      ))}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeWidth={2} />
    </svg>
  );
}

function ControlSlider({
  label,
  min,
  max,
  valor,
  onChange,
  color,
}: {
  label: string;
  min: number;
  max: number;
  valor: number;
  onChange: (v: number) => void;
  color: string;
}) {
  return (
    <label className="block">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium">{label}</span>
        <span className={`font-mono text-sm text-${color}-600 dark:text-${color}-400`}>
          {valor}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={valor}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className="w-full"
        aria-label={label}
      />
    </label>
  );
}
