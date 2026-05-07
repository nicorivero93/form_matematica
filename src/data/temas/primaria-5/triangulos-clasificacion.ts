import type { Tema } from '../tipos';

export const TRIANGULOS_CLASIFICACION: Tema = {
  slug: 'triangulos-clasificacion',
  titulo: 'Clasificación de triángulos',
  anios: ['primaria-5'],
  area: 'geometria',
  nivel: 'intro',
  resumen:
    'Los triángulos se clasifican por sus lados (equilátero, isósceles, escaleno) y por sus ángulos (rectángulo, acutángulo, obtusángulo).',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Los triángulos se pueden clasificar de dos maneras distintas: según sus lados y según sus ángulos.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Por lados', 'Característica'],
      filas: [
        ['Equilátero', '3 lados iguales (y los 3 ángulos también).'],
        ['Isósceles', '2 lados iguales.'],
        ['Escaleno', 'Ningún lado igual.'],
      ],
    },
    {
      tipo: 'tabla',
      encabezados: ['Por ángulos', 'Característica'],
      filas: [
        ['Rectángulo', 'Tiene un ángulo recto (90°).'],
        ['Acutángulo', 'Los 3 ángulos son agudos (menores de 90°).'],
        ['Obtusángulo', 'Tiene un ángulo obtuso (mayor de 90°).'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      texto:
        'Un triángulo se puede describir con las dos clasificaciones: por ejemplo "isósceles rectángulo" tiene 2 lados iguales Y un ángulo recto.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Identificar un triángulo',
      enunciado:
        'Un triángulo tiene lados de 3 cm, 3 cm y 4 cm, y uno de sus ángulos mide 90°. ¿Cómo se clasifica?',
      pasos: [
        { explicacion: 'Por lados: 2 iguales (3 y 3) → isósceles.' },
        { explicacion: 'Por ángulos: tiene un ángulo recto → rectángulo.' },
        { explicacion: 'Combinando: isósceles rectángulo.' },
      ],
      resultado: 'Triángulo isósceles rectángulo.',
    },
    {
      titulo: 'Triángulo equilátero',
      enunciado: '¿Puede un triángulo equilátero ser obtusángulo?',
      pasos: [
        { explicacion: 'En un equilátero los 3 ángulos miden 60° cada uno.' },
        { explicacion: '60° es agudo, no obtuso.' },
        { explicacion: 'Conclusión: el equilátero siempre es acutángulo.' },
      ],
      resultado: 'No, siempre es acutángulo.',
    },
  ],
  erroresComunes: [
    'Confundir "rectángulo" la figura con "rectángulo" el tipo de triángulo. En el triángulo, rectángulo significa que tiene un ángulo de 90°.',
    'Pensar que isósceles y equilátero son lo mismo. El equilátero es un caso especial de isósceles.',
    'Olvidar que los 3 ángulos de un triángulo siempre suman 180°.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Un triángulo con lados de 5 cm, 7 cm y 9 cm es:',
        opciones: ['Equilátero', 'Isósceles', 'Escaleno', 'Rectángulo'],
        correcta: 2,
        explicacion: 'Ningún lado se repite → escaleno.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Un triángulo tiene ángulos de 30°, 60° y 90°. Es:',
        opciones: ['Acutángulo', 'Rectángulo', 'Obtusángulo', 'Equilátero'],
        correcta: 1,
        explicacion: 'Tiene un ángulo de 90° → rectángulo.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Todo triángulo equilátero también es isósceles.',
        correcta: true,
        explicacion:
          'Cierto. Si los 3 lados son iguales, también hay 2 iguales. El equilátero es un caso especial de isósceles.',
      },
    ],
  },
  relacionados: ['figuras-planas', 'angulos-introduccion', 'suma-angulos-triangulo'],
  tags: ['triangulos', 'clasificacion', 'equilatero', 'isosceles', 'escaleno', 'rectangulo'],
};
