import type { Tema } from '../tipos';

export const PROBABILIDAD_COMBINATORIA: Tema = {
  slug: 'probabilidad-combinatoria',
  titulo: 'Probabilidad y combinatoria',
  anios: ['secundaria-3'],
  area: 'estadistica-probabilidad',
  nivel: 'avanzado',
  resumen:
    'Usar combinatoria para contar casos favorables y posibles en problemas de probabilidad complejos.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'En problemas con muchos elementos, contar a mano es imposible. Usamos combinaciones, variaciones o permutaciones para encontrar casos favorables y posibles.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Cartas',
      enunciado:
        'De un mazo de 52 cartas, ¿probabilidad de sacar 5 cartas con las 4 reinas?',
      pasos: [
        { explicacion: 'Casos posibles: $\\binom{52}{5}$.' },
        {
          explicacion:
            'Casos favorables: las 4 reinas (1 forma) × cualquier otra de las 48 = 48.',
        },
        { explicacion: '$P = 48 / \\binom{52}{5} = 48 / 2598960 \\approx 0{,}0000185$.' },
      ],
      resultado: 'Muy baja.',
    },
  ],
  erroresComunes: [
    'Mezclar combinaciones con variaciones.',
    'Contar mal por no tener en cuenta orden.',
    'Olvidar dividir por el total.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En problemas donde el orden NO importa, usamos combinaciones.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'La probabilidad clásica es casos favorables sobre casos posibles.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'numerica',
        enunciado:
          '¿De cuántas formas elegir 2 personas entre 5 (sin importar orden)?',
        respuesta: 10,
        explicacion: '$\\binom{5}{2} = 10$.',
      },
    ],
  },
  relacionados: ['combinatoria-introduccion', 'probabilidad-aplicaciones'],
  tags: ['probabilidad', 'combinatoria'],
};
