import type { Tema } from '../tipos';

export const FRACCIONES_SUMA_RESTA_DISTINTO_DENOMINADOR: Tema = {
  slug: 'fracciones-suma-resta-distinto-denominador',
  titulo: 'Suma y resta de fracciones (distinto denominador)',
  anios: ['primaria-6'],
  area: 'fracciones-decimales',
  nivel: 'intermedio',
  resumen:
    'Para sumar o restar fracciones de distinto denominador hay que pasarlas a un denominador común usando el MCM.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Si los denominadores son distintos no podemos sumar directamente: necesitamos transformar las fracciones para que tengan el mismo denominador. Ese denominador común suele ser el MCM de los originales.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Calcular el MCM de los denominadores.',
        'Transformar cada fracción a una equivalente con ese denominador (multiplicando arriba y abajo por el factor que corresponda).',
        'Sumar (o restar) los numeradores manteniendo el denominador común.',
        'Simplificar el resultado si se puede.',
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Atajo',
      texto:
        'Si no encontrás rápido el MCM, multiplicá los dos denominadores: siempre te da un común aunque no sea el mínimo. Después podés simplificar.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Suma con MCM',
      enunciado: 'Calculá $\\tfrac{1}{4} + \\tfrac{2}{6}$.',
      pasos: [
        { explicacion: 'MCM(4, 6) = 12.' },
        { explicacion: '$\\tfrac{1}{4} = \\tfrac{3}{12}$ (multiplicamos arriba y abajo por 3).' },
        { explicacion: '$\\tfrac{2}{6} = \\tfrac{4}{12}$ (multiplicamos por 2).' },
        { explicacion: 'Sumamos: $\\tfrac{3}{12} + \\tfrac{4}{12} = \\tfrac{7}{12}$.' },
      ],
      resultado: '$\\tfrac{7}{12}$',
    },
    {
      titulo: 'Resta',
      enunciado: 'Calculá $\\tfrac{5}{6} - \\tfrac{1}{2}$.',
      pasos: [
        { explicacion: 'MCM(6, 2) = 6.' },
        { explicacion: '$\\tfrac{1}{2} = \\tfrac{3}{6}$.' },
        { explicacion: 'Restamos: $\\tfrac{5}{6} - \\tfrac{3}{6} = \\tfrac{2}{6}$.' },
        { explicacion: 'Simplificamos dividiendo por 2: $\\tfrac{1}{3}$.' },
      ],
      resultado: '$\\tfrac{1}{3}$',
    },
  ],
  erroresComunes: [
    'Sumar numeradores y denominadores directamente cuando los denominadores son distintos.',
    'Olvidar transformar las fracciones a equivalentes antes de sumar.',
    'Usar un denominador común mayor al MCM (funciona pero hace más trabajo).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Calculá $\\tfrac{1}{2} + \\tfrac{1}{3}$.',
        opciones: ['$\\tfrac{2}{5}$', '$\\tfrac{5}{6}$', '$\\tfrac{1}{6}$', '$\\tfrac{2}{6}$'],
        correcta: 1,
        explicacion: 'MCM(2,3)=6. 1/2 = 3/6. 1/3 = 2/6. Sumamos: 5/6.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Calculá $\\tfrac{3}{4} - \\tfrac{1}{8}$.',
        opciones: ['$\\tfrac{2}{4}$', '$\\tfrac{2}{8}$', '$\\tfrac{5}{8}$', '$\\tfrac{4}{8}$'],
        correcta: 2,
        explicacion: 'MCM(4,8)=8. 3/4 = 6/8. 6/8 - 1/8 = 5/8.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Para sumar fracciones de distinto denominador podemos sumarlas directamente.',
        correcta: false,
        explicacion: 'No. Hay que pasarlas primero a un denominador común.',
      },
    ],
  },
  visualizadorId: 'fracciones-pizza',
  relacionados: ['fracciones-suma-resta', 'mcm-mcd', 'fracciones-equivalentes'],
  tags: ['fracciones', 'suma', 'resta', 'mcm', 'denominador comun'],
};
