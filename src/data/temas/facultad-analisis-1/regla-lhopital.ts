import type { Tema } from '../tipos';

export const REGLA_LHOPITAL: Tema = {
  slug: 'regla-lhopital',
  titulo: 'Regla de L\'Hôpital',
  anios: ['facultad-analisis-1'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Para indeterminaciones $\\tfrac{0}{0}$ o $\\tfrac{\\infty}{\\infty}$: $\\lim \\dfrac{f}{g} = \\lim \\dfrac{f\'}{g\'}$ si el segundo existe.',
  teoria: [
    {
      tipo: 'latex',
      latex: '\\lim_{x \\to a} \\dfrac{f(x)}{g(x)} = \\lim_{x \\to a} \\dfrac{f\'(x)}{g\'(x)}',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      titulo: 'Cuándo aplicar',
      texto:
        'SOLO si la forma original es indeterminada $\\tfrac{0}{0}$ o $\\tfrac{\\infty}{\\infty}$. Para otras indeterminaciones ($0 \\cdot \\infty$, $\\infty - \\infty$, $1^\\infty$) hay que reescribir antes.',
    },
  ],
  ejemplos: [
    {
      titulo: '$\\tfrac{0}{0}$',
      enunciado: 'Calculá $\\lim_{x \\to 0} \\dfrac{\\sin x}{x}$.',
      pasos: [
        { explicacion: 'Forma $\\tfrac{0}{0}$. Aplicamos L\'Hôpital.' },
        { explicacion: '$\\lim \\dfrac{\\cos x}{1} = \\cos 0 = 1$.' },
      ],
      resultado: '1.',
    },
    {
      titulo: 'Aplicación reiterada',
      enunciado: 'Calculá $\\lim_{x \\to 0} \\dfrac{1 - \\cos x}{x^2}$.',
      pasos: [
        { explicacion: 'Forma $\\tfrac{0}{0}$. L\'Hôpital: $\\lim \\dfrac{\\sin x}{2x}$.' },
        { explicacion: 'Otra vez $\\tfrac{0}{0}$. L\'Hôpital: $\\lim \\dfrac{\\cos x}{2} = 1/2$.' },
      ],
      resultado: '$1/2$.',
    },
  ],
  erroresComunes: [
    'Aplicar L\'Hôpital cuando NO hay indeterminación.',
    'Derivar usando la regla del cociente en vez de derivar arriba y abajo por separado.',
    'No reescribir indeterminaciones tipo $0 \\cdot \\infty$ antes de aplicar.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'L\'Hôpital se puede aplicar si el límite es $\\tfrac{0}{5}$.',
        correcta: false,
        explicacion: 'Falso. No hay indeterminación, el límite es 0.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Para usar L\'Hôpital, la forma debe ser $\\tfrac{0}{0}$ o $\\tfrac{\\infty}{\\infty}$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Después de aplicar L\'Hôpital una vez, si todavía hay indeterminación, podés volver a aplicar.',
        correcta: true,
        explicacion: 'Cierto, mientras siga $\\tfrac{0}{0}$ o $\\tfrac{\\infty}{\\infty}$.',
      },
    ],
  },
  relacionados: ['teorema-valor-medio', 'limites-formales'],
  tags: ['lhopital', 'limite', 'indeterminacion'],
};
