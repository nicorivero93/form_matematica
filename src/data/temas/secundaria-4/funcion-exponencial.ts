import type { Tema } from '../tipos';

export const FUNCION_EXPONENCIAL: Tema = {
  slug: 'funcion-exponencial',
  titulo: 'Función exponencial',
  anios: ['secundaria-4'],
  area: 'funciones',
  nivel: 'intermedio',
  resumen:
    'Funciones $y = a^x$ con $a > 0$ y $a \\neq 1$. Crecen (si $a > 1$) o decrecen (si $0 < a < 1$) muy rápido.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'La exponencial $f(x) = a^x$ tiene dominio $\\mathbb{R}$ e imagen $(0, +\\infty)$. Pasa siempre por $(0, 1)$. Tiene asíntota horizontal $y = 0$.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Aplicaciones: crecimiento poblacional, interés compuesto, decaimiento radioactivo.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Calcular',
      enunciado: 'Si $f(x) = 3^x$, $f(0)$, $f(2)$ y $f(-1)$.',
      pasos: [
        { explicacion: '$f(0) = 1$.' },
        { explicacion: '$f(2) = 9$.' },
        { explicacion: '$f(-1) = 1/3$.' },
      ],
      resultado: '1, 9, 1/3.',
    },
  ],
  erroresComunes: [
    'Confundir base con exponente.',
    'Pensar que el resultado puede ser 0.',
    'Olvidar que pasa siempre por (0, 1).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿$2^4$?',
        respuesta: 16,
        explicacion: '16.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$f(x) = a^x$ pasa por $(0, 1)$ para cualquier $a$.',
        correcta: true,
        explicacion: 'Cierto: $a^0 = 1$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'La función exponencial puede tomar valores negativos.',
        correcta: false,
        explicacion: 'Falso. Su imagen es $(0, +\\infty)$.',
      },
    ],
  },
  visualizadorId: 'graficador-exp-log',
  relacionados: ['potencias-naturales', 'interes-compuesto-intro'],
  tags: ['exponencial', 'funciones', 'crecimiento'],
};
