import type { Tema } from '../tipos';

export const INTEGRAL_APLICACIONES: Tema = {
  slug: 'integral-aplicaciones',
  titulo: 'Aplicaciones de la integral',
  anios: ['secundaria-5'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Calcular áreas entre curvas, volúmenes de revolución, longitudes de arco. La integral aparece en física: distancia desde velocidad, trabajo, etc.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Área entre curvas',
      texto:
        'Si $f(x) \\ge g(x)$ en $[a, b]$, área = $\\int_a^b (f - g) \\, dx$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Área entre curvas',
      enunciado:
        '¿Área entre $y = x^2$ y $y = x$ en $[0, 1]$?',
      pasos: [
        { explicacion: 'En $[0,1]$, $x \\ge x^2$.' },
        { explicacion: '$\\int_0^1 (x - x^2) \\, dx = [x^2/2 - x^3/3]_0^1 = 1/2 - 1/3 = 1/6$.' },
      ],
      resultado: '1/6.',
    },
  ],
  erroresComunes: [
    'No identificar bien cuál curva está arriba.',
    'Errores en cálculo de primitivas.',
    'No considerar puntos donde se cortan.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Para área entre curvas, hay que integrar la diferencia (mayor menos menor).',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si $v(t)$ es velocidad, $\\int v \\, dt$ da distancia.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'La integral indefinida da un número.',
        correcta: false,
        explicacion: 'Falso. La definida sí, la indefinida da una función.',
      },
    ],
  },
  visualizadorId: 'area-bajo-curva',
  relacionados: ['integral-definida', 'integral-introduccion'],
  tags: ['integral', 'aplicaciones', 'area'],
};
