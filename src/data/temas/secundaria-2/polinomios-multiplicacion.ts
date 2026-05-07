import type { Tema } from '../tipos';

export const POLINOMIOS_MULTIPLICACION: Tema = {
  slug: 'polinomios-multiplicacion',
  titulo: 'Multiplicación de polinomios',
  anios: ['secundaria-2'],
  area: 'algebra',
  nivel: 'intermedio',
  resumen:
    'Aplicar la propiedad distributiva entre cada término de un polinomio y cada término del otro.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Para multiplicar dos polinomios, multiplicás cada término del primero por cada término del segundo y después juntás términos semejantes.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Producto simple',
      enunciado: 'Calculá $(x + 3)(x - 2)$.',
      pasos: [
        { explicacion: '$x \\cdot x + x \\cdot (-2) + 3 \\cdot x + 3 \\cdot (-2)$.' },
        { explicacion: '$x^2 - 2x + 3x - 6 = x^2 + x - 6$.' },
      ],
      resultado: '$x^2 + x - 6$.',
    },
    {
      titulo: 'Por monomio',
      enunciado: 'Calculá $2x(x^2 - 5x + 3)$.',
      pasos: [
        { explicacion: 'Distribuimos: $2x \\cdot x^2 - 2x \\cdot 5x + 2x \\cdot 3$.' },
        { explicacion: '$2x^3 - 10x^2 + 6x$.' },
      ],
      resultado: '$2x^3 - 10x^2 + 6x$.',
    },
  ],
  erroresComunes: [
    'Olvidar multiplicar por TODOS los términos del segundo polinomio.',
    'Sumar términos no semejantes.',
    'Equivocarse en el signo.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '$(x + 1)(x + 2)$:',
        opciones: ['$x^2 + 2$', '$x^2 + 3x + 2$', '$x^2 + x + 2$', '$x + 3x + 2$'],
        correcta: 1,
        explicacion: '$x^2 + 2x + x + 2 = x^2 + 3x + 2$.',
      },
      {
        tipo: 'multiple',
        enunciado: '$3x(x - 4)$:',
        opciones: ['$3x^2 - 4$', '$3x^2 - 12$', '$3x^2 - 12x$', '$3 - 4x$'],
        correcta: 2,
        explicacion: '$3x \\cdot x - 3x \\cdot 4 = 3x^2 - 12x$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Al multiplicar polinomios, el grado del producto es la suma de los grados.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['polinomios-introduccion', 'productos-notables'],
  tags: ['polinomios', 'multiplicacion', 'distributiva'],
};
