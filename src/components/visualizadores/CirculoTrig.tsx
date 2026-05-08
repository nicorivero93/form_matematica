import { useState } from 'react';

/**
 * Círculo trigonométrico con sliders de ángulo. Muestra seno, coseno y tangente.
 */
export default function CirculoTrig() {
  const [angulo, setAngulo] = useState(45);
  const rad = (angulo * Math.PI) / 180;
  const sen = Math.sin(rad);
  const cos = Math.cos(rad);

  const size = 280;
  const r = 100;
  const cx = size / 2;
  const cy = size / 2;

  const px = cx + cos * r;
  const py = cy - sen * r;

  return (
    <div className="card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Círculo trigonométrico</h4>
        <div className="font-mono text-sm text-fuchsia-600 dark:text-fuchsia-400">
          {angulo}°
        </div>
      </div>

      <div className="flex justify-center">
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full max-w-[480px]" role="img" aria-label={`Círculo trigonométrico a ${angulo}°`}>
          {/* Ejes */}
          <line x1={0} y1={cy} x2={size} y2={cy} className="stroke-slate-400" strokeWidth={1} />
          <line x1={cx} y1={0} x2={cx} y2={size} className="stroke-slate-400" strokeWidth={1} />
          {/* Etiquetas numéricas (unidad ±1) */}
          {[-1, 1].map((v) => (
            <g key={`tick-${v}`}>
              <text
                x={cx + v * r}
                y={cy + 12}
                textAnchor="middle"
                className="fill-slate-500 dark:fill-slate-400"
                fontSize="9"
              >
                {v}
              </text>
              <text
                x={cx - 6}
                y={cy - v * r + 3}
                textAnchor="end"
                className="fill-slate-500 dark:fill-slate-400"
                fontSize="9"
              >
                {v}
              </text>
            </g>
          ))}
          {/* Letras de los ejes */}
          <text
            x={size - 4}
            y={cy - 6}
            textAnchor="end"
            className="fill-slate-600 dark:fill-slate-300 italic"
            fontSize="11"
            fontWeight="600"
          >
            x
          </text>
          <text
            x={cx + 8}
            y={12}
            className="fill-slate-600 dark:fill-slate-300 italic"
            fontSize="11"
            fontWeight="600"
          >
            y
          </text>
          {/* Circunferencia unitaria */}
          <circle cx={cx} cy={cy} r={r} fill="none" className="stroke-fuchsia-500" strokeWidth={1.5} />
          {/* Radio al ángulo */}
          <line x1={cx} y1={cy} x2={px} y2={py} className="stroke-fuchsia-600" strokeWidth={2} />
          {/* Coseno (proyección horizontal) */}
          <line x1={cx} y1={cy} x2={px} y2={cy} className="stroke-emerald-500" strokeWidth={2} />
          {/* Seno (proyección vertical) */}
          <line x1={px} y1={cy} x2={px} y2={py} className="stroke-rose-500" strokeWidth={2} />
          {/* Punto */}
          <circle cx={px} cy={py} r={4} className="fill-fuchsia-600" />
          {/* Etiquetas */}
          <text x={(cx + px) / 2} y={cy - 6} textAnchor="middle" className="fill-current text-emerald-600 font-semibold" fontSize="11">
            cos = {cos.toFixed(2)}
          </text>
          <text x={px + 8} y={(cy + py) / 2 + 4} className="fill-current text-rose-600 font-semibold" fontSize="11">
            sen = {sen.toFixed(2)}
          </text>
        </svg>
      </div>

      <label className="block">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium">Ángulo (°)</span>
          <span className="font-mono text-sm">{angulo}°</span>
        </div>
        <input
          type="range"
          min={0}
          max={360}
          value={angulo}
          onChange={(e) => setAngulo(parseInt(e.target.value, 10))}
          className="w-full"
          aria-label="Ángulo en grados"
        />
      </label>

      <div className="grid grid-cols-3 gap-2 text-xs text-center">
        <div className="card p-2">
          <div className="text-slate-500">sen</div>
          <div className="font-mono text-rose-600 font-semibold">{sen.toFixed(3)}</div>
        </div>
        <div className="card p-2">
          <div className="text-slate-500">cos</div>
          <div className="font-mono text-emerald-600 font-semibold">{cos.toFixed(3)}</div>
        </div>
        <div className="card p-2">
          <div className="text-slate-500">tan</div>
          <div className="font-mono text-fuchsia-600 font-semibold">
            {Math.abs(cos) < 0.001 ? '∞' : (sen / cos).toFixed(3)}
          </div>
        </div>
      </div>
    </div>
  );
}
