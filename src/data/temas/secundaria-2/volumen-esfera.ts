import type { Tema } from '../tipos';

export const VOLUMEN_ESFERA: Tema = {
  slug: 'volumen-esfera',
  titulo: 'Volumen y superficie de la esfera',
  anios: ['secundaria-2'],
  area: 'medida',
  nivel: 'intermedio',
  resumen:
    'Fórmulas para el volumen ($\\tfrac{4}{3}\\pi r^3$) y la superficie ($4\\pi r^2$) de una esfera.',
  teoria: [
    {
      tipo: 'latex',
      latex: 'V = \\dfrac{4}{3} \\pi r^3 \\qquad S = 4 \\pi r^2',
      display: true,
    },
    {
      tipo: 'parrafo',
      texto:
        'Donde $r$ es el radio de la esfera. Estas fórmulas se demuestran con cálculo integral pero podemos usarlas como herramienta.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Volumen',
      enunciado: 'Esfera de radio 6 cm. (π = 3,14)',
      pasos: [
        { explicacion: '$r^3 = 216$.' },
        { explicacion: '$V = (4/3) \\times 3{,}14 \\times 216 \\approx 904{,}32$ cm³.' },
      ],
      resultado: '≈ 904,32 cm³.',
    },
    {
      titulo: 'Superficie',
      enunciado: 'Esfera de radio 5 cm. (π = 3,14)',
      pasos: [
        { explicacion: '$S = 4 \\times 3{,}14 \\times 25 = 314$ cm².' },
      ],
      resultado: '314 cm².',
    },
  ],
  erroresComunes: [
    'Olvidar el factor 4/3 del volumen.',
    'Confundir superficie con volumen.',
    'Usar el diámetro como radio.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Volumen de esfera de r = 3 cm (π = 3, redondeo simple).',
        respuesta: 108,
        tolerancia: 1,
        explicacion: '$(4/3) \\cdot 3 \\cdot 27 = 108$.',
        unidad: 'cm³',
      },
      {
        tipo: 'numerica',
        enunciado: 'Superficie de esfera de r = 4 cm (π = 3,14).',
        respuesta: 200.96,
        tolerancia: 1,
        explicacion: '$4 \\times 3{,}14 \\times 16 = 200{,}96$.',
        unidad: 'cm²',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El volumen de la esfera depende de $r^3$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['volumen-cuerpos', 'circulo-perimetro-area'],
  tags: ['esfera', 'volumen', 'superficie'],
};
