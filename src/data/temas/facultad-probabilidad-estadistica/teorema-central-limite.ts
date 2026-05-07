import type { Tema } from '../tipos';

export const TEOREMA_CENTRAL_LIMITE: Tema = {
  slug: 'teorema-central-limite',
  titulo: 'Teorema central del límite',
  anios: ['facultad-probabilidad-estadistica'],
  area: 'estadistica-probabilidad',
  nivel: 'avanzado',
  resumen:
    'La suma (o promedio) de muchas v.a. independientes con misma distribución se aproxima a una normal, sin importar la distribución original.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'TCL',
      texto:
        'Si $X_1, X_2, ..., X_n$ son iid con media $\\mu$ y varianza $\\sigma^2$, entonces $\\bar X_n \\to N(\\mu, \\sigma^2/n)$ cuando $n \\to \\infty$.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Consecuencia práctica',
      texto:
        'Para $n$ grande (típicamente $n \\ge 30$), $\\bar X$ se puede tratar como normal, aunque las $X_i$ no lo sean.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Aproximación',
      enunciado:
        'Tirás un dado 100 veces. ¿Cuál es la distribución del promedio?',
      pasos: [
        { explicacion: '$E(X) = 3{,}5$, $V(X) = 35/12 \\approx 2{,}92$.' },
        { explicacion: '$\\bar X \\approx N(3{,}5, 2{,}92/100)$. Desvío $\\sqrt{2{,}92/100} \\approx 0{,}17$.' },
      ],
      resultado: '$\\bar X \\approx N(3{,}5, 0{,}17^2)$.',
    },
  ],
  erroresComunes: [
    'Aplicar TCL con $n$ chico.',
    'Olvidar que es la distribución del PROMEDIO o SUMA, no de las $X_i$.',
    'Confundir varianza de la suma con varianza del promedio.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'TCL no requiere que las $X_i$ sean normales.',
        correcta: true,
        explicacion: 'Cierto, ese es el poder del teorema.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'TCL aplica solo a variables continuas.',
        correcta: false,
        explicacion: 'Falso. Aplica a discretas también.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'La varianza del promedio es $\\sigma^2 / n$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['distribucion-normal', 'esperanza-varianza'],
  tags: ['TCL', 'normal', 'limite'],
};
