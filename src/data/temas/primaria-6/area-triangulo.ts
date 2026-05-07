import type { Tema } from '../tipos';

export const AREA_TRIANGULO: Tema = {
  slug: 'area-triangulo',
  titulo: 'Área del triángulo',
  anios: ['primaria-6'],
  area: 'medida',
  nivel: 'intermedio',
  resumen:
    'El área de un triángulo es la mitad de base por altura. Por qué la mitad y cómo identificar la altura correcta.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Fórmula',
      texto:
        'El área de cualquier triángulo es base × altura dividido por 2. La altura es la distancia perpendicular desde la base al vértice opuesto.',
    },
    {
      tipo: 'latex',
      latex: 'A = \\dfrac{b \\times h}{2}',
      display: true,
    },
    {
      tipo: 'parrafo',
      texto:
        '¿Por qué dividido por 2? Porque dos triángulos iguales se "encastran" formando un paralelogramo. Como el paralelogramo tiene área b × h, cada triángulo tiene la mitad.',
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'La altura es perpendicular a la base, no es uno de los lados. En un triángulo rectángulo coincide con un cateto, pero en otros triángulos hay que dibujarla aparte.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Área del triángulo',
      latex: 'A = \\dfrac{b \\times h}{2}',
      variables: [
        { simbolo: 'A', nombre: 'área', unidad: 'cm²', desc: '' },
        { simbolo: 'b', nombre: 'base', unidad: 'cm', desc: 'cualquier lado' },
        { simbolo: 'h', nombre: 'altura', unidad: 'cm', desc: 'perpendicular a la base' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Área de un triángulo',
      enunciado:
        'Un triángulo tiene 8 cm de base y 5 cm de altura. ¿Cuál es su área?',
      pasos: [
        { explicacion: 'A = (b × h) ÷ 2 = (8 × 5) ÷ 2.' },
        { explicacion: '= 40 ÷ 2 = 20 cm².' },
      ],
      resultado: '20 cm².',
    },
    {
      titulo: 'Despejar la altura',
      enunciado:
        'Un triángulo tiene 30 cm² de área y 10 cm de base. ¿Cuál es su altura?',
      pasos: [
        { explicacion: 'A = (b × h) ÷ 2 → h = (2 × A) ÷ b.' },
        { explicacion: 'h = (2 × 30) ÷ 10 = 60 ÷ 10 = 6 cm.' },
      ],
      resultado: '6 cm.',
    },
  ],
  erroresComunes: [
    'Olvidar dividir por 2 al final.',
    'Usar uno de los lados como altura cuando no es perpendicular a la base.',
    'Mezclar unidades (cm con m) sin convertir.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuál es el área de un triángulo con b = 10 cm y h = 6 cm?',
        respuesta: 30,
        explicacion: '(10 × 6) ÷ 2 = 60 ÷ 2 = 30 cm².',
        unidad: 'cm²',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Un triángulo de área 24 cm² tiene 8 cm de base. ¿Cuánto mide la altura?',
        respuesta: 6,
        explicacion: '24 = (8 × h) ÷ 2 → h = (2 × 24) ÷ 8 = 6 cm.',
        unidad: 'cm',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En un triángulo rectángulo, los dos catetos pueden ser base y altura.',
        correcta: true,
        explicacion: 'Sí. Como son perpendiculares entre sí, sirven como base y altura.',
      },
    ],
  },
  relacionados: ['triangulos-clasificacion', 'area-rectangulo'],
  tags: ['area', 'triangulo', 'base', 'altura'],
};
