import type { Tema } from '../tipos';

export const PROPORCIONALIDAD_INVERSA: Tema = {
  slug: 'proporcionalidad-inversa',
  titulo: 'Proporcionalidad inversa',
  anios: ['primaria-6'],
  area: 'numeros-y-operaciones',
  nivel: 'avanzado',
  resumen:
    'Cuando una cantidad aumenta y la otra disminuye en la misma proporción. Lo opuesto a la proporcionalidad directa.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Magnitudes inversamente proporcionales',
      texto:
        'Dos magnitudes son inversamente proporcionales cuando al multiplicar una por un número, la otra se divide por ese mismo número. Si una se duplica, la otra se reduce a la mitad.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Ejemplos típicos: cantidad de obreros y tiempo que tardan en hacer un trabajo (más obreros = menos tiempo); velocidad y tiempo de viaje (más velocidad = menos tiempo); cantidad de invitados y porción que le toca a cada uno (más invitados = menos a cada uno).',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Truco: el producto se mantiene',
      texto:
        'En proporcionalidad inversa, el producto de las dos magnitudes es siempre el mismo. Si 2 obreros tardan 6 horas, 4 obreros tardan 3 horas, porque 2 × 6 = 4 × 3 = 12.',
    },
    {
      tipo: 'latex',
      latex: 'A \\times B = \\text{constante}',
      display: true,
    },
  ],
  ejemplos: [
    {
      titulo: 'Obreros y tiempo',
      enunciado:
        '4 albañiles construyen una pared en 12 días. ¿Cuánto tardarán 6 albañiles trabajando al mismo ritmo?',
      pasos: [
        { explicacion: 'Más albañiles → menos tiempo. Es inversa.' },
        { explicacion: 'Producto constante: 4 × 12 = 48.' },
        { explicacion: '6 × x = 48 → x = 48 ÷ 6 = 8 días.' },
      ],
      resultado: '8 días.',
    },
    {
      titulo: 'Velocidad y tiempo',
      enunciado:
        'Un colectivo recorre cierto trayecto en 3 horas a 60 km/h. ¿En cuánto tiempo lo recorre a 90 km/h?',
      pasos: [
        { explicacion: 'Más velocidad → menos tiempo. Inversa.' },
        { explicacion: 'Producto: 3 × 60 = 180.' },
        { explicacion: 'x × 90 = 180 → x = 2 h.' },
      ],
      resultado: '2 horas.',
    },
  ],
  erroresComunes: [
    'Aplicar regla de tres directa cuando es inversa (te da un resultado que va en sentido contrario al esperado).',
    'No identificar correctamente si las magnitudes son directas o inversas.',
    'Confundir "producto constante" con "suma constante" (que sería otro caso).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Si 5 obreros tardan 12 días en hacer una obra, ¿cuántos días tardan 10 obreros?',
        respuesta: 6,
        explicacion: 'Producto: 5 × 12 = 60. 10 × x = 60 → x = 6.',
        unidad: 'días',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Una caja se reparte entre 8 chicos y a cada uno le tocan 6 caramelos. ¿Cuántos le tocan a cada uno si se reparte entre 12?',
        respuesta: 4,
        explicacion: '8 × 6 = 48. 12 × x = 48 → x = 4.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'La relación entre velocidad y tiempo (con distancia fija) es inversa.',
        correcta: true,
        explicacion: 'Cierto. Más velocidad, menos tiempo, pero distancia (= velocidad × tiempo) constante.',
      },
    ],
  },
  relacionados: ['proporcionalidad-directa'],
  tags: ['proporcionalidad', 'inversa', 'regla de tres'],
};
