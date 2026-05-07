import type { Tema } from '../tipos';

export const FRACCIONES_OPERACIONES_MIXTAS: Tema = {
  slug: 'fracciones-operaciones-mixtas',
  titulo: 'Operaciones combinadas con fracciones',
  anios: ['primaria-7'],
  area: 'fracciones-decimales',
  nivel: 'avanzado',
  resumen:
    'Cómo resolver expresiones que combinan suma, resta, multiplicación y división de fracciones. Aplicar el orden de operaciones.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Las operaciones combinadas con fracciones son como las de números enteros: hay que respetar el orden (paréntesis, multiplicación/división, suma/resta).',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Estrategia',
      texto:
        '1) Resolver paréntesis. 2) Hacer multiplicaciones y divisiones (sin denominador común). 3) Hacer sumas y restas (con denominador común). 4) Simplificar el resultado final.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Combinada simple',
      enunciado: 'Calculá $\\tfrac{1}{2} + \\tfrac{1}{3} \\times \\tfrac{3}{4}$.',
      pasos: [
        { explicacion: 'Multiplicación primero: $\\tfrac{1}{3} \\times \\tfrac{3}{4} = \\tfrac{3}{12} = \\tfrac{1}{4}$.' },
        { explicacion: 'Suma: $\\tfrac{1}{2} + \\tfrac{1}{4}$. MCM = 4.' },
        { explicacion: '$\\tfrac{2}{4} + \\tfrac{1}{4} = \\tfrac{3}{4}$.' },
      ],
      resultado: '$\\tfrac{3}{4}$.',
    },
    {
      titulo: 'Con paréntesis',
      enunciado: 'Calculá $(\\tfrac{1}{2} + \\tfrac{1}{3}) \\times \\tfrac{6}{5}$.',
      pasos: [
        { explicacion: 'Paréntesis: $\\tfrac{1}{2} + \\tfrac{1}{3} = \\tfrac{3}{6} + \\tfrac{2}{6} = \\tfrac{5}{6}$.' },
        { explicacion: 'Multiplicamos: $\\tfrac{5}{6} \\times \\tfrac{6}{5} = \\tfrac{30}{30} = 1$.' },
      ],
      resultado: '1.',
    },
  ],
  erroresComunes: [
    'Sumar antes de multiplicar.',
    'Olvidar simplificar al final.',
    'Buscar denominador común para una multiplicación (no hace falta).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '$\\tfrac{1}{2} + \\tfrac{1}{4} \\times 2$ es:',
        opciones: ['$\\tfrac{3}{2}$', '$\\tfrac{1}{2}$', '$\\tfrac{3}{4}$', '1'],
        correcta: 3,
        explicacion: '1/4 × 2 = 1/2. 1/2 + 1/2 = 1.',
      },
      {
        tipo: 'multiple',
        enunciado: '$(1 - \\tfrac{1}{3}) \\div \\tfrac{2}{3}$ es:',
        opciones: ['1', '$\\tfrac{2}{3}$', '$\\tfrac{4}{9}$', '$\\tfrac{1}{3}$'],
        correcta: 0,
        explicacion: '1 - 1/3 = 2/3. (2/3) ÷ (2/3) = 1.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Cuando hay paréntesis, primero hay que resolver lo de adentro.',
        correcta: true,
        explicacion: 'Cierto. Es la regla del orden de operaciones.',
      },
    ],
  },
  visualizadorId: 'fracciones-pizza',
  relacionados: ['fracciones-suma-resta-distinto-denominador', 'fracciones-multiplicacion', 'orden-operaciones'],
  tags: ['fracciones', 'operaciones', 'combinadas', 'orden'],
};
