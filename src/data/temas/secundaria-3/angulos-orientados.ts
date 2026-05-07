import type { Tema } from '../tipos';

export const ANGULOS_ORIENTADOS: Tema = {
  slug: 'angulos-orientados',
  titulo: 'Ángulos orientados y radianes',
  anios: ['secundaria-3'],
  area: 'trigonometria',
  nivel: 'intermedio',
  resumen:
    'Ángulos positivos (sentido antihorario) y negativos (horario). El radián como unidad: $\\pi$ rad = 180°.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Radián',
      texto:
        'Un radián es la medida del ángulo central que abarca un arco de longitud igual al radio. Una vuelta completa es $2\\pi$ rad = 360°.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Grados', 'Radianes'],
      filas: [
        ['0°', '0'],
        ['30°', '$\\pi/6$'],
        ['45°', '$\\pi/4$'],
        ['90°', '$\\pi/2$'],
        ['180°', '$\\pi$'],
        ['360°', '$2\\pi$'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Para convertir: grados × $\\pi/180$ = radianes. Y radianes × $180/\\pi$ = grados.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Convertir',
      enunciado: '¿Cuántos radianes son 60°?',
      pasos: [{ explicacion: '$60 \\times \\pi/180 = \\pi/3$.' }],
      resultado: '$\\pi/3$.',
    },
  ],
  erroresComunes: [
    'Olvidar cambiar el modo de la calculadora (DEG/RAD).',
    'Confundir π con 3,14 cuando hace falta exactitud.',
    'Olvidar el signo de ángulos orientados negativos.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado: '$2\\pi$ rad equivale a 360°.',
        correcta: true,
        explicacion: 'Cierto, una vuelta completa.',
      },
      {
        tipo: 'multiple',
        enunciado: '90° en radianes:',
        opciones: ['$\\pi$', '$\\pi/2$', '$\\pi/3$', '$2\\pi$'],
        correcta: 1,
        explicacion: '90° × π/180 = π/2.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Un ángulo negativo gira en sentido horario.',
        correcta: true,
        explicacion: 'Cierto: convención.',
      },
    ],
  },
  visualizadorId: 'circulo-trig',
  relacionados: ['trigonometria-circulo', 'angulos-medir'],
  tags: ['angulos', 'radianes', 'orientados'],
};
