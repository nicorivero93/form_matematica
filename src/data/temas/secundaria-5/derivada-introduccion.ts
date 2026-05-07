import type { Tema } from '../tipos';

export const DERIVADA_INTRODUCCION: Tema = {
  slug: 'derivada-introduccion',
  titulo: 'Derivada: introducción',
  anios: ['secundaria-5'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'La derivada $f\'(x)$ mide la "tasa de cambio instantánea" de $f$. Geométricamente: pendiente de la recta tangente.',
  teoria: [
    {
      tipo: 'latex',
      latex: 'f\'(x) = \\lim_{h \\to 0} \\dfrac{f(x + h) - f(x)}{h}',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Interpretación',
      texto:
        'Si $s(t)$ es posición, $s\'(t)$ es velocidad. Si $f$ es producción, $f\'$ es velocidad de producción. La derivada mide cuán rápido cambia algo.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Por definición',
      enunciado:
        'Calculá la derivada de $f(x) = x^2$ por definición.',
      pasos: [
        { explicacion: '$f\'(x) = \\lim_{h \\to 0} \\dfrac{(x+h)^2 - x^2}{h}$.' },
        { explicacion: '$= \\lim \\dfrac{2xh + h^2}{h} = \\lim (2x + h) = 2x$.' },
      ],
      resultado: '$f\'(x) = 2x$.',
    },
  ],
  erroresComunes: [
    'Olvidar tomar el límite cuando $h \\to 0$.',
    'Pensar que la derivada es siempre constante.',
    'Confundir derivada con integral.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'La derivada en un punto es la pendiente de la recta tangente al gráfico en ese punto.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'La derivada de una constante es 0.',
        correcta: true,
        explicacion: 'Cierto: una constante no cambia.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'La derivada describe la tasa de cambio instantánea.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['limites-introduccion'],
  tags: ['derivada', 'analisis', 'tasa de cambio'],
};
