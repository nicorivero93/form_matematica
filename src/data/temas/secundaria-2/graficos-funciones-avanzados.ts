import type { Tema } from '../tipos';

export const GRAFICOS_FUNCIONES_AVANZADOS: Tema = {
  slug: 'graficos-funciones-avanzados',
  titulo: 'Análisis de gráficos de funciones',
  anios: ['secundaria-2'],
  area: 'funciones',
  nivel: 'intermedio',
  resumen:
    'Identificar dominio, imagen, intervalos de crecimiento, máximos, mínimos y conjunto de positividad y negatividad.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Concepto', 'Definición'],
      filas: [
        ['Dominio', 'Conjunto de valores de x permitidos.'],
        ['Imagen', 'Conjunto de valores de y obtenidos.'],
        ['$C^+$ (positividad)', 'Valores de x donde $f(x) > 0$.'],
        ['$C^-$ (negatividad)', 'Valores de x donde $f(x) < 0$.'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Análisis básico',
      enunciado:
        'Una función pasa por (-2, 0) y (3, 0). Para $x < -2$ está por arriba, en $(-2, 3)$ por debajo, y para $x > 3$ por arriba. ¿$C^+$?',
      pasos: [
        { explicacion: '$f > 0$ donde está por arriba: $x < -2$ o $x > 3$.' },
      ],
      resultado: '$C^+ = (-\\infty, -2) \\cup (3, \\infty)$.',
    },
  ],
  erroresComunes: [
    'Confundir $C^+$ con la imagen.',
    'No incluir extremos abiertos o cerrados correctamente.',
    'Confundir dominio con imagen.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado: '$C^+$ es donde el gráfico está por encima del eje x.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'El dominio es el conjunto de valores de y.',
        correcta: false,
        explicacion: 'Falso, es de x. La imagen es de y.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Los ceros de la función son los valores de x donde $f(x) = 0$.',
        correcta: true,
        explicacion: 'Por definición.',
      },
    ],
  },
  visualizadorId: 'plano-cartesiano',
  relacionados: ['graficos-funciones', 'funcion-introduccion'],
  tags: ['graficos', 'funciones', 'dominio', 'imagen', 'positividad'],
};
