import type { Tema } from '../tipos';

export const PROPIEDADES_POTENCIAS: Tema = {
  slug: 'propiedades-potencias',
  titulo: 'Propiedades de las potencias',
  anios: ['primaria-7'],
  area: 'numeros-y-operaciones',
  nivel: 'intermedio',
  resumen:
    'Reglas para multiplicar, dividir y elevar potencias sin tener que desarrollarlas. Sumar exponentes, restar exponentes, potencia de potencia.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Producto de potencias de igual base',
      texto: 'Cuando multiplicás potencias con la misma base, sumás los exponentes.',
    },
    {
      tipo: 'latex',
      latex: 'a^m \\times a^n = a^{m + n}',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Cociente de potencias de igual base',
      texto: 'Cuando dividís potencias con la misma base, restás los exponentes.',
    },
    {
      tipo: 'latex',
      latex: 'a^m \\div a^n = a^{m - n}',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Potencia de una potencia',
      texto: 'Cuando una potencia está elevada a otra potencia, multiplicás los exponentes.',
    },
    {
      tipo: 'latex',
      latex: '(a^m)^n = a^{m \\times n}',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'Estas reglas valen SOLO si la base es la misma. $2^3 \\times 3^2$ no se puede simplificar así.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Producto',
      enunciado: 'Calculá $2^3 \\times 2^4$.',
      pasos: [
        { explicacion: 'Misma base 2. Sumamos exponentes: 3 + 4 = 7.' },
        { explicacion: 'Resultado: $2^7 = 128$.' },
      ],
      resultado: '$2^7 = 128$.',
    },
    {
      titulo: 'Cociente',
      enunciado: 'Calculá $5^6 \\div 5^4$.',
      pasos: [
        { explicacion: 'Misma base 5. Restamos exponentes: 6 - 4 = 2.' },
        { explicacion: 'Resultado: $5^2 = 25$.' },
      ],
      resultado: '$5^2 = 25$.',
    },
    {
      titulo: 'Potencia de potencia',
      enunciado: 'Calculá $(3^2)^3$.',
      pasos: [
        { explicacion: 'Multiplicamos exponentes: 2 × 3 = 6.' },
        { explicacion: '$3^6 = 729$.' },
      ],
      resultado: '729.',
    },
  ],
  erroresComunes: [
    'Sumar exponentes cuando las bases son distintas.',
    'Multiplicar exponentes en producto en vez de sumar.',
    'Confundir $(a^m)^n$ con $a^{m+n}$.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Simplificá $4^2 \\times 4^3$.',
        opciones: ['$4^5$', '$4^6$', '$8^5$', '$16^5$'],
        correcta: 0,
        explicacion: 'Misma base, sumamos exponentes: $4^{2+3} = 4^5$.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Simplificá $(5^2)^3$.',
        opciones: ['$5^5$', '$5^6$', '$25^3$', '$10^3$'],
        correcta: 1,
        explicacion: 'Multiplicamos exponentes: $5^{2 \\times 3} = 5^6$.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Calculá $10^5 \\div 10^3$.',
        respuesta: 100,
        explicacion: '$10^{5-3} = 10^2 = 100$.',
      },
    ],
  },
  visualizadorId: 'potencia-cubo',
  relacionados: ['potencias-naturales', 'notacion-cientifica-intro'],
  tags: ['potencias', 'propiedades', 'exponentes'],
};
