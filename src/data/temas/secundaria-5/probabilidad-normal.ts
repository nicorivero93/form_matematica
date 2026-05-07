import type { Tema } from '../tipos';

export const PROBABILIDAD_NORMAL: Tema = {
  slug: 'probabilidad-normal',
  titulo: 'Distribución normal',
  anios: ['secundaria-5'],
  area: 'estadistica-probabilidad',
  nivel: 'avanzado',
  resumen:
    'La distribución normal o "campana de Gauss" describe muchas variables del mundo real (alturas, errores, calificaciones).',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Distribución normal',
      texto:
        'Se caracteriza por su media $\\mu$ y desvío estándar $\\sigma$. Es simétrica respecto a la media.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Regla 68-95-99,7',
      texto:
        'Aproximadamente: 68% de los datos están a 1$\\sigma$ de la media, 95% a 2$\\sigma$, y 99,7% a 3$\\sigma$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Aplicar regla',
      enunciado:
        'Alturas con $\\mu = 170$ cm y $\\sigma = 10$ cm. ¿Qué % de la población tiene entre 160 y 180?',
      pasos: [
        { explicacion: '160 y 180 están a 1σ de la media.' },
        { explicacion: 'Por regla 68-95-99,7: ≈ 68%.' },
      ],
      resultado: '≈ 68%.',
    },
  ],
  erroresComunes: [
    'Confundir media con desvío.',
    'Aplicar la regla a distribuciones que no son normales.',
    'Olvidar la simetría.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado: 'La distribución normal es simétrica respecto a la media.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Aproximadamente el 95% de los datos están a 2 desvíos de la media.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En la normal, media, mediana y moda son iguales.',
        correcta: true,
        explicacion: 'Cierto, por simetría.',
      },
    ],
  },
  relacionados: ['estadistica-dispersion', 'probabilidad-distribuciones'],
  tags: ['normal', 'gauss', 'estadistica'],
};
