import type { Tema } from '../tipos';

export const SUCESION_FIBONACCI: Tema = {
  slug: 'sucesion-fibonacci',
  titulo: 'Sucesión de Fibonacci',
  anios: ['secundaria-4'],
  area: 'algebra',
  nivel: 'intermedio',
  resumen:
    'Cada término es la suma de los dos anteriores: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34... Aparece en la naturaleza.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Definición recurrente',
      texto:
        '$F_1 = 1$, $F_2 = 1$, $F_n = F_{n-1} + F_{n-2}$ para $n \\ge 3$.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Razón áurea',
      texto:
        'El cociente $F_{n+1}/F_n$ tiende a $\\phi \\approx 1{,}618$, la razón áurea.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Calcular',
      enunciado: '¿Cuáles son los primeros 8 términos?',
      pasos: [{ explicacion: '1, 1, 2, 3, 5, 8, 13, 21.' }],
      resultado: '1, 1, 2, 3, 5, 8, 13, 21.',
    },
  ],
  erroresComunes: [
    'No identificar la regla recurrente.',
    'Empezar con valores incorrectos.',
    'Olvidar que cada término depende de los dos anteriores.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          '¿Cuál es el 10° término de Fibonacci? (1, 1, 2, 3, 5, 8, 13, 21, 34, ?)',
        respuesta: 55,
        explicacion: '34 + 21 = 55.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En Fibonacci, cada término es la suma de los dos anteriores.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Fibonacci es una sucesión aritmética.',
        correcta: false,
        explicacion: 'Falso. Es recursiva.',
      },
    ],
  },
  relacionados: ['sucesiones-introduccion', 'sucesiones-formulas'],
  tags: ['fibonacci', 'sucesiones', 'razon aurea'],
};
