import type { Tema } from '../tipos';

export const PROPIEDADES_LOGARITMOS: Tema = {
  slug: 'propiedades-logaritmos',
  titulo: 'Propiedades de los logaritmos',
  anios: ['secundaria-4'],
  area: 'funciones',
  nivel: 'avanzado',
  resumen:
    'Reglas para sumar, restar y multiplicar logaritmos: log de producto, cociente y potencia.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Propiedad', 'Fórmula'],
      filas: [
        ['Producto', '$\\log(xy) = \\log x + \\log y$'],
        ['Cociente', '$\\log(x/y) = \\log x - \\log y$'],
        ['Potencia', '$\\log(x^n) = n \\cdot \\log x$'],
        ['Cambio de base', '$\\log_a x = \\dfrac{\\log_b x}{\\log_b a}$'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Aplicar',
      enunciado: '$\\log_2(8 \\times 4)$.',
      pasos: [
        { explicacion: '$\\log_2 8 + \\log_2 4 = 3 + 2 = 5$.' },
      ],
      resultado: '5.',
    },
    {
      titulo: 'Potencia',
      enunciado: '$\\log_3(9^2)$.',
      pasos: [
        { explicacion: '$2 \\log_3 9 = 2 \\times 2 = 4$.' },
      ],
      resultado: '4.',
    },
  ],
  erroresComunes: [
    'Confundir $\\log(x + y)$ con $\\log x + \\log y$ (NO se cumple).',
    'Aplicar mal la propiedad del cociente.',
    'Olvidar que el coeficiente sale o entra como exponente.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: '$\\log_{10} 100 + \\log_{10} 10 = ?$',
        respuesta: 3,
        explicacion: '$2 + 1 = 3$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$\\log(x \\cdot y) = \\log x + \\log y$.',
        correcta: true,
        explicacion: 'Propiedad del producto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$\\log(x + y) = \\log x + \\log y$.',
        correcta: false,
        explicacion: 'Falso. Esa propiedad NO existe.',
      },
    ],
  },
  relacionados: ['funcion-logaritmica'],
  tags: ['logaritmos', 'propiedades'],
};
