import type { Tema } from '../tipos';

export const PROBLEMAS_PORCENTAJE: Tema = {
  slug: 'problemas-porcentaje',
  titulo: 'Problemas con porcentaje',
  anios: ['primaria-6'],
  area: 'fracciones-decimales',
  nivel: 'avanzado',
  resumen:
    'Aplicar el porcentaje en problemas reales: descuentos, recargos, IVA, propinas y aumentos de precios.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'En la vida real el porcentaje aparece todo el tiempo: descuentos, recargos por pagar en cuotas, IVA, propinas. La idea siempre es la misma: calcular el % y después sumar o restar al precio original.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        '**Descuento**: precio final = precio - descuento.',
        '**Recargo / aumento**: precio final = precio + recargo.',
        '**Atajo**: si te dan X% de descuento, pagás (100 - X)% del original. Ejemplo: 20% off = pagás 80%.',
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Truco',
      texto:
        'Para sumar/restar un porcentaje rápido, multiplicá por (1 + p/100) si es aumento o (1 - p/100) si es descuento.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Descuento del 30%',
      enunciado:
        'Un libro cuesta $5.000 y tiene 30% de descuento. ¿Cuánto pagás?',
      pasos: [
        { explicacion: 'Calculamos el descuento: 30% de 5.000 = 0,30 × 5.000 = 1.500.' },
        { explicacion: 'Restamos: 5.000 - 1.500 = 3.500.' },
        { explicacion: 'Atajo: pagás el 70%, así que 0,70 × 5.000 = 3.500.' },
      ],
      resultado: '$3.500.',
    },
    {
      titulo: 'Recargo del 10%',
      enunciado:
        'Una compra de $2.000 tiene 10% de recargo por pago en 3 cuotas. ¿Cuánto pagás?',
      pasos: [
        { explicacion: '10% de 2.000 = 200.' },
        { explicacion: 'Sumamos: 2.000 + 200 = 2.200.' },
      ],
      resultado: '$2.200.',
    },
    {
      titulo: 'Aumento al doble',
      enunciado:
        'Un producto sube 100%. ¿Cuánto cuesta ahora si antes valía $300?',
      pasos: [
        { explicacion: '100% de 300 = 300.' },
        { explicacion: 'Sumamos: 300 + 300 = 600. (El precio se duplicó.)' },
      ],
      resultado: '$600.',
    },
  ],
  erroresComunes: [
    'Pensar que "X% de descuento" significa pagar X%. Es al revés: pagás (100 - X)%.',
    'Aplicar el porcentaje sobre el precio con descuento en vez del original.',
    'Sumar dos porcentajes sin darse cuenta de que se aplican en cadena (no es lo mismo +20% +20% que +40%).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Una camisa cuesta $10.000 y tiene 25% de descuento. ¿Cuánto pagás?',
        respuesta: 7500,
        explicacion: '25% de 10.000 = 2.500. Pagás 10.000 - 2.500 = 7.500.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'El alquiler era $400.000 y tiene un aumento del 15%. ¿Cuánto se paga ahora?',
        respuesta: 460000,
        explicacion: '15% de 400.000 = 60.000. Total: 400.000 + 60.000 = 460.000.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si algo aumenta 10% y después aumenta otro 10%, en total subió 20%.',
        correcta: false,
        explicacion:
          'Falso. 100 → 110 → 121. Subió 21%, no 20%, porque el segundo aumento se aplica sobre 110.',
      },
    ],
  },
  visualizadorId: 'barra-porcentaje',
  relacionados: ['porcentaje', 'proporcionalidad-directa'],
  tags: ['porcentaje', 'descuento', 'recargo', 'problemas'],
};
