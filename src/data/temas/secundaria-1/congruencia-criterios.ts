import type { Tema } from '../tipos';

export const CONGRUENCIA_CRITERIOS: Tema = {
  slug: 'congruencia-criterios',
  titulo: 'Aplicación de criterios de congruencia',
  anios: ['secundaria-1'],
  area: 'geometria',
  nivel: 'avanzado',
  resumen:
    'Usar LLL, LAL, ALA para demostrar que dos triángulos son congruentes y deducir medidas iguales.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Una vez probada la congruencia, sabemos que TODOS los lados y ángulos correspondientes son iguales. Esto sirve para encontrar medidas desconocidas y demostrar propiedades.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Identificá qué información tenés (lados, ángulos) y elegí el criterio que mejor encaje con los datos.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Demostrar congruencia',
      enunciado:
        'Dos triángulos ABC y A\'B\'C\' tienen AB = A\'B\' = 5, AC = A\'C\' = 7, y el ángulo A = ángulo A\' = 50°. ¿Son congruentes?',
      pasos: [
        {
          explicacion:
            'Tenemos dos lados y el ángulo entre ellos iguales: criterio LAL.',
        },
        { explicacion: 'Sí, son congruentes.' },
      ],
      resultado: 'Sí, por LAL.',
    },
  ],
  erroresComunes: [
    'Aplicar LAL con un ángulo que NO está entre los dos lados conocidos.',
    'Pensar que con AAA se puede demostrar congruencia (es solo semejanza).',
    'No verificar todas las condiciones del criterio.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Qué criterio asegura congruencia?',
        opciones: ['AAA (3 ángulos)', 'LAL (lado-ángulo-lado)', 'LLA (lado-lado-ángulo)', 'AA (dos ángulos)'],
        correcta: 1,
        explicacion: 'LAL es uno de los 3 criterios válidos.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Los criterios de congruencia para triángulos son LLL, LAL y ALA.',
        correcta: true,
        explicacion: 'Cierto. Son los 3 criterios estándar.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En LAL, el ángulo conocido tiene que estar entre los dos lados conocidos.',
        correcta: true,
        explicacion: 'Sí. Si no, el criterio no es válido.',
      },
    ],
  },
  relacionados: ['congruencia-triangulos'],
  tags: ['congruencia', 'criterios', 'triangulos', 'demostracion'],
};
