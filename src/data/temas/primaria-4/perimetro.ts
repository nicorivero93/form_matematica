import type { Tema } from '../tipos';

export const PERIMETRO: Tema = {
  slug: 'perimetro',
  titulo: 'Perímetro de figuras simples',
  anios: ['primaria-4'],
  area: 'medida',
  nivel: 'intermedio',
  resumen:
    'El perímetro es la suma de los lados de una figura. Cómo calcularlo en cuadrados, rectángulos y triángulos.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Si querés saber cuánto alambrado necesitás para cercar un patio, lo que tenés que averiguar es el perímetro: la suma de todos los lados de la figura.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Perímetro',
      texto:
        'El perímetro es la longitud total del contorno de una figura. Se mide en unidades de longitud (cm, m, km).',
    },
    {
      tipo: 'parrafo',
      texto: 'En figuras particulares hay fórmulas más rápidas:',
    },
    {
      tipo: 'tabla',
      encabezados: ['Figura', 'Fórmula del perímetro'],
      filas: [
        ['Cuadrado de lado $\\ell$', '$P = 4 \\times \\ell$'],
        ['Rectángulo de base $b$ y altura $h$', '$P = 2 \\times (b + h)$'],
        ['Triángulo de lados $a, b, c$', '$P = a + b + c$'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Si la figura no es de las "típicas", siempre podés sumar todos los lados uno por uno. Eso siempre funciona.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Perímetro de un rectángulo',
      latex: 'P = 2 \\times (b + h)',
      variables: [
        { simbolo: 'P', nombre: 'perímetro', unidad: 'm', desc: 'lo que sumás' },
        { simbolo: 'b', nombre: 'base', unidad: 'm', desc: 'lado horizontal' },
        { simbolo: 'h', nombre: 'altura', unidad: 'm', desc: 'lado vertical' },
      ],
      cuandoUsar: 'Para sumar rápido los 4 lados de un rectángulo.',
    },
    {
      nombre: 'Perímetro de un cuadrado',
      latex: 'P = 4 \\times \\ell',
      variables: [
        { simbolo: 'P', nombre: 'perímetro', unidad: 'm', desc: 'lo que sumás' },
        { simbolo: '\\ell', nombre: 'lado', unidad: 'm', desc: 'medida de cualquier lado' },
      ],
      cuandoUsar: 'Como todos los lados son iguales, multiplicamos × 4.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Perímetro de un rectángulo',
      enunciado:
        'Un patio rectangular mide 8 m de base y 5 m de altura. ¿Cuál es su perímetro?',
      pasos: [
        { explicacion: 'Aplicamos la fórmula $P = 2 \\times (b + h)$.' },
        { explicacion: 'Sumamos base + altura: 8 + 5 = 13.' },
        { explicacion: 'Multiplicamos por 2: 2 × 13 = 26.' },
      ],
      resultado: 'P = 26 m.',
    },
    {
      titulo: 'Perímetro de un cuadrado',
      enunciado:
        'Un cuadrado tiene 6 cm de lado. ¿Cuál es su perímetro?',
      pasos: [
        { explicacion: 'Fórmula: $P = 4 \\times \\ell$.' },
        { explicacion: 'P = 4 × 6 = 24 cm.' },
      ],
      resultado: 'P = 24 cm.',
    },
    {
      titulo: 'Perímetro de un triángulo',
      enunciado:
        'Un triángulo tiene lados de 5 cm, 7 cm y 9 cm. ¿Cuál es su perímetro?',
      pasos: [
        { explicacion: 'P = 5 + 7 + 9.' },
        { explicacion: '5 + 7 = 12. 12 + 9 = 21.' },
      ],
      resultado: 'P = 21 cm.',
    },
  ],
  erroresComunes: [
    'Multiplicar base por altura. Eso es área, no perímetro.',
    'En el rectángulo, sumar solo dos lados. Recordá: hay 4 lados, dos pares iguales.',
    'Olvidar mantener todas las medidas en la misma unidad antes de sumar (todo en cm o todo en m).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuál es el perímetro de un cuadrado de 7 cm de lado?',
        respuesta: 28,
        explicacion: '4 × 7 = 28 cm.',
        unidad: 'cm',
      },
      {
        tipo: 'numerica',
        enunciado:
          '¿Cuál es el perímetro de un rectángulo de 12 m de base y 4 m de altura?',
        respuesta: 32,
        explicacion: '2 × (12 + 4) = 2 × 16 = 32 m.',
        unidad: 'm',
      },
      {
        tipo: 'multiple',
        enunciado:
          'Si querés cercar un patio de 10 m × 6 m, ¿cuántos metros de alambre vas a necesitar?',
        opciones: ['16 m', '32 m', '60 m', '20 m'],
        correcta: 1,
        explicacion: 'Es el perímetro: 2 × (10 + 6) = 32 m.',
      },
    ],
  },
  visualizadorId: 'regla-perimetro',
  relacionados: ['figuras-planas', 'unidades-longitud'],
  tags: ['perimetro', 'medida', 'rectangulo', 'cuadrado', 'triangulo'],
};
