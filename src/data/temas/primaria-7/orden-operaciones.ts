import type { Tema } from '../tipos';

export const ORDEN_OPERACIONES: Tema = {
  slug: 'orden-operaciones',
  titulo: 'Orden de las operaciones',
  anios: ['primaria-7'],
  area: 'numeros-y-operaciones',
  nivel: 'intermedio',
  resumen:
    'Cuando una expresión tiene varias operaciones, hay un orden estricto: paréntesis, potencias, multiplicaciones/divisiones, sumas/restas.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Jerarquía',
      texto:
        '1) Paréntesis primero. 2) Potencias y raíces. 3) Multiplicaciones y divisiones (de izquierda a derecha). 4) Sumas y restas (de izquierda a derecha).',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Mnemotecnia: PEMDAS',
      texto:
        'Paréntesis - Exponentes - Multiplicación/División - Adición/Sustracción.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Si no se respeta el orden, podés llegar a un resultado completamente distinto. Las calculadoras científicas y los lenguajes de programación siguen estas reglas.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Combinada simple',
      enunciado: 'Calculá $3 + 4 \\times 2$.',
      pasos: [
        { explicacion: 'Multiplicación primero: $4 \\times 2 = 8$.' },
        { explicacion: 'Después suma: $3 + 8 = 11$.' },
      ],
      resultado: '11.',
    },
    {
      titulo: 'Con paréntesis',
      enunciado: 'Calculá $(3 + 4) \\times 2$.',
      pasos: [
        { explicacion: 'Paréntesis primero: $3 + 4 = 7$.' },
        { explicacion: 'Después multiplicación: $7 \\times 2 = 14$.' },
      ],
      resultado: '14.',
    },
    {
      titulo: 'Con potencia',
      enunciado: 'Calculá $5 + 3^2 \\times 2$.',
      pasos: [
        { explicacion: 'Potencia primero: $3^2 = 9$.' },
        { explicacion: 'Después multiplicación: $9 \\times 2 = 18$.' },
        { explicacion: 'Por último suma: $5 + 18 = 23$.' },
      ],
      resultado: '23.',
    },
  ],
  erroresComunes: [
    'Sumar antes de multiplicar.',
    'Saltar paréntesis e ir directo a la potencia.',
    'Hacer divisiones después de multiplicaciones (en realidad están en la misma jerarquía, se hacen de izquierda a derecha).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Calculá $2 + 3 \\times 4$.',
        respuesta: 14,
        explicacion: '3×4=12, después 2+12 = 14.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Calculá $(5 + 3) \\times 2 - 4$.',
        respuesta: 12,
        explicacion: 'Paréntesis: 8. Mult: 16. Resta: 12.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Calculá $10 - 2^3 + 4$.',
        respuesta: 6,
        explicacion: 'Potencia: 8. Resta: 10-8=2. Suma: 2+4=6.',
      },
    ],
  },
  relacionados: ['lenguaje-algebraico', 'potencias-naturales'],
  tags: ['orden', 'jerarquia', 'pemdas', 'parentesis'],
};
