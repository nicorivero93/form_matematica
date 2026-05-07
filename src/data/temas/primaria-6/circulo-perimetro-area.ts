import type { Tema } from '../tipos';

export const CIRCULO_PERIMETRO_AREA: Tema = {
  slug: 'circulo-perimetro-area',
  titulo: 'Perímetro y área del círculo',
  anios: ['primaria-6'],
  area: 'medida',
  nivel: 'intermedio',
  resumen:
    'Cómo calcular cuánto mide el contorno de una circunferencia y cuánta superficie ocupa el círculo. Aparece $\\pi$.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Pi (π)',
      texto:
        'El número pi es la razón entre la circunferencia y el diámetro. Vale aproximadamente 3,14. Es un número irracional: tiene infinitas cifras decimales sin patrón repetitivo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'En la primaria usamos la aproximación $\\pi \\approx 3{,}14$. Lo importante es que sirve para todas las circunferencias del universo.',
    },
    {
      tipo: 'latex',
      latex: '\\text{Perímetro: } P = 2 \\pi r \\qquad \\text{Área: } A = \\pi r^2',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'No confundas las fórmulas: el perímetro multiplica por el radio, el área multiplica por el radio AL CUADRADO. Si las mezclás, te equivocás por un factor enorme.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Perímetro de la circunferencia',
      latex: 'P = 2 \\pi r',
      variables: [
        { simbolo: 'P', nombre: 'perímetro', unidad: 'cm', desc: '' },
        { simbolo: 'r', nombre: 'radio', unidad: 'cm', desc: '' },
      ],
    },
    {
      nombre: 'Área del círculo',
      latex: 'A = \\pi r^2',
      variables: [
        { simbolo: 'A', nombre: 'área', unidad: 'cm²', desc: '' },
        { simbolo: 'r', nombre: 'radio', unidad: 'cm', desc: '' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Perímetro',
      enunciado:
        'Una rueda tiene 50 cm de radio. ¿Cuánto mide su perímetro? (usá π ≈ 3,14)',
      pasos: [
        { explicacion: 'P = 2 × π × r = 2 × 3,14 × 50.' },
        { explicacion: '= 6,28 × 50 = 314 cm.' },
      ],
      resultado: '314 cm.',
    },
    {
      titulo: 'Área',
      enunciado: 'Un plato tiene 10 cm de radio. ¿Cuál es su área?',
      pasos: [
        { explicacion: 'A = π × r².' },
        { explicacion: 'r² = 10 × 10 = 100.' },
        { explicacion: 'A = 3,14 × 100 = 314 cm².' },
      ],
      resultado: '314 cm².',
    },
    {
      titulo: 'Cuando dan el diámetro',
      enunciado:
        '¿Cuál es el área de un círculo de 8 cm de diámetro?',
      pasos: [
        { explicacion: 'Primero el radio: r = d ÷ 2 = 4 cm.' },
        { explicacion: 'A = π × 4² = 3,14 × 16 = 50,24 cm².' },
      ],
      resultado: '50,24 cm².',
    },
  ],
  erroresComunes: [
    'Mezclar perímetro y área. Pista: perímetro tiene "×2π", área tiene "²".',
    'Olvidar elevar el radio al cuadrado en el cálculo del área.',
    'Usar el diámetro como si fuera el radio (sin dividirlo por 2).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          '¿Cuál es el perímetro de una circunferencia de radio 10 cm? (Usá π = 3,14, escribí solo el número en cm)',
        respuesta: 62.8,
        tolerancia: 0.1,
        explicacion: 'P = 2 × 3,14 × 10 = 62,8 cm.',
        unidad: 'cm',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Cuál es el área de un círculo de radio 5 cm? (π = 3,14)',
        respuesta: 78.5,
        tolerancia: 0.1,
        explicacion: 'A = 3,14 × 5² = 3,14 × 25 = 78,5 cm².',
        unidad: 'cm²',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El número π es exactamente 3,14.',
        correcta: false,
        explicacion: 'Falso. 3,14 es solo una aproximación. π tiene infinitos decimales.',
      },
    ],
  },
  relacionados: ['circulo-introduccion', 'perimetro', 'area-rectangulo'],
  tags: ['circulo', 'pi', 'perimetro', 'area', 'circunferencia'],
};
