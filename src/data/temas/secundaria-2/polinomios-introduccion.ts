import type { Tema } from '../tipos';

export const POLINOMIOS_INTRODUCCION: Tema = {
  slug: 'polinomios-introduccion',
  titulo: 'Polinomios: introducción',
  anios: ['secundaria-2'],
  area: 'algebra',
  nivel: 'intermedio',
  resumen:
    'Suma de monomios. Grado, coeficiente principal, término independiente. Suma y resta de polinomios.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Polinomio',
      texto:
        'Es una suma de monomios. Por ejemplo $P(x) = 3x^2 + 5x - 7$ es un polinomio de grado 2.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Concepto', 'Significado'],
      filas: [
        ['Grado', 'El mayor exponente que aparece.'],
        ['Coeficiente principal', 'El coeficiente del término de mayor grado.'],
        ['Término independiente', 'El que no tiene variable (es decir, exponente 0).'],
      ],
    },
    {
      tipo: 'parrafo',
      texto:
        'Para sumar polinomios: agrupás términos semejantes y sumás coeficientes. Para restar: cambiás los signos del segundo polinomio y sumás.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar partes',
      enunciado:
        'En $P(x) = 4x^3 - 2x + 5$, ¿cuál es el grado, el coef. principal y el término independiente?',
      pasos: [
        { explicacion: 'Grado: 3 (mayor exponente).' },
        { explicacion: 'Coef principal: 4.' },
        { explicacion: 'Término independiente: 5.' },
      ],
      resultado: 'Grado 3, coef. principal 4, T.I. 5.',
    },
    {
      titulo: 'Suma',
      enunciado:
        'Sumá $P(x) = 2x^2 + 3x - 1$ y $Q(x) = -x^2 + 5$.',
      pasos: [
        { explicacion: '$2x^2 - x^2 = x^2$.' },
        { explicacion: '$3x$ queda igual.' },
        { explicacion: '$-1 + 5 = 4$.' },
      ],
      resultado: '$x^2 + 3x + 4$.',
    },
  ],
  erroresComunes: [
    'Sumar términos no semejantes.',
    'Olvidar cambiar signos al restar polinomios.',
    'Identificar mal el grado cuando los términos están desordenados.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Grado de $5x^4 + 2x^7 - 3x$.',
        respuesta: 7,
        explicacion: 'Mayor exponente: 7.',
      },
      {
        tipo: 'multiple',
        enunciado:
          'Sumá: $(x^2 + 3) + (2x^2 - 5)$.',
        opciones: ['$3x^2 - 2$', '$3x^2 + 8$', '$2x^2 - 2$', '$3x^4 - 2$'],
        correcta: 0,
        explicacion: '$3x^2 - 2$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En $P(x) = -3x^2 + 5x - 7$, el término independiente es $-7$.',
        correcta: true,
        explicacion: 'Cierto: el que no tiene variable.',
      },
    ],
  },
  relacionados: ['monomios', 'lenguaje-algebraico-avanzado'],
  tags: ['polinomios', 'grado', 'algebra'],
};
