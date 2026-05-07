import type { Tema } from '../tipos';

export const MATEMATICA_FINANCIERA: Tema = {
  slug: 'matematica-financiera',
  titulo: 'Matemática financiera',
  anios: ['secundaria-5'],
  area: 'fracciones-decimales',
  nivel: 'avanzado',
  resumen:
    'Anualidades, valor presente, valor futuro. Préstamos, ahorros, créditos. Aplicación práctica del interés compuesto.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Valor presente',
      texto:
        'El valor presente $VP$ de una cantidad $VF$ que recibirás en $n$ períodos a tasa $i$ es: $VP = \\dfrac{VF}{(1+i)^n}$.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Aplicaciones: comparar préstamos, calcular cuotas, decidir entre invertir o comprar.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Valor presente',
      enunciado:
        'Te ofrecen $1.500 dentro de 3 años. Si la tasa es 8% anual, ¿cuánto vale hoy?',
      pasos: [
        { explicacion: '$VP = 1500 / 1{,}08^3 \\approx 1500 / 1{,}26 \\approx 1190$.' },
      ],
      resultado: '$1.190 hoy.',
    },
  ],
  erroresComunes: [
    'No descontar a la tasa correcta.',
    'Confundir tasa anual con mensual.',
    'Olvidar el período de capitalización.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          '$1 hoy vale más que $1 dentro de un año (con tasa positiva).',
        correcta: true,
        explicacion: 'Cierto, podés invertirlo y crecer.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'El valor presente se calcula descontando al valor futuro.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Una mayor tasa de descuento implica un valor presente mayor.',
        correcta: false,
        explicacion: 'Falso. A mayor tasa, menor valor presente.',
      },
    ],
  },
  relacionados: ['interes-compuesto-aplicaciones', 'interes-simple'],
  tags: ['financiera', 'valor presente', 'descuento'],
};
