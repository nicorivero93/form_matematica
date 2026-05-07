import type { Tema } from '../tipos';

export const DERIVADA_APLICACIONES: Tema = {
  slug: 'derivada-aplicaciones',
  titulo: 'Aplicaciones de la derivada',
  anios: ['secundaria-5'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Encontrar máximos y mínimos, intervalos de crecimiento, recta tangente y problemas de optimización.',
  teoria: [
    {
      tipo: 'lista',
      ordenada: false,
      items: [
        '$f\' > 0$: $f$ crece. $f\' < 0$: $f$ decrece.',
        'En $x_0$: si $f\'(x_0) = 0$ y la derivada cambia de signo, hay extremo.',
        'Recta tangente en $x_0$: $y - f(x_0) = f\'(x_0)(x - x_0)$.',
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Recta tangente',
      enunciado:
        'Encontrá la recta tangente a $f(x) = x^2$ en $x = 3$.',
      pasos: [
        { explicacion: '$f(3) = 9$. $f\'(x) = 2x$, $f\'(3) = 6$.' },
        { explicacion: 'Recta: $y - 9 = 6(x - 3) \\Rightarrow y = 6x - 9$.' },
      ],
      resultado: '$y = 6x - 9$.',
    },
    {
      titulo: 'Mínimo',
      enunciado:
        '¿Dónde tiene mínimo $f(x) = x^2 - 4x + 1$?',
      pasos: [
        { explicacion: '$f\'(x) = 2x - 4 = 0 \\Rightarrow x = 2$.' },
        { explicacion: '$f(2) = -3$.' },
      ],
      resultado: 'Mínimo en $(2, -3)$.',
    },
  ],
  erroresComunes: [
    'No estudiar el signo de la derivada para identificar extremos.',
    'Confundir máximo con mínimo.',
    'Olvidar las condiciones de la recta tangente.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si $f\'(x_0) = 0$ siempre hay extremo en $x_0$.',
        correcta: false,
        explicacion: 'Falso. También puede ser punto silla. Hay que ver cambio de signo.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En un máximo local, la derivada antes es positiva y después negativa.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si $f\' > 0$ en un intervalo, $f$ crece en ese intervalo.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['reglas-derivacion'],
  tags: ['derivada', 'aplicaciones', 'optimizacion'],
};
