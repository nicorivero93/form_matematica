import type { Tema } from '../tipos';

export const ANGULOS_RECTAS_PARALELAS: Tema = {
  slug: 'angulos-rectas-paralelas',
  titulo: 'Ángulos entre rectas paralelas',
  anios: ['primaria-7'],
  area: 'geometria',
  nivel: 'intermedio',
  resumen:
    'Cuando dos rectas paralelas son cortadas por una transversal aparecen ángulos especiales: alternos internos, correspondientes, opuestos por el vértice.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Si dos rectas paralelas son cortadas por una recta secante (llamada transversal), se forman 8 ángulos. Estos ángulos cumplen relaciones útiles que permiten calcular unos a partir de otros.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Tipo', 'Característica'],
      filas: [
        ['Opuestos por el vértice', 'Iguales (siempre, no necesitan paralelas).'],
        ['Correspondientes', 'Iguales entre paralelas.'],
        ['Alternos internos', 'Iguales entre paralelas.'],
        ['Conjugados internos', 'Suman 180° entre paralelas.'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Si conocés un ángulo y las relaciones, podés deducir TODOS los demás. Cuando dos rectas son paralelas, en realidad solo hay dos valores distintos de ángulo: el que conoces y su suplemento (180° menos).',
    },
  ],
  ejemplos: [
    {
      titulo: 'Encontrar otros ángulos',
      enunciado:
        'Dos rectas paralelas son cortadas por una transversal. Uno de los ángulos formados mide 65°. ¿Cuánto mide su correspondiente?',
      pasos: [
        { explicacion: 'Los ángulos correspondientes entre paralelas son iguales.' },
        { explicacion: 'El correspondiente también mide 65°.' },
      ],
      resultado: '65°.',
    },
    {
      titulo: 'Conjugados internos',
      enunciado:
        'Si un ángulo entre paralelas mide 110°, ¿cuánto mide su conjugado interno?',
      pasos: [
        { explicacion: 'Los conjugados internos suman 180°.' },
        { explicacion: '180° - 110° = 70°.' },
      ],
      resultado: '70°.',
    },
  ],
  erroresComunes: [
    'Aplicar las propiedades cuando las rectas no son paralelas (no valen).',
    'Confundir alternos internos con correspondientes.',
    'Decir que los conjugados internos son iguales (en realidad suman 180°).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Si un ángulo entre paralelas mide 47°, su alterno interno mide:',
        respuesta: 47,
        explicacion: 'Los alternos internos son iguales.',
        unidad: '°',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Si un ángulo mide 130°, su conjugado interno (entre paralelas) mide:',
        respuesta: 50,
        explicacion: '180° - 130° = 50°.',
        unidad: '°',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Los ángulos opuestos por el vértice son iguales aunque las rectas no sean paralelas.',
        correcta: true,
        explicacion: 'Cierto. Los opuestos por vértice son siempre iguales.',
      },
    ],
  },
  relacionados: ['angulos-medir', 'angulos-introduccion'],
  tags: ['angulos', 'paralelas', 'transversal', 'alternos', 'correspondientes'],
};
