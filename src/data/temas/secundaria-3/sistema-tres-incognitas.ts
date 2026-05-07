import type { Tema } from '../tipos';

export const SISTEMA_TRES_INCOGNITAS: Tema = {
  slug: 'sistema-tres-incognitas',
  titulo: 'Sistemas de 3 ecuaciones con 3 incógnitas',
  anios: ['secundaria-3'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Sistemas con 3 variables. Usar eliminación o sustitución de a pasos para reducirlo a sistemas más chicos.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Estrategia: usar combinaciones de dos ecuaciones para eliminar una variable. Quedan 2 ecuaciones con 2 incógnitas. Después se resuelven como sistema 2x2.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Sistema 3x3',
      enunciado:
        '$\\begin{cases} x + y + z = 6 \\\\ 2x - y + z = 3 \\\\ x + y - z = 0 \\end{cases}$.',
      pasos: [
        { explicacion: 'Sumamos 1ra y 3ra: $2x + 2y = 6 \\Rightarrow x + y = 3$.' },
        { explicacion: 'Restamos 1ra menos 2da: $-x + 2y = 3$.' },
        { explicacion: 'Sumamos: $3y = 6 \\Rightarrow y = 2$. $x = 1$.' },
        { explicacion: 'En 1ra: $1 + 2 + z = 6 \\Rightarrow z = 3$.' },
      ],
      resultado: '$x = 1$, $y = 2$, $z = 3$.',
    },
  ],
  erroresComunes: [
    'Mezclar variables al combinar ecuaciones.',
    'Olvidar verificar en las 3 ecuaciones.',
    'Errores aritméticos en suma o resta de ecuaciones.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Un sistema de 3 ecuaciones con 3 incógnitas puede tener 0, 1 o infinitas soluciones.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'La estrategia es reducirlo a un sistema 2x2 eliminando una variable.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si las 3 ecuaciones son la misma multiplicada, el sistema tiene una sola solución.',
        correcta: false,
        explicacion: 'Falso. Tendría infinitas.',
      },
    ],
  },
  relacionados: ['sistemas-ecuaciones', 'sistemas-aplicaciones'],
  tags: ['sistemas', '3 incognitas'],
};
