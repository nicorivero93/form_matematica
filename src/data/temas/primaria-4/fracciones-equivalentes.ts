import type { Tema } from '../tipos';

export const FRACCIONES_EQUIVALENTES: Tema = {
  slug: 'fracciones-equivalentes',
  titulo: 'Fracciones equivalentes',
  anios: ['primaria-4'],
  area: 'fracciones-decimales',
  nivel: 'intermedio',
  resumen:
    'Distintas fracciones que representan la misma cantidad, como $\\tfrac{1}{2}$ y $\\tfrac{2}{4}$.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Hay fracciones que se escriben distinto pero representan la misma cantidad. Por ejemplo, media pizza es lo mismo que dos cuartos de pizza: $\\tfrac{1}{2} = \\tfrac{2}{4}$. Esas se llaman fracciones equivalentes.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Equivalentes',
      texto:
        'Dos fracciones son equivalentes cuando, al dibujarlas, ocupan la misma porción del total, aunque estén "cortadas" en pedazos distintos.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Para conseguir fracciones equivalentes a una dada, multiplicamos (o dividimos) el numerador y el denominador por el mismo número, distinto de 0.',
    },
    {
      tipo: 'latex',
      latex:
        '\\dfrac{1}{2} = \\dfrac{1\\times 2}{2\\times 2} = \\dfrac{2}{4} = \\dfrac{1\\times 3}{2\\times 3} = \\dfrac{3}{6}',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Si conseguís simplificar una fracción dividiendo numerador y denominador por el mismo número, también obtenés una equivalente más simple.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Conseguir equivalentes multiplicando',
      enunciado: 'Encontrá tres fracciones equivalentes a $\\tfrac{2}{3}$.',
      pasos: [
        {
          explicacion: 'Multiplicamos numerador y denominador por 2:',
          latex: '\\dfrac{2 \\times 2}{3 \\times 2} = \\dfrac{4}{6}',
        },
        {
          explicacion: 'Ahora por 3:',
          latex: '\\dfrac{2 \\times 3}{3 \\times 3} = \\dfrac{6}{9}',
        },
        {
          explicacion: 'Ahora por 5:',
          latex: '\\dfrac{2 \\times 5}{3 \\times 5} = \\dfrac{10}{15}',
        },
      ],
      resultado: '$\\tfrac{4}{6}, \\tfrac{6}{9}, \\tfrac{10}{15}$ son equivalentes a $\\tfrac{2}{3}$.',
    },
    {
      titulo: 'Simplificar dividiendo',
      enunciado: 'Simplificá $\\tfrac{8}{12}$.',
      pasos: [
        {
          explicacion: 'Dividimos numerador y denominador por 4 (es el más grande común a ambos):',
          latex: '\\dfrac{8 \\div 4}{12 \\div 4} = \\dfrac{2}{3}',
        },
        {
          explicacion: '$\\tfrac{8}{12}$ y $\\tfrac{2}{3}$ representan la misma cantidad.',
        },
      ],
      resultado: '$\\tfrac{2}{3}$',
    },
  ],
  erroresComunes: [
    'Multiplicar solo el numerador o solo el denominador. Hay que multiplicar a los dos por el mismo número.',
    'Sumar el mismo número a numerador y denominador. Eso no da una equivalente.',
    'Pensar que una fracción es "más grande" porque sus números son más grandes. $\\tfrac{2}{4}$ es lo mismo que $\\tfrac{1}{2}$.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál de estas fracciones es equivalente a $\\tfrac{1}{4}$?',
        opciones: ['1/8', '2/8', '3/4', '4/1'],
        correcta: 1,
        explicacion: 'Multiplicamos arriba y abajo por 2: 1×2/4×2 = 2/8.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuál de estas fracciones es equivalente a $\\tfrac{6}{9}$?',
        opciones: ['2/3', '3/6', '6/3', '9/6'],
        correcta: 0,
        explicacion: 'Dividimos arriba y abajo por 3: 6÷3/9÷3 = 2/3.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$\\tfrac{1}{2}$ es equivalente a $\\tfrac{5}{10}$.',
        correcta: true,
        explicacion: 'Multiplicamos arriba y abajo por 5: 1×5/2×5 = 5/10. Sí, son equivalentes.',
      },
    ],
  },
  visualizadorId: 'fracciones-pizza',
  relacionados: ['fracciones-introduccion'],
  tags: ['fracciones', 'equivalentes', 'simplificar', 'multiplicar'],
};
