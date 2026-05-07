import type { Tema } from '../tipos';

export const ESTADISTICA_DISPERSION: Tema = {
  slug: 'estadistica-dispersion',
  titulo: 'Medidas de dispersión: rango y desviación',
  anios: ['secundaria-2'],
  area: 'estadistica-probabilidad',
  nivel: 'intermedio',
  resumen:
    'Cómo medir la "variabilidad" de los datos: rango, desviación media, varianza y desviación estándar.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Medida', 'Cálculo'],
      filas: [
        ['Rango', 'Mayor menos menor.'],
        ['Desviación de un dato', '$x_i - \\bar{x}$ (positiva si está arriba del promedio).'],
        ['Varianza', 'Promedio de los cuadrados de las desviaciones.'],
        ['Desviación estándar', 'Raíz cuadrada de la varianza.'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Las medidas de dispersión te dicen qué tan "esparcidos" están los datos. Dos conjuntos pueden tener el mismo promedio pero distinta dispersión.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Rango',
      enunciado: 'Datos: 5, 7, 8, 9, 12. ¿Rango?',
      pasos: [{ explicacion: '12 - 5 = 7.' }],
      resultado: '7.',
    },
    {
      titulo: 'Comparar dispersión',
      enunciado:
        'Grupo A: 5, 5, 5, 5, 5. Grupo B: 1, 3, 5, 7, 9. ¿Cuál tiene mayor dispersión?',
      pasos: [
        { explicacion: 'Mismo promedio (5) pero el A tiene rango 0 y el B tiene rango 8.' },
      ],
      resultado: 'Grupo B.',
    },
  ],
  erroresComunes: [
    'Confundir medidas de tendencia central con dispersión.',
    'Olvidar elevar al cuadrado las desviaciones para la varianza.',
    'Pensar que rango = mediana.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Rango de 4, 8, 10, 15.',
        respuesta: 11,
        explicacion: '15 - 4 = 11.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Dos conjuntos con la misma media pueden tener distinta dispersión.',
        correcta: true,
        explicacion: 'Cierto: la media no captura variabilidad.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'La desviación estándar es la raíz cuadrada de la varianza.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['estadistica-medidas', 'promedio'],
  tags: ['estadistica', 'dispersion', 'rango', 'desviacion'],
};
