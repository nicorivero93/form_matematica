import type { Tema } from '../tipos';

export const GRAFICOS_CIRCULARES: Tema = {
  slug: 'graficos-circulares',
  titulo: 'Gráficos circulares (de torta)',
  anios: ['secundaria-1'],
  area: 'estadistica-probabilidad',
  nivel: 'intermedio',
  resumen:
    'Cómo armar y leer gráficos donde cada categoría es una "porción de torta" proporcional a su frecuencia.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Un gráfico circular o "de torta" representa frecuencias relativas. La torta entera representa el 100% (= 360°). Cada porción es proporcional a la frecuencia.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Cómo calcular el ángulo de cada porción',
      texto:
        'Ángulo = (frecuencia / total) × 360°. O equivalente: porcentaje × 3,6.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Calcular ángulos',
      enunciado:
        'En una clase: 10 prefieren fútbol, 5 básquet, 5 vóley (total 20). ¿Qué ángulo le toca a cada uno?',
      pasos: [
        { explicacion: 'Fútbol: 10/20 × 360 = 180°.' },
        { explicacion: 'Básquet: 5/20 × 360 = 90°.' },
        { explicacion: 'Vóley: 5/20 × 360 = 90°.' },
      ],
      resultado: 'Fútbol 180°, Básquet 90°, Vóley 90°.',
    },
  ],
  erroresComunes: [
    'Olvidar multiplicar por 360°.',
    'Mezclar frecuencias absolutas con relativas.',
    'No verificar que las porciones sumen 360°.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Si una categoría representa el 25% del total, ¿qué ángulo le toca en la torta?',
        respuesta: 90,
        explicacion: '25% × 3,6 = 90°. O 1/4 × 360°.',
        unidad: '°',
      },
      {
        tipo: 'multiple',
        enunciado: 'En un gráfico circular, ¿cuántos grados son el 100%?',
        opciones: ['180°', '270°', '360°', '720°'],
        correcta: 2,
        explicacion: 'Una vuelta completa.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Las porciones de un gráfico circular siempre suman 360°.',
        correcta: true,
        explicacion: 'Cierto. La torta es completa.',
      },
    ],
  },
  relacionados: ['estadistica-medidas', 'porcentaje'],
  tags: ['estadistica', 'graficos', 'circular', 'torta', 'porcentaje'],
};
