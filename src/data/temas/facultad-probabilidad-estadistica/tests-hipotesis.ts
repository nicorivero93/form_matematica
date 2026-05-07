import type { Tema } from '../tipos';

export const TESTS_HIPOTESIS: Tema = {
  slug: 'tests-hipotesis',
  titulo: 'Tests de hipótesis',
  anios: ['facultad-probabilidad-estadistica'],
  area: 'estadistica-probabilidad',
  nivel: 'avanzado',
  resumen:
    'Decisión entre dos hipótesis: $H_0$ (nula) vs $H_1$ (alternativa). Calculamos un estadístico y comparamos con un valor crítico.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Concepto', 'Significado'],
      filas: [
        ['$H_0$', 'Hipótesis nula (lo que asumimos por defecto)'],
        ['$H_1$', 'Alternativa (lo que queremos probar)'],
        ['$\\alpha$', 'Nivel de significación (prob. error tipo I)'],
        ['$p$-valor', 'Prob. de obtener algo tan extremo asumiendo $H_0$'],
        ['Error tipo I', 'Rechazar $H_0$ siendo verdadera'],
        ['Error tipo II', 'No rechazar $H_0$ siendo falsa'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Decisión',
      texto:
        'Si $p$-valor $< \\alpha$, rechazamos $H_0$. Si no, no la rechazamos (ojo: NO probamos $H_0$).',
    },
  ],
  ejemplos: [
    {
      titulo: 'Test simple',
      enunciado:
        'Una muestra da $\\bar X = 102$, $n = 25$, $\\sigma = 5$. Testear $H_0: \\mu = 100$ vs $H_1: \\mu \\neq 100$ al 5%.',
      pasos: [
        { explicacion: 'Estadístico: $Z = (102 - 100)/(5/5) = 2$.' },
        { explicacion: 'Valor crítico ($\\alpha = 0{,}05$, dos colas): $\\pm 1{,}96$.' },
        { explicacion: '$|Z| = 2 > 1{,}96$ → rechazamos $H_0$.' },
      ],
      resultado: 'Rechazamos $H_0$.',
    },
  ],
  erroresComunes: [
    'Confundir error tipo I con tipo II.',
    'Pensar que "no rechazar" es "aceptar".',
    'Olvidar si el test es de una o dos colas.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          '$p$-valor $< \\alpha$ implica rechazar $H_0$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Error tipo I = rechazar $H_0$ siendo cierta.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'No rechazar $H_0$ es lo mismo que probar $H_0$.',
        correcta: false,
        explicacion: 'Falso. Solo significa que la evidencia no es suficiente para rechazarla.',
      },
    ],
  },
  relacionados: ['estimacion-intervalos'],
  tags: ['tests', 'hipotesis', 'p-valor'],
};
