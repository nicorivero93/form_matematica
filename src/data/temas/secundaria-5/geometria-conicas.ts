import type { Tema } from '../tipos';

export const GEOMETRIA_CONICAS: Tema = {
  slug: 'geometria-conicas',
  titulo: 'Cónicas: elipse, parábola, hipérbola',
  anios: ['secundaria-5'],
  area: 'geometria',
  nivel: 'avanzado',
  resumen:
    'Las cónicas surgen al cortar un cono con un plano. Cada una tiene una ecuación canónica característica.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Cónica', 'Ecuación canónica'],
      filas: [
        ['Circunferencia', '$x^2 + y^2 = r^2$'],
        ['Elipse', '$\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = 1$'],
        ['Hipérbola', '$\\dfrac{x^2}{a^2} - \\dfrac{y^2}{b^2} = 1$'],
        ['Parábola', '$y^2 = 4px$ (o $x^2 = 4py$)'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar',
      enunciado:
        '¿Qué cónica es $\\dfrac{x^2}{9} + \\dfrac{y^2}{4} = 1$?',
      pasos: [{ explicacion: 'Suma de cuadrados igual a 1: elipse con $a = 3$, $b = 2$.' }],
      resultado: 'Elipse.',
    },
  ],
  erroresComunes: [
    'Confundir signos: + → elipse, - → hipérbola.',
    'Olvidar igualar a 1.',
    'Mezclar parábola con hipérbola.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '$\\dfrac{x^2}{16} - \\dfrac{y^2}{9} = 1$ es:',
        opciones: ['Elipse', 'Circunferencia', 'Hipérbola', 'Parábola'],
        correcta: 2,
        explicacion: 'Resta de cuadrados igual a 1: hipérbola.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'La circunferencia es un caso particular de elipse.',
        correcta: true,
        explicacion: 'Cierto: cuando $a = b = r$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Las cónicas se obtienen cortando un cono con un plano.',
        correcta: true,
        explicacion: 'Cierto, de ahí viene el nombre.',
      },
    ],
  },
  relacionados: ['geometria-analitica-circulo', 'funcion-cuadratica-introduccion'],
  tags: ['conicas', 'elipse', 'hiperbola', 'parabola'],
};
