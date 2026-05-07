import type { Tema } from '../tipos';

export const MULTIPLICADORES_LAGRANGE: Tema = {
  slug: 'multiplicadores-lagrange',
  titulo: 'Multiplicadores de Lagrange',
  anios: ['facultad-analisis-2'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Para optimizar $f$ sujeto a la restricción $g = 0$: $\\nabla f = \\lambda \\nabla g$.',
  teoria: [
    {
      tipo: 'latex',
      latex: '\\nabla f(x, y) = \\lambda \\nabla g(x, y)',
      display: true,
    },
    {
      tipo: 'parrafo',
      texto:
        'En el punto óptimo, los gradientes de $f$ y $g$ son paralelos. Esto da un sistema de ecuaciones que junto con $g = 0$ determina los puntos candidatos.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Optimización con restricción',
      enunciado:
        'Maximizar $f(x, y) = xy$ sujeto a $x + y = 10$.',
      pasos: [
        { explicacion: '$g = x + y - 10$. $\\nabla f = (y, x)$, $\\nabla g = (1, 1)$.' },
        { explicacion: 'Lagrange: $y = \\lambda$, $x = \\lambda$. Entonces $x = y$.' },
        { explicacion: 'En la restricción: $2x = 10 \\Rightarrow x = y = 5$.' },
        { explicacion: 'Máximo: $f(5, 5) = 25$.' },
      ],
      resultado: 'Máximo 25 en (5, 5).',
    },
  ],
  erroresComunes: [
    'Olvidar la restricción $g = 0$ al final.',
    'No verificar si es máximo o mínimo.',
    'Confundir signo del multiplicador.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En Lagrange, $\\nabla f$ y $\\nabla g$ son paralelos en el óptimo.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'El método de Lagrange siempre da máximos y mínimos absolutos.',
        correcta: false,
        explicacion: 'Falso. Solo da puntos candidatos. Hay que verificar.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si la restricción es $g = c$, escribimos $g - c = 0$ y aplicamos Lagrange.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['extremos-varias-variables', 'gradiente'],
  tags: ['lagrange', 'optimizacion', 'restriccion'],
};
