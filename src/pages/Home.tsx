import { ANIOS_PRIMARIA, ANIOS_SECUNDARIA, ANIOS_FACULTAD } from '@/data/anios';
import { AnioCard } from '@/components/AnioCard';

export function Home() {
  return (
    <div className="space-y-10">
      <header className="space-y-3 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Aprendé Matemática a tu ritmo
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl">
          Teoría clara, ejemplos paso a paso, visualizadores y quizzes desde 4to grado de
          primaria hasta análisis matemático universitario.
        </p>
      </header>

      <section aria-labelledby="primaria-titulo" className="space-y-4">
        <div className="flex items-center gap-2">
          <h2 id="primaria-titulo" className="text-xl font-semibold tracking-tight">
            Primaria
          </h2>
          <span className="chip bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {ANIOS_PRIMARIA.length} años
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ANIOS_PRIMARIA.map((a) => (
            <AnioCard key={a.id} anio={a} />
          ))}
        </div>
      </section>

      <section aria-labelledby="secundaria-titulo" className="space-y-4">
        <div className="flex items-center gap-2">
          <h2 id="secundaria-titulo" className="text-xl font-semibold tracking-tight">
            Secundaria
          </h2>
          <span className="chip bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {ANIOS_SECUNDARIA.length} años
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ANIOS_SECUNDARIA.map((a) => (
            <AnioCard key={a.id} anio={a} />
          ))}
        </div>
      </section>

      <section aria-labelledby="facultad-titulo" className="space-y-4">
        <div className="flex items-center gap-2">
          <h2 id="facultad-titulo" className="text-xl font-semibold tracking-tight">
            Facultad
          </h2>
          <span className="chip bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {ANIOS_FACULTAD.length} materias
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ANIOS_FACULTAD.map((a) => (
            <AnioCard key={a.id} anio={a} />
          ))}
        </div>
      </section>
    </div>
  );
}
