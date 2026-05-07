import type { Tema } from '../tipos';

export const METODOS_INTEGRACION: Tema = {
  slug: 'metodos-integracion',
  titulo: 'Métodos de integración: sustitución y partes',
  anios: ['facultad-analisis-1'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Sustitución: $\\int f(g(x)) g\'(x) \\, dx = \\int f(u) \\, du$. Por partes: $\\int u \\, dv = uv - \\int v \\, du$.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Sustitución',
      texto:
        'Si $u = g(x)$, entonces $du = g\'(x) \\, dx$ y $\\int f(g(x)) g\'(x) \\, dx = \\int f(u) \\, du$.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Por partes',
      texto:
        'De la regla del producto: $\\int u \\, dv = uv - \\int v \\, du$. Útil cuando aparece producto de polinomio por trigonométrica/exponencial/log.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'ILATE',
      texto:
        'Para elegir $u$ en partes: Inversa trig, Logaritmo, Algebraica (polinomio), Trigonométrica, Exponencial. Tomá $u$ como la primera que aparezca.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Sustitución',
      enunciado: 'Calculá $\\int 2x \\cdot e^{x^2} \\, dx$.',
      pasos: [
        { explicacion: 'Tomamos $u = x^2 \\Rightarrow du = 2x \\, dx$.' },
        { explicacion: '$\\int e^u \\, du = e^u + C = e^{x^2} + C$.' },
      ],
      resultado: '$e^{x^2} + C$.',
    },
    {
      titulo: 'Por partes',
      enunciado: 'Calculá $\\int x \\cos x \\, dx$.',
      pasos: [
        { explicacion: '$u = x$, $dv = \\cos x \\, dx$. $du = dx$, $v = \\sin x$.' },
        { explicacion: '$\\int x \\cos x \\, dx = x \\sin x - \\int \\sin x \\, dx = x \\sin x + \\cos x + C$.' },
      ],
      resultado: '$x \\sin x + \\cos x + C$.',
    },
  ],
  erroresComunes: [
    'Olvidar volver a la variable original al final de la sustitución.',
    'Elegir mal $u$ en partes (siguiendo ILATE evitás la mayoría).',
    'No incluir la constante $+C$.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En sustitución, $du$ debe contener todo lo que está como factor con $dx$.',
        correcta: true,
        explicacion: 'Idea: la sustitución solo funciona si "absorbe" todo lo demás.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          '$\\int x e^x \\, dx = x e^x - e^x + C$.',
        correcta: true,
        explicacion: 'Por partes con $u = x$, $dv = e^x dx$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En $\\int \\ln x \\, dx$ usamos partes con $u = \\ln x$, $dv = dx$.',
        correcta: true,
        explicacion: 'Truco clásico: el "1" se trata como $dv$.',
      },
    ],
  },
  relacionados: ['integral-riemann', 'integral-impropia'],
  tags: ['integracion', 'sustitucion', 'partes'],
};
