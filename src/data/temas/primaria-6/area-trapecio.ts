import type { Tema } from '../tipos';

export const AREA_TRAPECIO: Tema = {
  slug: 'area-trapecio',
  titulo: 'Área del trapecio',
  anios: ['primaria-6'],
  area: 'medida',
  nivel: 'intermedio',
  resumen:
    'El trapecio es un cuadrilátero con un par de lados paralelos (las "bases"). Su área se calcula con (B + b) × h ÷ 2.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Trapecio',
      texto:
        'Cuadrilátero con un solo par de lados paralelos. El lado paralelo más largo se llama base mayor (B) y el más corto base menor (b).',
    },
    {
      tipo: 'latex',
      latex: 'A = \\dfrac{(B + b) \\times h}{2}',
      display: true,
    },
    {
      tipo: 'parrafo',
      texto:
        'La altura $h$ es la distancia perpendicular entre las dos bases.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'De dónde viene la fórmula',
      texto:
        'Si juntás dos trapecios iguales, podés formar un paralelogramo. La base de ese paralelogramo es B + b, así que cada trapecio tiene la mitad del área.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Área del trapecio',
      latex: 'A = \\dfrac{(B + b) \\times h}{2}',
      variables: [
        { simbolo: 'A', nombre: 'área', unidad: 'cm²', desc: '' },
        { simbolo: 'B', nombre: 'base mayor', unidad: 'cm', desc: '' },
        { simbolo: 'b', nombre: 'base menor', unidad: 'cm', desc: '' },
        { simbolo: 'h', nombre: 'altura', unidad: 'cm', desc: 'distancia entre bases' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Área de un trapecio',
      enunciado:
        'Un trapecio tiene base mayor 10 cm, base menor 6 cm y altura 4 cm. ¿Cuál es su área?',
      pasos: [
        { explicacion: 'A = ((10 + 6) × 4) ÷ 2.' },
        { explicacion: '= (16 × 4) ÷ 2 = 64 ÷ 2 = 32.' },
      ],
      resultado: '32 cm².',
    },
    {
      titulo: 'Despejar una base',
      enunciado:
        'Un trapecio de área 50 cm² tiene base menor 4 cm y altura 5 cm. ¿Cuánto mide la base mayor?',
      pasos: [
        { explicacion: '50 = ((B + 4) × 5) ÷ 2.' },
        { explicacion: '100 = (B + 4) × 5.' },
        { explicacion: '20 = B + 4 → B = 16.' },
      ],
      resultado: '16 cm.',
    },
  ],
  erroresComunes: [
    'Olvidar dividir por 2.',
    'Sumar las bases multiplicadas en lugar de sumarlas y después multiplicar.',
    'Usar uno de los lados oblicuos como altura. La altura es perpendicular a las bases.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Trapecio con B=8, b=4, h=3. ¿Área?',
        respuesta: 18,
        explicacion: '((8+4) × 3) ÷ 2 = 36 ÷ 2 = 18 cm².',
        unidad: 'cm²',
      },
      {
        tipo: 'numerica',
        enunciado: 'Trapecio con B=10, b=6, h=5. ¿Área?',
        respuesta: 40,
        explicacion: '((10+6) × 5) ÷ 2 = 80 ÷ 2 = 40 cm².',
        unidad: 'cm²',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si las dos bases del trapecio son iguales, en realidad es un paralelogramo.',
        correcta: true,
        explicacion: 'Sí. Si B = b, los dos lados son iguales y paralelos: paralelogramo.',
      },
    ],
  },
  relacionados: ['area-rectangulo', 'area-triangulo', 'cuadrilateros'],
  tags: ['area', 'trapecio', 'bases', 'altura'],
};
