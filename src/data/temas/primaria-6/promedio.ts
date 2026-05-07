import type { Tema } from '../tipos';

export const PROMEDIO: Tema = {
  slug: 'promedio',
  titulo: 'Promedio (media aritmética)',
  anios: ['primaria-6'],
  area: 'estadistica-probabilidad',
  nivel: 'intro',
  resumen:
    'El valor "típico" de un grupo de números: sumás todos y dividís por la cantidad.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Promedio',
      texto:
        'El promedio (o media aritmética) de un grupo de números se calcula sumándolos todos y dividiendo por la cantidad de números.',
    },
    {
      tipo: 'latex',
      latex: '\\bar{x} = \\dfrac{x_1 + x_2 + \\cdots + x_n}{n}',
      display: true,
    },
    {
      tipo: 'parrafo',
      texto:
        'El promedio nos da una idea del "valor típico" del conjunto. Es muy usado en notas, ingresos, alturas, etc.',
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'El promedio no siempre representa bien al grupo. Si hay valores muy raros (un número enorme entre muchos chicos), el promedio se distorsiona.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Promedio de notas',
      enunciado:
        'Las notas de un alumno fueron 7, 8, 9 y 6. ¿Cuál es su promedio?',
      pasos: [
        { explicacion: 'Sumamos: 7 + 8 + 9 + 6 = 30.' },
        { explicacion: 'Dividimos por la cantidad de notas: 30 ÷ 4 = 7,5.' },
      ],
      resultado: '7,5.',
    },
    {
      titulo: 'Encontrar un dato faltante',
      enunciado:
        'Tres notas suman 22 y queremos un promedio de 8. ¿Qué necesitamos en la 4ta nota?',
      pasos: [
        { explicacion: 'Para promedio 8 con 4 notas, la suma total debe ser 8 × 4 = 32.' },
        { explicacion: 'Falta: 32 - 22 = 10.' },
      ],
      resultado: 'Necesita un 10 en la 4ta nota.',
    },
  ],
  erroresComunes: [
    'Olvidar dividir al final.',
    'Dividir por la suma en vez de por la cantidad.',
    'Confundir promedio con moda o mediana (otras medidas estadísticas).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuál es el promedio de 5, 10, 15?',
        respuesta: 10,
        explicacion: '(5+10+15) ÷ 3 = 30 ÷ 3 = 10.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'En 5 partidos un jugador hizo 2, 1, 3, 0 y 4 goles. ¿Promedio de goles?',
        respuesta: 2,
        explicacion: '(2+1+3+0+4) ÷ 5 = 10 ÷ 5 = 2.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El promedio siempre es uno de los valores del grupo.',
        correcta: false,
        explicacion: 'No necesariamente. El promedio de 4 y 7 es 5,5, que no está en el grupo.',
      },
    ],
  },
  relacionados: ['grafico-de-barras', 'pictogramas-y-tablas'],
  tags: ['promedio', 'media', 'estadistica', 'datos'],
};
