import type { Tema } from '../tipos';

export const PROBABILIDAD_CONDICIONAL: Tema = {
  slug: 'probabilidad-condicional',
  titulo: 'Probabilidad condicional',
  anios: ['secundaria-2'],
  area: 'estadistica-probabilidad',
  nivel: 'avanzado',
  resumen:
    'La probabilidad de que ocurra A sabiendo que ya ocurrió B. Notación $P(A|B)$.',
  teoria: [
    {
      tipo: 'latex',
      latex: 'P(A | B) = \\dfrac{P(A \\cap B)}{P(B)}',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Cuando saber que ocurrió B cambia la probabilidad de A, decimos que A y B no son independientes.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Caso simple',
      enunciado:
        'Tirás 2 dados. ¿Probabilidad de que la suma sea 7 dado que el primer dado salió 4?',
      pasos: [
        { explicacion: 'Si el primero salió 4, el segundo debe ser 3 para sumar 7.' },
        { explicacion: 'P = 1/6.' },
      ],
      resultado: '1/6.',
    },
  ],
  erroresComunes: [
    'Confundir $P(A|B)$ con $P(A \\cap B)$.',
    'Olvidar dividir por $P(B)$.',
    'Mezclar condiciones.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado:
          'Si $P(A \\cap B) = 0{,}2$ y $P(B) = 0{,}5$, ¿$P(A|B)$?',
        opciones: ['0,1', '0,4', '0,7', '0,25'],
        correcta: 1,
        explicacion: '$0{,}2 / 0{,}5 = 0{,}4$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Si A y B son independientes, $P(A|B) = P(A)$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$P(A|B)$ y $P(B|A)$ son siempre iguales.',
        correcta: false,
        explicacion: 'Falso. Generalmente son distintas.',
      },
    ],
  },
  relacionados: ['probabilidad-eventos', 'probabilidad-aplicaciones'],
  tags: ['probabilidad', 'condicional', 'independientes'],
};
