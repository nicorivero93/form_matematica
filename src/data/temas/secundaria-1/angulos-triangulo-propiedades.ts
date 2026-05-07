import type { Tema } from '../tipos';

export const ANGULOS_TRIANGULO_PROPIEDADES: Tema = {
  slug: 'angulos-triangulo-propiedades',
  titulo: 'Propiedades de los ángulos en triángulos',
  anios: ['secundaria-1'],
  area: 'geometria',
  nivel: 'intermedio',
  resumen:
    'La suma de los ángulos interiores es 180°. Ángulo exterior = suma de los dos no adyacentes. Triángulo isósceles tiene base con ángulos iguales.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Suma de interiores',
      texto: 'En todo triángulo, $\\hat{A} + \\hat{B} + \\hat{C} = 180°$.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Ángulo exterior',
      texto:
        'El ángulo exterior (formado por un lado y la prolongación del siguiente) es igual a la suma de los dos ángulos interiores no adyacentes.',
    },
    {
      tipo: 'parrafo',
      texto:
        'En un triángulo isósceles, los ángulos opuestos a los lados iguales son iguales (ángulos basales).',
    },
  ],
  ejemplos: [
    {
      titulo: 'Aplicar propiedad del exterior',
      enunciado:
        'Un triángulo tiene ángulos interiores 50° y 60°. ¿Cuánto mide el exterior del tercer ángulo?',
      pasos: [
        { explicacion: 'Tercer interior: $180° - 50° - 60° = 70°$.' },
        { explicacion: 'Su exterior es suplementario: $180° - 70° = 110°$.' },
        { explicacion: 'O directamente: 50° + 60° = 110° (suma de los otros dos).' },
      ],
      resultado: '110°.',
    },
    {
      titulo: 'Isósceles',
      enunciado:
        'Un triángulo isósceles tiene un ángulo basal de 65°. ¿Cuánto miden los otros dos?',
      pasos: [
        { explicacion: 'Los dos basales son iguales: ambos 65°.' },
        { explicacion: 'El ángulo opuesto a la base: $180° - 65° - 65° = 50°$.' },
      ],
      resultado: '65° y 50°.',
    },
  ],
  erroresComunes: [
    'Olvidar que la suma de los ángulos siempre es 180°.',
    'Confundir ángulo exterior con su interior adyacente.',
    'Pensar que los ángulos basales del isósceles son los menores (en realidad pueden ser los menores o los mayores, depende del triángulo).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Triángulo con ángulos 40° y 75°. ¿Tercer ángulo?',
        respuesta: 65,
        explicacion: '180 - 40 - 75 = 65°.',
        unidad: '°',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Triángulo isósceles con ángulo desigual de 100°. ¿Cuánto mide cada basal?',
        respuesta: 40,
        explicacion: '(180 - 100) ÷ 2 = 40°.',
        unidad: '°',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'El ángulo exterior es siempre mayor que cualquiera de los interiores no adyacentes.',
        correcta: true,
        explicacion: 'Cierto. El exterior es la suma de los dos interiores no adyacentes.',
      },
    ],
  },
  relacionados: ['suma-angulos-triangulo', 'triangulos-clasificacion'],
  tags: ['triangulos', 'angulos', 'isosceles', 'exterior'],
};
