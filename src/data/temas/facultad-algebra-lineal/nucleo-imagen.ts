import type { Tema } from '../tipos';

export const NUCLEO_IMAGEN: Tema = {
  slug: 'nucleo-imagen',
  titulo: 'Núcleo, imagen y teorema de la dimensión',
  anios: ['facultad-algebra-lineal'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Para $T: V \\to W$: $\\ker T = \\{v : T(v) = 0\\}$. $\\text{Im} T = T(V)$. Dimensión: $\\dim V = \\dim \\ker T + \\dim \\text{Im} T$.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Núcleo (kernel)',
      texto:
        'Conjunto de vectores que se mandan al 0. $\\ker T \\subseteq V$ es subespacio.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Teorema de la dimensión (rank-nullity)',
      texto:
        '$\\dim V = \\dim \\ker T + \\dim \\text{Im} T$.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Si $\\ker T = \\{0\\}$, $T$ es inyectiva. Si $\\text{Im} T = W$, es sobreyectiva. Si ambos: biyectiva (isomorfismo).',
    },
  ],
  ejemplos: [
    {
      titulo: 'Calcular',
      enunciado:
        '$T: \\mathbb{R}^3 \\to \\mathbb{R}^2$, $T(x, y, z) = (x + y, y + z)$. ¿Núcleo?',
      pasos: [
        { explicacion: '$T(x,y,z) = 0 \\Rightarrow x+y = 0, y+z = 0 \\Rightarrow x = -y, z = -y$.' },
        { explicacion: '$\\ker T = \\{(-y, y, -y) : y \\in \\mathbb{R}\\}$, dim 1.' },
      ],
      resultado: '$\\ker T$ es recta de dim 1. Im $T$ tiene dim $3 - 1 = 2$.',
    },
  ],
  erroresComunes: [
    'Confundir núcleo con imagen.',
    'Olvidar que el núcleo siempre incluye al 0.',
    'No aplicar el teorema cuando ayuda.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          '$T$ es inyectiva si y solo si $\\ker T = \\{0\\}$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si $T: \\mathbb{R}^4 \\to \\mathbb{R}^3$ y dim Im T = 3, entonces dim ker T = 1.',
        correcta: true,
        explicacion: '$4 - 3 = 1$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'El núcleo siempre incluye al vector 0.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['transformaciones-lineales', 'sistemas-rango'],
  tags: ['nucleo', 'imagen', 'rank nullity'],
};
