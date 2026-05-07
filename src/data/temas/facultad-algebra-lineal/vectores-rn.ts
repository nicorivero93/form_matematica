import type { Tema } from '../tipos';

export const VECTORES_RN: Tema = {
  slug: 'vectores-rn',
  titulo: 'Vectores en $\\mathbb{R}^n$',
  anios: ['facultad-algebra-lineal'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Vectores con $n$ componentes: $\\vec v = (v_1, ..., v_n)$. Suma, multiplicación por escalar, norma, producto interno.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Operación', 'Definición'],
      filas: [
        ['Suma', '$(u + v)_i = u_i + v_i$'],
        ['Por escalar', '$(c v)_i = c \\cdot v_i$'],
        ['Producto interno', '$\\langle u, v \\rangle = \\sum u_i v_i$'],
        ['Norma', '$\\|v\\| = \\sqrt{\\langle v, v \\rangle}$'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Distancia',
      texto: '$d(u, v) = \\|u - v\\|$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Operaciones',
      enunciado:
        '$u = (1, 2, 3)$, $v = (4, -1, 0)$. Producto interno y norma de $u$.',
      pasos: [
        { explicacion: '$\\langle u, v \\rangle = 4 - 2 + 0 = 2$.' },
        { explicacion: '$\\|u\\| = \\sqrt{1 + 4 + 9} = \\sqrt{14}$.' },
      ],
      resultado: '$\\langle u, v \\rangle = 2$, $\\|u\\| = \\sqrt{14}$.',
    },
  ],
  erroresComunes: [
    'Sumar vectores de tamaños distintos.',
    'Confundir producto interno con producto componente a componente.',
    'Olvidar la raíz en la norma.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          '$\\langle (2, 3), (-1, 4) \\rangle$.',
        respuesta: 10,
        explicacion: '$-2 + 12 = 10$.',
      },
      {
        tipo: 'numerica',
        enunciado:
          '$\\|(3, 4)\\|$.',
        respuesta: 5,
        explicacion: '$\\sqrt{9 + 16} = 5$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Dos vectores son ortogonales si su producto interno es 0.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['producto-interno', 'matrices-operaciones'],
  tags: ['vectores', 'Rn', 'norma'],
};
