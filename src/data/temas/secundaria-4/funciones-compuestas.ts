import type { Tema } from '../tipos';

export const FUNCIONES_COMPUESTAS: Tema = {
  slug: 'funciones-compuestas',
  titulo: 'Composición de funciones',
  anios: ['secundaria-4'],
  area: 'funciones',
  nivel: 'avanzado',
  resumen:
    '$(f \\circ g)(x) = f(g(x))$. Aplicás primero $g$ y al resultado le aplicás $f$.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'La composición no es conmutativa: $f \\circ g \\neq g \\circ f$ en general.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Componer',
      enunciado:
        '$f(x) = 2x + 1$ y $g(x) = x^2$. Calculá $(f \\circ g)(3)$.',
      pasos: [
        { explicacion: '$g(3) = 9$.' },
        { explicacion: '$f(9) = 19$.' },
      ],
      resultado: '19.',
    },
  ],
  erroresComunes: [
    'Aplicar las funciones en el orden incorrecto.',
    'Confundir $(f \\circ g)$ con $f \\cdot g$.',
    'Olvidar restricciones del dominio.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Si $f(x) = x + 5$ y $g(x) = 2x$, ¿$f(g(3))$?',
        respuesta: 11,
        explicacion: '$g(3) = 6$, $f(6) = 11$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$(f \\circ g)(x) = f(x) \\cdot g(x)$.',
        correcta: false,
        explicacion: 'Falso. Es $f(g(x))$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En general, $f \\circ g$ es distinta de $g \\circ f$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['funcion-introduccion'],
  tags: ['composicion', 'funciones'],
};
