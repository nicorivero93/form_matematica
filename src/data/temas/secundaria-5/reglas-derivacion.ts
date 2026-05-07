import type { Tema } from '../tipos';

export const REGLAS_DERIVACION: Tema = {
  slug: 'reglas-derivacion',
  titulo: 'Reglas de derivación',
  anios: ['secundaria-5'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Reglas para derivar sin usar la definición: derivada de potencias, suma, producto, cociente y composición.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Función', 'Derivada'],
      filas: [
        ['$x^n$', '$n x^{n-1}$'],
        ['$c \\cdot f(x)$', '$c \\cdot f\'(x)$'],
        ['$f + g$', "$f' + g'$"],
        ['$f \\cdot g$', "$f' g + f g'$"],
        ['$f / g$', "$\\dfrac{f'g - fg'}{g^2}$"],
        ['$f(g(x))$', "$f'(g(x)) \\cdot g'(x)$"],
        ['$\\sin x$', '$\\cos x$'],
        ['$\\cos x$', '$-\\sin x$'],
        ['$e^x$', '$e^x$'],
        ['$\\ln x$', '$1/x$'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Polinomio',
      enunciado: 'Derivá $f(x) = 3x^4 - 2x + 5$.',
      pasos: [
        { explicacion: 'Derivada término a término: $12x^3 - 2 + 0$.' },
      ],
      resultado: '$f\'(x) = 12x^3 - 2$.',
    },
    {
      titulo: 'Producto',
      enunciado: 'Derivá $f(x) = x \\cdot \\sin x$.',
      pasos: [
        { explicacion: 'Regla del producto: $1 \\cdot \\sin x + x \\cdot \\cos x$.' },
      ],
      resultado: '$\\sin x + x \\cos x$.',
    },
  ],
  erroresComunes: [
    'Aplicar mal la regla del producto (escribir $f\' g\'$).',
    'Olvidar la regla de la cadena en composiciones.',
    'Confundir derivadas básicas.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Derivada de $f(x) = x^5$:',
        opciones: ['$5x^5$', '$5x^4$', '$x^4$', '$5$'],
        correcta: 1,
        explicacion: '$nx^{n-1}$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Derivada de $\\sin x$ es $\\cos x$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Derivada de $e^x$ es $e^x$.',
        correcta: true,
        explicacion: 'Cierto, propiedad especial.',
      },
    ],
  },
  relacionados: ['derivada-introduccion'],
  tags: ['derivada', 'reglas', 'analisis'],
};
