import type { Tema } from '../tipos';

export const POLINOMIO_TAYLOR: Tema = {
  slug: 'polinomio-taylor',
  titulo: 'Polinomio de Taylor y serie de Taylor',
  anios: ['facultad-analisis-1'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Aproximar una función suave por un polinomio: $f(x) \\approx \\sum \\dfrac{f^{(k)}(a)}{k!} (x - a)^k$.',
  teoria: [
    {
      tipo: 'latex',
      latex: 'f(x) = \\sum_{k=0}^{n} \\dfrac{f^{(k)}(a)}{k!} (x - a)^k + R_n(x)',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Resto de Lagrange',
      texto:
        '$R_n(x) = \\dfrac{f^{(n+1)}(\\xi)}{(n+1)!} (x - a)^{n+1}$ para algún $\\xi$ entre $a$ y $x$.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Función', 'Serie de Taylor en 0'],
      filas: [
        ['$e^x$', '$\\sum x^k / k!$'],
        ['$\\sin x$', '$\\sum (-1)^k x^{2k+1} / (2k+1)!$'],
        ['$\\cos x$', '$\\sum (-1)^k x^{2k} / (2k)!$'],
        ['$\\ln(1+x)$', '$\\sum (-1)^{k+1} x^k / k$ (para $|x| < 1$)'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Taylor de orden 3',
      enunciado:
        'Polinomio de Taylor de orden 3 de $e^x$ en $a = 0$.',
      pasos: [
        { explicacion: '$f^{(k)}(0) = 1$ para todo $k$.' },
        { explicacion: '$T_3(x) = 1 + x + x^2/2 + x^3/6$.' },
      ],
      resultado: '$T_3(x) = 1 + x + \\dfrac{x^2}{2} + \\dfrac{x^3}{6}$.',
    },
  ],
  erroresComunes: [
    'Olvidar dividir por $k!$.',
    'No considerar el resto al estimar errores.',
    'Confundir Taylor en $a$ con Maclaurin (= Taylor en 0).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado:
          'Coeficiente de $x^2$ en el polinomio de Taylor de $\\sin x$ en 0:',
        opciones: ['0', '1', '$-1/2$', '$1/2$'],
        correcta: 0,
        explicacion: 'Las potencias pares se anulan en $\\sin x$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'El polinomio de Taylor de $e^x$ en 0 tiene todos los coeficientes positivos.',
        correcta: true,
        explicacion: 'Sí: $1/k!$ para todo $k$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Maclaurin es Taylor centrada en 0.',
        correcta: true,
        explicacion: 'Por definición.',
      },
    ],
  },
  relacionados: ['series-potencias', 'derivadas-superiores'],
  tags: ['taylor', 'aproximacion', 'series'],
};
