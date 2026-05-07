import type { Tema } from '../tipos';

export const TEOREMA_SENO: Tema = {
  slug: 'teorema-seno',
  titulo: 'Teorema del seno',
  anios: ['secundaria-3'],
  area: 'trigonometria',
  nivel: 'avanzado',
  resumen:
    'En cualquier triángulo, los lados son proporcionales a los senos de sus ángulos opuestos.',
  teoria: [
    {
      tipo: 'latex',
      latex: '\\dfrac{a}{\\sin \\alpha} = \\dfrac{b}{\\sin \\beta} = \\dfrac{c}{\\sin \\gamma}',
      display: true,
    },
    {
      tipo: 'parrafo',
      texto:
        'Sirve para resolver triángulos cualesquiera (no solo rectángulos). Necesitás conocer al menos un par de lado-ángulo opuestos.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Encontrar lado',
      enunciado:
        'Triángulo con $\\alpha = 30°$, $\\beta = 70°$, $a = 5$. ¿Cuánto vale $b$?',
      pasos: [
        { explicacion: '$\\dfrac{5}{\\sin 30°} = \\dfrac{b}{\\sin 70°}$.' },
        { explicacion: '$5 / 0{,}5 = 10$. $b = 10 \\cdot \\sin 70° \\approx 9{,}40$.' },
      ],
      resultado: '$b \\approx 9{,}40$.',
    },
  ],
  erroresComunes: [
    'Aplicar el teorema sin tener un par lado-ángulo opuestos.',
    'Olvidar que el ángulo y el lado deben ser opuestos.',
    'Confundir grados con radianes.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado: 'El teorema del seno vale para cualquier triángulo.',
        correcta: true,
        explicacion: 'Cierto, no solo rectángulos.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En el teorema, el lado y el ángulo deben ser adyacentes.',
        correcta: false,
        explicacion: 'Falso. Deben ser OPUESTOS.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'En un triángulo con $\\alpha = 30°$, $a = 4$, $\\beta = 90°$, ¿cuánto vale $b$?',
        respuesta: 8,
        explicacion: '$b = 4/\\sin 30° \\cdot \\sin 90° = 4/0{,}5 \\cdot 1 = 8$.',
      },
    ],
  },
  relacionados: ['razones-trigonometricas', 'trigonometria-circulo'],
  tags: ['trigonometria', 'teorema seno'],
};
