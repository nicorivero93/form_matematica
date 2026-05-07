import type { Tema } from '../tipos';

export const GRADIENTE: Tema = {
  slug: 'gradiente',
  titulo: 'Gradiente y derivada direccional',
  anios: ['facultad-analisis-2'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'El gradiente $\\nabla f = (f_x, f_y, ...)$ apunta en la dirección de máximo crecimiento. La derivada direccional es $D_v f = \\nabla f \\cdot v$.',
  teoria: [
    {
      tipo: 'latex',
      latex: '\\nabla f = \\left( \\dfrac{\\partial f}{\\partial x}, \\dfrac{\\partial f}{\\partial y}, ..., \\dfrac{\\partial f}{\\partial x_n} \\right)',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Propiedades clave',
      texto:
        '1) $\\nabla f$ apunta en la dirección de máximo crecimiento. 2) $|\\nabla f|$ es la magnitud de ese crecimiento. 3) $\\nabla f$ es perpendicular a las curvas de nivel.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Derivada direccional',
      texto:
        'Si $v$ es vector unitario: $D_v f = \\nabla f \\cdot v$. Mide cómo cambia $f$ moviéndose en dirección $v$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Calcular gradiente',
      enunciado: '$f(x, y) = x^2 + 3xy$. ¿Gradiente en $(1, 2)$?',
      pasos: [
        { explicacion: '$f_x = 2x + 3y \\Rightarrow f_x(1,2) = 8$.' },
        { explicacion: '$f_y = 3x \\Rightarrow f_y(1, 2) = 3$.' },
      ],
      resultado: '$\\nabla f(1, 2) = (8, 3)$.',
    },
  ],
  erroresComunes: [
    'Confundir gradiente con divergencia.',
    'Calcular derivada direccional sin normalizar el vector.',
    'Olvidar que $\\nabla f$ es vector, no escalar.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'El gradiente es perpendicular a las curvas de nivel.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Para máximo decrecimiento, hay que ir en dirección $-\\nabla f$.',
        correcta: true,
        explicacion: 'Cierto: dirección opuesta al gradiente.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En un máximo o mínimo local, $\\nabla f = 0$.',
        correcta: true,
        explicacion: 'Cierto: punto crítico.',
      },
    ],
  },
  relacionados: ['derivadas-parciales', 'extremos-varias-variables'],
  tags: ['gradiente', 'derivada direccional'],
};
