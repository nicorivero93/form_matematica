import { useState } from 'react';

type Modo = 'directo' | 'cadena';

/**
 * Construcción geométrica de √n sobre la recta numérica con regla y compás.
 * Dos modos:
 *  - Directo: catetos enteros a y b → √(a²+b²) en un solo paso.
 *  - Cadena (Teodoro): se construye √n iterativamente usando √(n-1) como cateto.
 * En ambos modos, la hipotenusa misma es la que rota (se traslada) desde su
 * posición original hasta aterrizar sobre la recta numérica.
 */
export default function ConstruirRaiz() {
  const [modo, setModo] = useState<Modo>('directo');
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const [n, setN] = useState(3);
  const [t, setT] = useState(0);

  // --- Geometría según el modo ---
  // En ambos modos, "catetoX" es la base sobre la recta y "catetoY" es 1 (modo cadena) o b (modo directo).
  const catetoX = modo === 'directo' ? a : Math.sqrt(n - 1);
  const catetoY = modo === 'directo' ? b : 1;
  const valorN = modo === 'directo' ? a * a + b * b : n;
  const raiz = Math.sqrt(valorN);
  const raizEsEntera = Number.isInteger(raiz);

  // ViewBox y mapeo: 1 unidad matemática = 45 px.
  const escala = 45;
  const offsetX = 30;
  const offsetY = 220;
  const ancho = 360;
  const alto = 240;
  const xPx = (x: number) => offsetX + x * escala;
  const yPx = (y: number) => offsetY - y * escala;

  // Barrido: ángulo inicial = el de la hipotenusa apoyada en el rectángulo, final = 0 (sobre el eje x).
  const anguloMaxRad = Math.atan2(catetoY, catetoX);
  const anguloMaxDeg = (anguloMaxRad * 180) / Math.PI;
  const anguloDeg = anguloMaxDeg * (1 - t);
  const anguloRad = (anguloDeg * Math.PI) / 180;
  const puntoX = raiz * Math.cos(anguloRad);
  const puntoY = raiz * Math.sin(anguloRad);
  const aterrizo = t >= 0.98;

  // Arco que describe el extremo de la hipotenusa al rotar.
  const arcoPts: string[] = [];
  for (let degA = anguloMaxDeg; degA >= anguloDeg - 0.01; degA -= 1) {
    const r = (degA * Math.PI) / 180;
    arcoPts.push(`${xPx(raiz * Math.cos(r))},${yPx(raiz * Math.sin(r))}`);
  }
  const arcoPath = `M ${arcoPts.join(' L ')}`;

  // Trayectoria completa (fantasma).
  const fantasmaPts: string[] = [];
  for (let degA = anguloMaxDeg; degA >= 0; degA -= 1) {
    const r = (degA * Math.PI) / 180;
    fantasmaPts.push(`${xPx(raiz * Math.cos(r))},${yPx(raiz * Math.sin(r))}`);
  }
  const fantasmaPath = `M ${fantasmaPts.join(' L ')}`;

  // Marcas previas (modo cadena): √2, √3, ..., √(n-1).
  const raicesPrevias: { valor: number; label: string }[] = [];
  if (modo === 'cadena') {
    for (let k = 2; k < n; k++) {
      raicesPrevias.push({ valor: Math.sqrt(k), label: `√${k}` });
    }
  }

  const ticks = [0, 1, 2, 3, 4];
  const raizLabel = raizEsEntera ? `${raiz}` : `≈ ${raiz.toFixed(3)}`;

  let leyenda: string;
  if (modo === 'directo') {
    if (t < 0.05) {
      leyenda = `Levantamos un rectángulo de ${a} × ${b}. Su diagonal mide √(${a}² + ${b}²) = √${valorN}.`;
    } else if (!aterrizo) {
      leyenda = 'La hipotenusa rota como una vara rígida hasta caer sobre la recta…';
    } else if (raizEsEntera) {
      leyenda = `√${valorN} = ${raiz}. ¡En este caso la raíz es un entero!`;
    } else {
      leyenda = `La hipotenusa aterrizó sobre √${valorN} ≈ ${raiz.toFixed(3)}.`;
    }
  } else {
    if (t < 0.05) {
      leyenda = `Sobre la recta ya tenemos √${n - 1} ${
        Number.isInteger(catetoX) ? `= ${catetoX}` : `≈ ${catetoX.toFixed(3)}`
      } (construido en el paso anterior). Levantamos un cateto de altura 1: la diagonal mide √(${
        n - 1
      } + 1) = √${n}.`;
    } else if (!aterrizo) {
      leyenda = 'La hipotenusa rota desde el rectángulo hasta caer sobre la recta…';
    } else if (raizEsEntera) {
      leyenda = `√${n} = ${raiz}. ¡Acá la cadena nos dio un entero!`;
    } else {
      leyenda = `La hipotenusa aterrizó sobre √${n} ≈ ${raiz.toFixed(3)}.`;
    }
  }

  return (
    <div className="card p-5 space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h4 className="font-semibold">Construir √n en la recta</h4>
        <div className="font-mono text-sm text-teal-600 dark:text-teal-400">
          {modo === 'directo'
            ? `√(${a}² + ${b}²) = √${valorN} ${raizLabel}`
            : `√(${n - 1} + 1) = √${n} ${raizLabel}`}
        </div>
      </div>

      {/* Toggle de modo */}
      <div className="flex gap-1">
        <button
          type="button"
          onClick={() => setModo('directo')}
          className={`btn flex-1 text-sm ${
            modo === 'directo' ? 'bg-teal-500 text-white' : 'bg-slate-100 dark:bg-slate-800'
          }`}
        >
          Catetos enteros
        </button>
        <button
          type="button"
          onClick={() => setModo('cadena')}
          className={`btn flex-1 text-sm ${
            modo === 'cadena' ? 'bg-teal-500 text-white' : 'bg-slate-100 dark:bg-slate-800'
          }`}
        >
          Cadena (Teodoro)
        </button>
      </div>

      <div className="flex justify-center">
        <svg
          viewBox={`0 0 ${ancho} ${alto}`}
          className="w-full max-w-[460px]"
          role="img"
          aria-label={`Construcción de raíz de ${valorN}, modo ${modo}, barrido al ${Math.round(t * 100)}%`}
        >
          {/* Arco fantasma */}
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
            x2={xPx(7.0)}
            y2={yPx(0)}
            className="stroke-slate-500"
            strokeWidth={1.5}
          />
          <polyline
            points={`${xPx(7.0) - 6},${yPx(0) - 4} ${xPx(7.0)},${yPx(0)} ${xPx(7.0) - 6},${yPx(0) + 4}`}
            fill="none"
            className="stroke-slate-500"
            strokeWidth={1.5}
          />

          {/* Tick marks enteros */}
          {ticks.map((m) => (
            <g key={`tick-${m}`}>
              <line
                x1={xPx(m)}
                y1={yPx(0) - 5}
                x2={xPx(m)}
                y2={yPx(0) + 5}
                className="stroke-slate-500"
                strokeWidth={1.5}
              />
              <text
                x={xPx(m)}
                y={yPx(0) + 16}
                textAnchor="middle"
                className="fill-slate-500 dark:fill-slate-400"
                fontSize="10"
              >
                {m}
              </text>
            </g>
          ))}

          {/* Marcas de raíces previas (modo cadena) */}
          {raicesPrevias.map((rp) => (
            <g key={`prev-${rp.label}`}>
              <line
                x1={xPx(rp.valor)}
                y1={yPx(0) - 4}
                x2={xPx(rp.valor)}
                y2={yPx(0) + 4}
                className="stroke-teal-500/60"
                strokeWidth={1.5}
              />
              <text
                x={xPx(rp.valor)}
                y={yPx(0) - 8}
                textAnchor="middle"
                className="fill-teal-600/70 dark:fill-teal-300/70"
                fontSize="9"
              >
                {rp.label}
              </text>
            </g>
          ))}

          {/* Marca de la raíz actual */}
          <line
            x1={xPx(raiz)}
            y1={yPx(0) - 5}
            x2={xPx(raiz)}
            y2={yPx(0) + 5}
            className={aterrizo ? 'stroke-teal-500' : 'stroke-teal-400/50'}
            strokeWidth={2}
          />
          <text
            x={xPx(raiz)}
            y={yPx(0) + 30}
            textAnchor="middle"
            className={
              aterrizo
                ? 'fill-teal-600 dark:fill-teal-300 font-semibold'
                : 'fill-teal-500/60 dark:fill-teal-400/60'
            }
            fontSize="10"
          >
            √{valorN} {raizLabel}
          </text>

          {/* Rectángulo (cateto X × cateto Y) */}
          <rect
            x={xPx(0)}
            y={yPx(catetoY)}
            width={catetoX * escala}
            height={catetoY * escala}
            fill="none"
            className="stroke-teal-500/70"
            strokeWidth={1.5}
            strokeDasharray="4 3"
          />

          {/* Cateto vertical resaltado (sale del aterrizaje del paso anterior en modo cadena) */}
          {modo === 'cadena' && (
            <line
              x1={xPx(catetoX)}
              y1={yPx(0)}
              x2={xPx(catetoX)}
              y2={yPx(catetoY)}
              className="stroke-teal-600 dark:stroke-teal-400"
              strokeWidth={2}
            />
          )}

          {/* Hipotenusa fantasma en posición original (cuando ya empezó a rotar) */}
          {t > 0.02 && (
            <line
              x1={xPx(0)}
              y1={yPx(0)}
              x2={xPx(catetoX)}
              y2={yPx(catetoY)}
              className="stroke-teal-500/30"
              strokeWidth={1.5}
              strokeDasharray="2 3"
            />
          )}

          {/* Hipotenusa rotante (LA "vara" que se traslada) */}
          <line
            x1={xPx(0)}
            y1={yPx(0)}
            x2={xPx(puntoX)}
            y2={yPx(puntoY)}
            className="stroke-teal-600 dark:stroke-teal-400"
            strokeWidth={3}
            strokeLinecap="round"
          />
          {/* Etiqueta √n sobre la hipotenusa */}
          <text
            x={xPx(puntoX / 2) + 6}
            y={yPx(puntoY / 2) - 4}
            className="fill-teal-700 dark:fill-teal-300 font-semibold italic"
            fontSize="10"
          >
            √{valorN}
          </text>

          {/* Arco que describe el barrido */}
          <path
            d={arcoPath}
            fill="none"
            className="stroke-teal-500"
            strokeWidth={1.5}
          />

          {/* Caída vertical del extremo al eje (visual de "compás") */}
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

          {/* Punto del extremo (vertice de la hipotenusa que rota) */}
          <circle
            cx={xPx(puntoX)}
            cy={yPx(puntoY)}
            r={6}
            className="fill-teal-500 stroke-white dark:stroke-slate-900"
            strokeWidth={2}
          />

          {/* Centro de rotación en el 0 */}
          <circle cx={xPx(0)} cy={yPx(0)} r={3} className="fill-slate-600 dark:fill-slate-300" />
        </svg>
      </div>

      {/* Controles según modo */}
      {modo === 'directo' ? (
        <div className="grid grid-cols-2 gap-3">
          <Slider label="Cateto a" min={1} max={4} value={a} onChange={setA} />
          <Slider label="Cateto b" min={1} max={4} value={b} onChange={setB} />
        </div>
      ) : (
        <Slider label="n (raíz a construir)" min={2} max={10} value={n} onChange={setN} />
      )}

      {/* Slider de barrido (común) */}
      <label className="block">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium">Trasladar la hipotenusa a la recta</span>
          <span className="font-mono text-sm">{Math.round(t * 100)}%</span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(t * 100)}
          onChange={(e) => setT(parseInt(e.target.value, 10) / 100)}
          className="w-full"
          aria-label="Barrido de la hipotenusa"
        />
      </label>

      <p className="text-sm text-slate-500 dark:text-slate-400 text-center">{leyenda}</p>

      <p className="text-xs text-slate-400 dark:text-slate-500 text-center">
        {modo === 'directo'
          ? 'Probá: (1,1)→√2 · (2,1)→√5 · (2,2)→√8 · (3,2)→√13 · (4,3)→√25=5'
          : 'Cadena: √2 → √3 → √4=2 → √5 → … cada raíz se apoya en la anterior.'}
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
        step={1}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
        className="w-full"
        aria-label={label}
      />
    </label>
  );
}
