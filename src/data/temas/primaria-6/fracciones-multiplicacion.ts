import type { Tema } from '../tipos';

export const FRACCIONES_MULTIPLICACION: Tema = {
  slug: 'fracciones-multiplicacion',
  titulo: 'Multiplicación de fracciones',
  anios: ['primaria-6'],
  area: 'fracciones-decimales',
  nivel: 'intermedio',
  resumen:
    'Multiplicar fracciones es muy fácil: multiplicás numeradores entre sí y denominadores entre sí.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Regla',
      texto:
        'Para multiplicar dos fracciones: multiplicás los numeradores entre sí y los denominadores entre sí.',
    },
    {
      tipo: 'latex',
      latex: '\\dfrac{a}{b} \\times \\dfrac{c}{d} = \\dfrac{a \\times c}{b \\times d}',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Simplificar antes',
      texto:
        'Conviene simplificar antes de multiplicar (dividiendo en cruz si encontrás factores comunes). Te ahorra hacer cuentas grandes y simplificar después.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Para multiplicar una fracción por un entero, lo escribís como una fracción con denominador 1: $5 = \\tfrac{5}{1}$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Multiplicación clásica',
      enunciado: 'Calculá $\\tfrac{2}{3} \\times \\tfrac{4}{5}$.',
      pasos: [
        { explicacion: 'Numeradores: 2 × 4 = 8.' },
        { explicacion: 'Denominadores: 3 × 5 = 15.' },
      ],
      resultado: '$\\tfrac{8}{15}$',
    },
    {
      titulo: 'Simplificar antes',
      enunciado: 'Calculá $\\tfrac{3}{8} \\times \\tfrac{4}{9}$.',
      pasos: [
        {
          explicacion:
            'En cruz: 4 y 8 tienen un 4 común (dividimos arriba 4→1, abajo 8→2).',
        },
        {
          explicacion:
            'En cruz: 3 y 9 tienen un 3 común (dividimos arriba 3→1, abajo 9→3).',
        },
        { explicacion: 'Queda $\\tfrac{1}{2} \\times \\tfrac{1}{3} = \\tfrac{1}{6}$.' },
      ],
      resultado: '$\\tfrac{1}{6}$',
    },
    {
      titulo: 'Fracción × entero',
      enunciado: 'Calculá $\\tfrac{2}{5} \\times 3$.',
      pasos: [
        { explicacion: 'Escribimos 3 como $\\tfrac{3}{1}$.' },
        { explicacion: '$\\tfrac{2}{5} \\times \\tfrac{3}{1} = \\tfrac{6}{5}$.' },
      ],
      resultado: '$\\tfrac{6}{5}$',
    },
  ],
  erroresComunes: [
    'Buscar denominador común antes de multiplicar (¡no hace falta!). Solo es necesario en suma y resta.',
    'Multiplicar solo numeradores y dejar el denominador.',
    'Olvidar simplificar al final.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Calculá $\\tfrac{1}{2} \\times \\tfrac{3}{4}$.',
        opciones: ['$\\tfrac{4}{6}$', '$\\tfrac{3}{8}$', '$\\tfrac{1}{8}$', '$\\tfrac{3}{6}$'],
        correcta: 1,
        explicacion: 'Numeradores: 1×3=3. Denominadores: 2×4=8. Resultado: 3/8.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Calculá $\\tfrac{2}{3} \\times 6$.',
        opciones: ['$\\tfrac{2}{18}$', '$\\tfrac{12}{3}$ = 4', '$\\tfrac{8}{3}$', '$\\tfrac{2}{6}$'],
        correcta: 1,
        explicacion: '2/3 × 6/1 = 12/3 = 4.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Para multiplicar dos fracciones tenés que buscar denominador común primero.',
        correcta: false,
        explicacion: 'No. Eso es solo para sumar y restar. La multiplicación es directa.',
      },
    ],
  },
  visualizadorId: 'fracciones-pizza',
  relacionados: ['fracciones-suma-resta-distinto-denominador', 'fracciones-division'],
  tags: ['fracciones', 'multiplicacion'],
};
