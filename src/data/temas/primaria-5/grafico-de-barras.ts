import type { Tema } from '../tipos';

export const GRAFICO_DE_BARRAS: Tema = {
  slug: 'grafico-de-barras',
  titulo: 'Gráfico de barras',
  anios: ['primaria-5'],
  area: 'estadistica-probabilidad',
  nivel: 'intro',
  resumen:
    'Cómo leer y armar un gráfico de barras: cada barra representa una categoría y su altura, la frecuencia.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Un gráfico de barras muestra datos usando rectángulos. La altura (o el largo) de cada barra representa la cantidad de cada categoría.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Eje x y eje y',
      texto:
        'El eje horizontal (x) suele tener las categorías. El eje vertical (y) tiene la escala numérica con las frecuencias.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Para leer un gráfico de barras: ubicá la barra de la categoría que te interesa y mirá hasta qué número de la escala llega.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'En un gráfico bien hecho, las barras tienen el mismo ancho y dejan un espacio entre ellas. La escala arranca en 0 y aumenta de a saltos iguales (1, 2, 3 o 5, 10, 15, etc.).',
    },
  ],
  ejemplos: [
    {
      titulo: 'Comparar barras',
      enunciado:
        'En un gráfico de barras: deportes favoritos. Fútbol llega hasta 12, Básquet hasta 7, Vóley hasta 5. ¿Cuántos chicos hay en total?',
      pasos: [
        { explicacion: 'La altura de cada barra es la frecuencia de cada categoría.' },
        { explicacion: 'Sumamos las frecuencias: 12 + 7 + 5 = 24.' },
      ],
      resultado: '24 chicos.',
    },
    {
      titulo: 'Diferencia',
      enunciado:
        'En el gráfico anterior, ¿cuánta diferencia hay entre la categoría más popular y la menos popular?',
      pasos: [
        { explicacion: 'Más popular: Fútbol (12).' },
        { explicacion: 'Menos popular: Vóley (5).' },
        { explicacion: 'Diferencia: 12 - 5 = 7.' },
      ],
      resultado: '7 chicos de diferencia.',
    },
  ],
  erroresComunes: [
    'No prestar atención a la escala: si arranca en 50 en lugar de 0, las diferencias parecen mayores de lo que son.',
    'Confundir el eje x con el eje y.',
    'Sumar mal cuando hay muchas barras.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado:
          'Un gráfico de barras muestra: lunes 30, martes 25, miércoles 40, jueves 15. ¿Qué día tuvo más?',
        opciones: ['Lunes', 'Martes', 'Miércoles', 'Jueves'],
        correcta: 2,
        explicacion: 'Miércoles tiene 40, la barra más alta.',
      },
      {
        tipo: 'numerica',
        enunciado:
          '¿Cuál es el total de visitas si las 4 barras son: lunes 30, martes 25, miércoles 40, jueves 15?',
        respuesta: 110,
        explicacion: '30 + 25 + 40 + 15 = 110.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En un gráfico de barras, todas las barras deben tener el mismo ancho.',
        correcta: true,
        explicacion: 'Sí. Si tuvieran ancho distinto, sería más difícil comparar.',
      },
    ],
  },
  relacionados: ['pictogramas-y-tablas'],
  tags: ['estadistica', 'grafico', 'barras', 'frecuencia', 'datos'],
};
