import type { Tema } from '../tipos';

export const MULTIPLOS_DIVISORES: Tema = {
  slug: 'multiplos-divisores',
  titulo: 'Múltiplos y divisores',
  anios: ['primaria-5'],
  area: 'numeros-y-operaciones',
  nivel: 'intermedio',
  resumen:
    'Qué es un múltiplo, qué es un divisor y cómo encontrarlos para un número.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Múltiplo',
      texto:
        'Un múltiplo de un número se obtiene multiplicándolo por un número natural. Los múltiplos de 4 son: 4, 8, 12, 16, 20, 24… (y siguen para siempre).',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Divisor',
      texto:
        'Un divisor de un número es otro que entra exacto en él (división con resto 0). Los divisores de 12 son: 1, 2, 3, 4, 6 y 12.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Cada número tiene infinitos múltiplos pero pocos divisores. Si $a$ es múltiplo de $b$, entonces $b$ es divisor de $a$.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Para encontrar todos los divisores de un número, probá dividirlo por 1, 2, 3, 4… hasta el mismo número. Los que dan resto 0 son divisores.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Encontrar múltiplos',
      enunciado: 'Escribí los primeros 5 múltiplos de 7.',
      pasos: [
        { explicacion: 'Multiplicamos 7 por 1, 2, 3, 4 y 5.' },
        { explicacion: '7 × 1 = 7. 7 × 2 = 14. 7 × 3 = 21. 7 × 4 = 28. 7 × 5 = 35.' },
      ],
      resultado: '7, 14, 21, 28, 35.',
    },
    {
      titulo: 'Encontrar divisores',
      enunciado: 'Encontrá todos los divisores de 18.',
      pasos: [
        { explicacion: 'Probamos cada número desde 1: 18÷1=18 ✓.' },
        { explicacion: '18÷2=9 ✓. 18÷3=6 ✓. 18÷4 da resto. 18÷5 da resto.' },
        { explicacion: '18÷6=3 ✓. 18÷9=2 ✓. 18÷18=1 ✓.' },
      ],
      resultado: 'Los divisores de 18 son: 1, 2, 3, 6, 9, 18.',
    },
  ],
  erroresComunes: [
    'Confundir múltiplo con divisor. Pista: el múltiplo se hace multiplicando; el divisor entra dividiendo.',
    'Olvidarse del 1 y del propio número en la lista de divisores.',
    'Pensar que los múltiplos terminan en algún lugar. Son infinitos.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál de estos NO es múltiplo de 6?',
        opciones: ['12', '24', '32', '36'],
        correcta: 2,
        explicacion: '32 ÷ 6 = 5 con resto 2. No es múltiplo de 6.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuál de estos números tiene exactamente 3 divisores?',
        opciones: ['4', '6', '9', '12'],
        correcta: 2,
        explicacion: 'Divisores de 9: 1, 3, 9 (tres). Los otros tienen más.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El número 1 es divisor de todos los números.',
        correcta: true,
        explicacion: 'Cierto. Cualquier número dividido por 1 da exacto.',
      },
    ],
  },
  relacionados: ['divisibilidad'],
  tags: ['multiplos', 'divisores', 'divisibilidad'],
};
