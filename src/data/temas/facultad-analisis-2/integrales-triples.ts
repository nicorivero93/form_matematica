import type { Tema } from '../tipos';

export const INTEGRALES_TRIPLES: Tema = {
  slug: 'integrales-triples',
  titulo: 'Integrales triples',
  anios: ['facultad-analisis-2'],
  area: 'analisis',
  nivel: 'avanzado',
  resumen:
    '$\\iiint_V f(x, y, z) \\, dV$ generaliza las dobles a 3D. Útiles para volumen, masa, centro de masa.',
  teoria: [
    {
      tipo: 'tabla',
      encabezados: ['Coordenadas', 'Elemento de volumen'],
      filas: [
        ['Cartesianas', '$dV = dx \\, dy \\, dz$'],
        ['Cilíndricas', '$dV = r \\, dr \\, d\\theta \\, dz$'],
        ['Esféricas', '$dV = \\rho^2 \\sin\\phi \\, d\\rho \\, d\\phi \\, d\\theta$'],
      ],
    },
  ],
  ejemplos: [
    {
      titulo: 'Volumen de un cubo',
      enunciado:
        'Volumen del cubo $[0, 2]^3$ usando integral triple.',
      pasos: [
        { explicacion: '$\\iiint 1 \\, dV = \\int_0^2 \\int_0^2 \\int_0^2 dx \\, dy \\, dz = 8$.' },
      ],
      resultado: '8.',
    },
  ],
  erroresComunes: [
    'Olvidar el jacobiano en cilíndricas/esféricas.',
    'Confundir orden de integración.',
    'No describir bien la región 3D.',
  ],
  quiz: {
    preguntas: [
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En coordenadas esféricas, $dV = \\rho^2 \\sin\\phi \\, d\\rho \\, d\\phi \\, d\\theta$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'El volumen de una región es $\\iiint 1 \\, dV$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
      {
        tipo: 'verdadero-falso',
        enunciado:
          'En cilíndricas el jacobiano es $r$.',
        correcta: true,
        explicacion: 'Cierto.',
      },
    ],
  },
  relacionados: ['integrales-dobles', 'cambio-variables'],
  tags: ['integrales triples', 'volumen', '3D'],
};
