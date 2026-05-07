import type { Tema } from '../tipos';

export const TRIGONOMETRIA_APLICACIONES: Tema = {
  slug: 'trigonometria-aplicaciones',
  titulo: 'Trigonometría: aplicaciones',
  anios: ['secundaria-2'],
  area: 'trigonometria',
  nivel: 'avanzado',
  resumen:
    'Usar seno, coseno y tangente para encontrar lados o ángulos desconocidos en triángulos rectángulos.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Si conocemos un ángulo y un lado de un triángulo rectángulo, podemos encontrar los otros lados usando seno, coseno o tangente. Si conocemos dos lados, podemos encontrar los ángulos usando las funciones inversas.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Encontrar un cateto',
      enunciado:
        'Triángulo rectángulo con hipotenusa 10 y un ángulo de 30°. ¿Cateto opuesto?',
      pasos: [
        { explicacion: '$\\sin 30° = $ Op / 10.' },
        { explicacion: '$\\sin 30° = 0{,}5$.' },
        { explicacion: 'Op = 10 × 0,5 = 5.' },
      ],
      resultado: '5.',
    },
    {
      titulo: 'Encontrar un ángulo',
      enunciado:
        'Triángulo rectángulo con cateto opuesto 4 y adyacente 4. ¿Ángulo?',
      pasos: [
        { explicacion: '$\\tan \\alpha = 4/4 = 1$.' },
        { explicacion: '$\\alpha = \\arctan(1) = 45°$.' },
      ],
      resultado: '45°.',
    },
  ],
  erroresComunes: [
    'Usar la razón equivocada (sen vs cos vs tan).',
    'Olvidar el modo (grados vs radianes) en la calculadora.',
    'Confundir cateto opuesto y adyacente.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Si $\\tan \\alpha = 1$, ¿cuánto vale $\\alpha$ (en grados)?',
        respuesta: 45,
        explicacion: 'arctan(1) = 45°.',
        unidad: '°',
      },
      {
        tipo: 'multiple',
        enunciado:
          'Para encontrar la altura de un poste si conozco la distancia al pie y el ángulo, uso:',
        opciones: ['seno', 'coseno', 'tangente', 'pitágoras'],
        correcta: 2,
        explicacion: 'tan = altura / distancia.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Conociendo dos lados puedo calcular el tercero con Pitágoras y los ángulos con trigonometría.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['razones-trigonometricas', 'teorema-pitagoras'],
  tags: ['trigonometria', 'aplicaciones', 'angulos', 'lados'],
};
