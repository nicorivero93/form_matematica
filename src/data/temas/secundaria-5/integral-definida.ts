import type { Tema } from '../tipos';

export const INTEGRAL_DEFINIDA: Tema = {
  slug: 'integral-definida',
  titulo: 'Integral definida y área bajo curva',
  anios: ['secundaria-5'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'La integral definida $\\int_a^b f(x) \\, dx$ es el área (con signo) entre la curva y el eje x desde $a$ hasta $b$.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Teorema fundamental del cálculo',
      texto:
        '$\\int_a^b f(x) \\, dx = F(b) - F(a)$, donde $F$ es una primitiva de $f$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Área',
      enunciado:
        'Calculá $\\int_0^2 x^2 \\, dx$.',
      pasos: [
        { explicacion: 'Primitiva: $x^3/3$.' },
        { explicacion: '$F(2) - F(0) = 8/3 - 0 = 8/3$.' },
      ],
      resultado: '$8/3 \\approx 2{,}67$.',
    },
  ],
  erroresComunes: [
    'Olvidar que el resultado puede ser negativo si $f < 0$.',
    'Confundir orden $F(b) - F(a)$.',
    'Calcular mal la primitiva.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Calculá $\\int_0^3 2x \\, dx$.',
        respuesta: 9,
        explicacion: '$F = x^2$. $F(3) - F(0) = 9$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'La integral definida puede ser negativa.',
        correcta: true,
        explicacion: 'Cierto, si $f < 0$ en el intervalo.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$\\int_a^a f(x) \\, dx = 0$.',
        correcta: true,
        explicacion: 'Cierto, intervalo de longitud 0.',
      },
    ],
  },
  visualizadorId: 'area-bajo-curva',
  relacionados: ['integral-introduccion'],
  tags: ['integral definida', 'area', 'TFC'],
};
