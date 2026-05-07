import type { Tema } from '../tipos';

export const UNIDADES_LONGITUD: Tema = {
  slug: 'unidades-longitud',
  titulo: 'Unidades de longitud',
  anios: ['primaria-4'],
  area: 'medida',
  nivel: 'intro',
  resumen:
    'Milímetro, centímetro, metro y kilómetro: cuándo se usa cada uno y cómo pasar de una unidad a otra.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Para medir el largo de las cosas usamos distintas unidades. Elegimos según el tamaño:',
    },
    {
      tipo: 'tabla',
      encabezados: ['Unidad', 'Símbolo', 'Para qué se usa'],
      filas: [
        ['Milímetro', 'mm', 'Cosas muy chicas (espesor de una hoja).'],
        ['Centímetro', 'cm', 'Lápiz, mano, libro.'],
        ['Metro', 'm', 'Habitaciones, autos, pelota de fútbol.'],
        ['Kilómetro', 'km', 'Distancias entre ciudades.'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Equivalencias',
      texto:
        '1 m = 100 cm · 1 m = 1.000 mm · 1 cm = 10 mm · 1 km = 1.000 m',
    },
    {
      tipo: 'parrafo',
      texto:
        'Para pasar de una unidad chica a una más grande dividimos. Para pasar de una grande a una más chica multiplicamos.',
    },
  ],
  ejemplos: [
    {
      titulo: 'De cm a m',
      enunciado: 'Una soga mide 250 cm. ¿Cuánto es eso en metros?',
      pasos: [
        {
          explicacion: 'Vamos de chico (cm) a grande (m), entonces dividimos por 100.',
        },
        { explicacion: '250 ÷ 100 = 2,5.' },
      ],
      resultado: '2,5 m (dos metros con cincuenta).',
    },
    {
      titulo: 'De m a cm',
      enunciado: '¿Cuántos centímetros son 3 m?',
      pasos: [
        { explicacion: 'Vamos de grande (m) a chico (cm), multiplicamos por 100.' },
        { explicacion: '3 × 100 = 300.' },
      ],
      resultado: '300 cm.',
    },
    {
      titulo: 'De km a m',
      enunciado: 'Si caminás 2 km, ¿cuántos metros recorriste?',
      pasos: [
        { explicacion: 'De grande (km) a chico (m), multiplicamos por 1.000.' },
        { explicacion: '2 × 1.000 = 2.000.' },
      ],
      resultado: '2.000 m.',
    },
  ],
  erroresComunes: [
    'Confundirse y multiplicar cuando había que dividir (o al revés). Pista: si voy a unidad más chica → multiplico.',
    'Olvidar las equivalencias. 1 m son 100 cm (no 10).',
    'Mezclar unidades en una misma cuenta sin convertir antes.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuántos centímetros son 4 metros?',
        respuesta: 400,
        explicacion: '4 × 100 = 400 cm.',
        unidad: 'cm',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Cuántos metros son 5.000 milímetros?',
        respuesta: 5,
        explicacion: '5.000 ÷ 1.000 = 5 m. (1 m = 1.000 mm.)',
        unidad: 'm',
      },
      {
        tipo: 'multiple',
        enunciado:
          'Para medir el largo de un patio del colegio (chico), ¿qué unidad conviene usar?',
        opciones: ['Milímetros', 'Centímetros', 'Metros', 'Kilómetros'],
        correcta: 2,
        explicacion: 'El metro es ideal: el patio mide algunos metros.',
      },
    ],
  },
  relacionados: ['perimetro', 'unidades-peso-capacidad'],
  tags: ['longitud', 'metro', 'centimetro', 'kilometro', 'medidas', 'conversion'],
};
