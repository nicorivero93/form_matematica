import type { Tema } from '../tipos';

export const AREA_FIGURAS_COMPUESTAS: Tema = {
  slug: 'area-figuras-compuestas',
  titulo: 'Área de figuras compuestas',
  anios: ['secundaria-1'],
  area: 'medida',
  nivel: 'intermedio',
  resumen:
    'Calcular áreas de figuras irregulares descomponiéndolas en figuras simples y sumando o restando.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Cuando una figura no es estándar, la dividimos en partes simples (rectángulos, triángulos, círculos), calculamos el área de cada una y sumamos.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Estrategia',
      texto:
        '1) Dividir la figura con líneas auxiliares. 2) Identificar cada parte. 3) Calcular áreas. 4) Sumar (o restar si la parte se "saca").',
    },
  ],
  ejemplos: [
    {
      titulo: 'Casa (rectángulo + triángulo)',
      enunciado:
        'Una figura tiene un rectángulo de 8 × 6 m con un triángulo encima de base 8 m y altura 4 m. ¿Cuál es el área total?',
      pasos: [
        { explicacion: 'Rectángulo: 8 × 6 = 48 m².' },
        { explicacion: 'Triángulo: (8 × 4) / 2 = 16 m².' },
        { explicacion: 'Total: 48 + 16 = 64 m².' },
      ],
      resultado: '64 m².',
    },
    {
      titulo: 'Cuadrado con un agujero circular',
      enunciado:
        'Un cuadrado de lado 10 cm tiene un círculo de radio 3 cm sacado del medio. ¿Área restante? (π = 3,14)',
      pasos: [
        { explicacion: 'Cuadrado: 100 cm².' },
        { explicacion: 'Círculo: 3,14 × 9 = 28,26 cm².' },
        { explicacion: 'Resta: 100 - 28,26 = 71,74 cm².' },
      ],
      resultado: '71,74 cm².',
    },
  ],
  erroresComunes: [
    'No descomponer correctamente la figura.',
    'Sumar áreas que en realidad se restan.',
    'Mezclar unidades.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Una L formada por dos rectángulos: uno de 5×3 y otro de 5×2. ¿Área total?',
        respuesta: 25,
        explicacion: '15 + 10 = 25.',
        unidad: 'cm²',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Una figura es un cuadrado de 8×8 con un cuadrado de 3×3 cortado. ¿Área?',
        respuesta: 55,
        explicacion: '64 - 9 = 55.',
        unidad: 'cm²',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Si una figura no es regular, no se puede calcular su área.',
        correcta: false,
        explicacion: 'Falso. Se descompone en figuras regulares y se suma.',
      },
    ],
  },
  relacionados: ['area-rectangulo', 'area-triangulo', 'circulo-perimetro-area'],
  tags: ['area', 'figuras compuestas', 'descomposicion'],
};
