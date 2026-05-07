import type { Tema } from '../tipos';

export const ENTEROS_SUMA_RESTA: Tema = {
  slug: 'enteros-suma-resta',
  titulo: 'Suma y resta de enteros',
  anios: ['primaria-6'],
  area: 'numeros-y-operaciones',
  nivel: 'intermedio',
  resumen:
    'Cómo sumar y restar números enteros usando la recta numérica y las reglas de los signos.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Sumar un número positivo es ir a la derecha en la recta. Sumar un negativo (o restar) es ir a la izquierda.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Reglas de la suma',
      texto:
        'Mismo signo: sumás y conservás el signo. Distinto signo: restás (el grande menos el chico) y queda con el signo del más grande.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Operación', 'Resultado'],
      filas: [
        ['(+5) + (+3)', '+8 (mismo signo, suma)'],
        ['(-5) + (-3)', '-8 (mismo signo, suma con negativo)'],
        ['(+5) + (-3)', '+2 (distinto signo, gana el más grande)'],
        ['(-5) + (+3)', '-2 (distinto signo, gana el más grande negativo)'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Restar es sumar el opuesto',
      texto:
        'Restar un número es lo mismo que sumar el opuesto: $a - b = a + (-b)$. Esto evita aprender una regla distinta para la resta.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Suma con distinto signo',
      enunciado: 'Calculá $(-7) + (+10)$.',
      pasos: [
        { explicacion: 'Distinto signo: restamos el grande menos el chico (10 - 7 = 3).' },
        { explicacion: 'El más grande es 10 (positivo) → resultado positivo.' },
      ],
      resultado: '+3',
    },
    {
      titulo: 'Restar con regla del opuesto',
      enunciado: 'Calculá $5 - (-3)$.',
      pasos: [
        { explicacion: 'Restar -3 = sumar +3.' },
        { explicacion: '$5 + 3 = 8$.' },
      ],
      resultado: '8',
    },
    {
      titulo: 'Suma de negativos',
      enunciado: 'Calculá $(-4) + (-9)$.',
      pasos: [
        { explicacion: 'Mismo signo: sumamos como positivos y conservamos el signo.' },
        { explicacion: '$4 + 9 = 13$. Como ambos eran negativos, queda $-13$.' },
      ],
      resultado: '-13',
    },
  ],
  erroresComunes: [
    'Sumar los signos como si fueran números: "$+ \\times - = -$" no es una suma, es una multiplicación.',
    'Olvidar que restar un negativo equivale a sumar.',
    'Confundir el signo del resultado cuando los números tienen signos distintos.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Calculá: (-6) + (+4) = ?',
        respuesta: -2,
        explicacion: 'Distinto signo, restamos: 6 - 4 = 2. Gana el negativo (-6 es más grande): -2.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Calculá: 8 - (-3) = ?',
        respuesta: 11,
        explicacion: '8 - (-3) = 8 + 3 = 11.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Calculá: (-5) + (-7) = ?',
        respuesta: -12,
        explicacion: 'Mismo signo, sumamos y conservamos: 5+7=12. Resultado: -12.',
      },
    ],
  },
  visualizadorId: 'recta-numerica',
  relacionados: ['numeros-enteros-introduccion'],
  tags: ['enteros', 'suma', 'resta', 'signos', 'opuesto'],
};
