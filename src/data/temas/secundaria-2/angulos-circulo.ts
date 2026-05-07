import type { Tema } from '../tipos';

export const ANGULOS_CIRCULO: Tema = {
  slug: 'angulos-circulo',
  titulo: 'Ángulos en la circunferencia',
  anios: ['secundaria-2'],
  area: 'geometria',
  nivel: 'avanzado',
  resumen:
    'Ángulo central: igual al arco que abarca. Ángulo inscripto: la mitad del central que abarca el mismo arco.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Ángulo central',
      texto: 'Ángulo cuyo vértice está en el centro. Mide igual que el arco que abarca.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Ángulo inscripto',
      texto:
        'Ángulo cuyo vértice está EN la circunferencia. Mide la mitad del ángulo central que abarca el mismo arco.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Caso especial',
      texto:
        'Si un ángulo inscripto abarca un diámetro (es decir, abarca media circunferencia = 180°), entonces mide 90°.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Inscripto y central',
      enunciado:
        'Un ángulo central mide 80°. ¿Cuánto mide el ángulo inscripto que abarca el mismo arco?',
      pasos: [{ explicacion: 'Inscripto = 80° / 2 = 40°.' }],
      resultado: '40°.',
    },
    {
      titulo: 'Triángulo inscripto en semicirculo',
      enunciado:
        'Un triángulo está inscripto en una circunferencia, con uno de sus lados igual al diámetro. ¿Cómo es el ángulo opuesto a ese lado?',
      pasos: [
        { explicacion: 'El ángulo opuesto al diámetro es inscripto y abarca un arco de 180°.' },
        { explicacion: 'Mide 90°: es rectángulo.' },
      ],
      resultado: 'Rectángulo.',
    },
  ],
  erroresComunes: [
    'Confundir central con inscripto.',
    'No identificar el arco que abarca el ángulo.',
    'Olvidar dividir por 2 al pasar de central a inscripto.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Ángulo central de 100°. ¿Cuánto mide el inscripto que abarca el mismo arco?',
        respuesta: 50,
        explicacion: '100 / 2 = 50°.',
        unidad: '°',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Inscripto que abarca un diámetro. ¿Cuánto mide?',
        respuesta: 90,
        explicacion: '180/2 = 90°.',
        unidad: '°',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Dos ángulos inscriptos que abarcan el mismo arco son iguales.',
        correcta: true,
        explicacion: 'Cierto: ambos miden la mitad del central.',
      },
    ],
  },
  relacionados: ['circulo-introduccion', 'angulos-medir'],
  tags: ['circulo', 'angulos', 'central', 'inscripto'],
};
