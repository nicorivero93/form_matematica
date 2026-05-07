import type { Tema } from '../tipos';

export const PICTOGRAMAS_Y_TABLAS: Tema = {
  slug: 'pictogramas-y-tablas',
  titulo: 'Pictogramas y tablas',
  anios: ['primaria-4'],
  area: 'estadistica-probabilidad',
  nivel: 'intro',
  resumen:
    'Cómo leer datos presentados en una tabla o un pictograma (gráfico con dibujitos).',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Un pictograma es un gráfico que usa dibujitos (pelotas, autos, estrellas, etc.) para mostrar datos. Cada dibujito representa una cantidad fija indicada al costado.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Frecuencia',
      texto:
        'La frecuencia es la cantidad de veces que aparece cada dato. Si en una clase 12 chicos eligen fútbol, la frecuencia de "fútbol" es 12.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Para leer una tabla de frecuencias miramos la columna o la fila correspondiente al dato y vemos su número.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Deporte', 'Cantidad de chicos'],
      filas: [
        ['Fútbol', '12'],
        ['Básquet', '7'],
        ['Vóley', '5'],
        ['Hándbol', '3'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Para sacar el total, sumamos todas las frecuencias. En el ejemplo: 12 + 7 + 5 + 3 = 27 chicos en total.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Leer un pictograma',
      enunciado:
        'Un pictograma de mascotas usa 🐶 = 2 mascotas. Si hay 5 perritos dibujados, ¿cuántas mascotas representa?',
      pasos: [
        { explicacion: 'Cada 🐶 representa 2 mascotas.' },
        { explicacion: 'Hay 5 dibujitos: 5 × 2 = 10.' },
      ],
      resultado: '10 mascotas.',
    },
    {
      titulo: 'Sacar el total de una tabla',
      enunciado:
        'Sumá los chicos de la tabla del ejemplo (Fútbol 12, Básquet 7, Vóley 5, Hándbol 3).',
      pasos: [
        { explicacion: '12 + 7 = 19.' },
        { explicacion: '19 + 5 = 24.' },
        { explicacion: '24 + 3 = 27.' },
      ],
      resultado: '27 chicos en total.',
    },
  ],
  erroresComunes: [
    'No mirar la "leyenda" del pictograma (cuánto vale cada dibujo) y contar los dibujitos como si valieran 1.',
    'Sumar mal cuando hay muchas categorías. Vale la pena hacer la suma con cuidado.',
    'Confundirse al leer una tabla con muchas filas o columnas.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'En un pictograma, cada estrella ⭐ representa 5 puntos. Si hay 7 estrellas, ¿cuántos puntos son?',
        respuesta: 35,
        explicacion: '7 × 5 = 35.',
      },
      {
        tipo: 'multiple',
        enunciado:
          'Si la tabla muestra: Manzanas 8, Bananas 5, Naranjas 11, ¿cuántas frutas hay en total?',
        opciones: ['16', '24', '23', '25'],
        correcta: 1,
        explicacion: '8 + 5 + 11 = 24.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En un pictograma siempre cada dibujito vale 1 unidad.',
        correcta: false,
        explicacion: 'No. Cada pictograma indica cuánto vale cada dibujo, y puede ser 2, 5, 10, etc.',
      },
    ],
  },
  relacionados: [],
  tags: ['estadistica', 'pictograma', 'tablas', 'frecuencia', 'datos'],
};
