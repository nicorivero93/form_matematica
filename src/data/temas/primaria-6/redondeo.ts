import type { Tema } from '../tipos';

export const REDONDEO: Tema = {
  slug: 'redondeo',
  titulo: 'Redondeo de números',
  anios: ['primaria-6'],
  area: 'numeros-y-operaciones',
  nivel: 'intro',
  resumen:
    'Cómo aproximar un número a la decena, centena, unidad de mil o decimal más cercano.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Redondear es elegir un número parecido pero más fácil de manejar. Se redondea siguiendo una regla simple según la cifra que viene después de donde queremos cortar.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Regla',
      texto:
        'Si la cifra siguiente es 0, 1, 2, 3 o 4 → bajamos (dejamos igual). Si es 5, 6, 7, 8 o 9 → subimos (sumamos 1 a la cifra del corte).',
    },
    {
      tipo: 'tabla',
      encabezados: ['Número', 'A la decena', 'A la centena'],
      filas: [
        ['238', '240', '200'],
        ['475', '480', '500'],
        ['1.249', '1.250', '1.200'],
        ['3.502', '3.500', '3.500'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Para redondear decimales funciona igual: 3,476 redondeado a 1 decimal es 3,5 (porque la siguiente cifra, 7, es ≥ 5).',
    },
  ],
  ejemplos: [
    {
      titulo: 'Redondear a la decena',
      enunciado: 'Redondear 376 a la decena más cercana.',
      pasos: [
        { explicacion: 'La cifra de las decenas es 7.' },
        { explicacion: 'La siguiente (unidades) es 6, mayor o igual a 5 → subimos.' },
        { explicacion: '376 → 380.' },
      ],
      resultado: '380.',
    },
    {
      titulo: 'Redondear un decimal',
      enunciado: 'Redondear 5,348 a 1 decimal.',
      pasos: [
        { explicacion: 'La cifra de los décimos es 3.' },
        { explicacion: 'La siguiente (centésimos) es 4, menor a 5 → dejamos igual.' },
        { explicacion: '5,348 → 5,3.' },
      ],
      resultado: '5,3.',
    },
  ],
  erroresComunes: [
    'Mirar más cifras de las necesarias para decidir. Solo importa la inmediatamente siguiente al corte.',
    'Olvidar redondear "hacia arriba" cuando la cifra siguiente es exactamente 5.',
    'Modificar cifras que no debían cambiar al redondear.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Redondeá 458 a la centena más cercana.',
        respuesta: 500,
        explicacion: 'La cifra de las decenas es 5 → subimos: 458 → 500.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Redondeá 7,29 a 1 decimal.',
        respuesta: 7.3,
        tolerancia: 0.001,
        explicacion: 'La cifra de centésimos es 9 ≥ 5 → subimos: 7,29 → 7,3.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Redondear 1.234 a la unidad de mil más cercana da:',
        opciones: ['1.000', '1.200', '1.230', '1.300'],
        correcta: 0,
        explicacion: 'La cifra de centenas es 2 < 5 → bajamos: 1.234 → 1.000.',
      },
    ],
  },
  relacionados: ['decimales-introduccion', 'comparacion-numeros'],
  tags: ['redondeo', 'aproximar', 'estimar'],
};
