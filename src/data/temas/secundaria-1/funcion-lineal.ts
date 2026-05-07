import type { Tema } from '../tipos';

export const FUNCION_LINEAL: Tema = {
  slug: 'funcion-lineal',
  titulo: 'Función lineal: introducción',
  anios: ['secundaria-1'],
  area: 'funciones',
  nivel: 'avanzado',
  resumen:
    'Las funciones lineales tienen la forma $y = mx + b$. Su gráfico es una recta.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Forma general',
      texto:
        '$y = mx + b$ donde $m$ es la pendiente (cuánto sube la recta por cada unidad a la derecha) y $b$ la ordenada al origen (donde corta el eje y).',
    },
    {
      tipo: 'parrafo',
      texto:
        'Si $m > 0$ la recta crece (sube). Si $m < 0$ decrece (baja). Si $m = 0$ es horizontal (constante).',
    },
  ],
  formulasClave: [
    {
      nombre: 'Función lineal',
      latex: 'y = mx + b',
      variables: [
        { simbolo: 'm', nombre: 'pendiente', desc: 'inclinación de la recta' },
        { simbolo: 'b', nombre: 'ordenada al origen', desc: 'corta al eje y en (0, b)' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar pendiente y ordenada',
      enunciado: 'En $y = 3x - 2$, ¿cuál es la pendiente y la ordenada al origen?',
      pasos: [
        { explicacion: 'Pendiente $m = 3$, ordenada $b = -2$.' },
      ],
      resultado: '$m = 3$, $b = -2$.',
    },
    {
      titulo: 'Calcular valores',
      enunciado: 'Si $f(x) = 2x + 3$, ¿cuánto es $f(5)$?',
      pasos: [{ explicacion: '$f(5) = 2(5) + 3 = 13$.' }],
      resultado: '13.',
    },
    {
      titulo: 'Encontrar el cero',
      enunciado: '¿Dónde corta al eje x la recta $y = 2x - 6$?',
      pasos: [
        { explicacion: 'Cero: $2x - 6 = 0 \\Rightarrow x = 3$.' },
      ],
      resultado: 'En $x = 3$.',
    },
  ],
  erroresComunes: [
    'Confundir pendiente con ordenada al origen.',
    'Calcular el cero usando $y$ en vez de $x$.',
    'Olvidar el signo de la pendiente.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'En $y = -2x + 5$, ¿cuál es la ordenada al origen?',
        opciones: ['-2', '2', '-5', '5'],
        correcta: 3,
        explicacion: 'La ordenada al origen es $b = 5$.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Si $f(x) = 4x - 7$, ¿cuánto vale $f(2)$?',
        respuesta: 1,
        explicacion: '$4(2) - 7 = 1$.',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Cuál es el cero de $y = 3x + 9$?',
        respuesta: -3,
        explicacion: '$3x + 9 = 0 \\Rightarrow x = -3$.',
      },
    ],
  },
  visualizadorId: 'plano-cartesiano',
  relacionados: ['funcion-introduccion', 'plano-cartesiano-puntos'],
  tags: ['funcion lineal', 'pendiente', 'recta'],
};
