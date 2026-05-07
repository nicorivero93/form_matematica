import type { Tema } from '../tipos';

export const ECUACIONES_PRIMER_GRADO: Tema = {
  slug: 'ecuaciones-primer-grado',
  titulo: 'Ecuaciones de primer grado',
  anios: ['secundaria-1'],
  area: 'algebra',
  nivel: 'intermedio',
  resumen:
    'Ecuaciones con la incógnita en ambos miembros, paréntesis y fracciones. Estrategia general de resolución.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Una ecuación de primer grado tiene la incógnita elevada al exponente 1. La estrategia es transformarla en algo del tipo $x = \\text{número}$.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Sacar paréntesis aplicando propiedad distributiva.',
        'Si hay denominadores, multiplicar todo por el MCM para sacarlos.',
        'Pasar todos los términos con $x$ a un miembro y los números al otro.',
        'Despejar dividiendo por el coeficiente de $x$.',
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Verificá siempre la solución reemplazando el valor en la ecuación original.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Con incógnita en ambos lados',
      enunciado: 'Resolvé $5x - 7 = 2x + 11$.',
      pasos: [
        { explicacion: 'Pasamos $2x$ al primer miembro: $5x - 2x - 7 = 11$.' },
        { explicacion: '$3x - 7 = 11$.' },
        { explicacion: 'Pasamos $-7$: $3x = 18$.' },
        { explicacion: '$x = 6$.' },
      ],
      resultado: '$x = 6$.',
    },
    {
      titulo: 'Con paréntesis',
      enunciado: 'Resolvé $2(x - 3) = x + 4$.',
      pasos: [
        { explicacion: 'Distributiva: $2x - 6 = x + 4$.' },
        { explicacion: 'Pasamos $x$: $x - 6 = 4$.' },
        { explicacion: '$x = 10$.' },
      ],
      resultado: '$x = 10$.',
    },
  ],
  erroresComunes: [
    'No aplicar bien la propiedad distributiva (olvidar multiplicar el segundo término del paréntesis).',
    'Cambiar mal el signo al pasar términos.',
    'No multiplicar TODOS los términos por el MCM al eliminar denominadores.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Resolvé $3x + 2 = 14$.',
        respuesta: 4,
        explicacion: '$3x = 12 \\Rightarrow x = 4$.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Resolvé $4x - 1 = 2x + 9$.',
        respuesta: 5,
        explicacion: '$2x = 10 \\Rightarrow x = 5$.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Resolvé $3(x + 2) = 18$.',
        respuesta: 4,
        explicacion: '$3x + 6 = 18 \\Rightarrow x = 4$.',
      },
    ],
  },
  relacionados: ['ecuaciones-primer-grado-simples', 'lenguaje-algebraico-avanzado'],
  tags: ['ecuaciones', 'primer grado', 'distributiva'],
};
