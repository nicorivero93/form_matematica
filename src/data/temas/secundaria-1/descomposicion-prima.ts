import type { Tema } from '../tipos';

export const DESCOMPOSICION_PRIMA: Tema = {
  slug: 'descomposicion-prima',
  titulo: 'Descomposición en factores primos',
  anios: ['secundaria-1'],
  area: 'numeros-y-operaciones',
  nivel: 'intermedio',
  resumen:
    'Cualquier número compuesto se puede escribir como producto de números primos de forma única. Útil para calcular MCM y MCD.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Método',
      texto:
        'Dividís el número por primos sucesivos (2, 3, 5, 7...) hasta llegar a 1. Cada divisor que usás es un factor primo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Con la descomposición en primos podés calcular MCM y MCD muy rápido. MCM = producto de TODOS los primos elevados al MAYOR exponente. MCD = solo los COMUNES con el MENOR exponente.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Descomposición',
      enunciado: 'Descomponé 84 en factores primos.',
      pasos: [
        { explicacion: '84 ÷ 2 = 42.' },
        { explicacion: '42 ÷ 2 = 21.' },
        { explicacion: '21 ÷ 3 = 7.' },
        { explicacion: '7 ÷ 7 = 1.' },
      ],
      resultado: '$84 = 2^2 \\times 3 \\times 7$.',
    },
    {
      titulo: 'MCM y MCD usando descomposición',
      enunciado: 'Calculá MCM y MCD de 12 y 18.',
      pasos: [
        { explicacion: '$12 = 2^2 \\times 3$.' },
        { explicacion: '$18 = 2 \\times 3^2$.' },
        { explicacion: 'MCM: $2^2 \\times 3^2 = 36$.' },
        { explicacion: 'MCD: $2 \\times 3 = 6$.' },
      ],
      resultado: 'MCM = 36, MCD = 6.',
    },
  ],
  erroresComunes: [
    'Usar números compuestos como factores ($12 = 2 \\times 6$ no está descompuesto en primos).',
    'Olvidar exponentes cuando un primo se repite.',
    'Confundir MCM (todos, mayor exp) con MCD (comunes, menor exp).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es la descomposición prima de 60?',
        opciones: [
          '$2^2 \\times 3 \\times 5$',
          '$2 \\times 30$',
          '$4 \\times 15$',
          '$6 \\times 10$',
        ],
        correcta: 0,
        explicacion: '60 = 2 × 2 × 3 × 5.',
      },
      {
        tipo: 'numerica',
        enunciado: 'MCM de 8 y 12 (usando descomposición).',
        respuesta: 24,
        explicacion: '$8=2^3$, $12=2^2 \\cdot 3$. MCM = $2^3 \\cdot 3 = 24$.',
      },
      {
        tipo: 'numerica',
        enunciado: 'MCD de 24 y 36.',
        respuesta: 12,
        explicacion: '24 = 2³×3. 36 = 2²×3². Común con menor exp: 2²×3 = 12.',
      },
    ],
  },
  relacionados: ['divisores-primos', 'mcm-mcd'],
  tags: ['descomposicion', 'primos', 'mcm', 'mcd'],
};
