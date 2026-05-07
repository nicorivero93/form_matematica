import type { Tema } from '../tipos';

export const INTEGRAL_RIEMANN: Tema = {
  slug: 'integral-riemann',
  titulo: 'Integral de Riemann: definición rigurosa',
  anios: ['facultad-analisis-1'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Definición formal de integral como límite de sumas de Riemann. $f$ es Riemann-integrable si las sumas superior e inferior coinciden en el límite.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Sumas de Riemann',
      texto:
        'Dada una partición $P = \\{x_0, x_1, ..., x_n\\}$ de $[a, b]$, la suma inferior es $L(f, P) = \\sum m_i (x_i - x_{i-1})$ donde $m_i = \\inf f$ en $[x_{i-1}, x_i]$. Suma superior: $U(f, P)$ usando $\\sup$.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Integrable según Riemann',
      texto:
        '$f$ es integrable en $[a, b]$ si $\\sup_P L(f, P) = \\inf_P U(f, P)$. Ese valor común es $\\int_a^b f$.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Toda función continua en $[a, b]$ es Riemann-integrable. También lo son las monótonas. Las funciones con muchas discontinuidades pueden no serlo.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Función no integrable',
      enunciado:
        'La función de Dirichlet ($f(x) = 1$ si $x$ racional, 0 si irracional) no es Riemann-integrable.',
      pasos: [
        { explicacion: 'En cualquier subintervalo: $\\inf = 0$ y $\\sup = 1$.' },
        { explicacion: '$L(f, P) = 0$, $U(f, P) = b - a$. Nunca coinciden.' },
      ],
      resultado: 'No es integrable.',
    },
  ],
  erroresComunes: [
    'Confundir integrabilidad con continuidad.',
    'Pensar que toda función acotada es integrable.',
    'Olvidar que el supremo de las sumas inferiores debe coincidir con el ínfimo de las superiores.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Toda función continua en $[a, b]$ es Riemann-integrable.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'La función de Dirichlet es Riemann-integrable.',
        correcta: false,
        explicacion: 'Falso. Es Lebesgue-integrable pero NO Riemann.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Toda función monótona en $[a, b]$ es Riemann-integrable.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['metodos-integracion', 'integral-impropia'],
  tags: ['riemann', 'integral', 'rigor'],
};
