import type { Tema } from '../tipos';

export const ECUACIONES_PRIMER_GRADO_SIMPLES: Tema = {
  slug: 'ecuaciones-primer-grado-simples',
  titulo: 'Ecuaciones simples de primer grado',
  anios: ['primaria-7'],
  area: 'algebra',
  nivel: 'intermedio',
  resumen:
    'Resolver ecuaciones donde aparece una sola incógnita. La idea: "despejar" la $x$ haciendo lo mismo a ambos lados.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Ecuación',
      texto:
        'Una ecuación es una igualdad con una incógnita (letra). Resolver es encontrar el valor de la incógnita que hace verdadera la igualdad.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Regla de oro',
      texto:
        'Lo que hagas a un lado del igual, tenés que hacerlo al otro. Sumar, restar, multiplicar o dividir: el balance se mantiene.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Mover términos: lo que está sumando pasa restando, y al revés.',
        'Al final, lo que está multiplicando pasa dividiendo, y al revés.',
        'Verificar reemplazando el valor en la ecuación original.',
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Suma',
      enunciado: 'Resolvé $x + 5 = 12$.',
      pasos: [
        { explicacion: 'Pasamos el 5 restando: $x = 12 - 5$.' },
        { explicacion: '$x = 7$.' },
        { explicacion: 'Verificación: $7 + 5 = 12$ ✓.' },
      ],
      resultado: '$x = 7$.',
    },
    {
      titulo: 'Multiplicación',
      enunciado: 'Resolvé $3x = 21$.',
      pasos: [
        { explicacion: 'El 3 está multiplicando, pasa dividiendo: $x = 21 \\div 3$.' },
        { explicacion: '$x = 7$.' },
      ],
      resultado: '$x = 7$.',
    },
    {
      titulo: 'Combinación',
      enunciado: 'Resolvé $2x + 3 = 11$.',
      pasos: [
        { explicacion: 'Pasamos el 3 restando: $2x = 11 - 3$.' },
        { explicacion: '$2x = 8$.' },
        { explicacion: 'Pasamos el 2 dividiendo: $x = 8 \\div 2 = 4$.' },
        { explicacion: 'Verificación: $2 \\times 4 + 3 = 8 + 3 = 11$ ✓.' },
      ],
      resultado: '$x = 4$.',
    },
  ],
  erroresComunes: [
    'No cambiar el signo cuando se pasa un término al otro lado.',
    'Pasar el coeficiente sumando/restando en vez de dividiendo.',
    'No verificar al final.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Resolvé $x + 8 = 20$. (Ingresá solo el número.)',
        respuesta: 12,
        explicacion: 'x = 20 - 8 = 12.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Resolvé $5x = 35$.',
        respuesta: 7,
        explicacion: 'x = 35 ÷ 5 = 7.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Resolvé $4x - 2 = 18$.',
        respuesta: 5,
        explicacion: '4x = 20, x = 5.',
      },
    ],
  },
  relacionados: ['lenguaje-algebraico', 'orden-operaciones'],
  tags: ['ecuaciones', 'primer grado', 'algebra', 'incognita'],
};
