import type { Tema } from '../tipos';

export const PRODUCTOS_NOTABLES: Tema = {
  slug: 'productos-notables',
  titulo: 'Productos notables',
  anios: ['secundaria-2'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Cuadrado de un binomio, cubo de un binomio, y diferencia de cuadrados. Fórmulas que ahorran trabajo.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Producto', 'Resultado'],
      filas: [
        ['$(a + b)^2$', '$a^2 + 2ab + b^2$'],
        ['$(a - b)^2$', '$a^2 - 2ab + b^2$'],
        ['$(a + b)(a - b)$', '$a^2 - b^2$'],
        ['$(a + b)^3$', '$a^3 + 3a^2 b + 3ab^2 + b^3$'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'Un error muy frecuente es escribir $(a + b)^2 = a^2 + b^2$. ¡FALSO! Falta el doble producto $2ab$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Cuadrado de binomio',
      enunciado: 'Desarrollá $(x + 5)^2$.',
      pasos: [
        { explicacion: '$x^2 + 2 \\cdot x \\cdot 5 + 5^2$.' },
        { explicacion: '$= x^2 + 10x + 25$.' },
      ],
      resultado: '$x^2 + 10x + 25$.',
    },
    {
      titulo: 'Diferencia de cuadrados',
      enunciado: 'Desarrollá $(2x + 3)(2x - 3)$.',
      pasos: [
        { explicacion: '$(2x)^2 - 3^2$.' },
        { explicacion: '$= 4x^2 - 9$.' },
      ],
      resultado: '$4x^2 - 9$.',
    },
  ],
  erroresComunes: [
    'Olvidar el doble producto $2ab$ en el cuadrado del binomio.',
    'Confundir $(a-b)^2$ con $a^2 - b^2$.',
    'No cuadrar correctamente cuando hay coeficientes.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '$(x + 3)^2$:',
        opciones: ['$x^2 + 9$', '$x^2 + 6x + 9$', '$x^2 + 3x + 9$', '$2x + 9$'],
        correcta: 1,
        explicacion: '$a^2 + 2ab + b^2$.',
      },
      {
        tipo: 'multiple',
        enunciado: '$(x - 4)(x + 4)$:',
        opciones: ['$x^2 - 16$', '$x^2 + 16$', '$x^2 - 8$', '$x^2 - 8x + 16$'],
        correcta: 0,
        explicacion: 'Diferencia de cuadrados.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$(a + b)^2 = a^2 + b^2$.',
        correcta: false,
        explicacion: 'Falso. Falta el $2ab$.',
      },
    ],
  },
  relacionados: ['polinomios-introduccion', 'monomios'],
  tags: ['productos notables', 'cuadrado de binomio', 'diferencia de cuadrados'],
};
