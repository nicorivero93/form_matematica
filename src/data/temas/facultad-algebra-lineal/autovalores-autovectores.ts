import type { Tema } from '../tipos';

export const AUTOVALORES_AUTOVECTORES: Tema = {
  slug: 'autovalores-autovectores',
  titulo: 'Autovalores y autovectores',
  anios: ['facultad-algebra-lineal'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Un autovector $v \\neq 0$ cumple $A v = \\lambda v$. $\\lambda$ es el autovalor. Se encuentran resolviendo $\\det(A - \\lambda I) = 0$.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Polinomio característico',
      texto:
        '$p(\\lambda) = \\det(A - \\lambda I)$. Sus raíces son los autovalores.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Encontrar autovectores',
      texto:
        'Para cada autovalor $\\lambda$, los autovectores son las soluciones no triviales de $(A - \\lambda I) v = 0$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Encontrar',
      enunciado:
        '$A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$. Autovalores y autovectores.',
      pasos: [
        { explicacion: '$\\det(A - \\lambda I) = (2 - \\lambda)(3 - \\lambda) = 0 \\Rightarrow \\lambda = 2, 3$.' },
        { explicacion: '$\\lambda = 2$: $(A - 2I) v = 0$. Autovector $(1, 0)$.' },
        { explicacion: '$\\lambda = 3$: $(A - 3I) v = 0$. Autovector $(1, 1)$.' },
      ],
      resultado: '$\\lambda_1 = 2$, $v_1 = (1, 0)$. $\\lambda_2 = 3$, $v_2 = (1, 1)$.',
    },
  ],
  erroresComunes: [
    'Olvidar la condición $v \\neq 0$.',
    'Calcular mal el polinomio característico.',
    'Confundir autovalor con autovector.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si $\\lambda = 0$ es autovalor, $A$ es singular.',
        correcta: true,
        explicacion: 'Cierto: $\\det(A) = 0$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Una matriz $n \\times n$ tiene exactamente $n$ autovalores reales.',
        correcta: false,
        explicacion: 'Falso. Pueden ser complejos o repetidos.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si $v$ es autovector, $cv$ (con $c \\neq 0$) también lo es.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['determinantes-n', 'diagonalizacion'],
  tags: ['autovalores', 'autovectores', 'eigenvalues'],
};
