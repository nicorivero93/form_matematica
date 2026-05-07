import type { Tema } from '../tipos';

export const POLIGONOS_REGULARES: Tema = {
  slug: 'poligonos-regulares',
  titulo: 'Polígonos regulares',
  anios: ['primaria-6'],
  area: 'geometria',
  nivel: 'intro',
  resumen:
    'Polígonos con todos los lados y todos los ángulos iguales. Cómo se llaman según la cantidad de lados.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Polígono regular',
      texto:
        'Un polígono es regular cuando tiene todos los lados iguales Y todos los ángulos iguales. Si solo tiene lados iguales (pero ángulos distintos), no es regular: por ejemplo el rombo.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Lados', 'Nombre'],
      filas: [
        ['3', 'Triángulo equilátero'],
        ['4', 'Cuadrado'],
        ['5', 'Pentágono'],
        ['6', 'Hexágono'],
        ['7', 'Heptágono'],
        ['8', 'Octógono'],
        ['9', 'Eneágono'],
        ['10', 'Decágono'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Suma de ángulos interiores',
      texto:
        'En un polígono de $n$ lados, los ángulos interiores suman $(n - 2) \\times 180°$. Triángulo (n=3): 180°. Cuadrilátero (n=4): 360°. Pentágono (n=5): 540°.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Suma de ángulos interiores',
      latex: 'S = (n - 2) \\times 180°',
      variables: [
        { simbolo: 'n', nombre: 'cantidad de lados', desc: '' },
        { simbolo: 'S', nombre: 'suma total', desc: 'en grados' },
      ],
    },
    {
      nombre: 'Cada ángulo interior (regular)',
      latex: '\\alpha = \\dfrac{(n - 2) \\times 180°}{n}',
      variables: [
        { simbolo: 'n', nombre: 'cantidad de lados', desc: '' },
        { simbolo: '\\alpha', nombre: 'cada ángulo interior', desc: 'en grados' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Suma de ángulos del hexágono',
      enunciado: '¿Cuánto suman los ángulos interiores de un hexágono?',
      pasos: [
        { explicacion: 'n = 6.' },
        { explicacion: 'S = (6 - 2) × 180° = 4 × 180° = 720°.' },
      ],
      resultado: '720°.',
    },
    {
      titulo: 'Cada ángulo de un pentágono regular',
      enunciado: '¿Cuánto mide cada ángulo interior de un pentágono regular?',
      pasos: [
        { explicacion: 'Suma total: (5 - 2) × 180° = 540°.' },
        { explicacion: 'Como es regular, los 5 ángulos son iguales: 540 ÷ 5 = 108°.' },
      ],
      resultado: '108° cada uno.',
    },
  ],
  erroresComunes: [
    'Confundir polígono regular con polígono cualquiera. Regular = lados Y ángulos iguales.',
    'Olvidar la fórmula y sumar 180° por cada lado (sería incorrecto).',
    'Pensar que el rombo es regular porque tiene lados iguales: no, los ángulos son distintos.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuánto suman los ángulos interiores de un cuadrilátero?',
        respuesta: 360,
        explicacion: '(4 - 2) × 180° = 360°.',
        unidad: '°',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Cuánto mide cada ángulo de un hexágono regular?',
        respuesta: 120,
        explicacion: 'Suma total 720° ÷ 6 lados = 120°.',
        unidad: '°',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cómo se llama un polígono regular de 8 lados?',
        opciones: ['Heptágono', 'Octógono', 'Eneágono', 'Decágono'],
        correcta: 1,
        explicacion: '8 lados = octógono.',
      },
    ],
  },
  relacionados: ['cuadrilateros', 'figuras-planas', 'angulos-medir'],
  tags: ['poligonos', 'regulares', 'angulos interiores', 'pentagono', 'hexagono'],
};
