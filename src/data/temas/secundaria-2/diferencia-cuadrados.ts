import type { Tema } from '../tipos';

export const DIFERENCIA_CUADRADOS: Tema = {
  slug: 'diferencia-cuadrados',
  titulo: 'Factorización: diferencia de cuadrados',
  anios: ['secundaria-2'],
  area: 'algebra',
  nivel: 'intermedio',
  resumen:
    'Una diferencia de dos cuadrados se factoriza siempre como producto de la suma por la diferencia de sus bases: $a^2 - b^2 = (a + b)(a - b)$.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Fórmula',
      texto:
        'Si tenés una RESTA de dos términos que son cuadrados perfectos, podés escribirla como producto: $a^2 - b^2 = (a + b)(a - b)$.',
    },
    {
      tipo: 'parrafo',
      texto:
        'La fórmula sale de un producto notable al revés. Si desarrollás $(a + b)(a - b)$ obtenés $a^2 - ab + ab - b^2 = a^2 - b^2$. Los términos cruzados se cancelan.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: '¿Cómo identificarla?',
      texto:
        'Pregúntate: (1) ¿hay dos términos? (2) ¿están restando? (3) ¿son ambos cuadrados perfectos? Si las tres respuestas son sí → es diferencia de cuadrados.',
    },
    {
      tipo: 'callout',
      variante: 'cuidado',
      titulo: 'No funciona con suma',
      texto:
        '$a^2 + b^2$ NO se factoriza con números reales. La fórmula vale solo para la RESTA. Por ejemplo, $x^2 + 9$ no se puede factorizar (en reales).',
    },
  ],
  formulasClave: [
    {
      nombre: 'Diferencia de cuadrados',
      latex: 'a^2 - b^2 = (a + b)(a - b)',
      variables: [
        { simbolo: 'a', nombre: 'Base del primer cuadrado', desc: 'Raíz cuadrada del primer término.' },
        { simbolo: 'b', nombre: 'Base del segundo cuadrado', desc: 'Raíz cuadrada del segundo término.' },
      ],
      cuandoUsar: 'Cuando ves una resta de dos cuadrados perfectos.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Caso clásico',
      enunciado: 'Factorizá $x^2 - 25$.',
      pasos: [
        { explicacion: 'Identifico las bases: $\\sqrt{x^2} = x$ y $\\sqrt{25} = 5$.' },
        { explicacion: 'Aplico la fórmula con $a = x$ y $b = 5$.' },
        { explicacion: 'Verifico: $(x + 5)(x - 5) = x^2 - 5x + 5x - 25 = x^2 - 25$ ✓.' },
      ],
      resultado: '$x^2 - 25 = (x + 5)(x - 5)$.',
    },
    {
      titulo: 'Con coeficiente',
      enunciado: 'Factorizá $9x^2 - 16$.',
      pasos: [
        { explicacion: '$9x^2 = (3x)^2$ y $16 = 4^2$.' },
        { explicacion: 'Bases: $a = 3x$ y $b = 4$.' },
        { explicacion: 'Aplico fórmula.' },
      ],
      resultado: '$9x^2 - 16 = (3x + 4)(3x - 4)$.',
    },
    {
      titulo: 'Con dos variables',
      enunciado: 'Factorizá $x^4 - y^2$.',
      pasos: [
        { explicacion: '$x^4 = (x^2)^2$ y $y^2 = y^2$.' },
        { explicacion: 'Bases: $a = x^2$ y $b = y$.' },
      ],
      resultado: '$x^4 - y^2 = (x^2 + y)(x^2 - y)$.',
    },
  ],
  erroresComunes: [
    'Aplicar la fórmula con sumas: $a^2 + b^2 \\ne (a + b)^2$ ni $(a + b)(a - b)$.',
    'Olvidar elevar el coeficiente: $9x^2$ es $(3x)^2$, no $(9x)^2$.',
    'Confundir con trinomio cuadrado perfecto $(a^2 - 2ab + b^2)$ — ese tiene tres términos.',
    'Sacar factor común antes y olvidar volver a factorizar (ej: $2x^2 - 8 = 2(x^2 - 4) = 2(x+2)(x-2)$).',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'multiple',
        enunciado: '¿Cuál es la factorización de $x^2 - 49$?',
        opciones: ['$(x + 7)^2$', '$(x + 7)(x - 7)$', '$(x - 7)^2$', 'No se puede factorizar'],
        correcta: 1,
        explicacion: 'Bases $x$ y $7$ → $(x + 7)(x - 7)$.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado: '$x^2 + 4$ se factoriza como $(x + 2)(x - 2)$.',
        correcta: false,
        explicacion: 'Falso. La fórmula vale para RESTA, no para suma. $x^2 + 4$ no se factoriza en reales.',
      },
      {
        tipo: 'multiple',
        enunciado: 'Factorizá $4x^2 - 9$.',
        opciones: ['$(4x + 9)(4x - 9)$', '$(2x + 3)(2x - 3)$', '$(2x + 3)^2$', '$(4x + 3)(x - 3)$'],
        correcta: 1,
        explicacion: '$4x^2 = (2x)^2$ y $9 = 3^2$. Bases $2x$ y $3$.',
      },
    ],
  },
  relacionados: ['productos-notables', 'factorizacion-comun', 'polinomios-multiplicacion'],
  tags: ['factorizacion', 'diferencia de cuadrados', 'productos notables', 'algebra'],
};
