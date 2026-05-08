import type { Tema } from '../tipos';

export const RAZONES_TRIGONOMETRICAS: Tema = {
  slug: 'razones-trigonometricas',
  titulo: 'Razones trigonométricas en triángulo rectángulo',
  anios: ['secundaria-2'],
  area: 'trigonometria',
  nivel: 'intermedio',
  resumen:
    'Seno, coseno y tangente como cocientes de lados de un triángulo rectángulo.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Razón', 'Definición'],
      filas: [
        ['Seno', '$\\sin \\alpha = \\dfrac{\\text{cateto opuesto}}{\\text{hipotenusa}}$'],
        ['Coseno', '$\\cos \\alpha = \\dfrac{\\text{cateto adyacente}}{\\text{hipotenusa}}$'],
        ['Tangente', '$\\tan \\alpha = \\dfrac{\\text{cateto opuesto}}{\\text{cateto adyacente}}$'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Mnemotecnia: SOH-CAH-TOA',
      texto:
        'Sin = Opuesto/Hipotenusa. Cos = Adyacente/Hipotenusa. Tan = Opuesto/Adyacente.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Calcular sen y cos',
      enunciado:
        'Triángulo rectángulo con cateto opuesto 3, adyacente 4, hipotenusa 5. ¿$\\sin \\alpha$ y $\\cos \\alpha$?',
      pasos: [
        { explicacion: '$\\sin = 3/5 = 0{,}6$.' },
        { explicacion: '$\\cos = 4/5 = 0{,}8$.' },
      ],
      resultado: '$\\sin = 0{,}6$, $\\cos = 0{,}8$.',
    },
  ],
  erroresComunes: [
    'Confundir cateto opuesto con adyacente.',
    'Olvidar identificar bien la hipotenusa.',
    'Mezclar las fórmulas.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '$\\sin \\alpha$ es:',
        opciones: ['Op/Hip', 'Ady/Hip', 'Op/Ady', 'Hip/Op'],
        correcta: 0,
        explicacion: 'SOH.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Triángulo rectángulo con cateto opuesto 5 e hipotenusa 13. ¿sen?',
        respuesta: 0.385,
        tolerancia: 0.005,
        explicacion: '5/13 ≈ 0,385.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'La tangente es opuesto sobre adyacente.',
        correcta: true,
        explicacion: 'TOA.',
      },
    ],
  },
  visualizadorId: 'circulo-trig',
  relacionados: ['teorema-pitagoras', 'triangulos-clasificacion'],
  tags: ['trigonometria', 'seno', 'coseno', 'tangente'],
};
