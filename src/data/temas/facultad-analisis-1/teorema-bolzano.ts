import type { Tema } from '../tipos';

export const TEOREMA_BOLZANO: Tema = {
  slug: 'teorema-bolzano',
  titulo: 'Teorema de Bolzano y valor intermedio',
  anios: ['facultad-analisis-1'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Si $f$ es continua en $[a, b]$ y $f(a) \\cdot f(b) < 0$, entonces existe $c \\in (a, b)$ con $f(c) = 0$.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Bolzano',
      texto:
        'Si $f: [a, b] \\to \\mathbb{R}$ es continua y $f(a)$ y $f(b)$ tienen signos opuestos, entonces existe al menos un cero en $(a, b)$.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Valor intermedio (TVI)',
      texto:
        'Si $f$ es continua en $[a, b]$ y $k$ está entre $f(a)$ y $f(b)$, existe $c \\in [a, b]$ con $f(c) = k$. Bolzano es el caso $k = 0$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Probar existencia de raíz',
      enunciado:
        'Probar que $x^3 - x - 1 = 0$ tiene una raíz en $(1, 2)$.',
      pasos: [
        { explicacion: '$f(x) = x^3 - x - 1$ es continua (polinomio).' },
        { explicacion: '$f(1) = -1 < 0$, $f(2) = 5 > 0$.' },
        { explicacion: 'Por Bolzano, existe $c \\in (1, 2)$ con $f(c) = 0$.' },
      ],
      resultado: 'Hay raíz en $(1, 2)$.',
    },
  ],
  erroresComunes: [
    'Olvidar que se necesita continuidad.',
    'Pensar que da unicidad (Bolzano da existencia).',
    'No verificar que los signos sean opuestos.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado: 'Bolzano garantiza unicidad de la raíz.',
        correcta: false,
        explicacion: 'Falso. Solo garantiza existencia de al menos una.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'TVI requiere que la función sea continua.',
        correcta: true,
        explicacion: 'Sí.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si $f$ es continua en $[1, 4]$, $f(1) = -2$, $f(4) = 5$, entonces $f$ toma el valor 3 en algún punto.',
        correcta: true,
        explicacion: 'TVI con $k = 3$ entre $-2$ y $5$.',
      },
    ],
  },
  relacionados: ['continuidad-uniforme', 'limites-formales'],
  tags: ['bolzano', 'valor intermedio', 'continuidad'],
};
