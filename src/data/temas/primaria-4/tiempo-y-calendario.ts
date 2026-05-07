import type { Tema } from '../tipos';

export const TIEMPO_Y_CALENDARIO: Tema = {
  slug: 'tiempo-y-calendario',
  titulo: 'Tiempo y calendario',
  anios: ['primaria-4'],
  area: 'medida',
  nivel: 'intro',
  resumen:
    'Segundos, minutos, horas, días, meses y años. Cómo leer la hora y calcular tiempos.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Unidad', 'Equivalencia'],
      filas: [
        ['1 minuto', '60 segundos'],
        ['1 hora', '60 minutos'],
        ['1 día', '24 horas'],
        ['1 semana', '7 días'],
        ['1 mes', '28, 30 o 31 días'],
        ['1 año', '12 meses · 365 días (366 si es bisiesto)'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Año bisiesto',
      texto:
        'Cada 4 años, febrero tiene 29 días en lugar de 28. Ese año se llama bisiesto y tiene 366 días en total.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Para leer la hora en un reloj de aguja: la aguja chica marca las horas, la grande los minutos. Cada número del 1 al 12 representa 5 minutos en la aguja grande.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Cuando la aguja grande está en el 6, son y 30 minutos (media hora). Cuando está en el 12, es la hora "en punto".',
    },
  ],
  ejemplos: [
    {
      titulo: 'Convertir horas a minutos',
      enunciado: '¿Cuántos minutos hay en 3 horas?',
      pasos: [
        { explicacion: '1 hora son 60 minutos.' },
        { explicacion: '3 × 60 = 180 minutos.' },
      ],
      resultado: '180 minutos.',
    },
    {
      titulo: 'Calcular tiempo entre dos horas',
      enunciado:
        '¿Cuánto tiempo pasa entre las 9:30 y las 12:15?',
      pasos: [
        { explicacion: 'De 9:30 a 12:30 hay exactamente 3 horas.' },
        {
          explicacion:
            'Pero queremos llegar a las 12:15, no a las 12:30. Restamos 15 minutos.',
        },
        { explicacion: 'Resultado: 3 horas − 15 min = 2 horas y 45 minutos.' },
      ],
      resultado: '2 horas y 45 minutos.',
    },
  ],
  erroresComunes: [
    'Pensar que 1 hora son 100 minutos. Son 60.',
    'Olvidar que algunos meses tienen 30 días, otros 31, y febrero 28 o 29.',
    'Confundir am (mañana) con pm (tarde) cuando se usa el formato de 12 horas.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuántos minutos hay en 2 horas y 30 minutos?',
        respuesta: 150,
        explicacion: '2 × 60 = 120. 120 + 30 = 150 minutos.',
        unidad: 'min',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Cuántos días hay en 2 semanas?',
        respuesta: 14,
        explicacion: '2 × 7 = 14 días.',
        unidad: 'días',
      },
      {
        tipo: 'multiple',
        enunciado: 'Si una clase empieza a las 8:00 y dura 45 minutos, ¿a qué hora termina?',
        opciones: ['8:30', '8:40', '8:45', '9:00'],
        correcta: 2,
        explicacion: '8:00 + 45 min = 8:45.',
      },
    ],
  },
  relacionados: ['unidades-longitud'],
  tags: ['tiempo', 'hora', 'minutos', 'segundos', 'calendario', 'mes', 'año'],
};
