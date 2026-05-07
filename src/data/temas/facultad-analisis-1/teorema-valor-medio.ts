import type { Tema } from '../tipos';

export const TEOREMA_VALOR_MEDIO: Tema = {
  slug: 'teorema-valor-medio',
  titulo: 'Teorema del valor medio (Lagrange)',
  anios: ['facultad-analisis-1'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Si $f$ es continua en $[a, b]$ y derivable en $(a, b)$, existe $c \\in (a, b)$ tal que $f\'(c) = \\dfrac{f(b) - f(a)}{b - a}$.',
  teoria: [
    {
      tipo: 'latex',
      latex: 'f\'(c) = \\dfrac{f(b) - f(a)}{b - a}',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Interpretación geométrica',
      texto:
        'Existe un punto $c$ donde la pendiente de la tangente coincide con la pendiente de la cuerda que une $(a, f(a))$ y $(b, f(b))$.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Caso especial: Rolle',
      texto:
        'Si además $f(a) = f(b)$, existe $c$ con $f\'(c) = 0$. (Existe punto crítico interior.)',
    },
  ],
  ejemplos: [
    {
      titulo: 'Aplicación',
      enunciado:
        '$f(x) = x^2$ en $[0, 2]$. Encontrar $c$ del TVM.',
      pasos: [
        { explicacion: '$\\dfrac{f(2) - f(0)}{2 - 0} = \\dfrac{4 - 0}{2} = 2$.' },
        { explicacion: '$f\'(x) = 2x = 2 \\Rightarrow x = 1$.' },
      ],
      resultado: '$c = 1$.',
    },
  ],
  erroresComunes: [
    'Olvidar las hipótesis: continuidad en $[a, b]$ Y derivabilidad en $(a, b)$.',
    'Pensar que el TVM da unicidad (puede haber varios $c$).',
    'Confundir TVM (Lagrange) con TVI (valor intermedio).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          '$f(x) = x^2$ en $[1, 3]$. ¿Cuánto vale $c$ del TVM?',
        respuesta: 2,
        explicacion: '(9-1)/2 = 4. $2c = 4 \\Rightarrow c = 2$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Rolle es un caso particular del TVM con $f(a) = f(b)$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'El TVM dice que la cuerda es paralela a alguna tangente.',
        correcta: true,
        explicacion: 'Geométricamente.',
      },
    ],
  },
  relacionados: ['teorema-bolzano', 'derivada-introduccion'],
  tags: ['valor medio', 'lagrange', 'rolle', 'derivada'],
};
