import type { Tema } from '../tipos';

export const FUNCIONES_INVERSAS: Tema = {
  slug: 'funciones-inversas',
  titulo: 'Funciones inversas',
  anios: ['secundaria-4'],
  area: 'funciones',
  nivel: 'avanzado',
  resumen:
    'Si $f(x) = y$, la inversa $f^{-1}(y) = x$. Para encontrarla: despejás $x$ y intercambiás variables.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Inversa',
      texto:
        '$f^{-1}$ es tal que $f(f^{-1}(x)) = x$. Para que exista, $f$ debe ser inyectiva (uno a uno).',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Geométricamente: el gráfico de $f^{-1}$ es la reflexión del gráfico de $f$ por la recta $y = x$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Encontrar inversa',
      enunciado: 'Encontrá la inversa de $f(x) = 2x + 6$.',
      pasos: [
        { explicacion: '$y = 2x + 6$.' },
        { explicacion: 'Despejamos: $x = (y - 6)/2$.' },
        { explicacion: 'Intercambiamos: $f^{-1}(x) = (x - 6)/2$.' },
      ],
      resultado: '$f^{-1}(x) = (x - 6)/2$.',
    },
  ],
  erroresComunes: [
    'No despejar correctamente.',
    'Olvidar intercambiar variables.',
    'Confundir $f^{-1}$ con $1/f$.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado: 'La inversa de $f(x) = 3x$ es $f^{-1}(x) = x/3$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Toda función tiene inversa.',
        correcta: false,
        explicacion: 'Falso. Solo las inyectivas.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Las funciones $\\log$ y $\\exp$ son inversas.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['funcion-logaritmica', 'funcion-exponencial', 'funciones-compuestas'],
  tags: ['inversas', 'funciones'],
};
