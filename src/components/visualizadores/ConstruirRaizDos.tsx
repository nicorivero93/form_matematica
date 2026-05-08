import { useState } from 'react';

/**
 * Construcción geométrica de √2 sobre la recta numérica con regla y compás.
 * Slider barre el arco del compás desde la diagonal del cuadrado de lado 1
 * hasta su aterrizaje sobre el eje x en √2 ≈ 1,414.
 */
export default function ConstruirRaizDos() {
  const [t, setT] = useState(0);
  const SQRT2 = Math.SQRT2;

  // viewBox y mapeo: 1 unidad matemática = 100 px. (0,0) matemático → (40, 150) px.
  const escala = 100;
  const offsetX = 40;
  const offsetY = 150;
  const ancho = 320;
  const alto = 200;
  const xPx = (x: number) => offsetX + x * escala;
  const yPx = (y: number) => offsetY - y * escala;

  // El compás barre desde 45° (vértice del cuadrado) hasta 0° (aterrizaje en la recta).
  const anguloDeg = 45 * (1 - t);
  const anguloRad = (anguloDeg * Math.PI) / 180;
  const puntoX = SQRT2 * Math.cos(anguloRad);
  const puntoY = SQRT2 * Math.sin(anguloRad);
  const aterrizo = t >= 0.98;

  // Arco activo: del vértice (45°) al ángulo actual.
  const arcoPts: string[] = [];
  for (let a = 45; a >= anguloDeg - 0.01; a -= 1) {
    const r = (a * Math.PI) / 180;
    arcoPts.push(`${xPx(SQRT2 * Math.cos(r))},${yPx(SQRT2 * Math.sin(r))}`);
  }
  const arcoPath = `M ${arcoPts.join(' L ')}`;

  // Arco fantasma: trayectoria completa, atenuada.
  const fantasmaPts: string[] = [];
  for (let a = 45; a >= 0; a -= 1) {
    const r = (a * Math.PI) / 180;
    fantasmaPts.push(`${xPx(SQRT2 * Math.cos(r))},${yPx(SQRT2 * Math.sin(r))}`);
  }
  const fantasmaPath = `M ${fantasmaPts.join(' L ')}`;

  const ticks = [0, 1, 2];

  let leyenda: string;
  if (t < 0.05) {
    leyenda = 'Levantamos un cuadrado de lado 1 sobre [0, 1]. Su diagonal mide √(1² + 1²) = √2.';
  } else if (!aterrizo) {
    leyenda = 'Apoyamos el compás en 0 con abertura = diagonal y lo giramos hacia la recta…';
  } else {
    leyenda = 'El arco aterriza sobre √2 ≈ 1,414. Ahí queda ubicado √2 en la recta.';
  }

  return (
    <div className="card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Construir √2 en la recta</h4>
        <div className="font-mono text-sm text-teal-600 dark:text-teal-400">
          x = {puntoX.toFixed(3)}
        </div>
      </div>

      <div className="flex justify-center">
        <svg
          viewBox={`0 0 ${ancho} ${alto}`}
          className="w-full max-w-[420px]"
          role="img"
          aria-label={`Construcción de raíz de 2 con compás, barrido al ${Math.round(t * 100)}%`}
        >
          {/* Arco fantasma (trayectoria completa) */}
          <path
            d={fantasmaPath}
            fill="none"
            className="stroke-teal-400/40 dark:stroke-teal-500/30"
            strokeWidth={1}
            strokeDasharray="3 3"
          />

          {/* Recta numérica */}
          <line
            x1={xPx(-0.3)}
            y1={yPx(0)}
            x2={xPx(2.7)}
            y2={yPx(0)}
            className="stroke-slate-500"
            strokeWidth={1.5}
          />
          {/* Flecha derecha */}
          <polyline
            points={`${xPx(2.7) - 6},${yPx(0) - 4} ${xPx(2.7)},${yPx(0)} ${xPx(2.7) - 6},${yPx(0) + 4}`}
            fill="none"
            className="stroke-slate-500"
            strokeWidth={1.5}
          />

          {/* Tick marks enteros */}
          {ticks.map((n) => (
            <g key={`tick-${n}`}>
              <line
                x1={xPx(n)}
                y1={yPx(0) - 5}
                x2={xPx(n)}
                y2={yPx(0) + 5}
                className="stroke-slate-500"
                strokeWidth={1.5}
              />
              <text
                x={xPx(n)}
                y={yPx(0) + 18}
                textAnchor="middle"
                className="fill-slate-500 dark:fill-slate-400"
                fontSize="11"
              >
                {n}
              </text>
            </g>
          ))}

          {/* Marca de √2 (resaltada cuando aterriza) */}
          <line
            x1={xPx(SQRT2)}
            y1={yPx(0) - 5}
            x2={xPx(SQRT2)}
            y2={yPx(0) + 5}
            className={aterrizo ? 'stroke-teal-500' : 'stroke-teal-400/50'}
            strokeWidth={2}
          />
          <text
            x={xPx(SQRT2)}
            y={yPx(0) + 32}
            textAnchor="middle"
            className={
              aterrizo
                ? 'fill-teal-600 dark:fill-teal-300 font-semibold'
                : 'fill-teal-500/60 dark:fill-teal-400/60'
            }
            fontSize="11"
          >
            √2 ≈ 1,414
          </text>

          {/* Cuadrado de lado 1 sobre [0, 1] */}
          <rect
            x={xPx(0)}
            y={yPx(1)}
            width={escala}
            height={escala}
            fill="none"
            className="stroke-teal-500/70"
            strokeWidth={1.5}
            strokeDasharray="4 3"
          />

          {/* Diagonal del cuadrado (etiqueta √2) */}
          <line
            x1={xPx(0)}
            y1={yPx(0)}
            x2={xPx(1)}
            y2={yPx(1)}
            className="stroke-teal-600 dark:stroke-teal-400"
            strokeWidth={2}
          />
          <text
            x={xPx(0.45)}
            y={yPx(0.55) - 4}
            className="fill-teal-700 dark:fill-teal-300 font-semibold italic"
            fontSize="11"
          >
            √2
          </text>

          {/* Arco activo del compás */}
          <path
            d={arcoPath}
            fill="none"
            className="stroke-teal-500"
            strokeWidth={2.5}
          />

          {/* Brazo del compás (centro al punto) */}
          <line
            x1={xPx(0)}
            y1={yPx(0)}
            x2={xPx(puntoX)}
            y2={yPx(puntoY)}
            className="stroke-teal-600/70 dark:stroke-teal-400/70"
            strokeWidth={1}
            strokeDasharray="2 3"
          />

          {/* Caída vertical del punto al eje (cuando se aproxima al aterrizaje) */}
          {puntoY > 0.01 && (
            <line
              x1={xPx(puntoX)}
              y1={yPx(puntoY)}
              x2={xPx(puntoX)}
              y2={yPx(0)}
              className="stroke-teal-500/40"
              strokeWidth={1}
              strokeDasharray="2 2"
            />
          )}

          {/* Punto del compás (arrastrable visualmente) */}
          <circle
            cx={xPx(puntoX)}
            cy={yPx(puntoY)}
            r={6}
            className="fill-teal-500 stroke-white dark:stroke-slate-900"
            strokeWidth={2}
          />

          {/* Centro del compás en el 0 */}
          <circle cx={xPx(0)} cy={yPx(0)} r={3} className="fill-slate-600 dark:fill-slate-300" />
        </svg>
      </div>

      <label className="block">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium">Barrido del compás</span>
          <span className="font-mono text-sm">{Math.round(t * 100)}%</span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(t * 100)}
          onChange={(e) => setT(parseInt(e.target.value, 10) / 100)}
          className="w-full"
          aria-label="Barrido del compás"
        />
      </label>

      <p className="text-sm text-slate-500 dark:text-slate-400 text-center">{leyenda}</p>
    </div>
  );
}
