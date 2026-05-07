import type { Tema } from '../tipos';

export const VARIABLES_ALEATORIAS_CONTINUAS: Tema = {
  slug: 'variables-aleatorias-continuas',
  titulo: 'Variables aleatorias continuas',
  anios: ['facultad-probabilidad-estadistica'],
  area: 'estadistica-probabilidad',
  nivel: 'avanzado',
  resumen:
    'Toman valores en $\\mathbb{R}$ (o intervalo). Se describen con función de densidad $f(x)$. $P(a \\le X \\le b) = \\int_a^b f$.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Función de densidad',
      texto:
        '$f(x) \\ge 0$ y $\\int_{-\\infty}^\\infty f(x) \\, dx = 1$.',
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      titulo: 'Probabilidad puntual',
      texto:
        'En continuas, $P(X = x) = 0$ para todo $x$. Solo tienen sentido las probabilidades de intervalos.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Uniforme',
      enunciado:
        '$X$ uniforme en $[0, 4]$. ¿$P(1 \\le X \\le 3)$?',
      pasos: [
        { explicacion: '$f(x) = 1/4$ en $[0, 4]$.' },
        { explicacion: '$\\int_1^3 1/4 \\, dx = 2/4 = 1/2$.' },
      ],
      resultado: '$1/2$.',
    },
  ],
  erroresComunes: [
    'Pensar que $P(X = x) > 0$ en continuas (es 0).',
    'No verificar que la densidad integre 1.',
    'Mezclar densidad con probabilidad puntual.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Para una v.a. continua, $P(X = 2) > 0$ siempre.',
        correcta: false,
        explicacion: 'Falso. Es 0.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'La densidad es no negativa e integra 1.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En continuas, $P(a < X < b) = P(a \\le X \\le b)$.',
        correcta: true,
        explicacion: 'Cierto: $P(X = a) = P(X = b) = 0$.',
      },
    ],
  },
  relacionados: ['variables-aleatorias-discretas', 'distribucion-normal'],
  tags: ['v.a. continua', 'densidad'],
};
