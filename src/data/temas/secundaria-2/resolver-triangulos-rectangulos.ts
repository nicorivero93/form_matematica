import type { Tema } from '../tipos';

export const RESOLVER_TRIANGULOS_RECTANGULOS: Tema = {
  slug: 'resolver-triangulos-rectangulos',
  titulo: 'Resolver triángulos rectángulos',
  anios: ['secundaria-2'],
  area: 'trigonometria',
  nivel: 'intermedio',
  resumen:
    '"Resolver" un triángulo rectángulo significa encontrar TODOS sus lados y ángulos a partir de los datos conocidos, usando seno, coseno, tangente y Pitágoras.',
  teoria: [
    {
      tipo: 'callout',
      variante: 'definicion',
      titulo: 'Razones trigonométricas (recordatorio)',
      texto:
        'Para un ángulo agudo $\\alpha$ en un triángulo rectángulo: $\\sin\\alpha = \\dfrac{\\text{cateto opuesto}}{\\text{hipotenusa}}$, $\\cos\\alpha = \\dfrac{\\text{cateto adyacente}}{\\text{hipotenusa}}$, $\\tan\\alpha = \\dfrac{\\text{cateto opuesto}}{\\text{cateto adyacente}}$.',
    },
    {
      tipo: 'parrafo',
      texto:
        'Como el ángulo recto siempre vale $90°$ y los tres ángulos suman $180°$, conociendo un ángulo agudo ya tenés el otro: $\\beta = 90° - \\alpha$.',
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Estrategia general',
      texto:
        'Hacé un dibujo. Marcá lo que conocés y lo que querés encontrar. Elegí la razón trigonométrica donde aparezcan los datos que tenés Y la incógnita. Si te falta un lado, también podés usar Pitágoras: $a^2 + b^2 = c^2$.',
    },
    {
      tipo: 'tabla',
      encabezados: ['Datos que tenés', 'Cómo encontrar lo demás'],
      filas: [
        ['Un ángulo agudo y la hipotenusa', '$\\sin$ y $\\cos$ para los catetos. El otro ángulo: $90° - \\alpha$.'],
        ['Un ángulo agudo y un cateto', 'La razón que relacione esos dos. El tercer lado con Pitágoras o con otra razón.'],
        ['Los dos catetos', 'Pitágoras para la hipotenusa. $\\tan\\alpha$ para el ángulo opuesto.'],
        ['Hipotenusa y un cateto', 'Pitágoras para el otro cateto. $\\sin$ o $\\cos$ para el ángulo.'],
      ],
    },
  ],
  formulasClave: [
    {
      nombre: 'Pitágoras',
      latex: 'a^2 + b^2 = c^2',
      variables: [
        { simbolo: 'a, b', nombre: 'Catetos', desc: 'Lados que forman el ángulo recto.' },
        { simbolo: 'c', nombre: 'Hipotenusa', desc: 'Lado opuesto al ángulo recto.' },
      ],
    },
    {
      nombre: 'Razones',
      latex: '\\sin\\alpha = \\dfrac{op}{hip}, \\quad \\cos\\alpha = \\dfrac{ady}{hip}, \\quad \\tan\\alpha = \\dfrac{op}{ady}',
      variables: [
        { simbolo: 'op', nombre: 'Cateto opuesto a $\\alpha$', desc: 'El cateto que no toca al ángulo.' },
        { simbolo: 'ady', nombre: 'Cateto adyacente a $\\alpha$', desc: 'El cateto que sí toca al ángulo (sin ser la hipotenusa).' },
        { simbolo: 'hip', nombre: 'Hipotenusa', desc: 'Lado opuesto al ángulo recto.' },
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Tengo ángulo e hipotenusa',
      enunciado: 'Un triángulo rectángulo tiene hipotenusa $c = 10$ cm y un ángulo agudo $\\alpha = 30°$. Encontrá los catetos y el otro ángulo.',
      pasos: [
        { explicacion: 'Cateto opuesto a $\\alpha$: $\\sin 30° = \\dfrac{op}{10} \\Rightarrow op = 10 \\cdot 0{,}5 = 5$ cm.' },
        { explicacion: 'Cateto adyacente a $\\alpha$: $\\cos 30° = \\dfrac{ady}{10} \\Rightarrow ady = 10 \\cdot 0{,}866 \\approx 8{,}66$ cm.' },
        { explicacion: 'Otro ángulo: $\\beta = 90° - 30° = 60°$.' },
      ],
      resultado: 'Cateto opuesto $= 5$ cm, cateto adyacente $\\approx 8{,}66$ cm, $\\beta = 60°$.',
    },
    {
      titulo: 'Tengo los dos catetos',
      enunciado: 'Catetos $a = 3$ cm y $b = 4$ cm. Encontrá la hipotenusa y los ángulos agudos.',
      pasos: [
        { explicacion: 'Hipotenusa por Pitágoras: $c = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$ cm.' },
        { explicacion: 'Ángulo opuesto al cateto $a$: $\\tan\\alpha = \\dfrac{3}{4} = 0{,}75 \\Rightarrow \\alpha \\approx 36{,}87°$.' },
        { explicacion: 'Otro ángulo: $\\beta = 90° - 36{,}87° \\approx 53{,}13°$.' },
      ],
      resultado: 'Hipotenusa $= 5$ cm, $\\alpha \\approx 36{,}87°$, $\\beta \\approx 53{,}13°$.',
    },
    {
      titulo: 'Aplicación: altura de un edificio',
      enunciado: 'Estoy a $50$ m de un edificio y veo su parte más alta con un ángulo de elevación de $40°$. Mi altura visual es $1{,}70$ m. ¿Cuánto mide el edificio?',
      pasos: [
        { explicacion: 'Llamo $h$ a la altura del edificio sobre mi línea de visión.' },
        { explicacion: 'En el triángulo rectángulo: $\\tan 40° = \\dfrac{h}{50} \\Rightarrow h = 50 \\cdot \\tan 40° \\approx 50 \\cdot 0{,}839 = 41{,}95$ m.' },
        { explicacion: 'Sumo mi altura visual: altura total $= 41{,}95 + 1{,}70 = 43{,}65$ m.' },
      ],
      resultado: 'El edificio mide aproximadamente $43{,}65$ m.',
    },
  ],
  erroresComunes: [
    'Confundir cateto OPUESTO con cateto ADYACENTE (depende del ángulo desde el cual mirás).',
    'Usar $\\sin$ cuando correspondía $\\cos$ por no identificar bien los lados.',
    'Olvidar que la calculadora puede estar en RAD en vez de DEG (errores enormes).',
    'Aplicar trigonometría a un triángulo NO rectángulo (ahí van seno y coseno generalizados, no estas razones).',
    'Olvidar sumar la altura del observador en problemas de elevación.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado: 'Hipotenusa $= 20$, ángulo agudo $= 30°$. ¿Cuánto mide el cateto opuesto al ángulo?',
        respuesta: 10,
        tolerancia: 0.1,
        explicacion: '$\\sin 30° = 0{,}5 \\Rightarrow op = 20 \\cdot 0{,}5 = 10$.',
      },
      {
        tipo: 'numerica',
        enunciado: 'Catetos $5$ y $12$. ¿Cuánto vale la hipotenusa?',
        respuesta: 13,
        tolerancia: 0.01,
        explicacion: '$c = \\sqrt{25 + 144} = \\sqrt{169} = 13$.',
      },
      {
        tipo: 'multiple',
        enunciado: 'En un triángulo rectángulo con catetos iguales (isósceles rectángulo), ¿cuánto miden los ángulos agudos?',
        opciones: ['$30°$ y $60°$', '$45°$ y $45°$', '$50°$ y $40°$', 'Depende de los catetos'],
        correcta: 1,
        explicacion: 'Como los catetos son iguales, los ángulos opuestos también lo son. $90° / 2 = 45°$ cada uno.',
      },
    ],
  },
  visualizadorId: 'circulo-trig',
  relacionados: ['razones-trigonometricas', 'trigonometria-aplicaciones', 'teorema-pitagoras', 'area-figuras-pitagoras'],
  tags: ['trigonometria', 'triangulo rectangulo', 'seno', 'coseno', 'tangente', 'pitagoras'],
};
