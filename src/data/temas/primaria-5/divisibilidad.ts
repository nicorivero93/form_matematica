import type { Tema } from '../tipos';

export const DIVISIBILIDAD: Tema = {
  slug: 'divisibilidad',
  titulo: 'Criterios de divisibilidad',
  anios: ['primaria-5'],
  area: 'numeros-y-operaciones',
  nivel: 'intermedio',
  resumen:
    'Reglas rápidas para saber si un número es divisible por 2, 3, 5, 9 o 10 sin hacer la división.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Un número es divisible por otro cuando lo podés dividir y el resto es 0. Hay reglas rápidas para algunos divisores que te evitan hacer la cuenta.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Divisor', 'Regla', 'Ejemplo'],
      filas: [
        ['2', 'Termina en 0, 2, 4, 6 u 8', '174 sí; 175 no'],
        ['3', 'La suma de sus cifras es múltiplo de 3', '171 (1+7+1=9, sí)'],
        ['5', 'Termina en 0 o 5', '95 sí; 92 no'],
        ['9', 'La suma de sus cifras es múltiplo de 9', '423 (4+2+3=9, sí)'],
        ['10', 'Termina en 0', '230 sí; 235 no'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Si un número es divisible por 9, automáticamente es divisible por 3 (porque 9 contiene a 3).',
    },
  ],
  ejemplos: [
    {
      titulo: 'Aplicar varios criterios',
      enunciado: '¿El número 540 es divisible por 2, 3, 5, 9 y 10?',
      pasos: [
        { explicacion: 'Por 2: termina en 0 → sí.' },
        { explicacion: 'Por 3: 5+4+0 = 9, múltiplo de 3 → sí.' },
        { explicacion: 'Por 5: termina en 0 → sí.' },
        { explicacion: 'Por 9: 5+4+0 = 9, múltiplo de 9 → sí.' },
        { explicacion: 'Por 10: termina en 0 → sí.' },
      ],
      resultado: '540 es divisible por todos: 2, 3, 5, 9 y 10.',
    },
    {
      titulo: 'Encontrar la cifra que falta',
      enunciado: '¿Qué cifra hay que poner en el lugar del * para que 4*2 sea divisible por 3?',
      pasos: [
        { explicacion: 'La regla del 3: la suma de las cifras tiene que ser múltiplo de 3.' },
        { explicacion: '4 + * + 2 = 6 + *.' },
        {
          explicacion:
            'Probamos: si * = 0 → 6 (sí), si * = 3 → 9 (sí), si * = 6 → 12 (sí), si * = 9 → 15 (sí). Cualquiera de esos sirve.',
        },
      ],
      resultado: '* puede ser 0, 3, 6 o 9.',
    },
  ],
  erroresComunes: [
    'Confundir las reglas: la del 3 y la del 9 son sumar las cifras; la del 2 y la del 5 son mirar la última.',
    'Pensar que "termina en 5" sirve para divisible por 2. Termina en par sí, en 5 no.',
    'Olvidar que un número divisible por 9 también es divisible por 3.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál de estos números es divisible por 9?',
        opciones: ['234', '345', '456', '567'],
        correcta: 3,
        explicacion: '5+6+7 = 18, múltiplo de 9. Por lo tanto 567 es divisible por 9.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '180 es divisible por 2, por 3, por 5 y por 10.',
        correcta: true,
        explicacion: 'Termina en 0 (2, 5 y 10) y suma 9 (3). Sí, todos.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Qué número NO es divisible por 3?',
        opciones: ['123', '234', '344', '456'],
        correcta: 2,
        explicacion: '344 → 3+4+4 = 11, no es múltiplo de 3. Los demás sí lo son.',
      },
    ],
  },
  relacionados: ['division-dos-cifras', 'multiplos-divisores'],
  tags: ['divisibilidad', 'criterios', 'multiplos', 'reglas'],
};
