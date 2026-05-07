import type { Tema } from '../tipos';

export const PRODUCTO_ESCALAR: Tema = {
  slug: 'producto-escalar',
  titulo: 'Producto escalar de vectores',
  anios: ['secundaria-4'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Producto escalar: $\\vec{u} \\cdot \\vec{v} = u_x v_x + u_y v_y$. También: $|\\vec{u}||\\vec{v}|\\cos \\alpha$.',
  teoria: [
    {
      tipo: 'latex',
      latex: '\\vec{u} \\cdot \\vec{v} = u_x v_x + u_y v_y = |\\vec{u}| |\\vec{v}| \\cos \\alpha',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Si el producto escalar es 0, los vectores son perpendiculares. Si es positivo, forman ángulo agudo; negativo, obtuso.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Calcular',
      enunciado: '$\\vec{u} = (2, 3)$, $\\vec{v} = (-1, 4)$. ¿Producto escalar?',
      pasos: [
        { explicacion: '$2(-1) + 3(4) = -2 + 12 = 10$.' },
      ],
      resultado: '10.',
    },
  ],
  erroresComunes: [
    'Confundir producto escalar con producto componente a componente (vector).',
    'Olvidar que $\\vec{u} \\cdot \\vec{v} = 0$ implica perpendicularidad.',
    'Mezclar magnitud con producto escalar.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '$\\vec{u} = (1, 2)$, $\\vec{v} = (3, 4)$. ¿Producto escalar?',
        respuesta: 11,
        explicacion: '$1 \\cdot 3 + 2 \\cdot 4 = 11$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Si dos vectores son perpendiculares, su producto escalar es 0.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El producto escalar es un vector.',
        correcta: false,
        explicacion: 'Falso. Es un escalar (número).',
      },
    ],
  },
  relacionados: ['vectores-introduccion'],
  tags: ['vectores', 'producto escalar', 'perpendicular'],
};
