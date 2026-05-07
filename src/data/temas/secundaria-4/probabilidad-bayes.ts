import type { Tema } from '../tipos';

export const PROBABILIDAD_BAYES: Tema = {
  slug: 'probabilidad-bayes',
  titulo: 'Probabilidad: regla de Bayes',
  anios: ['secundaria-4'],
  area: 'estadistica-probabilidad',
  nivel: 'avanzado',
  resumen:
    'Cómo "invertir" una probabilidad condicional. Útil para problemas de tests médicos, diagnóstico.',
  teoria: [
    {
      tipo: 'latex',
      latex: 'P(A | B) = \\dfrac{P(B | A) \\cdot P(A)}{P(B)}',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Aplicación clásica',
      texto:
        'Si conocés $P(B|A)$ pero querés $P(A|B)$, usás Bayes. Ejemplo: enfermedad/test positivo.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Test médico',
      enunciado:
        '1% de la población tiene enfermedad X. Test detecta enfermo con 99% de prob. y da positivo en sano con 5%. Si un test da positivo, ¿prob. de tenerla?',
      pasos: [
        { explicacion: 'P(E)=0,01, P(+|E)=0,99, P(+|sano)=0,05.' },
        {
          explicacion:
            'P(+) = 0,99 × 0,01 + 0,05 × 0,99 = 0,0099 + 0,0495 = 0,0594.',
        },
        {
          explicacion: 'P(E|+) = (0,99 × 0,01) / 0,0594 ≈ 0,167 = 16,7%.',
        },
      ],
      resultado: '≈ 16,7%.',
    },
  ],
  erroresComunes: [
    'Confundir $P(A|B)$ con $P(B|A)$.',
    'Olvidar el denominador.',
    'No identificar bien los eventos.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado: 'Bayes te permite "invertir" una probabilidad condicional.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$P(A|B)$ siempre es igual a $P(B|A)$.',
        correcta: false,
        explicacion: 'Falso, generalmente no.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En un test médico, una alta tasa de falsos positivos puede hacer que un test positivo no sea muy informativo.',
        correcta: true,
        explicacion: 'Cierto, especialmente con enfermedades raras.',
      },
    ],
  },
  relacionados: ['probabilidad-condicional'],
  tags: ['probabilidad', 'bayes', 'condicional'],
};
