import type { Tema } from '../tipos';

export const FUNCION_LOGARITMICA: Tema = {
  slug: 'funcion-logaritmica',
  titulo: 'Función logarítmica',
  anios: ['secundaria-4'],
  area: 'funciones',
  nivel: 'intermedio',
  resumen:
    'Es la inversa de la exponencial. $\\log_a x = y$ significa $a^y = x$. Dominio $(0, +\\infty)$, imagen $\\mathbb{R}$.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Definición',
      texto:
        '$\\log_a x = y \\iff a^y = x$. Es la "potencia a la que hay que elevar $a$ para obtener $x$".',
    },
    {
      tipo: 'tabla',
      encabezados: ['Notación', 'Significado'],
      filas: [
        ['$\\log_2 8$', '3 (porque $2^3 = 8$)'],
        ['$\\log 100$', '2 (logaritmo decimal, base 10)'],
        ['$\\ln e$', '1 (logaritmo natural, base $e$)'],
        ['$\\log_a 1$', '0'],
        ['$\\log_a a$', '1'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Calcular',
      enunciado: '¿$\\log_3 81$?',
      pasos: [{ explicacion: '$3^4 = 81$, así que $\\log_3 81 = 4$.' }],
      resultado: '4.',
    },
  ],
  erroresComunes: [
    'Confundir $\\log_a x$ con $a^x$.',
    'Olvidar que el argumento debe ser positivo.',
    'Aplicar log a negativos.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿$\\log_2 16$?',
        respuesta: 4,
        explicacion: '$2^4 = 16$.',
      },
      {
        tipo: 'numerica',
        enunciado: '¿$\\log_5 25$?',
        respuesta: 2,
        explicacion: '$5^2 = 25$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$\\log_a 1 = 0$ para cualquier base $a$.',
        correcta: true,
        explicacion: 'Cierto: $a^0 = 1$.',
      },
    ],
  },
  visualizadorId: 'graficador-exp-log',
  relacionados: ['funcion-exponencial'],
  tags: ['logaritmo', 'funciones'],
};
