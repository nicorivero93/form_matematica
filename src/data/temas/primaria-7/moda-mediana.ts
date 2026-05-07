import type { Tema } from '../tipos';

export const MODA_MEDIANA: Tema = {
  slug: 'moda-mediana',
  titulo: 'Moda y mediana',
  anios: ['primaria-7'],
  area: 'estadistica-probabilidad',
  nivel: 'intermedio',
  resumen:
    'Dos medidas estadísticas además del promedio: la moda (el valor más frecuente) y la mediana (el valor del medio).',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Moda',
      texto:
        'La moda es el valor que más se repite en un conjunto de datos. Puede haber más de una moda, o ninguna si todos los valores son distintos.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Mediana',
      texto:
        'La mediana es el valor que queda en el medio cuando ordenás los datos de menor a mayor. Si hay cantidad par de datos, es el promedio de los dos del medio.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La moda, mediana y promedio son tres medidas de "tendencia central". A veces dan resultados muy distintos: la moda y mediana no se ven afectadas por valores extremos, pero el promedio sí.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Moda',
      enunciado:
        'En las notas 7, 8, 7, 9, 7, 6, ¿cuál es la moda?',
      pasos: [
        { explicacion: 'Contamos: 7 aparece 3 veces, los demás solo 1.' },
      ],
      resultado: 'Moda: 7.',
    },
    {
      titulo: 'Mediana con cantidad impar',
      enunciado:
        'Mediana de 3, 5, 7, 9, 11.',
      pasos: [
        { explicacion: 'Datos ya ordenados. Hay 5 valores.' },
        { explicacion: 'El del medio es el 3°: 7.' },
      ],
      resultado: 'Mediana: 7.',
    },
    {
      titulo: 'Mediana con cantidad par',
      enunciado:
        'Mediana de 4, 6, 8, 10.',
      pasos: [
        { explicacion: 'Hay 4 datos: los del medio son el 2° y 3° (6 y 8).' },
        { explicacion: 'Promedio: (6 + 8) ÷ 2 = 7.' },
      ],
      resultado: 'Mediana: 7.',
    },
  ],
  erroresComunes: [
    'No ordenar los datos antes de calcular la mediana.',
    'Confundir moda con mediana o con promedio.',
    'Olvidar promediar los dos del medio cuando la cantidad es par.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Moda de: 5, 7, 7, 8, 9, 7, 5.',
        respuesta: 7,
        explicacion: 'El 7 aparece 3 veces, los demás menos.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Mediana de: 3, 8, 5, 1, 9 (ordená primero).',
        respuesta: 5,
        explicacion: 'Ordenado: 1,3,5,8,9. El del medio es 5.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En un conjunto de datos puede haber dos modas.',
        correcta: true,
        explicacion: 'Sí. Si dos valores aparecen con la misma frecuencia (la máxima), hay dos modas.',
      },
    ],
  },
  relacionados: ['promedio'],
  tags: ['estadistica', 'moda', 'mediana', 'tendencia central'],
};
