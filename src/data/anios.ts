import type { AnioId } from './temas/tipos';

export type AnioColor =
  | 'sky' | 'rose' | 'orange' | 'purple' | 'indigo' | 'yellow'
  | 'cyan' | 'teal' | 'pink' | 'emerald' | 'violet' | 'amber'
  | 'slate' | 'lime' | 'fuchsia' | 'red' | 'green' | 'blue';

export type Anio = {
  id: AnioId;
  etapa: 'primaria' | 'secundaria' | 'facultad';
  /** Número del año dentro de la etapa: 4..7 en primaria, 1..5 en secundaria, 1..N en facultad. */
  numero: number;
  /** Etiqueta humana corta: "4to grado", "1er año", "Análisis I". */
  nombre: string;
  /** Etiqueta más cortita para la card. */
  nombreCorto: string;
  color: AnioColor;
  /** Emoji que va en el card del home. */
  icono: string;
  orden: number;
  descripcion: string;
};

export const ANIOS: Anio[] = [
  {
    id: 'primaria-4',
    etapa: 'primaria',
    numero: 4,
    nombre: '4to grado',
    nombreCorto: '4°',
    color: 'sky',
    icono: '🔢',
    orden: 1,
    descripcion: 'Números hasta 10.000, suma y resta con llevadas, multiplicación y división por una cifra, fracciones simples, geometría básica y medida.',
  },
  {
    id: 'primaria-5',
    etapa: 'primaria',
    numero: 5,
    nombre: '5to grado',
    nombreCorto: '5°',
    color: 'cyan',
    icono: '➗',
    orden: 2,
    descripcion: 'Multiplicación y división por dos cifras, fracciones equivalentes, decimales, área y volumen, ángulos.',
  },
  {
    id: 'primaria-6',
    etapa: 'primaria',
    numero: 6,
    nombre: '6to grado',
    nombreCorto: '6°',
    color: 'teal',
    icono: '🧮',
    orden: 3,
    descripcion: 'Operaciones con fracciones y decimales, proporcionalidad, porcentaje, polígonos, perímetro y área.',
  },
  {
    id: 'primaria-7',
    etapa: 'primaria',
    numero: 7,
    nombre: '7mo grado',
    nombreCorto: '7°',
    color: 'emerald',
    icono: '📐',
    orden: 4,
    descripcion: 'Números enteros, potencias y raíces, ecuaciones simples, polígonos regulares, círculo, probabilidad.',
  },
  {
    id: 'secundaria-1',
    etapa: 'secundaria',
    numero: 1,
    nombre: '1er año',
    nombreCorto: '1°',
    color: 'indigo',
    icono: '✖️',
    orden: 5,
    descripcion: 'Números enteros y racionales, lenguaje algebraico, ecuaciones de primer grado, geometría euclídea.',
  },
  {
    id: 'secundaria-2',
    etapa: 'secundaria',
    numero: 2,
    nombre: '2do año',
    nombreCorto: '2°',
    color: 'purple',
    icono: '🟰',
    orden: 6,
    descripcion: 'Funciones lineales, sistemas de ecuaciones, semejanza de triángulos, Teorema de Pitágoras.',
  },
  {
    id: 'secundaria-3',
    etapa: 'secundaria',
    numero: 3,
    nombre: '3er año',
    nombreCorto: '3°',
    color: 'violet',
    icono: '📈',
    orden: 7,
    descripcion: 'Función cuadrática, ecuaciones de segundo grado, números reales, trigonometría básica, estadística.',
  },
  {
    id: 'secundaria-4',
    etapa: 'secundaria',
    numero: 4,
    nombre: '4to año',
    nombreCorto: '4°',
    color: 'fuchsia',
    icono: '🔺',
    orden: 8,
    descripcion: 'Trigonometría, función exponencial y logarítmica, polinomios, vectores, probabilidad.',
  },
  {
    id: 'secundaria-5',
    etapa: 'secundaria',
    numero: 5,
    nombre: '5to año',
    nombreCorto: '5°',
    color: 'rose',
    icono: '∫',
    orden: 9,
    descripcion: 'Sucesiones, límites, derivada, integral, análisis combinatorio, estadística inferencial.',
  },
  {
    id: 'facultad-analisis-1',
    etapa: 'facultad',
    numero: 1,
    nombre: 'Análisis Matemático I',
    nombreCorto: 'AM1',
    color: 'red',
    icono: '∂',
    orden: 10,
    descripcion: 'Límites con épsilon-delta, continuidad uniforme, derivadas formales, Taylor, integral de Riemann, métodos de integración, integrales impropias, series.',
  },
  {
    id: 'facultad-analisis-2',
    etapa: 'facultad',
    numero: 2,
    nombre: 'Análisis Matemático II',
    nombreCorto: 'AM2',
    color: 'orange',
    icono: '∇',
    orden: 11,
    descripcion: 'Funciones de varias variables, derivadas parciales, gradiente, máximos y mínimos, multiplicadores de Lagrange, integrales múltiples, integrales de línea.',
  },
  {
    id: 'facultad-algebra-lineal',
    etapa: 'facultad',
    numero: 3,
    nombre: 'Álgebra Lineal',
    nombreCorto: 'ALG',
    color: 'blue',
    icono: '⊕',
    orden: 12,
    descripcion: 'Vectores en R^n, espacios vectoriales, transformaciones lineales, matrices, determinantes, sistemas, autovalores y diagonalización.',
  },
  {
    id: 'facultad-probabilidad-estadistica',
    etapa: 'facultad',
    numero: 4,
    nombre: 'Probabilidad y Estadística',
    nombreCorto: 'PyE',
    color: 'green',
    icono: '𝔼',
    orden: 13,
    descripcion: 'Probabilidad axiomática, variables aleatorias, distribuciones, esperanza y varianza, teorema central del límite, estimación, tests de hipótesis.',
  },
];

const ANIOS_POR_ID: Record<AnioId, Anio> = ANIOS.reduce(
  (acc, a) => ({ ...acc, [a.id]: a }),
  {} as Record<AnioId, Anio>
);

export function getAnio(id: AnioId): Anio {
  return ANIOS_POR_ID[id];
}

export const ANIOS_PRIMARIA = ANIOS.filter((a) => a.etapa === 'primaria');
export const ANIOS_SECUNDARIA = ANIOS.filter((a) => a.etapa === 'secundaria');
export const ANIOS_FACULTAD = ANIOS.filter((a) => a.etapa === 'facultad');
