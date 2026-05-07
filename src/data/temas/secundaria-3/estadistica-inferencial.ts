import type { Tema } from '../tipos';

export const ESTADISTICA_INFERENCIAL: Tema = {
  slug: 'estadistica-inferencial',
  titulo: 'Muestreo y estadística inferencial',
  anios: ['secundaria-3'],
  area: 'estadistica-probabilidad',
  nivel: 'intermedio',
  resumen:
    'Cómo sacar conclusiones de una población a partir de una muestra. Distinción entre estadística descriptiva e inferencial.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Concepto', 'Significado'],
      filas: [
        ['Población', 'El conjunto total que querés estudiar.'],
        ['Muestra', 'Un subconjunto de la población.'],
        ['Estadístico', 'Una medida calculada en la muestra (ej: media muestral).'],
        ['Parámetro', 'La medida real de la población (ej: media poblacional).'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Una muestra debe ser representativa: lo más parecida posible a la población. La forma más común es el muestreo aleatorio.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Sesgo en muestreo',
      enunciado:
        'Querés saber qué tan satisfechos están los empleados de una empresa de 1.000 personas. Solo encuestás a los que están en una reunión. ¿Es buena muestra?',
      pasos: [
        { explicacion: 'Probablemente no: los que están en la reunión pueden tener perfil diferente.' },
        { explicacion: 'Para evitar sesgo conviene muestreo aleatorio.' },
      ],
      resultado: 'Mala. Hay sesgo.',
    },
  ],
  erroresComunes: [
    'Confundir población con muestra.',
    'Tomar muestras pequeñas no representativas.',
    'Generalizar a la población sin considerar el sesgo.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado: 'Una muestra de 10 personas siempre es suficiente para generalizar.',
        correcta: false,
        explicacion: 'Falso. Depende de la variabilidad y del tamaño de la población.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El muestreo aleatorio reduce el sesgo.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'La media muestral es exactamente igual a la media poblacional.',
        correcta: false,
        explicacion: 'Falso. Es una estimación.',
      },
    ],
  },
  relacionados: ['estadistica-medidas', 'estadistica-dispersion'],
  tags: ['estadistica', 'muestra', 'poblacion', 'inferencia'],
};
