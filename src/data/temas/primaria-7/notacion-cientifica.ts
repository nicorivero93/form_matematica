import type { Tema } from '../tipos';

export const NOTACION_CIENTIFICA: Tema = {
  slug: 'notacion-cientifica',
  titulo: 'Notación científica',
  anios: ['primaria-7'],
  area: 'numeros-y-operaciones',
  nivel: 'avanzado',
  resumen:
    'Forma compacta para escribir números muy grandes o muy chicos: un número entre 1 y 10 multiplicado por una potencia de 10.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Forma estándar',
      texto:
        'Un número en notación científica se escribe $a \\times 10^n$, donde $1 \\le a < 10$ y $n$ es un entero (positivo si el número es grande, negativo si es chico).',
    },
    {
      tipo: 'tabla',
      encabezados: ['Número', 'Notación científica'],
      filas: [
        ['300', '$3 \\times 10^2$'],
        ['45.000', '$4{,}5 \\times 10^4$'],
        ['1.230.000', '$1{,}23 \\times 10^6$'],
        ['0,003', '$3 \\times 10^{-3}$'],
        ['0,000125', '$1{,}25 \\times 10^{-4}$'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Cómo pasar de número a notación científica',
      texto:
        'Movés la coma hasta tener un solo dígito antes de la coma. El exponente es la cantidad de lugares que la moviste: positivo si la moviste a la izquierda, negativo si la moviste a la derecha.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Número grande',
      enunciado: 'Escribí 6.500.000 en notación científica.',
      pasos: [
        { explicacion: 'Movemos la coma para que quede 6,5 (un dígito antes).' },
        { explicacion: 'La movimos 6 lugares a la izquierda.' },
      ],
      resultado: '$6{,}5 \\times 10^6$.',
    },
    {
      titulo: 'Número muy chico',
      enunciado: 'Escribí 0,00042 en notación científica.',
      pasos: [
        { explicacion: 'Movemos la coma a la derecha hasta tener 4,2.' },
        { explicacion: 'La movimos 4 lugares a la derecha → exponente -4.' },
      ],
      resultado: '$4{,}2 \\times 10^{-4}$.',
    },
  ],
  erroresComunes: [
    'Dejar más de un dígito antes de la coma (debe ser entre 1 y 10).',
    'Confundir el signo del exponente para números chicos.',
    'Contar mal los lugares que se mueve la coma.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cómo se escribe 5.200 en notación científica?',
        opciones: [
          '$52 \\times 10^2$',
          '$5{,}2 \\times 10^3$',
          '$5{,}2 \\times 10^4$',
          '$0{,}52 \\times 10^4$',
        ],
        correcta: 1,
        explicacion: '5.200 = 5,2 × 1.000 = $5{,}2 \\times 10^3$.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuánto vale $7 \\times 10^{-3}$?',
        opciones: ['7000', '0,007', '0,7', '0,0007'],
        correcta: 1,
        explicacion: '$10^{-3} = 0{,}001$. 7 × 0,001 = 0,007.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En $a \\times 10^n$, el valor de $a$ debe estar entre 1 y 10.',
        correcta: true,
        explicacion: 'Cierto: $1 \\le a < 10$ es la convención.',
      },
    ],
  },
  relacionados: ['notacion-cientifica-intro', 'potencias-naturales', 'propiedades-potencias'],
  tags: ['notacion cientifica', 'potencias de 10', 'numeros grandes', 'numeros pequeños'],
};
