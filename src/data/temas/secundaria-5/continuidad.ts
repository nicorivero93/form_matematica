import type { Tema } from '../tipos';

export const CONTINUIDAD: Tema = {
  slug: 'continuidad',
  titulo: 'Continuidad de funciones',
  anios: ['secundaria-5'],
  area: 'analisis',
  nivel: 'intermedio',
  resumen:
    'Una función es continua en $a$ si el límite existe, $f(a)$ existe y son iguales. Si no, hay discontinuidad.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Continuidad',
      texto:
        '$f$ es continua en $a$ si: 1) $f(a)$ está definido. 2) $\\lim_{x \\to a} f(x)$ existe. 3) Son iguales.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Tipo de discontinuidad', 'Característica'],
      filas: [
        ['Evitable', 'Hay agujero pero el límite existe.'],
        ['Salto', 'Los límites laterales son distintos.'],
        ['Esencial', 'Algún límite no existe (infinito o no acotado).'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Continuidad',
      enunciado: '¿Es $f(x) = x^2$ continua en $x = 3$?',
      pasos: [
        { explicacion: '$f(3) = 9$. $\\lim_{x \\to 3} f(x) = 9$. Iguales.' },
      ],
      resultado: 'Sí, es continua.',
    },
  ],
  erroresComunes: [
    'Pensar que toda función es continua.',
    'Confundir tipos de discontinuidad.',
    'No verificar las 3 condiciones.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado: 'Toda función polinómica es continua en todo $\\mathbb{R}$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Una función a tramos puede ser discontinua en los puntos de unión.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          '$\\dfrac{1}{x}$ es continua en $x = 0$.',
        correcta: false,
        explicacion: 'Falso. Tiene asíntota en 0.',
      },
    ],
  },
  relacionados: ['limites-introduccion', 'funciones-asintotas'],
  tags: ['continuidad', 'analisis'],
};
