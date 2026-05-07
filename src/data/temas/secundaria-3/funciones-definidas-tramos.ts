import type { Tema } from '../tipos';

export const FUNCIONES_DEFINIDAS_TRAMOS: Tema = {
  slug: 'funciones-definidas-tramos',
  titulo: 'Funciones definidas por tramos',
  anios: ['secundaria-3'],
  area: 'funciones',
  nivel: 'intermedio',
  resumen:
    'Funciones que tienen distintas fórmulas según el intervalo de $x$. Ejemplo: tarifas, valor absoluto, escalonadas.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Una función a tramos define distintas fórmulas para distintos rangos de $x$. Para evaluarla, primero identificás en qué tramo está el $x$ que te dan.',
    },
    {
      tipo: 'latex',
      latex:
        'f(x) = \\begin{cases} x + 1 & \\text{si } x < 0 \\\\ x^2 & \\text{si } x \\ge 0 \\end{cases}',
      display: true,
    },
  ],
  ejemplos: [
    {
      titulo: 'Evaluar',
      enunciado:
        'Para la función arriba, calculá $f(-2)$, $f(0)$ y $f(3)$.',
      pasos: [
        { explicacion: '$f(-2)$: $-2 < 0$ → $-2 + 1 = -1$.' },
        { explicacion: '$f(0)$: $0 \\ge 0$ → $0^2 = 0$.' },
        { explicacion: '$f(3)$: $3 \\ge 0$ → $9$.' },
      ],
      resultado: '$f(-2) = -1$, $f(0) = 0$, $f(3) = 9$.',
    },
  ],
  erroresComunes: [
    'Aplicar la fórmula equivocada para el tramo dado.',
    'No considerar correctamente las desigualdades estrictas o no.',
    'Olvidar si el extremo entra o no en el tramo.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Si $f(x) = \\begin{cases} 2x & x < 1 \\\\ x + 3 & x \\ge 1 \\end{cases}$, ¿$f(1)$?',
        respuesta: 4,
        explicacion: '$1 \\ge 1$ → $1 + 3 = 4$.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Mismo, ¿$f(0)$?',
        respuesta: 0,
        explicacion: '$0 < 1$ → $2 \\times 0 = 0$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Las funciones a tramos pueden tener saltos o esquinas en su gráfico.',
        correcta: true,
        explicacion: 'Cierto. Pueden ser discontinuas o no derivables en los puntos de unión.',
      },
    ],
  },
  relacionados: ['funcion-modulo', 'graficos-funciones'],
  tags: ['funciones', 'tramos', 'definicion por casos'],
};
