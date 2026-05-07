import type { Tema } from '../tipos';

export const PLANO_CARTESIANO_PUNTOS: Tema = {
  slug: 'plano-cartesiano-puntos',
  titulo: 'Plano cartesiano y puntos',
  anios: ['secundaria-1'],
  area: 'algebra',
  nivel: 'intro',
  resumen:
    'Ubicación, identificación y movimiento de puntos en el plano cartesiano. Distancia entre puntos sobre los ejes.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Un punto del plano se identifica con un par ordenado $(x, y)$. La primera coordenada se llama abscisa (x) y la segunda ordenada (y).',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Distancia sobre un eje',
      texto:
        'Si dos puntos tienen la misma $y$, la distancia entre ellos es $|x_2 - x_1|$. Si tienen la misma $x$, es $|y_2 - y_1|$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar punto',
      enunciado: '¿Dónde está $A = (-3, 5)$?',
      pasos: [
        { explicacion: 'x = -3 → 3 unidades a la izquierda del origen.' },
        { explicacion: 'y = 5 → 5 unidades hacia arriba.' },
        { explicacion: 'Cuadrante II.' },
      ],
      resultado: 'Cuadrante II, 3 a la izquierda y 5 arriba.',
    },
    {
      titulo: 'Distancia entre puntos alineados',
      enunciado: '¿Distancia entre $A=(2, 3)$ y $B=(2, -4)$?',
      pasos: [
        { explicacion: 'Tienen la misma x → están alineados verticalmente.' },
        { explicacion: 'Distancia: $|3 - (-4)| = 7$.' },
      ],
      resultado: '7 unidades.',
    },
  ],
  erroresComunes: [
    'Confundir orden de coordenadas: $(x, y)$, no $(y, x)$.',
    'Calcular distancia mal con coordenadas negativas.',
    'No identificar correctamente el cuadrante.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿En qué cuadrante está $(-2, -7)$?',
        opciones: ['I', 'II', 'III', 'IV'],
        correcta: 2,
        explicacion: 'Ambas negativas → III.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Distancia entre $(1, 5)$ y $(8, 5)$.',
        respuesta: 7,
        explicacion: 'Misma y, $|8-1|=7$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El punto $(0, -3)$ está sobre el eje y.',
        correcta: true,
        explicacion: 'x = 0 → está sobre el eje y.',
      },
    ],
  },
  visualizadorId: 'plano-cartesiano',
  relacionados: ['plano-cartesiano-intro'],
  tags: ['plano cartesiano', 'puntos', 'coordenadas', 'distancia'],
};
