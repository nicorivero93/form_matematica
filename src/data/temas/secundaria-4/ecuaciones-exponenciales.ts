import type { Tema } from '../tipos';

export const ECUACIONES_EXPONENCIALES: Tema = {
  slug: 'ecuaciones-exponenciales',
  titulo: 'Ecuaciones exponenciales',
  anios: ['secundaria-4'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Ecuaciones donde la incógnita está en el exponente. Se resuelven igualando bases o aplicando logaritmos.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Estrategia',
      texto:
        'Si podés escribir ambos lados con la misma base, igualás los exponentes. Si no, aplicás logaritmo a ambos lados.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Misma base',
      enunciado: 'Resolvé $2^x = 32$.',
      pasos: [
        { explicacion: '$32 = 2^5$.' },
        { explicacion: '$2^x = 2^5 \\Rightarrow x = 5$.' },
      ],
      resultado: '$x = 5$.',
    },
    {
      titulo: 'Con logaritmo',
      enunciado: 'Resolvé $3^x = 7$.',
      pasos: [
        { explicacion: 'Aplicamos log: $x \\log 3 = \\log 7$.' },
        { explicacion: '$x = \\log 7 / \\log 3 \\approx 1{,}77$.' },
      ],
      resultado: '$x \\approx 1{,}77$.',
    },
  ],
  erroresComunes: [
    'Sumar exponentes cuando se debería igualar.',
    'Olvidar el log al despejar.',
    'No verificar la solución.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Resolvé $5^x = 125$.',
        respuesta: 3,
        explicacion: '$125 = 5^3$.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Resolvé $4^x = 1$.',
        respuesta: 0,
        explicacion: '$4^0 = 1$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Toda ecuación exponencial tiene solución real.',
        correcta: false,
        explicacion: 'Falso. $a^x = -2$ no tiene solución real (la exp es siempre positiva).',
      },
    ],
  },
  relacionados: ['funcion-exponencial', 'propiedades-logaritmos'],
  tags: ['ecuaciones', 'exponenciales'],
};
