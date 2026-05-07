import type { Tema } from '../tipos';

export const RAICES_CUADRADAS: Tema = {
  slug: 'raices-cuadradas',
  titulo: 'Raíz cuadrada',
  anios: ['primaria-7'],
  area: 'numeros-y-operaciones',
  nivel: 'intermedio',
  resumen:
    'La operación inversa de la potencia cuadrada: si $5^2 = 25$, entonces $\\sqrt{25} = 5$. Cómo calcularla y estimarla.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Raíz cuadrada',
      texto:
        '$\\sqrt{n}$ es el número que elevado al cuadrado da $n$. Por ejemplo $\\sqrt{36} = 6$ porque $6^2 = 36$.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Conviene memorizar las raíces cuadradas exactas más comunes:',
    },
    {
      tipo: 'tabla',
      encabezados: ['Raíz', 'Resultado'],
      filas: [
        ['$\\sqrt{1}$', '1'],
        ['$\\sqrt{4}$', '2'],
        ['$\\sqrt{9}$', '3'],
        ['$\\sqrt{16}$', '4'],
        ['$\\sqrt{25}$', '5'],
        ['$\\sqrt{36}$', '6'],
        ['$\\sqrt{49}$', '7'],
        ['$\\sqrt{64}$', '8'],
        ['$\\sqrt{81}$', '9'],
        ['$\\sqrt{100}$', '10'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Raíces no exactas',
      texto:
        'Si $n$ no es cuadrado perfecto, la raíz tiene infinitos decimales. Por ejemplo, $\\sqrt{2} \\approx 1{,}414...$. Decimos que el resultado es "irracional".',
    },
  ],
  formulasClave: [
    {
      nombre: 'Raíz cuadrada',
      latex: '\\sqrt{a^2} = a',
      variables: [
        { simbolo: 'a', nombre: 'número positivo', desc: '' },
      ],
      cuandoUsar: 'Para "deshacer" un cuadrado.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Raíz exacta',
      enunciado: 'Calculá $\\sqrt{144}$.',
      pasos: [
        { explicacion: 'Buscamos un número que al cuadrado dé 144.' },
        { explicacion: '12 × 12 = 144.' },
      ],
      resultado: '12.',
    },
    {
      titulo: 'Estimar una raíz',
      enunciado: 'Estimá entre qué números enteros está $\\sqrt{50}$.',
      pasos: [
        { explicacion: '$7^2 = 49$ y $8^2 = 64$.' },
        { explicacion: 'Como 50 está entre 49 y 64, la raíz está entre 7 y 8.' },
        { explicacion: 'Más cercano a 7 (porque 50 está más cerca de 49 que de 64).' },
      ],
      resultado: '$\\sqrt{50} \\approx 7{,}07$ (entre 7 y 8).',
    },
    {
      titulo: 'Lado de un cuadrado',
      enunciado: 'Un cuadrado tiene 81 cm² de área. ¿Cuánto mide su lado?',
      pasos: [
        { explicacion: 'A = ℓ², así que ℓ = √A.' },
        { explicacion: 'ℓ = √81 = 9 cm.' },
      ],
      resultado: '9 cm.',
    },
  ],
  erroresComunes: [
    'Pensar que $\\sqrt{a + b} = \\sqrt{a} + \\sqrt{b}$. No es cierto.',
    'Olvidar que la raíz cuadrada de un número positivo es positiva por convención.',
    'Confundir raíz cuadrada con dividir por 2: $\\sqrt{16}$ no es 8.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Calculá $\\sqrt{169}$.',
        respuesta: 13,
        explicacion: '13² = 169.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Si un cuadrado tiene 64 cm² de área, ¿cuánto mide su lado?',
        respuesta: 8,
        explicacion: '√64 = 8.',
        unidad: 'cm',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$\\sqrt{9 + 16} = 3 + 4 = 7$.',
        correcta: false,
        explicacion: 'Falso. $\\sqrt{25} = 5$. La raíz no se distribuye en la suma.',
      },
    ],
  },
  visualizadorId: 'potencia-cubo',
  relacionados: ['potencias-naturales'],
  tags: ['raiz cuadrada', 'irracional', 'cuadrado perfecto'],
};
