import type { Tema } from '../tipos';

export const SISTEMAS_NO_LINEALES: Tema = {
  slug: 'sistemas-no-lineales',
  titulo: 'Sistemas no lineales',
  anios: ['secundaria-4'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Sistemas con ecuaciones cuadráticas, exponenciales o logarítmicas. Sustitución es la estrategia más común.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'En sistemas no lineales casi siempre conviene despejar de la lineal y sustituir en la otra. Pueden tener 0, 1, 2 o más soluciones.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Recta y circunferencia',
      enunciado:
        '$\\begin{cases} y = x \\\\ x^2 + y^2 = 8 \\end{cases}$.',
      pasos: [
        { explicacion: 'Sustituyo: $x^2 + x^2 = 8 \\Rightarrow 2x^2 = 8 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2$.' },
        { explicacion: 'Soluciones: (2, 2) y (-2, -2).' },
      ],
      resultado: '(2, 2) y (-2, -2).',
    },
  ],
  erroresComunes: [
    'No verificar las soluciones.',
    'Olvidar las dos soluciones de la cuadrática.',
    'Mezclar variables.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Un sistema no lineal puede tener más de una solución.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En sistemas no lineales casi siempre se usa sustitución.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Geométricamente, las soluciones son las intersecciones de las curvas.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['sistemas-cuadraticos', 'sistemas-ecuaciones'],
  tags: ['sistemas', 'no lineales'],
};
