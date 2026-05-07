import type { Tema } from '../tipos';

export const FACTORIZACION_COMUN: Tema = {
  slug: 'factorizacion-comun',
  titulo: 'Factor común',
  anios: ['secundaria-2'],
  area: 'algebra',
  nivel: 'intermedio',
  resumen:
    'Sacar factor común es lo opuesto a aplicar la propiedad distributiva. Identificás algo presente en todos los términos y lo "sacás" afuera.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Cómo identificar el factor común',
      texto:
        '1) Buscá el MCD de los coeficientes. 2) Identificá las variables presentes en todos los términos con su menor exponente. 3) Multiplicá ambos: ese es el factor común.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Solo coeficiente',
      enunciado: 'Factorizá $6x + 9$.',
      pasos: [
        { explicacion: 'MCD(6, 9) = 3.' },
        { explicacion: '$3 \\cdot (2x + 3)$.' },
      ],
      resultado: '$3(2x + 3)$.',
    },
    {
      titulo: 'Coeficiente y variable',
      enunciado: 'Factorizá $4x^3 - 6x^2 + 2x$.',
      pasos: [
        { explicacion: 'Coef: MCD(4, 6, 2) = 2.' },
        { explicacion: 'Variable común con menor exponente: $x$.' },
        { explicacion: 'Factor común: $2x$.' },
        { explicacion: '$2x(2x^2 - 3x + 1)$.' },
      ],
      resultado: '$2x(2x^2 - 3x + 1)$.',
    },
  ],
  erroresComunes: [
    'No incluir todos los términos al sacar el factor común.',
    'Olvidar la variable cuando aparece en todos los términos.',
    'Cambiar signos sin querer.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Factorizá $5x + 10$.',
        opciones: ['$5(x + 2)$', '$5(x + 10)$', '$x(5 + 10)$', '$5x \\cdot 10$'],
        correcta: 0,
        explicacion: 'Sacamos 5: $5(x+2)$.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Factorizá $3x^2 + 6x$.',
        opciones: ['$3x(x + 2)$', '$3(x^2 + 6x)$', '$x(3x + 6)$', '$3x \\cdot 2x$'],
        correcta: 0,
        explicacion: 'Sacamos $3x$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Factorizar es lo opuesto a aplicar la propiedad distributiva.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['polinomios-introduccion', 'mcm-mcd'],
  tags: ['factorizacion', 'factor comun', 'algebra'],
};
