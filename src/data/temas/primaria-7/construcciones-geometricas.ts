import type { Tema } from '../tipos';

export const CONSTRUCCIONES_GEOMETRICAS: Tema = {
  slug: 'construcciones-geometricas',
  titulo: 'Construcciones con regla y compás',
  anios: ['primaria-7'],
  area: 'geometria',
  nivel: 'intermedio',
  resumen:
    'Cómo trazar segmentos, perpendiculares, paralelas, mediatrices y triángulos usando solo regla y compás.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'En geometría clásica trabajamos con dos herramientas: la regla (sin números, solo para trazar líneas rectas) y el compás (para medir distancias y trazar arcos).',
    },
    {
      tipo: 'tabla',
      encabezados: ['Construcción', 'Cómo'],
      filas: [
        ['Copiar un segmento', 'Compás del largo del segmento, marcar arco desde un extremo de la nueva recta.'],
        ['Bisectriz de un ángulo', 'Arcos desde el vértice y desde donde se cortan los lados; unir el cruce con el vértice.'],
        ['Mediatriz de un segmento', 'Arcos del mismo radio (más de la mitad del segmento) desde cada extremo; unir los cruces.'],
        ['Perpendicular en un punto', 'Arcos a cada lado del punto y luego mediatriz del segmento entre ellos.'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Mediatriz',
      texto:
        'La mediatriz de un segmento es la recta perpendicular al segmento que pasa por su punto medio.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Bisectriz',
      texto:
        'La bisectriz de un ángulo es la semirrecta que parte del vértice y divide al ángulo en dos partes iguales.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Construir un triángulo dados los lados',
      enunciado: 'Construir un triángulo de lados 5 cm, 7 cm y 9 cm.',
      pasos: [
        { explicacion: 'Trazar un segmento AB de 9 cm.' },
        {
          explicacion:
            'Con compás abierto a 5 cm desde A, trazar un arco. Con compás abierto a 7 cm desde B, trazar otro arco.',
        },
        {
          explicacion:
            'Donde los arcos se cortan está el vértice C. Unir C con A y con B.',
        },
      ],
      resultado: 'Triángulo de lados 5, 7 y 9 cm.',
    },
    {
      titulo: 'Mediatriz',
      enunciado: 'Construir la mediatriz de un segmento AB.',
      pasos: [
        {
          explicacion:
            'Abrir el compás más de la mitad de AB. Trazar arcos desde A y desde B.',
        },
        {
          explicacion:
            'Los arcos se cortan en dos puntos. Unirlos: esa es la mediatriz.',
        },
      ],
      resultado: 'Recta perpendicular a AB que pasa por su punto medio.',
    },
  ],
  erroresComunes: [
    'Cambiar la abertura del compás entre arcos cuando no se debe.',
    'Trazar la "mediana" en lugar de la mediatriz (la mediana va a un vértice opuesto).',
    'Olvidar que la regla del compás no tiene números: la regla común se usa solo para trazar.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'La mediatriz de un segmento:',
        opciones: [
          'pasa por uno de los extremos',
          'es paralela al segmento',
          'es perpendicular y pasa por el punto medio',
          'forma 45° con el segmento',
        ],
        correcta: 2,
        explicacion: 'Por definición la mediatriz es perpendicular y pasa por el punto medio.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Qué divide al ángulo en dos partes iguales?',
        opciones: ['Mediatriz', 'Bisectriz', 'Mediana', 'Altura'],
        correcta: 1,
        explicacion: 'La bisectriz.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Tres lados cualesquiera siempre forman un triángulo.',
        correcta: false,
        explicacion:
          'No. La suma de dos lados debe ser mayor que el tercero (desigualdad triangular).',
      },
    ],
  },
  relacionados: ['triangulos-clasificacion', 'angulos-medir'],
  tags: ['geometria', 'regla', 'compas', 'mediatriz', 'bisectriz', 'construcciones'],
};
