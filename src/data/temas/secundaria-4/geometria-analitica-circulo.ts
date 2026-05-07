import type { Tema } from '../tipos';

export const GEOMETRIA_ANALITICA_CIRCULO: Tema = {
  slug: 'geometria-analitica-circulo',
  titulo: 'Ecuación de la circunferencia',
  anios: ['secundaria-4'],
  area: 'geometria',
  nivel: 'avanzado',
  resumen:
    'La circunferencia con centro $(h, k)$ y radio $r$ tiene ecuación $(x - h)^2 + (y - k)^2 = r^2$.',
  teoria: [
    {
      tipo: 'latex',
      latex: '(x - h)^2 + (y - k)^2 = r^2',
      display: true,
    },
    {
      tipo: 'parrafo',
      texto:
        'Donde $(h, k)$ es el centro y $r$ el radio. Esta es la "forma canónica".',
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar centro y radio',
      enunciado: '$(x - 2)^2 + (y + 3)^2 = 25$. ¿Centro y radio?',
      pasos: [
        { explicacion: 'Centro: $(2, -3)$. $r^2 = 25 \\Rightarrow r = 5$.' },
      ],
      resultado: 'Centro $(2, -3)$, $r = 5$.',
    },
    {
      titulo: 'Escribir ecuación',
      enunciado:
        'Circunferencia con centro $(0, 0)$ y radio 7.',
      pasos: [{ explicacion: '$x^2 + y^2 = 49$.' }],
      resultado: '$x^2 + y^2 = 49$.',
    },
  ],
  erroresComunes: [
    'Confundir signos del centro.',
    'Olvidar elevar el radio al cuadrado.',
    'Pensar que el centro es $(-h, -k)$.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Centro de $(x + 4)^2 + y^2 = 16$?',
        opciones: ['(4, 0)', '(-4, 0)', '(0, 4)', '(0, -4)'],
        correcta: 1,
        explicacion: '$x + 4 = x - (-4)$, así que h = -4.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Radio de $x^2 + y^2 = 100$.',
        respuesta: 10,
        explicacion: '$\\sqrt{100} = 10$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'La ecuación $x^2 + y^2 = -4$ no representa ninguna circunferencia real.',
        correcta: true,
        explicacion: 'Cierto: el cuadrado del radio no puede ser negativo.',
      },
    ],
  },
  relacionados: ['circulo-introduccion', 'plano-cartesiano-puntos'],
  tags: ['circunferencia', 'geometria analitica', 'ecuacion'],
};
