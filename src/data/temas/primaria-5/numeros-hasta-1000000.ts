import type { Tema } from '../tipos';

export const NUMEROS_HASTA_1000000: Tema = {
  slug: 'numeros-hasta-1000000',
  titulo: 'Números hasta 1.000.000',
  anios: ['primaria-5'],
  area: 'numeros-y-operaciones',
  nivel: 'intro',
  resumen:
    'Cómo leer, escribir y formar números de hasta 7 cifras. Centenas de mil, decenas de mil y unidades de mil.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'En 5to grado trabajamos con números más grandes: hasta 1.000.000 (un millón). Para no perdernos, separamos los números en grupos de 3 cifras con un punto: por ejemplo 425.038.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Clase de los miles',
      texto:
        'Los números se agrupan en clases de 3 cifras: las unidades (U, D, C) y los miles (UM, DM, CM). El millón abre la siguiente clase.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Cifras', 'Posición', 'Vale'],
      filas: [
        ['7', 'Centena de mil (CM)', '100.000'],
        ['6', 'Decena de mil (DM)', '10.000'],
        ['5', 'Unidad de mil (UM)', '1.000'],
        ['4', 'Centena (C)', '100'],
        ['3', 'Decena (D)', '10'],
        ['2', 'Unidad (U)', '1'],
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Para leer un número grande lo separamos en clases: primero los miles, después las unidades. Ejemplo: 245.067 = "doscientos cuarenta y cinco mil sesenta y siete".',
    },
  ],
  ejemplos: [
    {
      titulo: 'Leer un número de 6 cifras',
      enunciado: '¿Cómo se lee 138.452?',
      pasos: [
        { explicacion: 'Separamos en clases: 138 (miles) y 452 (unidades).' },
        { explicacion: '138 → "ciento treinta y ocho mil".' },
        { explicacion: '452 → "cuatrocientos cincuenta y dos".' },
        { explicacion: 'Lo unimos: "ciento treinta y ocho mil cuatrocientos cincuenta y dos".' },
      ],
      resultado: 'Ciento treinta y ocho mil cuatrocientos cincuenta y dos.',
    },
    {
      titulo: 'Escribir en cifras',
      enunciado: 'Escribí en cifras "trescientos cuatro mil cincuenta".',
      pasos: [
        { explicacion: 'Trescientos cuatro mil = 304.000.' },
        { explicacion: 'Cincuenta = 50.' },
        { explicacion: 'Sumamos: 304.000 + 50 = 304.050.' },
      ],
      resultado: '304.050',
    },
  ],
  erroresComunes: [
    'Confundir 100.000 (cien mil) con 1.000.000 (un millón). Hay un cero de diferencia que cambia todo.',
    'Olvidar el punto separador y escribir 138452 — se hace ilegible.',
    'No "saltarse" la posición vacía: 304.050 no es "trescientos cuatro mil cero cincuenta"; el cero de las centenas no se nombra.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cómo se escribe en cifras "ciento veinte mil treinta"?',
        opciones: ['120.300', '120.030', '102.030', '12.030'],
        correcta: 1,
        explicacion:
          'Ciento veinte mil = 120.000. Treinta = 30. Sumamos: 120.030.',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Cuántas cifras tiene un millón (1.000.000)?',
        respuesta: 7,
        explicacion: 'Un 1 seguido de 6 ceros: 7 cifras en total.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El número 999.999 es el mayor de 6 cifras.',
        correcta: true,
        explicacion: 'Cierto. El siguiente número, 1.000.000, ya tiene 7 cifras.',
      },
    ],
  },
  relacionados: ['valor-posicional-ampliado', 'numeros-hasta-10000'],
  tags: ['numeros grandes', 'millon', 'lectura', 'cifras', 'miles'],
};
