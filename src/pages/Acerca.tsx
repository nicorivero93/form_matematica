import { TEMAS } from '@/data/temas';
import { ANIOS } from '@/data/anios';

export function Acerca() {
  const totalTemas = TEMAS.length;
  const aniosConContenido = ANIOS.filter(
    (a) => TEMAS.some((t) => t.anios.includes(a.id))
  ).length;

  return (
    <div className="space-y-6 max-w-2xl">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Acerca</h1>
      </header>

      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
        <strong>Mate — Fórmulas y Teoría</strong> es una app educativa hecha en Argentina para
        acompañar el aprendizaje de Matemática desde 4to grado de primaria hasta el último año
        de secundaria. Cada tema incluye teoría conceptual, ejemplos resueltos paso a paso,
        errores comunes que solemos cometer, visualizadores interactivos y quizzes con
        autocorrección.
      </p>

      <section className="card p-5 space-y-2">
        <h2 className="font-semibold">Currículum</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Los temas siguen los <strong>Núcleos de Aprendizaje Prioritarios (NAP)</strong> del
          Ministerio de Educación de la Nación Argentina. Es el denominador común que respeta
          las jurisdicciones (CABA, Provincia de Buenos Aires, etc.).
        </p>
      </section>

      <section className="card p-5 space-y-2">
        <h2 className="font-semibold">Estado actual</h2>
        <ul className="text-sm text-slate-600 dark:text-slate-400 list-disc pl-5 space-y-1">
          <li>
            {totalTemas} {totalTemas === 1 ? 'tema disponible' : 'temas disponibles'}
          </li>
          <li>
            {aniosConContenido} {aniosConContenido === 1 ? 'año con contenido' : 'años con contenido'}
          </li>
          <li>El resto se irá completando en próximas actualizaciones.</li>
        </ul>
      </section>

      <section className="card p-5 space-y-2">
        <h2 className="font-semibold">Privacidad</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          No usamos cuentas ni servidor. Todo tu progreso se guarda <strong>solo en este
          dispositivo</strong> (en localStorage del navegador). Si limpiás los datos del sitio
          se borra el progreso.
        </p>
      </section>

    </div>
  );
}
