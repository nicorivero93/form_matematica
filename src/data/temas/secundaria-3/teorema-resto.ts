import type { Tema } from '../tipos';

export const TEOREMA_RESTO: Tema = {
  slug: 'teorema-resto',
  titulo: 'Teorema del resto y de Gauss',
  anios: ['secundaria-3'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'El resto de dividir $P(x)$ entre $(x - a)$ es $P(a)$. Si $P(a) = 0$, $a$ es raíz y $(x - a)$ es factor.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Teorema del resto',
      texto:
        'Si $P(x)$ se divide por $(x - a)$, el resto es $P(a)$.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Teorema de Gauss',
      texto:
        'Las raíces racionales posibles de un polinomio con coeficientes enteros tienen la forma $\\dfrac{p}{q}$ donde $p$ divide al término independiente y $q$ divide al coeficiente principal.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Buscar raíces racionales',
      enunciado:
        'Encontrá las raíces racionales de $x^3 - 6x^2 + 11x - 6$.',
      pasos: [
        { explicacion: 'Por Gauss: divisores de 6 son ±1, ±2, ±3, ±6.' },
        { explicacion: 'Probamos: $P(1) = 1 - 6 + 11 - 6 = 0$ ✓.' },
        { explicacion: 'Dividimos por $(x - 1)$ con Ruffini: cociente $x^2 - 5x + 6$.' },
        { explicacion: 'Factorizamos: $(x - 2)(x - 3)$.' },
      ],
      resultado: 'Raíces: 1, 2, 3.',
    },
  ],
  erroresComunes: [
    'Confundir "raíz" con "valor del polinomio".',
    'No probar todos los divisores en Gauss.',
    'Olvidar el signo en las raíces candidatas.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Si $P(x) = x^2 - 5x + 6$, ¿cuánto vale $P(2)$?',
        respuesta: 0,
        explicacion: '$4 - 10 + 6 = 0$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Por el teorema del resto, $P(a) = 0$ implica que $(x - a)$ es factor de $P$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Todo polinomio tiene al menos una raíz racional.',
        correcta: false,
        explicacion: 'Falso. Algunos solo tienen raíces irracionales o complejas.',
      },
    ],
  },
  relacionados: ['polinomios-division', 'factorizacion-cuadratica'],
  tags: ['polinomios', 'teorema del resto', 'gauss', 'raices'],
};
