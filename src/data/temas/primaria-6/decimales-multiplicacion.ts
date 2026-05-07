import type { Tema } from '../tipos';

export const DECIMALES_MULTIPLICACION: Tema = {
  slug: 'decimales-multiplicacion',
  titulo: 'Multiplicación de decimales',
  anios: ['primaria-6'],
  area: 'fracciones-decimales',
  nivel: 'intermedio',
  resumen:
    'Para multiplicar decimales, ignorás las comas, multiplicás como enteros y al final ponés tantos decimales como tengan los dos números juntos.',
  teoria: [
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Sacar las comas mentalmente y multiplicar como si fueran enteros.',
        'Contar cuántos decimales tienen los dos números originales SUMADOS.',
        'Poner la coma en el resultado dejando esa cantidad de decimales.',
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Regla rápida × 10, 100, 1000',
      texto:
        'Multiplicar por 10 corre la coma 1 lugar a la derecha. Por 100 → 2 lugares. Por 1000 → 3 lugares. (Si no hay cifras, agregás ceros.)',
    },
  ],
  ejemplos: [
    {
      titulo: 'Multiplicación de dos decimales',
      enunciado: 'Calculá $0{,}3 \\times 0{,}4$.',
      pasos: [
        { explicacion: 'Sacamos las comas: 3 × 4 = 12.' },
        { explicacion: '0,3 tiene 1 decimal. 0,4 tiene 1 decimal. Total: 2 decimales.' },
        { explicacion: 'Ponemos la coma: 0,12.' },
      ],
      resultado: '0,12',
    },
    {
      titulo: 'Decimal × entero',
      enunciado: 'Calculá $2{,}5 \\times 4$.',
      pasos: [
        { explicacion: 'Sin comas: 25 × 4 = 100.' },
        { explicacion: '2,5 tiene 1 decimal, 4 ninguno. Total: 1 decimal.' },
        { explicacion: 'Resultado: 10,0 = 10.' },
      ],
      resultado: '10',
    },
    {
      titulo: 'Por 100',
      enunciado: 'Calculá $0{,}075 \\times 100$.',
      pasos: [
        { explicacion: 'Multiplicar por 100 corre la coma 2 lugares a la derecha.' },
        { explicacion: '0,075 → 7,5.' },
      ],
      resultado: '7,5',
    },
  ],
  erroresComunes: [
    'Olvidar contar los decimales totales y poner la coma mal.',
    'Confundir multiplicación por 10 con suma 10.',
    'Pensar que multiplicar por algo menor a 1 da un número más grande.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Calculá: 0,5 × 0,2 = ? (escribí el decimal con coma o punto)',
        respuesta: 0.1,
        tolerancia: 0.001,
        explicacion: '5 × 2 = 10. Total decimales: 2. Resultado: 0,10 = 0,1.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Calculá: 1,25 × 4 = ?',
        respuesta: 5,
        explicacion: '125 × 4 = 500. 1,25 tiene 2 decimales → 5,00 = 5.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Calculá: 3,4 × 100 = ?',
        respuesta: 340,
        explicacion: 'La coma corre 2 lugares a la derecha: 3,4 → 340.',
      },
    ],
  },
  relacionados: ['decimales-suma-resta', 'decimales-division'],
  tags: ['decimales', 'multiplicacion', 'coma'],
};
