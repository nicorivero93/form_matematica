import type { Tema } from '../tipos';

export const FUNCION_CUADRATICA_FORMAS: Tema = {
  slug: 'funcion-cuadratica-formas',
  titulo: 'Formas de la función cuadrática',
  anios: ['secundaria-3'],
  area: 'funciones',
  nivel: 'intermedio',
  resumen:
    'Tres formas equivalentes: polinómica, factorizada y canónica. Cada una destaca distintas características.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Forma', 'Expresión', 'Útil para'],
      filas: [
        ['Polinómica', '$ax^2 + bx + c$', 'Sumar y operar.'],
        ['Factorizada', '$a(x - x_1)(x - x_2)$', 'Ver las raíces.'],
        ['Canónica', '$a(x - x_v)^2 + y_v$', 'Ver el vértice $(x_v, y_v)$.'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Pasar a canónica',
      enunciado: 'Llevá $f(x) = x^2 - 4x + 7$ a la forma canónica.',
      pasos: [
        { explicacion: '$x_v = -(-4)/(2) = 2$.' },
        { explicacion: '$y_v = f(2) = 4 - 8 + 7 = 3$.' },
        { explicacion: 'Canónica: $f(x) = (x - 2)^2 + 3$.' },
      ],
      resultado: '$f(x) = (x - 2)^2 + 3$.',
    },
  ],
  erroresComunes: [
    'Confundir signos al pasar a canónica.',
    'Olvidar el coeficiente $a$ en la canónica.',
    'Mezclar raíces con vértice.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado:
          'La forma canónica $f(x) = (x - 3)^2 + 5$ tiene vértice en:',
        opciones: ['$(3, 5)$', '$(-3, 5)$', '$(3, -5)$', '$(-3, -5)$'],
        correcta: 0,
        explicacion: 'En la canónica, vértice es $(x_v, y_v)$ con signos como aparecen.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Toda cuadrática tiene forma factorizada con raíces reales.',
        correcta: false,
        explicacion: 'No. Solo si $\\Delta \\ge 0$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'La forma canónica facilita identificar el vértice.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  visualizadorId: 'graficador-cuadratica',
  relacionados: ['funcion-cuadratica-grafico', 'factorizacion-cuadratica'],
  tags: ['cuadratica', 'canonica', 'factorizada', 'polinomica'],
};
