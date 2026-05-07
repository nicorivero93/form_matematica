import type { Tema } from '../tipos';

export const POLINOMIOS_GRADO_SUPERIOR: Tema = {
  slug: 'polinomios-grado-superior',
  titulo: 'Polinomios de grado superior',
  anios: ['secundaria-4'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Encontrar raíces de polinomios de grado 3+ usando teorema de Gauss, Ruffini y factorización.',
  teoria: [
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Buscar raíces racionales con teorema de Gauss.',
        'Factorizar dividiendo por $(x - r)$ con Ruffini.',
        'Resolver el cociente (que es de menor grado).',
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Un polinomio de grado $n$ tiene a lo sumo $n$ raíces reales (contando multiplicidad).',
    },
  ],
  ejemplos: [
    {
      titulo: 'Cúbica',
      enunciado: 'Encontrar las raíces de $x^3 - 7x + 6$.',
      pasos: [
        { explicacion: 'Probamos divisores de 6: ±1, ±2, ±3, ±6.' },
        { explicacion: '$P(1) = 1 - 7 + 6 = 0$ ✓. Factorizamos.' },
        { explicacion: 'Ruffini: $x^3 - 7x + 6 = (x - 1)(x^2 + x - 6) = (x-1)(x-2)(x+3)$.' },
      ],
      resultado: 'Raíces: 1, 2, -3.',
    },
  ],
  erroresComunes: [
    'No aplicar Gauss para encontrar candidatos.',
    'Errores en Ruffini.',
    'Olvidar el grado del cociente.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Un polinomio de grado 5 puede tener hasta 5 raíces reales.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'El teorema de Gauss da raíces racionales posibles.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Todo polinomio cúbico tiene al menos una raíz real.',
        correcta: true,
        explicacion: 'Cierto: por el comportamiento en infinito.',
      },
    ],
  },
  relacionados: ['teorema-resto', 'polinomios-division', 'factorizacion-cuadratica'],
  tags: ['polinomios', 'grado superior', 'gauss', 'raices'],
};
