import type { Tema } from '../tipos';

export const MULTIPLICACION_DOS_CIFRAS: Tema = {
  slug: 'multiplicacion-dos-cifras',
  titulo: 'Multiplicación por dos cifras',
  anios: ['primaria-4'],
  area: 'numeros-y-operaciones',
  nivel: 'intermedio',
  resumen:
    'Cómo multiplicar números cuando el de abajo tiene dos cifras: hacer dos productos parciales y sumarlos.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Para multiplicar por un número de dos cifras hacemos dos cuentas más cortas y al final las sumamos. La idea: $34 \\times 23$ es lo mismo que hacer $34 \\times 3 + 34 \\times 20$.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Multiplicar el número de arriba por las unidades del de abajo.',
        'Multiplicar el número de arriba por las decenas del de abajo. Como en realidad estamos multiplicando por una decena, dejamos un espacio (o un 0) en las unidades.',
        'Sumar los dos productos parciales.',
      ],
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      texto:
        'El truco más importante: cuando multiplicás por la cifra de las decenas, el resultado se corre un lugar a la izquierda. En la cuenta vertical, eso se ve como un espacio (o un 0) en la columna de las unidades.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Multiplicación de 2 dígitos',
      enunciado: 'Calculá $34 \\times 23$.',
      pasos: [
        {
          explicacion:
            'Primer producto: $34 \\times 3$. 3×4=12 (escribimos 2, llevamos 1). 3×3=9, +1=10. Resultado: 102.',
        },
        {
          explicacion:
            'Segundo producto: $34 \\times 2$, pero corrido un lugar a la izquierda (porque el 2 está en las decenas). 2×4=8, 2×3=6. Resultado: 68, que va corrido → 680.',
        },
        {
          explicacion: 'Sumamos: 102 + 680 = 782.',
        },
      ],
      resultado: '782',
    },
    {
      titulo: 'Verificar con un cálculo aproximado',
      enunciado: '¿Cuánto da $48 \\times 25$ aproximadamente, antes de hacer la cuenta?',
      pasos: [
        { explicacion: 'Redondeamos: 48 ≈ 50 y 25 se queda igual.' },
        { explicacion: '50 × 25 = 1.250.' },
        {
          explicacion:
            'El resultado real va a estar cerca de 1.250. Hacemos la cuenta exacta: 48 × 25 = 1.200.',
        },
      ],
      resultado: '1.200 (aproximación: 1.250)',
    },
  ],
  erroresComunes: [
    'Olvidar correr el segundo producto un lugar a la izquierda. Es un error muy común y arruina la suma final.',
    'Sumar mal los productos parciales (suma con muchas cifras).',
    'Confundirse con las llevadas dentro de cada producto.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Calculá: 12 × 13 = ?',
        respuesta: 156,
        explicacion: '12 × 3 = 36. 12 × 1 corrido un lugar = 120. 36 + 120 = 156.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Calculá: 25 × 32 = ?',
        respuesta: 800,
        explicacion: '25 × 2 = 50. 25 × 3 corrido = 750. 50 + 750 = 800.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Cuando multiplicamos $46 \\times 27$, el segundo producto parcial es $46 \\times 2$.',
        correcta: true,
        explicacion:
          'Sí, pero ojo: ese 2 representa decenas, así que el resultado se corre un lugar a la izquierda al sumarlo.',
      },
    ],
  },
  visualizadorId: 'tabla-pitagorica',
  relacionados: ['multiplicacion-una-cifra', 'tablas-de-multiplicar'],
  tags: ['multiplicacion', 'dos cifras', 'algoritmo', 'productos parciales'],
};
