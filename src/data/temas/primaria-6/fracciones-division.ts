import type { Tema } from '../tipos';

export const FRACCIONES_DIVISION: Tema = {
  slug: 'fracciones-division',
  titulo: 'División de fracciones',
  anios: ['primaria-6'],
  area: 'fracciones-decimales',
  nivel: 'intermedio',
  resumen:
    'Para dividir dos fracciones, multiplicás la primera por la inversa de la segunda.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Inversa de una fracción',
      texto:
        'La inversa de $\\tfrac{a}{b}$ es $\\tfrac{b}{a}$ — se da vuelta. Por ejemplo, la inversa de $\\tfrac{3}{4}$ es $\\tfrac{4}{3}$.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Regla de la división',
      texto:
        'Para dividir dos fracciones, multiplicás la primera por la inversa de la segunda.',
    },
    {
      tipo: 'latex',
      latex: '\\dfrac{a}{b} \\div \\dfrac{c}{d} = \\dfrac{a}{b} \\times \\dfrac{d}{c} = \\dfrac{a \\times d}{b \\times c}',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Truco "del kf" o "multiplicación cruzada"',
      texto:
        'Algunos lo recuerdan como: numerador del primero × denominador del segundo, sobre denominador del primero × numerador del segundo.',
    },
  ],
  ejemplos: [
    {
      titulo: 'División clásica',
      enunciado: 'Calculá $\\tfrac{2}{3} \\div \\tfrac{4}{5}$.',
      pasos: [
        { explicacion: 'Damos vuelta la segunda: $\\tfrac{4}{5} \\to \\tfrac{5}{4}$.' },
        { explicacion: 'Multiplicamos: $\\tfrac{2}{3} \\times \\tfrac{5}{4} = \\tfrac{10}{12}$.' },
        { explicacion: 'Simplificamos: $\\tfrac{10}{12} = \\tfrac{5}{6}$.' },
      ],
      resultado: '$\\tfrac{5}{6}$',
    },
    {
      titulo: 'Fracción dividida por entero',
      enunciado: 'Calculá $\\tfrac{6}{7} \\div 2$.',
      pasos: [
        { explicacion: 'Escribimos 2 como $\\tfrac{2}{1}$.' },
        { explicacion: 'Damos vuelta: $\\tfrac{1}{2}$.' },
        { explicacion: '$\\tfrac{6}{7} \\times \\tfrac{1}{2} = \\tfrac{6}{14} = \\tfrac{3}{7}$.' },
      ],
      resultado: '$\\tfrac{3}{7}$',
    },
  ],
  erroresComunes: [
    'Dar vuelta la primera en lugar de la segunda.',
    'Olvidarse de invertir y multiplicar tal cual (eso da una multiplicación, no división).',
    'Confundir la inversa con la opuesta. La inversa "da vuelta" la fracción; la opuesta cambia el signo.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Calculá $\\tfrac{3}{5} \\div \\tfrac{2}{7}$.',
        opciones: ['$\\tfrac{6}{35}$', '$\\tfrac{21}{10}$', '$\\tfrac{5}{7}$', '$\\tfrac{15}{14}$'],
        correcta: 1,
        explicacion: '3/5 × 7/2 = 21/10.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es la inversa de $\\tfrac{5}{8}$?',
        opciones: ['$\\tfrac{8}{5}$', '$-\\tfrac{5}{8}$', '$\\tfrac{1}{40}$', '$\\tfrac{1}{8}$'],
        correcta: 0,
        explicacion: 'La inversa "da vuelta" numerador y denominador: 8/5.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Dividir es lo mismo que multiplicar por la inversa.',
        correcta: true,
        explicacion: 'Cierto. Es la regla de la división de fracciones.',
      },
    ],
  },
  relacionados: ['fracciones-multiplicacion'],
  tags: ['fracciones', 'division', 'inversa'],
};
