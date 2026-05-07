import type { Tema } from '../tipos';

export const OPTIMIZACION: Tema = {
  slug: 'optimizacion',
  titulo: 'Problemas de optimización',
  anios: ['secundaria-5'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Encontrar máximos o mínimos en problemas reales: máxima área dado un perímetro, mínimo costo, etc.',
  teoria: [
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Identificar la función a optimizar.',
        'Expresarla en función de UNA sola variable usando las condiciones del problema.',
        'Derivar e igualar a 0.',
        'Verificar que es máximo o mínimo (segunda derivada o cambio de signo).',
        'Interpretar la solución en el contexto.',
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Caja de máximo volumen',
      enunciado:
        'Tenés 60 cm de alambre. Querés hacer un rectángulo con perímetro 60 y máxima área.',
      pasos: [
        { explicacion: '$P = 2(b + h) = 60 \\Rightarrow b + h = 30 \\Rightarrow h = 30 - b$.' },
        { explicacion: 'Área: $A(b) = b(30 - b) = 30b - b^2$.' },
        { explicacion: '$A\'(b) = 30 - 2b = 0 \\Rightarrow b = 15$.' },
        { explicacion: 'Entonces $h = 15$. Área máxima: 225 cm² (cuadrado).' },
      ],
      resultado: 'Cuadrado de 15 × 15 con área 225 cm².',
    },
  ],
  erroresComunes: [
    'No expresar la función en una sola variable.',
    'Olvidar verificar máximo o mínimo.',
    'No interpretar en el problema.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Para un perímetro fijo, el rectángulo de máxima área es el cuadrado.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Para resolver un problema de optimización, necesitás derivar.',
        correcta: true,
        explicacion: 'Cierto, generalmente.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En problemas de optimización, primero derivás y después usás las condiciones.',
        correcta: false,
        explicacion: 'Falso. Primero usás las condiciones, después derivás.',
      },
    ],
  },
  relacionados: ['derivada-aplicaciones'],
  tags: ['optimizacion', 'derivada', 'aplicaciones'],
};
