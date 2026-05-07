import type { Tema } from '../tipos';

export const ECUACIONES_TRIGONOMETRICAS: Tema = {
  slug: 'ecuaciones-trigonometricas',
  titulo: 'Ecuaciones trigonométricas',
  anios: ['secundaria-4'],
  area: 'trigonometria',
  nivel: 'avanzado',
  resumen:
    'Ecuaciones donde la incógnita está dentro de una función trigonométrica. Tienen infinitas soluciones por la periodicidad.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Periodicidad',
      texto:
        'Sin y cos tienen período $2\\pi$ (o 360°). Tan tiene período $\\pi$ (o 180°). Las soluciones se repiten cada período.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Resolver',
      enunciado: 'Resolvé $\\sin x = 1/2$ en $[0, 2\\pi]$.',
      pasos: [
        { explicacion: '$\\sin x = 1/2$ en cuadrante I: $x = \\pi/6$.' },
        { explicacion: 'En cuadrante II: $x = \\pi - \\pi/6 = 5\\pi/6$.' },
      ],
      resultado: '$x = \\pi/6$ y $x = 5\\pi/6$.',
    },
  ],
  erroresComunes: [
    'Encontrar solo una solución cuando hay varias en el período.',
    'Confundir grados con radianes.',
    'Olvidar que se repiten en cada período.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En $[0, 2\\pi)$, $\\sin x = 1/2$ tiene exactamente 2 soluciones.',
        correcta: true,
        explicacion: 'Cierto: en cuadrantes I y II.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'La ecuación $\\cos x = 2$ tiene solución real.',
        correcta: false,
        explicacion: 'Falso: $\\cos x \\in [-1, 1]$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Las ecuaciones trigonométricas tienen infinitas soluciones (en general).',
        correcta: true,
        explicacion: 'Cierto, por la periodicidad.',
      },
    ],
  },
  visualizadorId: 'circulo-trig',
  relacionados: ['trigonometria-circulo', 'identidades-trigonometricas'],
  tags: ['ecuaciones', 'trigonometria', 'periodicidad'],
};
