import type { Tema } from '../tipos';

export const PROBABILIDAD_EVENTOS: Tema = {
  slug: 'probabilidad-eventos',
  titulo: 'Eventos seguros, imposibles e independientes',
  anios: ['primaria-7'],
  area: 'estadistica-probabilidad',
  nivel: 'intermedio',
  resumen:
    'Distintos tipos de eventos en probabilidad: seguros, imposibles, complementarios e independientes.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Tipo', 'Probabilidad', 'Ejemplo'],
      filas: [
        ['Seguro', '1 (100%)', 'Sacar un número del 1 al 6 al tirar un dado.'],
        ['Imposible', '0 (0%)', 'Sacar un 7 con un dado de 6 caras.'],
        ['Complementario de A', '1 - P(A)', 'Si P(par)=1/2, P(impar)=1/2.'],
        ['Independientes', 'P(A y B) = P(A) × P(B)', 'Tirar dos veces una moneda.'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Independientes',
      texto:
        'Dos eventos son independientes si el resultado de uno no afecta al otro. Para que pasen los dos, multiplicamos sus probabilidades.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Complementario',
      texto:
        'El complementario de un evento A es "que NO pase A". Su probabilidad es $1 - P(A)$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Complementario',
      enunciado:
        'Si la probabilidad de que llueva es 30%, ¿cuál es la de que no llueva?',
      pasos: [{ explicacion: '1 - 0,30 = 0,70 = 70%.' }],
      resultado: '70%.',
    },
    {
      titulo: 'Eventos independientes',
      enunciado:
        'Tiramos una moneda dos veces. ¿Probabilidad de obtener cara las dos veces?',
      pasos: [
        { explicacion: 'P(cara) en cada tirada = 1/2.' },
        { explicacion: 'Como son independientes: 1/2 × 1/2 = 1/4.' },
      ],
      resultado: '1/4 = 25%.',
    },
  ],
  erroresComunes: [
    'Sumar probabilidades cuando se debe multiplicar (eventos "y").',
    'Pensar que un evento anterior afecta el siguiente cuando son independientes.',
    'Olvidar restar de 1 al calcular el complementario.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado:
          'P(A) = 0,4. ¿Cuál es la probabilidad del complementario?',
        opciones: ['0,4', '0,5', '0,6', '1'],
        correcta: 2,
        explicacion: '1 - 0,4 = 0,6.',
      },
      {
        tipo: 'multiple',
        enunciado:
          'Tirás un dado dos veces. ¿Probabilidad de sacar 6 las dos veces?',
        opciones: ['$\\tfrac{1}{6}$', '$\\tfrac{1}{12}$', '$\\tfrac{1}{36}$', '$\\tfrac{2}{6}$'],
        correcta: 2,
        explicacion: '1/6 × 1/6 = 1/36.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Sacar cara y cruz en dos tiradas de moneda son eventos independientes.',
        correcta: true,
        explicacion: 'Cierto. Cada tirada de moneda no afecta a la siguiente.',
      },
    ],
  },
  relacionados: ['probabilidad-basica'],
  tags: ['probabilidad', 'eventos', 'independientes', 'complementario'],
};
