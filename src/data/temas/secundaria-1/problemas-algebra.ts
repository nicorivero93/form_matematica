import type { Tema } from '../tipos';

export const PROBLEMAS_ALGEBRA: Tema = {
  slug: 'problemas-algebra',
  titulo: 'Problemas con ecuaciones',
  anios: ['secundaria-1'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Traducir un problema enunciado a una ecuación, resolverla y verificar el resultado.',
  teoria: [
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Leer el enunciado y entender qué se pregunta.',
        'Asignar una variable (típicamente $x$) a lo desconocido.',
        'Traducir las relaciones del enunciado a una ecuación.',
        'Resolver la ecuación.',
        'Verificar reemplazando en el problema original.',
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Edades',
      enunciado:
        'La edad de Pedro es el doble de la de Juan. Entre los dos suman 36 años. ¿Cuántos años tiene cada uno?',
      pasos: [
        { explicacion: 'Sea $x$ = edad de Juan. Pedro tiene $2x$.' },
        { explicacion: '$x + 2x = 36 \\Rightarrow 3x = 36 \\Rightarrow x = 12$.' },
        { explicacion: 'Juan: 12. Pedro: 24.' },
      ],
      resultado: 'Juan 12, Pedro 24.',
    },
    {
      titulo: 'Comprar y descuento',
      enunciado:
        'Un libro tenía un precio. Después de un descuento del 20%, costó $1.600. ¿Cuál era el precio original?',
      pasos: [
        { explicacion: 'Pagué el 80% del original: $0{,}80 x = 1600$.' },
        { explicacion: '$x = 1600 / 0{,}80 = 2000$.' },
      ],
      resultado: '$2.000.',
    },
  ],
  erroresComunes: [
    'No definir bien la variable.',
    'Traducir mal las relaciones (confundir "más que" con "menos que").',
    'Olvidar verificar.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'El doble de un número más 5 es 23. ¿Cuál es el número?',
        respuesta: 9,
        explicacion: '$2x + 5 = 23 \\Rightarrow x = 9$.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Un padre tiene 3 veces la edad de su hijo. Entre los dos suman 48 años. ¿Cuál es la edad del hijo?',
        respuesta: 12,
        explicacion: '$x + 3x = 48 \\Rightarrow x = 12$.',
        unidad: 'años',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Si a un número le sumás 7, obtenés el doble del número. ¿Cuál es?',
        respuesta: 7,
        explicacion: '$x + 7 = 2x \\Rightarrow x = 7$.',
      },
    ],
  },
  relacionados: ['ecuaciones-primer-grado', 'lenguaje-algebraico-avanzado'],
  tags: ['problemas', 'ecuaciones', 'modelizacion'],
};
