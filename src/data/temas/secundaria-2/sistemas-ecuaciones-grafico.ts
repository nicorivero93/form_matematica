import type { Tema } from '../tipos';

export const SISTEMAS_ECUACIONES_GRAFICO: Tema = {
  slug: 'sistemas-ecuaciones-grafico',
  titulo: 'Sistemas de ecuaciones: método gráfico',
  anios: ['secundaria-2'],
  area: 'algebra',
  nivel: 'intermedio',
  resumen:
    'Resolver un sistema graficando las dos rectas y leyendo el punto donde se cortan. Permite ver de un vistazo si hay solución única, ninguna o infinitas.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Cada ecuación lineal en dos variables ($ax + by = c$) representa una recta en el plano. La solución del sistema es el par $(x, y)$ que cumple las dos ecuaciones a la vez — es decir, el punto donde las dos rectas se intersecan.',
    },
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Pasos del método gráfico',
      texto:
        '1) Despejar $y$ en cada ecuación (forma $y = mx + b$). 2) Graficar ambas rectas en el mismo plano. 3) Leer las coordenadas del punto donde se cortan. 4) Verificar reemplazando en las ecuaciones originales.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Caso', 'Pendientes', 'Ordenadas', 'Solución'],
      filas: [
        ['Compatible determinado', 'distintas ($m_1 \\ne m_2$)', '—', 'Único punto $(x, y)$'],
        ['Incompatible (paralelas)', 'iguales ($m_1 = m_2$)', 'distintas ($b_1 \\ne b_2$)', 'No tiene solución'],
        ['Indeterminado (coincidentes)', 'iguales ($m_1 = m_2$)', 'iguales ($b_1 = b_2$)', 'Infinitas soluciones'],
      ],
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      titulo: 'Limitación',
      texto:
        'El método gráfico es excelente para entender QUÉ está pasando, pero si la solución no es entera (ej: $x = 1{,}3\\overline{3}$), leerla del gráfico es impreciso. En esos casos conviene usar sustitución, igualación o suma/resta.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Compatible determinado',
      enunciado: 'Resolvé gráficamente $\\begin{cases} y = 2x - 1 \\\\ y = -x + 5 \\end{cases}$',
      pasos: [
        { explicacion: 'Las dos ecuaciones ya están en forma $y = mx + b$.' },
        { explicacion: 'Recta 1: pendiente 2, ordenada $-1$. Pasa por $(0, -1)$ y $(1, 1)$.' },
        { explicacion: 'Recta 2: pendiente $-1$, ordenada $5$. Pasa por $(0, 5)$ y $(1, 4)$.' },
        { explicacion: 'Las dos rectas se cortan en $(2, 3)$. Verificación: en la 1ra $y = 2 \\cdot 2 - 1 = 3$ ✓ y en la 2da $y = -2 + 5 = 3$ ✓.' },
      ],
      resultado: 'La solución es $x = 2$, $y = 3$.',
    },
    {
      titulo: 'Sistema incompatible (paralelas)',
      enunciado: 'Resolvé $\\begin{cases} y = 2x + 1 \\\\ y = 2x - 3 \\end{cases}$',
      pasos: [
        { explicacion: 'Las dos rectas tienen la misma pendiente ($m = 2$) pero distinta ordenada al origen.' },
        { explicacion: 'Son paralelas — nunca se cortan.' },
      ],
      resultado: 'El sistema no tiene solución (es incompatible).',
    },
    {
      titulo: 'Sistema indeterminado (coincidentes)',
      enunciado: 'Resolvé $\\begin{cases} 2x + y = 4 \\\\ 4x + 2y = 8 \\end{cases}$',
      pasos: [
        { explicacion: 'Despejamos $y$ en la 1ra: $y = -2x + 4$.' },
        { explicacion: 'Despejamos $y$ en la 2da: $2y = -4x + 8 \\Rightarrow y = -2x + 4$.' },
        { explicacion: 'Misma pendiente y misma ordenada → es la MISMA recta.' },
      ],
      resultado: 'Infinitas soluciones (todos los puntos de la recta $y = -2x + 4$).',
    },
  ],
  erroresComunes: [
    'Graficar mal una recta (confundir pendiente con ordenada o invertir el signo).',
    'Leer mal las coordenadas del punto de intersección porque el gráfico está apretado.',
    'No verificar la solución reemplazando en ambas ecuaciones.',
    'Decir "no tiene solución" cuando en realidad las rectas se cortan fuera del rango graficado.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Si dos rectas tienen la misma pendiente y la misma ordenada al origen, el sistema es:',
        opciones: ['Compatible determinado', 'Incompatible', 'Indeterminado', 'No es un sistema'],
        correcta: 2,
        explicacion: 'Son la misma recta — todos los puntos son solución, hay infinitas.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: 'Dos rectas paralelas tienen la misma pendiente y distinta ordenada al origen.',
        correcta: true,
        explicacion: 'Cierto. Si tuvieran la misma ordenada también, serían la misma recta.',
      },
      {
        tipo: 'multiple',
        enunciado: 'En el sistema $\\begin{cases} y = x + 1 \\\\ y = 3 - x \\end{cases}$, ¿en qué punto se cortan las rectas?',
        opciones: ['$(1, 2)$', '$(0, 1)$', '$(2, 3)$', '$(1, 3)$'],
        correcta: 0,
        explicacion: 'Igualando: $x + 1 = 3 - x \\Rightarrow 2x = 2 \\Rightarrow x = 1$, y = 2.',
      },
    ],
  },
  visualizadorId: 'sistema-grafico',
  relacionados: ['sistemas-ecuaciones', 'funcion-lineal-completa', 'rectas-paralelas-perpendiculares'],
  tags: ['sistemas', 'ecuaciones', 'metodo grafico', 'rectas', 'interseccion'],
};
