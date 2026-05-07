import type { Tema } from '../tipos';

export const TRANSFORMACIONES_LINEALES: Tema = {
  slug: 'transformaciones-lineales',
  titulo: 'Transformaciones lineales',
  anios: ['facultad-algebra-lineal'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Una T.L. $T: V \\to W$ cumple $T(u + v) = T(u) + T(v)$ y $T(c v) = c T(v)$. Quedan determinadas por sus valores en una base.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Linealidad',
      texto:
        '$T(\\alpha u + \\beta v) = \\alpha T(u) + \\beta T(v)$ para todos $u, v$ y escalares $\\alpha, \\beta$.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Matriz asociada',
      texto:
        'Toda T.L. entre espacios de dimensión finita tiene una matriz asociada respecto a bases dadas.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Verificar linealidad',
      enunciado:
        '¿$T(x, y) = (x + y, 2x)$ es T.L.?',
      pasos: [
        { explicacion: '$T(u + v) = (u_1 + v_1 + u_2 + v_2, 2(u_1 + v_1)) = T(u) + T(v)$ ✓.' },
        { explicacion: '$T(c v) = (c v_1 + c v_2, 2cv_1) = c T(v)$ ✓.' },
      ],
      resultado: 'Sí, es T.L.',
    },
  ],
  erroresComunes: [
    'No verificar las dos propiedades.',
    'Confundir T.L. con función afín ($T(x) = Ax + b$).',
    'Pensar que cualquier función es T.L.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          '$T(x) = x + 5$ es T.L. de $\\mathbb{R} \\to \\mathbb{R}$.',
        correcta: false,
        explicacion: 'Falso. $T(0) = 5 \\neq 0$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Toda T.L. envía 0 al 0.',
        correcta: true,
        explicacion: 'Cierto: $T(0) = T(0 + 0) = 2T(0)$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Una T.L. queda determinada por sus valores en una base.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['bases-dimension', 'nucleo-imagen'],
  tags: ['transformaciones lineales'],
};
