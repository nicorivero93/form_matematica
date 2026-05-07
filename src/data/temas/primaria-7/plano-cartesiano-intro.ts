import type { Tema } from '../tipos';

export const PLANO_CARTESIANO_INTRO: Tema = {
  slug: 'plano-cartesiano-intro',
  titulo: 'Plano cartesiano: introducción',
  anios: ['primaria-7'],
  area: 'algebra',
  nivel: 'intro',
  resumen:
    'Cómo ubicar un punto en el plano usando dos coordenadas (x, y). Los cuatro cuadrantes y el origen.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Plano cartesiano',
      texto:
        'Es un sistema de dos rectas perpendiculares que se cortan en un punto llamado origen. La horizontal es el eje x (abscisas) y la vertical el eje y (ordenadas).',
    },
    {
      tipo: 'parrafo',
      texto:
        'Un punto en el plano se representa con un par ordenado (x, y). El primer número es la coordenada en x (cuánto se mueve hacia la derecha o izquierda) y el segundo en y (arriba o abajo).',
    },
    {
      tipo: 'tabla',
      encabezados: ['Cuadrante', 'Signos (x, y)'],
      filas: [
        ['I (arriba derecha)', '(+, +)'],
        ['II (arriba izquierda)', '(-, +)'],
        ['III (abajo izquierda)', '(-, -)'],
        ['IV (abajo derecha)', '(+, -)'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Recordá: el origen (0, 0) es el centro. (3, 0) está sobre el eje x. (0, 4) está sobre el eje y.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar cuadrante',
      enunciado: '¿En qué cuadrante está el punto (-3, 5)?',
      pasos: [
        { explicacion: 'x es negativo (izquierda), y es positivo (arriba).' },
        { explicacion: 'Eso es el cuadrante II.' },
      ],
      resultado: 'Cuadrante II.',
    },
    {
      titulo: 'Punto sobre los ejes',
      enunciado: '¿Dónde está el punto (0, -2)?',
      pasos: [
        { explicacion: 'x = 0 → está sobre el eje y.' },
        { explicacion: 'y = -2 → está abajo del origen.' },
      ],
      resultado: 'Sobre el eje y, debajo del origen.',
    },
  ],
  erroresComunes: [
    'Confundir el orden: (x, y), no (y, x).',
    'Mover en la dirección equivocada con coordenadas negativas.',
    'Pensar que el cuadrante I es el de la izquierda (es el de arriba a la derecha).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿En qué cuadrante está (-4, -2)?',
        opciones: ['I', 'II', 'III', 'IV'],
        correcta: 2,
        explicacion: 'Ambas coordenadas negativas → III.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuál de estos puntos está sobre el eje x?',
        opciones: ['(0, 5)', '(5, 0)', '(5, 5)', '(-5, 5)'],
        correcta: 1,
        explicacion: 'Sobre el eje x, la coordenada y es 0.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El origen tiene coordenadas (0, 0).',
        correcta: true,
        explicacion: 'Cierto. Es el punto donde se cortan los ejes.',
      },
    ],
  },
  relacionados: ['lenguaje-algebraico'],
  tags: ['plano cartesiano', 'coordenadas', 'cuadrantes', 'eje x', 'eje y'],
};
