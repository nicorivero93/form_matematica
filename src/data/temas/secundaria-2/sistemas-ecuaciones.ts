import type { Tema } from '../tipos';

export const SISTEMAS_ECUACIONES: Tema = {
  slug: 'sistemas-ecuaciones',
  titulo: 'Sistemas de ecuaciones lineales',
  anios: ['secundaria-2'],
  area: 'algebra',
  nivel: 'intermedio',
  resumen:
    'Dos ecuaciones con dos incógnitas. Métodos: sustitución, igualación y suma o resta (eliminación).',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Un sistema de ecuaciones lineales tiene varias ecuaciones que se cumplen al mismo tiempo. La solución es el par $(x, y)$ que satisface ambas.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Método', 'Idea'],
      filas: [
        ['Sustitución', 'Despejás una variable de una ecuación y la sustituís en la otra.'],
        ['Igualación', 'Despejás la misma variable de ambas y las igualás.'],
        ['Suma o resta', 'Sumás o restás ecuaciones para eliminar una variable.'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Geométricamente: cada ecuación es una recta. La solución es el punto donde se cortan. Si son paralelas, no hay solución. Si son la misma, hay infinitas.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Sustitución',
      enunciado: 'Resolvé $\\begin{cases} x + y = 10 \\\\ x - y = 4 \\end{cases}$.',
      pasos: [
        { explicacion: 'De la 1ra: $x = 10 - y$.' },
        { explicacion: 'Sustituyo en la 2da: $(10 - y) - y = 4 \\Rightarrow 10 - 2y = 4 \\Rightarrow y = 3$.' },
        { explicacion: 'Volvemos: $x = 10 - 3 = 7$.' },
      ],
      resultado: '$x = 7$, $y = 3$.',
    },
    {
      titulo: 'Suma o resta',
      enunciado: 'Resolvé $\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}$.',
      pasos: [
        { explicacion: 'Sumamos: $3x = 9 \\Rightarrow x = 3$.' },
        { explicacion: 'En la 2da: $3 - y = 2 \\Rightarrow y = 1$.' },
      ],
      resultado: '$x = 3$, $y = 1$.',
    },
  ],
  erroresComunes: [
    'Sumar mal los términos al usar suma/resta.',
    'No verificar la solución en ambas ecuaciones.',
    'Equivocarse en el signo al despejar.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Resolvé $x + y = 8$, $x - y = 2$. Ingresá $x$.',
        respuesta: 5,
        explicacion: 'Sumando: $2x = 10 \\Rightarrow x = 5$.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Mismo sistema, ¿cuánto vale $y$?',
        respuesta: 3,
        explicacion: '$5 + y = 8 \\Rightarrow y = 3$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si dos rectas son paralelas, el sistema correspondiente no tiene solución.',
        correcta: true,
        explicacion: 'Cierto: paralelas nunca se cortan.',
      },
    ],
  },
  relacionados: ['ecuaciones-primer-grado', 'funcion-lineal-completa'],
  tags: ['sistemas', 'ecuaciones', 'sustitucion', 'eliminacion'],
};
