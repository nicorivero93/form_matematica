import type { Tema } from '../tipos';

export const SERIES_POTENCIAS: Tema = {
  slug: 'series-potencias',
  titulo: 'Series de potencias y radio de convergencia',
  anios: ['facultad-analisis-1'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Series de la forma $\\sum a_n (x - x_0)^n$. Tienen un "radio de convergencia" $R$ que define dónde convergen.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Radio de convergencia',
      texto:
        'Existe $R \\in [0, \\infty]$ tal que la serie converge si $|x - x_0| < R$ y diverge si $|x - x_0| > R$. En $|x - x_0| = R$ hay que estudiar caso a caso.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Cómo calcular R',
      texto:
        'Por d\'Alembert: $R = \\lim |a_n / a_{n+1}|$. Por Cauchy: $R = 1 / \\limsup \\sqrt[n]{|a_n|}$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Calcular R',
      enunciado: 'Radio de $\\sum x^n / n$.',
      pasos: [
        { explicacion: '$a_n = 1/n$. $|a_n / a_{n+1}| = (n+1)/n \\to 1$.' },
      ],
      resultado: '$R = 1$.',
    },
  ],
  erroresComunes: [
    'Olvidar estudiar los extremos del intervalo.',
    'Confundir el radio con el centro.',
    'Aplicar criterios sin verificar hipótesis.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado: 'Una serie de potencias converge dentro de su radio.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Radio de $\\sum x^n$ (geométrica).',
        respuesta: 1,
        explicacion: '$R = 1$ porque converge si $|x| < 1$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Una serie de potencias siempre converge en su centro.',
        correcta: true,
        explicacion: 'Cierto: en $x = x_0$ la serie es solo $a_0$.',
      },
    ],
  },
  relacionados: ['polinomio-taylor', 'criterios-convergencia'],
  tags: ['series potencias', 'convergencia', 'radio'],
};
