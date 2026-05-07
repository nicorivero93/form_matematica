import type { Tema } from '../tipos';

export const PRODUCTO_INTERNO: Tema = {
  slug: 'producto-interno',
  titulo: 'Producto interno y ángulos',
  anios: ['facultad-algebra-lineal'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    '$\\langle u, v \\rangle = \\|u\\| \\|v\\| \\cos \\alpha$. Permite calcular ángulos y distancias en $\\mathbb{R}^n$.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Cosine de ángulo',
      texto:
        '$\\cos \\alpha = \\dfrac{\\langle u, v \\rangle}{\\|u\\| \\|v\\|}$.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Cauchy-Schwarz',
      texto:
        '$|\\langle u, v \\rangle| \\le \\|u\\| \\|v\\|$. Igualdad si y solo si son colineales.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Ángulo',
      enunciado:
        '$u = (1, 0)$, $v = (1, 1)$. ¿Ángulo entre ellos?',
      pasos: [
        { explicacion: '$\\langle u, v \\rangle = 1$. $\\|u\\| = 1$, $\\|v\\| = \\sqrt{2}$.' },
        { explicacion: '$\\cos \\alpha = 1/\\sqrt{2}$. $\\alpha = 45°$.' },
      ],
      resultado: '45°.',
    },
  ],
  erroresComunes: [
    'Olvidar normalizar antes de calcular el coseno.',
    'Confundir producto interno con producto vectorial.',
    'Tomar arccos sin verificar el rango.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          '$\\langle u, v \\rangle = 0$ si y solo si los vectores son perpendiculares.',
        correcta: true,
        explicacion: 'Cierto (vectores no nulos).',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Cauchy-Schwarz vale para cualquier producto interno.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          '$\\cos$ del ángulo entre dos vectores siempre está en $[-1, 1]$.',
        correcta: true,
        explicacion: 'Cauchy-Schwarz.',
      },
    ],
  },
  relacionados: ['vectores-rn'],
  tags: ['producto interno', 'angulos', 'cauchy schwarz'],
};
