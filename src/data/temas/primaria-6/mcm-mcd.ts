import type { Tema } from '../tipos';

export const MCM_MCD: Tema = {
  slug: 'mcm-mcd',
  titulo: 'MCM y MCD',
  anios: ['primaria-6'],
  area: 'numeros-y-operaciones',
  nivel: 'intermedio',
  resumen:
    'Mínimo Común Múltiplo y Máximo Común Divisor. Cómo calcularlos y para qué sirven en la vida real.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'MCM (Mínimo Común Múltiplo)',
      texto:
        'Es el múltiplo más chico que dos o más números comparten. Útil para sumar fracciones de distinto denominador.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'MCD (Máximo Común Divisor)',
      texto:
        'Es el divisor más grande que dos o más números comparten. Útil para simplificar fracciones.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Para encontrar MCM y MCD el método clásico es:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'MCM: listar múltiplos de cada número y elegir el más chico que aparezca en ambas listas.',
        'MCD: listar divisores de cada número y elegir el más grande que aparezca en ambas listas.',
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'MCM de 4 y 6',
      enunciado: 'Encontrá el MCM de 4 y 6.',
      pasos: [
        { explicacion: 'Múltiplos de 4: 4, 8, 12, 16, 20, 24...' },
        { explicacion: 'Múltiplos de 6: 6, 12, 18, 24, 30...' },
        { explicacion: 'El más chico común: 12.' },
      ],
      resultado: 'MCM(4, 6) = 12.',
    },
    {
      titulo: 'MCD de 12 y 18',
      enunciado: 'Encontrá el MCD de 12 y 18.',
      pasos: [
        { explicacion: 'Divisores de 12: 1, 2, 3, 4, 6, 12.' },
        { explicacion: 'Divisores de 18: 1, 2, 3, 6, 9, 18.' },
        { explicacion: 'Comunes: 1, 2, 3, 6. El más grande: 6.' },
      ],
      resultado: 'MCD(12, 18) = 6.',
    },
    {
      titulo: 'Aplicación práctica',
      enunciado:
        'Hay 24 manzanas y 36 peras. Las queremos agrupar en bolsas iguales con la misma cantidad de cada fruta y sin mezclar. ¿Cuántas bolsas son la cantidad máxima posible?',
      pasos: [
        { explicacion: 'Necesitamos un número que divida a 24 y a 36 a la vez: el MCD.' },
        { explicacion: 'Divisores comunes: 1, 2, 3, 4, 6, 12. Máximo: 12.' },
      ],
      resultado: '12 bolsas (cada una con 2 manzanas y 3 peras).',
    },
  ],
  erroresComunes: [
    'Confundir MCM con MCD. Pista: el MCM siempre es ≥ que los números (es múltiplo). El MCD siempre es ≤ que los números (es divisor).',
    'Listar pocos múltiplos y no encontrar el común.',
    'Olvidar que el 1 siempre es divisor común, pero rara vez es el MCD.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuál es el MCM de 3 y 5?',
        respuesta: 15,
        explicacion: 'Múltiplos de 3: 3,6,9,12,15. Múltiplos de 5: 5,10,15. Común mínimo: 15.',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Cuál es el MCD de 8 y 20?',
        respuesta: 4,
        explicacion: 'Divisores de 8: 1,2,4,8. Divisores de 20: 1,2,4,5,10,20. Común máximo: 4.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El MCM de dos números nunca puede ser uno de los números mismos.',
        correcta: false,
        explicacion: 'Falso. MCM(4, 8) = 8: el MCM puede ser uno de los números si uno es múltiplo del otro.',
      },
    ],
  },
  relacionados: ['multiplos-divisores', 'fracciones-suma-resta-distinto-denominador'],
  tags: ['mcm', 'mcd', 'multiplos', 'divisores', 'comun'],
};
