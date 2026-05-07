import type { Tema } from '../tipos';

export const SUCESIONES_INTRODUCCION: Tema = {
  slug: 'sucesiones-introduccion',
  titulo: 'Sucesiones: introducción',
  anios: ['secundaria-2'],
  area: 'algebra',
  nivel: 'intermedio',
  resumen:
    'Una sucesión es una lista ordenada de números. Cada elemento se llama término. Hay sucesiones aritméticas (suman constante) y geométricas (multiplican constante).',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Tipo', 'Característica', 'Ejemplo'],
      filas: [
        ['Aritmética', 'Cada término se obtiene sumando una constante (razón d).', '2, 5, 8, 11... (d=3)'],
        ['Geométrica', 'Cada término se obtiene multiplicando por una constante (razón r).', '3, 6, 12, 24... (r=2)'],
      ],
    },
    {
      tipo: 'latex',
      latex: 'a_n = a_1 + (n - 1) \\cdot d \\quad \\text{(aritmética)}',
      display: true,
    },
    {
      tipo: 'latex',
      latex: 'a_n = a_1 \\cdot r^{n-1} \\quad \\text{(geométrica)}',
      display: true,
    },
  ],
  ejemplos: [
    {
      titulo: 'Aritmética',
      enunciado:
        'Sucesión aritmética con $a_1 = 5$ y $d = 3$. ¿Cuál es el 10° término?',
      pasos: [
        { explicacion: '$a_{10} = 5 + 9 \\cdot 3 = 5 + 27 = 32$.' },
      ],
      resultado: '32.',
    },
    {
      titulo: 'Geométrica',
      enunciado:
        'Sucesión geométrica con $a_1 = 2$ y $r = 3$. ¿Cuál es el 5° término?',
      pasos: [
        { explicacion: '$a_5 = 2 \\cdot 3^4 = 2 \\cdot 81 = 162$.' },
      ],
      resultado: '162.',
    },
  ],
  erroresComunes: [
    'Usar $n$ en vez de $n-1$ en la fórmula.',
    'Confundir aritmética con geométrica.',
    'Calcular mal la razón $d$ o $r$.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Sucesión aritmética 7, 12, 17, 22... ¿Cuál es el 8° término?',
        respuesta: 42,
        explicacion: 'd=5. $a_8 = 7 + 7 \\cdot 5 = 42$.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Sucesión geométrica 2, 4, 8, 16... ¿Cuál es el 7° término?',
        respuesta: 128,
        explicacion: 'r=2. $a_7 = 2 \\cdot 2^6 = 128$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En una aritmética, la diferencia entre dos términos consecutivos es constante.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['lenguaje-algebraico-avanzado'],
  tags: ['sucesiones', 'aritmetica', 'geometrica'],
};
