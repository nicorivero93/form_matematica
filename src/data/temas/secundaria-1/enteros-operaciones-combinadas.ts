import type { Tema } from '../tipos';

export const ENTEROS_OPERACIONES_COMBINADAS: Tema = {
  slug: 'enteros-operaciones-combinadas',
  titulo: 'Operaciones combinadas con enteros',
  anios: ['secundaria-1'],
  area: 'numeros-y-operaciones',
  nivel: 'intermedio',
  resumen:
    'Resolver expresiones que combinan suma, resta, multiplicación, división y potencias con enteros. Cuidado con los signos y el orden.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Las operaciones con enteros se combinan respetando el mismo orden que con naturales: paréntesis primero, después potencias, después multiplicación/división, finalmente suma/resta.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Estrategia',
      texto:
        '1) Resolver paréntesis interiores primero. 2) Aplicar regla de signos en multiplicación/división. 3) Cuidar la posición de los menos. 4) Verificar al final.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Combinada con potencia',
      enunciado: 'Calculá $(-2)^3 + 5 \\times (-3)$.',
      pasos: [
        { explicacion: '$(-2)^3 = -8$ (impar → negativo).' },
        { explicacion: '$5 \\times (-3) = -15$.' },
        { explicacion: '$-8 + (-15) = -23$.' },
      ],
      resultado: '-23.',
    },
    {
      titulo: 'Con paréntesis y división',
      enunciado: 'Calculá $-12 \\div (-3) - (-4)$.',
      pasos: [
        { explicacion: '$-12 \\div (-3) = +4$.' },
        { explicacion: '$- (-4) = +4$.' },
        { explicacion: '$4 + 4 = 8$.' },
      ],
      resultado: '+8.',
    },
  ],
  erroresComunes: [
    'Confundir orden de operaciones cuando hay negativos.',
    'Olvidar la regla de signos en potencias.',
    'No respetar paréntesis anidados.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Calculá: $(-3)^2 - 2 \\times (-5)$.',
        respuesta: 19,
        explicacion: '9 + 10 = 19.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Calculá: $-10 + 4 \\times (-3) \\div 2$.',
        respuesta: -16,
        explicacion: '$-10 + (-12 ÷ 2) = -10 - 6 = -16$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$-(-5) = 5$.',
        correcta: true,
        explicacion: 'El opuesto del opuesto es el original.',
      },
    ],
  },
  relacionados: ['enteros-suma-resta', 'enteros-multiplicacion', 'orden-operaciones'],
  tags: ['enteros', 'operaciones combinadas', 'orden', 'signos'],
};
