import type { Tema } from '../tipos';

export const NUMEROS_COMPLEJOS: Tema = {
  slug: 'numeros-complejos',
  titulo: 'Números complejos: introducción',
  anios: ['secundaria-5'],
  area: 'numeros-y-operaciones',
  nivel: 'avanzado',
  resumen:
    'Extensión de los reales con la unidad imaginaria $i = \\sqrt{-1}$. Forma binómica $a + bi$.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Unidad imaginaria',
      texto:
        '$i$ es tal que $i^2 = -1$. Permite resolver ecuaciones como $x^2 + 1 = 0$ que no tienen solución en los reales.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Operación', 'Cálculo'],
      filas: [
        ['Suma', '$(a + bi) + (c + di) = (a+c) + (b+d)i$'],
        ['Resta', '$(a + bi) - (c + di) = (a-c) + (b-d)i$'],
        ['Multiplicación', '$(a + bi)(c + di) = (ac - bd) + (ad + bc)i$'],
        ['$i^2$', '-1'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Sumar y multiplicar',
      enunciado: 'Sea $z_1 = 3 + 2i$, $z_2 = 1 - i$. Calculá $z_1 + z_2$ y $z_1 \\cdot z_2$.',
      pasos: [
        { explicacion: 'Suma: $(3 + 1) + (2 - 1)i = 4 + i$.' },
        { explicacion: 'Producto: $3 \\cdot 1 - 2 \\cdot (-1) + (3 \\cdot (-1) + 2 \\cdot 1)i = 5 - i$.' },
      ],
      resultado: '$4 + i$ y $5 - i$.',
    },
  ],
  erroresComunes: [
    'Confundir $i^2$ con 1 en lugar de -1.',
    'No distribuir bien la multiplicación.',
    'Olvidar que $a$ y $b$ son números reales.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '$i^2$:',
        opciones: ['1', '-1', '$i$', '0'],
        correcta: 1,
        explicacion: 'Por definición de $i$.',
      },
      {
        tipo: 'multiple',
        enunciado: '$(2 + 3i) + (4 - i)$:',
        opciones: ['$6 + 2i$', '$6 + 4i$', '$2 + 2i$', '$8 - i$'],
        correcta: 0,
        explicacion: '$(2+4) + (3-1)i = 6 + 2i$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Todo número real es un número complejo.',
        correcta: true,
        explicacion: 'Cierto: $a = a + 0i$.',
      },
    ],
  },
  relacionados: ['numeros-reales-introduccion', 'ecuaciones-segundo-grado'],
  tags: ['complejos', 'imaginario', 'i'],
};
