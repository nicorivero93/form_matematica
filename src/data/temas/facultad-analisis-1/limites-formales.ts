import type { Tema } from '../tipos';

export const LIMITES_FORMALES: Tema = {
  slug: 'limites-formales',
  titulo: 'Límite formal: definición épsilon-delta',
  anios: ['facultad-analisis-1'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Definición rigurosa de límite. Para todo $\\varepsilon > 0$ existe $\\delta > 0$ tal que si $0 < |x - a| < \\delta$, entonces $|f(x) - L| < \\varepsilon$.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Definición $\\varepsilon$-$\\delta$',
      texto:
        '$\\lim_{x \\to a} f(x) = L$ si y solo si: para todo $\\varepsilon > 0$ existe $\\delta > 0$ tal que $0 < |x - a| < \\delta \\Rightarrow |f(x) - L| < \\varepsilon$.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la definición que sustenta todo el cálculo. Permite probar formalmente que un límite es lo que parece, sin depender de la "intuición" de "se acerca a".',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Estrategia de demostración',
      texto:
        'Dado $\\varepsilon$, hay que encontrar $\\delta$ (que depende de $\\varepsilon$) tal que la implicación se cumpla. Conviene partir de $|f(x) - L|$ y manipularlo hasta que aparezca $|x - a|$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Probar $\\lim_{x \\to 2} (3x - 1) = 5$',
      enunciado:
        'Demostrar usando la definición $\\varepsilon$-$\\delta$.',
      pasos: [
        { explicacion: 'Queremos $|3x - 1 - 5| < \\varepsilon$, o sea $|3x - 6| < \\varepsilon$.' },
        { explicacion: 'Factorizando: $3 |x - 2| < \\varepsilon$, o sea $|x - 2| < \\varepsilon / 3$.' },
        { explicacion: 'Tomamos $\\delta = \\varepsilon / 3$. Entonces si $|x-2| < \\delta$, $|3x-6| < 3\\delta = \\varepsilon$.' },
      ],
      resultado: 'Demostrado: con $\\delta = \\varepsilon/3$ basta.',
    },
  ],
  erroresComunes: [
    'Confundir el orden de los cuantificadores: para todo $\\varepsilon$, existe $\\delta$, no al revés.',
    'Tomar un $\\delta$ que depende de $x$. Tiene que depender solo de $\\varepsilon$.',
    'No usar la condición $0 < |x - a|$ (que excluye $x = a$).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En la definición $\\varepsilon$-$\\delta$, $\\delta$ puede depender de $\\varepsilon$.',
        correcta: true,
        explicacion: 'Cierto. Justamente: $\\delta = \\delta(\\varepsilon)$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'La condición $0 < |x - a|$ permite que $x = a$.',
        correcta: false,
        explicacion: 'Falso. Justamente excluye $x = a$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Para que $\\lim_{x \\to a} f(x) = L$ exista, $f$ debe estar definida en $a$.',
        correcta: false,
        explicacion: 'Falso. El límite estudia el comportamiento cerca de $a$, no en $a$.',
      },
    ],
  },
  relacionados: ['continuidad-uniforme', 'sucesiones-cauchy'],
  tags: ['limite', 'epsilon delta', 'analisis', 'rigor'],
};
