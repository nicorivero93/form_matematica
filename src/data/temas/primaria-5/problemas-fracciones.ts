import type { Tema } from '../tipos';

export const PROBLEMAS_FRACCIONES: Tema = {
  slug: 'problemas-fracciones',
  titulo: 'Problemas con fracciones',
  anios: ['primaria-5'],
  area: 'fracciones-decimales',
  nivel: 'intermedio',
  resumen:
    'Cómo aplicar fracciones a problemas reales: calcular una fracción de una cantidad y combinar fracciones.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'En la vida real las fracciones aparecen mucho: "la mitad de la pizza", "tres cuartos del recorrido", "un quinto de los chicos". Para resolver estos problemas hay un truco simple.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Calcular $\\tfrac{a}{b}$ de una cantidad',
      texto:
        'Multiplicás la cantidad por el numerador y dividís por el denominador. O al revés (primero dividís y después multiplicás), lo que sea más fácil.',
    },
    {
      tipo: 'latex',
      latex: '\\dfrac{a}{b} \\text{ de } N \\;=\\; \\dfrac{a \\times N}{b}',
      display: true,
    },
  ],
  ejemplos: [
    {
      titulo: '$\\tfrac{1}{4}$ de una cantidad',
      enunciado: '¿Cuánto es $\\tfrac{1}{4}$ de 80?',
      pasos: [
        { explicacion: 'Aplicamos la fórmula: $\\tfrac{1 \\times 80}{4} = \\tfrac{80}{4}$.' },
        { explicacion: '80 ÷ 4 = 20.' },
      ],
      resultado: '20.',
    },
    {
      titulo: 'Fracción no unitaria',
      enunciado: '¿Cuánto es $\\tfrac{3}{5}$ de 200?',
      pasos: [
        { explicacion: 'Calculamos primero $\\tfrac{1}{5}$ de 200: 200 ÷ 5 = 40.' },
        { explicacion: 'Multiplicamos por 3: 40 × 3 = 120.' },
      ],
      resultado: '120.',
    },
    {
      titulo: 'Problema completo',
      enunciado:
        'En una clase de 30 chicos, $\\tfrac{2}{3}$ practican un deporte. ¿Cuántos chicos practican un deporte?',
      pasos: [
        { explicacion: '$\\tfrac{1}{3}$ de 30: 30 ÷ 3 = 10.' },
        { explicacion: '$\\tfrac{2}{3}$: 10 × 2 = 20.' },
      ],
      resultado: '20 chicos.',
    },
  ],
  erroresComunes: [
    'Sumar el numerador y el denominador en lugar de multiplicar y dividir.',
    'Multiplicar por el denominador en lugar del numerador.',
    'Olvidar simplificar al final cuando se puede.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuánto es $\\tfrac{1}{2}$ de 50?',
        respuesta: 25,
        explicacion: '50 ÷ 2 = 25.',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Cuánto es $\\tfrac{3}{4}$ de 200?',
        respuesta: 150,
        explicacion: '200 ÷ 4 = 50. 50 × 3 = 150.',
      },
      {
        tipo: 'multiple',
        enunciado:
          'En un edificio de 60 departamentos, $\\tfrac{1}{5}$ están en venta. ¿Cuántos están en venta?',
        opciones: ['6', '12', '15', '20'],
        correcta: 1,
        explicacion: '60 ÷ 5 = 12.',
      },
    ],
  },
  visualizadorId: 'fracciones-pizza',
  relacionados: ['fracciones-introduccion', 'fracciones-equivalentes'],
  tags: ['fracciones', 'problemas', 'parte de'],
};
