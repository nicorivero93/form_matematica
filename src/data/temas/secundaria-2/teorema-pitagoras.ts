import type { Tema } from '../tipos';

export const TEOREMA_PITAGORAS: Tema = {
  slug: 'teorema-pitagoras',
  titulo: 'Teorema de Pitágoras',
  anios: ['secundaria-2'],
  area: 'geometria',
  nivel: 'intermedio',
  resumen:
    'En un triángulo rectángulo, la suma de los cuadrados de los catetos es igual al cuadrado de la hipotenusa.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Enunciado',
      texto:
        'En un triángulo rectángulo, $a^2 + b^2 = c^2$, donde $a$ y $b$ son los catetos (lados que forman el ángulo recto) y $c$ es la hipotenusa (lado opuesto al ángulo recto).',
    },
    {
      tipo: 'latex',
      latex: 'a^2 + b^2 = c^2',
      display: true,
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Para qué sirve',
      texto:
        'Cuando conocés dos lados de un triángulo rectángulo, podés calcular el tercero. Aplicado a distancias en plano, navegación, ingeniería.',
    },
  ],
  formulasClave: [
    {
      nombre: 'Pitágoras',
      latex: 'c = \\sqrt{a^2 + b^2}',
      variables: [
        { simbolo: 'a, b', nombre: 'catetos', desc: 'lados que forman el ángulo recto' },
        { simbolo: 'c', nombre: 'hipotenusa', desc: 'opuesta al ángulo recto' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Calcular hipotenusa',
      enunciado:
        'Triángulo rectángulo con catetos 3 y 4. ¿Cuánto mide la hipotenusa?',
      pasos: [
        { explicacion: '$c^2 = 3^2 + 4^2 = 9 + 16 = 25$.' },
        { explicacion: '$c = \\sqrt{25} = 5$.' },
      ],
      resultado: '5.',
    },
    {
      titulo: 'Calcular cateto',
      enunciado:
        'Triángulo rectángulo con hipotenusa 13 y un cateto de 5. ¿Cuánto mide el otro cateto?',
      pasos: [
        { explicacion: '$5^2 + b^2 = 13^2 \\Rightarrow 25 + b^2 = 169$.' },
        { explicacion: '$b^2 = 144 \\Rightarrow b = 12$.' },
      ],
      resultado: '12.',
    },
  ],
  erroresComunes: [
    'Aplicar Pitágoras a triángulos no rectángulos.',
    'Sumar los catetos sin elevarlos al cuadrado.',
    'Confundir catetos con hipotenusa.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Catetos 6 y 8. ¿Cuánto mide la hipotenusa?',
        respuesta: 10,
        explicacion: '$\\sqrt{36 + 64} = \\sqrt{100} = 10$.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Hipotenusa 17, un cateto 8. ¿Cuál es el otro cateto?',
        respuesta: 15,
        explicacion: '$\\sqrt{289 - 64} = \\sqrt{225} = 15$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Pitágoras vale para cualquier triángulo.',
        correcta: false,
        explicacion: 'Falso. Solo para rectángulos.',
      },
    ],
  },
  visualizadorId: 'pitagoras',
  relacionados: ['triangulos-clasificacion', 'raices-cuadradas'],
  tags: ['pitagoras', 'rectangulo', 'hipotenusa', 'cateto'],
};
