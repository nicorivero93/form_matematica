import type { Tema } from '../tipos';

export const AREA_FIGURAS_PITAGORAS: Tema = {
  slug: 'area-figuras-pitagoras',
  titulo: 'Áreas usando Pitágoras',
  anios: ['secundaria-2'],
  area: 'medida',
  nivel: 'avanzado',
  resumen:
    'Usar el teorema de Pitágoras para encontrar alturas o lados que necesitamos para calcular áreas de triángulos y otras figuras.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Muchas veces para calcular un área falta una medida (la altura del triángulo, la diagonal del rombo, etc.). Si la figura tiene un ángulo recto en el lugar adecuado, Pitágoras nos da el dato.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Triángulo isósceles',
      enunciado:
        'Triángulo isósceles con dos lados iguales de 13 cm y base 10 cm. ¿Área?',
      pasos: [
        { explicacion: 'La altura cae en el medio de la base, formando dos rectángulos.' },
        { explicacion: 'Aplicamos Pitágoras: $h^2 + 5^2 = 13^2 \\Rightarrow h^2 = 144 \\Rightarrow h = 12$.' },
        { explicacion: 'Área: $(10 \\times 12) / 2 = 60$ cm².' },
      ],
      resultado: '60 cm².',
    },
    {
      titulo: 'Diagonal del cuadrado',
      enunciado: '¿Cuál es la diagonal de un cuadrado de 5 cm de lado?',
      pasos: [
        { explicacion: 'La diagonal es la hipotenusa de un triángulo rectángulo.' },
        { explicacion: '$d^2 = 5^2 + 5^2 = 50 \\Rightarrow d = \\sqrt{50} \\approx 7{,}07$.' },
      ],
      resultado: '7,07 cm.',
    },
  ],
  erroresComunes: [
    'No identificar el triángulo rectángulo dentro de la figura.',
    'Tomar lados que no son catetos.',
    'Olvidar la raíz cuadrada al final.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Diagonal de un rectángulo de lados 6 y 8.',
        respuesta: 10,
        explicacion: '$\\sqrt{36 + 64} = 10$.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Diagonal de un cuadrado de lado 4 cm (aproximado a 2 decimales).',
        respuesta: 5.66,
        tolerancia: 0.05,
        explicacion: '$\\sqrt{16 + 16} = \\sqrt{32} \\approx 5{,}66$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Para usar Pitágoras necesitás un triángulo rectángulo.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  visualizadorId: 'pitagoras',
  relacionados: ['teorema-pitagoras', 'area-rectangulo', 'area-triangulo'],
  tags: ['pitagoras', 'area', 'aplicaciones'],
};
