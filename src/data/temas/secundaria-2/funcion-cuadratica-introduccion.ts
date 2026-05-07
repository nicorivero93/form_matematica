import type { Tema } from '../tipos';

export const FUNCION_CUADRATICA_INTRODUCCION: Tema = {
  slug: 'funcion-cuadratica-introduccion',
  titulo: 'Función cuadrática: introducción',
  anios: ['secundaria-2'],
  area: 'funciones',
  nivel: 'avanzado',
  resumen:
    'Funciones de la forma $y = ax^2 + bx + c$. Su gráfico es una parábola. Análisis básico de la forma canónica.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Función cuadrática',
      texto:
        '$f(x) = ax^2 + bx + c$ con $a \\neq 0$. El gráfico es una curva en forma de U llamada parábola.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Si $a > 0$, la parábola abre hacia arriba (tiene un mínimo). Si $a < 0$, abre hacia abajo (tiene un máximo).',
    },
    {
      tipo: 'tabla',
      encabezados: ['Concepto', 'Significado'],
      filas: [
        ['Vértice', 'Punto extremo (máx o mín).'],
        ['Eje de simetría', 'Recta vertical que pasa por el vértice.'],
        ['Raíces', 'Donde el gráfico cruza el eje x ($f = 0$).'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar abertura',
      enunciado: 'En $f(x) = -2x^2 + 5$, ¿abre hacia arriba o hacia abajo?',
      pasos: [{ explicacion: '$a = -2 < 0$ → abre hacia abajo.' }],
      resultado: 'Hacia abajo.',
    },
    {
      titulo: 'Calcular un valor',
      enunciado: 'Si $f(x) = x^2 - 3x + 2$, ¿cuánto vale $f(4)$?',
      pasos: [
        { explicacion: '$f(4) = 16 - 12 + 2 = 6$.' },
      ],
      resultado: '6.',
    },
  ],
  erroresComunes: [
    'Confundir el signo de $a$ con la dirección de abertura.',
    'Pensar que es una recta.',
    'Olvidar que la cuadrática puede tener 0, 1 o 2 raíces.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado:
          'En $f(x) = 3x^2 + 2x - 1$, $f(0) = ?$',
        opciones: ['-1', '0', '1', '2'],
        correcta: 0,
        explicacion: '$3(0) + 2(0) - 1 = -1$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Si $a > 0$ la parábola abre hacia arriba.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Toda función cuadrática tiene exactamente dos raíces reales.',
        correcta: false,
        explicacion: 'Falso. Puede tener 0, 1 o 2.',
      },
    ],
  },
  relacionados: ['funcion-lineal-completa', 'productos-notables'],
  tags: ['cuadratica', 'parabola', 'funciones'],
};
