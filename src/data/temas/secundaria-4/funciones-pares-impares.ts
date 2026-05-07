import type { Tema } from '../tipos';

export const FUNCIONES_PARES_IMPARES: Tema = {
  slug: 'funciones-pares-impares',
  titulo: 'Funciones pares e impares',
  anios: ['secundaria-4'],
  area: 'funciones',
  nivel: 'intermedio',
  resumen:
    'Función par: $f(-x) = f(x)$ (simétrica respecto al eje y). Función impar: $f(-x) = -f(x)$ (simétrica respecto al origen).',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Tipo', 'Característica', 'Ejemplos'],
      filas: [
        ['Par', '$f(-x) = f(x)$', '$x^2$, $\\cos x$, $|x|$'],
        ['Impar', '$f(-x) = -f(x)$', '$x$, $x^3$, $\\sin x$'],
        ['Ninguna', 'No cumple ninguna', '$x + 1$, $e^x$'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar',
      enunciado: '¿$f(x) = x^2 + 1$ es par, impar o ninguna?',
      pasos: [
        { explicacion: '$f(-x) = (-x)^2 + 1 = x^2 + 1 = f(x)$.' },
      ],
      resultado: 'Par.',
    },
  ],
  erroresComunes: [
    'Confundir par con positiva.',
    'Olvidar que existen funciones que no son pares ni impares.',
    'Calcular mal $f(-x)$.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '$f(x) = x^3$ es:',
        opciones: ['par', 'impar', 'ambas', 'ninguna'],
        correcta: 1,
        explicacion: '$(-x)^3 = -x^3 = -f(x)$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'El gráfico de una función par es simétrico respecto al eje y.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$f(x) = x + 2$ es par.',
        correcta: false,
        explicacion: 'Falso. $f(-x) = -x + 2 \\neq f(x)$.',
      },
    ],
  },
  relacionados: ['funcion-introduccion'],
  tags: ['funciones', 'paridad', 'simetria'],
};
