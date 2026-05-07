import type { Tema } from '../tipos';

export const SUCESIONES_RECURRENTES: Tema = {
  slug: 'sucesiones-recurrentes',
  titulo: 'Sucesiones recurrentes',
  anios: ['secundaria-5'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Cada término se define en función de los anteriores. Fibonacci es el ejemplo clásico, pero hay muchas más.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Una sucesión recurrente se define con: una semilla (uno o más términos iniciales) y una regla de recurrencia.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Recurrente',
      enunciado:
        '$a_1 = 2$, $a_n = 3 a_{n-1} - 1$. Calculá $a_4$.',
      pasos: [
        { explicacion: '$a_2 = 3 \\cdot 2 - 1 = 5$.' },
        { explicacion: '$a_3 = 3 \\cdot 5 - 1 = 14$.' },
        { explicacion: '$a_4 = 3 \\cdot 14 - 1 = 41$.' },
      ],
      resultado: '41.',
    },
  ],
  erroresComunes: [
    'No identificar la semilla.',
    'Aplicar la regla mal.',
    'Olvidar términos intermedios.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          '$a_1 = 1$, $a_n = a_{n-1} + n$. ¿$a_4$?',
        respuesta: 10,
        explicacion: '1, 1+2=3, 3+3=6, 6+4=10.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Una sucesión recurrente necesita al menos un término inicial.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Fibonacci es una sucesión recurrente.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['sucesion-fibonacci', 'sucesiones-formulas'],
  tags: ['sucesiones', 'recurrentes'],
};
