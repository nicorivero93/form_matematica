import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { ANIOS, getAnio } from '@/data/anios';
import { getTemasPorAnio } from '@/data/temas';
import type { AnioId, AreaId, Nivel } from '@/data/temas/tipos';
import { TemaCard } from '@/components/TemaCard';
import { AreaFilterChips } from '@/components/AreaFilterChips';
import { NivelToggle } from '@/components/NivelToggle';
import { NotFound } from './NotFound';

export function Anio() {
  const { anioId } = useParams<{ anioId: string }>();
  const validIds = ANIOS.map((a) => a.id);
  const valido = anioId && (validIds as string[]).includes(anioId);
  const [areaSel, setAreaSel] = useState<AreaId | null>(null);
  const [nivelSel, setNivelSel] = useState<Nivel | null>(null);

  const anio = valido ? getAnio(anioId as AnioId) : null;
  const todos = useMemo(
    () => (anio ? getTemasPorAnio(anio.id) : []),
    [anio]
  );

  if (!anio) return <NotFound />;

  const areasDisponibles = Array.from(new Set(todos.map((t) => t.area)));
  const filtrados = todos.filter(
    (t) =>
      (areaSel === null || t.area === areaSel) &&
      (nivelSel === null || t.nivel === nivelSel)
  );

  return (
    <div className="space-y-6">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
      >
        <ChevronLeft size={16} aria-hidden /> Volver al inicio
      </Link>

      <header className="space-y-2">
        <div
          className={`inline-flex items-center gap-2 chip bg-${anio.color}-500/15 text-${anio.color}-700 dark:text-${anio.color}-300`}
        >
          <span aria-hidden>{anio.icono}</span>
          {anio.etapa === 'primaria' ? 'Primaria' : 'Secundaria'}
        </div>
        <h1 className="text-3xl font-bold tracking-tight">{anio.nombre}</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{anio.descripcion}</p>
      </header>

      {todos.length === 0 ? (
        <div className="card p-8 text-center text-slate-500 dark:text-slate-400">
          <p className="font-medium mb-2">Próximamente</p>
          <p className="text-sm">
            Los temas de {anio.nombre} se irán cargando en próximas actualizaciones.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-3">
            <AreaFilterChips
              disponibles={areasDisponibles}
              seleccionada={areaSel}
              onSeleccionar={setAreaSel}
            />
            <NivelToggle seleccionado={nivelSel} onSeleccionar={setNivelSel} />
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            {filtrados.length} {filtrados.length === 1 ? 'tema' : 'temas'}
            {areaSel || nivelSel ? ' filtrados' : ''}
          </p>

          {filtrados.length === 0 ? (
            <div className="card p-6 text-center text-sm text-slate-500 dark:text-slate-400">
              No hay temas con esos filtros.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtrados.map((t) => (
                <TemaCard key={t.slug} tema={t} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
