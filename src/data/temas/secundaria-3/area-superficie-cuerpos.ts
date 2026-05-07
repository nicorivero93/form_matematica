import type { Tema } from '../tipos';

export const AREA_SUPERFICIE_CUERPOS: Tema = {
  slug: 'area-superficie-cuerpos',
  titulo: 'Área lateral y total de cuerpos',
  anios: ['secundaria-3'],
  area: 'medida',
  nivel: 'intermedio',
  resumen:
    'Área lateral (caras laterales) y área total (lateral + bases) de prismas, cilindros, pirámides, conos.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Cuerpo', 'Área lateral', 'Área total'],
      filas: [
        ['Prisma', 'Perímetro de la base × altura', 'Lateral + 2 × área de base'],
        ['Cilindro', '$2\\pi r \\cdot h$', '$2\\pi r h + 2 \\pi r^2$'],
        ['Cono', '$\\pi r \\cdot g$ (g = generatriz)', '$\\pi r g + \\pi r^2$'],
        ['Esfera', '—', '$4 \\pi r^2$'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Cilindro',
      enunciado:
        'Cilindro con $r = 5$ cm y $h = 12$ cm. ¿Área total? (π = 3,14)',
      pasos: [
        { explicacion: 'Lateral: $2 \\times 3{,}14 \\times 5 \\times 12 = 376{,}8$.' },
        { explicacion: 'Bases: $2 \\times \\pi \\times 25 = 157$.' },
        { explicacion: 'Total: 376,8 + 157 = 533,8.' },
      ],
      resultado: '533,8 cm².',
    },
  ],
  erroresComunes: [
    'Confundir lateral con total.',
    'Olvidar contar 2 bases en prismas y cilindros.',
    'Usar diámetro en vez de radio.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Área total de un cubo de arista 4 cm.',
        respuesta: 96,
        explicacion: '6 caras × 16 = 96.',
        unidad: 'cm²',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En un cilindro cerrado, el área total incluye dos círculos.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'La esfera tiene área lateral y total iguales.',
        correcta: true,
        explicacion: 'Cierto, no tiene "bases" diferenciadas.',
      },
    ],
  },
  relacionados: ['volumen-cuerpos', 'circulo-perimetro-area'],
  tags: ['area', 'cuerpos', 'lateral', 'superficie'],
};
