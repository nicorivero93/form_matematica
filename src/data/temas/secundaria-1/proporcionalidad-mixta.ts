import type { Tema } from '../tipos';

export const PROPORCIONALIDAD_MIXTA: Tema = {
  slug: 'proporcionalidad-mixta',
  titulo: 'Reglas de tres: directa, inversa y compuesta',
  anios: ['secundaria-1'],
  area: 'numeros-y-operaciones',
  nivel: 'avanzado',
  resumen:
    'Distinguir cuándo aplicar regla de tres directa, inversa o compuesta. Recetas, distancias, obras.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Tipo', 'Identificación'],
      filas: [
        ['Directa', 'Más de uno → más del otro.'],
        ['Inversa', 'Más de uno → menos del otro.'],
        ['Compuesta', 'Más de dos magnitudes en juego.'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Antes de plantear la fórmula, preguntate: si una variable aumenta, ¿la otra aumenta o disminuye? Eso te dice si es directa o inversa.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Compuesta',
      enunciado:
        '4 obreros pintan una casa en 8 días trabajando 6 horas diarias. ¿Cuántos días tardarían 6 obreros trabajando 4 horas diarias?',
      pasos: [
        { explicacion: 'Más obreros → menos días (inversa).' },
        { explicacion: 'Menos horas/día → más días (inversa).' },
        {
          explicacion:
            'Constante: obreros × horas × días = 4 × 6 × 8 = 192.',
        },
        { explicacion: '6 × 4 × x = 192 → x = 192/24 = 8 días.' },
      ],
      resultado: '8 días.',
    },
  ],
  erroresComunes: [
    'Aplicar regla directa cuando la situación es inversa.',
    'No identificar las magnitudes correctamente.',
    'Confundir magnitudes proporcionales con magnitudes que crecen pero no proporcionalmente.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          '6 caños llenan un tanque en 8 horas. ¿Cuánto tardan 4 caños?',
        respuesta: 12,
        explicacion: 'Inversa. 6×8=48. 4×x=48 → x=12.',
        unidad: 'h',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Si 2 kg de manzanas cuestan $1.000, ¿cuánto cuestan 7 kg?',
        respuesta: 3500,
        explicacion: 'Directa. (1000×7)/2 = 3.500.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En proporcionalidad inversa, el producto de las dos magnitudes es constante.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['proporcionalidad-directa', 'proporcionalidad-inversa'],
  tags: ['proporcionalidad', 'regla de tres', 'compuesta'],
};
