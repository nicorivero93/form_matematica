import type { Tema } from '../tipos';

export const FRACCIONES_SUMA_RESTA: Tema = {
  slug: 'fracciones-suma-resta',
  titulo: 'Suma y resta de fracciones (mismo denominador)',
  anios: ['primaria-5'],
  area: 'fracciones-decimales',
  nivel: 'intermedio',
  resumen:
    'Cuando dos fracciones tienen el mismo denominador, sumar o restar es muy fácil: solo trabajamos los numeradores.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Si tenés $\\tfrac{2}{5}$ de pizza y le sumás otros $\\tfrac{1}{5}$, ¿cuántos pedazos de quinto tenés? 2 + 1 = 3, así que tenés $\\tfrac{3}{5}$.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Regla',
      texto:
        'Cuando los denominadores son iguales: sumamos (o restamos) los numeradores y dejamos el mismo denominador.',
    },
    {
      tipo: 'latex',
      latex:
        '\\dfrac{a}{n} + \\dfrac{b}{n} = \\dfrac{a+b}{n} \\qquad \\dfrac{a}{n} - \\dfrac{b}{n} = \\dfrac{a-b}{n}',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'Sumar el denominador es un error muy común. $\\tfrac{1}{4} + \\tfrac{2}{4}$ NO da $\\tfrac{3}{8}$. El denominador no cambia.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Suma con mismo denominador',
      latex: '\\dfrac{a}{n} + \\dfrac{b}{n} = \\dfrac{a+b}{n}',
      variables: [
        { simbolo: 'a, b', nombre: 'numeradores', desc: 'cantidad de partes de cada fracción' },
        { simbolo: 'n', nombre: 'denominador común', desc: 'no cambia' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Suma simple',
      enunciado: 'Calculá $\\tfrac{3}{8} + \\tfrac{2}{8}$.',
      pasos: [
        { explicacion: 'Mismo denominador (8). Sumamos numeradores: 3 + 2 = 5.' },
        { explicacion: 'El denominador queda igual: 8.' },
      ],
      resultado: '$\\tfrac{5}{8}$',
    },
    {
      titulo: 'Resta',
      enunciado: 'Calculá $\\tfrac{7}{10} - \\tfrac{3}{10}$.',
      pasos: [
        { explicacion: 'Mismo denominador (10). Restamos numeradores: 7 - 3 = 4.' },
        { explicacion: 'El denominador queda igual: 10.' },
        {
          explicacion:
            'Resultado: $\\tfrac{4}{10}$. Podemos simplificar dividiendo por 2: $\\tfrac{2}{5}$.',
        },
      ],
      resultado: '$\\tfrac{4}{10} = \\tfrac{2}{5}$',
    },
    {
      titulo: 'Resultado igual al denominador (entero)',
      enunciado: 'Calculá $\\tfrac{4}{6} + \\tfrac{2}{6}$.',
      pasos: [
        { explicacion: 'Sumamos numeradores: 4 + 2 = 6.' },
        { explicacion: 'Resultado: $\\tfrac{6}{6}$.' },
        { explicacion: 'Si el numerador es igual al denominador, la fracción vale 1 entero.' },
      ],
      resultado: '1 (un entero).',
    },
  ],
  erroresComunes: [
    'Sumar también los denominadores (es el error más común). El denominador NO cambia cuando es el mismo.',
    'Olvidar simplificar el resultado al final.',
    'Restar el numerador grande del chico cuando el orden importa: $\\tfrac{2}{5} - \\tfrac{4}{5}$ da negativo, no es lo mismo que $\\tfrac{4}{5} - \\tfrac{2}{5}$.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Calculá $\\tfrac{2}{7} + \\tfrac{4}{7}$.',
        opciones: ['$\\tfrac{6}{14}$', '$\\tfrac{6}{7}$', '$\\tfrac{8}{7}$', '$\\tfrac{2}{7}$'],
        correcta: 1,
        explicacion: 'Mismo denominador. 2+4=6. Resultado: $\\tfrac{6}{7}$.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Calculá $\\tfrac{5}{9} - \\tfrac{2}{9}$.',
        opciones: ['$\\tfrac{3}{9}$', '$\\tfrac{3}{0}$', '$\\tfrac{7}{9}$', 'no se puede'],
        correcta: 0,
        explicacion: 'Mismo denominador. 5-2=3. Resultado: $\\tfrac{3}{9}$ (que se puede simplificar a $\\tfrac{1}{3}$).',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$\\tfrac{1}{4} + \\tfrac{2}{4} = \\tfrac{3}{8}$.',
        correcta: false,
        explicacion: 'No. Cuando los denominadores son iguales, no se suman. La respuesta correcta es $\\tfrac{3}{4}$.',
      },
    ],
  },
  visualizadorId: 'fracciones-pizza',
  relacionados: ['fracciones-introduccion', 'fracciones-equivalentes', 'fracciones-comparar'],
  tags: ['fracciones', 'suma', 'resta', 'mismo denominador'],
};
