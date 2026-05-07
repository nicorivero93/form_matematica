import type { Tema } from '../tipos';

export const CAMBIO_VARIABLES: Tema = {
  slug: 'cambio-variables',
  titulo: 'Cambio de variables y jacobiano',
  anios: ['facultad-analisis-2'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Al cambiar variables en una integral múltiple, hay que multiplicar por el determinante del jacobiano.',
  teoria: [
    {
      tipo: 'latex',
      latex: '\\iint_R f(x, y) \\, dx \\, dy = \\iint_{R\'} f(x(u, v), y(u, v)) \\left| \\dfrac{\\partial(x, y)}{\\partial(u, v)} \\right| du \\, dv',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Jacobiano',
      texto:
        '$J = \\det \\begin{pmatrix} x_u & x_v \\\\ y_u & y_v \\end{pmatrix}$. Mide cuánto se "estira" el área al cambiar variables.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Polares',
      texto:
        '$x = r \\cos\\theta$, $y = r \\sin\\theta$. Jacobiano = $r$. $\\iint f \\, dx \\, dy = \\iint f \\cdot r \\, dr \\, d\\theta$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Polares',
      enunciado:
        'Calcular $\\iint_D e^{-(x^2+y^2)} \\, dA$ sobre el disco unitario.',
      pasos: [
        { explicacion: 'Polares: $x^2 + y^2 = r^2$. $D$: $0 \\le r \\le 1$, $0 \\le \\theta \\le 2\\pi$.' },
        { explicacion: 'Integral: $\\int_0^{2\\pi} \\int_0^1 e^{-r^2} r \\, dr \\, d\\theta$.' },
        { explicacion: '$= 2\\pi \\cdot [-\\tfrac{1}{2} e^{-r^2}]_0^1 = \\pi (1 - e^{-1})$.' },
      ],
      resultado: '$\\pi (1 - 1/e)$.',
    },
  ],
  erroresComunes: [
    'Olvidar el factor $|J|$.',
    'No describir bien la nueva región.',
    'Olvidar el módulo (el jacobiano siempre va en valor absoluto).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Jacobiano del cambio a polares.',
        respuesta: 1,
        explicacion: '$r$ (depende del punto, pero $|J| = r$).',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En coordenadas polares, $dA = r \\, dr \\, d\\theta$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'El jacobiano siempre es positivo.',
        correcta: false,
        explicacion: 'Falso. Tomamos su valor absoluto.',
      },
    ],
  },
  relacionados: ['integrales-dobles'],
  tags: ['jacobiano', 'cambio variables', 'polares'],
};
