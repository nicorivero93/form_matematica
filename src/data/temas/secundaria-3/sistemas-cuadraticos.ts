import type { Tema } from '../tipos';

export const SISTEMAS_CUADRATICOS: Tema = {
  slug: 'sistemas-cuadraticos',
  titulo: 'Sistemas con ecuaciones cuadráticas',
  anios: ['secundaria-3'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Resolver sistemas que combinan una ecuación lineal y una cuadrática usando sustitución.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Si tenés una ecuación lineal y una cuadrática, lo más práctico es despejar una variable de la lineal y sustituirla en la cuadrática.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'El sistema puede tener 0, 1 o 2 soluciones reales (geométricamente: la recta no toca, es tangente o corta a la parábola).',
    },
  ],
  ejemplos: [
    {
      titulo: 'Resolver',
      enunciado: '$\\begin{cases} y = x + 2 \\\\ y = x^2 \\end{cases}$.',
      pasos: [
        { explicacion: 'Igualamos: $x^2 = x + 2$.' },
        { explicacion: '$x^2 - x - 2 = 0$.' },
        { explicacion: 'Factorizando: $(x - 2)(x + 1) = 0$.' },
        { explicacion: '$x = 2$ o $x = -1$.' },
        { explicacion: 'Reemplazo: si $x=2$, $y=4$; si $x=-1$, $y=1$.' },
      ],
      resultado: 'Soluciones: $(2, 4)$ y $(-1, 1)$.',
    },
  ],
  erroresComunes: [
    'No usar la fórmula resolvente cuando la cuadrática no se factoriza.',
    'Olvidar que pueden ser 2 soluciones distintas.',
    'No verificar las soluciones en ambas ecuaciones.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Un sistema lineal-cuadrático puede tener 0, 1 o 2 soluciones.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Geométricamente, las soluciones son los puntos donde la recta corta la parábola.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En sistemas lineal-cuadráticos siempre se usa el método de igualación.',
        correcta: false,
        explicacion: 'No siempre, también podés sustituir.',
      },
    ],
  },
  relacionados: ['sistemas-ecuaciones', 'ecuaciones-segundo-grado'],
  tags: ['sistemas', 'cuadraticas', 'sustitucion'],
};
