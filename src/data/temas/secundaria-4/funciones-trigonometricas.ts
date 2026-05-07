import type { Tema } from '../tipos';

export const FUNCIONES_TRIGONOMETRICAS: Tema = {
  slug: 'funciones-trigonometricas',
  titulo: 'Funciones trigonométricas: gráficos',
  anios: ['secundaria-4'],
  area: 'trigonometria',
  nivel: 'intermedio',
  resumen:
    'Los gráficos de $y = \\sin x$, $y = \\cos x$ y $y = \\tan x$. Periodicidad, amplitud, asíntotas.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Función', 'Período', 'Imagen', 'Notas'],
      filas: [
        ['$\\sin$', '$2\\pi$', '$[-1, 1]$', 'Pasa por (0, 0).'],
        ['$\\cos$', '$2\\pi$', '$[-1, 1]$', 'Pasa por (0, 1).'],
        ['$\\tan$', '$\\pi$', '$\\mathbb{R}$', 'Asíntotas en $\\pi/2 + k\\pi$.'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar',
      enunciado: '¿Cuál es el máximo de $y = \\sin x$?',
      pasos: [{ explicacion: 'Imagen es $[-1, 1]$. Máximo: 1.' }],
      resultado: '1.',
    },
  ],
  erroresComunes: [
    'Confundir período con amplitud.',
    'Pensar que $\\tan$ está acotada.',
    'Olvidar las asíntotas de $\\tan$.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado: 'El período del seno es $2\\pi$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$\\tan x$ tiene asíntotas verticales.',
        correcta: true,
        explicacion: 'Cierto, en $\\pi/2 + k\\pi$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El cos tiene la misma forma que el sen pero desplazado.',
        correcta: true,
        explicacion: '$\\cos x = \\sin(x + \\pi/2)$.',
      },
    ],
  },
  visualizadorId: 'circulo-trig',
  relacionados: ['trigonometria-circulo'],
  tags: ['trigonometria', 'graficos', 'periodicidad'],
};
