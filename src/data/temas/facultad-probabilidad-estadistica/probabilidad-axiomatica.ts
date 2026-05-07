import type { Tema } from '../tipos';

export const PROBABILIDAD_AXIOMATICA: Tema = {
  slug: 'probabilidad-axiomatica',
  titulo: 'Probabilidad axiomática (Kolmogorov)',
  anios: ['facultad-probabilidad-estadistica'],
  area: 'estadistica-probabilidad',
  nivel: 'avanzado',
  resumen:
    'Espacio muestral $\\Omega$, sigma-álgebra $\\mathcal{F}$ de eventos, medida $P$ que cumple 3 axiomas: no negativa, $P(\\Omega) = 1$, sigma-aditiva.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Axiomas de Kolmogorov',
      texto:
        '1) $P(A) \\ge 0$ para todo evento $A$. 2) $P(\\Omega) = 1$. 3) Si $A_1, A_2, ...$ son disjuntos, $P(\\bigcup A_i) = \\sum P(A_i)$.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Consecuencias: $P(\\emptyset) = 0$, $P(A^c) = 1 - P(A)$, $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ (inclusión-exclusión).',
    },
  ],
  ejemplos: [
    {
      titulo: 'Inclusión-exclusión',
      enunciado:
        '$P(A) = 0{,}5$, $P(B) = 0{,}4$, $P(A \\cap B) = 0{,}2$. ¿$P(A \\cup B)$?',
      pasos: [
        { explicacion: '$0{,}5 + 0{,}4 - 0{,}2 = 0{,}7$.' },
      ],
      resultado: '0,7.',
    },
  ],
  erroresComunes: [
    'Sumar $P(A) + P(B)$ sin restar la intersección.',
    'Olvidar que $P$ requiere ser sigma-aditiva, no solo aditiva.',
    'Confundir eventos con elementos del espacio muestral.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En probabilidad, $P(\\emptyset) = 0$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'numerica',
        enunciado:
          '$P(A) = 0{,}3$, $P(A^c)$.',
        respuesta: 0.7,
        tolerancia: 0.001,
        explicacion: '$1 - 0{,}3 = 0{,}7$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si $A \\subseteq B$, $P(A) \\le P(B)$.',
        correcta: true,
        explicacion: 'Cierto: monotonía.',
      },
    ],
  },
  relacionados: ['variables-aleatorias-discretas'],
  tags: ['probabilidad', 'kolmogorov', 'axiomas'],
};
