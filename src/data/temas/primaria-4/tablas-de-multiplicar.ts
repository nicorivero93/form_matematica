import type { Tema } from '../tipos';

export const TABLAS_DE_MULTIPLICAR: Tema = {
  slug: 'tablas-de-multiplicar',
  titulo: 'Tablas de multiplicar',
  anios: ['primaria-4'],
  area: 'numeros-y-operaciones',
  nivel: 'intro',
  resumen:
    'Las multiplicaciones del 1 al 10 son la base para todas las cuentas. Trucos para aprenderlas y usarlas.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Multiplicar es sumar muchas veces el mismo número. Por ejemplo, $4 \\times 3$ significa "sumar 4 tres veces": $4 + 4 + 4 = 12$.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Factores y producto',
      texto:
        'Los números que multiplicás se llaman factores. El resultado se llama producto. Ejemplo: en $6 \\times 7 = 42$, los factores son 6 y 7; el producto es 42.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Propiedad conmutativa',
      texto:
        '$a \\times b = b \\times a$. Por ejemplo $7 \\times 4$ es lo mismo que $4 \\times 7$. Esto reduce la mitad de tablas que tenés que memorizar.',
    },
    {
      tipo: 'parrafo',
      texto: 'Trucos rápidos:',
    },
    {
      tipo: 'lista',
      items: [
        'Tabla del 1: cualquier número multiplicado por 1 es ese número.',
        'Tabla del 10: agregás un 0 al final del número (5 × 10 = 50).',
        'Tabla del 5: termina siempre en 0 o en 5.',
        'Tabla del 2: es el doble del número.',
        'Tabla del 9: la cifra de las decenas del resultado y la de las unidades suman 9 (ej: 9×4=36, y 3+6=9).',
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Calcular usando suma repetida',
      enunciado: 'Si todavía no te sabés $7 \\times 3$, ¿cómo lo calculás?',
      pasos: [
        { explicacion: '$7 \\times 3$ = sumar 7 tres veces.' },
        { explicacion: '7 + 7 = 14.' },
        { explicacion: '14 + 7 = 21.' },
      ],
      resultado: '$7 \\times 3 = 21$',
    },
    {
      titulo: 'Truco de la tabla del 9',
      enunciado: '¿Cuánto es $9 \\times 6$?',
      pasos: [
        { explicacion: 'Le restamos 1 al 6: 6 - 1 = 5. Ese es el dígito de las decenas.' },
        { explicacion: 'Las unidades son lo que falta para llegar a 9: 9 - 5 = 4.' },
        { explicacion: 'Resultado: 54.' },
      ],
      resultado: '$9 \\times 6 = 54$',
    },
  ],
  erroresComunes: [
    'Confundir multiplicar con sumar. $3 \\times 4$ es 12, no 7.',
    'Olvidar la propiedad conmutativa: si te sabés $4 \\times 8$, ya te sabés $8 \\times 4$.',
    'Saltarse pasos en la tabla cuando todavía no te las acordás. Mejor sumar despacio que adivinar mal.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuánto es 7 × 8?',
        respuesta: 56,
        explicacion: '7 × 8 = 56. Truco: es la mitad de 7 × 16 = 112.',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Cuánto es 9 × 7?',
        respuesta: 63,
        explicacion: '9 × 7 = 63. Las cifras 6 y 3 suman 9 (truco de la tabla del 9).',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuál de estas multiplicaciones da el mismo resultado que 6 × 4?',
        opciones: ['6 + 4', '4 × 6', '6 × 6', '4 + 4 + 4 + 4'],
        correcta: 1,
        explicacion:
          'Por la propiedad conmutativa, 6 × 4 = 4 × 6 = 24.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Cualquier número multiplicado por 0 da 0.',
        correcta: true,
        explicacion:
          'Cierto. Multiplicar por 0 significa "no sumar nada", entonces el resultado siempre es 0.',
      },
    ],
  },
  visualizadorId: 'tabla-pitagorica',
  relacionados: ['multiplicacion-una-cifra', 'multiplicacion-dos-cifras'],
  tags: ['multiplicacion', 'tablas', 'pitagorica', 'trucos'],
};
