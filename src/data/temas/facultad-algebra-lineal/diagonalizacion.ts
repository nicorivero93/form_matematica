import type { Tema } from '../tipos';

export const DIAGONALIZACION: Tema = {
  slug: 'diagonalizacion',
  titulo: 'Diagonalización',
  anios: ['facultad-algebra-lineal'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    '$A$ es diagonalizable si existe $P$ invertible y $D$ diagonal con $A = P D P^{-1}$. Útil para calcular potencias y resolver sistemas dinámicos.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Cuándo se puede',
      texto:
        '$A$ ($n \\times n$) es diagonalizable sii tiene $n$ autovectores LI. Equivalente: la suma de las multiplicidades geométricas es $n$.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Cómo construir',
      texto:
        'En las columnas de $P$ van los autovectores. En la diagonal de $D$ van los autovalores correspondientes.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Diagonalizar',
      enunciado:
        '$A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$ del tema anterior.',
      pasos: [
        { explicacion: 'Autovalores: 2 y 3. Autovectores: $(1, 0)$ y $(1, 1)$.' },
        { explicacion: '$P = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$, $D = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$.' },
      ],
      resultado: '$A = P D P^{-1}$.',
    },
  ],
  erroresComunes: [
    'Pensar que toda matriz es diagonalizable.',
    'Olvidar el orden: en $P$ las columnas son autovectores en el mismo orden que los autovalores en $D$.',
    'Confundir multiplicidad algebraica con geométrica.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Una matriz con $n$ autovalores distintos es siempre diagonalizable.',
        correcta: true,
        explicacion: 'Cierto: cada autovalor genera un autovector LI.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si $A = PDP^{-1}$, entonces $A^k = PD^kP^{-1}$.',
        correcta: true,
        explicacion: 'Cierto: las P se cancelan.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Toda matriz simétrica es diagonalizable.',
        correcta: true,
        explicacion: 'Cierto. Teorema espectral.',
      },
    ],
  },
  relacionados: ['autovalores-autovectores'],
  tags: ['diagonalizacion', 'autovalores'],
};
