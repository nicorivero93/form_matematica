import type { Tema } from '../tipos';

export const PORCENTAJE: Tema = {
  slug: 'porcentaje',
  titulo: 'Porcentaje',
  anios: ['primaria-6'],
  area: 'fracciones-decimales',
  nivel: 'intermedio',
  resumen:
    'El porcentaje es una forma especial de fracción con denominador 100. Cómo calcular el X% de una cantidad.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Porcentaje',
      texto:
        'X% significa "X de cada 100". Es lo mismo que la fracción $\\tfrac{X}{100}$ o el decimal $X \\div 100$.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Porcentaje', 'Fracción', 'Decimal'],
      filas: [
        ['10%', '$\\tfrac{10}{100} = \\tfrac{1}{10}$', '0,1'],
        ['25%', '$\\tfrac{1}{4}$', '0,25'],
        ['50%', '$\\tfrac{1}{2}$', '0,5'],
        ['75%', '$\\tfrac{3}{4}$', '0,75'],
        ['100%', '1', '1'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Cómo calcular X% de una cantidad',
      texto:
        '$X\\%$ de $N$ = $\\dfrac{X \\times N}{100}$. O dividís N por 100 y multiplicás por X. Lo que sea más fácil.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Trucos: 10% es dividir por 10. 50% es la mitad. 25% es la mitad de la mitad. Y 1% es dividir por 100.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Porcentaje de una cantidad',
      latex: 'X\\% \\text{ de } N = \\dfrac{X \\times N}{100}',
      variables: [
        { simbolo: 'X', nombre: 'porcentaje', desc: 'el número antes del %' },
        { simbolo: 'N', nombre: 'cantidad', desc: 'sobre la que se calcula' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: '10% de una cantidad',
      enunciado: 'Calculá el 10% de 250.',
      pasos: [
        { explicacion: '10% es lo mismo que dividir por 10.' },
        { explicacion: '250 ÷ 10 = 25.' },
      ],
      resultado: '25.',
    },
    {
      titulo: 'Porcentaje no redondo',
      enunciado: 'Calculá el 35% de 80.',
      pasos: [
        { explicacion: 'Aplicamos $\\dfrac{35 \\times 80}{100}$.' },
        { explicacion: '$35 \\times 80 = 2800$.' },
        { explicacion: '$2800 \\div 100 = 28$.' },
      ],
      resultado: '28.',
    },
    {
      titulo: 'Descuento',
      enunciado:
        'Una remera cuesta $4.000 y tiene 20% de descuento. ¿Cuánto pagás?',
      pasos: [
        { explicacion: '20% de 4.000: $\\dfrac{20 \\times 4000}{100} = 800$.' },
        { explicacion: 'Pagás: 4.000 - 800 = 3.200.' },
      ],
      resultado: '$3.200.',
    },
  ],
  erroresComunes: [
    'Pensar que "20% de descuento" significa que pagás 20%. Es al revés: pagás 80%.',
    'Multiplicar por el porcentaje sin dividir por 100.',
    'Confundir % con decenas. 30% no es 30, es 0,30.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuál es el 50% de 150?',
        respuesta: 75,
        explicacion: '50% es la mitad: 150 ÷ 2 = 75.',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Cuál es el 25% de 80?',
        respuesta: 20,
        explicacion: '25% es la cuarta parte: 80 ÷ 4 = 20.',
      },
      {
        tipo: 'multiple',
        enunciado:
          'Una billetera de $5.000 tiene 10% de descuento. ¿Cuánto pagás?',
        opciones: ['$4.000', '$4.500', '$500', '$5.500'],
        correcta: 1,
        explicacion: '10% de 5000 = 500. Pagás 5000 - 500 = 4.500.',
      },
    ],
  },
  visualizadorId: 'barra-porcentaje',
  relacionados: ['proporcionalidad-directa', 'fracciones-decimales-conversion'],
  tags: ['porcentaje', 'descuento', 'fracciones', 'proporcion'],
};
