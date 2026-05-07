import type { Tema } from '../tipos';

export const LIMITES_INTRODUCCION: Tema = {
  slug: 'limites-introduccion',
  titulo: 'Límites: introducción',
  anios: ['secundaria-5'],
  area: 'analisis',
  nivel: 'intermedio',
  resumen:
    'El límite de una función describe a qué valor se aproxima la función cuando $x$ se acerca a un valor dado.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Notación',
      texto:
        '$\\lim_{x \\to a} f(x) = L$ significa "cuando $x$ se acerca a $a$, $f(x)$ se acerca a $L$".',
    },
    {
      tipo: 'parrafo',
      texto:
        'En la mayoría de los casos, podés calcular el límite simplemente reemplazando: si $f$ es continua, $\\lim_{x \\to a} f(x) = f(a)$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Sustitución directa',
      enunciado: 'Calculá $\\lim_{x \\to 3} (2x + 1)$.',
      pasos: [
        { explicacion: '$f$ es continua. Reemplazamos: $2(3) + 1 = 7$.' },
      ],
      resultado: '7.',
    },
    {
      titulo: 'Indeterminación',
      enunciado: 'Calculá $\\lim_{x \\to 2} \\dfrac{x^2 - 4}{x - 2}$.',
      pasos: [
        { explicacion: 'Reemplazo da $0/0$: indeterminado.' },
        { explicacion: 'Factorizamos: $\\dfrac{(x-2)(x+2)}{x-2} = x + 2$ (para $x \\neq 2$).' },
        { explicacion: 'Reemplazo: $2 + 2 = 4$.' },
      ],
      resultado: '4.',
    },
  ],
  erroresComunes: [
    'Olvidar que el límite no es necesariamente $f(a)$ (puede no estar definido en $a$).',
    'No factorizar para resolver indeterminaciones.',
    'Confundir límite con valor de la función.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '$\\lim_{x \\to 5} (x^2 - 1)$.',
        respuesta: 24,
        explicacion: '$25 - 1 = 24$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si $f$ es continua en $a$, entonces $\\lim_{x \\to a} f(x) = f(a)$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Todo límite siempre existe.',
        correcta: false,
        explicacion: 'Falso. Puede no existir.',
      },
    ],
  },
  relacionados: ['funciones-asintotas'],
  tags: ['limites', 'analisis'],
};
