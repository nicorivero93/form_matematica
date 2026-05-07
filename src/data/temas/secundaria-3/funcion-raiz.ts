import type { Tema } from '../tipos';

export const FUNCION_RAIZ: Tema = {
  slug: 'funcion-raiz',
  titulo: 'Función raíz cuadrada',
  anios: ['secundaria-3'],
  area: 'funciones',
  nivel: 'intermedio',
  resumen:
    'La función $y = \\sqrt{x}$ está definida para $x \\ge 0$. Su gráfico arranca en el origen y crece lentamente.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'El dominio de $f(x) = \\sqrt{x}$ es $[0, \\infty)$. La imagen también es $[0, \\infty)$.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Traslaciones',
      texto:
        '$\\sqrt{x - a}$ traslada el origen a $x = a$. $\\sqrt{x} + b$ traslada verticalmente.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Calcular valores',
      enunciado: 'Si $f(x) = \\sqrt{x - 4}$, ¿cuál es el dominio y $f(13)$?',
      pasos: [
        { explicacion: 'Dominio: $x - 4 \\ge 0 \\Rightarrow x \\ge 4$.' },
        { explicacion: '$f(13) = \\sqrt{9} = 3$.' },
      ],
      resultado: 'Dominio $[4, \\infty)$, $f(13) = 3$.',
    },
  ],
  erroresComunes: [
    'Olvidar restringir el dominio.',
    'Pensar que la raíz puede ser negativa.',
    'Confundir $\\sqrt{x^2}$ con $x$ (en realidad es $|x|$).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Si $f(x) = \\sqrt{x + 5}$, ¿cuánto vale $f(11)$?',
        respuesta: 4,
        explicacion: '$\\sqrt{16} = 4$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$f(x) = \\sqrt{x}$ está definida para todo $x$.',
        correcta: false,
        explicacion: 'Falso. Solo para $x \\ge 0$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'La función raíz cuadrada nunca da resultados negativos.',
        correcta: true,
        explicacion: 'Por convención, la raíz es positiva.',
      },
    ],
  },
  relacionados: ['raices-cuadradas', 'funcion-introduccion'],
  tags: ['raiz', 'funcion', 'dominio'],
};
