import type { Tema } from '../tipos';

export const IDENTIDADES_TRIGONOMETRICAS: Tema = {
  slug: 'identidades-trigonometricas',
  titulo: 'Identidades trigonométricas básicas',
  anios: ['secundaria-3'],
  area: 'trigonometria',
  nivel: 'avanzado',
  resumen:
    'Relaciones siempre verdaderas: la fundamental ($\\sin^2 + \\cos^2 = 1$) y otras derivadas.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Identidad', 'Fórmula'],
      filas: [
        ['Fundamental', '$\\sin^2 \\alpha + \\cos^2 \\alpha = 1$'],
        ['Tangente', '$\\tan \\alpha = \\dfrac{\\sin \\alpha}{\\cos \\alpha}$'],
        ['Secante / cosecante', '$\\sec = 1/\\cos$, $\\csc = 1/\\sin$'],
        ['Cotangente', '$\\cot \\alpha = 1/\\tan \\alpha$'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Encontrar coseno desde seno',
      enunciado: 'Si $\\sin \\alpha = 0{,}6$ y $\\alpha$ está en cuadrante I, ¿cuánto vale $\\cos \\alpha$?',
      pasos: [
        { explicacion: '$\\cos^2 \\alpha = 1 - 0{,}36 = 0{,}64$.' },
        { explicacion: '$\\cos \\alpha = 0{,}8$ (positivo en cuadrante I).' },
      ],
      resultado: '0,8.',
    },
  ],
  erroresComunes: [
    'Confundir $\\sin^2 \\alpha$ con $\\sin(\\alpha^2)$.',
    'Olvidar el signo según el cuadrante.',
    'Mezclar las identidades.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado: '$\\sin^2 + \\cos^2 = 1$ vale para cualquier ángulo.',
        correcta: true,
        explicacion: 'Identidad fundamental.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Si $\\cos \\alpha = 0{,}5$, ¿cuánto vale $\\sin^2 \\alpha$?',
        respuesta: 0.75,
        tolerancia: 0.001,
        explicacion: '$\\sin^2 = 1 - 0{,}25 = 0{,}75$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'La tangente puede valer cualquier número real.',
        correcta: true,
        explicacion: 'Cierto: imagen de $\\tan$ es $\\mathbb{R}$.',
      },
    ],
  },
  relacionados: ['razones-trigonometricas', 'trigonometria-circulo'],
  tags: ['trigonometria', 'identidades', 'fundamental'],
};
