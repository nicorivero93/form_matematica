import type { Tema } from '../tipos';

export const ECUACIONES_SEGUNDO_GRADO: Tema = {
  slug: 'ecuaciones-segundo-grado',
  titulo: 'Ecuaciones de segundo grado',
  anios: ['secundaria-3'],
  area: 'algebra',
  nivel: 'intermedio',
  resumen:
    'Ecuaciones de la forma $ax^2 + bx + c = 0$. Se resuelven con la fórmula resolvente.',
  teoria: [
    {
      tipo: 'latex',
      latex: 'x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Discriminante',
      texto:
        '$\\Delta = b^2 - 4ac$. Si $\\Delta > 0$ hay 2 soluciones reales. Si $\\Delta = 0$, hay 1 sola. Si $\\Delta < 0$, no hay soluciones reales.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Resolvente',
      latex: 'x_{1,2} = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
      variables: [
        { simbolo: 'a', nombre: 'coeficiente cuadrático', desc: 'no puede ser 0' },
        { simbolo: 'b', nombre: 'coeficiente lineal', desc: '' },
        { simbolo: 'c', nombre: 'término independiente', desc: '' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Resolver',
      enunciado: '$x^2 - 5x + 6 = 0$.',
      pasos: [
        { explicacion: 'a=1, b=-5, c=6.' },
        { explicacion: '$\\Delta = 25 - 24 = 1$.' },
        { explicacion: '$x = (5 \\pm 1)/2$.' },
        { explicacion: '$x_1 = 3$, $x_2 = 2$.' },
      ],
      resultado: '$x = 2$ o $x = 3$.',
    },
    {
      titulo: 'Sin soluciones reales',
      enunciado: '$x^2 + x + 1 = 0$.',
      pasos: [
        { explicacion: '$\\Delta = 1 - 4 = -3 < 0$.' },
      ],
      resultado: 'No tiene soluciones reales.',
    },
  ],
  erroresComunes: [
    'Olvidar el "$\\pm$" y obtener solo una solución.',
    'Confundir el signo de $b$ en la fórmula.',
    'Multiplicar mal $4ac$.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Una raíz de $x^2 - 7x + 12 = 0$.',
        respuesta: 4,
        explicacion: 'Las raíces son 3 y 4.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Discriminante de $x^2 + 6x + 9 = 0$.',
        respuesta: 0,
        explicacion: '$36 - 36 = 0$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Si $\\Delta = 0$, la ecuación tiene exactamente 1 solución (doble).',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  visualizadorId: 'graficador-cuadratica',
  relacionados: ['funcion-cuadratica-introduccion', 'productos-notables'],
  tags: ['ecuaciones', 'segundo grado', 'cuadratica', 'resolvente'],
};
