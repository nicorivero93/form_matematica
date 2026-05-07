import type { Tema } from '../tipos';

export const LENGUAJE_ALGEBRAICO_AVANZADO: Tema = {
  slug: 'lenguaje-algebraico-avanzado',
  titulo: 'Expresiones algebraicas',
  anios: ['secundaria-1'],
  area: 'algebra',
  nivel: 'intermedio',
  resumen:
    'Términos, coeficientes, parte literal, monomios y polinomios. Cómo simplificar términos semejantes.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Término algebraico',
      texto:
        'Un término es la combinación de un coeficiente (número) y una parte literal (variables y exponentes). Ejemplo: $5x^2$ tiene coeficiente 5 y parte literal $x^2$.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Términos semejantes',
      texto:
        'Dos términos son semejantes si tienen exactamente la misma parte literal. $3x$ y $-7x$ son semejantes; $3x$ y $3x^2$ NO.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Para simplificar una expresión, sumamos o restamos los términos semejantes (sumando coeficientes), dejando la parte literal igual.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Reducir términos',
      enunciado: 'Simplificá $3x + 5 - 2x + 7$.',
      pasos: [
        { explicacion: 'Términos con $x$: $3x - 2x = x$.' },
        { explicacion: 'Términos sin variable: $5 + 7 = 12$.' },
        { explicacion: 'Resultado: $x + 12$.' },
      ],
      resultado: '$x + 12$.',
    },
    {
      titulo: 'Múltiples variables',
      enunciado: 'Simplificá $4a + 2b - a + 3b$.',
      pasos: [
        { explicacion: '$4a - a = 3a$.' },
        { explicacion: '$2b + 3b = 5b$.' },
      ],
      resultado: '$3a + 5b$.',
    },
  ],
  erroresComunes: [
    'Sumar términos no semejantes ($3x + 2x^2 \\neq 5x^3$).',
    'Olvidar el signo del coeficiente.',
    'Cambiar la parte literal al sumar coeficientes.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Simplificá $7x - 3 + 2x + 8$.',
        opciones: ['$9x + 5$', '$5x + 5$', '$9x - 5$', '$10x + 11$'],
        correcta: 0,
        explicacion: '7x+2x=9x. -3+8=5.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuáles son términos semejantes?',
        opciones: ['$3x^2$ y $5x$', '$2a$ y $-7a$', '$4y$ y $4z$', '$x^2$ y $x^3$'],
        correcta: 1,
        explicacion: '$2a$ y $-7a$ tienen misma parte literal.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$5x + 3y$ se puede simplificar.',
        correcta: false,
        explicacion: 'No, no son términos semejantes.',
      },
    ],
  },
  relacionados: ['lenguaje-algebraico', 'ecuaciones-primer-grado-simples'],
  tags: ['algebra', 'expresiones', 'monomios', 'terminos semejantes'],
};
