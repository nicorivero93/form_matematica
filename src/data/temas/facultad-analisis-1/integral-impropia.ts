import type { Tema } from '../tipos';

export const INTEGRAL_IMPROPIA: Tema = {
  slug: 'integral-impropia',
  titulo: 'Integrales impropias',
  anios: ['facultad-analisis-1'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Integrales sobre intervalos infinitos o de funciones no acotadas. Se definen como límites: $\\int_a^\\infty f = \\lim_{b \\to \\infty} \\int_a^b f$.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Tipo', 'Definición'],
      filas: [
        ['$\\int_a^\\infty f$', '$\\lim_{b \\to \\infty} \\int_a^b f$'],
        ['$\\int_{-\\infty}^a f$', '$\\lim_{b \\to -\\infty} \\int_b^a f$'],
        ['$\\int f$ con discontinuidad en $c$', '$\\lim_{\\epsilon \\to 0} \\int_a^{c-\\epsilon} f + \\lim ...$'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Convergencia / divergencia',
      texto:
        'Si el límite existe finito, la integral converge. Si no, diverge. Hay criterios de comparación similares a los de series.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Convergente',
      enunciado: 'Calculá $\\int_1^\\infty \\dfrac{1}{x^2} \\, dx$.',
      pasos: [
        { explicacion: '$\\int_1^b 1/x^2 \\, dx = -1/x \\Big|_1^b = 1 - 1/b$.' },
        { explicacion: '$\\lim_{b \\to \\infty} (1 - 1/b) = 1$.' },
      ],
      resultado: 'Converge a 1.',
    },
    {
      titulo: 'Divergente',
      enunciado: '$\\int_1^\\infty 1/x \\, dx$.',
      pasos: [
        { explicacion: '$\\int 1/x = \\ln x$.' },
        { explicacion: '$\\lim_{b \\to \\infty} \\ln b = \\infty$.' },
      ],
      resultado: 'Diverge.',
    },
  ],
  erroresComunes: [
    'Olvidar que la integral impropia es un LÍMITE, no una integral común.',
    'Confundir convergencia con que el integrando tienda a 0 (no es suficiente).',
    'No descomponer integrales con discontinuidad interior.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          '$\\int_1^\\infty 1/x^p \\, dx$ converge si $p > 1$ y diverge si $p \\le 1$.',
        correcta: true,
        explicacion: 'Resultado clásico (criterio de la $p$).',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si $f(x) \\to 0$ cuando $x \\to \\infty$, entonces $\\int_a^\\infty f$ converge.',
        correcta: false,
        explicacion: 'Falso. Contraejemplo: $f(x) = 1/x$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          '$\\int_0^1 1/\\sqrt{x} \\, dx$ converge.',
        correcta: true,
        explicacion: 'Sí, vale 2.',
      },
    ],
  },
  relacionados: ['integral-riemann', 'metodos-integracion'],
  tags: ['integral impropia', 'convergencia'],
};
