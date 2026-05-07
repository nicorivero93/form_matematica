import type { Tema } from '../tipos';

export const FUNCION_CUADRATICA_GRAFICO: Tema = {
  slug: 'funcion-cuadratica-grafico',
  titulo: 'Gráfico de la función cuadrática',
  anios: ['secundaria-2'],
  area: 'funciones',
  nivel: 'avanzado',
  resumen:
    'Cómo dibujar la parábola: vértice, eje de simetría, raíces y puntos auxiliares.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Vértice',
      texto:
        'En $y = ax^2 + bx + c$, el vértice está en $x_v = -\\dfrac{b}{2a}$. Para encontrar $y_v$, reemplazás $x_v$ en la función.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El eje de simetría es la recta vertical $x = x_v$. La parábola es simétrica respecto a este eje.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Encontrar vértice',
      enunciado: 'Vértice de $y = x^2 - 4x + 1$.',
      pasos: [
        { explicacion: '$x_v = -(-4)/(2 \\times 1) = 2$.' },
        { explicacion: '$y_v = 4 - 8 + 1 = -3$.' },
      ],
      resultado: 'Vértice (2, -3).',
    },
    {
      titulo: 'Eje de simetría',
      enunciado: 'En $y = -2x^2 + 8x - 3$, ¿cuál es el eje de simetría?',
      pasos: [{ explicacion: '$x_v = -8/(-4) = 2$. Eje: $x = 2$.' }],
      resultado: '$x = 2$.',
    },
  ],
  erroresComunes: [
    'Olvidar el signo de $b$ en la fórmula.',
    'Confundir eje de simetría con vértice.',
    'No verificar el sentido de abertura.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Vértice (en $x_v$) de $y = x^2 - 6x + 8$.',
        respuesta: 3,
        explicacion: '$x_v = 6/2 = 3$.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Mismo problema, ¿cuánto vale $y_v$?',
        respuesta: -1,
        explicacion: '$f(3) = 9 - 18 + 8 = -1$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En la parábola, el vértice es donde está el máximo o mínimo.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['funcion-cuadratica-introduccion'],
  tags: ['cuadratica', 'parabola', 'vertice', 'eje de simetria'],
};
