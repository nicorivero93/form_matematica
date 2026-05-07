import type { Tema } from '../tipos';

export const SEGUNDA_DERIVADA: Tema = {
  slug: 'segunda-derivada',
  titulo: 'Segunda derivada y concavidad',
  anios: ['secundaria-5'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    '$f\'\'$ indica si la curva es cóncava hacia arriba o hacia abajo. Útil para identificar inflexiones.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['$f\'\'$', 'Concavidad'],
      filas: [
        ['$> 0$', 'Hacia arriba (forma U).'],
        ['$< 0$', 'Hacia abajo (forma de U invertida).'],
        ['$= 0$', 'Posible punto de inflexión.'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Test de la 2da derivada',
      texto:
        'Si $f\'(x_0) = 0$ y $f\'\'(x_0) > 0$: mínimo. Si $f\'\'(x_0) < 0$: máximo.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Concavidad',
      enunciado: 'Estudiar concavidad de $f(x) = x^3$.',
      pasos: [
        { explicacion: '$f\'(x) = 3x^2$. $f\'\'(x) = 6x$.' },
        { explicacion: '$f\'\' < 0$ para $x < 0$ (cóncava abajo).' },
        { explicacion: '$f\'\' > 0$ para $x > 0$ (cóncava arriba).' },
        { explicacion: 'Inflexión en $x = 0$.' },
      ],
      resultado: 'Inflexión en (0, 0).',
    },
  ],
  erroresComunes: [
    'Confundir 1ra y 2da derivada.',
    'Pensar que $f\'\' = 0$ siempre da inflexión.',
    'Mezclar mínimo con máximo en el test.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado: 'Si $f\'\'(x) > 0$ en un intervalo, $f$ es cóncava hacia arriba allí.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Un punto donde $f\'\' = 0$ siempre es inflexión.',
        correcta: false,
        explicacion: 'Falso. Hay que verificar cambio de signo.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En un mínimo local, $f\'\' > 0$.',
        correcta: true,
        explicacion: 'Test de la segunda derivada.',
      },
    ],
  },
  relacionados: ['derivada-aplicaciones', 'analisis-completo'],
  tags: ['segunda derivada', 'concavidad', 'inflexion'],
};
