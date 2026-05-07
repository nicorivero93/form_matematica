import type { Tema } from '../tipos';

export const DIFERENCIAL_TOTAL: Tema = {
  slug: 'diferencial-total',
  titulo: 'Diferencial total y diferenciabilidad',
  anios: ['facultad-analisis-2'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'En varias variables, tener parciales no implica diferenciable. La diferencial es la mejor aproximación lineal local: $df = f_x \\, dx + f_y \\, dy$.',
  teoria: [
    {
      tipo: 'latex',
      latex: 'f(x_0 + h, y_0 + k) \\approx f(x_0, y_0) + f_x \\cdot h + f_y \\cdot k',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Diferenciable',
      texto:
        '$f$ es diferenciable en $(x_0, y_0)$ si existe la aproximación lineal y el resto cae como $o(\\|(h, k)\\|)$.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Condición suficiente',
      texto:
        'Si las parciales son continuas, $f$ es diferenciable (ser $C^1$ implica diferenciable).',
    },
  ],
  ejemplos: [
    {
      titulo: 'Diferencial',
      enunciado:
        '$f(x, y) = x^2 y$ en $(2, 3)$. Aproximá $f(2.1, 2.9)$.',
      pasos: [
        { explicacion: '$f_x = 2xy = 12$, $f_y = x^2 = 4$.' },
        { explicacion: '$f(2.1, 2.9) \\approx 12 + 12(0.1) + 4(-0.1) = 12 + 0.8 = 12.8$.' },
      ],
      resultado: '≈ 12,8.',
    },
  ],
  erroresComunes: [
    'Confundir diferenciabilidad con tener parciales.',
    'Olvidar el resto en la aproximación.',
    'Aplicar la fórmula sin verificar diferenciabilidad.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Diferenciabilidad implica continuidad de parciales.',
        correcta: false,
        explicacion: 'No siempre. Pero $C^1$ (parciales continuas) sí implica diferenciabilidad.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Una función con parciales que no son continuas puede no ser diferenciable.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Toda función diferenciable es continua.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['derivadas-parciales', 'gradiente'],
  tags: ['diferencial', 'aproximacion', 'analisis II'],
};
