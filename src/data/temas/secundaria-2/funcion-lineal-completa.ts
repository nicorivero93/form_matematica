import type { Tema } from '../tipos';

export const FUNCION_LINEAL_COMPLETA: Tema = {
  slug: 'funcion-lineal-completa',
  titulo: 'Función lineal: análisis completo',
  anios: ['secundaria-2'],
  area: 'funciones',
  nivel: 'intermedio',
  resumen:
    'Pendiente, ordenada al origen, ceros y gráfico de la función lineal. Cómo encontrar la ecuación de una recta a partir de dos puntos.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'La función lineal $y = mx + b$ tiene como gráfico una recta. Conociendo dos puntos cualesquiera podemos determinar $m$ y $b$.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Pendiente entre dos puntos',
      texto: 'Si la recta pasa por $(x_1, y_1)$ y $(x_2, y_2)$, su pendiente es $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$.',
    },
    {
      tipo: 'latex',
      latex: 'y - y_1 = m(x - x_1)',
      display: true,
    },
    {
      tipo: 'parrafo',
      texto:
        'Esta es la ecuación punto-pendiente: usando un punto y la pendiente, la recta queda determinada.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Pendiente entre dos puntos',
      enunciado: 'Recta que pasa por $(2, 3)$ y $(5, 9)$. ¿Pendiente?',
      pasos: [{ explicacion: '$m = (9 - 3)/(5 - 2) = 6/3 = 2$.' }],
      resultado: '$m = 2$.',
    },
    {
      titulo: 'Ecuación de la recta',
      enunciado: 'Recta de pendiente 3 que pasa por $(1, 5)$. ¿Ecuación?',
      pasos: [
        { explicacion: '$y - 5 = 3(x - 1) \\Rightarrow y = 3x - 3 + 5 = 3x + 2$.' },
      ],
      resultado: '$y = 3x + 2$.',
    },
  ],
  erroresComunes: [
    'Confundir el orden de los puntos al calcular la pendiente.',
    'Olvidar la propiedad distributiva al despejar y.',
    'No verificar reemplazando un punto en la ecuación.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Pendiente de la recta por $(1, 4)$ y $(3, 10)$.',
        respuesta: 3,
        explicacion: '(10-4)/(3-1) = 3.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Recta que pasa por $(0, 5)$ con $m = -2$:',
        opciones: ['$y = 2x + 5$', '$y = -2x + 5$', '$y = 5x - 2$', '$y = -5x + 2$'],
        correcta: 1,
        explicacion: 'Ordenada 5, pendiente -2.',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Cuál es el cero de $y = 4x - 8$?',
        respuesta: 2,
        explicacion: '$4x - 8 = 0 \\Rightarrow x = 2$.',
      },
    ],
  },
  visualizadorId: 'graficador-lineal',
  relacionados: ['funcion-lineal'],
  tags: ['funcion lineal', 'pendiente', 'ordenada', 'recta'],
};
