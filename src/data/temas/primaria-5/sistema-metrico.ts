import type { Tema } from '../tipos';

export const SISTEMA_METRICO: Tema = {
  slug: 'sistema-metrico',
  titulo: 'Sistema métrico decimal',
  anios: ['primaria-5'],
  area: 'medida',
  nivel: 'intermedio',
  resumen:
    'Las unidades de longitud, peso y capacidad se relacionan multiplicando y dividiendo por 10. Cómo subir y bajar la "escalera".',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'En el sistema métrico decimal, cada vez que pasás de una unidad a la inmediatamente más chica, multiplicás por 10. Y al revés, dividís por 10 para subir.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Longitud', 'Símbolo', 'Equivalente en metros'],
      filas: [
        ['Kilómetro', 'km', '1.000 m'],
        ['Hectómetro', 'hm', '100 m'],
        ['Decámetro', 'dam', '10 m'],
        ['Metro', 'm', '1 m'],
        ['Decímetro', 'dm', '0,1 m'],
        ['Centímetro', 'cm', '0,01 m'],
        ['Milímetro', 'mm', '0,001 m'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'La escalera',
      texto:
        'Pensá en una escalera con km arriba y mm abajo. Por cada escalón que bajás, multiplicás por 10. Por cada escalón que subís, dividís por 10.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Las unidades de peso (kg, hg, dag, g, dg, cg, mg) y las de capacidad (kl, hl, dal, l, dl, cl, ml) funcionan exactamente igual. Cambia solo la "base" (m, g, l).',
    },
  ],
  ejemplos: [
    {
      titulo: 'De m a cm',
      enunciado: '¿Cuántos centímetros son 3,5 m?',
      pasos: [
        { explicacion: 'De m a cm bajamos 2 escalones: m → dm → cm.' },
        { explicacion: 'Multiplicamos por 100 (10 × 10).' },
        { explicacion: '3,5 × 100 = 350 cm.' },
      ],
      resultado: '350 cm.',
    },
    {
      titulo: 'De cm a km',
      enunciado: '¿Cuántos kilómetros son 25.000 cm?',
      pasos: [
        { explicacion: 'De cm a km subimos 5 escalones: cm → dm → m → dam → hm → km.' },
        { explicacion: 'Dividimos por 100.000 (10⁵).' },
        { explicacion: '25.000 ÷ 100.000 = 0,25 km.' },
      ],
      resultado: '0,25 km (un cuarto de kilómetro).',
    },
  ],
  erroresComunes: [
    'Saltar escalones de a uno cuando se necesitan varios.',
    'Multiplicar cuando había que dividir, o viceversa. Pensá: ¿voy a unidad más chica? → multiplico.',
    'Confundir unidades de longitud, peso y capacidad. Cada una tiene su escalera.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuántos centímetros son 2,8 m?',
        respuesta: 280,
        explicacion: '2,8 × 100 = 280 cm.',
        unidad: 'cm',
      },
      {
        tipo: 'numerica',
        enunciado: '¿Cuántos metros son 4 km?',
        respuesta: 4000,
        explicacion: '4 × 1.000 = 4.000 m.',
        unidad: 'm',
      },
      {
        tipo: 'multiple',
        enunciado:
          '¿Cuántos gramos son 0,5 kg?',
        opciones: ['5 g', '50 g', '500 g', '5.000 g'],
        correcta: 2,
        explicacion: '0,5 × 1.000 = 500 g.',
      },
    ],
  },
  relacionados: ['unidades-longitud', 'unidades-peso-capacidad'],
  tags: ['sistema metrico', 'unidades', 'longitud', 'peso', 'capacidad', 'conversion'],
};
