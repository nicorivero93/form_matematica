import type { Tema } from '../tipos';

export const MATRICES_OPERACIONES: Tema = {
  slug: 'matrices-operaciones',
  titulo: 'Matrices: producto y propiedades',
  anios: ['facultad-algebra-lineal'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'El producto $A \\cdot B$ requiere que las dimensiones encajen ($m \\times n$ por $n \\times p$). NO es conmutativo en general.',
  teoria: [
    {
      tipo: 'latex',
      latex: '(AB)_{ij} = \\sum_k A_{ik} B_{kj}',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      titulo: 'No es conmutativo',
      texto:
        '$AB \\neq BA$ en general. Incluso si ambos están definidos, los resultados pueden ser distintos.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Producto $2 \\times 2$',
      enunciado:
        '$A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$, $B = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$.',
      pasos: [
        { explicacion: '$(AB)_{11} = 1 \\cdot 0 + 2 \\cdot 1 = 2$.' },
        { explicacion: '$(AB)_{12} = 1$. $(AB)_{21} = 4$. $(AB)_{22} = 3$.' },
      ],
      resultado: '$AB = \\begin{pmatrix} 2 & 1 \\\\ 4 & 3 \\end{pmatrix}$.',
    },
  ],
  erroresComunes: [
    'Multiplicar componente a componente (eso no es producto matricial).',
    'Asumir conmutatividad.',
    'Confundir dimensiones requeridas.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Para multiplicar $A$ ($m \\times n$) por $B$ ($p \\times q$), se requiere $n = p$.',
        correcta: true,
        explicacion: 'Sí.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En general $AB = BA$.',
        correcta: false,
        explicacion: 'Falso.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si $A$ es $3 \\times 4$ y $B$ es $4 \\times 2$, $AB$ es $3 \\times 2$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['determinantes-n', 'sistemas-rango'],
  tags: ['matrices', 'producto'],
};
