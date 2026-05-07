import type { Tema } from '../tipos';

export const FRACCIONES_DECIMALES_CONVERSION: Tema = {
  slug: 'fracciones-decimales-conversion',
  titulo: 'Pasar de fracción a decimal y viceversa',
  anios: ['primaria-5'],
  area: 'fracciones-decimales',
  nivel: 'intermedio',
  resumen:
    'Las fracciones decimales (denominador 10, 100, 1000) se escriben fácil como decimales. Y al revés.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Una fracción decimal es una fracción cuyo denominador es 10, 100, 1000, etc. Esas son las más fáciles de pasar a decimal.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Fracción', 'Decimal', 'Cómo se hace'],
      filas: [
        ['$\\tfrac{3}{10}$', '0,3', '3 corrido un lugar a la derecha de la coma'],
        ['$\\tfrac{27}{100}$', '0,27', '27 corrido dos lugares'],
        ['$\\tfrac{8}{100}$', '0,08', '8 corrido dos lugares (con cero adelante)'],
        ['$\\tfrac{145}{1000}$', '0,145', '145 corrido tres lugares'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'La cantidad de ceros del denominador te dice cuántas cifras decimales tiene el resultado.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Para pasar de decimal a fracción es al revés: contás las cifras después de la coma y ponés ese tanto de ceros en el denominador.',
    },
  ],
  ejemplos: [
    {
      titulo: 'De fracción decimal a decimal',
      enunciado: 'Escribí $\\tfrac{47}{100}$ como decimal.',
      pasos: [
        { explicacion: 'El denominador es 100, así que tiene 2 cifras decimales.' },
        { explicacion: 'Tomamos el numerador 47 y lo "corremos" 2 lugares: 0,47.' },
      ],
      resultado: '0,47',
    },
    {
      titulo: 'Cuando hay que rellenar con cero',
      enunciado: 'Escribí $\\tfrac{6}{100}$ como decimal.',
      pasos: [
        { explicacion: '2 cifras decimales, pero el numerador es solo 6 (una cifra).' },
        { explicacion: 'Rellenamos con un 0 a la izquierda: 06.' },
        { explicacion: 'Resultado: 0,06.' },
      ],
      resultado: '0,06',
    },
    {
      titulo: 'De decimal a fracción',
      enunciado: 'Escribí 0,375 como fracción.',
      pasos: [
        { explicacion: 'Tiene 3 cifras decimales → denominador 1.000.' },
        { explicacion: 'El numerador es lo que está después de la coma: 375.' },
        { explicacion: 'Resultado: $\\tfrac{375}{1000}$.' },
        { explicacion: 'Podemos simplificar dividiendo arriba y abajo por 125: $\\tfrac{3}{8}$.' },
      ],
      resultado: '$\\tfrac{375}{1000} = \\tfrac{3}{8}$',
    },
  ],
  erroresComunes: [
    'Olvidar agregar el 0 a la izquierda cuando el numerador tiene menos cifras que las que pide el denominador.',
    'Mover la coma para el lado equivocado.',
    'Olvidar simplificar la fracción al final.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es el decimal equivalente a $\\tfrac{5}{100}$?',
        opciones: ['5,00', '0,5', '0,05', '0,005'],
        correcta: 2,
        explicacion: 'Denominador 100 → 2 cifras decimales. Numerador 5 → "05". Resultado: 0,05.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuál fracción es equivalente a 0,9?',
        opciones: ['$\\tfrac{9}{1}$', '$\\tfrac{9}{10}$', '$\\tfrac{9}{100}$', '$\\tfrac{1}{9}$'],
        correcta: 1,
        explicacion: '1 cifra decimal → denominador 10. Numerador 9. Resultado: $\\tfrac{9}{10}$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$\\tfrac{1}{2}$ es lo mismo que 0,5.',
        correcta: true,
        explicacion: 'Cierto. $\\tfrac{1}{2} = \\tfrac{5}{10} = 0,5$.',
      },
    ],
  },
  relacionados: ['decimales-introduccion', 'fracciones-equivalentes'],
  tags: ['decimales', 'fracciones', 'conversion', 'fracciones decimales'],
};
