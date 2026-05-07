import type { Tema } from '../tipos';

export const FUNCIONES_HOMOGRAFICAS: Tema = {
  slug: 'funciones-homograficas',
  titulo: 'Función homográfica',
  anios: ['secundaria-3'],
  area: 'funciones',
  nivel: 'avanzado',
  resumen:
    'Funciones del tipo $y = \\dfrac{ax + b}{cx + d}$. Su gráfico es una hipérbola con asíntotas vertical y horizontal.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Asíntotas',
      texto:
        'Asíntota vertical: $x = -d/c$ (donde el denominador se anula). Asíntota horizontal: $y = a/c$.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El dominio excluye el valor donde $cx + d = 0$. La imagen excluye $a/c$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar asíntotas',
      enunciado: 'Para $y = \\dfrac{2x + 1}{x - 3}$, ¿cuáles son las asíntotas?',
      pasos: [
        { explicacion: 'Vertical: $x - 3 = 0 \\Rightarrow x = 3$.' },
        { explicacion: 'Horizontal: $a/c = 2/1 = 2$. Es $y = 2$.' },
      ],
      resultado: 'Vertical $x = 3$, horizontal $y = 2$.',
    },
  ],
  erroresComunes: [
    'Olvidar excluir el punto donde el denominador es 0.',
    'Confundir la posición de las asíntotas.',
    'Pensar que es una recta.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado:
          'Asíntota vertical de $y = \\dfrac{x + 1}{x - 5}$:',
        opciones: ['$x = 1$', '$x = -1$', '$x = 5$', '$x = -5$'],
        correcta: 2,
        explicacion: 'Donde el denominador se anula: $x = 5$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'La función homográfica tiene una asíntota vertical y otra horizontal.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'La asíntota horizontal de $y = \\dfrac{3x - 1}{x + 2}$ es $y = 3$.',
        correcta: true,
        explicacion: 'Sí: $a/c = 3/1 = 3$.',
      },
    ],
  },
  visualizadorId: 'plano-cartesiano',
  relacionados: ['graficos-funciones-avanzados'],
  tags: ['homografica', 'hiperbola', 'asintotas'],
};
