import type { Tema } from '../tipos';

export const VOLUMEN_CILINDRO: Tema = {
  slug: 'volumen-cilindro',
  titulo: 'Volumen del cilindro',
  anios: ['primaria-7'],
  area: 'medida',
  nivel: 'intermedio',
  resumen:
    'Cómo calcular el volumen de una lata, un vaso o cualquier cilindro: área del círculo de la base por la altura.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Cilindro',
      texto:
        'Un cilindro tiene dos bases circulares iguales unidas por una superficie curva. Pensá en una lata o un tubo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'El volumen de cualquier cilindro es el área de la base por la altura. Como la base es un círculo, el área es $\\pi r^2$.',
    },
    {
      tipo: 'latex',
      latex: 'V = \\pi r^2 \\times h',
      display: true,
    },
  ],
  formulasClave: [
    {
      nombre: 'Volumen del cilindro',
      latex: 'V = \\pi r^2 h',
      variables: [
        { simbolo: 'V', nombre: 'volumen', unidad: 'cm³', desc: '' },
        { simbolo: 'r', nombre: 'radio de la base', unidad: 'cm', desc: '' },
        { simbolo: 'h', nombre: 'altura', unidad: 'cm', desc: '' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Lata de gaseosa',
      enunciado:
        'Una lata cilíndrica tiene 3 cm de radio y 12 cm de altura. ¿Cuál es su volumen? (π = 3,14)',
      pasos: [
        { explicacion: 'Área de la base: π × 3² = 3,14 × 9 = 28,26 cm².' },
        { explicacion: 'Volumen: 28,26 × 12 = 339,12 cm³.' },
      ],
      resultado: '339,12 cm³ ≈ 339 ml.',
    },
    {
      titulo: 'Capacidad en litros',
      enunciado:
        'Un tanque cilíndrico tiene 50 cm de radio y 100 cm de altura. ¿Cuántos litros le caben?',
      pasos: [
        { explicacion: 'V = π × 50² × 100 = 3,14 × 2500 × 100 = 785.000 cm³.' },
        { explicacion: '1 litro = 1.000 cm³ → 785 litros.' },
      ],
      resultado: '785 litros.',
    },
  ],
  erroresComunes: [
    'Usar el diámetro como radio (sin dividir por 2).',
    'Olvidar elevar el radio al cuadrado.',
    'Mezclar unidades.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Cilindro con r = 5 cm y h = 10 cm. ¿Volumen? (π = 3,14)',
        respuesta: 785,
        tolerancia: 1,
        explicacion: '3,14 × 25 × 10 = 785 cm³.',
        unidad: 'cm³',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Cilindro de diámetro 4 cm y altura 6 cm. ¿Volumen? (π = 3,14)',
        respuesta: 75.36,
        tolerancia: 1,
        explicacion: 'r = 2. V = 3,14 × 4 × 6 = 75,36 cm³.',
        unidad: 'cm³',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Si duplicás el radio del cilindro, el volumen se cuadruplica.',
        correcta: true,
        explicacion: 'Cierto. El volumen depende de r², así que duplicar r multiplica V por 4.',
      },
    ],
  },
  visualizadorId: 'volumen-prisma',
  relacionados: ['volumen-prisma', 'circulo-perimetro-area'],
  tags: ['volumen', 'cilindro', 'pi', 'capacidad'],
};
