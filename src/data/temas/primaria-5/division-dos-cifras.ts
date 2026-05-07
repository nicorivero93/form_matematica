import type { Tema } from '../tipos';

export const DIVISION_DOS_CIFRAS: Tema = {
  slug: 'division-dos-cifras',
  titulo: 'División por dos cifras',
  anios: ['primaria-5'],
  area: 'numeros-y-operaciones',
  nivel: 'intermedio',
  resumen:
    'Dividir un número grande por un número de dos cifras. La estrategia de la "tanteo y multiplicación".',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Dividir por una cifra es relativamente fácil porque tenemos las tablas memorizadas. Cuando dividimos por dos cifras tenemos que estimar cuántas veces entra el divisor en cada parte del dividendo.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Estrategia del tanteo',
      texto:
        'Probá multiplicar el divisor por números chicos: 1, 2, 3... hasta encontrar el más cercano que no se pase del dividendo parcial. Después restás.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Mirar las primeras cifras del dividendo (al menos tantas como tiene el divisor).',
        'Estimar cuántas veces entra el divisor: probá multiplicar el divisor por 2, 3, 4...',
        'Anotar el cociente parcial arriba.',
        'Restar y bajar la siguiente cifra.',
        'Repetir hasta terminar todas las cifras.',
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'División sin resto',
      enunciado: 'Calculá $192 \\div 12$.',
      pasos: [
        { explicacion: 'Tomamos 19. ¿Cuántas veces entra 12 en 19? Una vez (12 × 2 = 24, se pasa).' },
        { explicacion: '19 - 12 = 7. Bajamos el 2: tenemos 72.' },
        { explicacion: '¿Cuántas veces entra 12 en 72? 12 × 6 = 72. Justo 6.' },
        { explicacion: '72 - 72 = 0.' },
      ],
      resultado: 'Cociente 16, resto 0.',
    },
    {
      titulo: 'División con resto',
      enunciado: 'Calculá $456 \\div 23$.',
      pasos: [
        { explicacion: 'Tomamos 45. ¿Cuántas veces entra 23 en 45? 23 × 2 = 46, se pasa. Probamos 1: 23 × 1 = 23. Entra una vez.' },
        { explicacion: '45 - 23 = 22. Bajamos el 6: tenemos 226.' },
        { explicacion: 'Tanteo: 23 × 9 = 207. 23 × 10 = 230, se pasa. Va 9.' },
        { explicacion: '226 - 207 = 19.' },
        { explicacion: 'Verificación: 19 × 23 + 19 = 437 + 19 = 456 ✓.' },
      ],
      resultado: 'Cociente 19, resto 19.',
    },
  ],
  erroresComunes: [
    'No tantear y empezar a anotar números al azar. Siempre conviene multiplicar primero el divisor por 2, 3, 4 mentalmente.',
    'Bajar más de una cifra a la vez.',
    'No verificar al final: cociente × divisor + resto debe dar exactamente el dividendo.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuál es el cociente de 144 ÷ 12?',
        respuesta: 12,
        explicacion: '144 ÷ 12 = 12 con resto 0. (12 × 12 = 144.)',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Cuál es el resto de 250 ÷ 13?',
        respuesta: 3,
        explicacion: '13 × 19 = 247. 250 - 247 = 3. Cociente 19, resto 3.',
      },
      {
        tipo: 'multiple',
        enunciado:
          '600 caramelos se reparten en bolsas de 25 caramelos. ¿Cuántas bolsas se arman?',
        opciones: ['12 bolsas', '24 bolsas', '25 bolsas', '600 bolsas'],
        correcta: 1,
        explicacion: '600 ÷ 25 = 24, resto 0. Se arman 24 bolsas justas.',
      },
    ],
  },
  visualizadorId: 'tabla-pitagorica',
  relacionados: ['division-una-cifra', 'multiplicacion-dos-cifras-avanzada', 'divisibilidad'],
  tags: ['division', 'dos cifras', 'algoritmo', 'tanteo'],
};
