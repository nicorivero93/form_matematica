import type { Tema } from '../tipos';

export const VOLUMEN_PRISMA: Tema = {
  slug: 'volumen-prisma',
  titulo: 'Volumen del cubo y del prisma rectangular',
  anios: ['primaria-6'],
  area: 'medida',
  nivel: 'intermedio',
  resumen:
    'Cuánto espacio ocupa una caja en 3D: largo × ancho × alto. El volumen se mide en unidades cúbicas.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Volumen',
      texto:
        'El volumen es cuánto espacio en 3D ocupa un cuerpo. Se mide en unidades cúbicas: cm³, m³, etc. El "³" indica que es una medida en 3 dimensiones.',
    },
    {
      tipo: 'latex',
      latex:
        '\\text{Cubo: } V = \\ell^3 \\qquad \\text{Prisma rectangular: } V = \\text{largo} \\times \\text{ancho} \\times \\text{alto}',
      display: true,
    },
    {
      tipo: 'tabla',
      encabezados: ['Equivalencias', 'Valor'],
      filas: [
        ['1 m³', '1.000 dm³'],
        ['1 dm³', '1.000 cm³'],
        ['1 dm³', '1 litro (l)'],
        ['1 cm³', '1 mililitro (ml)'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Como cada paso del sistema métrico es ×10 en longitud, en volumen es ×1000 (porque va al cubo).',
    },
  ],
  formulasClave: [
    {
      nombre: 'Volumen del prisma rectangular',
      latex: 'V = l \\times a \\times h',
      variables: [
        { simbolo: 'V', nombre: 'volumen', unidad: 'cm³', desc: '' },
        { simbolo: 'l', nombre: 'largo', unidad: 'cm', desc: '' },
        { simbolo: 'a', nombre: 'ancho', unidad: 'cm', desc: '' },
        { simbolo: 'h', nombre: 'alto', unidad: 'cm', desc: '' },
      ],
    },
    {
      nombre: 'Volumen del cubo',
      latex: 'V = \\ell^3',
      variables: [
        { simbolo: 'V', nombre: 'volumen', unidad: 'cm³', desc: '' },
        { simbolo: '\\ell', nombre: 'arista', unidad: 'cm', desc: 'cualquier arista' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Volumen de una caja',
      enunciado:
        'Una caja mide 10 cm × 5 cm × 4 cm. ¿Cuál es su volumen?',
      pasos: [{ explicacion: 'V = 10 × 5 × 4 = 200 cm³.' }],
      resultado: '200 cm³.',
    },
    {
      titulo: 'Cubo',
      enunciado: 'Un cubo tiene 6 cm de arista. ¿Cuál es su volumen?',
      pasos: [
        { explicacion: 'V = 6 × 6 × 6 = 216 cm³.' },
      ],
      resultado: '216 cm³.',
    },
    {
      titulo: 'Volumen y capacidad',
      enunciado:
        'Una pecera mide 30 × 20 × 25 cm. ¿Cuántos litros de agua le caben?',
      pasos: [
        { explicacion: 'V = 30 × 20 × 25 = 15.000 cm³.' },
        { explicacion: '1 cm³ = 1 ml. 15.000 ml = 15 l.' },
      ],
      resultado: '15 litros.',
    },
  ],
  erroresComunes: [
    'Confundir volumen con área. El volumen es 3D; el área es 2D.',
    'Olvidar las unidades cúbicas (cm³).',
    'Mezclar unidades sin convertir antes (todo en cm o todo en m).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuál es el volumen de un prisma de 4 × 3 × 2 cm?',
        respuesta: 24,
        explicacion: '4 × 3 × 2 = 24 cm³.',
        unidad: 'cm³',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Cuál es el volumen de un cubo de 5 cm de arista?',
        respuesta: 125,
        explicacion: '5 × 5 × 5 = 125 cm³.',
        unidad: 'cm³',
      },
      {
        tipo: 'multiple',
        enunciado: 'Un prisma de 10 × 10 × 10 cm contiene:',
        opciones: ['1 ml', '100 ml', '1.000 ml', '1 litro'],
        correcta: 3,
        explicacion: '10×10×10 = 1.000 cm³ = 1.000 ml = 1 litro.',
      },
    ],
  },
  visualizadorId: 'volumen-prisma',
  relacionados: ['area-rectangulo', 'sistema-metrico'],
  tags: ['volumen', 'cubo', 'prisma', 'capacidad', '3D'],
};
