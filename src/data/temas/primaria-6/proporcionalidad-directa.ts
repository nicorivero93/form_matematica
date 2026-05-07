import type { Tema } from '../tipos';

export const PROPORCIONALIDAD_DIRECTA: Tema = {
  slug: 'proporcionalidad-directa',
  titulo: 'Proporcionalidad directa y regla de tres',
  anios: ['primaria-6'],
  area: 'numeros-y-operaciones',
  nivel: 'intermedio',
  resumen:
    'Cuando dos cantidades crecen juntas en la misma proporción. La regla de tres simple para resolver problemas.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Magnitudes directamente proporcionales',
      texto:
        'Dos magnitudes son directamente proporcionales si al multiplicar una por un número, la otra se multiplica por el mismo número. Si una se duplica, la otra también.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Ejemplos: precio total y cantidad de unidades, distancia y tiempo a velocidad constante, ingredientes en una receta y porciones.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Regla de tres simple',
      texto:
        'Si conocemos tres datos y queremos encontrar el cuarto: multiplicamos los dos que están "en cruz" y dividimos por el que queda.',
    },
    {
      tipo: 'latex',
      latex:
        '\\begin{array}{lcl} A & \\to & B \\\\ C & \\to & x \\end{array} \\quad \\Longrightarrow \\quad x = \\dfrac{B \\times C}{A}',
      display: true,
    },
  ],
  formulasClave: [
    {
      nombre: 'Regla de tres directa',
      latex: 'x = \\dfrac{B \\times C}{A}',
      variables: [
        { simbolo: 'A, B', nombre: 'datos conocidos del primer caso', desc: '"si A vale B"' },
        { simbolo: 'C', nombre: 'dato del segundo caso', desc: '' },
        { simbolo: 'x', nombre: 'incógnita', desc: 'lo que querés averiguar' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Aplicación clásica',
      enunciado:
        '3 kg de pan cuestan $1.500. ¿Cuánto cuestan 5 kg?',
      pasos: [
        { explicacion: 'Magnitudes directamente proporcionales: más kg, más precio.' },
        { explicacion: 'Planteamos: 3 kg → $1.500, 5 kg → $x.' },
        { explicacion: '$x = \\dfrac{1500 \\times 5}{3} = \\dfrac{7500}{3} = 2500$.' },
      ],
      resultado: '$2.500.',
    },
    {
      titulo: 'Receta',
      enunciado:
        'Una receta para 4 personas usa 200 g de harina. ¿Cuánta harina se necesita para 6 personas?',
      pasos: [
        { explicacion: '4 personas → 200 g; 6 personas → x.' },
        { explicacion: '$x = \\dfrac{200 \\times 6}{4} = 300$.' },
      ],
      resultado: '300 g.',
    },
  ],
  erroresComunes: [
    'Aplicar regla de tres cuando las magnitudes no son proporcionales (por ejemplo, edad y altura).',
    'Multiplicar y dividir mal en la fórmula. La fórmula es: cruzados arriba, el de al lado abajo.',
    'No revisar si el resultado tiene sentido (si es muy grande o muy chico).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          '2 kg de yerba cuestan $1.000. ¿Cuánto cuestan 5 kg? (escribí solo el número)',
        respuesta: 2500,
        explicacion: '(1000 × 5) ÷ 2 = 2.500.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Si 4 cuadernos cuestan $800, ¿cuánto cuesta 1?',
        respuesta: 200,
        explicacion: '800 ÷ 4 = 200.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Si 5 lápices cuestan $250, entonces 10 lápices cuestan $500.',
        correcta: true,
        explicacion: 'El doble de lápices cuesta el doble: directa proporcionalidad.',
      },
    ],
  },
  relacionados: ['porcentaje', 'fracciones-multiplicacion'],
  tags: ['proporcionalidad', 'regla de tres', 'directa'],
};
