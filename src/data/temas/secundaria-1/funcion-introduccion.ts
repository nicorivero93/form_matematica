import type { Tema } from '../tipos';

export const FUNCION_INTRODUCCION: Tema = {
  slug: 'funcion-introduccion',
  titulo: 'Concepto de función',
  anios: ['secundaria-1'],
  area: 'funciones',
  nivel: 'intro',
  resumen:
    'Una función es una "máquina" que a cada entrada le asigna una sola salida. Cómo identificar funciones y leer gráficos.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Función',
      texto:
        'Una función $f$ asigna a cada elemento de un conjunto (dominio) UNO SOLO del otro conjunto (codominio). Notación: $y = f(x)$ o "y depende de x".',
    },
    {
      tipo: 'parrafo',
      texto:
        'Si dibujás una función en el plano cartesiano, ninguna recta vertical puede cortar el gráfico en más de un punto. (Si lo hace, no es función.)',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Test de la recta vertical',
      texto:
        'Para chequear si un gráfico representa una función, imaginá una recta vertical moviéndose por todo el gráfico. Si en algún momento corta el gráfico en 2 o más puntos, NO es función.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Tabla de valores',
      enunciado: 'La función $f(x) = 2x + 1$. Calculá $f(3)$, $f(0)$ y $f(-2)$.',
      pasos: [
        { explicacion: '$f(3) = 2(3) + 1 = 7$.' },
        { explicacion: '$f(0) = 2(0) + 1 = 1$.' },
        { explicacion: '$f(-2) = 2(-2) + 1 = -3$.' },
      ],
      resultado: '$f(3) = 7$, $f(0) = 1$, $f(-2) = -3$.',
    },
    {
      titulo: 'Identificar una función',
      enunciado:
        'Una circunferencia, ¿representa una función?',
      pasos: [
        { explicacion: 'Una recta vertical corta a la circunferencia en dos puntos.' },
        { explicacion: 'Por lo tanto, no es función.' },
      ],
      resultado: 'No es función.',
    },
  ],
  erroresComunes: [
    'Pensar que una función es una fórmula — puede ser una tabla, un gráfico o una regla.',
    'Olvidar que una entrada solo puede tener una salida.',
    'Confundir dominio (entrada) con codominio (salida).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Si $f(x) = 3x - 4$, ¿cuánto vale $f(5)$?',
        respuesta: 11,
        explicacion: '$3(5) - 4 = 11$.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Si $g(x) = x^2 - 1$, ¿cuánto vale $g(-2)$?',
        respuesta: 3,
        explicacion: '$(-2)^2 - 1 = 4 - 1 = 3$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Una función puede asignar dos valores distintos al mismo elemento del dominio.',
        correcta: false,
        explicacion: 'No. Por definición, asigna UNO SOLO.',
      },
    ],
  },
  visualizadorId: 'plano-cartesiano',
  relacionados: ['plano-cartesiano-puntos', 'funcion-lineal'],
  tags: ['funciones', 'dominio', 'codominio', 'gráfico'],
};
