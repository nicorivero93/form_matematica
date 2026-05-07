import type { Tema } from '../tipos';

export const DECIMALES_SUMA_RESTA: Tema = {
  slug: 'decimales-suma-resta',
  titulo: 'Suma y resta de decimales',
  anios: ['primaria-6'],
  area: 'fracciones-decimales',
  nivel: 'intermedio',
  resumen:
    'Para sumar o restar decimales, hay que alinear las comas. El truco principal es ese.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Regla de oro',
      texto:
        'Encolumnar siempre alineando las comas (no las cifras de la derecha). Las décimas con las décimas, las centésimas con las centésimas, y así.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Si una de las cifras tiene menos decimales que la otra, completá con ceros a la derecha (no cambia el valor).',
    },
    {
      tipo: 'parrafo',
      texto:
        'Una vez alineadas las comas, sumá o restá como con números enteros. La coma del resultado va exactamente debajo de las otras.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Suma con distinta cantidad de decimales',
      enunciado: 'Calculá 4,7 + 2,35.',
      pasos: [
        { explicacion: 'Alineamos comas. 4,7 lo escribimos como 4,70 para emparejar.' },
        { explicacion: 'Sumamos como enteros: 470 + 235 = 705.' },
        { explicacion: 'La coma queda en la misma columna: 7,05.' },
      ],
      resultado: '7,05',
    },
    {
      titulo: 'Resta',
      enunciado: 'Calculá 8,3 - 3,75.',
      pasos: [
        { explicacion: 'Alineamos. 8,3 lo escribimos como 8,30.' },
        { explicacion: 'Restamos: 8,30 - 3,75 = 4,55.' },
      ],
      resultado: '4,55',
    },
  ],
  erroresComunes: [
    'Alinear los números a la derecha (como con enteros) en vez de alinear por la coma.',
    'Olvidar la coma en el resultado.',
    'No completar con ceros cuando los decimales tienen distinta cantidad de cifras.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Calculá: 5,2 + 3,8 = ?',
        respuesta: 9,
        explicacion: '5,2 + 3,8 = 9,0 = 9.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Calculá: 10 - 2,75 = ?',
        respuesta: 7.25,
        tolerancia: 0.001,
        explicacion: '10,00 - 2,75 = 7,25.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Para sumar 1,5 + 2,75 hay que alinear "1,50" con "2,75".',
        correcta: true,
        explicacion: 'Cierto. Completamos con ceros para alinear comas.',
      },
    ],
  },
  relacionados: ['decimales-introduccion', 'decimales-multiplicacion'],
  tags: ['decimales', 'suma', 'resta', 'comas alineadas'],
};
