import type { Tema } from '../tipos';

export const RACIONALES_OPERACIONES: Tema = {
  slug: 'racionales-operaciones',
  titulo: 'Operaciones con números racionales',
  anios: ['secundaria-1'],
  area: 'fracciones-decimales',
  nivel: 'intermedio',
  resumen:
    'Sumar, restar, multiplicar y dividir fracciones positivas y negativas. Aplicar regla de signos.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Las operaciones con racionales combinan las reglas de fracciones (denominador común para suma/resta, multiplicación cruzada para multiplicar y dividir) con las reglas de signos de los enteros.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'El signo se decide aparte. Hacé la operación con valores absolutos y al final aplicás la regla de signos.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Suma de fracciones con signo',
      enunciado: 'Calculá $-\\tfrac{2}{3} + \\tfrac{1}{6}$.',
      pasos: [
        { explicacion: 'MCM 6: $-\\tfrac{4}{6} + \\tfrac{1}{6} = \\tfrac{-4 + 1}{6} = -\\tfrac{3}{6} = -\\tfrac{1}{2}$.' },
      ],
      resultado: '$-\\tfrac{1}{2}$.',
    },
    {
      titulo: 'Multiplicación con negativos',
      enunciado: 'Calculá $-\\tfrac{2}{5} \\times \\tfrac{10}{3}$.',
      pasos: [
        { explicacion: 'Signo: negativo × positivo = negativo.' },
        { explicacion: 'Magnitud: $\\tfrac{2 \\times 10}{5 \\times 3} = \\tfrac{20}{15} = \\tfrac{4}{3}$.' },
      ],
      resultado: '$-\\tfrac{4}{3}$.',
    },
  ],
  erroresComunes: [
    'Olvidar el signo al simplificar.',
    'Aplicar regla de signos en suma (es solo para multiplicación/división).',
    'No buscar denominador común al sumar.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '$-\\tfrac{1}{3} + \\tfrac{1}{2}$:',
        opciones: ['$\\tfrac{1}{6}$', '$-\\tfrac{1}{6}$', '$\\tfrac{1}{5}$', '$\\tfrac{2}{3}$'],
        correcta: 0,
        explicacion: 'MCM 6: $-2/6 + 3/6 = 1/6$.',
      },
      {
        tipo: 'multiple',
        enunciado: '$-\\tfrac{3}{4} \\times -\\tfrac{2}{9}$:',
        opciones: ['$\\tfrac{1}{6}$', '$-\\tfrac{1}{6}$', '$\\tfrac{6}{36}$', '$\\tfrac{1}{12}$'],
        correcta: 0,
        explicacion: '(-)(-)=+. 6/36 = 1/6.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$-\\tfrac{2}{3} \\div -\\tfrac{4}{9} = \\tfrac{3}{2}$.',
        correcta: true,
        explicacion: '(-)(-)=+. -2/3 × -9/4 = 18/12 = 3/2.',
      },
    ],
  },
  visualizadorId: 'fracciones-pizza',
  relacionados: ['fracciones-suma-resta-distinto-denominador', 'fracciones-multiplicacion', 'enteros-multiplicacion'],
  tags: ['racionales', 'fracciones', 'operaciones', 'signos'],
};
