import type { AreaId } from '@/data/temas/tipos';
import { AREAS, getArea } from '@/data/areas';

type Props = {
  /** Áreas disponibles entre los temas listados (filtra los chips). */
  disponibles: AreaId[];
  seleccionada: AreaId | null;
  onSeleccionar: (a: AreaId | null) => void;
};

export function AreaFilterChips({ disponibles, seleccionada, onSeleccionar }: Props) {
  const lista = AREAS.filter((a) => disponibles.includes(a.id));
  if (lista.length <= 1) return null;
  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-1 px-1 py-1">
      <button
        type="button"
        onClick={() => onSeleccionar(null)}
        className={`chip whitespace-nowrap transition-colors ${
          seleccionada === null
            ? 'bg-brand-600 text-white'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
        }`}
      >
        Todos
      </button>
      {lista.map((a) => {
        const meta = getArea(a.id);
        const activa = seleccionada === a.id;
        return (
          <button
            key={a.id}
            type="button"
            onClick={() => onSeleccionar(a.id)}
            className={`chip whitespace-nowrap transition-colors ${
              activa
                ? `bg-${meta.color}-500 text-white`
                : `bg-${meta.color}-500/10 text-${meta.color}-700 dark:text-${meta.color}-300 hover:bg-${meta.color}-500/20`
            }`}
          >
            <span className="mr-1" aria-hidden>{meta.icono}</span>
            {meta.nombre}
          </button>
        );
      })}
    </div>
  );
}
