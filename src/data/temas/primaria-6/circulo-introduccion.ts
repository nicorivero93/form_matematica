import type { Tema } from '../tipos';

export const CIRCULO_INTRODUCCION: Tema = {
  slug: 'circulo-introduccion',
  titulo: 'Círculo: radio, diámetro y partes',
  anios: ['primaria-6'],
  area: 'geometria',
  nivel: 'intro',
  resumen:
    'Las partes del círculo y de la circunferencia: centro, radio, diámetro, cuerda, arco.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Circunferencia y círculo',
      texto:
        'La circunferencia es la línea curva (el "borde"). El círculo es la región interior llena. La circunferencia es lo que dibujamos con un compás.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Parte', 'Qué es'],
      filas: [
        ['Centro', 'El punto que está a la misma distancia de todos los puntos de la circunferencia.'],
        ['Radio', 'Segmento que va del centro a cualquier punto de la circunferencia.'],
        ['Diámetro', 'Segmento que pasa por el centro y une dos puntos de la circunferencia.'],
        ['Cuerda', 'Segmento que une dos puntos de la circunferencia (sin pasar por el centro).'],
        ['Arco', 'Trozo de la circunferencia entre dos puntos.'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'El diámetro es siempre el doble del radio: $d = 2r$. Y al revés, el radio es la mitad del diámetro.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Relación radio-diámetro',
      latex: 'd = 2r',
      variables: [
        { simbolo: 'd', nombre: 'diámetro', unidad: 'cm', desc: 'pasa por el centro' },
        { simbolo: 'r', nombre: 'radio', unidad: 'cm', desc: 'desde el centro' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'De radio a diámetro',
      enunciado: 'Una rueda tiene 30 cm de radio. ¿Cuál es su diámetro?',
      pasos: [
        { explicacion: '$d = 2r = 2 \\times 30 = 60$ cm.' },
      ],
      resultado: '60 cm.',
    },
    {
      titulo: 'De diámetro a radio',
      enunciado: 'Un plato tiene 26 cm de diámetro. ¿Cuál es su radio?',
      pasos: [
        { explicacion: '$r = d \\div 2 = 26 \\div 2 = 13$ cm.' },
      ],
      resultado: '13 cm.',
    },
  ],
  erroresComunes: [
    'Confundir radio con diámetro. El radio es siempre la mitad.',
    'Pensar que la cuerda más larga del círculo es cualquiera. La cuerda más larga es justamente el diámetro.',
    'Confundir circunferencia con círculo: una es línea, el otro es la región.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Si el radio mide 8 cm, ¿cuánto mide el diámetro?',
        respuesta: 16,
        explicacion: 'd = 2r = 16 cm.',
        unidad: 'cm',
      },
      {
        tipo: 'numerica',
        enunciado: 'Si el diámetro mide 50 cm, ¿cuánto mide el radio?',
        respuesta: 25,
        explicacion: 'r = d ÷ 2 = 25 cm.',
        unidad: 'cm',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'El diámetro es la cuerda más larga que se puede dibujar en una circunferencia.',
        correcta: true,
        explicacion: 'Cierto. Cualquier otra cuerda es más corta que el diámetro.',
      },
    ],
  },
  relacionados: ['circulo-perimetro-area', 'figuras-planas'],
  tags: ['circulo', 'circunferencia', 'radio', 'diametro', 'cuerda'],
};
