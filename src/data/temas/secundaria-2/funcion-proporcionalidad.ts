import type { Tema } from '../tipos';

export const FUNCION_PROPORCIONALIDAD: Tema = {
  slug: 'funcion-proporcionalidad',
  titulo: 'Función de proporcionalidad directa',
  anios: ['secundaria-2'],
  area: 'funciones',
  nivel: 'intro',
  resumen:
    'Es la función lineal con $b = 0$: $y = mx$. Pasa por el origen. La constante $m$ es la "razón de proporcionalidad".',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'En la proporcionalidad directa, cuando una variable se duplica, la otra también. Su gráfico es una recta que pasa por el origen.',
    },
    {
      tipo: 'latex',
      latex: 'y = mx',
      display: true,
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar la constante',
      enunciado:
        'Una función pasa por $(2, 6)$ y por el origen. ¿Cuál es su ecuación?',
      pasos: [
        { explicacion: '$m = y/x = 6/2 = 3$.' },
      ],
      resultado: '$y = 3x$.',
    },
    {
      titulo: 'Aplicación',
      enunciado:
        'Si 1 kg de manzanas cuesta $500, escribí la función precio según kilos.',
      pasos: [{ explicacion: '$y = 500x$ donde $x$ es kilos y $y$ pesos.' }],
      resultado: '$y = 500x$.',
    },
  ],
  erroresComunes: [
    'Confundir proporcionalidad directa con función lineal cualquiera (la directa pasa por el origen).',
    'Mezclar la constante con b.',
    'Olvidar que el cero está en el dominio.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Una proporcionalidad pasa por $(4, 12)$. ¿Cuánto vale m?',
        respuesta: 3,
        explicacion: '$m = 12/4 = 3$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En proporcionalidad directa, $f(0) = 0$.',
        correcta: true,
        explicacion: 'Cierto: pasa por el origen.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$y = 3x + 5$ es función de proporcionalidad directa.',
        correcta: false,
        explicacion: 'No: tiene $b \\neq 0$, no pasa por el origen.',
      },
    ],
  },
  visualizadorId: 'graficador-lineal',
  relacionados: ['funcion-lineal-completa', 'proporcionalidad-directa'],
  tags: ['proporcionalidad', 'funcion', 'directa'],
};
