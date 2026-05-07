import type { Tema } from '../tipos';

export const BASES_DIMENSION: Tema = {
  slug: 'bases-dimension',
  titulo: 'Bases y dimensión',
  anios: ['facultad-algebra-lineal'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Una base es un conjunto generador linealmente independiente. La dimensión es la cantidad de vectores en cualquier base.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Lineal independencia',
      texto:
        '$\\{v_1, ..., v_k\\}$ son LI si $\\sum c_i v_i = 0$ implica $c_i = 0$ para todo $i$.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Base',
      texto:
        'Conjunto generador linealmente independiente. Todo vector se escribe de forma única como combinación lineal de la base.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Espacio', 'Dimensión', 'Base canónica'],
      filas: [
        ['$\\mathbb{R}^n$', '$n$', '$e_1, ..., e_n$'],
        ['Polinomios de grado $\\le n$', '$n + 1$', '$1, x, x^2, ..., x^n$'],
        ['Matrices $m \\times n$', '$mn$', 'Matrices $E_{ij}$'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Verificar base',
      enunciado:
        '¿Es $\\{(1, 1), (1, -1)\\}$ base de $\\mathbb{R}^2$?',
      pasos: [
        { explicacion: 'LI: $a(1,1) + b(1,-1) = 0 \\Rightarrow a+b=0, a-b=0 \\Rightarrow a=b=0$. ✓' },
        { explicacion: 'Genera $\\mathbb{R}^2$: cualquier $(x, y)$ se escribe como $\\frac{x+y}{2}(1,1) + \\frac{x-y}{2}(1,-1)$. ✓' },
      ],
      resultado: 'Sí, es base.',
    },
  ],
  erroresComunes: [
    'Confundir LI con generador.',
    'Pensar que dimensión depende de la base.',
    'No verificar ambas condiciones.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Dimensión de $\\mathbb{R}^7$.',
        respuesta: 7,
        explicacion: 'Por definición.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Toda base de un espacio tiene la misma cantidad de vectores.',
        correcta: true,
        explicacion: 'Cierto: la dimensión.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En $\\mathbb{R}^3$, cualquier 4 vectores son LI.',
        correcta: false,
        explicacion: 'Falso. Más vectores que la dimensión = LD.',
      },
    ],
  },
  relacionados: ['espacios-vectoriales', 'transformaciones-lineales'],
  tags: ['bases', 'dimension', 'LI'],
};
