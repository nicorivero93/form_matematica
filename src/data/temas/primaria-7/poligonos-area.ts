import type { Tema } from '../tipos';

export const POLIGONOS_AREA: Tema = {
  slug: 'poligonos-area',
  titulo: 'Área de polígonos regulares',
  anios: ['primaria-7'],
  area: 'medida',
  nivel: 'avanzado',
  resumen:
    'Cómo calcular el área de pentágonos, hexágonos y otros polígonos regulares usando perímetro y apotema.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Apotema',
      texto:
        'La apotema de un polígono regular es la distancia desde el centro hasta el punto medio de cualquiera de sus lados.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El área de cualquier polígono regular se calcula con una fórmula universal:',
    },
    {
      tipo: 'latex',
      latex: 'A = \\dfrac{P \\times a}{2}',
      display: true,
    },
    {
      tipo: 'parrafo',
      texto:
        'donde $P$ es el perímetro y $a$ es la apotema. Esta fórmula sale de descomponer el polígono en triángulos isósceles iguales y sumar sus áreas.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Área de polígono regular',
      latex: 'A = \\dfrac{P \\times a}{2}',
      variables: [
        { simbolo: 'A', nombre: 'área', unidad: 'cm²', desc: '' },
        { simbolo: 'P', nombre: 'perímetro', unidad: 'cm', desc: '' },
        { simbolo: 'a', nombre: 'apotema', unidad: 'cm', desc: 'centro al lado' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Hexágono regular',
      enunciado:
        'Un hexágono regular tiene lado 6 cm y apotema 5,2 cm. ¿Cuál es su área?',
      pasos: [
        { explicacion: 'Perímetro: 6 × 6 = 36 cm.' },
        { explicacion: 'A = (P × a) ÷ 2 = (36 × 5,2) ÷ 2.' },
        { explicacion: '= 187,2 ÷ 2 = 93,6 cm².' },
      ],
      resultado: '93,6 cm².',
    },
    {
      titulo: 'Pentágono regular',
      enunciado:
        'Un pentágono regular tiene perímetro 25 cm y apotema 3,4 cm. ¿Cuál es su área?',
      pasos: [
        { explicacion: 'A = (25 × 3,4) ÷ 2 = 85 ÷ 2 = 42,5 cm².' },
      ],
      resultado: '42,5 cm².',
    },
  ],
  erroresComunes: [
    'Confundir apotema con radio (la apotema va al lado, el radio al vértice).',
    'Olvidar dividir por 2.',
    'No calcular primero el perímetro completo.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Polígono regular con P = 40 cm y a = 5 cm. ¿Área?',
        respuesta: 100,
        explicacion: '(40 × 5) ÷ 2 = 100 cm².',
        unidad: 'cm²',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Hexágono regular de lado 4 cm con apotema 3,46 cm. ¿Área?',
        respuesta: 41.52,
        tolerancia: 0.5,
        explicacion: 'P = 24. A = (24 × 3,46) ÷ 2 ≈ 41,52 cm².',
        unidad: 'cm²',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En un cuadrado, la apotema es la mitad del lado.',
        correcta: true,
        explicacion: 'Cierto. El centro al lado del cuadrado es la mitad del lado.',
      },
    ],
  },
  relacionados: ['poligonos-regulares', 'area-rectangulo'],
  tags: ['area', 'poligono regular', 'apotema', 'perimetro'],
};
