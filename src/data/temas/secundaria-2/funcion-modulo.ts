import type { Tema } from '../tipos';

export const FUNCION_MODULO: Tema = {
  slug: 'funcion-modulo',
  titulo: 'Función valor absoluto',
  anios: ['secundaria-2'],
  area: 'funciones',
  nivel: 'intermedio',
  resumen:
    'La función $y = |x|$ devuelve el valor absoluto. Su gráfico tiene forma de "V" con vértice en el origen.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'La función $f(x) = |x|$ devuelve $x$ si $x \\ge 0$ y $-x$ si $x < 0$. Su gráfico tiene forma de "V".',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Traslaciones',
      texto:
        '$f(x) = |x - a| + b$ traslada el vértice a $(a, b)$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Calcular valores',
      enunciado: 'Si $f(x) = |x - 3|$, ¿cuánto vale $f(7)$ y $f(0)$?',
      pasos: [
        { explicacion: '$f(7) = |7 - 3| = 4$.' },
        { explicacion: '$f(0) = |0 - 3| = 3$.' },
      ],
      resultado: '4 y 3.',
    },
  ],
  erroresComunes: [
    'Aplicar el módulo solo a una parte de la expresión.',
    'Confundir $|x - a|$ con $|x| - a$.',
    'Olvidar que el resultado siempre es ≥ 0.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Si $f(x) = |2x - 4|$, ¿cuánto vale $f(1)$?',
        respuesta: 2,
        explicacion: '$|2 - 4| = |-2| = 2$.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Si $f(x) = |x| + 5$, ¿cuánto vale $f(-3)$?',
        respuesta: 8,
        explicacion: '$|-3| + 5 = 3 + 5 = 8$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'La función valor absoluto siempre da resultados positivos o cero.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['valor-absoluto', 'funcion-introduccion'],
  tags: ['valor absoluto', 'modulo', 'funcion'],
};
