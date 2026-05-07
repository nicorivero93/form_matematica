import type { Tema } from '../tipos';

export const INECUACIONES_PRIMER_GRADO: Tema = {
  slug: 'inecuaciones-primer-grado',
  titulo: 'Inecuaciones de primer grado',
  anios: ['secundaria-1'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Como las ecuaciones pero con $<$, $>$, $\\le$ o $\\ge$. Tienen muchas soluciones, no una sola.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Una inecuación es una desigualdad con incógnita. La solución no es un número solo, sino un conjunto: por ejemplo "todos los x mayores que 5".',
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      titulo: 'Regla clave',
      texto:
        'Cuando multiplicás o dividís por un número NEGATIVO, el signo de la desigualdad SE INVIERTE. Si era $<$, pasa a $>$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Inecuación simple',
      enunciado: 'Resolvé $3x + 5 \\le 14$.',
      pasos: [
        { explicacion: 'Pasamos 5: $3x \\le 9$.' },
        { explicacion: 'Dividimos por 3 (positivo): $x \\le 3$.' },
      ],
      resultado: '$x \\le 3$ (todos los x menores o iguales a 3).',
    },
    {
      titulo: 'Con coeficiente negativo',
      enunciado: 'Resolvé $-2x > 6$.',
      pasos: [
        { explicacion: 'Dividimos por -2 (negativo): hay que invertir el signo.' },
        { explicacion: '$x < -3$.' },
      ],
      resultado: '$x < -3$.',
    },
  ],
  erroresComunes: [
    'Olvidar invertir la desigualdad al multiplicar/dividir por negativo.',
    'Tratar la inecuación exactamente como ecuación (perdés información de signo).',
    'Usar el signo de igualdad en el resultado final.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Resolvé $2x - 4 < 6$.',
        opciones: ['$x < 5$', '$x > 5$', '$x < 1$', '$x > 1$'],
        correcta: 0,
        explicacion: '$2x < 10 \\Rightarrow x < 5$.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Resolvé $-x \\ge 4$.',
        opciones: ['$x \\le -4$', '$x \\ge -4$', '$x \\le 4$', '$x \\ge 4$'],
        correcta: 0,
        explicacion: 'Multiplicamos por -1, invertimos: $x \\le -4$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Cuando dividís ambos lados por -3, el signo $>$ se mantiene.',
        correcta: false,
        explicacion: 'Falso. Dividir por negativo INVIERTE el signo.',
      },
    ],
  },
  relacionados: ['ecuaciones-primer-grado'],
  tags: ['inecuaciones', 'desigualdad', 'algebra'],
};
