import type { Tema } from '../tipos';

export const TEOREMA_THALES_INTRODUCCION: Tema = {
  slug: 'teorema-thales-introduccion',
  titulo: 'Teorema de Thales: introducción',
  anios: ['secundaria-1'],
  area: 'geometria',
  nivel: 'avanzado',
  resumen:
    'Cuando varias paralelas cortan a dos transversales, los segmentos que se forman son proporcionales.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Enunciado',
      texto:
        'Si tres o más rectas paralelas son cortadas por dos transversales, los segmentos que determinan en una transversal son proporcionales a los segmentos que determinan en la otra.',
    },
    {
      tipo: 'latex',
      latex: '\\dfrac{AB}{BC} = \\dfrac{A\'B\'}{B\'C\'}',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Aplicación',
      texto:
        'Sirve para encontrar medidas desconocidas y demostrar semejanza de triángulos.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Encontrar segmento desconocido',
      enunciado:
        'Tres paralelas cortan dos transversales. AB = 3, BC = 6, A\'B\' = 4. ¿Cuánto vale B\'C\'?',
      pasos: [
        { explicacion: 'Aplicamos: 3/6 = 4/x.' },
        { explicacion: 'Producto cruzado: 3x = 24 → x = 8.' },
      ],
      resultado: 'B\'C\' = 8.',
    },
  ],
  erroresComunes: [
    'No identificar correctamente segmentos correspondientes.',
    'Plantear la proporción al revés.',
    'Aplicar el teorema sin que las rectas sean paralelas.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          '$AB = 5$, $BC = 10$, $A\'B\' = 4$. ¿Cuánto es $B\'C\'$?',
        respuesta: 8,
        explicacion: '5/10 = 4/x → x = 8.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El teorema de Thales requiere que las rectas sean paralelas.',
        correcta: true,
        explicacion: 'Cierto. Sin paralelismo no se cumple.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El teorema permite encontrar segmentos desconocidos por proporcionalidad.',
        correcta: true,
        explicacion: 'Es exactamente para eso.',
      },
    ],
  },
  relacionados: ['proporcionalidad-directa', 'semejanza-introduccion'],
  tags: ['thales', 'paralelas', 'proporcionalidad'],
};
