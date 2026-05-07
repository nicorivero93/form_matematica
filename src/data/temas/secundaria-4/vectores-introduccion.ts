import type { Tema } from '../tipos';

export const VECTORES_INTRODUCCION: Tema = {
  slug: 'vectores-introduccion',
  titulo: 'Vectores en R²',
  anios: ['secundaria-4'],
  area: 'algebra',
  nivel: 'intermedio',
  resumen:
    'Un vector tiene magnitud y dirección. Suma, resta y multiplicación por escalar. Componentes.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Un vector $\\vec{v} = (a, b)$ se representa por sus componentes. Su magnitud es $|\\vec{v}| = \\sqrt{a^2 + b^2}$ (Pitágoras).',
    },
    {
      tipo: 'tabla',
      encabezados: ['Operación', 'Resultado'],
      filas: [
        ['$\\vec{u} + \\vec{v}$', 'Suma componente a componente.'],
        ['$k \\cdot \\vec{v}$', 'Multiplica cada componente por $k$.'],
        ['$|\\vec{v}|$', '$\\sqrt{v_x^2 + v_y^2}$.'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Suma',
      enunciado:
        '$\\vec{u} = (3, 4)$ y $\\vec{v} = (1, -2)$. ¿Suma y módulo de $\\vec{u}$?',
      pasos: [
        { explicacion: 'Suma: $(4, 2)$.' },
        { explicacion: 'Módulo de $\\vec{u}$: $\\sqrt{9 + 16} = 5$.' },
      ],
      resultado: 'Suma $(4, 2)$, módulo 5.',
    },
  ],
  erroresComunes: [
    'Sumar magnitudes en vez de componentes.',
    'Olvidar que el módulo siempre es positivo.',
    'Confundir vector con punto.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Módulo del vector (6, 8).',
        respuesta: 10,
        explicacion: '$\\sqrt{36 + 64} = 10$.',
      },
      {
        tipo: 'multiple',
        enunciado: '$(2, 3) + (5, -1)$:',
        opciones: ['(7, 2)', '(7, 4)', '(3, 2)', '(10, -3)'],
        correcta: 0,
        explicacion: '(2+5, 3-1) = (7, 2).',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'El módulo de un vector calcula la distancia desde el origen al punto.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  visualizadorId: 'plano-cartesiano',
  relacionados: ['plano-cartesiano-puntos', 'teorema-pitagoras'],
  tags: ['vectores', 'magnitud', 'direccion'],
};
