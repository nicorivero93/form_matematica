import type { Tema } from '../tipos';

export const POLINOMIOS_COMPLETAR_CUADRADOS: Tema = {
  slug: 'polinomios-completar-cuadrados',
  titulo: 'Completar cuadrados',
  anios: ['secundaria-4'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Técnica para reescribir $ax^2 + bx + c$ como $a(x - h)^2 + k$. Útil para encontrar el vértice de la parábola.',
  teoria: [
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Sacá el coeficiente $a$ como factor común de los términos con $x$.',
        'Sumá y restá el cuadrado de la mitad del coeficiente lineal.',
        'Reescribí el trinomio cuadrado perfecto como un cuadrado de binomio.',
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Completar',
      enunciado: 'Completá: $x^2 + 6x + 5$.',
      pasos: [
        { explicacion: 'Mitad de 6 es 3, al cuadrado 9.' },
        { explicacion: '$x^2 + 6x + 9 - 9 + 5 = (x + 3)^2 - 4$.' },
      ],
      resultado: '$(x + 3)^2 - 4$.',
    },
  ],
  erroresComunes: [
    'No tomar la mitad del coeficiente.',
    'Olvidar restar el cuadrado.',
    'Confundir signos.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Completar $x^2 + 4x + 7$:',
        opciones: ['$(x+2)^2 + 3$', '$(x+2)^2 + 7$', '$(x+4)^2 + 3$', '$(x+2)^2 - 3$'],
        correcta: 0,
        explicacion: 'Mitad de 4 = 2 → 4. $x^2+4x+4 - 4 + 7 = (x+2)^2 + 3$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Completar cuadrados sirve para llevar una cuadrática a la forma canónica.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$x^2 + 8x = (x + 4)^2 - 16$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['funcion-cuadratica-formas', 'productos-notables'],
  tags: ['cuadratica', 'completar cuadrados'],
};
