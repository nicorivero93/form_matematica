import type { Tema } from '../tipos';

export const AREA_CIRCULO_APLICACIONES: Tema = {
  slug: 'area-circulo-aplicaciones',
  titulo: 'Aplicaciones del área del círculo',
  anios: ['primaria-7'],
  area: 'medida',
  nivel: 'intermedio',
  resumen:
    'Áreas y perímetros de figuras compuestas que incluyen círculos: media luna, sectores, anillos.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'En problemas reales aparecen figuras "compuestas": un cuadrado con un círculo adentro, un anillo, una pista en forma de óvalo. La estrategia es descomponer en figuras simples y sumar/restar áreas.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Estrategia',
      texto:
        '1) Identificar las figuras simples que componen la figura. 2) Calcular el área de cada una. 3) Sumar las que aportan, restar las que se "sacan".',
    },
    {
      tipo: 'tabla',
      encabezados: ['Figura', 'Fórmula útil'],
      filas: [
        ['Semicírculo', '$A = \\dfrac{\\pi r^2}{2}$'],
        ['Cuarto de círculo', '$A = \\dfrac{\\pi r^2}{4}$'],
        ['Sector circular ($\\alpha$ grados)', '$A = \\dfrac{\\pi r^2 \\cdot \\alpha}{360}$'],
        ['Anillo (R y r)', '$A = \\pi(R^2 - r^2)$'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Cuadrado con semicírculo',
      enunciado:
        'Un cuadrado de 10 cm de lado tiene encima un semicírculo cuyo diámetro es el lado del cuadrado. ¿Cuál es el área total?',
      pasos: [
        { explicacion: 'Cuadrado: 10 × 10 = 100 cm².' },
        { explicacion: 'Semicírculo: r = 5. A = (π × 25) ÷ 2 = (3,14 × 25) ÷ 2 = 39,25 cm².' },
        { explicacion: 'Total: 100 + 39,25 = 139,25 cm².' },
      ],
      resultado: '139,25 cm².',
    },
    {
      titulo: 'Anillo',
      enunciado:
        'Un anillo tiene radio exterior 10 cm e interior 6 cm. ¿Cuál es su área?',
      pasos: [
        { explicacion: 'Área grande: π × 10² = 314.' },
        { explicacion: 'Área chica: π × 6² = 113,04.' },
        { explicacion: 'Resta: 314 - 113,04 = 200,96 cm².' },
      ],
      resultado: '200,96 cm².',
    },
  ],
  erroresComunes: [
    'Sumar áreas que en realidad se restan (porque la figura se "saca").',
    'Olvidar dividir por 2 en el semicírculo.',
    'Mezclar radio con diámetro al calcular el área.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          '¿Cuál es el área de un semicírculo de radio 6 cm? (π = 3,14)',
        respuesta: 56.52,
        tolerancia: 0.5,
        explicacion: '(π × 36) ÷ 2 = 56,52 cm².',
        unidad: 'cm²',
      },
      {
        tipo: 'numerica',
        enunciado:
          '¿Cuál es el área de un cuarto de círculo de radio 4 cm? (π = 3,14)',
        respuesta: 12.56,
        tolerancia: 0.5,
        explicacion: '(π × 16) ÷ 4 = 12,56 cm².',
        unidad: 'cm²',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Un cuarto de círculo tiene 1/4 del área del círculo entero.',
        correcta: true,
        explicacion: 'Cierto, por definición.',
      },
    ],
  },
  visualizadorId: 'regla-perimetro',
  relacionados: ['circulo-perimetro-area', 'area-rectangulo'],
  tags: ['area', 'circulo', 'compuesta', 'anillo', 'semicirculo'],
};
