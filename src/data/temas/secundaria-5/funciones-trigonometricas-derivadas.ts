import type { Tema } from '../tipos';

export const FUNCIONES_TRIGONOMETRICAS_DERIVADAS: Tema = {
  slug: 'funciones-trigonometricas-derivadas',
  titulo: 'Derivadas de funciones trigonométricas',
  anios: ['secundaria-5'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Reglas: $(\\sin x)\' = \\cos x$, $(\\cos x)\' = -\\sin x$, $(\\tan x)\' = \\sec^2 x$.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Función', 'Derivada'],
      filas: [
        ['$\\sin x$', '$\\cos x$'],
        ['$\\cos x$', '$-\\sin x$'],
        ['$\\tan x$', '$\\sec^2 x$'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Con regla de la cadena',
      texto:
        '$(\\sin(g(x)))\' = \\cos(g(x)) \\cdot g\'(x)$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Composición',
      enunciado: 'Derivá $f(x) = \\sin(3x)$.',
      pasos: [
        { explicacion: 'Cadena: $\\cos(3x) \\cdot 3 = 3\\cos(3x)$.' },
      ],
      resultado: '$3 \\cos(3x)$.',
    },
  ],
  erroresComunes: [
    'Olvidar la regla de la cadena.',
    'Confundir $\\sin\'$ con $\\cos$ o al revés.',
    'No conservar el signo en derivada de $\\cos$.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado: '$(\\cos x)\' = -\\sin x$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Derivada de $\\sin(2x)$ es $2 \\cos(2x)$.',
        correcta: true,
        explicacion: 'Cierto, regla de la cadena.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$\\sin x$ es función impar.',
        correcta: true,
        explicacion: 'Cierto, $\\sin(-x) = -\\sin x$.',
      },
    ],
  },
  relacionados: ['reglas-derivacion', 'funciones-trigonometricas'],
  tags: ['derivadas', 'trigonometria'],
};
