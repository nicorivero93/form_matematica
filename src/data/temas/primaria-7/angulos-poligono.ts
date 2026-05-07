import type { Tema } from '../tipos';

export const ANGULOS_POLIGONO: Tema = {
  slug: 'angulos-poligono',
  titulo: 'Ángulos interiores y exteriores',
  anios: ['primaria-7'],
  area: 'geometria',
  nivel: 'intermedio',
  resumen:
    'Cómo calcular los ángulos interiores y exteriores de cualquier polígono. La suma siempre vale lo mismo según los lados.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Ángulo interior',
      texto:
        'Es el ángulo que se forma adentro del polígono entre dos lados que se juntan en un vértice.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Ángulo exterior',
      texto:
        'Es el ángulo formado entre un lado y la prolongación del siguiente. Cada interior y su exterior son suplementarios (suman 180°).',
    },
    {
      tipo: 'tabla',
      encabezados: ['Cantidad de lados', 'Suma interiores', 'Cada interior (regular)'],
      filas: [
        ['3', '180°', '60°'],
        ['4', '360°', '90°'],
        ['5', '540°', '108°'],
        ['6', '720°', '120°'],
        ['8', '1.080°', '135°'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Suma de ángulos exteriores',
      texto:
        'En cualquier polígono convexo, la suma de los ángulos exteriores siempre es 360°, sin importar la cantidad de lados.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Suma de ángulos interiores',
      latex: 'S_i = (n - 2) \\cdot 180°',
      variables: [
        { simbolo: 'n', nombre: 'cantidad de lados', desc: '' },
      ],
    },
    {
      nombre: 'Cada ángulo interior (regular)',
      latex: '\\alpha_i = \\dfrac{(n-2) \\cdot 180°}{n}',
      variables: [],
    },
    {
      nombre: 'Cada ángulo exterior (regular)',
      latex: '\\alpha_e = \\dfrac{360°}{n}',
      variables: [],
    },
  ],
  ejemplos: [
    {
      titulo: 'Ángulo de un octógono regular',
      enunciado: '¿Cuánto mide cada ángulo interior de un octógono regular?',
      pasos: [
        { explicacion: 'Suma: (8-2) × 180° = 1.080°.' },
        { explicacion: 'Cada uno: 1.080° ÷ 8 = 135°.' },
      ],
      resultado: '135°.',
    },
    {
      titulo: 'Encontrar n',
      enunciado:
        'Un polígono regular tiene cada ángulo exterior de 24°. ¿Cuántos lados tiene?',
      pasos: [
        { explicacion: 'Cada exterior = 360° / n.' },
        { explicacion: '24° = 360° / n → n = 360 ÷ 24 = 15.' },
      ],
      resultado: '15 lados.',
    },
  ],
  erroresComunes: [
    'Pensar que la suma de exteriores depende de los lados (siempre es 360°).',
    'Confundir ángulo interior con exterior.',
    'Olvidar que la fórmula $(n-2) \\times 180°$ vale para cualquier polígono convexo, no solo regulares.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuánto suman los ángulos interiores de un decágono?',
        respuesta: 1440,
        explicacion: '(10-2) × 180 = 1.440°.',
        unidad: '°',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Cuánto mide cada ángulo exterior de un pentágono regular?',
        respuesta: 72,
        explicacion: '360 ÷ 5 = 72°.',
        unidad: '°',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En cualquier polígono convexo, la suma de los exteriores es 360°.',
        correcta: true,
        explicacion: 'Cierto. Es independiente de la cantidad de lados.',
      },
    ],
  },
  relacionados: ['poligonos-regulares', 'suma-angulos-triangulo'],
  tags: ['poligono', 'angulos', 'interiores', 'exteriores'],
};
