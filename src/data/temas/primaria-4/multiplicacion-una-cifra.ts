import type { Tema } from '../tipos';

export const MULTIPLICACION_UNA_CIFRA: Tema = {
  slug: 'multiplicacion-una-cifra',
  titulo: 'Multiplicación por una cifra',
  anios: ['primaria-4'],
  area: 'numeros-y-operaciones',
  nivel: 'intro',
  resumen:
    'Cómo multiplicar un número grande por una cifra usando el algoritmo vertical y manejando las llevadas.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Para multiplicar un número de varias cifras por un número de una sola cifra, lo hacemos columna por columna, parecido a la suma con llevadas.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Encolumnar los números, alineando las unidades.',
        'Multiplicar la cifra de abajo por las unidades del de arriba. Si pasa de 9, escribir las unidades del resultado y llevarse las decenas.',
        'Multiplicar por la cifra siguiente y sumarle lo que llevamos.',
        'Seguir hasta terminar todas las cifras.',
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Conviene tener bien sabidas las tablas de multiplicar antes de hacer cuentas largas. Cada columna implica una tabla.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Sin llevadas',
      enunciado: 'Calculá $213 \\times 3$.',
      pasos: [
        { explicacion: '3 × 3 = 9. Escribimos 9 en las unidades.' },
        { explicacion: '3 × 1 = 3. Escribimos 3 en las decenas.' },
        { explicacion: '3 × 2 = 6. Escribimos 6 en las centenas.' },
      ],
      resultado: '639',
    },
    {
      titulo: 'Con llevadas',
      enunciado: 'Calculá $268 \\times 4$.',
      pasos: [
        {
          explicacion:
            'Unidades: 4 × 8 = 32. Escribimos 2 y llevamos 3.',
        },
        {
          explicacion:
            'Decenas: 4 × 6 = 24. Sumamos los 3 que llevamos: 24 + 3 = 27. Escribimos 7 y llevamos 2.',
        },
        {
          explicacion:
            'Centenas: 4 × 2 = 8. Sumamos los 2 que llevamos: 8 + 2 = 10. Escribimos 10 (porque no hay otra columna a la izquierda).',
        },
      ],
      resultado: '1.072',
    },
  ],
  erroresComunes: [
    'Olvidar sumar la llevada. Si llevamos 3, hay que sumarlo después de hacer la multiplicación de la siguiente columna.',
    'Sumar la llevada antes de multiplicar (al revés del orden correcto).',
    'Confundir el orden de las cifras al escribir el resultado.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Calculá: 124 × 3 = ?',
        respuesta: 372,
        explicacion: '3 × 4 = 12 (escribimos 2, llevamos 1). 3 × 2 = 6, +1 = 7. 3 × 1 = 3. Resultado: 372.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Calculá: 87 × 6 = ?',
        respuesta: 522,
        explicacion: '6 × 7 = 42 (escribimos 2, llevamos 4). 6 × 8 = 48, +4 = 52. Resultado: 522.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Calculá: 1.250 × 4 = ?',
        respuesta: 5000,
        explicacion: '4 × 0 = 0. 4 × 5 = 20 (escribimos 0, llevamos 2). 4 × 2 = 8, +2 = 10 (escribimos 0, llevamos 1). 4 × 1 = 4, +1 = 5. Resultado: 5.000.',
      },
    ],
  },
  visualizadorId: 'tabla-pitagorica',
  relacionados: ['tablas-de-multiplicar', 'multiplicacion-dos-cifras', 'suma-con-llevadas'],
  tags: ['multiplicacion', 'una cifra', 'algoritmo'],
};
