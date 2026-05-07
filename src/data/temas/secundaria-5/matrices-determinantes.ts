import type { Tema } from '../tipos';

export const MATRICES_DETERMINANTES: Tema = {
  slug: 'matrices-determinantes',
  titulo: 'Determinante de una matriz',
  anios: ['secundaria-5'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Número asociado a una matriz cuadrada. Para 2×2: $\\det = ad - bc$. Útil para resolver sistemas (Cramer).',
  teoria: [
    {
      tipo: 'latex',
      latex: '\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Si el determinante es 0, la matriz no es invertible. En sistemas, eso significa que no hay solución única.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Calcular',
      enunciado: '$\\det \\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix}$.',
      pasos: [{ explicacion: '$3 \\times 4 - 1 \\times 2 = 12 - 2 = 10$.' }],
      resultado: '10.',
    },
  ],
  erroresComunes: [
    'Confundir el orden de los productos.',
    'Olvidar el signo entre los productos.',
    'Aplicar la fórmula 2×2 a matrices 3×3.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          '$\\det \\begin{pmatrix} 5 & 2 \\\\ 3 & 1 \\end{pmatrix}$.',
        respuesta: -1,
        explicacion: '$5 - 6 = -1$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Si $\\det A = 0$, $A$ no es invertible.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El determinante existe solo para matrices cuadradas.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['matrices-introduccion'],
  tags: ['matrices', 'determinante', 'algebra lineal'],
};
