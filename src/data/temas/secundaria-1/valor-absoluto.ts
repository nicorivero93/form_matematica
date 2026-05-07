import type { Tema } from '../tipos';

export const VALOR_ABSOLUTO: Tema = {
  slug: 'valor-absoluto',
  titulo: 'Valor absoluto',
  anios: ['secundaria-1'],
  area: 'numeros-y-operaciones',
  nivel: 'intermedio',
  resumen:
    'El valor absoluto es la distancia de un número al cero, sin importar el signo. $|x|$ siempre es positivo o cero.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Valor absoluto',
      texto:
        '$|x|$ es la distancia de $x$ al cero en la recta numérica. Por eso siempre es positivo o cero.',
    },
    {
      tipo: 'latex',
      latex: '|x| = \\begin{cases} x & \\text{si } x \\ge 0 \\\\ -x & \\text{si } x < 0 \\end{cases}',
      display: true,
    },
    {
      tipo: 'tabla',
      encabezados: ['Expresión', 'Valor'],
      filas: [
        ['$|7|$', '7'],
        ['$|-5|$', '5'],
        ['$|0|$', '0'],
        ['$|-3,2|$', '3,2'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Cálculo simple',
      enunciado: 'Calculá $|-12| + |8|$.',
      pasos: [
        { explicacion: '$|-12| = 12$.' },
        { explicacion: '$|8| = 8$.' },
        { explicacion: 'Suma: 20.' },
      ],
      resultado: '20.',
    },
    {
      titulo: 'Distancia entre puntos',
      enunciado: '¿Cuál es la distancia entre $-3$ y $7$ en la recta?',
      pasos: [
        { explicacion: 'Distancia: $|7 - (-3)| = |10| = 10$.' },
      ],
      resultado: '10.',
    },
  ],
  erroresComunes: [
    'Pensar que $|x| = x$ siempre (es así si $x \\ge 0$, pero $|x| = -x$ si $x < 0$).',
    'Sumar dentro de las barras antes de aplicar valor absoluto cuando no corresponde.',
    'Olvidar que $|x| \\ge 0$ siempre.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuánto vale $|-15|$?',
        respuesta: 15,
        explicacion: 'Distancia al cero: 15.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Calculá $|-3| - |2|$.',
        respuesta: 1,
        explicacion: '3 - 2 = 1.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$|x|$ siempre es mayor o igual a 0.',
        correcta: true,
        explicacion: 'Cierto. Es una distancia.',
      },
    ],
  },
  relacionados: ['numeros-enteros-introduccion', 'enteros-suma-resta'],
  tags: ['valor absoluto', 'distancia', 'recta numerica'],
};
