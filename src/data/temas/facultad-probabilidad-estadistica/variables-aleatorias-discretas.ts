import type { Tema } from '../tipos';

export const VARIABLES_ALEATORIAS_DISCRETAS: Tema = {
  slug: 'variables-aleatorias-discretas',
  titulo: 'Variables aleatorias discretas',
  anios: ['facultad-probabilidad-estadistica'],
  area: 'estadistica-probabilidad',
  nivel: 'avanzado',
  resumen:
    'Asignan un número a cada resultado del experimento. Si toma valores numerables (finito o infinito numerable), es discreta.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Función de probabilidad puntual',
      texto:
        '$p(x) = P(X = x)$. Cumple $p(x) \\ge 0$ y $\\sum p(x) = 1$.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Distribución', 'Cuándo'],
      filas: [
        ['Bernoulli', 'Un ensayo con éxito/fracaso'],
        ['Binomial', '$n$ ensayos Bernoulli'],
        ['Poisson', 'Eventos raros en intervalo'],
        ['Geométrica', 'Cantidad de ensayos hasta primer éxito'],
        ['Uniforme discreta', 'Resultados igualmente probables'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Probabilidad puntual',
      enunciado:
        'Tirás un dado. Si $X$ es el resultado, ¿$P(X = 4)$?',
      pasos: [
        { explicacion: 'Uniforme discreta sobre $\\{1, ..., 6\\}$. $P(X = 4) = 1/6$.' },
      ],
      resultado: '$1/6$.',
    },
  ],
  erroresComunes: [
    'No verificar que las probabilidades sumen 1.',
    'Confundir variable aleatoria con experimento.',
    'Mezclar discreta con continua.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En una v.a. discreta, $\\sum p(x) = 1$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Una v.a. con infinitos valores posibles no puede ser discreta.',
        correcta: false,
        explicacion: 'Falso. Puede ser numerable infinita (Poisson, geométrica).',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si $X$ es Bernoulli con probabilidad de éxito $p$, $P(X = 1) = p$.',
        correcta: true,
        explicacion: 'Por definición.',
      },
    ],
  },
  relacionados: ['probabilidad-axiomatica', 'esperanza-varianza'],
  tags: ['variable aleatoria', 'discreta', 'distribuciones'],
};
