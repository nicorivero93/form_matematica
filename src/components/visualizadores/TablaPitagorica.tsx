import { useState } from 'react';

/** Tabla pitagórica 10x10 interactiva — al pasar/click se highlightea fila/col. */
export default function TablaPitagorica() {
  const [hoverRow, setHoverRow] = useState<number | null>(null);
  const [hoverCol, setHoverCol] = useState<number | null>(null);

  const cabecera = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="card p-4 space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Tabla pitagórica</h4>
        {hoverRow !== null && hoverCol !== null && (
          <div className="text-sm font-mono text-emerald-600 dark:text-emerald-400">
            {hoverRow} × {hoverCol} = {hoverRow * hoverCol}
          </div>
        )}
      </div>
      <div className="overflow-x-auto no-scrollbar">
        <table className="border-collapse mx-auto text-sm">
          <thead>
            <tr>
              <th className="w-9 h-9 text-slate-400" aria-hidden>
                ×
              </th>
              {cabecera.map((c) => (
                <th
                  key={c}
                  className={`w-9 h-9 font-semibold ${
                    hoverCol === c ? 'text-emerald-500' : 'text-slate-500'
                  }`}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cabecera.map((r) => (
              <tr key={r}>
                <th
                  className={`w-9 h-9 font-semibold ${
                    hoverRow === r ? 'text-emerald-500' : 'text-slate-500'
                  }`}
                >
                  {r}
                </th>
                {cabecera.map((c) => {
                  const enHover = hoverRow === r && hoverCol === c;
                  const enLinea = hoverRow === r || hoverCol === c;
                  return (
                    <td
                      key={c}
                      onMouseEnter={() => {
                        setHoverRow(r);
                        setHoverCol(c);
                      }}
                      onMouseLeave={() => {
                        setHoverRow(null);
                        setHoverCol(null);
                      }}
                      onTouchStart={() => {
                        setHoverRow(r);
                        setHoverCol(c);
                      }}
                      className={`w-9 h-9 text-center border border-slate-200 dark:border-slate-700 cursor-pointer transition-colors ${
                        enHover
                          ? 'bg-emerald-500 text-white'
                          : enLinea
                          ? 'bg-emerald-500/15'
                          : ''
                      }`}
                    >
                      {r * c}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
        Pasá por encima de una celda para ver la multiplicación.
      </p>
    </div>
  );
}
