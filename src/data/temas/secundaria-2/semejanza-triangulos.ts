import type { Tema } from '../tipos';

export const SEMEJANZA_TRIANGULOS: Tema = {
  slug: 'semejanza-triangulos',
  titulo: 'Semejanza de triángulos: criterios',
  anios: ['secundaria-2'],
  area: 'geometria',
  nivel: 'intermedio',
  resumen:
    'Tres criterios para asegurar que dos triángulos son semejantes: AA, LAL y LLL.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Criterio', 'Si dos triángulos tienen...'],
      filas: [
        ['AA (ángulo-ángulo)', '...dos ángulos respectivamente iguales.'],
        ['LAL', '...dos lados proporcionales y el ángulo entre ellos igual.'],
        ['LLL', '...los tres lados proporcionales.'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'En semejanza, ángulos iguales no implica congruencia (los lados pueden ser distintos), pero sí garantiza misma forma.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Triángulos AA',
      enunciado:
        'Dos triángulos tienen ángulos 50° y 70°. ¿Son semejantes?',
      pasos: [
        { explicacion: 'Si dos ángulos son iguales, el tercero también: 60°.' },
        { explicacion: 'Por criterio AA, son semejantes.' },
      ],
      resultado: 'Sí.',
    },
    {
      titulo: 'Encontrar lado',
      enunciado:
        'Triángulos semejantes con razón 2:5. Si en el chico un lado mide 4, ¿cuánto mide el correspondiente en el grande?',
      pasos: [{ explicacion: '$x = 4 \\times \\frac{5}{2} = 10$.' }],
      resultado: '10.',
    },
  ],
  erroresComunes: [
    'Aplicar criterios sin verificar correspondencias.',
    'Confundir LAL con criterio de congruencia.',
    'No identificar el ángulo "entre" los lados.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Dos triángulos con ángulos iguales son:',
        opciones: ['Congruentes', 'Semejantes', 'Iguales', 'Distintos'],
        correcta: 1,
        explicacion: 'Mismo formas pero distinto tamaño posible.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En semejanza, los lados correspondientes son proporcionales.',
        correcta: true,
        explicacion: 'Es la definición.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Dos triángulos con razón de semejanza 1 son congruentes.',
        correcta: true,
        explicacion: 'Cierto. Razón 1 implica mismo tamaño.',
      },
    ],
  },
  relacionados: ['semejanza-introduccion', 'congruencia-triangulos'],
  tags: ['semejanza', 'triangulos', 'AA', 'LAL', 'LLL'],
};
