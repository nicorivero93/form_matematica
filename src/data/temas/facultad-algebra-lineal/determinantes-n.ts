import type { Tema } from '../tipos';

export const DETERMINANTES_N: Tema = {
  slug: 'determinantes-n',
  titulo: 'Determinantes de orden $n$',
  anios: ['facultad-algebra-lineal'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Función que asocia un escalar a cada matriz cuadrada. Se calcula por desarrollo (Laplace) o por reducción a triangular.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Desarrollo por cofactores (Laplace)',
      texto:
        '$\\det A = \\sum_j (-1)^{i+j} a_{ij} \\det A_{ij}$ donde $A_{ij}$ es la submatriz al sacar fila $i$ y columna $j$.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Propiedad', 'Resultado'],
      filas: [
        ['$\\det(AB)$', '$\\det A \\cdot \\det B$'],
        ['$\\det A^T$', '$\\det A$'],
        ['$\\det(c A)$ ($n \\times n$)', '$c^n \\det A$'],
        ['Filas iguales', '$\\det = 0$'],
        ['Triangular', '$\\det = $ producto de diagonal'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: '$3 \\times 3$',
      enunciado:
        '$\\det \\begin{pmatrix} 1 & 2 & 3 \\\\ 0 & 1 & 4 \\\\ 5 & 6 & 0 \\end{pmatrix}$.',
      pasos: [
        { explicacion: 'Desarrollo por primera fila: $1 \\cdot \\det \\begin{pmatrix} 1 & 4 \\\\ 6 & 0 \\end{pmatrix} - 2 \\cdot \\det \\begin{pmatrix} 0 & 4 \\\\ 5 & 0 \\end{pmatrix} + 3 \\cdot \\det \\begin{pmatrix} 0 & 1 \\\\ 5 & 6 \\end{pmatrix}$.' },
        { explicacion: '$= 1(0 - 24) - 2(0 - 20) + 3(0 - 5) = -24 + 40 - 15 = 1$.' },
      ],
      resultado: '1.',
    },
  ],
  erroresComunes: [
    'Olvidar el signo $(-1)^{i+j}$ en cofactores.',
    'Confundir desarrollo por filas con por columnas.',
    'No usar reducción cuando es más eficiente.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          '$\\det(AB) = \\det A \\cdot \\det B$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si una fila es cero, $\\det = 0$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Una matriz con $\\det = 0$ es invertible.',
        correcta: false,
        explicacion: 'Falso. Es lo opuesto: $\\det \\ne 0$ es invertible.',
      },
    ],
  },
  relacionados: ['matrices-operaciones', 'sistemas-rango'],
  tags: ['determinante', 'laplace'],
};
