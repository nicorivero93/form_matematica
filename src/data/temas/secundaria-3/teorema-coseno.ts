import type { Tema } from '../tipos';

export const TEOREMA_COSENO: Tema = {
  slug: 'teorema-coseno',
  titulo: 'Teorema del coseno',
  anios: ['secundaria-3'],
  area: 'trigonometria',
  nivel: 'avanzado',
  resumen:
    'Generalización de Pitágoras para triángulos no rectángulos: $c^2 = a^2 + b^2 - 2ab \\cos \\gamma$.',
  teoria: [
    {
      tipo: 'latex',
      latex: 'c^2 = a^2 + b^2 - 2ab \\cos \\gamma',
      display: true,
    },
    {
      tipo: 'parrafo',
      texto:
        'Donde $\\gamma$ es el ángulo opuesto al lado $c$. Cuando $\\gamma = 90°$, $\\cos \\gamma = 0$ y queda Pitágoras: $c^2 = a^2 + b^2$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Encontrar lado',
      enunciado:
        'Triángulo con $a = 5$, $b = 7$, $\\gamma = 60°$. ¿Cuánto vale $c$?',
      pasos: [
        { explicacion: '$c^2 = 25 + 49 - 2 \\cdot 5 \\cdot 7 \\cdot 0{,}5 = 74 - 35 = 39$.' },
        { explicacion: '$c = \\sqrt{39} \\approx 6{,}24$.' },
      ],
      resultado: '$c \\approx 6{,}24$.',
    },
  ],
  erroresComunes: [
    'Olvidar el signo "-" en la fórmula.',
    'Aplicar Pitágoras cuando el triángulo no es rectángulo.',
    'Confundir el ángulo opuesto.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Cuando el ángulo es 90°, el teorema del coseno se reduce a Pitágoras.',
        correcta: true,
        explicacion: 'Cierto: $\\cos 90° = 0$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El teorema del coseno solo vale para triángulos rectángulos.',
        correcta: false,
        explicacion: 'Falso. Vale para cualquier triángulo.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Triángulo con $a = 3$, $b = 4$, $\\gamma = 90°$. ¿Cuánto vale $c$?',
        respuesta: 5,
        explicacion: '$c^2 = 9 + 16 = 25 \\Rightarrow c = 5$.',
      },
    ],
  },
  relacionados: ['teorema-seno', 'teorema-pitagoras'],
  tags: ['trigonometria', 'teorema coseno'],
};
