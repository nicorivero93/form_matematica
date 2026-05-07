import type { Tema } from '../tipos';

export const POLINOMIOS_DIVISION: Tema = {
  slug: 'polinomios-division',
  titulo: 'División de polinomios',
  anios: ['secundaria-3'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Algoritmo de división polinómica. Cociente y resto. Regla de Ruffini para divisor lineal $(x - a)$.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Como en la división de números, dividir polinomios da un cociente y un resto: $P(x) = D(x) \\cdot C(x) + R(x)$, donde $\\deg(R) < \\deg(D)$.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Regla de Ruffini',
      texto:
        'Para divisor de la forma $(x - a)$, podés usar el método rápido de Ruffini: bajás el coeficiente principal, multiplicás por $a$, sumás, y así.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Ruffini',
      enunciado: 'Dividí $x^3 - 6x + 4$ entre $(x - 2)$.',
      pasos: [
        { explicacion: 'Coeficientes: 1, 0, -6, 4. a = 2.' },
        { explicacion: 'Bajamos 1. 1×2 = 2. 0+2 = 2. 2×2 = 4. -6+4 = -2. -2×2 = -4. 4+(-4) = 0.' },
        { explicacion: 'Cociente: $x^2 + 2x - 2$. Resto: 0.' },
      ],
      resultado: 'Cociente $x^2 + 2x - 2$, resto 0.',
    },
  ],
  erroresComunes: [
    'Olvidar coeficientes 0 cuando faltan grados.',
    'Confundir signo de $a$ en Ruffini.',
    'No verificar al final.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado: 'Si dividís $P(x)$ entre $(x - a)$ y el resto es 0, entonces $a$ es raíz de $P(x)$.',
        correcta: true,
        explicacion: 'Es el teorema del resto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En Ruffini, el divisor debe ser de la forma $(x - a)$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'El grado del cociente es la suma de los grados del polinomio y del divisor.',
        correcta: false,
        explicacion: 'Falso. Es la diferencia.',
      },
    ],
  },
  relacionados: ['polinomios-multiplicacion', 'factorizacion-cuadratica'],
  tags: ['polinomios', 'division', 'ruffini'],
};
