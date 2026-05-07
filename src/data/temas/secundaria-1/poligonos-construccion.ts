import type { Tema } from '../tipos';

export const POLIGONOS_CONSTRUCCION: Tema = {
  slug: 'poligonos-construccion',
  titulo: 'Diagonales y construcción de polígonos',
  anios: ['secundaria-1'],
  area: 'geometria',
  nivel: 'intermedio',
  resumen:
    'Cuántas diagonales tiene un polígono y cómo construir polígonos regulares de n lados.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Diagonal',
      texto:
        'Una diagonal es un segmento que une dos vértices NO consecutivos del polígono.',
    },
    {
      tipo: 'latex',
      latex: 'D = \\dfrac{n(n - 3)}{2}',
      display: true,
    },
    {
      tipo: 'parrafo',
      texto:
        'Donde $n$ es la cantidad de lados. Por ejemplo, un pentágono tiene $\\tfrac{5 \\times 2}{2} = 5$ diagonales.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Construcción regular',
      texto:
        'Un polígono regular de n lados se construye dividiendo una circunferencia en n arcos iguales (cada uno de $360°/n$) y uniendo los puntos.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Cantidad de diagonales',
      latex: 'D = \\dfrac{n(n-3)}{2}',
      variables: [{ simbolo: 'n', nombre: 'cantidad de lados', desc: '' }],
    },
  ],
  ejemplos: [
    {
      titulo: 'Diagonales del hexágono',
      enunciado: '¿Cuántas diagonales tiene un hexágono?',
      pasos: [
        { explicacion: 'D = (6 × 3) / 2 = 9.' },
      ],
      resultado: '9 diagonales.',
    },
    {
      titulo: 'Encontrar n',
      enunciado: 'Un polígono tiene 14 diagonales. ¿Cuántos lados?',
      pasos: [
        { explicacion: '14 = n(n-3)/2 → n² - 3n = 28.' },
        { explicacion: 'Probamos n = 7: 7×4=28 ✓.' },
      ],
      resultado: '7 lados (heptágono).',
    },
  ],
  erroresComunes: [
    'Contar lados como diagonales (los lados unen vértices consecutivos, no son diagonales).',
    'Olvidar dividir por 2 (cada diagonal se contaría dos veces).',
    'Confundir $n(n-3)$ con $n(n-1)$.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuántas diagonales tiene un octógono?',
        respuesta: 20,
        explicacion: '8 × 5 / 2 = 20.',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Cuántas diagonales tiene un cuadrado?',
        respuesta: 2,
        explicacion: '4 × 1 / 2 = 2.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Un triángulo tiene 0 diagonales.',
        correcta: true,
        explicacion: 'Cierto: $3 × 0 / 2 = 0$. Todos los vértices son consecutivos.',
      },
    ],
  },
  relacionados: ['poligonos-regulares', 'angulos-poligono'],
  tags: ['poligonos', 'diagonales', 'construccion'],
};
