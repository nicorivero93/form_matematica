import type { Tema } from '../tipos';

export const CUADRILATEROS: Tema = {
  slug: 'cuadrilateros',
  titulo: 'Cuadriláteros',
  anios: ['primaria-5'],
  area: 'geometria',
  nivel: 'intro',
  resumen:
    'Las figuras de 4 lados: cuadrado, rectángulo, rombo, romboide, paralelogramo, trapecio. Cómo se diferencian.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Un cuadrilátero es cualquier polígono de 4 lados. Hay distintos tipos según los lados sean iguales o paralelos.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Figura', 'Lados', 'Ángulos'],
      filas: [
        ['Cuadrado', '4 iguales, lados opuestos paralelos', '4 rectos'],
        ['Rectángulo', 'Lados opuestos iguales y paralelos', '4 rectos'],
        ['Rombo', '4 iguales, lados opuestos paralelos', 'Iguales de a dos, no rectos'],
        ['Romboide / Paralelogramo', 'Lados opuestos iguales y paralelos', 'Iguales de a dos'],
        ['Trapecio', 'Solo un par de lados paralelos', '—'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Paralelogramo',
      texto:
        'Un paralelogramo es cualquier cuadrilátero con los lados opuestos paralelos. Cuadrado, rectángulo, rombo y romboide son todos paralelogramos.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'En cualquier cuadrilátero la suma de los 4 ángulos es 360° (justo el doble que el triángulo).',
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar la figura',
      enunciado:
        'Una figura tiene 4 lados, los opuestos son iguales y paralelos, y sus ángulos son rectos. ¿Qué figura es?',
      pasos: [
        { explicacion: '4 lados → cuadrilátero.' },
        { explicacion: 'Lados opuestos paralelos → paralelogramo.' },
        { explicacion: 'Ángulos rectos → rectángulo.' },
        {
          explicacion:
            '¿Es además cuadrado? Solo si los 4 lados son iguales. Si no se especifica, queda en rectángulo.',
        },
      ],
      resultado: 'Rectángulo.',
    },
    {
      titulo: 'Suma de ángulos',
      enunciado:
        'En un cuadrilátero conocemos tres ángulos: 80°, 95° y 100°. ¿Cuánto mide el cuarto?',
      pasos: [
        { explicacion: 'Suma total: 360°.' },
        { explicacion: 'Sumamos los conocidos: 80 + 95 + 100 = 275.' },
        { explicacion: 'Cuarto ángulo: 360 - 275 = 85.' },
      ],
      resultado: '85°.',
    },
  ],
  erroresComunes: [
    'Confundir cuadrado con rombo. Ambos tienen 4 lados iguales, pero solo el cuadrado tiene ángulos rectos.',
    'Pensar que un trapecio tiene los 4 lados desordenados. Tiene exactamente UN par de lados paralelos.',
    'Olvidar que la suma de los 4 ángulos es 360°.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '¿Cuántos grados suman los 4 ángulos de un cuadrilátero?',
        respuesta: 360,
        explicacion: 'Siempre 360°, sin importar el tipo de cuadrilátero.',
        unidad: '°',
      },
      {
        tipo: 'multiple',
        enunciado:
          '¿Qué cuadrilátero tiene los 4 lados iguales pero los ángulos NO son rectos?',
        opciones: ['Cuadrado', 'Rectángulo', 'Rombo', 'Trapecio'],
        correcta: 2,
        explicacion: 'Rombo: 4 lados iguales, ángulos no rectos.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Todo cuadrado es un rectángulo.',
        correcta: true,
        explicacion: 'Sí. El cuadrado cumple las condiciones de rectángulo (4 ángulos rectos) y además tiene los lados iguales.',
      },
    ],
  },
  relacionados: ['figuras-planas', 'perimetro', 'area-rectangulo'],
  tags: ['cuadrilateros', 'paralelogramo', 'rombo', 'trapecio', 'rectangulo'],
};
