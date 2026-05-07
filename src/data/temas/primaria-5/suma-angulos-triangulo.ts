import type { Tema } from '../tipos';

export const SUMA_ANGULOS_TRIANGULO: Tema = {
  slug: 'suma-angulos-triangulo',
  titulo: 'Suma de los ángulos de un triángulo',
  anios: ['primaria-5'],
  area: 'geometria',
  nivel: 'intermedio',
  resumen:
    'Los tres ángulos interiores de cualquier triángulo siempre suman 180°. Cómo usar esto para encontrar un ángulo desconocido.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Propiedad fundamental',
      texto:
        'En cualquier triángulo (sin importar la forma), la suma de sus tres ángulos interiores es exactamente 180°.',
    },
    {
      tipo: 'latex',
      latex: '\\hat{A} + \\hat{B} + \\hat{C} = 180°',
      display: true,
    },
    {
      tipo: 'parrafo',
      texto:
        'Esta propiedad es muy útil: si conocés dos ángulos, podés calcular el tercero restando de 180°.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Tipo', 'Ángulos típicos'],
      filas: [
        ['Equilátero', '60° - 60° - 60°'],
        ['Rectángulo isósceles', '90° - 45° - 45°'],
        ['Rectángulo común', '90° + dos ángulos que suman 90°'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Encontrar el ángulo que falta',
      enunciado:
        'Un triángulo tiene dos ángulos de 50° y 70°. ¿Cuánto mide el tercero?',
      pasos: [
        { explicacion: 'Suma total: 180°.' },
        { explicacion: 'Suma conocida: 50° + 70° = 120°.' },
        { explicacion: 'Tercer ángulo: 180° - 120° = 60°.' },
      ],
      resultado: '60°.',
    },
    {
      titulo: 'Triángulo rectángulo',
      enunciado:
        'Un triángulo rectángulo tiene un ángulo agudo de 35°. ¿Cuánto mide el otro ángulo agudo?',
      pasos: [
        { explicacion: 'Un ángulo es 90° (porque es rectángulo).' },
        { explicacion: '90° + 35° = 125°.' },
        { explicacion: 'El que falta: 180° - 125° = 55°.' },
      ],
      resultado: '55°.',
    },
  ],
  erroresComunes: [
    'Pensar que la suma cambia según el tipo de triángulo. Siempre es 180°, sin excepción.',
    'Olvidar que un triángulo rectángulo ya tiene 90° "gastados" antes de empezar.',
    'Confundir grados con centímetros u otra unidad.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Un triángulo tiene ángulos de 80° y 30°. ¿Cuánto mide el tercer ángulo?',
        respuesta: 70,
        explicacion: '180° - 80° - 30° = 70°.',
        unidad: '°',
      },
      {
        tipo: 'numerica',
        enunciado: 'Un triángulo equilátero tiene los tres ángulos iguales. ¿Cuánto mide cada uno?',
        respuesta: 60,
        explicacion: '180° ÷ 3 = 60° por ángulo.',
        unidad: '°',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Un triángulo puede tener dos ángulos rectos (de 90° cada uno).',
        correcta: false,
        explicacion: '90° + 90° = 180°, no quedaría espacio para el tercer ángulo. Imposible.',
      },
    ],
  },
  relacionados: ['triangulos-clasificacion', 'angulos-introduccion'],
  tags: ['triangulos', 'angulos', 'suma', 'propiedad'],
};
