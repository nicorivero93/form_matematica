import type { Tema } from '../tipos';

export const ENTEROS_MULTIPLICACION: Tema = {
  slug: 'enteros-multiplicacion',
  titulo: 'Multiplicación y división de enteros (regla de signos)',
  anios: ['primaria-6'],
  area: 'numeros-y-operaciones',
  nivel: 'intermedio',
  resumen:
    'Cuando multiplicás o dividís enteros, primero hacés la cuenta sin signos y al final aplicás la regla: + por + da +, - por - también da +, mixto da -.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Regla de los signos',
      texto:
        'Mismo signo → resultado positivo. Distinto signo → resultado negativo. Vale para multiplicación y división.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Operación', 'Signo del resultado'],
      filas: [
        ['(+) × (+) o (+) ÷ (+)', '+'],
        ['(-) × (-) o (-) ÷ (-)', '+'],
        ['(+) × (-) o (+) ÷ (-)', '-'],
        ['(-) × (+) o (-) ÷ (+)', '-'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Por qué (-) × (-) = (+)',
      texto:
        'Pensalo así: multiplicar por -1 "da vuelta" la dirección en la recta. Si das vuelta dos veces, volvés al lugar original. Por eso dos negativos se cancelan.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Multiplicación con distinto signo',
      enunciado: 'Calculá $(-4) \\times (+6)$.',
      pasos: [
        { explicacion: 'Sin signos: 4 × 6 = 24.' },
        { explicacion: 'Distinto signo → negativo.' },
      ],
      resultado: '-24.',
    },
    {
      titulo: 'Dos negativos',
      enunciado: 'Calculá $(-3) \\times (-7)$.',
      pasos: [
        { explicacion: 'Sin signos: 3 × 7 = 21.' },
        { explicacion: 'Mismo signo → positivo.' },
      ],
      resultado: '+21.',
    },
    {
      titulo: 'División con cero resto',
      enunciado: 'Calculá $(-20) \\div (+4)$.',
      pasos: [
        { explicacion: 'Sin signos: 20 ÷ 4 = 5.' },
        { explicacion: 'Distinto signo → negativo.' },
      ],
      resultado: '-5.',
    },
  ],
  erroresComunes: [
    'Aplicar la regla de los signos para sumar o restar (es solo para multiplicar/dividir).',
    'Confundir "(-) × (-)" con "(-) + (-)".',
    'Olvidar el signo en el resultado final.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Calculá: (-7) × (+3) = ? (con signo)',
        respuesta: -21,
        explicacion: '7×3=21. Distinto signo → -21.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Calculá: (-12) ÷ (-4) = ?',
        respuesta: 3,
        explicacion: '12 ÷ 4 = 3. Mismo signo → +3.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '(-5) × (-2) = -10.',
        correcta: false,
        explicacion: 'Falso. Mismo signo da positivo: (-5) × (-2) = +10.',
      },
    ],
  },
  relacionados: ['enteros-suma-resta', 'numeros-enteros-introduccion'],
  tags: ['enteros', 'multiplicacion', 'division', 'regla de signos'],
};
