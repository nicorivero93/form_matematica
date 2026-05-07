import type { Tema } from '../tipos';

export const EXTREMOS_VARIAS_VARIABLES: Tema = {
  slug: 'extremos-varias-variables',
  titulo: 'Máximos y mínimos en varias variables',
  anios: ['facultad-analisis-2'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'En puntos críticos $\\nabla f = 0$. El criterio del Hessiano clasifica: máximo, mínimo o punto silla.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Hessiano',
      texto:
        '$H(x, y) = \\det \\begin{pmatrix} f_{xx} & f_{xy} \\\\ f_{yx} & f_{yy} \\end{pmatrix} = f_{xx} f_{yy} - f_{xy}^2$.',
    },
    {
      tipo: 'tabla',
      encabezados: ['$H$', '$f_{xx}$', 'Tipo'],
      filas: [
        ['$> 0$', '$> 0$', 'Mínimo local'],
        ['$> 0$', '$< 0$', 'Máximo local'],
        ['$< 0$', '—', 'Punto silla'],
        ['$= 0$', '—', 'Indeterminado (analizar más)'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Clasificar',
      enunciado:
        '$f(x, y) = x^2 + y^2$. ¿Punto crítico y tipo?',
      pasos: [
        { explicacion: '$\\nabla f = (2x, 2y) = 0 \\Rightarrow (0, 0)$.' },
        { explicacion: '$f_{xx} = 2$, $f_{yy} = 2$, $f_{xy} = 0$. $H = 4 > 0$, $f_{xx} > 0$.' },
      ],
      resultado: 'Mínimo local en (0, 0).',
    },
  ],
  erroresComunes: [
    'No incluir el cuadrado en $f_{xy}^2$.',
    'Confundir punto silla con extremo.',
    'No analizar más cuando $H = 0$.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si $H > 0$ y $f_{xx} > 0$, hay mínimo local.',
        correcta: true,
        explicacion: 'Criterio del Hessiano.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si $H < 0$, el punto crítico es punto silla.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Punto crítico siempre es máximo o mínimo.',
        correcta: false,
        explicacion: 'Falso. Puede ser silla.',
      },
    ],
  },
  relacionados: ['gradiente', 'multiplicadores-lagrange'],
  tags: ['extremos', 'hessiano', 'punto silla'],
};
