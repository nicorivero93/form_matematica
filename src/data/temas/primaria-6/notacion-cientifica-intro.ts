import type { Tema } from '../tipos';

export const NOTACION_CIENTIFICA_INTRO: Tema = {
  slug: 'notacion-cientifica-intro',
  titulo: 'Potencias de 10 y notación abreviada',
  anios: ['primaria-6'],
  area: 'numeros-y-operaciones',
  nivel: 'intermedio',
  resumen:
    'Cómo escribir números muy grandes (millones, miles de millones) usando potencias de 10 como introducción a la notación científica.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Potencias de 10',
      texto:
        'Una potencia de 10 es un 1 seguido de ceros. $10^n$ significa "1 seguido de n ceros".',
    },
    {
      tipo: 'tabla',
      encabezados: ['Potencia', 'Valor', 'Nombre'],
      filas: [
        ['$10^1$', '10', 'Diez'],
        ['$10^2$', '100', 'Cien'],
        ['$10^3$', '1.000', 'Mil'],
        ['$10^4$', '10.000', 'Diez mil'],
        ['$10^5$', '100.000', 'Cien mil'],
        ['$10^6$', '1.000.000', 'Un millón'],
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Esto sirve para escribir números muy grandes de forma corta. Por ejemplo, "5 millones" se puede escribir como $5 \\times 10^6$.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'El exponente coincide con la cantidad de ceros (cuando se trata de potencias de 10). $10^4 = 10.000$, 4 ceros.',
    },
  ],
  ejemplos: [
    {
      titulo: 'De potencia a número',
      enunciado: 'Escribí $3 \\times 10^4$ como número común.',
      pasos: [
        { explicacion: '$10^4 = 10.000$.' },
        { explicacion: '$3 \\times 10.000 = 30.000$.' },
      ],
      resultado: '30.000',
    },
    {
      titulo: 'De número a potencia de 10',
      enunciado: 'Escribí 8.000.000 usando una potencia de 10.',
      pasos: [
        { explicacion: '8.000.000 = 8 × 1.000.000.' },
        { explicacion: '1.000.000 = $10^6$.' },
      ],
      resultado: '$8 \\times 10^6$',
    },
    {
      titulo: 'Multiplicar potencias',
      enunciado: 'Calculá $10^3 \\times 10^2$.',
      pasos: [
        { explicacion: '$10^3 = 1.000$, $10^2 = 100$.' },
        { explicacion: '1.000 × 100 = 100.000 = $10^5$.' },
        { explicacion: 'Patrón: cuando multiplicás potencias de 10, sumás los exponentes.' },
      ],
      resultado: '$10^5 = 100.000$.',
    },
  ],
  erroresComunes: [
    'Confundir $10^3$ con $10 \\times 3$. La potencia es multiplicar 10 por sí mismo 3 veces (1.000), no 30.',
    'Sumar exponentes cuando se suman números (no es lo mismo que multiplicar).',
    'Olvidar que $10^0 = 1$ (cualquier número distinto de 0 elevado a 0 vale 1).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuánto vale $10^3$?',
        respuesta: 1000,
        explicacion: '1 con 3 ceros: 1.000.',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Cuánto vale $5 \\times 10^4$?',
        respuesta: 50000,
        explicacion: '$10^4 = 10.000$. 5 × 10.000 = 50.000.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cómo se escribe 600.000 usando potencia de 10?',
        opciones: ['$6 \\times 10^4$', '$6 \\times 10^5$', '$6 \\times 10^6$', '$60 \\times 10^4$'],
        correcta: 1,
        explicacion: '600.000 = 6 × 100.000 = 6 × $10^5$.',
      },
    ],
  },
  relacionados: ['numeros-hasta-1000000', 'valor-posicional-ampliado'],
  tags: ['potencias', 'notacion cientifica', 'numeros grandes', 'exponentes'],
};
