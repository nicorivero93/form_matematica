import type { Tema } from '../tipos';

export const ANALISIS_COMPLETO: Tema = {
  slug: 'analisis-completo',
  titulo: 'Estudio completo de funciones',
  anios: ['secundaria-5'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Combinar dominio, ceros, asíntotas, derivada y signos para hacer un análisis completo y dibujar el gráfico.',
  teoria: [
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Dominio (donde está definida).',
        'Ceros y signo (positividad / negatividad).',
        'Asíntotas (vertical y horizontal/oblicua).',
        'Crecimiento y extremos (con $f\'$).',
        'Concavidad e inflexión (con $f\'\'$).',
        'Dibujar el gráfico con todos los datos.',
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Análisis breve',
      enunciado:
        'Análisis de $f(x) = x^3 - 3x$.',
      pasos: [
        { explicacion: 'Dominio: $\\mathbb{R}$.' },
        { explicacion: 'Ceros: $x(x^2 - 3) = 0 \\Rightarrow 0, \\pm\\sqrt{3}$.' },
        { explicacion: '$f\'(x) = 3x^2 - 3 = 0 \\Rightarrow x = \\pm 1$.' },
        { explicacion: 'Máximo en $x=-1$: $f(-1) = 2$. Mínimo en $x=1$: $f(1) = -2$.' },
      ],
      resultado: 'Gráfico con extremos en (-1, 2) y (1, -2).',
    },
  ],
  erroresComunes: [
    'No verificar todas las características.',
    'Mezclar primera con segunda derivada.',
    'Olvidar restricciones del dominio.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Para un análisis completo se usan límite, derivada y segunda derivada.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Los puntos de inflexión se encuentran con la primera derivada.',
        correcta: false,
        explicacion: 'Falso. Con la segunda.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Para encontrar dominio, mirás restricciones (denominadores no nulos, etc.).',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['derivada-aplicaciones', 'funciones-asintotas'],
  tags: ['analisis', 'estudio funcion'],
};
