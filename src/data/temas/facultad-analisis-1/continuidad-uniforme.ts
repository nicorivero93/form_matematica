import type { Tema } from '../tipos';

export const CONTINUIDAD_UNIFORME: Tema = {
  slug: 'continuidad-uniforme',
  titulo: 'Continuidad uniforme',
  anios: ['facultad-analisis-1'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Más fuerte que continuidad: el $\\delta$ NO depende del punto, solo de $\\varepsilon$. Toda función continua en un compacto es uniformemente continua.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Continuidad uniforme',
      texto:
        '$f$ es uniformemente continua en $A$ si para todo $\\varepsilon > 0$ existe $\\delta > 0$ (que depende solo de $\\varepsilon$, no del punto) tal que $|x - y| < \\delta \\Rightarrow |f(x) - f(y)| < \\varepsilon$ para todo $x, y \\in A$.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Heine-Cantor',
      texto:
        'Si $f$ es continua en un compacto $[a, b]$, entonces es uniformemente continua ahí.',
    },
    {
      tipo: 'parrafo',
      texto:
        'En conjuntos no compactos puede fallar: $f(x) = 1/x$ es continua en $(0, 1]$ pero no uniformemente.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Función Lipschitz',
      enunciado:
        '¿Por qué toda función Lipschitz es uniformemente continua?',
      pasos: [
        { explicacion: 'Lipschitz: $|f(x) - f(y)| \\le K |x - y|$ para algún $K$.' },
        { explicacion: 'Dado $\\varepsilon$, tomar $\\delta = \\varepsilon / K$.' },
      ],
      resultado: 'Listo: $\\delta$ es global.',
    },
  ],
  erroresComunes: [
    'Pensar que continuidad implica continuidad uniforme (no en general).',
    'Olvidar que en compactos sí coinciden.',
    'No distinguir el $\\delta$ que depende del punto del que no.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Toda función continua en un intervalo cerrado y acotado es uniformemente continua.',
        correcta: true,
        explicacion: 'Heine-Cantor.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          '$f(x) = x^2$ es uniformemente continua en $\\mathbb{R}$.',
        correcta: false,
        explicacion: 'Falso. Lo es en compactos, pero no en todo $\\mathbb{R}$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Toda función Lipschitz es uniformemente continua.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['limites-formales'],
  tags: ['continuidad uniforme', 'heine cantor', 'lipschitz'],
};
