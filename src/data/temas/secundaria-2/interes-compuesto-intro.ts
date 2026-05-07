import type { Tema } from '../tipos';

export const INTERES_COMPUESTO_INTRO: Tema = {
  slug: 'interes-compuesto-intro',
  titulo: 'Interés compuesto: introducción',
  anios: ['secundaria-2'],
  area: 'fracciones-decimales',
  nivel: 'avanzado',
  resumen:
    'A diferencia del simple, en el interés compuesto los intereses se reinvierten: cada período rinde sobre el monto acumulado.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Fórmula',
      texto:
        'Monto final: $M = C \\cdot (1 + i)^t$, donde $i$ es la tasa por período (decimal) y $t$ los períodos.',
    },
    {
      tipo: 'parrafo',
      texto:
        'A largo plazo, el interés compuesto da bastante más que el simple porque cada período se calcula sobre el monto acumulado, no sobre el original.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Monto con interés compuesto',
      latex: 'M = C \\cdot (1 + i)^t',
      variables: [
        { simbolo: 'C', nombre: 'capital', desc: 'inicial' },
        { simbolo: 'i', nombre: 'tasa', desc: 'por período (decimal)' },
        { simbolo: 't', nombre: 'tiempo', desc: 'en períodos' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Cálculo simple',
      enunciado:
        'Capital $1.000, tasa 10% anual, 3 años. ¿Monto?',
      pasos: [
        { explicacion: '$M = 1000 \\times 1{,}10^3$.' },
        { explicacion: '$1{,}1^3 = 1{,}331$.' },
        { explicacion: 'M = 1331.' },
      ],
      resultado: '$1.331.',
    },
    {
      titulo: 'Comparación con simple',
      enunciado:
        'Mismo caso ($1.000, 10% anual, 3 años): ¿qué da el simple?',
      pasos: [
        { explicacion: 'Simple: $I = (1000 \\times 10 \\times 3)/100 = 300$. M = 1300.' },
        { explicacion: 'Compuesto: 1331. Diferencia: $31.' },
      ],
      resultado: 'Compuesto da $31 más.',
    },
  ],
  erroresComunes: [
    'Sumar la tasa a la potencia en vez de a 1.',
    'Olvidar pasar la tasa a decimal (10% = 0,10).',
    'Aplicar la fórmula simple cuando se pide compuesto.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Capital $1.000, tasa 5% anual, 2 años. Monto compuesto.',
        respuesta: 1102.5,
        tolerancia: 0.5,
        explicacion: '$1000 \\times 1{,}05^2 = 1102{,}50$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'A largo plazo, el interés compuesto siempre genera más que el simple.',
        correcta: true,
        explicacion: 'Cierto, los intereses se acumulan.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En el primer período, simple y compuesto dan lo mismo.',
        correcta: true,
        explicacion: 'Sí: ambos calculan sobre el capital original.',
      },
    ],
  },
  relacionados: ['interes-simple', 'porcentaje'],
  tags: ['interes compuesto', 'finanzas', 'porcentaje'],
};
