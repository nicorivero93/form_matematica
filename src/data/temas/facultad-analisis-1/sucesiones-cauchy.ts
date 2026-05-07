import type { Tema } from '../tipos';

export const SUCESIONES_CAUCHY: Tema = {
  slug: 'sucesiones-cauchy',
  titulo: 'Sucesiones de Cauchy y completitud',
  anios: ['facultad-analisis-1'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Una sucesión es de Cauchy si sus términos se acercan entre sí. En $\\mathbb{R}$, ser de Cauchy equivale a ser convergente (completitud).',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Sucesión de Cauchy',
      texto:
        '$(a_n)$ es de Cauchy si para todo $\\varepsilon > 0$ existe $N$ tal que $|a_n - a_m| < \\varepsilon$ para todo $n, m \\ge N$.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Completitud de $\\mathbb{R}$',
      texto:
        'En $\\mathbb{R}$ toda sucesión de Cauchy converge. En $\\mathbb{Q}$ esto NO se cumple (puede converger a un irracional).',
    },
    {
      tipo: 'parrafo',
      texto:
        'La gracia es: probar Cauchy no necesita conocer el límite. Útil cuando no podés calcular el límite directamente pero querés saber si existe.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Verificar Cauchy',
      enunciado: '¿Es $a_n = 1/n$ de Cauchy?',
      pasos: [
        { explicacion: '$|a_n - a_m| = |1/n - 1/m| \\le 1/n + 1/m \\le 2/N$ si $n, m \\ge N$.' },
        { explicacion: 'Dado $\\varepsilon$, tomar $N > 2/\\varepsilon$. Entonces $|a_n - a_m| < \\varepsilon$.' },
      ],
      resultado: 'Sí, es de Cauchy (y converge a 0).',
    },
  ],
  erroresComunes: [
    'Pensar que Cauchy es lo mismo que monotonía.',
    'Usar que el límite existe para probar Cauchy (cuando justamente buscás evitar eso).',
    'Olvidar que en $\\mathbb{Q}$ no toda Cauchy converge.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En $\\mathbb{R}$, toda sucesión convergente es de Cauchy.',
        correcta: true,
        explicacion: 'Cierto: si $a_n \\to L$, $|a_n - a_m| \\le |a_n - L| + |L - a_m|$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En $\\mathbb{Q}$, toda sucesión de Cauchy converge.',
        correcta: false,
        explicacion: 'Falso. Puede converger a un irracional, que no está en $\\mathbb{Q}$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Una sucesión acotada y monótona en $\\mathbb{R}$ siempre converge.',
        correcta: true,
        explicacion: 'Teorema de convergencia monótona.',
      },
    ],
  },
  relacionados: ['limites-formales', 'sucesiones-limites'],
  tags: ['cauchy', 'completitud', 'convergencia', 'analisis'],
};
