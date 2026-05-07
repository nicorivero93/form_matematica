import type { Tema } from '../tipos';

export const SEMEJANZA_INTRODUCCION: Tema = {
  slug: 'semejanza-introduccion',
  titulo: 'Semejanza: introducción',
  anios: ['secundaria-1'],
  area: 'geometria',
  nivel: 'intermedio',
  resumen:
    'Dos figuras son semejantes si tienen la misma forma pero distinto tamaño. Cómo identificar la razón de semejanza.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Semejanza',
      texto:
        'Dos figuras son semejantes cuando tienen los mismos ángulos y los lados correspondientes son proporcionales. La razón de semejanza es el cociente entre lados correspondientes.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Si la razón es 2, una figura es el doble de grande que la otra. Si es 1/3, es un tercio. La razón se conserva entre todos los lados correspondientes.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Razón de semejanza',
      enunciado:
        'Dos triángulos semejantes. El primero tiene un lado de 4 cm; el correspondiente del segundo, 6 cm. ¿Razón?',
      pasos: [
        { explicacion: 'Razón = lado del 2do / lado del 1ro = 6/4 = 1,5.' },
      ],
      resultado: 'Razón 1,5 (el segundo es 1,5 veces más grande).',
    },
    {
      titulo: 'Encontrar lado correspondiente',
      enunciado:
        'Triángulos semejantes con razón 2. Un lado del chico mide 5 cm. ¿Cuánto mide el correspondiente del grande?',
      pasos: [{ explicacion: '5 × 2 = 10 cm.' }],
      resultado: '10 cm.',
    },
  ],
  erroresComunes: [
    'Confundir semejanza con congruencia. Semejanza permite distinto tamaño.',
    'Multiplicar lados que no se corresponden.',
    'Olvidar que los ángulos deben ser iguales.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Triángulos semejantes con razón 3. Un lado del chico mide 4 cm. ¿Cuánto mide el correspondiente del grande?',
        respuesta: 12,
        explicacion: '4 × 3 = 12.',
        unidad: 'cm',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Dos triángulos congruentes son semejantes con razón 1.',
        correcta: true,
        explicacion: 'Cierto. La congruencia es un caso particular de semejanza.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Para que dos polígonos sean semejantes:',
        opciones: [
          'Solo basta que tengan los mismos ángulos.',
          'Solo basta que sus lados sean proporcionales.',
          'Tienen que cumplir ambas: ángulos iguales y lados proporcionales.',
          'Solo si sus áreas son iguales.',
        ],
        correcta: 2,
        explicacion: 'Las dos condiciones son necesarias.',
      },
    ],
  },
  relacionados: ['congruencia-triangulos', 'proporcionalidad-directa'],
  tags: ['semejanza', 'razon', 'proporcion', 'figuras'],
};
