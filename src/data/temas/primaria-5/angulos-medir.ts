import type { Tema } from '../tipos';

export const ANGULOS_MEDIR: Tema = {
  slug: 'angulos-medir',
  titulo: 'Medir ángulos en grados',
  anios: ['primaria-5'],
  area: 'geometria',
  nivel: 'intermedio',
  resumen:
    'Cómo medir un ángulo con transportador y cuánto miden los ángulos rectos, agudos y obtusos.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Los ángulos se miden en grados (símbolo °). Una vuelta entera tiene 360°. Un ángulo recto tiene 90°.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Tipo', 'Medida'],
      filas: [
        ['Recto', '90°'],
        ['Agudo', 'menos de 90°'],
        ['Obtuso', 'entre 90° y 180°'],
        ['Llano', '180°'],
        ['Vuelta completa', '360°'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Transportador',
      texto:
        'El transportador es un instrumento semicircular con una escala del 0° al 180°. Lo apoyás sobre uno de los lados del ángulo y leés cuántos grados marca el otro lado.',
    },
    {
      tipo: 'parrafo',
      texto: 'Pasos para medir un ángulo con transportador:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Apoyar el centro del transportador (la marca del medio) sobre el vértice del ángulo.',
        'Alinear uno de los lados con el 0°.',
        'Leer la medida donde corta el otro lado.',
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Sumar ángulos',
      enunciado: 'Si un ángulo mide 45° y otro 35°, ¿cuánto suman?',
      pasos: [{ explicacion: '45° + 35° = 80°.' }, { explicacion: 'Sigue siendo agudo (menos de 90°).' }],
      resultado: '80°.',
    },
    {
      titulo: 'Ángulo complementario',
      enunciado: 'Dos ángulos suman 90° (son complementarios). Si uno mide 35°, ¿cuánto mide el otro?',
      pasos: [{ explicacion: '90° - 35° = 55°.' }],
      resultado: '55°.',
    },
    {
      titulo: 'Ángulo suplementario',
      enunciado:
        'Dos ángulos suman 180° (son suplementarios). Uno mide 110°. ¿Cuánto mide el otro?',
      pasos: [{ explicacion: '180° - 110° = 70°.' }],
      resultado: '70°.',
    },
  ],
  erroresComunes: [
    'Apoyar el transportador en el lado del ángulo en vez del vértice.',
    'Leer la escala equivocada. El transportador tiene dos escalas (una de izquierda a derecha y otra al revés). Hay que mirar la que arranca en el lado alineado al 0°.',
    'Confundir complementario (suma 90°) con suplementario (suma 180°).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Dos ángulos son complementarios (suman 90°). Uno mide 25°. ¿Cuánto mide el otro?',
        respuesta: 65,
        explicacion: '90° - 25° = 65°.',
        unidad: '°',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Dos ángulos son suplementarios (suman 180°). Uno mide 47°. ¿Cuánto mide el otro?',
        respuesta: 133,
        explicacion: '180° - 47° = 133°.',
        unidad: '°',
      },
      {
        tipo: 'multiple',
        enunciado: 'Un ángulo de 110° es:',
        opciones: ['Agudo', 'Recto', 'Obtuso', 'Llano'],
        correcta: 2,
        explicacion: 'Está entre 90° y 180° → obtuso.',
      },
    ],
  },
  relacionados: ['angulos-introduccion', 'suma-angulos-triangulo'],
  tags: ['angulos', 'medir', 'transportador', 'grados', 'complementario', 'suplementario'],
};
