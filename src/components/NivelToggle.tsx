import type { Nivel } from '@/data/temas/tipos';

const NIVELES: { id: Nivel; label: string }[] = [
  { id: 'intro', label: 'Intro' },
  { id: 'intermedio', label: 'Intermedio' },
  { id: 'avanzado', label: 'Avanzado' },
];

type Props = {
  seleccionado: Nivel | null;
  onSeleccionar: (n: Nivel | null) => void;
};

export function NivelToggle({ seleccionado, onSeleccionar }: Props) {
  return (
    <div className="flex gap-1.5">
      <button
        type="button"
        onClick={() => onSeleccionar(null)}
        className={`chip transition-colors ${
          seleccionado === null
            ? 'bg-brand-600 text-white'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
        }`}
      >
        Todos
      </button>
      {NIVELES.map((n) => {
        const activo = seleccionado === n.id;
        return (
          <button
            key={n.id}
            type="button"
            onClick={() => onSeleccionar(n.id)}
            className={`chip transition-colors ${
              activo
                ? 'bg-brand-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            {n.label}
          </button>
        );
      })}
    </div>
  );
}
