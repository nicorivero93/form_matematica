import type { Tema } from '../tipos';

export const DERIVADAS_SUPERIORES: Tema = {
  slug: 'derivadas-superiores',
  titulo: 'Derivadas de orden superior y clases $C^k$',
  anios: ['facultad-analisis-1'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Si $f$ es derivable y $f\'$ también, $f$ es de clase $C^2$. Una función es $C^\\infty$ si tiene derivadas de todos los órdenes (suave).',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Clases de diferenciabilidad',
      texto:
        '$C^0$: continua. $C^1$: derivable y $f\'$ continua. $C^2$: $f\'$ derivable y $f\'\'$ continua. $C^\\infty$: derivable infinitas veces (suave).',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'No toda continua es $C^1$',
      texto:
        '$f(x) = |x|$ es continua pero NO derivable en 0 (cambio de signo de la pendiente). Es $C^0$ pero no $C^1$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Polinomio es $C^\\infty$',
      enunciado: '¿De qué clase es $f(x) = x^3$?',
      pasos: [
        { explicacion: '$f\'(x) = 3x^2$, $f\'\'(x) = 6x$, $f\'\'\'(x) = 6$, $f^{(4)}(x) = 0$, ... todas continuas.' },
      ],
      resultado: 'Es $C^\\infty$.',
    },
  ],
  erroresComunes: [
    'Confundir $C^k$ con tener derivada $k$-ésima (también necesita continuidad de la $k$-ésima).',
    'Pensar que ser derivable implica $C^1$ (no en general).',
    'Olvidar que toda función $C^\\infty$ es analítica solo bajo ciertas condiciones.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Todo polinomio es $C^\\infty$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si $f$ es $C^2$ y $f\'\'(x_0) > 0$, entonces $f$ tiene un mínimo local en $x_0$ si $f\'(x_0) = 0$.',
        correcta: true,
        explicacion: 'Test de la 2da derivada.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          '$f(x) = |x|$ es derivable en todo $\\mathbb{R}$.',
        correcta: false,
        explicacion: 'Falso. No es derivable en 0.',
      },
    ],
  },
  relacionados: ['polinomio-taylor', 'teorema-valor-medio'],
  tags: ['derivadas', 'C^k', 'clases', 'suave'],
};
