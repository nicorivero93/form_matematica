import type { Tema } from '../tipos';

export const FRACCIONES_COMPARAR: Tema = {
  slug: 'fracciones-comparar',
  titulo: 'Comparar fracciones',
  anios: ['primaria-5'],
  area: 'fracciones-decimales',
  nivel: 'intermedio',
  resumen:
    'Cómo decidir cuál de dos fracciones es mayor según el caso: mismo denominador, mismo numerador o ninguno.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Para comparar dos fracciones tenés tres casos típicos. Cada uno tiene un truco distinto.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Caso', 'Regla', 'Ejemplo'],
      filas: [
        ['Mismo denominador', 'Gana la de mayor numerador.', '$\\tfrac{3}{8} < \\tfrac{5}{8}$'],
        ['Mismo numerador', 'Gana la de menor denominador.', '$\\tfrac{1}{4} > \\tfrac{1}{6}$'],
        ['Distinto todo', 'Buscar denominador común y comparar numeradores.', 'ver ejemplo'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Truco: el medio',
      texto:
        'Si una fracción es mayor que $\\tfrac{1}{2}$ y la otra menor, ya la tenés. $\\tfrac{1}{2}$ es un comparador útil.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Mismo denominador',
      enunciado: 'Comparar $\\tfrac{3}{7}$ y $\\tfrac{5}{7}$.',
      pasos: [
        { explicacion: 'Tienen el mismo denominador (7).' },
        { explicacion: 'Gana la de mayor numerador: $5 > 3$.' },
      ],
      resultado: '$\\tfrac{5}{7} > \\tfrac{3}{7}$.',
    },
    {
      titulo: 'Mismo numerador',
      enunciado: 'Comparar $\\tfrac{2}{5}$ y $\\tfrac{2}{9}$.',
      pasos: [
        { explicacion: 'Tienen el mismo numerador (2).' },
        {
          explicacion:
            'Gana la de menor denominador: dividís en menos partes, cada parte es más grande.',
        },
        { explicacion: '$5 < 9$, así que $\\tfrac{2}{5}$ es mayor.' },
      ],
      resultado: '$\\tfrac{2}{5} > \\tfrac{2}{9}$.',
    },
    {
      titulo: 'Distinto numerador y denominador',
      enunciado: 'Comparar $\\tfrac{2}{3}$ y $\\tfrac{3}{4}$.',
      pasos: [
        { explicacion: 'Buscamos un denominador común. 12 sirve para ambos.' },
        {
          explicacion:
            '$\\tfrac{2}{3} = \\tfrac{8}{12}$ (multiplicamos arriba y abajo por 4).',
        },
        {
          explicacion:
            '$\\tfrac{3}{4} = \\tfrac{9}{12}$ (multiplicamos arriba y abajo por 3).',
        },
        { explicacion: 'Ahora tienen el mismo denominador. $9 > 8$, así que $\\tfrac{3}{4}$ es mayor.' },
      ],
      resultado: '$\\tfrac{3}{4} > \\tfrac{2}{3}$.',
    },
  ],
  erroresComunes: [
    'Pensar que la fracción con números más grandes es siempre mayor. $\\tfrac{1}{4}$ es más chica que $\\tfrac{1}{2}$ aunque sus números sean mayores.',
    'No buscar denominador común al comparar fracciones distintas.',
    'Comparar numeradores con denominadores distintos directamente.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál de estas fracciones es mayor: $\\tfrac{3}{5}$ o $\\tfrac{2}{5}$?',
        opciones: ['$\\tfrac{3}{5}$', '$\\tfrac{2}{5}$', 'Son iguales', 'No se puede comparar'],
        correcta: 0,
        explicacion: 'Mismo denominador, gana la de mayor numerador: 3 > 2.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es mayor: $\\tfrac{1}{6}$ o $\\tfrac{1}{4}$?',
        opciones: ['$\\tfrac{1}{6}$', '$\\tfrac{1}{4}$', 'Son iguales', 'Depende'],
        correcta: 1,
        explicacion: 'Mismo numerador, gana la de menor denominador: 4 < 6, así que $\\tfrac{1}{4}$ es mayor.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$\\tfrac{4}{8}$ es mayor que $\\tfrac{1}{2}$.',
        correcta: false,
        explicacion: '$\\tfrac{4}{8}$ es equivalente a $\\tfrac{1}{2}$, no mayor.',
      },
    ],
  },
  visualizadorId: 'fracciones-pizza',
  relacionados: ['fracciones-introduccion', 'fracciones-equivalentes', 'fracciones-suma-resta'],
  tags: ['fracciones', 'comparar', 'mayor que', 'denominador comun'],
};
