import type { Tema } from '../tipos';

export const SUMA_CON_LLEVADAS: Tema = {
  slug: 'suma-con-llevadas',
  titulo: 'Suma con llevadas',
  anios: ['primaria-4'],
  area: 'numeros-y-operaciones',
  nivel: 'intro',
  resumen:
    'Cómo sumar números cuando una columna pasa de 9 y hay que "llevar" una unidad a la columna siguiente.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Cuando sumamos columna por columna y la suma de una columna da más de 9, no podemos escribirla en un solo lugar. Tenemos que dejar las unidades ahí y "llevar" 1 a la columna de la izquierda.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: '¿Qué es "llevar"?',
      texto:
        'Si en una columna sumamos 8 + 5 = 13, escribimos el 3 abajo y "llevamos" 1 a la siguiente columna. Ese 1 representa una decena (porque 13 = 1 decena + 3 unidades).',
    },
    {
      tipo: 'parrafo',
      texto: 'Pasos para sumar dos números grandes:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Encolumnar los números alineando las unidades.',
        'Sumar las unidades. Si pasa de 9, llevarse 1 a las decenas.',
        'Sumar las decenas (más lo que llevamos, si llevamos algo). Si pasa de 9, llevarse 1 a las centenas.',
        'Seguir así con centenas y unidades de mil.',
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Suma con una llevada',
      enunciado: 'Calculá $478 + 365$.',
      pasos: [
        {
          explicacion: 'Encolumnamos. Empezamos por las unidades: 8 + 5 = 13.',
          latex: '\\begin{array}{r} 4\\,7\\,8 \\\\ +\\,3\\,6\\,5 \\\\ \\hline \\end{array}',
        },
        { explicacion: 'Escribimos 3 abajo y llevamos 1 a las decenas.' },
        { explicacion: 'Decenas: 7 + 6 + 1 (que llevamos) = 14. Escribimos 4 y llevamos 1.' },
        { explicacion: 'Centenas: 4 + 3 + 1 = 8. Escribimos 8.' },
      ],
      resultado: '843',
    },
    {
      titulo: 'Suma con dos llevadas',
      enunciado: 'Calculá $1.689 + 2.756$.',
      pasos: [
        { explicacion: 'Unidades: 9 + 6 = 15 → escribimos 5, llevamos 1.' },
        { explicacion: 'Decenas: 8 + 5 + 1 = 14 → escribimos 4, llevamos 1.' },
        { explicacion: 'Centenas: 6 + 7 + 1 = 14 → escribimos 4, llevamos 1.' },
        { explicacion: 'Unidades de mil: 1 + 2 + 1 = 4 → escribimos 4.' },
      ],
      resultado: '4.445',
    },
  ],
  erroresComunes: [
    'Olvidar sumar la llevada en la columna siguiente. Si llevás 1, hay que sumarlo siempre.',
    'Encolumnar mal: las unidades tienen que estar alineadas. Si están corridas, todo el resultado sale mal.',
    'Escribir el resultado completo de una columna (por ejemplo 13) en lugar de escribir 3 y llevar 1.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Calculá: 256 + 178 = ?',
        respuesta: 434,
        explicacion:
          '6+8=14 (escribimos 4, llevamos 1). 5+7+1=13 (escribimos 3, llevamos 1). 2+1+1=4. Resultado: 434.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Calculá: 1.999 + 1 = ?',
        respuesta: 2000,
        explicacion:
          '9+1=10, escribimos 0 y llevamos 1. La llevada se va propagando: 9+1=10 → 0 lleva 1 → 9+1=10 → 0 lleva 1 → 1+1=2. Resultado: 2.000.',
      },
      {
        tipo: 'multiple',
        enunciado: 'En 47 + 38 las decenas son 4 y 3. ¿Cuánto sumamos al final en la columna de las decenas?',
        opciones: ['4 + 3 = 7', '4 + 3 + 1 = 8', '7 + 8 = 15', '4 + 3 = 8'],
        correcta: 1,
        explicacion:
          'En las unidades 7+8=15, llevamos 1. En decenas no es solo 4+3, es 4+3+1=8.',
      },
    ],
  },
  relacionados: ['resta-con-prestamos', 'valor-posicional'],
  tags: ['suma', 'llevadas', 'cuentas verticales', 'algoritmo'],
};
