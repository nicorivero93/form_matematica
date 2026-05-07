import type { Tema } from '../tipos';

export const INTEGRALES_LINEA: Tema = {
  slug: 'integrales-linea',
  titulo: 'Integrales de línea y campos vectoriales',
  anios: ['facultad-analisis-2'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Integran a lo largo de una curva. $\\int_C f \\, ds$ (escalar) o $\\int_C \\vec F \\cdot d\\vec r$ (vectorial, mide trabajo).',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Integral de línea de campo vectorial',
      texto:
        '$\\int_C \\vec F \\cdot d\\vec r = \\int_a^b \\vec F(\\vec r(t)) \\cdot \\vec r\'(t) \\, dt$. Mide trabajo de un campo a lo largo de la curva.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Campo conservativo',
      texto:
        'Si $\\vec F = \\nabla \\phi$ (existe potencial), entonces $\\int_C \\vec F \\cdot d\\vec r = \\phi(B) - \\phi(A)$. Independiente del camino.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Trabajo',
      enunciado:
        '$\\vec F = (y, x)$ a lo largo del segmento de (0,0) a (1, 2).',
      pasos: [
        { explicacion: 'Parametrización: $\\vec r(t) = (t, 2t)$ con $t \\in [0, 1]$. $\\vec r\'(t) = (1, 2)$.' },
        { explicacion: '$\\vec F(\\vec r(t)) = (2t, t)$. Producto: $2t + 2t = 4t$.' },
        { explicacion: '$\\int_0^1 4t \\, dt = 2$.' },
      ],
      resultado: 'Trabajo = 2.',
    },
  ],
  erroresComunes: [
    'Confundir integral de línea escalar con vectorial.',
    'No verificar si el campo es conservativo antes de integrar.',
    'Errores en parametrización.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si un campo es conservativo, la integral de línea no depende del camino.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Para un campo conservativo cerrado, la integral cerrada es 0.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Todo campo vectorial es conservativo.',
        correcta: false,
        explicacion: 'Falso. Solo aquellos con potencial.',
      },
    ],
  },
  relacionados: ['gradiente', 'cambio-variables'],
  tags: ['integrales linea', 'campo vectorial', 'trabajo'],
};
