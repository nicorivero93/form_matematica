import type { Tema } from '../tipos';

export const VOLUMEN_CUERPOS: Tema = {
  slug: 'volumen-cuerpos',
  titulo: 'Volumen de cuerpos: prismas y cilindros',
  anios: ['secundaria-1'],
  area: 'medida',
  nivel: 'intermedio',
  resumen:
    'Volumen de prismas (cualquier base poligonal) y cilindros: área de la base por la altura.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Regla general',
      texto:
        'En todo prisma o cilindro recto: $V = \\text{Área de la base} \\times \\text{altura}$.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Cuerpo', 'Volumen'],
      filas: [
        ['Cubo', '$\\ell^3$'],
        ['Prisma rectangular', '$l \\times a \\times h$'],
        ['Prisma triangular', '$\\dfrac{(b \\times h_t)}{2} \\times h$'],
        ['Cilindro', '$\\pi r^2 \\times h$'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Prisma triangular',
      enunciado:
        'Un prisma triangular tiene base de 6 cm con altura del triángulo 4 cm, y altura del prisma 10 cm. ¿Volumen?',
      pasos: [
        { explicacion: 'Área de la base: (6 × 4)/2 = 12 cm².' },
        { explicacion: 'V = 12 × 10 = 120 cm³.' },
      ],
      resultado: '120 cm³.',
    },
    {
      titulo: 'Cilindro',
      enunciado:
        'Cilindro con r = 4 cm y h = 7 cm. (π = 3,14)',
      pasos: [
        { explicacion: 'Base: π × 16 = 50,24 cm².' },
        { explicacion: 'V = 50,24 × 7 = 351,68 cm³.' },
      ],
      resultado: '351,68 cm³.',
    },
  ],
  erroresComunes: [
    'Olvidar que la fórmula es área de la base × altura.',
    'Mezclar la altura del cuerpo con la altura de la base (en prismas triangulares hay dos).',
    'Confundir radio con diámetro.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Cubo de arista 4 cm. ¿Volumen?',
        respuesta: 64,
        explicacion: '4³ = 64 cm³.',
        unidad: 'cm³',
      },
      {
        tipo: 'numerica',
        enunciado: 'Prisma de base cuadrada de 5 cm de lado y altura 10 cm. ¿Volumen?',
        respuesta: 250,
        explicacion: '25 × 10 = 250.',
        unidad: 'cm³',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'El volumen de un cilindro es $\\pi r h$.',
        correcta: false,
        explicacion: 'Falso. Es $\\pi r^2 h$.',
      },
    ],
  },
  visualizadorId: 'volumen-prisma',
  relacionados: ['volumen-prisma', 'volumen-cilindro'],
  tags: ['volumen', 'prisma', 'cilindro', 'cuerpos'],
};
