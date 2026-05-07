import type { Tema } from '../tipos';

export const POTENCIAS_NATURALES: Tema = {
  slug: 'potencias-naturales',
  titulo: 'Potencias de exponente natural',
  anios: ['primaria-7'],
  area: 'numeros-y-operaciones',
  nivel: 'intro',
  resumen:
    'Una potencia es una multiplicación abreviada: la base se multiplica por sí misma tantas veces como indique el exponente.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Potencia',
      texto:
        '$a^n$ significa multiplicar $a$ por sí mismo $n$ veces. $a$ se llama base y $n$ exponente.',
    },
    {
      tipo: 'latex',
      latex: 'a^n = \\underbrace{a \\times a \\times a \\times \\cdots \\times a}_{n \\text{ veces}}',
      display: true,
    },
    {
      tipo: 'tabla',
      encabezados: ['Notación', 'Significado', 'Resultado'],
      filas: [
        ['$5^2$', '5 × 5', '25 (cinco al cuadrado)'],
        ['$2^3$', '2 × 2 × 2', '8 (dos al cubo)'],
        ['$10^4$', '10 × 10 × 10 × 10', '10.000'],
        ['$3^1$', '3', '3'],
        ['$7^0$', '(siempre 1)', '1'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        '$a^0 = 1$ para cualquier $a \\neq 0$ (se ve raro pero hay una explicación matemática). Y $a^1 = a$ siempre.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Potencia',
      latex: 'a^n',
      variables: [
        { simbolo: 'a', nombre: 'base', desc: 'número que se multiplica' },
        { simbolo: 'n', nombre: 'exponente', desc: 'cuántas veces se multiplica' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Cuadrado',
      enunciado: 'Calculá $9^2$.',
      pasos: [{ explicacion: '$9^2 = 9 \\times 9 = 81$.' }],
      resultado: '81.',
    },
    {
      titulo: 'Cubo',
      enunciado: 'Calculá $4^3$.',
      pasos: [
        { explicacion: '$4^3 = 4 \\times 4 \\times 4$.' },
        { explicacion: '$= 16 \\times 4 = 64$.' },
      ],
      resultado: '64.',
    },
    {
      titulo: 'Casos especiales',
      enunciado: 'Calculá $5^0$ y $5^1$.',
      pasos: [
        { explicacion: 'Cualquier número (no nulo) elevado a 0 da 1: $5^0 = 1$.' },
        { explicacion: 'Cualquier número elevado a 1 da el mismo número: $5^1 = 5$.' },
      ],
      resultado: '1 y 5.',
    },
  ],
  erroresComunes: [
    'Confundir $5^2$ con $5 \\times 2$. La potencia multiplica la base por sí misma, no por el exponente.',
    'Olvidar que $a^0 = 1$.',
    'Pensar que el exponente es la cantidad de veces que aparece el signo de multiplicación (en realidad, $5^3$ tiene 3 cincos pero solo 2 multiplicaciones).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Calculá $6^2$.',
        respuesta: 36,
        explicacion: '6 × 6 = 36.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Calculá $2^5$.',
        respuesta: 32,
        explicacion: '2×2×2×2×2 = 32.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuál de estos es VERDADERO?',
        opciones: ['$3^2 = 6$', '$3^2 = 9$', '$3^2 = 3 \\times 2$', '$3^2 = 3 + 3$'],
        correcta: 1,
        explicacion: '3² = 3 × 3 = 9.',
      },
    ],
  },
  visualizadorId: 'potencia-cubo',
  relacionados: ['raices-cuadradas', 'notacion-cientifica-intro'],
  tags: ['potencias', 'exponentes', 'cuadrado', 'cubo'],
};
