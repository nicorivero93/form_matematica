import type { Tema } from '../tipos';

export const DIVISION_UNA_CIFRA: Tema = {
  slug: 'division-una-cifra',
  titulo: 'División por una cifra',
  anios: ['primaria-4'],
  area: 'numeros-y-operaciones',
  nivel: 'intermedio',
  resumen:
    'Cómo dividir un número grande por un número de una cifra usando el algoritmo paso a paso. Cociente y resto.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Dividir es repartir en partes iguales. Si tenemos 24 caramelos para repartir en 4 chicos, a cada uno le tocan 24 ÷ 4 = 6.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Las partes de una división',
      texto:
        'Dividendo (lo que se reparte) ÷ divisor (entre cuántos) = cociente (lo que le toca a cada uno). Lo que sobra se llama resto.',
    },
    {
      tipo: 'parrafo',
      texto: 'Pasos para dividir un número de varias cifras por una sola cifra:',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Mirar la primera cifra del dividendo. Si es menor que el divisor, agarramos las dos primeras.',
        'Dividir esas cifras por el divisor. Anotar el cociente arriba.',
        'Multiplicar el cociente por el divisor y restar.',
        'Bajar la siguiente cifra y repetir.',
        'Cuando no quedan más cifras, lo que sobra es el resto.',
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Para verificar: cociente × divisor + resto = dividendo. Si no da, hay un error.',
    },
  ],
  ejemplos: [
    {
      titulo: 'División exacta',
      enunciado: 'Calculá $96 \\div 4$.',
      pasos: [
        { explicacion: 'Tomamos 9 (la primera cifra). 9 ÷ 4 = 2, sobran 1.' },
        { explicacion: 'Bajamos el 6: tenemos 16. 16 ÷ 4 = 4, sobra 0.' },
        { explicacion: 'No quedan más cifras. Cociente: 24. Resto: 0.' },
      ],
      resultado: 'Cociente 24, resto 0',
    },
    {
      titulo: 'División con resto',
      enunciado: 'Calculá $725 \\div 6$.',
      pasos: [
        { explicacion: '7 ÷ 6 = 1, sobra 1. Anotamos 1 arriba.' },
        { explicacion: 'Bajamos el 2: queda 12. 12 ÷ 6 = 2, sobra 0.' },
        { explicacion: 'Bajamos el 5: queda 5. 5 ÷ 6 = 0, sobra 5.' },
        {
          explicacion:
            'Verificación: 120 × 6 + 5 = 720 + 5 = 725 ✓.',
        },
      ],
      resultado: 'Cociente 120, resto 5',
    },
  ],
  erroresComunes: [
    'No bajar la siguiente cifra cuando el resto parcial es menor que el divisor.',
    'Olvidar escribir un 0 en el cociente cuando la división parcial daba 0.',
    'Mezclar el cociente con el resto. El cociente va arriba; el resto, al final.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuál es el cociente de 84 ÷ 7?',
        respuesta: 12,
        explicacion: '8 ÷ 7 = 1, sobra 1. Bajamos el 4: 14 ÷ 7 = 2. Cociente: 12, resto: 0.',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Cuál es el resto de 100 ÷ 3?',
        respuesta: 1,
        explicacion: '100 ÷ 3 = 33 con resto 1. Verificación: 33 × 3 + 1 = 99 + 1 = 100.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Si 35 caramelos se reparten en 4 chicos en partes iguales, ¿cuántos sobran?',
        opciones: ['0', '1', '3', '5'],
        correcta: 2,
        explicacion: '35 ÷ 4 = 8 con resto 3. A cada chico le tocan 8 caramelos y sobran 3.',
      },
    ],
  },
  visualizadorId: 'tabla-pitagorica',
  relacionados: ['multiplicacion-una-cifra', 'tablas-de-multiplicar', 'problemas-combinados'],
  tags: ['division', 'cociente', 'resto', 'algoritmo'],
};
