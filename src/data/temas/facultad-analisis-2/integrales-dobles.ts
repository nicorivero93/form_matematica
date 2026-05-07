import type { Tema } from '../tipos';

export const INTEGRALES_DOBLES: Tema = {
  slug: 'integrales-dobles',
  titulo: 'Integrales dobles',
  anios: ['facultad-analisis-2'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    '$\\iint_R f(x, y) \\, dA$ representa el volumen bajo el gráfico de $f$ sobre la región $R$. Se calcula como integral iterada (Fubini).',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Teorema de Fubini',
      texto:
        'Si $f$ es continua en $R = [a, b] \\times [c, d]$: $\\iint_R f = \\int_a^b \\int_c^d f(x, y) \\, dy \\, dx = \\int_c^d \\int_a^b f \\, dx \\, dy$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Calcular',
      enunciado:
        '$\\int_0^1 \\int_0^2 (x + y) \\, dy \\, dx$.',
      pasos: [
        { explicacion: 'Integral interior: $\\int_0^2 (x + y) \\, dy = 2x + 2$.' },
        { explicacion: 'Integral exterior: $\\int_0^1 (2x + 2) \\, dx = 1 + 2 = 3$.' },
      ],
      resultado: '3.',
    },
  ],
  erroresComunes: [
    'Confundir orden de integración.',
    'Olvidar evaluar los límites en cada paso.',
    'Tomar región cuando el dominio no es rectangular sin describirla bien.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Por Fubini, en regiones rectangulares se puede cambiar el orden de integración.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Una integral doble siempre se puede separar en producto de simples.',
        correcta: false,
        explicacion: 'Solo si $f(x, y) = g(x) h(y)$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'El área de $R$ es $\\iint_R 1 \\, dA$.',
        correcta: true,
        explicacion: 'Cierto, integrando 1.',
      },
    ],
  },
  relacionados: ['cambio-variables', 'derivadas-parciales'],
  tags: ['integrales dobles', 'fubini'],
};
