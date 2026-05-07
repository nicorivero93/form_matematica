import type { Tema } from '../tipos';

export const TIEMPO_OPERACIONES: Tema = {
  slug: 'tiempo-operaciones',
  titulo: 'Operaciones con horas, minutos y segundos',
  anios: ['primaria-5'],
  area: 'medida',
  nivel: 'intermedio',
  resumen:
    'Sumar y restar tiempos cuando hay que "convertir" 60 minutos en una hora o al revés.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Sumar y restar tiempos parece raro porque las unidades no son base 10: 60 segundos hacen 1 minuto, y 60 minutos hacen 1 hora.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Regla del 60',
      texto:
        'Cuando los minutos pasan de 60, restás 60 y sumás 1 hora. Cuando faltan minutos para restar, "pedís prestado" 60 minutos a la hora.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Para sumar: sumá segundos por su lado, minutos por el suyo, horas aparte.',
        'Si los segundos sumados pasan de 60, restá 60 y sumá 1 al minuto.',
        'Lo mismo con los minutos: si pasan de 60, restá 60 y sumá 1 a la hora.',
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Suma de tiempos',
      enunciado: 'Sumar 2 h 45 min + 1 h 35 min.',
      pasos: [
        { explicacion: 'Sumamos minutos: 45 + 35 = 80 min.' },
        { explicacion: 'Sumamos horas: 2 + 1 = 3 h.' },
        { explicacion: '80 minutos pasa de 60: 80 - 60 = 20 min y "subimos" 1 hora.' },
        { explicacion: 'Resultado: 4 h 20 min.' },
      ],
      resultado: '4 h 20 min.',
    },
    {
      titulo: 'Resta con préstamo',
      enunciado: 'Restar 5 h 10 min - 2 h 35 min.',
      pasos: [
        { explicacion: 'Minutos: 10 - 35 no se puede.' },
        { explicacion: 'Le pedimos prestado 1 hora: 5 h 10 min se transforman en 4 h 70 min.' },
        { explicacion: 'Ahora minutos: 70 - 35 = 35 min.' },
        { explicacion: 'Horas: 4 - 2 = 2 h.' },
      ],
      resultado: '2 h 35 min.',
    },
    {
      titulo: 'Diferencia entre dos horas',
      enunciado: '¿Cuánto tiempo pasa entre las 9:25 y las 12:10?',
      pasos: [
        { explicacion: 'De 9:25 a 12:25 hay 3 horas.' },
        { explicacion: 'Pero queremos llegar a 12:10, no a 12:25. Faltan 15 minutos para llegar a 12:25.' },
        { explicacion: 'Entonces: 3 horas - 15 min = 2 h 45 min.' },
      ],
      resultado: '2 h 45 min.',
    },
  ],
  erroresComunes: [
    'Sumar como si el sistema fuera base 10 (escribir "80 minutos" como un valor final).',
    'Olvidar pedir prestada 1 hora cuando los minutos no alcanzan.',
    'Confundir minutos con segundos al sumar.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuánto da 1 h 50 min + 2 h 30 min?',
        opciones: ['3 h 20 min', '4 h 20 min', '3 h 80 min', '4 h 80 min'],
        correcta: 1,
        explicacion: 'Minutos: 50+30=80. Horas: 1+2=3. 80 min = 1h 20min, sumamos: 4 h 20 min.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Una película dura 1 h 45 min y empieza a las 18:30. ¿A qué hora termina?',
        opciones: ['19:75', '20:00', '20:15', '20:45'],
        correcta: 2,
        explicacion: '18:30 + 1 h = 19:30. 19:30 + 45 min = 20:15.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '90 minutos son 1 hora y media.',
        correcta: true,
        explicacion: 'Cierto. 60 min + 30 min = 1 h 30 min.',
      },
    ],
  },
  relacionados: ['tiempo-y-calendario'],
  tags: ['tiempo', 'horas', 'minutos', 'suma', 'resta', 'sexagesimal'],
};
