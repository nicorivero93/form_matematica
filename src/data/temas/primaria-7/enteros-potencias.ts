import type { Tema } from '../tipos';

export const ENTEROS_POTENCIAS: Tema = {
  slug: 'enteros-potencias',
  titulo: 'Potencias de números enteros',
  anios: ['primaria-7'],
  area: 'numeros-y-operaciones',
  nivel: 'intermedio',
  resumen:
    'Qué pasa cuando elevás un número negativo a una potencia. Resultado positivo si el exponente es par, negativo si es impar.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Regla',
      texto:
        'Una potencia de exponente par con base negativa da resultado positivo. Una potencia de exponente impar con base negativa da resultado negativo.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Operación', 'Cálculo', 'Resultado'],
      filas: [
        ['$(-3)^2$', '$(-3) \\times (-3)$', '+9'],
        ['$(-3)^3$', '$(-3) \\times (-3) \\times (-3)$', '-27'],
        ['$(-2)^4$', '+16', '+'],
        ['$(-2)^5$', '-32', '-'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        '$-3^2$ y $(-3)^2$ no son lo mismo. El primero es $-(3^2) = -9$, el segundo es $(-3)(-3) = +9$. Los paréntesis cambian todo.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Exponente par',
      enunciado: 'Calculá $(-5)^2$.',
      pasos: [
        { explicacion: '(-5) × (-5).' },
        { explicacion: 'Negativo por negativo = positivo: 25.' },
      ],
      resultado: '+25.',
    },
    {
      titulo: 'Exponente impar',
      enunciado: 'Calculá $(-2)^3$.',
      pasos: [
        { explicacion: '(-2) × (-2) × (-2).' },
        { explicacion: 'Primeros dos: +4. × (-2): -8.' },
      ],
      resultado: '-8.',
    },
    {
      titulo: 'Diferencia con/sin paréntesis',
      enunciado: '¿Cuál es la diferencia entre $-4^2$ y $(-4)^2$?',
      pasos: [
        { explicacion: '$-4^2 = -(4^2) = -16$.' },
        { explicacion: '$(-4)^2 = (-4) \\times (-4) = +16$.' },
      ],
      resultado: 'Diferencia de signo y de 32 unidades.',
    },
  ],
  erroresComunes: [
    'Pensar que toda potencia negativa da negativo.',
    'Ignorar los paréntesis en $-3^2$.',
    'Confundir el signo del resultado.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Calculá $(-4)^2$ (con signo).',
        respuesta: 16,
        explicacion: '(-4)(-4) = +16.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Calculá $(-2)^4$.',
        respuesta: 16,
        explicacion: 'Exponente par → +16.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Calculá $(-3)^3$.',
        respuesta: -27,
        explicacion: 'Exponente impar → -27.',
      },
    ],
  },
  visualizadorId: 'potencia-cubo',
  relacionados: ['potencias-naturales', 'enteros-multiplicacion'],
  tags: ['enteros', 'potencias', 'signos', 'exponente par'],
};
