import type { Tema } from '../tipos';

export const MODELIZACION_FUNCIONES: Tema = {
  slug: 'modelizacion-funciones',
  titulo: 'Modelización con funciones',
  anios: ['secundaria-4'],
  area: 'funciones',
  nivel: 'avanzado',
  resumen:
    'Aplicar funciones a problemas reales: crecimiento poblacional (exponencial), trayectoria (cuadrática), tarifa (lineal a tramos).',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Modelizar es elegir el tipo de función que mejor representa la situación. Identificar la variable independiente, la dependiente, y la "forma" del comportamiento.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Crecimiento exponencial',
      enunciado:
        'Una población de bacterias se duplica cada hora. Si empezás con 100, ¿cuántas hay en 4 hs?',
      pasos: [
        { explicacion: 'Modelo: $N(t) = 100 \\cdot 2^t$.' },
        { explicacion: '$N(4) = 100 \\cdot 16 = 1600$.' },
      ],
      resultado: '1.600.',
    },
    {
      titulo: 'Movimiento de proyectil',
      enunciado:
        'La altura de una pelota a los $t$ segundos es $h(t) = -5t^2 + 20t$. ¿Cuándo cae?',
      pasos: [
        { explicacion: '$-5t^2 + 20t = 0 \\Rightarrow t(20 - 5t) = 0$.' },
        { explicacion: '$t = 0$ (lanzamiento) o $t = 4$.' },
      ],
      resultado: '4 segundos.',
    },
  ],
  erroresComunes: [
    'Elegir el tipo de función equivocado.',
    'Confundir variables.',
    'No interpretar las soluciones en el contexto.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'El crecimiento exponencial se modela con $a^x$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'El movimiento de un proyectil se modela bien con función cuadrática.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Una tarifa con dos tramos diferentes se modela con función a tramos.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['funcion-exponencial', 'funcion-cuadratica-introduccion'],
  tags: ['modelizacion', 'aplicaciones', 'funciones'],
};
