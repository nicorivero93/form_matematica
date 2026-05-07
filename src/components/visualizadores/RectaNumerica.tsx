import { useState } from 'react';

/**
 * Recta numérica interactiva. El alumno desliza un punto y ve dónde cae.
 */
export default function RectaNumerica() {
  const [valor, setValor] = useState(7);
  const min = 0;
  const max = 20;
  const ancho = 600;
  const alto = 80;
  const padX = 30;

  const xDe = (n: number) => padX + ((n - min) / (max - min)) * (ancho - 2 * padX);
  const yEje = alto / 2 + 6;

  return (
    <div className="card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Recta numérica</h4>
        <div className="font-mono text-2xl tabular-nums text-sky-600 dark:text-sky-400">
          {valor}
        </div>
      </div>

      <div className="overflow-x-auto no-scrollbar">
        <svg viewBox={`0 0 ${ancho} ${alto}`} className="w-full max-w-[600px] mx-auto" role="img" aria-label={`Punto en ${valor} en la recta de ${min} a ${max}`}>
          {/* Línea principal */}
          <line
            x1={padX}
            x2={ancho - padX}
            y1={yEje}
            y2={yEje}
            stroke="currentColor"
            strokeWidth={2}
            className="text-slate-400"
          />
          {/* Marcas y números */}
          {Array.from({ length: max - min + 1 }, (_, i) => i + min).map((n) => {
            const x = xDe(n);
            const esGrande = n % 5 === 0;
            return (
              <g key={n}>
                <line
                  x1={x}
                  x2={x}
                  y1={yEje - (esGrande ? 8 : 4)}
                  y2={yEje + (esGrande ? 8 : 4)}
                  stroke="currentColor"
                  strokeWidth={esGrande ? 2 : 1}
                  className="text-slate-400"
                />
                {esGrande && (
                  <text
                    x={x}
                    y={yEje + 22}
                    textAnchor="middle"
                    className="fill-current text-slate-500 dark:text-slate-400"
                    fontSize="11"
                  >
                    {n}
                  </text>
                )}
              </g>
            );
          })}
          {/* Punto */}
          <circle
            cx={xDe(valor)}
            cy={yEje}
            r={8}
            fill="currentColor"
            className="text-sky-500"
          />
          <text
            x={xDe(valor)}
            y={yEje - 14}
            textAnchor="middle"
            className="fill-current text-sky-600 dark:text-sky-400 font-bold"
            fontSize="13"
          >
            {valor}
          </text>
        </svg>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={valor}
        onChange={(e) => setValor(parseInt(e.target.value, 10))}
        className="w-full"
        aria-label="Mover punto en la recta numérica"
      />
    </div>
  );
}
