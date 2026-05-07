import type { Tema } from '../tipos';

export const TRIGONOMETRIA_CIRCULO: Tema = {
  slug: 'trigonometria-circulo',
  titulo: 'Trigonometría en el círculo',
  anios: ['secundaria-3'],
  area: 'trigonometria',
  nivel: 'intermedio',
  resumen:
    'Las razones trigonométricas extendidas al círculo unitario para ángulos cualquiera (no solo agudos).',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'En el círculo unitario (radio 1), si tomás un ángulo $\\alpha$ desde el eje x positivo y marcás el punto correspondiente en la circunferencia, las coordenadas $(x, y)$ son $(\\cos \\alpha, \\sin \\alpha)$.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Cuadrante', 'sen', 'cos', 'tan'],
      filas: [
        ['I (0-90°)', '+', '+', '+'],
        ['II (90-180°)', '+', '-', '-'],
        ['III (180-270°)', '-', '-', '+'],
        ['IV (270-360°)', '-', '+', '-'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Valores de 90°, 180°',
      enunciado: '¿Cuánto valen $\\sin 90°$ y $\\cos 180°$?',
      pasos: [
        { explicacion: 'A 90°, el punto está en (0, 1): $\\sin = 1$, $\\cos = 0$.' },
        { explicacion: 'A 180°, en (-1, 0): $\\sin = 0$, $\\cos = -1$.' },
      ],
      resultado: '$\\sin 90° = 1$, $\\cos 180° = -1$.',
    },
  ],
  erroresComunes: [
    'Confundir signos en distintos cuadrantes.',
    'Pensar que sen siempre vale entre 0 y 1.',
    'Olvidar que $\\sin^2 + \\cos^2 = 1$.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es $\\cos 0°$?',
        opciones: ['0', '1', '-1', '∞'],
        correcta: 1,
        explicacion: 'Punto (1, 0) → cos = 1.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En el cuadrante II, $\\sin > 0$ y $\\cos < 0$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$.',
        correcta: true,
        explicacion: 'Identidad fundamental.',
      },
    ],
  },
  visualizadorId: 'circulo-trig',
  relacionados: ['razones-trigonometricas'],
  tags: ['trigonometria', 'circulo unitario', 'cuadrantes'],
};
