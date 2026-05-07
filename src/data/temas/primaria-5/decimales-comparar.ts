import type { Tema } from '../tipos';

export const DECIMALES_COMPARAR: Tema = {
  slug: 'decimales-comparar',
  titulo: 'Comparar decimales',
  anios: ['primaria-5'],
  area: 'fracciones-decimales',
  nivel: 'intermedio',
  resumen:
    'Cómo decidir cuál de dos decimales es mayor sin caer en las trampas más comunes.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Para comparar dos decimales miramos primero la parte entera. Si son iguales, comparamos las cifras después de la coma desde la izquierda hacia la derecha.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Comparar la parte entera. La de mayor entero gana.',
        'Si las partes enteras son iguales, mirar los décimos. Gana el de mayor décimo.',
        'Si los décimos son iguales, mirar los centésimos. Y así.',
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Truco: igualar cifras decimales',
      texto:
        'Si una tiene más cifras que la otra, completá con ceros a la derecha (no cambia el valor) y las comparás como si fueran números enteros.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Comparación clásica',
      enunciado: 'Comparar 3,42 y 3,7.',
      pasos: [
        { explicacion: 'Misma parte entera: 3.' },
        { explicacion: 'Décimos: 4 vs 7. Como 7 > 4, gana 3,7.' },
      ],
      resultado: '3,7 > 3,42 (aunque parezca que 42 es más grande que 7).',
    },
    {
      titulo: 'Igualar cifras',
      enunciado: 'Comparar 0,8 y 0,79.',
      pasos: [
        { explicacion: 'Igualamos cifras: 0,80 y 0,79.' },
        { explicacion: 'Comparamos como enteros: 80 > 79.' },
      ],
      resultado: '0,8 > 0,79.',
    },
    {
      titulo: 'Iguales pero escritos distinto',
      enunciado: 'Comparar 1,5 y 1,50.',
      pasos: [
        { explicacion: 'Agregar ceros a la derecha no cambia el valor.' },
        { explicacion: '1,50 = 1,5.' },
      ],
      resultado: 'Son iguales: 1,5 = 1,50.',
    },
  ],
  erroresComunes: [
    'Comparar la parte decimal "como si fuera un número entero" sin igualar cifras: 0,42 NO es mayor que 0,7.',
    'Pensar que más cifras decimales = número más grande.',
    'Olvidar comparar primero la parte entera.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es mayor: 0,9 o 0,15?',
        opciones: ['0,9', '0,15', 'Son iguales', 'Depende'],
        correcta: 0,
        explicacion: 'Igualamos: 0,90 y 0,15. 90 > 15, así que 0,9 es mayor.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuál de estos decimales es mayor: 2,38 — 2,4 — 2,375 — 2,308?',
        opciones: ['2,38', '2,4', '2,375', '2,308'],
        correcta: 1,
        explicacion: 'Misma parte entera 2. Décimos: 3, 4, 3, 3. El 4 gana. 2,4 es mayor.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '5,007 es mayor que 5,07.',
        correcta: false,
        explicacion: 'Igualamos: 5,007 vs 5,070. 070 > 007, así que 5,07 es mayor.',
      },
    ],
  },
  visualizadorId: 'recta-numerica',
  relacionados: ['decimales-introduccion', 'comparacion-numeros'],
  tags: ['decimales', 'comparar', 'mayor que'],
};
