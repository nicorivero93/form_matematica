import type { Tema } from '../tipos';

export const PROPORCIONALIDAD_MAPAS: Tema = {
  slug: 'proporcionalidad-mapas',
  titulo: 'Escala en mapas y planos',
  anios: ['secundaria-2'],
  area: 'medida',
  nivel: 'intermedio',
  resumen:
    'Una escala 1:N significa que 1 cm en el mapa son N cm en la realidad. Cómo convertir entre medida real y dibujada.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Escala',
      texto:
        'La escala $1 : N$ indica que cada unidad del dibujo representa $N$ unidades en la realidad.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Para pasar de mapa a real: multiplicás. Para pasar de real a mapa: dividís. La proporción mantiene la forma de la figura.',
    },
  ],
  ejemplos: [
    {
      titulo: 'De mapa a real',
      enunciado:
        'En un mapa a escala 1:5.000, dos puntos están separados 4 cm. ¿Cuál es la distancia real?',
      pasos: [
        { explicacion: '4 × 5.000 = 20.000 cm = 200 m.' },
      ],
      resultado: '200 m.',
    },
    {
      titulo: 'De real a mapa',
      enunciado:
        'Una pared real mide 6 m. En un plano a 1:50, ¿cuánto mide?',
      pasos: [
        { explicacion: '6 m = 600 cm.' },
        { explicacion: '600 ÷ 50 = 12 cm.' },
      ],
      resultado: '12 cm.',
    },
  ],
  erroresComunes: [
    'Multiplicar cuando había que dividir.',
    'Olvidar pasar a la misma unidad antes de calcular.',
    'Confundir escala con razón inversa.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Mapa a escala 1:1.000. Distancia en mapa: 5 cm. ¿Distancia real (en metros)?',
        respuesta: 50,
        explicacion: '5 × 1.000 = 5.000 cm = 50 m.',
        unidad: 'm',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Una escala 1:100 hace que el dibujo sea 100 veces más chico que la realidad.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Cambiar la escala cambia las proporciones de la figura.',
        correcta: false,
        explicacion: 'Falso. La escala mantiene proporciones, solo cambia el tamaño.',
      },
    ],
  },
  relacionados: ['proporcionalidad-directa', 'semejanza-introduccion'],
  tags: ['escala', 'mapas', 'planos', 'proporcionalidad'],
};
