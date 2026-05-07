import type { Tema } from '../tipos';

export const MONOMIOS: Tema = {
  slug: 'monomios',
  titulo: 'Monomios y operaciones',
  anios: ['secundaria-2'],
  area: 'algebra',
  nivel: 'intermedio',
  resumen:
    'Un monomio es una expresión con coeficiente y parte literal. Suma, resta, multiplicación y división de monomios.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Monomio',
      texto:
        'Un monomio es una expresión del tipo $a x^n$, donde $a$ es el coeficiente y $x^n$ la parte literal. Ejemplos: $5x^2$, $-3xy$, $\\tfrac{1}{2}a^3$.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Operación', 'Resultado'],
      filas: [
        ['Suma/resta de semejantes', 'Suman/restan coeficientes; misma parte literal.'],
        ['Multiplicación', 'Multiplican coeficientes; suman exponentes.'],
        ['División', 'Dividen coeficientes; restan exponentes.'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Multiplicación',
      enunciado: 'Calculá $3x^2 \\times 4x^5$.',
      pasos: [
        { explicacion: 'Coeficientes: 3 × 4 = 12.' },
        { explicacion: 'Exponentes: 2 + 5 = 7.' },
      ],
      resultado: '$12x^7$.',
    },
    {
      titulo: 'División',
      enunciado: 'Calculá $\\dfrac{15x^7}{5x^2}$.',
      pasos: [
        { explicacion: 'Coeficientes: 15 ÷ 5 = 3.' },
        { explicacion: 'Exponentes: 7 - 2 = 5.' },
      ],
      resultado: '$3x^5$.',
    },
  ],
  erroresComunes: [
    'Sumar/restar monomios no semejantes.',
    'Multiplicar exponentes en vez de sumarlos.',
    'Olvidar la regla de signos.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Simplificá: $5x^3 + 3x^3$.',
        opciones: ['$8x^6$', '$8x^3$', '$15x^3$', '$15x^6$'],
        correcta: 1,
        explicacion: 'Semejantes, sumamos coeficientes: 8x³.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Simplificá: $2x^4 \\times (-3x^5)$.',
        opciones: ['$-6x^{20}$', '$-6x^9$', '$-x^9$', '$6x^9$'],
        correcta: 1,
        explicacion: 'Coef -6, exp 9.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Podés sumar $3x^2$ y $5x$.',
        correcta: false,
        explicacion: 'Falso, no son semejantes.',
      },
    ],
  },
  relacionados: ['lenguaje-algebraico-avanzado', 'propiedades-potencias'],
  tags: ['monomios', 'algebra', 'operaciones'],
};
