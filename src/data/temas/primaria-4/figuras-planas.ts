import type { Tema } from '../tipos';

export const FIGURAS_PLANAS: Tema = {
  slug: 'figuras-planas',
  titulo: 'Figuras planas',
  anios: ['primaria-4'],
  area: 'geometria',
  nivel: 'intro',
  resumen:
    'Cuadrado, rectángulo, triángulo y círculo: cómo reconocerlos por sus lados y propiedades.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Las figuras planas son las formas que dibujamos en una hoja: no tienen volumen, solo largo y ancho. Las clasificamos según cuántos lados tienen y cómo son.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Figura', 'Lados', 'Características'],
      filas: [
        ['Triángulo', '3', 'Tres lados y tres ángulos.'],
        ['Cuadrado', '4', 'Cuatro lados iguales y cuatro ángulos rectos.'],
        ['Rectángulo', '4', 'Cuatro ángulos rectos. Lados iguales de a dos.'],
        ['Rombo', '4', 'Cuatro lados iguales, ángulos no necesariamente rectos.'],
        ['Círculo', '0 (curva)', 'No tiene lados rectos. Distancia constante al centro.'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Polígono',
      texto:
        'Un polígono es una figura cerrada hecha solo con líneas rectas. El triángulo, el cuadrado, el rectángulo y el rombo son polígonos. El círculo no, porque su contorno es curvo.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Los triángulos se pueden clasificar por sus lados:',
    },
    {
      tipo: 'lista',
      items: [
        '**Equilátero**: tres lados iguales.',
        '**Isósceles**: dos lados iguales.',
        '**Escaleno**: ningún lado igual.',
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Reconocer una figura',
      enunciado:
        'Tengo una figura con 4 lados, todos iguales, y los ángulos son rectos. ¿Qué figura es?',
      pasos: [
        { explicacion: '4 lados → es un cuadrilátero (polígono de 4 lados).' },
        { explicacion: 'Lados iguales → puede ser cuadrado o rombo.' },
        { explicacion: 'Ángulos rectos → es cuadrado.' },
      ],
      resultado: 'Cuadrado.',
    },
    {
      titulo: 'Diferencia entre cuadrado y rectángulo',
      enunciado:
        '¿Por qué un cuadrado también es un rectángulo, pero no todos los rectángulos son cuadrados?',
      pasos: [
        {
          explicacion:
            'Un rectángulo tiene 4 ángulos rectos. El cuadrado también, así que cumple la regla.',
        },
        {
          explicacion:
            'Pero el cuadrado además tiene los 4 lados iguales. No todos los rectángulos cumplen eso.',
        },
        {
          explicacion:
            'Conclusión: cuadrado = caso especial de rectángulo.',
        },
      ],
      resultado:
        'Todo cuadrado es rectángulo, pero no todo rectángulo es cuadrado.',
    },
  ],
  erroresComunes: [
    'Confundir cuadrado con rombo: ambos tienen 4 lados iguales, pero solo el cuadrado tiene ángulos rectos.',
    'Llamar "círculo" a una figura ovalada. Un círculo tiene todos los puntos a la misma distancia del centro.',
    'Olvidar que un triángulo siempre tiene exactamente 3 lados, ni uno más ni uno menos.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál de estas figuras tiene exactamente 3 lados?',
        opciones: ['Cuadrado', 'Rectángulo', 'Triángulo', 'Círculo'],
        correcta: 2,
        explicacion: 'El triángulo tiene 3 lados. Su nombre viene de "tri" (tres).',
      },
      {
        tipo: 'multiple',
        enunciado: 'Un triángulo con tres lados iguales se llama:',
        opciones: ['Escaleno', 'Isósceles', 'Equilátero', 'Rectángulo'],
        correcta: 2,
        explicacion: 'Equilátero: "equi" significa igual; tres lados iguales.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Todo cuadrado es un rectángulo.',
        correcta: true,
        explicacion: 'Sí, porque cumple lo de tener 4 ángulos rectos. Pero no todo rectángulo es cuadrado.',
      },
    ],
  },
  relacionados: ['angulos-introduccion', 'perimetro'],
  tags: ['geometria', 'figuras', 'cuadrado', 'rectangulo', 'triangulo', 'circulo', 'poligonos'],
};
