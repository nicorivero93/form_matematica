import type { Tema } from '../tipos';

export const PROBABILIDAD_BASICA: Tema = {
  slug: 'probabilidad-basica',
  titulo: 'Probabilidad básica',
  anios: ['primaria-6'],
  area: 'estadistica-probabilidad',
  nivel: 'intro',
  resumen:
    'Cuántas chances tiene algo de pasar. Casos favorables sobre casos posibles. Cómo se expresa.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Probabilidad',
      texto:
        'La probabilidad de un suceso es la fracción de casos favorables sobre el total de casos posibles, suponiendo que todos sean igualmente probables.',
    },
    {
      tipo: 'latex',
      latex: 'P(\\text{suceso}) = \\dfrac{\\text{casos favorables}}{\\text{casos posibles}}',
      display: true,
    },
    {
      tipo: 'parrafo',
      texto:
        'La probabilidad va de 0 (imposible) a 1 (seguro). También se puede expresar en porcentaje: 0% a 100%.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Probabilidad', 'Significa'],
      filas: [
        ['0', 'Imposible: nunca pasa.'],
        ['Cerca de 0', 'Poco probable.'],
        ['$\\tfrac{1}{2}$', 'Igual de probable que pasar o no.'],
        ['Cerca de 1', 'Muy probable.'],
        ['1', 'Seguro: pasa siempre.'],
      ],
    },
  ],
  formulasClave: [
    {
      nombre: 'Probabilidad de un suceso',
      latex: 'P(A) = \\dfrac{\\#\\text{favorables}}{\\#\\text{posibles}}',
      variables: [
        { simbolo: 'P(A)', nombre: 'probabilidad de A', desc: 'entre 0 y 1' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Lanzar un dado',
      enunciado: 'Lanzás un dado de 6 caras. ¿Cuál es la probabilidad de sacar un 3?',
      pasos: [
        { explicacion: 'Casos favorables: 1 (sacar 3).' },
        { explicacion: 'Casos posibles: 6 (puede salir 1, 2, 3, 4, 5 o 6).' },
        { explicacion: 'P = $\\tfrac{1}{6}$ ≈ 0,17 o 17%.' },
      ],
      resultado: '$\\tfrac{1}{6}$ ≈ 17%.',
    },
    {
      titulo: 'Sacar un múltiplo',
      enunciado:
        'En una bolsa hay bolitas numeradas del 1 al 10. ¿Probabilidad de sacar un múltiplo de 3?',
      pasos: [
        { explicacion: 'Múltiplos de 3 entre 1 y 10: 3, 6 y 9. Son 3 casos favorables.' },
        { explicacion: 'Casos posibles: 10.' },
        { explicacion: 'P = $\\tfrac{3}{10}$ = 0,3 = 30%.' },
      ],
      resultado: '$\\tfrac{3}{10}$ = 30%.',
    },
  ],
  erroresComunes: [
    'Olvidar que todos los casos deben ser igualmente probables (no se aplica a una moneda trucada).',
    'Confundir casos favorables con casos posibles.',
    'Pensar que un resultado anterior cambia el siguiente. La probabilidad no tiene memoria.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado:
          'Sacás una carta de un mazo de 40. ¿Cuál es la probabilidad de que sea de copas (10 cartas son de copas)?',
        opciones: ['$\\tfrac{1}{40}$', '$\\tfrac{1}{4}$', '$\\tfrac{1}{10}$', '$\\tfrac{4}{40}$'],
        correcta: 1,
        explicacion: '10 favorables / 40 posibles = 1/4.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es la probabilidad de sacar un número par tirando un dado?',
        opciones: ['$\\tfrac{1}{6}$', '$\\tfrac{1}{3}$', '$\\tfrac{1}{2}$', '$\\tfrac{1}{4}$'],
        correcta: 2,
        explicacion: 'Pares: 2, 4, 6. Son 3 favorables sobre 6 posibles → 1/2.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si tirás una moneda 5 veces y siempre sale cara, en la 6ta es más probable que salga cruz.',
        correcta: false,
        explicacion:
          'No. Cada lanzamiento es independiente: sigue siendo 1/2 de cara y 1/2 de cruz.',
      },
    ],
  },
  visualizadorId: 'fracciones-pizza',
  relacionados: ['fracciones-decimales-conversion', 'porcentaje'],
  tags: ['probabilidad', 'azar', 'casos favorables'],
};
