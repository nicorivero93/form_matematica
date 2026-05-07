import type { Tema } from '../tipos';

export const INTEGRAL_INTRODUCCION: Tema = {
  slug: 'integral-introduccion',
  titulo: 'Integral indefinida',
  anios: ['secundaria-5'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'La integral es la operación inversa de la derivada. $\\int f(x) \\, dx = F(x) + C$ donde $F\' = f$.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Función', 'Integral'],
      filas: [
        ['$x^n$ ($n \\neq -1$)', '$\\dfrac{x^{n+1}}{n+1} + C$'],
        ['$1/x$', '$\\ln|x| + C$'],
        ['$e^x$', '$e^x + C$'],
        ['$\\sin x$', '$-\\cos x + C$'],
        ['$\\cos x$', '$\\sin x + C$'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'No olvides la "$+ C$" (constante de integración). Como la derivada de una constante es 0, hay infinitas primitivas.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Polinomio',
      enunciado: 'Calculá $\\int (3x^2 - 2x + 1) \\, dx$.',
      pasos: [
        { explicacion: '$\\int 3x^2 = x^3$, $\\int -2x = -x^2$, $\\int 1 = x$.' },
        { explicacion: 'Suma: $x^3 - x^2 + x + C$.' },
      ],
      resultado: '$x^3 - x^2 + x + C$.',
    },
  ],
  erroresComunes: [
    'Olvidar la constante.',
    'Confundir reglas de integración con derivación.',
    'No aumentar el exponente.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '$\\int 4x \\, dx$:',
        opciones: ['$4 + C$', '$2x^2 + C$', '$4x^2 + C$', '$x^2 + C$'],
        correcta: 1,
        explicacion: '$\\int 4x = 4 \\cdot x^2/2 = 2x^2$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Toda función tiene primitiva.',
        correcta: false,
        explicacion: 'Falso. Solo las que cumplen ciertas condiciones (ej: continuas).',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'La integral indefinida tiene infinitas soluciones (que difieren en una constante).',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  visualizadorId: 'area-bajo-curva',
  relacionados: ['derivada-introduccion'],
  tags: ['integral', 'antiderivada', 'analisis'],
};
