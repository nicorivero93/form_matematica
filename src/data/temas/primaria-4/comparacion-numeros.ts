import type { Tema } from '../tipos';

export const COMPARACION_NUMEROS: Tema = {
  slug: 'comparacion-numeros',
  titulo: 'Comparar números',
  anios: ['primaria-4'],
  area: 'numeros-y-operaciones',
  nivel: 'intro',
  resumen:
    'Cómo decidir cuál de dos números es mayor o menor usando los signos $<$, $>$ e $=$.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Cuando comparamos dos números queremos saber cuál es más grande. Para escribirlo usamos signos especiales:',
    },
    {
      tipo: 'tabla',
      encabezados: ['Signo', 'Significado', 'Ejemplo'],
      filas: [
        ['<', 'menor que', '4 < 7 (cuatro es menor que siete)'],
        ['>', 'mayor que', '9 > 3 (nueve es mayor que tres)'],
        ['=', 'igual a', '5 = 5'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Truco',
      texto:
        'El signo $<$ y $>$ se "abre" para el lado del número más grande, como una boca que quiere comerse al más grande.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Para comparar números con muchas cifras vamos posición por posición, empezando por la izquierda (la más alta).',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Si tienen distinta cantidad de cifras, gana el que tiene más cifras.',
        'Si tienen la misma cantidad de cifras, comparamos las unidades de mil. Si son iguales, las centenas. Si son iguales, las decenas. Si son iguales, las unidades.',
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Comparar números de distinta cantidad de cifras',
      enunciado: '¿Cuál es mayor: 999 o 1.002?',
      pasos: [
        { explicacion: '999 tiene 3 cifras. 1.002 tiene 4 cifras.' },
        { explicacion: 'Como 1.002 tiene más cifras, es mayor.' },
      ],
      resultado: '1.002 > 999',
    },
    {
      titulo: 'Comparar dos números de 4 cifras',
      enunciado: '¿Cuál es mayor: 4.728 o 4.793?',
      pasos: [
        { explicacion: 'Ambos tienen 4 cifras, comparamos posición por posición.' },
        { explicacion: 'Unidades de mil: 4 = 4 → siguen empatados.' },
        { explicacion: 'Centenas: 7 = 7 → siguen empatados.' },
        { explicacion: 'Decenas: 2 vs 9. Como 9 > 2, gana 4.793.' },
      ],
      resultado: '4.793 > 4.728',
    },
  ],
  erroresComunes: [
    'Comparar contando cifras al revés. La cifra de más a la izquierda es la más importante, no la de más a la derecha.',
    'Olvidar que con la misma cantidad de cifras, hay que ir comparando una por una desde la izquierda.',
    'Apuntar el signo $<$ o $>$ para el lado equivocado. Recordá: la "boca" abierta apunta al más grande.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál de estos signos hace cierta la afirmación: 3.482 ___ 3.428?',
        opciones: ['<', '>', '=', 'no se puede comparar'],
        correcta: 1,
        explicacion:
          'Las primeras tres cifras son iguales (3, 4). En la decena, 8 > 2. Entonces 3.482 > 3.428.',
      },
      {
        tipo: 'multiple',
        enunciado:
          '¿Cuál de estos números es el mayor: 6.099 — 6.090 — 6.900 — 6.909?',
        opciones: ['6.099', '6.090', '6.900', '6.909'],
        correcta: 3,
        explicacion:
          'Todos arrancan con 6. En las centenas: 6.099 y 6.090 tienen 0; 6.900 y 6.909 tienen 9. Entre estos dos últimos, 6.909 tiene más unidades.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '999 < 1.000.',
        correcta: true,
        explicacion:
          '999 tiene 3 cifras y 1.000 tiene 4 cifras, así que 1.000 es mayor.',
      },
    ],
  },
  visualizadorId: 'recta-numerica',
  relacionados: ['numeros-hasta-10000', 'valor-posicional'],
  tags: ['comparacion', 'mayor que', 'menor que', 'signos', 'orden'],
};
