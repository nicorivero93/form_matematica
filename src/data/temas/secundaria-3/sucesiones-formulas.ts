import type { Tema } from '../tipos';

export const SUCESIONES_FORMULAS: Tema = {
  slug: 'sucesiones-formulas',
  titulo: 'Sucesiones: suma de términos',
  anios: ['secundaria-3'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Fórmulas para sumar los primeros $n$ términos de una sucesión aritmética o geométrica.',
  teoria: [
    {
      tipo: 'latex',
      latex: 'S_n^{\\text{arit}} = \\dfrac{(a_1 + a_n) \\cdot n}{2}',
      display: true,
    },
    {
      tipo: 'latex',
      latex: 'S_n^{\\text{geom}} = a_1 \\cdot \\dfrac{r^n - 1}{r - 1} \\quad (r \\neq 1)',
      display: true,
    },
  ],
  ejemplos: [
    {
      titulo: 'Suma aritmética',
      enunciado: 'Sumá los 10 primeros números pares positivos: 2, 4, 6, ..., 20.',
      pasos: [
        { explicacion: '$a_1 = 2$, $a_{10} = 20$, $n = 10$.' },
        { explicacion: '$S = (2 + 20) \\times 10 / 2 = 110$.' },
      ],
      resultado: '110.',
    },
  ],
  erroresComunes: [
    'Usar la fórmula geométrica en una aritmética o viceversa.',
    'Olvidar el caso $r = 1$.',
    'Calcular mal el último término $a_n$.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Suma de los primeros 5 números: 1, 2, 3, 4, 5.',
        respuesta: 15,
        explicacion: '$(1+5) \\times 5 / 2 = 15$.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Suma de 1, 2, 4, 8, 16.',
        respuesta: 31,
        explicacion: 'Geométrica r=2, $a_1=1$, $n=5$: $1 \\cdot (32-1)/(2-1) = 31$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'La suma de Gauss $1 + 2 + ... + n$ es $n(n+1)/2$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['sucesiones-introduccion'],
  tags: ['sucesiones', 'sumas', 'gauss'],
};
