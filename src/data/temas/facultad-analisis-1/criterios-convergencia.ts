import type { Tema } from '../tipos';

export const CRITERIOS_CONVERGENCIA: Tema = {
  slug: 'criterios-convergencia',
  titulo: 'Criterios de convergencia de series',
  anios: ['facultad-analisis-1'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Reglas para determinar si $\\sum a_n$ converge: comparación, cociente (D\'Alembert), raíz (Cauchy), integral, Leibniz para alternadas.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Criterio', 'Aplicación'],
      filas: [
        ['Comparación', 'Si $0 \\le a_n \\le b_n$ y $\\sum b_n$ converge, $\\sum a_n$ también.'],
        ['D\'Alembert (cociente)', '$L = \\lim |a_{n+1}/a_n|$. Si $L < 1$ converge; $> 1$ diverge.'],
        ['Cauchy (raíz)', '$L = \\lim \\sqrt[n]{|a_n|}$. Igual interpretación.'],
        ['Integral', '$\\sum f(n)$ converge $\\iff$ $\\int_1^\\infty f$ converge ($f$ positiva, decreciente).'],
        ['Leibniz', '$\\sum (-1)^n a_n$ converge si $a_n$ decrece a 0.'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      titulo: 'Atención',
      texto:
        'Si $L = 1$ en cociente o raíz, los criterios no deciden.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Cociente',
      enunciado:
        '¿Converge $\\sum n / 2^n$?',
      pasos: [
        { explicacion: '$\\dfrac{a_{n+1}}{a_n} = \\dfrac{n+1}{2n} \\to 1/2 < 1$.' },
      ],
      resultado: 'Converge.',
    },
    {
      titulo: 'Serie geométrica',
      enunciado: '¿Para qué valores de $r$ converge $\\sum r^n$?',
      pasos: [{ explicacion: 'Cociente: $|r| < 1$.' }],
      resultado: '$|r| < 1$.',
    },
  ],
  erroresComunes: [
    'No verificar las hipótesis del criterio.',
    'Confundir convergencia con sumabilidad absoluta.',
    'Olvidar el caso $L = 1$ donde el criterio no decide.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si $\\lim a_n \\neq 0$, la serie $\\sum a_n$ no puede converger.',
        correcta: true,
        explicacion: 'Cierto: condición necesaria.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'La serie armónica $\\sum 1/n$ converge.',
        correcta: false,
        explicacion: 'Falso. Diverge.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          '$\\sum 1/n^2$ converge (problema de Basilea).',
        correcta: true,
        explicacion: 'Sí, a $\\pi^2/6$.',
      },
    ],
  },
  relacionados: ['series-potencias', 'sucesiones-cauchy'],
  tags: ['series', 'convergencia', 'dalembert', 'cauchy'],
};
