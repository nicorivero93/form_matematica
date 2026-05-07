import type { Tema } from '../tipos';

export const AREA_RECTANGULO: Tema = {
  slug: 'area-rectangulo',
  titulo: 'Área de cuadrados y rectángulos',
  anios: ['primaria-5'],
  area: 'medida',
  nivel: 'intermedio',
  resumen:
    'El área es cuánto "espacio plano" ocupa una figura. Cómo calcularla en cuadrados y rectángulos.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'El área es una medida de cuánto espacio plano ocupa una figura. Se mide en unidades cuadradas: cm², m², km², etc. Cuidado: el "²" significa "al cuadrado" e indica que es una medida de superficie.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Área del rectángulo',
      texto: 'Área = base × altura. Multiplicás los dos lados que forman las esquinas.',
    },
    {
      tipo: 'latex',
      latex: 'A_{\\text{rectángulo}} = b \\times h',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Área del cuadrado',
      texto:
        'Como en un cuadrado los 4 lados son iguales, multiplicás el lado por sí mismo (es decir, lo elevás al cuadrado).',
    },
    {
      tipo: 'latex',
      latex: 'A_{\\text{cuadrado}} = \\ell \\times \\ell = \\ell^2',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'No confundas área con perímetro. El perímetro suma los lados (cm). El área multiplica (cm²). Tienen unidades distintas.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Área del rectángulo',
      latex: 'A = b \\times h',
      variables: [
        { simbolo: 'A', nombre: 'área', unidad: 'cm²', desc: 'la superficie' },
        { simbolo: 'b', nombre: 'base', unidad: 'cm', desc: 'lado horizontal' },
        { simbolo: 'h', nombre: 'altura', unidad: 'cm', desc: 'lado vertical' },
      ],
    },
    {
      nombre: 'Área del cuadrado',
      latex: 'A = \\ell^2',
      variables: [
        { simbolo: 'A', nombre: 'área', unidad: 'cm²', desc: 'la superficie' },
        { simbolo: '\\ell', nombre: 'lado', unidad: 'cm', desc: 'cualquier lado del cuadrado' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Área de un rectángulo',
      enunciado: 'Un patio mide 8 m de base por 5 m de altura. ¿Cuál es su área?',
      pasos: [
        { explicacion: 'Aplicamos $A = b \\times h$.' },
        { explicacion: '$A = 8 \\times 5 = 40$ m².' },
      ],
      resultado: '40 m².',
    },
    {
      titulo: 'Área de un cuadrado',
      enunciado: 'Un cuadrado tiene 7 cm de lado. ¿Cuál es su área?',
      pasos: [
        { explicacion: 'Aplicamos $A = \\ell^2$.' },
        { explicacion: '$A = 7 \\times 7 = 49$ cm².' },
      ],
      resultado: '49 cm².',
    },
    {
      titulo: 'Despejar un lado',
      enunciado:
        'Un rectángulo tiene 60 cm² de área y 12 cm de base. ¿Cuál es su altura?',
      pasos: [
        { explicacion: '$A = b \\times h$, así que $h = A \\div b$.' },
        { explicacion: '$h = 60 \\div 12 = 5$ cm.' },
      ],
      resultado: '5 cm.',
    },
  ],
  erroresComunes: [
    'Confundir área con perímetro. El perímetro suma; el área multiplica.',
    'Olvidar la unidad cuadrada (cm²). Es importantísima.',
    'No revisar que base y altura estén en la misma unidad antes de multiplicar.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuál es el área de un rectángulo de 9 cm × 4 cm?',
        respuesta: 36,
        explicacion: '9 × 4 = 36 cm².',
        unidad: 'cm²',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Cuál es el área de un cuadrado de 6 m de lado?',
        respuesta: 36,
        explicacion: '6 × 6 = 36 m².',
        unidad: 'm²',
      },
      {
        tipo: 'multiple',
        enunciado:
          'Un rectángulo tiene 100 cm² de área y 20 cm de base. ¿Cuánto mide su altura?',
        opciones: ['5 cm', '20 cm', '80 cm', '2.000 cm'],
        correcta: 0,
        explicacion: '100 ÷ 20 = 5 cm.',
      },
    ],
  },
  visualizadorId: 'regla-perimetro',
  relacionados: ['perimetro', 'cuadrilateros', 'unidades-longitud'],
  tags: ['area', 'rectangulo', 'cuadrado', 'medida', 'superficie'],
};
