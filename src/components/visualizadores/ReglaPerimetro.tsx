import { useState } from 'react';

/**
 * Visualiza el perímetro de un rectángulo. Sliders para base y altura,
 * muestra fórmula 2·(b + h) y el valor en cm simulados.
 */
export default function ReglaPerimetro() {
  const [base, setBase] = useState(8);
  const [altura, setAltura] = useState(5);
  const perimetro = 2 * (base + altura);

  const escala = 18;
  const ancho = base * escala;
  const alto = altura * escala;
  const padX = 30;
  const padY = 30;

  return (
    <div className="card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Perímetro de un rectángulo</h4>
        <div className="font-mono text-lg text-amber-600 dark:text-amber-400">
          P = {perimetro} cm
        </div>
      </div>

      <div className="flex justify-center overflow-x-auto no-scrollbar">
        <svg
          viewBox={`0 0 ${ancho + padX * 2} ${alto + padY * 2}`}
          className="w-full max-w-[400px]"
          role="img"
          aria-label={`Rectángulo de ${base} cm de base por ${altura} cm de altura`}
        >
          <rect
            x={padX}
            y={padY}
            width={ancho}
            height={alto}
            fill="currentColor"
            className="text-amber-500/20"
            stroke="currentColor"
            strokeWidth={3}
          />
          {/* Etiqueta base */}
          <text
            x={padX + ancho / 2}
            y={padY + alto + 22}
            textAnchor="middle"
            className="fill-current text-slate-600 dark:text-slate-300 font-semibold"
            fontSize="14"
          >
            {base} cm
          </text>
          {/* Etiqueta altura */}
          <text
            x={padX - 8}
            y={padY + alto / 2}
            textAnchor="end"
            dominantBaseline="middle"
            className="fill-current text-slate-600 dark:text-slate-300 font-semibold"
            fontSize="14"
          >
            {altura} cm
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ControlSlider
          label="Base"
          min={1}
          max={15}
          valor={base}
          onChange={setBase}
        />
        <ControlSlider
          label="Altura"
          min={1}
          max={10}
          valor={altura}
          onChange={setAltura}
        />
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
        P = 2 × ({base} + {altura}) = 2 × {base + altura} = <strong>{perimetro} cm</strong>
      </p>
    </div>
  );
}

function ControlSlider({
  label,
  min,
  max,
  valor,
  onChange,
}: {
  label: string;
  min: number;
  max: number;
  valor: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="font-mono text-sm">{valor} cm</span>
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
