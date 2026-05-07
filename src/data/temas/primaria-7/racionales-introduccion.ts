import type { Tema } from '../tipos';

export const RACIONALES_INTRODUCCION: Tema = {
  slug: 'racionales-introduccion',
  titulo: 'Números racionales',
  anios: ['primaria-7'],
  area: 'fracciones-decimales',
  nivel: 'intro',
  resumen:
    'Los números racionales incluyen enteros, fracciones y decimales finitos o periódicos. Cualquier número que se puede escribir como fracción.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Número racional',
      texto:
        'Un número racional es cualquiera que se puede escribir como una fracción $\\tfrac{a}{b}$ con $a, b$ enteros y $b \\neq 0$. Se simboliza con $\\mathbb{Q}$.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Todos los enteros son racionales: 5 = $\\tfrac{5}{1}$. Las fracciones son racionales por definición. Los decimales finitos también: 0,75 = $\\tfrac{75}{100} = \\tfrac{3}{4}$. Los decimales periódicos también lo son.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Número', '¿Racional?', 'Como fracción'],
      filas: [
        ['7', 'Sí', '$\\tfrac{7}{1}$'],
        ['$-\\tfrac{3}{5}$', 'Sí', '$-\\tfrac{3}{5}$'],
        ['0,25', 'Sí', '$\\tfrac{1}{4}$'],
        ['$0{,}\\overline{3}$ (periódico)', 'Sí', '$\\tfrac{1}{3}$'],
        ['π', 'No', '(es irracional)'],
        ['$\\sqrt{2}$', 'No', '(es irracional)'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Los racionales se ordenan en la recta numérica. Entre dos racionales siempre hay infinitos racionales más.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Escribir como fracción',
      enunciado: 'Escribí -3 como fracción.',
      pasos: [{ explicacion: 'Cualquier entero $n$ se escribe $\\tfrac{n}{1}$.' }],
      resultado: '$-\\tfrac{3}{1}$.',
    },
    {
      titulo: 'Comparar racionales',
      enunciado: 'Ordená de menor a mayor: $\\tfrac{1}{2}$, $-0{,}5$, $0{,}75$.',
      pasos: [
        { explicacion: 'Pasamos todo a decimal: 0,5; -0,5; 0,75.' },
        { explicacion: 'Ordenamos: -0,5 < 0,5 < 0,75.' },
      ],
      resultado: '$-0{,}5 < \\tfrac{1}{2} < 0{,}75$.',
    },
  ],
  erroresComunes: [
    'Pensar que los racionales son solo fracciones (también incluyen enteros y decimales finitos).',
    'Confundir "decimal periódico" con "irracional". Los periódicos son racionales.',
    'Olvidar el signo cuando el racional es negativo.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál de estos NO es racional?',
        opciones: ['$\\tfrac{2}{3}$', '0,75', '$\\sqrt{2}$', '$-5$'],
        correcta: 2,
        explicacion: '$\\sqrt{2}$ es irracional (no se puede escribir como fracción).',
      },
      {
        tipo: 'multiple',
        enunciado: '¿0,5 como fracción simplificada?',
        opciones: ['$\\tfrac{5}{10}$', '$\\tfrac{1}{2}$', '$\\tfrac{1}{5}$', '$\\tfrac{2}{1}$'],
        correcta: 1,
        explicacion: '0,5 = 5/10 = 1/2.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Todo número entero es racional.',
        correcta: true,
        explicacion: 'Sí: cualquier entero $n$ se escribe $n/1$.',
      },
    ],
  },
  relacionados: ['fracciones-decimales-conversion', 'numeros-enteros-introduccion'],
  tags: ['racionales', 'Q', 'fracciones', 'decimales'],
};
