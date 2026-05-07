import type { Tema } from '../tipos';

export const ESPACIOS_VECTORIALES: Tema = {
  slug: 'espacios-vectoriales',
  titulo: 'Espacios vectoriales',
  anios: ['facultad-algebra-lineal'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Conjunto $V$ con operaciones de suma y producto por escalar que cumple 8 axiomas (asociatividad, neutro, inverso, distributividad, etc).',
  teoria: [
    {
      tipo: 'lista',
      ordenada: false,
      items: [
        '$\\mathbb{R}^n$ es espacio vectorial.',
        'Polinomios de grado $\\le n$ son espacio vectorial.',
        'Funciones continuas $C[a, b]$ son espacio vectorial.',
        'Matrices $m \\times n$ son espacio vectorial.',
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Subespacio',
      texto:
        'Un subconjunto $W \\subseteq V$ es subespacio si: contiene al 0, es cerrado bajo suma y bajo producto por escalar.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Verificar subespacio',
      enunciado: '¿Es $W = \\{(x, y) : y = 2x\\}$ subespacio de $\\mathbb{R}^2$?',
      pasos: [
        { explicacion: '$(0, 0)$ cumple $0 = 2 \\cdot 0$. ✓' },
        { explicacion: 'Si $(x_1, 2x_1)$ y $(x_2, 2x_2) \\in W$: suma es $(x_1 + x_2, 2x_1 + 2x_2)$. ✓' },
        { explicacion: 'Producto: $(c x, 2cx)$. ✓' },
      ],
      resultado: 'Sí, es subespacio (recta por el origen).',
    },
  ],
  erroresComunes: [
    'No verificar el cero.',
    'Olvidar que la recta debe pasar por el origen para ser subespacio.',
    'Confundir subespacio con subconjunto.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Toda recta en $\\mathbb{R}^2$ es subespacio.',
        correcta: false,
        explicacion: 'Falso. Solo las que pasan por el origen.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          '$\\{0\\}$ es el subespacio trivial.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          '$\\mathbb{R}^n$ es el subespacio de sí mismo.',
        correcta: true,
        explicacion: 'Cierto, todo espacio es subespacio impropio.',
      },
    ],
  },
  relacionados: ['vectores-rn', 'bases-dimension'],
  tags: ['espacios vectoriales', 'subespacio', 'axiomas'],
};
