import type { Tema } from '../tipos';

export const DISTRIBUCION_NORMAL: Tema = {
  slug: 'distribucion-normal',
  titulo: 'Distribución normal',
  anios: ['facultad-probabilidad-estadistica'],
  area: 'estadistica-probabilidad',
  nivel: 'avanzado',
  resumen:
    '$X \\sim N(\\mu, \\sigma^2)$ tiene densidad $f(x) = \\dfrac{1}{\\sigma \\sqrt{2\\pi}} e^{-(x-\\mu)^2/(2\\sigma^2)}$. Es simétrica, unimodal, "campana".',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Estandarización',
      texto:
        'Si $X \\sim N(\\mu, \\sigma^2)$, entonces $Z = (X - \\mu)/\\sigma \\sim N(0, 1)$ (normal estándar).',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Tabla Z',
      texto:
        'Para calcular probabilidades, se estandariza y se usa la tabla de la $N(0, 1)$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Estandarizar',
      enunciado:
        '$X \\sim N(50, 25)$. ¿$P(X < 60)$?',
      pasos: [
        { explicacion: '$\\sigma = 5$. $Z = (60 - 50)/5 = 2$.' },
        { explicacion: '$P(Z < 2) \\approx 0{,}9772$ (tabla).' },
      ],
      resultado: '≈ 0,9772.',
    },
  ],
  erroresComunes: [
    'Olvidar dividir por $\\sigma$ (no por $\\sigma^2$) al estandarizar.',
    'Confundir varianza con desvío.',
    'Mal uso de la tabla Z (lados, complemento).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si $X \\sim N(\\mu, \\sigma^2)$, entonces $E(X) = \\mu$ y $V(X) = \\sigma^2$.',
        correcta: true,
        explicacion: 'Por definición.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En la $N(0, 1)$, $P(Z < 0) = 0{,}5$.',
        correcta: true,
        explicacion: 'Por simetría.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si $X \\sim N$ y $Y = 2X + 3$, $Y$ también es normal.',
        correcta: true,
        explicacion: 'Cierto: las normales son cerradas bajo combinaciones lineales.',
      },
    ],
  },
  relacionados: ['variables-aleatorias-continuas', 'teorema-central-limite'],
  tags: ['normal', 'gauss', 'estandarizacion'],
};
