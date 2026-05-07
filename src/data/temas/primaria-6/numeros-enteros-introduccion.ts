import type { Tema } from '../tipos';

export const NUMEROS_ENTEROS_INTRODUCCION: Tema = {
  slug: 'numeros-enteros-introduccion',
  titulo: 'Números enteros: introducción',
  anios: ['primaria-6'],
  area: 'numeros-y-operaciones',
  nivel: 'intro',
  resumen:
    'Aparecen los números negativos. La recta se extiende hacia la izquierda del 0. Cómo se usan en la vida real.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Hasta ahora trabajamos con números naturales (0, 1, 2, 3...). Los números enteros agregan también los negativos: -1, -2, -3..., y nos sirven para representar cosas que están "por debajo de cero", como temperaturas, deudas o pisos de subsuelo.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Número entero',
      texto:
        'Un entero puede ser positivo (1, 2, 3...), negativo (-1, -2, -3...) o cero. El conjunto se llama $\\mathbb{Z}$.',
    },
    {
      tipo: 'parrafo',
      texto:
        'En la recta numérica los positivos están a la derecha del 0 y los negativos a la izquierda. Cuanto más a la izquierda, más chico es el número.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Situación', 'Entero'],
      filas: [
        ['Temperatura: 5° bajo cero', '-5'],
        ['Subsuelo 2 (planta baja = 0)', '-2'],
        ['Deuda de $300', '-300'],
        ['Ganancia de $100', '+100 o 100'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'El cero no es ni positivo ni negativo: es neutro. Y siempre va sin signo.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Comparar enteros',
      enunciado: '¿Cuál es mayor: -3 o -7?',
      pasos: [
        { explicacion: 'En la recta numérica, -3 está a la derecha de -7.' },
        { explicacion: 'A la derecha = mayor.' },
      ],
      resultado: '-3 > -7. (Ojo: con los negativos, "menos cifras" no significa "más chico".)',
    },
    {
      titulo: 'Traducir una situación',
      enunciado:
        'Un termómetro marca 4° por la mañana. Por la noche bajó 9°. ¿Qué número entero representa la temperatura nocturna?',
      pasos: [
        { explicacion: 'Empezamos en 4 y bajamos 9.' },
        { explicacion: '4 - 9 = -5.' },
      ],
      resultado: '-5° (cinco grados bajo cero).',
    },
  ],
  erroresComunes: [
    'Pensar que -10 es mayor que -2 porque "10 > 2". En negativos es al revés: -2 > -10.',
    'Olvidar que el 0 no lleva signo.',
    'Confundir el signo "menos" del negativo con el de la resta. Son distintos pero se escriben igual.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál de estos números es el mayor: -8, -2, -15, -1?',
        opciones: ['-8', '-2', '-15', '-1'],
        correcta: 3,
        explicacion: 'Cuanto más cerca del 0, mayor el número negativo. -1 es el más cercano.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'La temperatura era de 3°. Bajó 8°. ¿Qué temperatura quedó? (Ingresá el número con signo, ej: -5)',
        respuesta: -5,
        explicacion: '3 - 8 = -5°.',
        unidad: '°',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El 0 es un número positivo.',
        correcta: false,
        explicacion: 'Falso. El 0 es neutro: no es ni positivo ni negativo.',
      },
    ],
  },
  visualizadorId: 'recta-numerica',
  relacionados: ['enteros-suma-resta', 'comparacion-numeros'],
  tags: ['enteros', 'negativos', 'recta numerica', 'positivos'],
};
