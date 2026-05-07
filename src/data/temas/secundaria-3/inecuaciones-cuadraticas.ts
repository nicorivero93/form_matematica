import type { Tema } from '../tipos';

export const INECUACIONES_CUADRATICAS: Tema = {
  slug: 'inecuaciones-cuadraticas',
  titulo: 'Inecuaciones cuadráticas',
  anios: ['secundaria-3'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Resolver $ax^2 + bx + c > 0$ (o $<$, $\\le$, $\\ge$) usando el gráfico de la parábola.',
  teoria: [
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Encontrar las raíces de la cuadrática (resolvente).',
        'Determinar la abertura (signo de $a$).',
        'Identificar dónde la parábola es positiva o negativa.',
        'Aplicar la condición de la inecuación.',
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Inecuación',
      enunciado: 'Resolvé $x^2 - x - 6 > 0$.',
      pasos: [
        { explicacion: 'Raíces: factorizando $(x-3)(x+2) = 0 \\Rightarrow x = 3$ o $x = -2$.' },
        { explicacion: 'Como $a > 0$, la parábola abre arriba: positiva fuera de las raíces.' },
        { explicacion: '$x^2 - x - 6 > 0 \\Leftrightarrow x < -2$ o $x > 3$.' },
      ],
      resultado: '$x < -2$ o $x > 3$.',
    },
  ],
  erroresComunes: [
    'Confundir donde la parábola es positiva con donde es negativa.',
    'Olvidar invertir cuando $a < 0$.',
    'Confundir < con $\\le$ (incluir o excluir las raíces).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Resolvé $x^2 - 4 < 0$.',
        opciones: ['$x < -2$ o $x > 2$', '$-2 < x < 2$', '$x > 2$', '$x < 0$'],
        correcta: 1,
        explicacion: 'Raíces $\\pm 2$. La parábola abre arriba, es negativa entre raíces.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si $a > 0$, la cuadrática es positiva fuera de sus raíces.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Una cuadrática sin raíces reales puede ser siempre positiva.',
        correcta: true,
        explicacion: 'Cierto: si $\\Delta < 0$ y $a > 0$.',
      },
    ],
  },
  relacionados: ['ecuaciones-segundo-grado', 'inecuaciones-primer-grado'],
  tags: ['inecuaciones', 'cuadratica'],
};
