import type { Tema } from '../tipos';

export const DECIMALES_DIVISION: Tema = {
  slug: 'decimales-division',
  titulo: 'División de decimales',
  anios: ['primaria-6'],
  area: 'fracciones-decimales',
  nivel: 'avanzado',
  resumen:
    'Cómo dividir cuando el dividendo, el divisor o ambos son decimales. La idea: hacer que el divisor sea entero.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Regla rápida ÷ 10, 100, 1000',
      texto:
        'Dividir por 10 corre la coma 1 lugar a la izquierda. ÷ 100 → 2 lugares. ÷ 1000 → 3 lugares. Si no hay cifras, agregás ceros.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Cuando el divisor es decimal, multiplicamos divisor y dividendo por la misma potencia de 10 hasta que el divisor sea entero. Así no cambia el cociente.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Mirá cuántos decimales tiene el divisor.',
        'Multiplicá divisor y dividendo por 10, 100 o 1000 (lo que haga falta para que el divisor quede entero).',
        'Hacé la división normal (entero o decimal en el dividendo).',
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Decimal dividido por entero',
      enunciado: 'Calculá $7{,}2 \\div 4$.',
      pasos: [
        { explicacion: '7 ÷ 4 = 1, sobra 3. Anotamos 1 arriba.' },
        { explicacion: 'Bajamos el 2 y como fue después de la coma, ponemos coma en el cociente.' },
        { explicacion: '32 ÷ 4 = 8.' },
      ],
      resultado: '1,8',
    },
    {
      titulo: 'Divisor decimal',
      enunciado: 'Calculá $4{,}5 \\div 0{,}5$.',
      pasos: [
        { explicacion: 'Multiplicamos divisor y dividendo por 10 (porque 0,5 tiene 1 decimal).' },
        { explicacion: 'Queda $45 \\div 5 = 9$.' },
      ],
      resultado: '9',
    },
    {
      titulo: 'División por potencia de 10',
      enunciado: 'Calculá $34 \\div 100$.',
      pasos: [
        { explicacion: 'Dividir por 100 corre la coma 2 lugares a la izquierda.' },
        { explicacion: '34 → 3,4 → 0,34.' },
      ],
      resultado: '0,34',
    },
  ],
  erroresComunes: [
    'Olvidar correr la coma en el dividendo cuando se mueve la del divisor.',
    'Mover la coma para el lado equivocado al dividir por 10, 100, etc.',
    'Olvidar la coma en el cociente cuando se "baja" una cifra después de la coma del dividendo.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Calculá: 6,4 ÷ 4 = ?',
        respuesta: 1.6,
        tolerancia: 0.001,
        explicacion: '6 ÷ 4 = 1 sobra 2. Bajamos el 4 después de coma: 24 ÷ 4 = 6. Resultado: 1,6.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Calculá: 250 ÷ 1000 = ?',
        respuesta: 0.25,
        tolerancia: 0.001,
        explicacion: 'Dividir por 1000 corre la coma 3 lugares a la izquierda: 250 → 0,250 = 0,25.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Calculá: 9 ÷ 0,3 = ?',
        respuesta: 30,
        explicacion: 'Multiplicamos por 10: 90 ÷ 3 = 30.',
      },
    ],
  },
  relacionados: ['decimales-multiplicacion'],
  tags: ['decimales', 'division', 'coma'],
};
