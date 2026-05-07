import type { Tema } from '../tipos';

export const ESTIMACION_INTERVALOS: Tema = {
  slug: 'estimacion-intervalos',
  titulo: 'Estimación puntual e intervalos de confianza',
  anios: ['facultad-probabilidad-estadistica'],
  area: 'estadistica-probabilidad',
  nivel: 'avanzado',
  resumen:
    'Estimador puntual: $\\bar X$ para estimar $\\mu$. Intervalo de confianza: rango $(L, U)$ con $P(\\mu \\in (L, U)) = 1 - \\alpha$.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'IC para $\\mu$ (varianza conocida)',
      texto:
        '$IC = \\bar X \\pm z_{\\alpha/2} \\cdot \\sigma/\\sqrt{n}$.',
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      titulo: 'Interpretación',
      texto:
        '"95% de confianza" NO significa que la probabilidad de que $\\mu$ esté en este intervalo particular sea 95%. Significa que si repetimos el procedimiento, el 95% de los IC capturarán a $\\mu$.',
    },
  ],
  ejemplos: [
    {
      titulo: 'IC al 95%',
      enunciado:
        'Muestra de 25 datos: $\\bar X = 100$, $\\sigma = 10$. IC al 95%.',
      pasos: [
        { explicacion: '$z_{0{,}025} = 1{,}96$.' },
        { explicacion: 'Margen: $1{,}96 \\cdot 10 / 5 = 3{,}92$.' },
        { explicacion: 'IC: $(96{,}08, 103{,}92)$.' },
      ],
      resultado: '$(96{,}08; 103{,}92)$.',
    },
  ],
  erroresComunes: [
    'Confundir nivel de confianza con probabilidad de que $\\mu$ esté en un IC particular.',
    'Usar $z$ cuando $\\sigma$ es desconocida (entonces va Student).',
    'Olvidar dividir por $\\sqrt n$.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Un IC al 95% siempre contiene a $\\mu$.',
        correcta: false,
        explicacion: 'Falso. El 5% no lo contiene.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Aumentar $n$ acota el margen del IC.',
        correcta: true,
        explicacion: 'Cierto: $1/\\sqrt n$ disminuye.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Aumentar el nivel de confianza (de 95% a 99%) ensancha el IC.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['teorema-central-limite', 'tests-hipotesis'],
  tags: ['estimacion', 'intervalo confianza'],
};
