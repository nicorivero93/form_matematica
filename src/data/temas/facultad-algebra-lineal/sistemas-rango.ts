import type { Tema } from '../tipos';

export const SISTEMAS_RANGO: Tema = {
  slug: 'sistemas-rango',
  titulo: 'Sistemas lineales: rango y soluciones',
  anios: ['facultad-algebra-lineal'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Teorema de Rouché-Frobenius: el sistema $A x = b$ tiene solución sii $\\text{rango}(A) = \\text{rango}(A | b)$. Única si rango = #incógnitas.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Rango',
      texto:
        'Cantidad máxima de filas (o columnas) linealmente independientes. Equivale al orden del mayor menor no nulo.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Caso', 'Tipo de solución'],
      filas: [
        ['$\\text{rg}(A) \\neq \\text{rg}(A|b)$', 'Sin solución (incompatible)'],
        ['$\\text{rg}(A) = \\text{rg}(A|b) = n$', 'Única (compatible determinado)'],
        ['$\\text{rg}(A) = \\text{rg}(A|b) < n$', 'Infinitas (compatible indeterminado)'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Análisis',
      enunciado:
        '$\\begin{cases} x + y = 2 \\\\ 2x + 2y = 4 \\end{cases}$. ¿Tipo de solución?',
      pasos: [
        { explicacion: 'La 2da fila es 2× la 1ra. Rango(A) = 1, Rango(A|b) = 1, n = 2.' },
        { explicacion: 'Compatible indeterminado: infinitas soluciones.' },
      ],
      resultado: 'Infinitas soluciones (1 grado de libertad).',
    },
  ],
  erroresComunes: [
    'No verificar el rango de la matriz ampliada.',
    'Pensar que infinitas soluciones implica que cualquier vector resuelve.',
    'Olvidar comparar rango con número de incógnitas.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si rango(A) < rango(A|b), no hay solución.',
        correcta: true,
        explicacion: 'Cierto. Sistema incompatible.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si rango = n (incógnitas), la solución es única.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Un sistema homogéneo siempre tiene la solución trivial 0.',
        correcta: true,
        explicacion: 'Cierto: $A \\cdot 0 = 0$.',
      },
    ],
  },
  relacionados: ['matrices-operaciones', 'determinantes-n'],
  tags: ['sistemas', 'rango', 'rouche'],
};
