import type { Tema } from '../tipos';

export const INTERES_COMPUESTO_APLICACIONES: Tema = {
  slug: 'interes-compuesto-aplicaciones',
  titulo: 'Interés compuesto: aplicaciones',
  anios: ['secundaria-3'],
  area: 'fracciones-decimales',
  nivel: 'avanzado',
  resumen:
    'Despejar incógnitas en la fórmula de interés compuesto: encontrar capital, tasa o tiempo.',
  teoria: [
    {
      tipo: 'latex',
      latex: 'M = C \\cdot (1 + i)^t',
      display: true,
    },
    {
      tipo: 'parrafo',
      texto:
        'Despejes: $C = M / (1+i)^t$. $i = (M/C)^{1/t} - 1$. $t = \\dfrac{\\log(M/C)}{\\log(1+i)}$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Despejar capital',
      enunciado:
        'Para tener $20.000 a 10% anual durante 3 años, ¿qué capital invertir hoy?',
      pasos: [
        { explicacion: '$C = 20000 / 1{,}1^3 = 20000 / 1{,}331 \\approx 15030$.' },
      ],
      resultado: '$15.030.',
    },
    {
      titulo: 'Despejar tasa',
      enunciado:
        'Capital $1.000 se convirtió en $1.464 en 4 años. ¿Cuál fue la tasa anual?',
      pasos: [
        { explicacion: '$1{,}464 = (1+i)^4 \\Rightarrow 1+i = 1{,}464^{1/4} \\approx 1{,}1$.' },
        { explicacion: '$i \\approx 10\\%$.' },
      ],
      resultado: '≈ 10%.',
    },
  ],
  erroresComunes: [
    'Olvidar pasar la tasa a decimal.',
    'Confundir tasa anual con mensual.',
    'Olvidar el (1 + i) entero.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Para encontrar el capital inicial, dividimos el monto final por $(1+i)^t$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Capital $1.000 al 5% anual, 2 años. ¿Monto?',
        respuesta: 1102.5,
        tolerancia: 0.5,
        explicacion: '$1000 \\times 1{,}05^2 = 1102{,}50$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'A doble tasa, el monto se duplica.',
        correcta: false,
        explicacion: 'Falso. La relación con la tasa no es lineal.',
      },
    ],
  },
  relacionados: ['interes-compuesto-intro'],
  tags: ['interes compuesto', 'finanzas', 'aplicaciones'],
};
