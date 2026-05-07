import type { Tema } from '../tipos';

export const ESTADISTICA_MEDIDAS: Tema = {
  slug: 'estadistica-medidas',
  titulo: 'Medidas de tendencia central',
  anios: ['secundaria-1'],
  area: 'estadistica-probabilidad',
  nivel: 'intermedio',
  resumen:
    'Media aritmética, moda y mediana. Cuál usar según el caso. Tablas de frecuencias.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Medida', 'Cómo se calcula', 'Cuándo conviene'],
      filas: [
        ['Media (promedio)', 'Suma ÷ cantidad', 'Datos parejos sin valores extremos.'],
        ['Mediana', 'Valor del medio (ordenados)', 'Hay valores raros que distorsionan la media.'],
        ['Moda', 'Valor que más se repite', 'Buscar el "más típico" o popular.'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Frecuencia absoluta y relativa',
      texto:
        'Frecuencia absoluta: cuántas veces aparece un valor. Frecuencia relativa: la fracción del total ($f_r = f_a / N$). En porcentaje: relativa × 100.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Calcular las tres medidas',
      enunciado:
        'En las notas: 6, 7, 8, 8, 9, 10. Calculá media, moda y mediana.',
      pasos: [
        { explicacion: 'Media: (6+7+8+8+9+10) / 6 = 48 / 6 = 8.' },
        { explicacion: 'Moda: 8 (se repite 2 veces).' },
        { explicacion: 'Mediana (par): promedio de los del medio (8 y 8) = 8.' },
      ],
      resultado: 'Media = 8, moda = 8, mediana = 8.',
    },
  ],
  erroresComunes: [
    'No ordenar antes de calcular la mediana.',
    'Confundir frecuencia absoluta con relativa.',
    'Calcular media sumando por las frecuencias incorrectamente.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Mediana de: 3, 7, 5, 9, 2, 4 (ordenar primero).',
        respuesta: 4.5,
        tolerancia: 0.001,
        explicacion: 'Ordenado: 2,3,4,5,7,9. Medio: (4+5)/2 = 4,5.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Media de: 4, 6, 8, 10, 12.',
        respuesta: 8,
        explicacion: '40/5 = 8.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'La mediana siempre coincide con la media.',
        correcta: false,
        explicacion: 'Falso. Solo en distribuciones simétricas.',
      },
    ],
  },
  relacionados: ['promedio', 'moda-mediana'],
  tags: ['estadistica', 'media', 'mediana', 'moda', 'frecuencia'],
};
