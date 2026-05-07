import type { Tema } from '../tipos';

export const INTERES_SIMPLE: Tema = {
  slug: 'interes-simple',
  titulo: 'Interés simple',
  anios: ['primaria-7'],
  area: 'fracciones-decimales',
  nivel: 'avanzado',
  resumen:
    'Cómo calcular cuánto crece un capital invertido cuando se aplica una tasa de interés. Aplicación práctica del porcentaje.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Interés simple',
      texto:
        'El interés simple es lo que ganamos (o pagamos) por prestar/usar un capital. Se calcula sobre el capital inicial, no sobre lo acumulado.',
    },
    {
      tipo: 'latex',
      latex: 'I = \\dfrac{C \\times r \\times t}{100}',
      display: true,
    },
    {
      tipo: 'tabla',
      encabezados: ['Variable', 'Significado'],
      filas: [
        ['$C$', 'Capital inicial (lo que invertís o tomás prestado)'],
        ['$r$', 'Tasa de interés en %'],
        ['$t$', 'Tiempo en la unidad de la tasa (años, meses)'],
        ['$I$', 'Interés ganado o pagado'],
        ['Total', '$M = C + I$ (monto final)'],
      ],
    },
  ],
  formulasClave: [
    {
      nombre: 'Interés simple',
      latex: 'I = \\dfrac{C \\cdot r \\cdot t}{100}',
      variables: [
        { simbolo: 'I', nombre: 'interés', desc: 'cuánto se ganó/pagó' },
        { simbolo: 'C', nombre: 'capital', desc: 'inicial' },
        { simbolo: 'r', nombre: 'tasa', unidad: '%', desc: 'por unidad de tiempo' },
        { simbolo: 't', nombre: 'tiempo', desc: 'en la unidad de la tasa' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Cálculo básico',
      enunciado:
        'Invertís $10.000 al 5% anual durante 3 años. ¿Cuánto interés ganás?',
      pasos: [
        { explicacion: '$I = \\dfrac{10000 \\times 5 \\times 3}{100}$.' },
        { explicacion: '$= \\dfrac{150000}{100} = 1500$.' },
      ],
      resultado: '$1.500 de interés. Monto total: $11.500.',
    },
    {
      titulo: 'Despejar el tiempo',
      enunciado:
        '¿Cuántos años tarda un capital de $5.000 en generar $1.000 al 4% anual?',
      pasos: [
        { explicacion: '1000 = (5000 × 4 × t) / 100 = 200t.' },
        { explicacion: 't = 1000 / 200 = 5.' },
      ],
      resultado: '5 años.',
    },
  ],
  erroresComunes: [
    'Olvidar dividir por 100 (la tasa está en porcentaje).',
    'Confundir tasa anual con mensual.',
    'Sumar el interés al capital cuando solo se pide el interés.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Capital $20.000, tasa 6% anual, 2 años. ¿Cuánto interés (en pesos)?',
        respuesta: 2400,
        explicacion: '(20000 × 6 × 2) ÷ 100 = 2.400.',
      },
      {
        tipo: 'numerica',
        enunciado:
          '¿Cuál es el monto final si C=$1.000, r=10% anual, t=1 año?',
        respuesta: 1100,
        explicacion: 'I = 100. Monto = 1000 + 100 = 1.100.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En interés simple, el interés se calcula siempre sobre el capital original.',
        correcta: true,
        explicacion:
          'Cierto. Eso es lo que lo distingue del interés compuesto, donde se calcula sobre el monto acumulado.',
      },
    ],
  },
  relacionados: ['porcentaje', 'problemas-porcentaje'],
  tags: ['interes', 'simple', 'porcentaje', 'finanzas'],
};
