import type { Tema } from '../tipos';

export const RESTA_CON_PRESTAMOS: Tema = {
  slug: 'resta-con-prestamos',
  titulo: 'Resta con préstamos',
  anios: ['primaria-4'],
  area: 'numeros-y-operaciones',
  nivel: 'intro',
  resumen:
    'Cómo restar cuando una cifra de arriba es menor que la de abajo y hay que "pedir prestado" a la columna siguiente.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'A veces, al restar columna por columna, la cifra de arriba es más chica que la de abajo. Por ejemplo, en $52 - 27$, en las unidades tendríamos $2 - 7$, que no se puede hacer en este nivel. Para resolverlo, le pedimos prestado a la columna de la izquierda.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Pedir prestado',
      texto:
        'Pedir prestado significa transformar 1 unidad de la columna de la izquierda en 10 unidades de la columna actual. Si la decena de arriba era 5, ahora es 4, y las unidades pasaron de 2 a 12.',
    },
    {
      tipo: 'parrafo',
      texto: 'Pasos para restar con préstamos:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Encolumnar los números alineando las unidades.',
        'Empezar por las unidades. Si la de arriba es menor, pedirle prestado 1 a las decenas.',
        'Restar la columna actual.',
        'Pasar a la siguiente columna recordando que si pediste prestado, la de arriba bajó en 1.',
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Resta con un préstamo',
      enunciado: 'Calculá $52 - 27$.',
      pasos: [
        { explicacion: 'Unidades: 2 - 7 no se puede.' },
        { explicacion: 'Le pedimos prestado a las decenas: el 5 baja a 4 y el 2 se transforma en 12.' },
        { explicacion: 'Ahora restamos las unidades: 12 - 7 = 5.' },
        { explicacion: 'Decenas: 4 - 2 = 2.' },
      ],
      resultado: '25',
    },
    {
      titulo: 'Resta con préstamo en cadena',
      enunciado: 'Calculá $300 - 178$.',
      pasos: [
        { explicacion: 'Unidades: 0 - 8 no se puede.' },
        {
          explicacion:
            'Las decenas también son 0, así que tenemos que pedirle a las centenas. El 3 baja a 2, y entregan 10 decenas.',
        },
        {
          explicacion:
            'Ahora la decena le presta 1 a las unidades: las decenas quedan en 9 y las unidades en 10.',
        },
        { explicacion: 'Unidades: 10 - 8 = 2.' },
        { explicacion: 'Decenas: 9 - 7 = 2.' },
        { explicacion: 'Centenas: 2 - 1 = 1.' },
      ],
      resultado: '122',
    },
  ],
  erroresComunes: [
    'Hacer "el de abajo menos el de arriba" cuando la de arriba es menor (por ejemplo, escribir 5 cuando es 2 - 7). En las restas no se puede invertir.',
    'Olvidar bajar en 1 la cifra a la que le pedimos prestado.',
    'Pedir prestado y no transformar la unidad en 10 (queda como un 1 cualquiera).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Calculá: 83 - 49 = ?',
        respuesta: 34,
        explicacion:
          '3-9 no se puede, pedimos prestado. 13-9=4. La decena pasa de 8 a 7. 7-4=3. Resultado: 34.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Calculá: 1.000 - 1 = ?',
        respuesta: 999,
        explicacion:
          'Pedir prestado en cadena: las unidades, decenas y centenas suben a 9 cada una y la unidad de mil pasa de 1 a 0. Resultado: 999.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Cuando una cifra de arriba es menor, podemos invertir y hacer "abajo menos arriba".',
        correcta: false,
        explicacion:
          'No se puede. La forma correcta es pedir prestado a la columna de la izquierda.',
      },
    ],
  },
  relacionados: ['suma-con-llevadas', 'valor-posicional'],
  tags: ['resta', 'prestamos', 'cuentas verticales', 'algoritmo'],
};
