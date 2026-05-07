import type { Tema } from '../tipos';

export const PROBABILIDAD_DISTRIBUCIONES: Tema = {
  slug: 'probabilidad-distribuciones',
  titulo: 'Variables aleatorias y distribución binomial',
  anios: ['secundaria-4'],
  area: 'estadistica-probabilidad',
  nivel: 'avanzado',
  resumen:
    'Una variable aleatoria asigna un número a cada resultado. La distribución binomial cuenta éxitos en $n$ intentos.',
  teoria: [
    {
      tipo: 'latex',
      latex: 'P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}',
      display: true,
    },
    {
      tipo: 'parrafo',
      texto:
        'Donde $n$ es la cantidad de intentos, $k$ los éxitos, $p$ la probabilidad de éxito en uno.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Probabilidad binomial',
      enunciado:
        'Tirás una moneda 4 veces. ¿Probabilidad de obtener exactamente 2 caras?',
      pasos: [
        { explicacion: 'n=4, k=2, p=0,5.' },
        { explicacion: '$\\binom{4}{2} = 6$. $0{,}5^2 \\times 0{,}5^2 = 0{,}0625$.' },
        { explicacion: '$P = 6 \\times 0{,}0625 = 0{,}375$.' },
      ],
      resultado: '37,5%.',
    },
  ],
  erroresComunes: [
    'No usar la combinatoria.',
    'Confundir éxitos con probabilidad.',
    'Olvidar el factor de probabilidad de fracasos.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En binomial, la probabilidad de éxito $p$ es constante en cada intento.',
        correcta: true,
        explicacion: 'Cierto, son ensayos independientes.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'La media de una binomial con $n$ intentos y prob $p$ es $np$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Tirar un dado 10 veces y contar los 6 es una variable binomial.',
        correcta: true,
        explicacion: 'Cierto: éxito = "salir 6", $p = 1/6$.',
      },
    ],
  },
  relacionados: ['combinatoria-introduccion', 'probabilidad-aplicaciones'],
  tags: ['probabilidad', 'binomial', 'variable aleatoria'],
};
