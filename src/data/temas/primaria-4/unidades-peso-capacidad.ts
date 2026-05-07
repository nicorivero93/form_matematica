import type { Tema } from '../tipos';

export const UNIDADES_PESO_CAPACIDAD: Tema = {
  slug: 'unidades-peso-capacidad',
  titulo: 'Peso y capacidad',
  anios: ['primaria-4'],
  area: 'medida',
  nivel: 'intro',
  resumen:
    'Gramos, kilogramos, mililitros y litros: cómo medir cuánto pesa o cuánto contiene un envase.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'El peso (más correctamente, la masa) se mide en gramos y kilogramos. La capacidad — cuánto líquido cabe en un envase — se mide en mililitros y litros.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Magnitud', 'Unidad', 'Símbolo', 'Equivalencia'],
      filas: [
        ['Peso', 'Gramo', 'g', '1.000 g = 1 kg'],
        ['Peso', 'Kilogramo', 'kg', '1 kg = 1.000 g'],
        ['Capacidad', 'Mililitro', 'ml', '1.000 ml = 1 l'],
        ['Capacidad', 'Litro', 'l', '1 l = 1.000 ml'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Para pasar de gramo a kilo dividimos por 1.000. De litro a mililitro, multiplicamos por 1.000. La regla es siempre la misma: a unidad más chica multiplicamos, a unidad más grande dividimos.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Algunos ejemplos prácticos: una manzana pesa unos 200 g, una bolsa grande de azúcar 1 kg, un vaso de jugo 250 ml, una botella de gaseosa de 2,25 litros.',
    },
  ],
  ejemplos: [
    {
      titulo: 'De gramos a kilos',
      enunciado: 'Una bolsa de papas pesa 2.500 g. ¿Cuántos kilos son?',
      pasos: [
        { explicacion: 'De g a kg dividimos por 1.000.' },
        { explicacion: '2.500 ÷ 1.000 = 2,5.' },
      ],
      resultado: '2,5 kg (dos kilos y medio).',
    },
    {
      titulo: 'De litros a mililitros',
      enunciado: 'Una botella tiene 1,5 litros de jugo. ¿Cuántos mililitros son?',
      pasos: [
        { explicacion: 'De l a ml multiplicamos por 1.000.' },
        { explicacion: '1,5 × 1.000 = 1.500.' },
      ],
      resultado: '1.500 ml.',
    },
  ],
  erroresComunes: [
    'Confundir peso con capacidad (kg con litros).',
    'Equivocarse en la conversión y multiplicar cuando había que dividir.',
    'Olvidar que 1 kg son 1.000 g (no 100).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuántos gramos hay en 3 kg?',
        respuesta: 3000,
        explicacion: '3 × 1.000 = 3.000 g.',
        unidad: 'g',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Cuántos litros son 2.500 ml?',
        respuesta: 2.5,
        tolerancia: 0.001,
        explicacion: '2.500 ÷ 1.000 = 2,5 l.',
        unidad: 'l',
      },
      {
        tipo: 'multiple',
        enunciado:
          'Para medir cuánto cabe en una botella, usamos:',
        opciones: ['Gramos', 'Kilogramos', 'Litros', 'Metros'],
        correcta: 2,
        explicacion: 'La capacidad se mide en litros (o mililitros para envases chicos).',
      },
    ],
  },
  relacionados: ['unidades-longitud'],
  tags: ['peso', 'capacidad', 'gramo', 'kilo', 'litro', 'mililitro', 'medidas'],
};
