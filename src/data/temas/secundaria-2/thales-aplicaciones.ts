import type { Tema } from '../tipos';

export const THALES_APLICACIONES: Tema = {
  slug: 'thales-aplicaciones',
  titulo: 'Aplicaciones del Teorema de Thales',
  anios: ['secundaria-2'],
  area: 'geometria',
  nivel: 'intermedio',
  resumen:
    'Usar Thales para dividir un segmento en partes iguales o proporcionales, y para encontrar medidas indirectas.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Una aplicación clásica de Thales es dividir un segmento en partes iguales sin medir. Otra es calcular alturas inaccesibles (de un edificio, un árbol) usando un palo y la sombra.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Altura por sombras',
      enunciado:
        'Un palo de 1,5 m proyecta sombra de 2 m. Un árbol al lado proyecta sombra de 12 m. ¿Cuánto mide el árbol?',
      pasos: [
        { explicacion: 'Por proporcionalidad: 1,5/2 = h/12.' },
        { explicacion: '$h = 12 \\times 1{,}5 / 2 = 9$ m.' },
      ],
      resultado: '9 m.',
    },
  ],
  erroresComunes: [
    'Plantear la proporción al revés.',
    'No identificar segmentos correspondientes.',
    'Mezclar unidades.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Palo de 2 m con sombra de 1 m. Edificio con sombra de 15 m. ¿Cuánto mide?',
        respuesta: 30,
        explicacion: '2/1 = h/15 → h = 30 m.',
        unidad: 'm',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Para usar Thales con sombras, el sol debe estar en la misma posición para ambos objetos.',
        correcta: true,
        explicacion: 'Cierto. Si no, las proporciones no se mantienen.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'El teorema de Thales permite calcular medidas inaccesibles directamente.',
        correcta: true,
        explicacion: 'Cierto. Es uno de sus usos más famosos.',
      },
    ],
  },
  relacionados: ['teorema-thales-introduccion', 'semejanza-triangulos'],
  tags: ['thales', 'sombras', 'medidas indirectas'],
};
