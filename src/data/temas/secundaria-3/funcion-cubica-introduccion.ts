import type { Tema } from '../tipos';

export const FUNCION_CUBICA_INTRODUCCION: Tema = {
  slug: 'funcion-cubica-introduccion',
  titulo: 'Función cúbica: introducción',
  anios: ['secundaria-3'],
  area: 'funciones',
  nivel: 'avanzado',
  resumen:
    'Funciones $f(x) = ax^3 + bx^2 + cx + d$ con $a \\neq 0$. Su gráfico tiene forma de "S" característica.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Las cúbicas crecen sin límite (si $a > 0$ van de $-\\infty$ a $+\\infty$). Pueden tener 1, 2 o 3 raíces reales. El caso más simple es $f(x) = x^3$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Calcular valores',
      enunciado: 'Si $f(x) = x^3 - 2x$, ¿cuánto vale $f(2)$?',
      pasos: [{ explicacion: '$f(2) = 8 - 4 = 4$.' }],
      resultado: '4.',
    },
  ],
  erroresComunes: [
    'Confundir $f(x) = x^3$ con $f(x) = 3x$.',
    'Pensar que la cúbica siempre es creciente.',
    'Olvidar que el dominio y la imagen son todos los reales.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Si $f(x) = x^3$, ¿cuánto vale $f(-2)$?',
        respuesta: -8,
        explicacion: '$(-2)^3 = -8$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Toda función cúbica con $a > 0$ tiene al menos una raíz real.',
        correcta: true,
        explicacion: 'Cierto: por el comportamiento en infinito, cruza el eje x.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El dominio de toda función cúbica es $\\mathbb{R}$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['funcion-cuadratica-introduccion'],
  tags: ['cubica', 'funciones'],
};
