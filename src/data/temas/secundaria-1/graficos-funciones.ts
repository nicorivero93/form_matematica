import type { Tema } from '../tipos';

export const GRAFICOS_FUNCIONES: Tema = {
  slug: 'graficos-funciones',
  titulo: 'Lectura de gráficos de funciones',
  anios: ['secundaria-1'],
  area: 'funciones',
  nivel: 'intermedio',
  resumen:
    'Cómo leer un gráfico: encontrar valores de la función, máximos, mínimos, ceros e intervalos donde crece o decrece.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Concepto', 'En el gráfico'],
      filas: [
        ['Cero', 'Donde el gráfico cruza el eje x ($y = 0$).'],
        ['Ordenada al origen', 'Donde el gráfico cruza el eje y ($x = 0$).'],
        ['Máximo', 'Punto más alto del gráfico.'],
        ['Mínimo', 'Punto más bajo del gráfico.'],
        ['Crece', 'Donde el gráfico sube de izquierda a derecha.'],
        ['Decrece', 'Donde el gráfico baja de izquierda a derecha.'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Encontrar f(x)',
      enunciado:
        'En un gráfico, cuando $x = 2$ el gráfico está a la altura $y = 5$. ¿Cuánto vale $f(2)$?',
      pasos: [{ explicacion: '$f(2)$ es el valor de y cuando x=2.' }],
      resultado: '$f(2) = 5$.',
    },
    {
      titulo: 'Encontrar ceros',
      enunciado:
        'Una función cruza el eje x en $x = -1$ y $x = 4$. ¿Cuáles son sus ceros?',
      pasos: [{ explicacion: 'Los ceros son los $x$ donde $f(x)=0$ → eje x.' }],
      resultado: '$x = -1$ y $x = 4$.',
    },
  ],
  erroresComunes: [
    'Confundir "cero de la función" con $f(0)$.',
    'Leer mal la altura del gráfico.',
    'Confundir crecimiento con valores positivos.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado: 'Un cero de una función es donde el gráfico cruza el eje x.',
        correcta: true,
        explicacion: 'Cierto: $f(x) = 0$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Si $f(x)$ es positiva, entonces el gráfico está por encima del eje x.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'La ordenada al origen es donde el gráfico cruza el eje x.',
        correcta: false,
        explicacion: 'Falso: cruza el eje y. Es $f(0)$.',
      },
    ],
  },
  visualizadorId: 'plano-cartesiano',
  relacionados: ['funcion-introduccion', 'plano-cartesiano-puntos'],
  tags: ['graficos', 'funciones', 'lectura', 'maximo', 'minimo'],
};
