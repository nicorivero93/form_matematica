import type { Tema } from '../tipos';

export const SERIES_INTRODUCCION: Tema = {
  slug: 'series-introduccion',
  titulo: 'Series numéricas: introducción',
  anios: ['secundaria-5'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Una serie es la suma infinita de términos de una sucesión. Algunas convergen a un valor finito, otras divergen.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Serie geométrica',
      texto:
        'Si $|r| < 1$, $\\sum_{n=0}^{\\infty} a r^n = \\dfrac{a}{1 - r}$. Si $|r| \\ge 1$, diverge.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Suma geométrica',
      enunciado:
        'Calculá $\\sum_{n=0}^\\infty \\left(\\dfrac{1}{2}\\right)^n = 1 + 1/2 + 1/4 + \\cdots$.',
      pasos: [
        { explicacion: '$a = 1$, $r = 1/2$. $|r| < 1$ → converge.' },
        { explicacion: '$S = 1/(1 - 1/2) = 2$.' },
      ],
      resultado: '2.',
    },
  ],
  erroresComunes: [
    'Aplicar la fórmula con $|r| \\ge 1$.',
    'Olvidar el primer término.',
    'Confundir convergencia con divergencia.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Suma de la serie geométrica con $a = 3$ y $r = 1/3$.',
        respuesta: 4.5,
        tolerancia: 0.05,
        explicacion: '$3 / (1 - 1/3) = 4{,}5$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'La serie con razón $r = 2$ converge.',
        correcta: false,
        explicacion: 'Falso. $|r| \\ge 1$, diverge.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'La suma de infinitos términos puede ser un número finito.',
        correcta: true,
        explicacion: 'Cierto, si la serie converge.',
      },
    ],
  },
  relacionados: ['sucesiones-limites', 'sucesiones-formulas'],
  tags: ['series', 'convergencia', 'geometrica'],
};
