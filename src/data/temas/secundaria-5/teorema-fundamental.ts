import type { Tema } from '../tipos';

export const TEOREMA_FUNDAMENTAL: Tema = {
  slug: 'teorema-fundamental-calculo',
  titulo: 'Teorema fundamental del cálculo',
  anios: ['secundaria-5'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Conecta derivada e integral. Si $F$ es primitiva de $f$, entonces $\\int_a^b f = F(b) - F(a)$.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Es uno de los resultados más importantes de la matemática. Permite calcular integrales definidas usando antiderivadas, sin tener que sumar áreas a mano.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Enunciado',
      texto:
        'Si $f$ es continua en $[a, b]$ y $F$ es primitiva de $f$, entonces $\\int_a^b f(x) \\, dx = F(b) - F(a)$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Aplicación',
      enunciado: 'Calculá $\\int_1^3 2x \\, dx$.',
      pasos: [
        { explicacion: 'Primitiva: $x^2$.' },
        { explicacion: '$F(3) - F(1) = 9 - 1 = 8$.' },
      ],
      resultado: '8.',
    },
  ],
  erroresComunes: [
    'Confundir orden $F(b) - F(a)$.',
    'Aplicar a funciones discontinuas sin verificar.',
    'Usar la primitiva equivocada.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado: 'TFC permite calcular áreas usando primitivas.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'TFC vale para cualquier función.',
        correcta: false,
        explicacion: 'Falso, requiere continuidad.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Sin TFC habría que calcular áreas como límite de sumas.',
        correcta: true,
        explicacion: 'Cierto, mucho más laborioso.',
      },
    ],
  },
  visualizadorId: 'area-bajo-curva',
  relacionados: ['integral-definida', 'derivada-introduccion'],
  tags: ['TFC', 'analisis', 'fundamental'],
};
