import type { Tema } from '../tipos';

export const MATRICES_INTRODUCCION: Tema = {
  slug: 'matrices-introduccion',
  titulo: 'Matrices: introducción',
  anios: ['secundaria-4'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Una matriz es un arreglo rectangular de números. Suma y multiplicación por escalar.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Una matriz $m \\times n$ tiene $m$ filas y $n$ columnas. Se suma componente a componente (deben tener mismo tamaño). Se multiplica por escalar multiplicando cada elemento.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Suma',
      enunciado:
        '$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} + \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$.',
      pasos: [
        { explicacion: 'Sumamos posición por posición: $\\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}$.' },
      ],
      resultado: '$\\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}$.',
    },
  ],
  erroresComunes: [
    'Sumar matrices de tamaños distintos.',
    'Multiplicar elemento a elemento (eso no es producto matricial).',
    'Confundir orden de filas y columnas.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado: 'Para sumar dos matrices, deben tener el mismo tamaño.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Multiplicar por un escalar significa multiplicar cada elemento.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Una matriz $2 \\times 3$ tiene 6 elementos.',
        correcta: true,
        explicacion: 'Cierto: 2 filas × 3 columnas.',
      },
    ],
  },
  relacionados: ['vectores-introduccion', 'sistemas-ecuaciones'],
  tags: ['matrices', 'algebra lineal'],
};
