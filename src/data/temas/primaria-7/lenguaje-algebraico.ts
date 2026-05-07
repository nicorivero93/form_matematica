import type { Tema } from '../tipos';

export const LENGUAJE_ALGEBRAICO: Tema = {
  slug: 'lenguaje-algebraico',
  titulo: 'Lenguaje algebraico (introducción)',
  anios: ['primaria-7'],
  area: 'algebra',
  nivel: 'intro',
  resumen:
    'Cómo traducir frases del castellano a expresiones matemáticas con letras (variables) que representan números desconocidos.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Variable',
      texto:
        'Una variable es una letra (generalmente $x$, $y$, $a$, $n$) que representa un número desconocido o un número que puede cambiar.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El lenguaje algebraico nos permite expresar ideas que dependen de un número sin saber cuál es ese número. Por ejemplo: "el doble de un número" se escribe $2x$.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Frase', 'Expresión'],
      filas: [
        ['Un número', '$x$'],
        ['El doble de un número', '$2x$'],
        ['El triple', '$3x$'],
        ['La mitad', '$\\tfrac{x}{2}$'],
        ['Un número aumentado en 5', '$x + 5$'],
        ['Un número disminuido en 3', '$x - 3$'],
        ['El cuadrado de un número', '$x^2$'],
        ['El siguiente de un número', '$x + 1$'],
        ['El doble más 4', '$2x + 4$'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Cuando una variable está al lado de un número, se entiende que están multiplicados: $3x$ significa $3 \\times x$. No hace falta poner el signo.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Traducir una frase',
      enunciado: 'Escribí algebraicamente: "el doble de un número aumentado en 7".',
      pasos: [
        { explicacion: 'Llamemos $x$ al número.' },
        { explicacion: 'El doble: $2x$.' },
        { explicacion: 'Aumentado en 7: $2x + 7$.' },
      ],
      resultado: '$2x + 7$.',
    },
    {
      titulo: 'Traducir al revés',
      enunciado: '¿Qué frase representa la expresión $x - 5$?',
      pasos: [{ explicacion: 'Un número menos 5, o "un número disminuido en 5".' }],
      resultado: 'Un número disminuido en 5.',
    },
    {
      titulo: 'Reemplazar la variable',
      enunciado: 'Si $x = 4$, ¿cuánto vale $3x + 2$?',
      pasos: [
        { explicacion: 'Reemplazamos: $3 \\times 4 + 2$.' },
        { explicacion: '$= 12 + 2 = 14$.' },
      ],
      resultado: '14.',
    },
  ],
  erroresComunes: [
    'Olvidar que entre número y variable hay multiplicación implícita: $3x$ no es 3 más x ni 3 con x.',
    'Confundir "el doble de" (×2) con "+ 2".',
    'No respetar el orden de las operaciones al reemplazar la variable.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Qué expresión representa "un número más su triple"?',
        opciones: ['$x + 3$', '$x \\times 3$', '$x + 3x = 4x$', '$3x - x$'],
        correcta: 2,
        explicacion: 'x + 3x = 4x.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Si $a = 5$, ¿cuánto vale $2a + 3$?',
        respuesta: 13,
        explicacion: '2 × 5 + 3 = 13.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En la expresión $7x$ el 7 y el $x$ están multiplicados.',
        correcta: true,
        explicacion: 'Cierto. La multiplicación se sobreentiende cuando un número está pegado a una variable.',
      },
    ],
  },
  relacionados: ['ecuaciones-primer-grado-simples', 'orden-operaciones'],
  tags: ['algebra', 'lenguaje algebraico', 'variables', 'expresiones'],
};
