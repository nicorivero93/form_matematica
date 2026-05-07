import type { Tema } from '../tipos';

export const VOLUMEN_PIRAMIDE_CONO: Tema = {
  slug: 'volumen-piramide-cono',
  titulo: 'Volumen de pirámide y cono',
  anios: ['secundaria-2'],
  area: 'medida',
  nivel: 'intermedio',
  resumen:
    'La pirámide y el cono tienen 1/3 del volumen del prisma o cilindro de la misma base y altura.',
  teoria: [
    {
      tipo: 'latex',
      latex: '\\text{Pirámide: } V = \\dfrac{B \\cdot h}{3} \\qquad \\text{Cono: } V = \\dfrac{\\pi r^2 \\cdot h}{3}',
      display: true,
    },
    {
      tipo: 'parrafo',
      texto:
        'Donde $B$ es el área de la base y $h$ es la altura del cuerpo (perpendicular desde la cima hasta la base).',
    },
  ],
  ejemplos: [
    {
      titulo: 'Pirámide cuadrangular',
      enunciado:
        'Pirámide con base cuadrada de 6 cm y altura 10 cm. ¿Volumen?',
      pasos: [
        { explicacion: 'Base: $6^2 = 36$.' },
        { explicacion: '$V = (36 \\times 10)/3 = 120$ cm³.' },
      ],
      resultado: '120 cm³.',
    },
    {
      titulo: 'Cono',
      enunciado: 'Cono con $r = 3$ cm y $h = 9$ cm. (π = 3,14)',
      pasos: [
        { explicacion: '$V = (\\pi \\cdot 9 \\cdot 9)/3 = 84{,}78$ cm³.' },
      ],
      resultado: '84,78 cm³.',
    },
  ],
  erroresComunes: [
    'Olvidar dividir por 3.',
    'Usar el lado oblicuo en vez de la altura.',
    'Confundir base con altura.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Pirámide cuadrada con lado de base 4 cm y h = 6 cm. ¿Volumen?',
        respuesta: 32,
        explicacion: '$(16 \\times 6)/3 = 32$.',
        unidad: 'cm³',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Cono con $r=2$ y $h=6$ (π=3). ¿Volumen?',
        respuesta: 24,
        explicacion: '$(3 \\times 4 \\times 6)/3 = 24$.',
        unidad: 'cm³',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'El volumen del cono es 1/3 del cilindro de igual base y altura.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['volumen-cuerpos', 'volumen-cilindro'],
  tags: ['volumen', 'piramide', 'cono'],
};
