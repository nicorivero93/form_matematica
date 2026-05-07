import type { Tema } from '../tipos';

export const DIVISORES_PRIMOS: Tema = {
  slug: 'divisores-primos',
  titulo: 'Números primos y compuestos',
  anios: ['primaria-7'],
  area: 'numeros-y-operaciones',
  nivel: 'intermedio',
  resumen:
    'Un número primo solo se divide por 1 y por sí mismo. Cómo identificarlos y descomponer un número en factores primos.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Primo',
      texto:
        'Un número primo es uno mayor que 1 que solo tiene dos divisores: el 1 y él mismo. Ejemplos: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Compuesto',
      texto:
        'Un número compuesto tiene más de dos divisores. Ejemplos: 4 (1, 2, 4), 6 (1, 2, 3, 6), 8, 9, 10, 12...',
    },
    {
      tipo: 'parrafo',
      texto:
        'El 1 no es ni primo ni compuesto (es la unidad). El 2 es el único primo par.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Descomposición en factores primos',
      texto:
        'Cualquier número compuesto se puede escribir como producto de números primos de forma única. Por ejemplo: 12 = 2 × 2 × 3 = $2^2 \\times 3$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar primo',
      enunciado: '¿Es 17 un número primo?',
      pasos: [
        { explicacion: 'Probamos dividirlo por 2, 3, 4 (hasta √17 ≈ 4,1).' },
        { explicacion: 'No es divisible por 2, 3 ni 4.' },
        { explicacion: 'Sí, es primo.' },
      ],
      resultado: 'Sí.',
    },
    {
      titulo: 'Descomponer 60',
      enunciado: 'Descomponé 60 en factores primos.',
      pasos: [
        { explicacion: '60 ÷ 2 = 30.' },
        { explicacion: '30 ÷ 2 = 15.' },
        { explicacion: '15 ÷ 3 = 5.' },
        { explicacion: '5 ÷ 5 = 1.' },
      ],
      resultado: '$60 = 2^2 \\times 3 \\times 5$.',
    },
  ],
  erroresComunes: [
    'Olvidar que el 1 no es primo.',
    'Decir que 9 es primo (9 = 3 × 3).',
    'Pensar que todos los impares son primos (15 no es primo).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál de estos NO es primo?',
        opciones: ['11', '13', '15', '17'],
        correcta: 2,
        explicacion: '15 = 3 × 5.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es la descomposición prima de 24?',
        opciones: ['$2^2 \\times 6$', '$2^3 \\times 3$', '$2 \\times 12$', '$3 \\times 8$'],
        correcta: 1,
        explicacion: '24 = 2 × 2 × 2 × 3 = $2^3 \\times 3$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El 2 es el único número primo par.',
        correcta: true,
        explicacion: 'Cierto. Cualquier otro par sería divisible por 2.',
      },
    ],
  },
  relacionados: ['multiplos-divisores', 'mcm-mcd'],
  tags: ['primos', 'compuestos', 'factorizar', 'divisores'],
};
