import type { AreaId } from './temas/tipos';
import type { AnioColor } from './anios';

export type Area = {
  id: AreaId;
  nombre: string;
  descripcion: string;
  color: AnioColor;
  icono: string;
  orden: number;
};

export const AREAS: Area[] = [
  {
    id: 'numeros-y-operaciones',
    nombre: 'Números y operaciones',
    descripcion: 'Naturales, enteros, racionales. Suma, resta, multiplicación, división, potencia, raíz.',
    color: 'sky',
    icono: '🔢',
    orden: 1,
  },
  {
    id: 'fracciones-decimales',
    nombre: 'Fracciones y decimales',
    descripcion: 'Concepto, equivalencia, operaciones, porcentaje y proporcionalidad.',
    color: 'orange',
    icono: '½',
    orden: 2,
  },
  {
    id: 'geometria',
    nombre: 'Geometría',
    descripcion: 'Figuras planas, cuerpos, ángulos, polígonos, círculo.',
    color: 'rose',
    icono: '📐',
    orden: 3,
  },
  {
    id: 'medida',
    nombre: 'Medida',
    descripcion: 'Longitud, peso, capacidad, tiempo, perímetro, área, volumen.',
    color: 'amber',
    icono: '📏',
    orden: 4,
  },
  {
    id: 'algebra',
    nombre: 'Álgebra',
    descripcion: 'Lenguaje algebraico, ecuaciones, sistemas, polinomios.',
    color: 'indigo',
    icono: '𝑥',
    orden: 5,
  },
  {
    id: 'funciones',
    nombre: 'Funciones',
    descripcion: 'Lineal, cuadrática, exponencial, logarítmica, gráficos y análisis.',
    color: 'purple',
    icono: '📈',
    orden: 6,
  },
  {
    id: 'trigonometria',
    nombre: 'Trigonometría',
    descripcion: 'Razones trigonométricas, círculo, identidades.',
    color: 'fuchsia',
    icono: '△',
    orden: 7,
  },
  {
    id: 'estadistica-probabilidad',
    nombre: 'Estadística y probabilidad',
    descripcion: 'Tablas, gráficos, medidas de tendencia, probabilidad.',
    color: 'emerald',
    icono: '📊',
    orden: 8,
  },
  {
    id: 'analisis',
    nombre: 'Análisis',
    descripcion: 'Sucesiones, límites, derivada, integral.',
    color: 'slate',
    icono: '∫',
    orden: 9,
  },
];

const AREAS_POR_ID: Record<AreaId, Area> = AREAS.reduce(
  (acc, a) => ({ ...acc, [a.id]: a }),
  {} as Record<AreaId, Area>
);

export function getArea(id: AreaId): Area {
  return AREAS_POR_ID[id];
}
