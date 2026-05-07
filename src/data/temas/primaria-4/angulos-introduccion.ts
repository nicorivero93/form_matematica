import type { Tema } from '../tipos';

export const ANGULOS_INTRODUCCION: Tema = {
  slug: 'angulos-introduccion',
  titulo: 'Ángulos: introducción',
  anios: ['primaria-4'],
  area: 'geometria',
  nivel: 'intro',
  resumen:
    'Qué es un ángulo y cómo clasificarlo en agudo, recto, obtuso o llano.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Un ángulo se forma cuando dos líneas rectas (o lados) se cruzan en un punto. La "abertura" entre esas dos líneas es el ángulo.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Vértice y lados',
      texto:
        'El punto donde se juntan las dos líneas se llama vértice. Las dos líneas son los lados del ángulo.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Tipo', 'Cómo es', 'Ejemplo'],
      filas: [
        ['Recto', 'Como una "L". Esquina perfecta.', 'Esquina de una hoja.'],
        ['Agudo', 'Más cerrado que un ángulo recto.', 'Punta de un triángulo equilátero.'],
        ['Obtuso', 'Más abierto que un ángulo recto.', 'Casi una línea, pero todavía no.'],
        ['Llano', 'Una línea recta.', 'Una mesa vista de costado.'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Para reconocer un ángulo recto, podés usar la esquina de una hoja o un libro. Si encaja perfecto, es recto.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar el tipo de ángulo',
      enunciado:
        'Mirás un reloj que marca las 3:00 en punto. ¿Qué tipo de ángulo forman las agujas?',
      pasos: [
        {
          explicacion:
            'A las 3:00, la aguja chica apunta al 3 y la grande al 12. Forman una "L" perfecta.',
        },
        { explicacion: 'Esa "L" es un ángulo recto.' },
      ],
      resultado: 'Ángulo recto.',
    },
    {
      titulo: 'Comparar dos ángulos',
      enunciado: '¿Cuál es más grande: un ángulo agudo o uno obtuso?',
      pasos: [
        { explicacion: 'Un ángulo agudo es más cerrado que un recto.' },
        { explicacion: 'Un ángulo obtuso es más abierto que un recto.' },
        {
          explicacion:
            'Por lo tanto, el obtuso es más grande que el agudo.',
        },
      ],
      resultado: 'El obtuso es más grande.',
    },
  ],
  erroresComunes: [
    'Decir que un ángulo es "recto" solo porque parece derecho. Hay que comparar con la esquina de una hoja.',
    'Confundir agudo con obtuso (cuál era el más cerrado y cuál el más abierto).',
    'Pensar que un ángulo se mide por el largo de los lados. El largo no importa, solo importa la abertura.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Un ángulo más cerrado que un ángulo recto se llama:',
        opciones: ['Obtuso', 'Agudo', 'Llano', 'Plano'],
        correcta: 1,
        explicacion: 'Agudo: más cerrado que recto. Obtuso: más abierto que recto.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Qué tipo de ángulo forma una línea recta?',
        opciones: ['Recto', 'Llano', 'Agudo', 'Obtuso'],
        correcta: 1,
        explicacion:
          'Un ángulo llano es como una línea recta: las dos líneas están en la misma dirección.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'El largo de los lados de un ángulo afecta cuán grande es el ángulo.',
        correcta: false,
        explicacion:
          'No. El largo no importa. Solo importa la abertura entre los dos lados.',
      },
    ],
  },
  relacionados: ['figuras-planas'],
  tags: ['angulos', 'recto', 'agudo', 'obtuso', 'llano', 'geometria'],
};
