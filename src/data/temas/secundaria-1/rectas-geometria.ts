import type { Tema } from '../tipos';

export const RECTAS_GEOMETRIA: Tema = {
  slug: 'rectas-geometria',
  titulo: 'Rectas: posiciones relativas',
  anios: ['secundaria-1'],
  area: 'geometria',
  nivel: 'intro',
  resumen:
    'Cómo dos rectas pueden estar entre sí: paralelas, perpendiculares, secantes oblicuas o coincidentes.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Posición', 'Característica'],
      filas: [
        ['Paralelas', 'No se cortan nunca. Distancia constante.'],
        ['Perpendiculares', 'Se cortan formando 4 ángulos de 90°.'],
        ['Secantes oblicuas', 'Se cortan formando ángulos distintos de 90°.'],
        ['Coincidentes', 'Son la misma recta.'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Notación',
      texto:
        'Paralelas: $r \\parallel s$. Perpendiculares: $r \\perp s$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar paralelas',
      enunciado: '¿Dos rectas que nunca se tocan, son paralelas?',
      pasos: [{ explicacion: 'Sí, esa es la definición de paralelas (en el plano).' }],
      resultado: 'Sí, paralelas.',
    },
    {
      titulo: 'Perpendiculares',
      enunciado:
        'Dos rectas se cortan formando un ángulo de 90°. ¿Cómo son los otros 3 ángulos?',
      pasos: [
        { explicacion: 'Como suman 360° en total y el primero es 90°...' },
        { explicacion: 'Los 4 ángulos son de 90°.' },
      ],
      resultado: 'Los 4 son rectos.',
    },
  ],
  erroresComunes: [
    'Confundir "se cortan en algún momento" con "no son paralelas". Si se cortan, no son paralelas.',
    'Pensar que perpendicular = vertical. La perpendicularidad es entre dos rectas, no algo absoluto.',
    'Olvidar que dos rectas paralelas pueden estar muy cerca o muy lejos.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Dos rectas que nunca se cortan son:',
        opciones: ['Perpendiculares', 'Paralelas', 'Secantes', 'Coincidentes'],
        correcta: 1,
        explicacion: 'Por definición.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Dos rectas perpendiculares forman cuatro ángulos de 90°.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Dos rectas pueden ser paralelas y perpendiculares al mismo tiempo.',
        correcta: false,
        explicacion: 'Falso. Si son perpendiculares se cortan, así que no pueden ser paralelas.',
      },
    ],
  },
  relacionados: ['angulos-rectas-paralelas'],
  tags: ['rectas', 'paralelas', 'perpendiculares', 'secantes'],
};
