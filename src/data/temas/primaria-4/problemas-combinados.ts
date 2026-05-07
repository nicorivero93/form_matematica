import type { Tema } from '../tipos';

export const PROBLEMAS_COMBINADOS: Tema = {
  slug: 'problemas-combinados',
  titulo: 'Problemas con varias operaciones',
  anios: ['primaria-4'],
  area: 'numeros-y-operaciones',
  nivel: 'intermedio',
  resumen:
    'Cómo leer un problema, decidir qué cuentas hacer y en qué orden. Estrategias para no perderse.',
  teoria: [
    {
      tipo: 'parrafo',
      texto:
        'Un problema combinado es uno donde tenés que hacer más de una cuenta. La clave es leer despacio, entender qué te están preguntando y armar un plan antes de hacer cualquier cuenta.',
    },
    {
      tipo: 'lista',
      ordenada: true,
      items: [
        'Leer el problema una vez completo.',
        'Subrayar los datos importantes (números) y la pregunta.',
        'Decidir qué operación se necesita: ¿juntar (suma)? ¿quitar (resta)? ¿repetir (multiplicación)? ¿repartir (división)?',
        'Hacer las cuentas en orden y escribir cada paso.',
        'Releer la pregunta y ver si la respuesta tiene sentido.',
      ],
    },
    {
      tipo: 'callout',
      variante: 'tip',
      titulo: 'Pistas en el enunciado',
      texto:
        '"En total" o "juntos" suelen ser sumas. "Cuánto le queda" o "diferencia" son restas. "Por cada" o "veces" son multiplicaciones. "Entre" o "repartir" son divisiones.',
    },
  ],
  ejemplos: [
    {
      titulo: 'Combinar suma y resta',
      enunciado:
        'En un colectivo había 28 personas. En la primera parada se bajaron 9 y subieron 5. ¿Cuántas personas quedaron?',
      pasos: [
        { explicacion: 'Empezamos con 28 personas.' },
        { explicacion: 'Se bajaron 9: 28 − 9 = 19.' },
        { explicacion: 'Subieron 5: 19 + 5 = 24.' },
      ],
      resultado: '24 personas.',
    },
    {
      titulo: 'Multiplicación seguida de resta',
      enunciado:
        'María compró 6 paquetes de figuritas. Cada paquete trae 5 figuritas. Si ya tenía 12, ¿con cuántas figuritas se queda en total?',
      pasos: [
        { explicacion: 'Cuántas figuritas trajo: 6 × 5 = 30.' },
        { explicacion: 'Sumamos las que tenía: 30 + 12 = 42.' },
      ],
      resultado: '42 figuritas.',
    },
    {
      titulo: 'División en un problema',
      enunciado:
        'Hay 84 alfajores para repartir en 6 bandejas en partes iguales. ¿Cuántos alfajores van en cada bandeja?',
      pasos: [
        { explicacion: 'Hacemos 84 ÷ 6.' },
        { explicacion: '8 ÷ 6 = 1 sobra 2. Bajamos el 4: 24 ÷ 6 = 4. Cociente: 14, resto: 0.' },
      ],
      resultado: '14 alfajores en cada bandeja.',
    },
  ],
  erroresComunes: [
    'Hacer una cuenta sin entender qué pregunta el problema.',
    'Sumar todos los números del enunciado sin pensar (no todo es suma).',
    'Olvidar la pregunta final. A veces calculás algo intermedio y te olvidás de responder lo que en realidad piden.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'numerica',
        enunciado:
          'Lucas tenía 50 figuritas. Le regaló 12 a su hermano y compró 25 más. ¿Cuántas tiene ahora?',
        respuesta: 63,
        explicacion: '50 − 12 = 38. 38 + 25 = 63.',
      },
      {
        tipo: 'numerica',
        enunciado:
          'Una caja trae 12 lápices. Si compramos 5 cajas, ¿cuántos lápices son?',
        respuesta: 60,
        explicacion: '5 × 12 = 60.',
      },
      {
        tipo: 'multiple',
        enunciado:
          'Si en cada mesa hay 4 sillas y hay 9 mesas, ¿qué operación usamos para saber el total de sillas?',
        opciones: ['9 + 4', '9 − 4', '9 × 4', '9 ÷ 4'],
        correcta: 2,
        explicacion: 'Tenemos que repetir 4 sillas, 9 veces. Eso es una multiplicación: 9 × 4 = 36.',
      },
    ],
  },
  relacionados: [
    'suma-con-llevadas',
    'resta-con-prestamos',
    'multiplicacion-una-cifra',
    'division-una-cifra',
  ],
  tags: ['problemas', 'operaciones combinadas', 'estrategia'],
};
