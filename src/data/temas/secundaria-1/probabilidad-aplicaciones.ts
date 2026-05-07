import type { Tema } from '../tipos';

export const PROBABILIDAD_APLICACIONES: Tema = {
  slug: 'probabilidad-aplicaciones',
  titulo: 'Probabilidad: aplicaciones',
  anios: ['secundaria-1'],
  area: 'estadistica-probabilidad',
  nivel: 'intermedio',
  resumen:
    'Calcular probabilidades en situaciones reales: cartas, dados, urnas. Eventos compuestos con AND y OR.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Eventos con "Y"',
      texto:
        'Para que pasen ambos eventos independientes A y B: $P(A \\cap B) = P(A) \\times P(B)$.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Eventos con "O" (excluyentes)',
      texto:
        'Si A y B no pueden pasar al mismo tiempo: $P(A \\cup B) = P(A) + P(B)$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Cartas',
      enunciado:
        'En un mazo de 40 cartas, ¿probabilidad de sacar una carta de oros O un caballo (4 caballos, 10 oros, el caballo de oro está incluido)?',
      pasos: [
        { explicacion: 'P(oros) = 10/40. P(caballo) = 4/40. P(caballo de oros) = 1/40.' },
        {
          explicacion:
            'P(A o B) = P(A) + P(B) - P(A y B) = 10/40 + 4/40 - 1/40 = 13/40.',
        },
      ],
      resultado: '13/40.',
    },
    {
      titulo: 'Dados',
      enunciado:
        'Tirás dos dados. ¿Probabilidad de sacar un 6 en ambos?',
      pasos: [
        { explicacion: 'Independientes: 1/6 × 1/6 = 1/36.' },
      ],
      resultado: '1/36.',
    },
  ],
  erroresComunes: [
    'Sumar probabilidades de eventos no excluyentes (sin restar la intersección).',
    'Multiplicar probabilidades de eventos no independientes.',
    'Olvidar reducir el espacio muestral cuando se sacan elementos sin reposición.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado:
          'Tirás un dado. ¿Probabilidad de sacar un par O un múltiplo de 3?',
        opciones: ['$\\tfrac{1}{2}$', '$\\tfrac{2}{3}$', '$\\tfrac{5}{6}$', '1'],
        correcta: 1,
        explicacion: 'Par: 2,4,6 (3). Múlt 3: 3,6 (2). Intersección 6 (1). 3+2-1=4. 4/6 = 2/3.',
      },
      {
        tipo: 'multiple',
        enunciado:
          'Tirás dos monedas. ¿Probabilidad de obtener cara y cara?',
        opciones: ['$\\tfrac{1}{2}$', '$\\tfrac{1}{4}$', '$\\tfrac{1}{3}$', '$\\tfrac{3}{4}$'],
        correcta: 1,
        explicacion: '1/2 × 1/2 = 1/4.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Para eventos independientes, P(A y B) = P(A) × P(B).',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['probabilidad-eventos', 'probabilidad-basica'],
  tags: ['probabilidad', 'eventos compuestos', 'independientes'],
};
