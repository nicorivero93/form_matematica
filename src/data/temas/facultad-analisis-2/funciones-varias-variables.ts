import type { Tema } from '../tipos';

export const FUNCIONES_VARIAS_VARIABLES: Tema = {
  slug: 'funciones-varias-variables',
  titulo: 'Funciones de varias variables',
  anios: ['facultad-analisis-2'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    'Funciones $f: \\mathbb{R}^n \\to \\mathbb{R}$. Dominio en $\\mathbb{R}^n$, imagen en $\\mathbb{R}$. Curvas y superficies de nivel.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Una función $f(x, y)$ asigna a cada punto del plano un número real. Su gráfico vive en $\\mathbb{R}^3$.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Curva de nivel',
      texto:
        'El conjunto $\\{(x, y) : f(x, y) = c\\}$ es una curva de nivel. Como un mapa topográfico: las "alturas" iguales se conectan.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Curvas de nivel',
      enunciado: '¿Curvas de nivel de $f(x, y) = x^2 + y^2$?',
      pasos: [
        { explicacion: '$x^2 + y^2 = c$ son circunferencias centradas en el origen, radio $\\sqrt c$.' },
      ],
      resultado: 'Circunferencias concéntricas.',
    },
  ],
  erroresComunes: [
    'Confundir gráfico ($\\mathbb{R}^3$) con dominio ($\\mathbb{R}^2$).',
    'Olvidar que las curvas de nivel viven en el dominio.',
    'No identificar el rango.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'El gráfico de $f: \\mathbb{R}^2 \\to \\mathbb{R}$ es una superficie en $\\mathbb{R}^3$.',
        correcta: true,
        explicacion: 'Cierto: $\\{(x, y, f(x,y))\\}$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Las curvas de nivel de $f(x, y) = x + y$ son rectas.',
        correcta: true,
        explicacion: 'Sí: $x + y = c$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Una función de tres variables tiene "superficies de nivel" en $\\mathbb{R}^3$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['derivadas-parciales', 'limites-varias-variables'],
  tags: ['varias variables', 'curvas de nivel'],
};
