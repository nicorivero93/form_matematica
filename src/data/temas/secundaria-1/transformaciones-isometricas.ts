import type { Tema } from '../tipos';

export const TRANSFORMACIONES_ISOMETRICAS: Tema = {
  slug: 'transformaciones-isometricas',
  titulo: 'Traslaciones, rotaciones y simetrías',
  anios: ['secundaria-1'],
  area: 'geometria',
  nivel: 'intermedio',
  resumen:
    'Las isometrías mueven figuras sin cambiar su forma o tamaño: traslación (deslizar), rotación (girar), simetría (espejar).',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Isometría',
      texto:
        'Es una transformación que conserva distancias y ángulos. La figura resultante es congruente con la original.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Tipo', 'Qué hace'],
      filas: [
        ['Traslación', 'Mueve la figura sin rotarla, según un vector.'],
        ['Rotación', 'Gira la figura alrededor de un centro un cierto ángulo.'],
        ['Simetría axial', 'Refleja la figura respecto a una recta (eje).'],
        ['Simetría central', 'Refleja la figura respecto a un punto.'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Traslación',
      enunciado:
        'Trasladá el punto $(2, 3)$ según el vector $(5, -1)$.',
      pasos: [
        { explicacion: 'Sumamos vector: $(2 + 5, 3 + (-1)) = (7, 2)$.' },
      ],
      resultado: '$(7, 2)$.',
    },
    {
      titulo: 'Simetría axial',
      enunciado:
        'Encontrá el simétrico de $(3, 4)$ respecto al eje x.',
      pasos: [
        { explicacion: 'La simetría respecto al eje x cambia el signo de y.' },
        { explicacion: '$(3, 4) \\to (3, -4)$.' },
      ],
      resultado: '$(3, -4)$.',
    },
  ],
  erroresComunes: [
    'Confundir simetría axial con central.',
    'Aplicar la traslación restando en vez de sumando.',
    'Olvidar el centro o eje de la transformación.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Aplicá traslación $(1, -2)$ al punto $(5, 3)$.',
        opciones: ['$(6, 1)$', '$(4, 5)$', '$(6, 5)$', '$(5, -2)$'],
        correcta: 0,
        explicacion: '(5+1, 3-2) = (6, 1).',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es el simétrico de $(2, -5)$ respecto al eje y?',
        opciones: ['$(2, 5)$', '$(-2, -5)$', '$(2, -5)$', '$(-2, 5)$'],
        correcta: 1,
        explicacion: 'Simetría respecto al eje y: cambia signo de x.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Una isometría conserva el tamaño de la figura.',
        correcta: true,
        explicacion: 'Cierto: solo la mueve.',
      },
    ],
  },
  relacionados: ['plano-cartesiano-puntos', 'congruencia-triangulos'],
  tags: ['transformaciones', 'traslacion', 'rotacion', 'simetria', 'isometria'],
};
