import type { Tema } from '../tipos';

export const TRINOMIO_CUADRADO_PERFECTO: Tema = {
  slug: 'trinomio-cuadrado-perfecto',
  titulo: 'Factorización: trinomio cuadrado perfecto',
  anios: ['secundaria-2'],
  area: 'algebra',
  nivel: 'intermedio',
  resumen:
    'Un trinomio de la forma $a^2 \\pm 2ab + b^2$ se factoriza como un cuadrado: $(a \\pm b)^2$. Reconocerlo evita usar la resolvente innecesariamente.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Fórmulas',
      texto:
        '$a^2 + 2ab + b^2 = (a + b)^2$ y $a^2 - 2ab + b^2 = (a - b)^2$. Son los productos notables del cuadrado de un binomio escritos al revés.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Un trinomio (tres términos) es cuadrado perfecto cuando dos de sus términos son cuadrados positivos y el tercero es el doble producto (con signo) de las bases de esos cuadrados.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Receta para identificarlo',
      texto:
        '1) Encontrá los dos términos que sean cuadrados perfectos. 2) Calculá $\\sqrt{}$ de cada uno → bases $a$ y $b$. 3) Verificá: ¿el tercer término es $\\pm 2ab$? Si SÍ → es cuadrado perfecto. Si NO → no se puede factorizar así.',
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      titulo: 'El signo del término del medio',
      texto:
        'El signo del término del medio decide el signo del binomio: si es $+2ab$ → $(a + b)^2$. Si es $-2ab$ → $(a - b)^2$. Los cuadrados ($a^2$ y $b^2$) son siempre positivos.',
    },
  ],
  formulasClave: [
    {
      nombre: 'TCP suma',
      latex: 'a^2 + 2ab + b^2 = (a + b)^2',
      variables: [
        { simbolo: 'a', nombre: 'Primera base', desc: 'Raíz cuadrada del primer cuadrado.' },
        { simbolo: 'b', nombre: 'Segunda base', desc: 'Raíz cuadrada del segundo cuadrado.' },
      ],
    },
    {
      nombre: 'TCP resta',
      latex: 'a^2 - 2ab + b^2 = (a - b)^2',
      variables: [
        { simbolo: 'a', nombre: 'Primera base', desc: 'Raíz cuadrada del primer cuadrado.' },
        { simbolo: 'b', nombre: 'Segunda base', desc: 'Raíz cuadrada del segundo cuadrado.' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Caso simple',
      enunciado: 'Factorizá $x^2 + 6x + 9$.',
      pasos: [
        { explicacion: 'Bases candidatas: $\\sqrt{x^2} = x$ y $\\sqrt{9} = 3$.' },
        { explicacion: 'Doble producto: $2 \\cdot x \\cdot 3 = 6x$. ✓ Coincide con el término del medio.' },
        { explicacion: 'Como el término del medio es POSITIVO, queda $(x + 3)^2$.' },
        { explicacion: 'Verificación: $(x + 3)^2 = x^2 + 6x + 9$ ✓.' },
      ],
      resultado: '$x^2 + 6x + 9 = (x + 3)^2$.',
    },
    {
      titulo: 'Con signo negativo',
      enunciado: 'Factorizá $4x^2 - 12x + 9$.',
      pasos: [
        { explicacion: 'Bases: $\\sqrt{4x^2} = 2x$ y $\\sqrt{9} = 3$.' },
        { explicacion: 'Doble producto: $2 \\cdot 2x \\cdot 3 = 12x$. ✓ Coincide en valor absoluto.' },
        { explicacion: 'Como el término del medio es NEGATIVO, queda $(2x - 3)^2$.' },
      ],
      resultado: '$4x^2 - 12x + 9 = (2x - 3)^2$.',
    },
    {
      titulo: 'Verificar que NO es TCP',
      enunciado: '¿$x^2 + 5x + 4$ es trinomio cuadrado perfecto?',
      pasos: [
        { explicacion: 'Bases candidatas: $\\sqrt{x^2} = x$ y $\\sqrt{4} = 2$.' },
        { explicacion: 'Doble producto: $2 \\cdot x \\cdot 2 = 4x$. NO coincide con $5x$.' },
        { explicacion: 'No es TCP. Se factoriza con otro método (ej: encontrar dos números que sumen 5 y multipliquen 4 → 1 y 4).' },
      ],
      resultado: 'No es TCP. Factorizado por otro método: $(x + 1)(x + 4)$.',
    },
  ],
  erroresComunes: [
    'Confundir $a^2 + b^2$ con $(a + b)^2$ — falta el doble producto $2ab$.',
    'Olvidar verificar que el término del medio sea EXACTAMENTE $\\pm 2ab$, no cualquier número.',
    'Equivocarse en el signo del binomio (el signo del medio manda).',
    'Aplicar la fórmula a un trinomio que no es TCP (ej: $x^2 + 5x + 4$, donde el del medio es $5x \\ne 4x$).',
    'Olvidar elevar el coeficiente: $4x^2$ es $(2x)^2$ no $(4x)^2$.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: 'Factorizá $x^2 - 10x + 25$.',
        opciones: ['$(x - 5)^2$', '$(x + 5)^2$', '$(x - 5)(x + 5)$', 'No es factorizable'],
        correcta: 0,
        explicacion: 'Bases $x$ y $5$, doble producto $10x$ con signo negativo → $(x - 5)^2$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$x^2 + 4x + 4 = (x + 2)^2$.',
        correcta: true,
        explicacion: 'Bases $x$ y $2$, doble producto $4x$ ✓.',
      },
      {
        tipo: 'multiple',
        enunciado: '¿Cuál de estos NO es trinomio cuadrado perfecto?',
        opciones: ['$x^2 + 8x + 16$', '$x^2 - 6x + 9$', '$x^2 + 7x + 12$', '$9x^2 - 6x + 1$'],
        correcta: 2,
        explicacion: 'En $x^2 + 7x + 12$, el doble producto debería ser $2 \\cdot x \\cdot \\sqrt{12} \\approx 6{,}93x$, no $7x$.',
      },
    ],
  },
  relacionados: ['productos-notables', 'factorizacion-comun', 'diferencia-cuadrados', 'polinomios-multiplicacion'],
  tags: ['factorizacion', 'trinomio cuadrado perfecto', 'productos notables', 'algebra'],
};
