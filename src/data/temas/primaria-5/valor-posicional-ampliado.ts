import type { Tema } from '../tipos';

export const VALOR_POSICIONAL_AMPLIADO: Tema = {
  slug: 'valor-posicional-ampliado',
  titulo: 'Valor posicional hasta el millón',
  anios: ['primaria-5'],
  area: 'numeros-y-operaciones',
  nivel: 'intro',
  resumen:
    'Cada cifra vale según el lugar que ocupa, hasta las centenas de mil. Cómo descomponer un número grande.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'En el número 425.038, cada cifra tiene un valor distinto según el lugar: el 4 vale 400.000, el 2 vale 20.000, el 5 vale 5.000, el 0 vale 0, el 3 vale 30 y el 8 vale 8.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Posición', 'Vale', '425.038'],
      filas: [
        ['CM', '100.000', '4 → 400.000'],
        ['DM', '10.000', '2 → 20.000'],
        ['UM', '1.000', '5 → 5.000'],
        ['C', '100', '0 → 0'],
        ['D', '10', '3 → 30'],
        ['U', '1', '8 → 8'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Descomposición',
      texto:
        'Descomponer es escribir el número como suma de los valores de cada cifra: 425.038 = 400.000 + 20.000 + 5.000 + 30 + 8.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Descomponer un número de 6 cifras',
      enunciado: 'Descomponé 506.270.',
      pasos: [
        { explicacion: 'CM: 5 → 500.000' },
        { explicacion: 'DM: 0 → 0' },
        { explicacion: 'UM: 6 → 6.000' },
        { explicacion: 'C: 2 → 200' },
        { explicacion: 'D: 7 → 70' },
        { explicacion: 'U: 0 → 0' },
        { explicacion: 'Suma de control: 500.000 + 6.000 + 200 + 70 = 506.270 ✓' },
      ],
      resultado: '500.000 + 6.000 + 200 + 70 = 506.270',
    },
    {
      titulo: 'Armar un número desde su descomposición',
      enunciado: 'Sumá: 700.000 + 40.000 + 800 + 5.',
      pasos: [
        { explicacion: '700.000 + 40.000 = 740.000.' },
        { explicacion: '740.000 + 800 = 740.800.' },
        { explicacion: '740.800 + 5 = 740.805.' },
      ],
      resultado: '740.805',
    },
  ],
  erroresComunes: [
    'Saltearse posiciones vacías al descomponer. Si un número tiene un 0 en alguna posición, esa parte vale 0.',
    'Confundir las centenas con las centenas de mil. La C son 100, la CM son 100.000.',
    'Mezclar cifras al escribir el número desde su descomposición.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'En el número 832.405, ¿cuánto vale el 3?',
        opciones: ['3', '300', '30.000', '3.000'],
        correcta: 2,
        explicacion: 'El 3 está en las decenas de mil → 3 × 10.000 = 30.000.',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Qué número se forma con 200.000 + 50.000 + 8.000 + 70 + 4?',
        respuesta: 258074,
        explicacion: '200.000 + 50.000 = 250.000. + 8.000 = 258.000. + 70 = 258.070. + 4 = 258.074.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En 405.060, hay dos posiciones con valor 0.',
        correcta: true,
        explicacion: 'Cierto: la decena de mil (0) y la unidad (0).',
      },
    ],
  },
  relacionados: ['numeros-hasta-1000000', 'valor-posicional'],
  tags: ['valor posicional', 'descomposicion', 'centena de mil', 'millon'],
};
