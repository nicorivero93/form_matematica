import type { Tema } from '../tipos';

export const RECTAS_PARALELAS_PERPENDICULARES: Tema = {
  slug: 'rectas-paralelas-perpendiculares',
  titulo: 'Rectas paralelas y perpendiculares: pendientes',
  anios: ['secundaria-2'],
  area: 'funciones',
  nivel: 'intermedio',
  resumen:
    'Dos rectas son paralelas si tienen la MISMA pendiente. Son perpendiculares si sus pendientes son inversas y opuestas.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Posición', 'Relación entre pendientes'],
      filas: [
        ['Paralelas', '$m_1 = m_2$'],
        ['Perpendiculares', '$m_1 \\cdot m_2 = -1$ (es decir, $m_2 = -\\tfrac{1}{m_1}$)'],
        ['Coincidentes', 'Misma m y mismo b'],
        ['Secantes oblicuas', 'Distintas pendientes y no perpendiculares'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Paralela',
      enunciado:
        'Encontrá una recta paralela a $y = 3x + 2$ que pase por $(0, 5)$.',
      pasos: [
        { explicacion: 'Misma pendiente: $m = 3$. Ordenada en (0,5): $b = 5$.' },
      ],
      resultado: '$y = 3x + 5$.',
    },
    {
      titulo: 'Perpendicular',
      enunciado:
        'Encontrá una recta perpendicular a $y = 2x - 1$.',
      pasos: [
        { explicacion: 'Pendiente perpendicular: $-1/2$.' },
        { explicacion: 'Ej: $y = -\\tfrac{1}{2} x + 3$.' },
      ],
      resultado: '$y = -\\tfrac{1}{2}x + b$ con cualquier $b$.',
    },
  ],
  erroresComunes: [
    'Cambiar solo el signo (no toma la inversa).',
    'Pensar que "perpendicular" siempre es vertical.',
    'Olvidar que dos rectas con misma m pero distinto b son paralelas (no coincidentes).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado:
          '¿Cuál es paralela a $y = 4x - 7$?',
        opciones: ['$y = -4x + 5$', '$y = 4x + 5$', '$y = \\tfrac{1}{4}x$', '$y = -\\tfrac{1}{4}x$'],
        correcta: 1,
        explicacion: 'Misma pendiente: 4.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es perpendicular a $y = 3x + 1$?',
        opciones: ['$y = 3x - 1$', '$y = -3x + 1$', '$y = -\\tfrac{1}{3}x$', '$y = \\tfrac{1}{3}x$'],
        correcta: 2,
        explicacion: '$m_2 = -1/m_1 = -1/3$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Dos rectas perpendiculares tienen pendientes con producto -1.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  visualizadorId: 'graficador-lineal',
  relacionados: ['funcion-lineal-completa', 'rectas-geometria'],
  tags: ['rectas', 'paralelas', 'perpendiculares', 'pendiente'],
};
