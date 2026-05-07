import type { Tema } from '../tipos';

export const NUMEROS_REALES_INTRODUCCION: Tema = {
  slug: 'numeros-reales-introduccion',
  titulo: 'Números reales',
  anios: ['secundaria-3'],
  area: 'numeros-y-operaciones',
  nivel: 'intermedio',
  resumen:
    'Los números reales incluyen racionales (fracciones, decimales finitos o periódicos) e irracionales (decimales infinitos no periódicos como π y $\\sqrt{2}$).',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Conjuntos numéricos',
      texto:
        '$\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$. Los reales agrupan todo: naturales, enteros, racionales e irracionales.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Irracional',
      texto:
        'Un número irracional NO se puede escribir como fracción $a/b$. Sus decimales son infinitos y no periódicos. Ejemplos: $\\pi$, $\\sqrt{2}$, $e$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar tipo',
      enunciado: 'Clasificá: 5; -3,5; $\\sqrt{2}$; $\\pi$; 0,333... (periódico)',
      pasos: [
        { explicacion: '5: natural, entero, racional, real.' },
        { explicacion: '-3,5: racional (= -7/2).' },
        { explicacion: '$\\sqrt{2}$: irracional.' },
        { explicacion: '$\\pi$: irracional.' },
        { explicacion: '0,333... = 1/3: racional.' },
      ],
      resultado: 'Todos son reales; sólo $\\sqrt{2}$ y $\\pi$ son irracionales.',
    },
  ],
  erroresComunes: [
    'Pensar que los decimales periódicos son irracionales (son racionales).',
    'Pensar que $\\sqrt{4}$ es irracional ($\\sqrt{4} = 2$, racional).',
    'Confundir "real" con "natural".',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál NO es real?',
        opciones: ['$\\pi$', '$\\sqrt{-1}$', '$\\sqrt{3}$', '0,5'],
        correcta: 1,
        explicacion: 'Raíz de número negativo no es real.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Todo número racional es real.',
        correcta: true,
        explicacion: 'Cierto: $\\mathbb{Q} \\subset \\mathbb{R}$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$\\sqrt{9}$ es irracional.',
        correcta: false,
        explicacion: '$\\sqrt{9} = 3$, racional.',
      },
    ],
  },
  relacionados: ['racionales-introduccion', 'raices-cuadradas'],
  tags: ['reales', 'irracionales', 'racionales', 'conjuntos numericos'],
};
