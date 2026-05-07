import type { Tema } from '../tipos';

export const LIMITES_VARIAS_VARIABLES: Tema = {
  slug: 'limites-varias-variables',
  titulo: 'Límites en varias variables',
  anios: ['facultad-analisis-2'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'En varias variables, "acercarse" puede ser por infinitos caminos. Si el límite por dos caminos da distinto, el límite NO existe.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Límite en $\\mathbb{R}^2$',
      texto:
        '$\\lim_{(x, y) \\to (a, b)} f(x, y) = L$ si para todo $\\varepsilon$ existe $\\delta$ tal que $\\|(x, y) - (a, b)\\| < \\delta \\Rightarrow |f - L| < \\varepsilon$.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Probar que NO existe',
      texto:
        'Tomar dos caminos distintos hacia $(a, b)$ (rectas, parábolas) y mostrar límites distintos.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Límite no existe',
      enunciado: '$\\lim_{(x, y) \\to (0, 0)} \\dfrac{xy}{x^2 + y^2}$.',
      pasos: [
        { explicacion: 'Por $y = 0$: $f = 0$. Límite 0.' },
        { explicacion: 'Por $y = x$: $f = x^2 / 2x^2 = 1/2$. Límite 1/2.' },
      ],
      resultado: 'No existe.',
    },
  ],
  erroresComunes: [
    'Concluir que el límite existe porque dos caminos dan lo mismo (no es suficiente).',
    'No probar todos los caminos posibles.',
    'Confundir límite por caminos con coordenadas polares.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Para que el límite en varias variables exista, debe ser el mismo por TODOS los caminos.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si el límite por la recta $y = x$ y por $y = 0$ coinciden, el límite existe.',
        correcta: false,
        explicacion: 'Falso. Hay infinitos caminos.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Coordenadas polares (con $r \\to 0$ uniformemente) prueban existencia del límite.',
        correcta: true,
        explicacion: 'Si la dependencia angular se acota, sí.',
      },
    ],
  },
  relacionados: ['funciones-varias-variables'],
  tags: ['limites', 'varias variables'],
};
