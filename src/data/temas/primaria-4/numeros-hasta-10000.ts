import type { Tema } from '../tipos';

export const NUMEROS_HASTA_10000: Tema = {
  slug: 'numeros-hasta-10000',
  titulo: 'Números hasta 10.000',
  anios: ['primaria-4'],
  area: 'numeros-y-operaciones',
  nivel: 'intro',
  resumen:
    'Cómo leer, escribir y formar números de hasta 5 cifras. Unidades, decenas, centenas, unidades de mil y decenas de mil.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'En 4to grado trabajamos con números más grandes que en años anteriores. Aprendemos a leer y escribir números de cuatro y cinco cifras, como 4.532 o 12.078. Usamos un punto para separar los miles y que sean más fáciles de leer.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Cifra',
      texto:
        'Una cifra es cada uno de los símbolos del 0 al 9 que usamos para escribir números. El número 4.532 tiene 4 cifras: 4, 5, 3 y 2.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Para nombrar un número grande lo separamos mentalmente en grupos: primero los miles, después las centenas, decenas y unidades.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Número', 'Cómo se lee'],
      filas: [
        ['1.000', 'Mil'],
        ['1.500', 'Mil quinientos'],
        ['4.532', 'Cuatro mil quinientos treinta y dos'],
        ['10.000', 'Diez mil'],
        ['12.078', 'Doce mil setenta y ocho'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Si un número tiene un cero en alguna posición, no lo nombramos. Por ejemplo 3.405 se lee "tres mil cuatrocientos cinco" (no decimos "cero decenas").',
    },
  ],
  ejemplos: [
    {
      titulo: 'Leer un número',
      enunciado: '¿Cómo se lee el número 7.806?',
      pasos: [
        {
          explicacion:
            'Separamos en miles + el resto: 7.806 = 7.000 + 806.',
        },
        {
          explicacion:
            '7.000 se lee "siete mil". 806 se lee "ochocientos seis".',
        },
        {
          explicacion: 'Lo unimos: "siete mil ochocientos seis".',
        },
      ],
      resultado: 'Siete mil ochocientos seis.',
    },
    {
      titulo: 'Escribir un número en cifras',
      enunciado:
        'Escribí en cifras el número "tres mil quinientos cuarenta".',
      pasos: [
        { explicacion: 'Tres mil = 3.000.' },
        { explicacion: 'Quinientos = 500.' },
        { explicacion: 'Cuarenta = 40.' },
        { explicacion: 'Sumamos: 3.000 + 500 + 40 = 3.540.' },
      ],
      resultado: '3.540',
    },
  ],
  erroresComunes: [
    'Olvidar el punto que separa los miles: 7806 se escribe 7.806 para leerlo más fácil.',
    'Confundir 1.005 con 1.500. El cero del medio cuenta como decena, no se ignora.',
    'Decir "cero" cuando hay una posición vacía. No se lee: 3.045 es "tres mil cuarenta y cinco", no "tres mil cero cuarenta y cinco".',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cómo se escribe en cifras "cinco mil doscientos siete"?',
        opciones: ['5.270', '5.207', '5.027', '50.207'],
        correcta: 1,
        explicacion:
          'Cinco mil son 5.000, doscientos son 200, siete son 7. Sumamos: 5.000 + 200 + 7 = 5.207.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuántas cifras tiene el número 8.402?',
        opciones: ['3 cifras', '4 cifras', '5 cifras', '8 cifras'],
        correcta: 1,
        explicacion:
          'Contamos cada símbolo: 8, 4, 0, 2 → son 4 cifras. El punto no es una cifra.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El número 6.030 se lee "seis mil treinta".',
        correcta: true,
        explicacion:
          'Correcto. 6.000 + 30 = 6.030. La centena es 0, así que no se nombra.',
      },
    ],
  },
  visualizadorId: 'recta-numerica',
  relacionados: ['valor-posicional', 'comparacion-numeros'],
  tags: ['numeros naturales', 'lectura de numeros', 'cifras', 'miles'],
};
