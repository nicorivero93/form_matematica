import type { Tema } from '../tipos';

export const PITAGORAS_CUERPOS_3D: Tema = {
  slug: 'pitagoras-cuerpos-3d',
  titulo: 'Pitágoras en cuerpos: altura de pirámide y cono, diagonales',
  anios: ['secundaria-2'],
  area: 'geometria',
  nivel: 'intermedio',
  resumen:
    'Aplicaciones de Pitágoras en figuras 3D: encontrar la altura de una pirámide o cono a partir de la apotema o generatriz, calcular diagonales de prismas y cubos.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Muchos problemas en geometría del espacio se resuelven identificando un triángulo rectángulo dentro del cuerpo y aplicando $a^2 + b^2 = c^2$. La clave es DIBUJAR ese triángulo y reconocer cuál lado es la hipotenusa.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Cono y pirámide regular',
      texto:
        'En un cono recto: la generatriz $g$ es la hipotenusa del triángulo formado por la altura $h$ y el radio $r$ de la base. $g^2 = h^2 + r^2$. En una pirámide regular: la apotema lateral $a$ es la hipotenusa del triángulo formado por la altura $h$ y la apotema de la base $a_b$. $a^2 = h^2 + a_b^2$.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Diagonal de un prisma rectangular',
      texto:
        'La diagonal $D$ de una caja con dimensiones $largo$, $ancho$, $alto$ es: $D = \\sqrt{largo^2 + ancho^2 + alto^2}$. Sale de aplicar Pitágoras dos veces: primero a la base (diagonal de la base) y después al triángulo entre esa diagonal y la altura.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Receta',
      texto:
        '1) Hacé un dibujo en perspectiva del cuerpo. 2) Identificá el triángulo rectángulo donde aparezcan los datos y la incógnita. 3) Verificá cuál lado es la hipotenusa (siempre el más largo). 4) Aplicá Pitágoras y despejá.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Cono: generatriz, altura, radio',
      latex: 'g^2 = h^2 + r^2',
      variables: [
        { simbolo: 'g', nombre: 'Generatriz', desc: 'Distancia desde el vértice a un punto del borde de la base.' },
        { simbolo: 'h', nombre: 'Altura', desc: 'Distancia desde el vértice al centro de la base.' },
        { simbolo: 'r', nombre: 'Radio de la base', desc: 'Radio del círculo de la base.' },
      ],
    },
    {
      nombre: 'Diagonal de prisma rectangular',
      latex: 'D = \\sqrt{l^2 + a^2 + h^2}',
      variables: [
        { simbolo: 'D', nombre: 'Diagonal del cuerpo', desc: 'Segmento que une dos vértices opuestos.' },
        { simbolo: 'l, a, h', nombre: 'Largo, ancho, alto', desc: 'Las tres dimensiones del prisma.' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Altura de un cono',
      enunciado: 'Un cono tiene generatriz $g = 13$ cm y radio de base $r = 5$ cm. Calculá su altura.',
      pasos: [
        { explicacion: 'Pitágoras: $g^2 = h^2 + r^2 \\Rightarrow 13^2 = h^2 + 5^2$.' },
        { explicacion: '$169 = h^2 + 25 \\Rightarrow h^2 = 144 \\Rightarrow h = 12$ cm.' },
      ],
      resultado: 'La altura del cono es $h = 12$ cm.',
    },
    {
      titulo: 'Apotema lateral de pirámide cuadrada',
      enunciado: 'Una pirámide regular de base cuadrada tiene altura $h = 8$ cm y la base mide $12$ cm de lado. Calculá la apotema lateral.',
      pasos: [
        { explicacion: 'La apotema de la BASE (centro al medio de un lado) es $a_b = 12 / 2 = 6$ cm.' },
        { explicacion: 'En el triángulo rectángulo con catetos $h$ y $a_b$, la hipotenusa es la apotema LATERAL.' },
        { explicacion: '$a^2 = h^2 + a_b^2 = 8^2 + 6^2 = 64 + 36 = 100 \\Rightarrow a = 10$ cm.' },
      ],
      resultado: 'La apotema lateral mide $10$ cm.',
    },
    {
      titulo: 'Diagonal de un cubo',
      enunciado: 'Calculá la diagonal de un cubo de arista $4$ cm.',
      pasos: [
        { explicacion: 'Las tres dimensiones son iguales: $l = a = h = 4$.' },
        { explicacion: '$D = \\sqrt{4^2 + 4^2 + 4^2} = \\sqrt{48} = 4\\sqrt{3} \\approx 6{,}93$ cm.' },
      ],
      resultado: 'La diagonal del cubo es $D = 4\\sqrt{3} \\approx 6{,}93$ cm.',
    },
    {
      titulo: 'Diagonal de una caja de zapatos',
      enunciado: 'Caja de $30 \\times 20 \\times 15$ cm. ¿Cabe una varilla de $40$ cm en diagonal?',
      pasos: [
        { explicacion: 'Diagonal: $D = \\sqrt{30^2 + 20^2 + 15^2} = \\sqrt{900 + 400 + 225} = \\sqrt{1525} \\approx 39{,}05$ cm.' },
        { explicacion: 'Como $39{,}05 < 40$, la varilla NO entra entera.' },
      ],
      resultado: 'No, la varilla de $40$ cm no entra (la diagonal mide $\\approx 39{,}05$ cm).',
    },
  ],
  erroresComunes: [
    'Confundir apotema de la BASE con apotema LATERAL en pirámides.',
    'Usar el lado del cuadrado de la base en vez de la mitad cuando se calcula la apotema lateral.',
    'Aplicar Pitágoras directo entre tres lados sin pasar por la diagonal de la base (en prismas).',
    'Olvidar que la diagonal del cubo es $\\sqrt{3}$ veces la arista (no $\\sqrt{2}$ — eso es la diagonal de la cara).',
    'Mezclar $g^2 = h^2 + r^2$ (cono) con $g = h + r$ (incorrecto).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Cono con generatriz $25$ cm y radio $7$ cm. ¿Cuánto mide la altura?',
        respuesta: 24,
        tolerancia: 0.1,
        explicacion: '$h = \\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24$.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Cubo de arista $5$. ¿Cuánto mide su diagonal? Redondeá a 2 decimales.',
        respuesta: 8.66,
        tolerancia: 0.02,
        explicacion: '$D = \\sqrt{5^2 + 5^2 + 5^2} = \\sqrt{75} = 5\\sqrt{3} \\approx 8{,}66$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'En un cono recto, la generatriz es siempre mayor que la altura.',
        correcta: true,
        explicacion: 'Cierto, porque la generatriz es la hipotenusa del triángulo formado con la altura y el radio.',
      },
    ],
  },
  visualizadorId: 'pitagoras',
  relacionados: ['teorema-pitagoras', 'area-figuras-pitagoras', 'volumen-piramide-cono', 'volumen-cuerpos'],
  tags: ['pitagoras', 'cuerpos 3d', 'cono', 'piramide', 'cubo', 'diagonal', 'altura'],
};
