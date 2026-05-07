import type { Tema } from '../tipos';

export const MULTIPLICACION_DOS_CIFRAS_AVANZADA: Tema = {
  slug: 'multiplicacion-dos-cifras-avanzada',
  titulo: 'Multiplicación por dos cifras (avanzada)',
  anios: ['primaria-5'],
  area: 'numeros-y-operaciones',
  nivel: 'intermedio',
  resumen:
    'Multiplicación de números más grandes por dos cifras, con múltiples llevadas y manejo del corrimiento.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'En 5to grado las multiplicaciones se hacen más grandes. La estrategia sigue siendo la misma de 4to: dos productos parciales y suma final. Lo que cambia es que los números crecen y aparecen más llevadas.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Truco del corrimiento',
      texto:
        'En lugar de "dejar un espacio" a la derecha del segundo producto, podés escribir un 0. Es lo mismo y evita confusiones.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Multiplicar el número de arriba por las unidades del de abajo.',
        'Escribir un 0 en las unidades del segundo renglón (porque vamos a multiplicar por las decenas).',
        'Multiplicar el número de arriba por las decenas y escribir el resultado a la izquierda del 0.',
        'Sumar los dos productos parciales.',
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Multiplicación de 3 cifras × 2 cifras',
      enunciado: 'Calculá $246 \\times 38$.',
      pasos: [
        {
          explicacion:
            'Producto 1: 246 × 8. 8×6=48 (escribimos 8, llevamos 4). 8×4=32, +4=36 (escribimos 6, llevamos 3). 8×2=16, +3=19. Resultado: 1.968.',
        },
        {
          explicacion:
            'Producto 2: 246 × 3, corrido un lugar (o con un 0 al final). 3×6=18 (escribimos 8, llevamos 1). 3×4=12, +1=13 (escribimos 3, llevamos 1). 3×2=6, +1=7. Resultado: 738 → 7.380.',
        },
        { explicacion: 'Sumamos: 1.968 + 7.380 = 9.348.' },
      ],
      resultado: '9.348',
    },
    {
      titulo: 'Estimar antes de calcular',
      enunciado: 'Antes de hacer $487 \\times 52$, ¿cerca de cuánto va a dar?',
      pasos: [
        { explicacion: 'Redondeamos: 487 ≈ 500 y 52 ≈ 50.' },
        { explicacion: '500 × 50 = 25.000.' },
        { explicacion: 'El resultado real va a estar cerca de 25.000.' },
      ],
      resultado: 'Aproximadamente 25.000 (real: 25.324).',
    },
  ],
  erroresComunes: [
    'Olvidar el corrimiento del segundo producto, lo que da un resultado entero menor al real.',
    'Confundirse con las llevadas cuando hay tres cifras o más.',
    'Sumar mal los dos productos parciales por desalinear las columnas.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Calculá: 124 × 25 = ?',
        respuesta: 3100,
        explicacion: '124 × 5 = 620. 124 × 2 corrido = 2.480. 620 + 2.480 = 3.100.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Calculá: 308 × 40 = ?',
        respuesta: 12320,
        explicacion: '308 × 0 = 0. 308 × 4 corrido = 12.320. Resultado: 12.320.',
      },
      {
        tipo: 'multiple',
        enunciado: 'En 158 × 24, ¿cuánto vale el segundo producto parcial?',
        opciones: ['632', '316', '3.160', '316 corrido'],
        correcta: 2,
        explicacion: '158 × 2 = 316. Como representa decenas, se corre y suma como 3.160.',
      },
    ],
  },
  visualizadorId: 'tabla-pitagorica',
  relacionados: ['multiplicacion-dos-cifras', 'division-dos-cifras'],
  tags: ['multiplicacion', 'dos cifras', 'algoritmo', 'estimar'],
};
