import type { Tema } from '../tipos';

export const ESTADISTICA_CORRELACION: Tema = {
  slug: 'estadistica-correlacion',
  titulo: 'Correlación y regresión lineal',
  anios: ['secundaria-5'],
  area: 'estadistica-probabilidad',
  nivel: 'avanzado',
  resumen:
    'Cuando dos variables están relacionadas, la correlación mide la fuerza. La regresión lineal busca la mejor recta que ajusta los datos.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Coeficiente de correlación r',
      texto:
        'Va de -1 a 1. Cerca de 1: fuerte y positiva. Cerca de -1: fuerte y negativa. Cerca de 0: poca o ninguna.',
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'Correlación NO implica causalidad. Que dos variables estén correlacionadas no significa que una cause la otra.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Interpretar correlación',
      enunciado:
        'Si entre horas estudiadas y nota se obtiene $r = 0{,}85$, ¿qué interpretás?',
      pasos: [
        { explicacion: 'Correlación positiva fuerte: a más horas, mejores notas.' },
        { explicacion: 'Pero ojo: no significa que más horas siempre causen mejor nota.' },
      ],
      resultado: 'Fuerte correlación positiva.',
    },
  ],
  erroresComunes: [
    'Confundir correlación con causalidad.',
    'No interpretar el signo de $r$.',
    'Pensar que $r = 0$ significa "sin relación" (puede haber relación no lineal).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado: 'Un $r$ de -0,9 indica correlación fuerte.',
        correcta: true,
        explicacion: 'Cierto, fuerte y negativa.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Correlación implica causalidad.',
        correcta: false,
        explicacion: 'Falso. Pueden estar correlacionadas por una causa común o por azar.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'La regresión lineal es la recta que mejor ajusta los datos.',
        correcta: true,
        explicacion: 'Cierto, minimizando los cuadrados de errores.',
      },
    ],
  },
  relacionados: ['estadistica-medidas', 'estadistica-dispersion'],
  tags: ['correlacion', 'regresion', 'estadistica'],
};
