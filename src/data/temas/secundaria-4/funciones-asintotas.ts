import type { Tema } from '../tipos';

export const FUNCIONES_ASINTOTAS: Tema = {
  slug: 'funciones-asintotas',
  titulo: 'Asíntotas de funciones',
  anios: ['secundaria-4'],
  area: 'funciones',
  nivel: 'avanzado',
  resumen:
    'Una asíntota es una recta a la que la gráfica de la función se acerca cada vez más. Hay verticales, horizontales y oblicuas.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Tipo', 'Cuándo'],
      filas: [
        ['Vertical', 'Cuando $f \\to \\pm \\infty$ al acercarse a un valor finito de $x$.'],
        ['Horizontal', 'Cuando $f \\to L$ al $x \\to \\pm \\infty$.'],
        ['Oblicua', 'Cuando $f \\to mx + b$ al $x \\to \\pm \\infty$.'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'En homográficas hay vertical y horizontal. En exponenciales y logarítmicas hay solo una.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Función racional',
      enunciado:
        '$f(x) = \\dfrac{1}{x - 2}$. ¿Asíntotas?',
      pasos: [
        { explicacion: 'Vertical: donde el denominador se anula → $x = 2$.' },
        { explicacion: 'Horizontal: cuando $x \\to \\pm \\infty$, $f \\to 0$.' },
      ],
      resultado: 'Vertical $x = 2$, horizontal $y = 0$.',
    },
  ],
  erroresComunes: [
    'Confundir asíntotas verticales con horizontales.',
    'No considerar todos los valores donde se anula el denominador.',
    'Olvidar las asíntotas oblicuas.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'La función $\\dfrac{1}{x}$ tiene asíntota horizontal $y = 0$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Una asíntota es una recta que la función toca pero no cruza.',
        correcta: false,
        explicacion: 'Falso. Algunas funciones cruzan la asíntota horizontal.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'La exponencial $a^x$ tiene asíntota horizontal en $y = 0$.',
        correcta: true,
        explicacion: 'Cierto, cuando $x \\to -\\infty$.',
      },
    ],
  },
  relacionados: ['funciones-homograficas', 'funcion-exponencial'],
  tags: ['funciones', 'asintotas', 'limites'],
};
