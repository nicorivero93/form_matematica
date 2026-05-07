import type { Tema } from '../tipos';

export const VALOR_POSICIONAL: Tema = {
  slug: 'valor-posicional',
  titulo: 'Valor posicional',
  anios: ['primaria-4'],
  area: 'numeros-y-operaciones',
  nivel: 'intro',
  resumen:
    'Cada cifra de un número vale distinto según el lugar que ocupa: unidades, decenas, centenas o unidades de mil.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'En el número 4.275, el 4 vale 4.000, el 2 vale 200, el 7 vale 70 y el 5 vale 5. La misma cifra cambia su valor según la posición.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Posición', 'Vale', 'Ejemplo en 4.275'],
      filas: [
        ['Unidad de mil (UM)', '1.000', '4 → 4.000'],
        ['Centena (C)', '100', '2 → 200'],
        ['Decena (D)', '10', '7 → 70'],
        ['Unidad (U)', '1', '5 → 5'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Descomposición',
      texto:
        'Descomponer un número es escribirlo como la suma del valor de cada cifra. Ejemplo: 4.275 = 4.000 + 200 + 70 + 5.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Si una posición tiene un 0, esa parte vale 0 y no la sumamos. Por ejemplo 3.045 = 3.000 + 0 + 40 + 5.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Descomponer 6.328',
      enunciado:
        '¿Cuánto vale cada cifra del número 6.328 según su posición?',
      pasos: [
        { explicacion: 'El 6 está en las unidades de mil → vale 6.000.' },
        { explicacion: 'El 3 está en las centenas → vale 300.' },
        { explicacion: 'El 2 está en las decenas → vale 20.' },
        { explicacion: 'El 8 está en las unidades → vale 8.' },
        { explicacion: 'Suma de control: 6.000 + 300 + 20 + 8 = 6.328 ✓' },
      ],
      resultado: '6.000 + 300 + 20 + 8 = 6.328',
    },
    {
      titulo: 'Armar un número desde su descomposición',
      enunciado: 'Sumá: 5.000 + 600 + 40 + 9.',
      pasos: [
        { explicacion: '5.000 + 600 = 5.600.' },
        { explicacion: '5.600 + 40 = 5.640.' },
        { explicacion: '5.640 + 9 = 5.649.' },
      ],
      resultado: '5.649',
    },
  ],
  erroresComunes: [
    'Confundir el 2 de 4.275 con "2" cuando en realidad vale 200 por estar en las centenas.',
    'Olvidar el 0: en 3.045 muchos escriben "3.045 = 3.000 + 45" y se saltean la centena vacía.',
    'Mezclar la posición: el dígito de más a la izquierda en un número de 4 cifras siempre son los miles, no las unidades.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'En el número 7.350, ¿cuánto vale el 3?',
        opciones: ['3', '30', '300', '3.000'],
        correcta: 2,
        explicacion:
          'El 3 está en la posición de las centenas, por eso vale 3 × 100 = 300.',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Qué número se forma con 8.000 + 400 + 20 + 6?',
        respuesta: 8426,
        explicacion: '8.000 + 400 = 8.400. 8.400 + 20 = 8.420. 8.420 + 6 = 8.426.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En 2.058, el 0 vale 0 y por eso no se nombra.',
        correcta: true,
        explicacion:
          'Correcto. El 0 ocupa la posición de las centenas, pero su valor es 0 y por eso "dos mil cincuenta y ocho" no menciona ninguna centena.',
      },
    ],
  },
  relacionados: ['numeros-hasta-10000', 'comparacion-numeros'],
  tags: ['valor posicional', 'descomposicion', 'unidades', 'decenas', 'centenas', 'miles'],
};
