import type { Tema } from '../tipos';

export const CONGRUENCIA_TRIANGULOS: Tema = {
  slug: 'congruencia-triangulos',
  titulo: 'Congruencia de triángulos',
  anios: ['primaria-7'],
  area: 'geometria',
  nivel: 'intermedio',
  resumen:
    'Dos triángulos son congruentes (idénticos) si tienen la misma forma y tamaño. Tres criterios para verificarlo.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Congruencia',
      texto:
        'Dos figuras son congruentes cuando son exactamente iguales: misma forma, mismo tamaño. Una se puede superponer a la otra perfectamente.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Para triángulos, no hace falta verificar todos los lados y ángulos. Hay tres criterios mínimos para garantizar que dos triángulos son congruentes.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Criterio', 'Si dos triángulos tienen...'],
      filas: [
        ['LLL (Lado-Lado-Lado)', '...los 3 lados respectivamente iguales.'],
        ['LAL (Lado-Ángulo-Lado)', '...2 lados y el ángulo entre ellos iguales.'],
        ['ALA (Ángulo-Lado-Ángulo)', '...2 ángulos y el lado entre ellos iguales.'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'No alcanza con que tengan los 3 ángulos iguales (eso es semejanza, no congruencia). Tampoco basta con dos lados y un ángulo cualquiera (tiene que ser el comprendido entre esos dos lados).',
    },
  ],
  ejemplos: [
    {
      titulo: 'Aplicar LLL',
      enunciado:
        'Dos triángulos tienen lados de 5, 7 y 9 cm. ¿Son congruentes?',
      pasos: [
        { explicacion: 'Tienen los 3 lados respectivamente iguales.' },
        { explicacion: 'Por el criterio LLL, son congruentes.' },
      ],
      resultado: 'Sí, son congruentes.',
    },
    {
      titulo: 'No es congruencia',
      enunciado:
        'Dos triángulos tienen los 3 ángulos iguales (60°, 60°, 60°) pero distinto tamaño. ¿Son congruentes?',
      pasos: [
        { explicacion: 'Tener los mismos ángulos no es suficiente.' },
        {
          explicacion:
            'Los triángulos pueden ser equiláteros pero de distinto tamaño: son semejantes pero NO congruentes.',
        },
      ],
      resultado: 'No.',
    },
  ],
  erroresComunes: [
    'Confundir congruencia con semejanza. La semejanza es misma forma; la congruencia es misma forma Y tamaño.',
    'Olvidar que el ángulo del criterio LAL tiene que ser el que está entre los dos lados.',
    'Pensar que solo con 2 lados iguales basta (puede haber muchos triángulos distintos).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Dos triángulos tienen los 3 lados iguales. Por ¿qué criterio son congruentes?',
        opciones: ['ALA', 'LAL', 'LLL', 'AAA'],
        correcta: 2,
        explicacion: 'LLL = Lado-Lado-Lado.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Dos triángulos con los 3 ángulos iguales son siempre congruentes.',
        correcta: false,
        explicacion: 'No, son semejantes (misma forma, distinto tamaño posible).',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Dos triángulos congruentes tienen la misma área.',
        correcta: true,
        explicacion: 'Sí, son idénticos en forma y tamaño.',
      },
    ],
  },
  relacionados: ['triangulos-clasificacion', 'suma-angulos-triangulo'],
  tags: ['congruencia', 'triangulos', 'lal', 'lll', 'ala'],
};
