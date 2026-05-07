import type { Tema } from '../tipos';

export const SISTEMAS_APLICACIONES: Tema = {
  slug: 'sistemas-aplicaciones',
  titulo: 'Aplicaciones de sistemas',
  anios: ['secundaria-2'],
  area: 'algebra',
  nivel: 'avanzado',
  resumen:
    'Resolver problemas que llevan a un sistema de dos ecuaciones con dos incógnitas.',
  teoria: [
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Identificar dos cantidades desconocidas y asignarles letras (típicamente $x$ e $y$).',
        'Traducir las dos relaciones del enunciado a dos ecuaciones.',
        'Resolver con sustitución, igualación o eliminación.',
        'Verificar las soluciones en el contexto original.',
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Edades',
      enunciado:
        'Hace 5 años, María tenía el doble de la edad de su hermano. Ahora juntos tienen 47. ¿Qué edad tienen?',
      pasos: [
        { explicacion: 'Sea $m$ = edad María hoy, $h$ = edad hermano hoy.' },
        { explicacion: 'Ecuación 1: $m + h = 47$.' },
        { explicacion: 'Hace 5 años: $m - 5 = 2(h - 5) \\Rightarrow m = 2h - 5$.' },
        { explicacion: 'Sustituyo: $2h - 5 + h = 47 \\Rightarrow 3h = 52 \\Rightarrow h = 17{,}33$ (no entero).' },
        {
          explicacion:
            '(Para tener números limpios, usemos otro: hace 5 años María tenía 3 veces. Ahora suman 50.)',
        },
        { explicacion: 'Ecs: $m + h = 50$, $m - 5 = 3(h - 5) = 3h - 15 \\Rightarrow m = 3h - 10$.' },
        { explicacion: 'Sustituyo: $3h - 10 + h = 50 \\Rightarrow 4h = 60 \\Rightarrow h = 15$, $m = 35$.' },
      ],
      resultado: 'María 35, hermano 15.',
    },
  ],
  erroresComunes: [
    'No definir bien las variables.',
    'Plantear solo una ecuación cuando hay dos relaciones.',
    'Olvidar verificar la respuesta en el problema.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Suman 30, su diferencia es 10. ¿Cuál es el mayor?',
        respuesta: 20,
        explicacion: '$x + y = 30$, $x - y = 10 \\Rightarrow x = 20$.',
      },
      {
        tipo: 'numerica',
        enunciado:
          '5 lápices y 3 cuadernos cuestan $1.300. 2 lápices y 2 cuadernos cuestan $700. ¿Cuánto cuesta un lápiz?',
        respuesta: 100,
        explicacion: 'L=100, C=250 (resolvés sistema).',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'Para problemas con dos incógnitas se necesitan dos ecuaciones independientes.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['sistemas-ecuaciones', 'problemas-algebra'],
  tags: ['sistemas', 'problemas', 'aplicaciones'],
};
