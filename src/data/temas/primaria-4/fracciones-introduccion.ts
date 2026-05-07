import type { Tema } from '../tipos';

export const FRACCIONES_INTRODUCCION: Tema = {
  slug: 'fracciones-introduccion',
  titulo: 'Introducción a las fracciones',
  anios: ['primaria-4'],
  area: 'fracciones-decimales',
  nivel: 'intro',
  resumen:
    'Qué es una fracción, qué representan el numerador y el denominador, y cómo leerla.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Cuando dividimos algo en partes iguales y queremos hablar de algunas de esas partes, usamos fracciones. Por ejemplo, si una pizza se corta en 4 partes iguales y como 1, comí $\\tfrac{1}{4}$ (un cuarto) de la pizza.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Fracción',
      texto:
        'Una fracción se escribe como dos números separados por una raya: el de arriba se llama numerador y dice cuántas partes tomamos. El de abajo se llama denominador y dice en cuántas partes iguales dividimos el total.',
    },
    {
      tipo: 'latex',
      latex: '\\dfrac{\\text{numerador}}{\\text{denominador}}',
      display: true,
    },
    {
      tipo: 'tabla',
      encabezados: ['Fracción', 'Cómo se lee', 'Significa'],
      filas: [
        ['$\\tfrac{1}{2}$', 'un medio', '1 parte de un total dividido en 2'],
        ['$\\tfrac{1}{3}$', 'un tercio', '1 parte de un total dividido en 3'],
        ['$\\tfrac{1}{4}$', 'un cuarto', '1 parte de un total dividido en 4'],
        ['$\\tfrac{2}{3}$', 'dos tercios', '2 partes de un total dividido en 3'],
        ['$\\tfrac{3}{4}$', 'tres cuartos', '3 partes de un total dividido en 4'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'Cuanto más grande es el denominador, más chico es cada pedazo. Un octavo ($\\tfrac{1}{8}$) es más chico que un medio ($\\tfrac{1}{2}$), porque dividimos en más partes.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Forma general de una fracción',
      latex: '\\dfrac{a}{b}',
      variables: [
        { simbolo: 'a', nombre: 'numerador', desc: 'cantidad de partes que tomamos' },
        { simbolo: 'b', nombre: 'denominador', desc: 'partes en las que se divide el total' },
      ],
      cuandoUsar: 'Para representar una parte de un todo dividido en partes iguales.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar una fracción en un dibujo',
      enunciado:
        'Una torta se corta en 8 porciones iguales y comemos 3. ¿Qué fracción de la torta nos comimos?',
      pasos: [
        { explicacion: 'El total se divide en 8 partes → denominador es 8.' },
        { explicacion: 'Tomamos 3 partes → numerador es 3.' },
        { explicacion: 'La fracción es $\\tfrac{3}{8}$.' },
      ],
      resultado: '$\\tfrac{3}{8}$ (tres octavos)',
    },
    {
      titulo: 'Comparar dos fracciones con el mismo denominador',
      enunciado: 'Tenemos $\\tfrac{2}{5}$ y $\\tfrac{4}{5}$. ¿Cuál es mayor?',
      pasos: [
        { explicacion: 'Las dos están divididas en 5 partes iguales (mismo denominador).' },
        {
          explicacion:
            'Como el denominador es el mismo, la mayor es la que tiene más partes (mayor numerador).',
        },
        { explicacion: '4 > 2, así que $\\tfrac{4}{5} > \\tfrac{2}{5}$.' },
      ],
      resultado: '$\\tfrac{4}{5}$ es mayor.',
    },
  ],
  erroresComunes: [
    'Pensar que un denominador grande significa una fracción grande. Es al revés: a mayor denominador, más chico es cada pedazo.',
    'Confundir numerador y denominador (qué va arriba, qué va abajo).',
    'Olvidar que las partes tienen que ser iguales para que sea una fracción.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado:
          'Una pizza se divide en 6 porciones iguales y comemos 2. ¿Qué fracción comimos?',
        opciones: ['2/4', '2/6', '6/2', '4/6'],
        correcta: 1,
        explicacion:
          'Total 6 porciones (denominador), comimos 2 (numerador): 2/6.',
      },
      {
        tipo: 'multiple',
        enunciado:
          '¿Cuál de estas fracciones es la más grande?',
        opciones: ['1/2', '1/3', '1/4', '1/8'],
        correcta: 0,
        explicacion:
          'Cuando el numerador es 1, gana la que tiene el denominador más chico, porque cada parte es más grande. 1/2 = una mitad.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En una fracción, el número de arriba es el denominador.',
        correcta: false,
        explicacion: 'No. Arriba va el numerador, abajo el denominador.',
      },
    ],
  },
  visualizadorId: 'fracciones-pizza',
  relacionados: ['fracciones-equivalentes'],
  tags: ['fracciones', 'numerador', 'denominador', 'partes'],
};
