import type { Tema } from '../tipos';

export const COMBINATORIA_INTRODUCCION: Tema = {
  slug: 'combinatoria-introduccion',
  titulo: 'Combinatoria: introducción',
  anios: ['secundaria-3'],
  area: 'estadistica-probabilidad',
  nivel: 'avanzado',
  resumen:
    'Contar de cuántas formas se pueden ordenar o elegir elementos. Permutaciones y combinaciones.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Factorial',
      texto:
        '$n! = n \\cdot (n-1) \\cdot (n-2) \\cdots 2 \\cdot 1$. Por ejemplo $5! = 120$. Y por convención $0! = 1$.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Concepto', 'Fórmula', 'Ejemplo'],
      filas: [
        ['Permutaciones de n', '$n!$', '5 personas en fila: $5! = 120$.'],
        ['Variaciones $n$ en $k$', '$\\dfrac{n!}{(n-k)!}$', 'Podio de 3 entre 10: $\\frac{10!}{7!} = 720$.'],
        ['Combinaciones $n$ en $k$', '$\\dfrac{n!}{k!(n-k)!}$', '3 entre 10 sin orden: $\\frac{10!}{3!7!} = 120$.'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        '¿El orden importa? Si sí, son variaciones (o permutaciones). Si no importa, son combinaciones.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Combinaciones',
      enunciado: 'En una bolsa hay 6 frutas distintas. ¿De cuántas formas elegimos 2?',
      pasos: [
        { explicacion: 'No importa el orden → combinaciones.' },
        { explicacion: '$\\dfrac{6!}{2! \\cdot 4!} = \\dfrac{720}{2 \\cdot 24} = 15$.' },
      ],
      resultado: '15 formas.',
    },
  ],
  erroresComunes: [
    'Olvidar dividir por $k!$ en combinaciones (te queda variaciones).',
    'Calcular factoriales mal.',
    'Confundir cuándo importa el orden.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuánto vale $4!$?',
        respuesta: 24,
        explicacion: '$4 \\cdot 3 \\cdot 2 \\cdot 1 = 24$.',
      },
      {
        tipo: 'numerica',
        enunciado:
          '¿De cuántas formas se ordenan 4 libros distintos en un estante?',
        respuesta: 24,
        explicacion: '$4! = 24$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Las combinaciones consideran el orden.',
        correcta: false,
        explicacion: 'Falso, las combinaciones NO consideran el orden.',
      },
    ],
  },
  relacionados: ['probabilidad-aplicaciones'],
  tags: ['combinatoria', 'factorial', 'permutaciones', 'combinaciones'],
};
