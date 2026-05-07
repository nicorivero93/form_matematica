import type { Tema } from '../tipos';

export const PROBABILIDAD_POISSON: Tema = {
  slug: 'probabilidad-poisson',
  titulo: 'Distribución de Poisson',
  anios: ['secundaria-5'],
  area: 'estadistica-probabilidad',
  nivel: 'avanzado',
  resumen:
    'Modela cantidad de eventos raros en un intervalo de tiempo o espacio. Se usa para llamadas al call center, fallas, accidentes.',
  teoria: [
    {
      tipo: 'latex',
      latex: 'P(X = k) = \\dfrac{e^{-\\lambda} \\lambda^k}{k!}',
      display: true,
    },
    {
      tipo: 'parrafo',
      texto:
        'Donde $\\lambda$ es la cantidad promedio de eventos por intervalo y $k$ los que querés calcular.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Llamadas',
      enunciado:
        'En un call center llegan en promedio 5 llamadas/hora. ¿Probabilidad de exactamente 3 llamadas en una hora?',
      pasos: [
        { explicacion: '$\\lambda = 5$, $k = 3$.' },
        {
          explicacion:
            '$P(X = 3) = \\dfrac{e^{-5} \\cdot 5^3}{3!} \\approx \\dfrac{0{,}0067 \\cdot 125}{6} \\approx 0{,}14$.',
        },
      ],
      resultado: '≈ 14%.',
    },
  ],
  erroresComunes: [
    'Aplicar Poisson a casos donde la binomial es más apropiada.',
    'Confundir $\\lambda$ con $k$.',
    'Errores en el cálculo de $e^{-\\lambda}$.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En Poisson, $\\lambda$ es el promedio de eventos por intervalo.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'La distribución de Poisson modela bien eventos raros.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En Poisson la cantidad de eventos puede ser negativa.',
        correcta: false,
        explicacion: 'Falso. Es siempre $\\ge 0$.',
      },
    ],
  },
  relacionados: ['probabilidad-distribuciones', 'probabilidad-normal'],
  tags: ['poisson', 'estadistica', 'distribucion'],
};
