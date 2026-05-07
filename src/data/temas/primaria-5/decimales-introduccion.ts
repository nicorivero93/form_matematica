import type { Tema } from '../tipos';

export const DECIMALES_INTRODUCCION: Tema = {
  slug: 'decimales-introduccion',
  titulo: 'Introducción a los decimales',
  anios: ['primaria-5'],
  area: 'fracciones-decimales',
  nivel: 'intro',
  resumen:
    'Los números decimales tienen una coma que separa la parte entera de la parte decimal. Cómo leerlos y qué significan.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Los números decimales nos permiten representar partes más chicas que un entero. Por ejemplo, 1,5 significa "uno y medio" o "una unidad más cinco décimos".',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Coma decimal',
      texto:
        'La coma decimal separa la parte entera (a la izquierda) de la parte decimal (a la derecha). En "12,75", el 12 es la parte entera y el 75 la parte decimal.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Posición', 'Vale', 'Como fracción'],
      filas: [
        ['Décimo (1ra después de la coma)', '0,1', '$\\tfrac{1}{10}$'],
        ['Centésimo (2da)', '0,01', '$\\tfrac{1}{100}$'],
        ['Milésimo (3ra)', '0,001', '$\\tfrac{1}{1000}$'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'En español usamos la coma como separador decimal (3,14). En inglés usan el punto (3.14). En esta app usamos la convención del español.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Leer un decimal',
      enunciado: '¿Cómo se lee 4,25?',
      pasos: [
        { explicacion: 'Parte entera: 4 (cuatro).' },
        { explicacion: 'Parte decimal: 25, que está en posición de centésimos.' },
        { explicacion: 'Lo leemos como "cuatro enteros, veinticinco centésimos" o "cuatro coma veinticinco".' },
      ],
      resultado: 'Cuatro coma veinticinco.',
    },
    {
      titulo: 'Convertir fracción decimal a número decimal',
      enunciado: 'Escribí $\\tfrac{7}{10}$ como decimal.',
      pasos: [
        { explicacion: '$\\tfrac{7}{10}$ son 7 décimos.' },
        { explicacion: 'Como decimal: 0,7.' },
      ],
      resultado: '0,7',
    },
    {
      titulo: 'Decimal con varias cifras',
      enunciado: 'Escribí 0,348 como suma.',
      pasos: [
        { explicacion: '3 está en los décimos: 0,3.' },
        { explicacion: '4 está en los centésimos: 0,04.' },
        { explicacion: '8 está en los milésimos: 0,008.' },
      ],
      resultado: '0,348 = 0,3 + 0,04 + 0,008',
    },
  ],
  erroresComunes: [
    'Confundir 0,5 con 0,05. La cantidad de cifras después de la coma cambia el valor.',
    'Pensar que 0,9 es más chico que 0,89 porque "9 < 89". Es al revés: 0,9 = 0,90 > 0,89.',
    'Olvidar el "0," delante: "0,5" no es lo mismo que ",5" (aunque a veces se escribe así, conviene poner el cero).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'En el número 3,72, ¿cuánto vale la cifra 7?',
        opciones: ['7', '0,7', '0,07', '70'],
        correcta: 1,
        explicacion: 'El 7 está en la posición de los décimos: vale 0,7.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuál de estos decimales equivale a $\\tfrac{1}{4}$?',
        opciones: ['0,1', '0,14', '0,25', '0,4'],
        correcta: 2,
        explicacion: '$\\tfrac{1}{4}$ = 1 ÷ 4 = 0,25.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El número 0,7 es lo mismo que 0,70.',
        correcta: true,
        explicacion: 'Cierto. Agregar ceros al final de un decimal no cambia su valor.',
      },
    ],
  },
  visualizadorId: 'recta-numerica',
  relacionados: ['decimales-comparar', 'fracciones-introduccion'],
  tags: ['decimales', 'coma', 'decimo', 'centesimo'],
};
