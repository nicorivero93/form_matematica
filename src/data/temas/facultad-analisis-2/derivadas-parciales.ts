import type { Tema } from '../tipos';

export const DERIVADAS_PARCIALES: Tema = {
  slug: 'derivadas-parciales',
  titulo: 'Derivadas parciales',
  anios: ['facultad-analisis-2'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    '$\\partial f/\\partial x$ es la derivada considerando $y$ constante. Mide la razón de cambio en una sola dirección.',
  teoria: [
    {
      tipo: 'latex',
      latex: '\\dfrac{\\partial f}{\\partial x}(x_0, y_0) = \\lim_{h \\to 0} \\dfrac{f(x_0 + h, y_0) - f(x_0, y_0)}{h}',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Cómo calcular',
      texto:
        'Tratá las otras variables como constantes y derivá respecto de la que te importa. Las reglas (suma, producto, cadena) valen igual.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Calcular',
      enunciado: '$f(x, y) = x^2 y + 3y^3$. Calculá $\\partial f / \\partial x$ y $\\partial f / \\partial y$.',
      pasos: [
        { explicacion: '$\\partial f / \\partial x$: tratamos $y$ constante. $= 2xy$.' },
        { explicacion: '$\\partial f / \\partial y$: tratamos $x$ constante. $= x^2 + 9y^2$.' },
      ],
      resultado: '$\\partial_x f = 2xy$, $\\partial_y f = x^2 + 9y^2$.',
    },
  ],
  erroresComunes: [
    'Tratar todas las variables como variables al mismo tiempo.',
    'Confundir derivada parcial con total.',
    'Olvidar la regla de la cadena en composiciones.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '$f(x, y) = xy + y^2$. $\\partial f / \\partial y$ es:',
        opciones: ['$x$', '$y + 2y$', '$x + 2y$', '$xy + 2y$'],
        correcta: 2,
        explicacion: '$x$ del primer término más $2y$ del segundo.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Las parciales de $f(x, y) = e^{xy}$ son $\\partial_x f = y e^{xy}$ y $\\partial_y f = x e^{xy}$.',
        correcta: true,
        explicacion: 'Cierto, regla de la cadena.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En $f(x, y, z)$ hay 3 derivadas parciales.',
        correcta: true,
        explicacion: 'Una por cada variable.',
      },
    ],
  },
  relacionados: ['funciones-varias-variables', 'gradiente'],
  tags: ['parciales', 'analisis II'],
};
