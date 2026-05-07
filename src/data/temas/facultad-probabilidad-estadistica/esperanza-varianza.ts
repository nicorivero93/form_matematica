import type { Tema } from '../tipos';

export const ESPERANZA_VARIANZA: Tema = {
  slug: 'esperanza-varianza',
  titulo: 'Esperanza y varianza',
  anios: ['facultad-probabilidad-estadistica'],
  area: 'estadistica-probabilidad',
  nivel: 'avanzado',
  resumen:
    'Esperanza $E(X) = \\sum x p(x)$ (discreta) o $\\int x f(x) \\, dx$ (continua). Varianza $V(X) = E[(X - E X)^2]$.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Propiedad', 'Fórmula'],
      filas: [
        ['Linealidad de esperanza', '$E(aX + bY) = a E(X) + b E(Y)$'],
        ['Varianza', '$V(X) = E(X^2) - (E(X))^2$'],
        ['$V(aX)$', '$a^2 V(X)$'],
        ['$V(X + Y)$', '$V(X) + V(Y)$ si independientes'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Dado',
      enunciado:
        'Esperanza y varianza de $X$ = resultado al tirar un dado.',
      pasos: [
        { explicacion: '$E(X) = (1+2+3+4+5+6)/6 = 3{,}5$.' },
        { explicacion: '$E(X^2) = (1+4+9+16+25+36)/6 = 91/6$.' },
        { explicacion: '$V(X) = 91/6 - 12{,}25 = 35/12 \\approx 2{,}92$.' },
      ],
      resultado: '$E = 3{,}5$, $V \\approx 2{,}92$.',
    },
  ],
  erroresComunes: [
    'Confundir $E(X^2)$ con $(E(X))^2$.',
    'No usar linealidad cuando aplica.',
    'Olvidar que $V(X + Y) = V(X) + V(Y)$ requiere independencia.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'La esperanza es lineal: $E(X + Y) = E(X) + E(Y)$ siempre.',
        correcta: true,
        explicacion: 'Cierto, sin requerir independencia.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          '$V(2X) = 2V(X)$.',
        correcta: false,
        explicacion: 'Falso. $V(2X) = 4 V(X)$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'La varianza siempre es no negativa.',
        correcta: true,
        explicacion: 'Cierto, es esperanza de un cuadrado.',
      },
    ],
  },
  relacionados: ['variables-aleatorias-discretas', 'variables-aleatorias-continuas'],
  tags: ['esperanza', 'varianza', 'momentos'],
};
