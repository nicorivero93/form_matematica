import type { Tema } from '../tipos';

export const SUCESIONES_LIMITES: Tema = {
  slug: 'sucesiones-limites',
  titulo: 'Límites de sucesiones',
  anios: ['secundaria-5'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'A qué número se acerca una sucesión cuando $n$ tiende a infinito. Convergencia y divergencia.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Sucesión', 'Límite'],
      filas: [
        ['$1/n$', '0'],
        ['$1 + 1/n$', '1'],
        ['$n$', '$+\\infty$ (diverge)'],
        ['$(-1)^n$', 'no existe (oscila)'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Convergencia',
      texto:
        'Una sucesión converge si $\\lim_{n \\to \\infty} a_n$ existe y es finito. Si no, diverge.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Convergente',
      enunciado: '¿Hacia dónde tiende $a_n = \\dfrac{2n + 1}{n}$?',
      pasos: [
        { explicacion: 'Dividimos: $2 + 1/n$.' },
        { explicacion: 'Como $1/n \\to 0$, $a_n \\to 2$.' },
      ],
      resultado: '2.',
    },
  ],
  erroresComunes: [
    'Pensar que toda sucesión converge.',
    'Confundir límite con primer término.',
    'No simplificar antes de calcular el límite.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '$\\lim_{n \\to \\infty} \\dfrac{1}{n}$.',
        respuesta: 0,
        explicacion: '$1/n \\to 0$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'La sucesión $a_n = (-1)^n$ converge.',
        correcta: false,
        explicacion: 'Falso. Oscila entre 1 y -1.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Si una sucesión es creciente y acotada, converge.',
        correcta: true,
        explicacion: 'Cierto, teorema de convergencia monótona.',
      },
    ],
  },
  relacionados: ['sucesiones-introduccion', 'limites-introduccion'],
  tags: ['sucesiones', 'limites', 'convergencia'],
};
