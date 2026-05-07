import type { Tema } from '../tipos';

export const AREA_PARALELOGRAMO: Tema = {
  slug: 'area-paralelogramo',
  titulo: 'Área del paralelogramo y del rombo',
  anios: ['primaria-6'],
  area: 'medida',
  nivel: 'intermedio',
  resumen:
    'Cómo calcular el área de un paralelogramo (base × altura) y de un rombo (diagonales / 2).',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Paralelogramo',
      texto:
        'Es un cuadrilátero con lados opuestos paralelos. Cuadrado, rectángulo y rombo son casos especiales.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El área de cualquier paralelogramo es base por altura. La altura es perpendicular a la base, no es uno de los lados inclinados.',
    },
    {
      tipo: 'latex',
      latex: '\\text{Paralelogramo: } A = b \\times h',
      display: true,
    },
    {
      tipo: 'parrafo',
      texto:
        'Para el rombo hay otra fórmula útil: diagonal mayor por diagonal menor, dividido por 2.',
    },
    {
      tipo: 'latex',
      latex: '\\text{Rombo: } A = \\dfrac{D \\times d}{2}',
      display: true,
    },
  ],
  formulasClave: [
    {
      nombre: 'Área del paralelogramo',
      latex: 'A = b \\times h',
      variables: [
        { simbolo: 'A', nombre: 'área', unidad: 'cm²', desc: '' },
        { simbolo: 'b', nombre: 'base', unidad: 'cm', desc: '' },
        { simbolo: 'h', nombre: 'altura', unidad: 'cm', desc: 'perpendicular a la base' },
      ],
    },
    {
      nombre: 'Área del rombo (con diagonales)',
      latex: 'A = \\dfrac{D \\times d}{2}',
      variables: [
        { simbolo: 'D', nombre: 'diagonal mayor', unidad: 'cm', desc: '' },
        { simbolo: 'd', nombre: 'diagonal menor', unidad: 'cm', desc: '' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Paralelogramo',
      enunciado:
        'Un paralelogramo tiene 12 cm de base y 5 cm de altura. ¿Cuál es su área?',
      pasos: [{ explicacion: 'A = b × h = 12 × 5 = 60 cm².' }],
      resultado: '60 cm².',
    },
    {
      titulo: 'Rombo',
      enunciado:
        'Un rombo tiene diagonales de 8 cm y 6 cm. ¿Cuál es su área?',
      pasos: [
        { explicacion: 'A = (D × d) ÷ 2 = (8 × 6) ÷ 2.' },
        { explicacion: '= 48 ÷ 2 = 24 cm².' },
      ],
      resultado: '24 cm².',
    },
  ],
  erroresComunes: [
    'Usar el lado inclinado del paralelogramo como altura. La altura es perpendicular.',
    'Olvidar dividir por 2 en la fórmula del rombo.',
    'Confundir las diagonales con los lados.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Calculá el área de un paralelogramo de base 9 cm y altura 4 cm.',
        respuesta: 36,
        explicacion: '9 × 4 = 36 cm².',
        unidad: 'cm²',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Un rombo tiene diagonales de 10 y 8 cm. ¿Cuál es su área?',
        respuesta: 40,
        explicacion: '(10 × 8) ÷ 2 = 40 cm².',
        unidad: 'cm²',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Un cuadrado es un caso particular de paralelogramo con base × altura.',
        correcta: true,
        explicacion: 'Sí. En el cuadrado, base = altura = lado.',
      },
    ],
  },
  relacionados: ['cuadrilateros', 'area-rectangulo', 'area-triangulo'],
  tags: ['area', 'paralelogramo', 'rombo', 'diagonal'],
};
