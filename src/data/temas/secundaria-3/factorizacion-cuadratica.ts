import type { Tema } from '../tipos';

export const FACTORIZACION_CUADRATICA: Tema = {
  slug: 'factorizacion-cuadratica',
  titulo: 'Factorización de cuadráticas',
  anios: ['secundaria-3'],
  area: 'algebra',
  nivel: 'intermedio',
  resumen:
    'Si la cuadrática $ax^2 + bx + c$ tiene raíces $x_1$ y $x_2$, se factoriza como $a(x - x_1)(x - x_2)$.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Forma factorizada',
      texto:
        'Una cuadrática con raíces reales se factoriza como $a(x - x_1)(x - x_2)$.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Por inspección',
      texto:
        'Si $a = 1$: buscás dos números cuya suma sea $-b$ y producto sea $c$. Esos son las raíces.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Factorización rápida',
      enunciado: 'Factorizá $x^2 - 5x + 6$.',
      pasos: [
        { explicacion: 'Buscamos dos números: suman 5 y multiplican 6 → 2 y 3.' },
        { explicacion: '$x^2 - 5x + 6 = (x - 2)(x - 3)$.' },
      ],
      resultado: '$(x - 2)(x - 3)$.',
    },
    {
      titulo: 'Con coeficiente',
      enunciado: 'Factorizá $2x^2 - 8x + 6$.',
      pasos: [
        { explicacion: 'Sacamos 2 común: $2(x^2 - 4x + 3)$.' },
        { explicacion: 'Factorizamos: $2(x - 1)(x - 3)$.' },
      ],
      resultado: '$2(x - 1)(x - 3)$.',
    },
  ],
  erroresComunes: [
    'Confundir suma y producto de las raíces.',
    'Olvidar el coeficiente $a$ al factorizar.',
    'Cambiar signos al factorizar.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Factorización de $x^2 - x - 6$.',
        opciones: ['$(x-2)(x-3)$', '$(x+2)(x-3)$', '$(x-2)(x+3)$', '$(x+1)(x-6)$'],
        correcta: 1,
        explicacion: 'Buscamos suma 1 (con $-b$) y producto -6: 3 y -2 funcionan.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Una cuadrática se factoriza como $(x - x_1)(x - x_2)$ si $a = 1$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si la cuadrática no tiene raíces reales, también se puede factorizar en reales.',
        correcta: false,
        explicacion: 'Falso. Si $\\Delta < 0$ no hay factorización en reales.',
      },
    ],
  },
  relacionados: ['ecuaciones-segundo-grado', 'productos-notables'],
  tags: ['factorizacion', 'cuadratica', 'raices'],
};
