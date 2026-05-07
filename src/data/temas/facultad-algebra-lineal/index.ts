import type { Tema } from '../tipos';
import { VECTORES_RN } from './vectores-rn';
import { PRODUCTO_INTERNO } from './producto-interno';
import { MATRICES_OPERACIONES } from './matrices-operaciones';
import { DETERMINANTES_N } from './determinantes-n';
import { SISTEMAS_RANGO } from './sistemas-rango';
import { ESPACIOS_VECTORIALES } from './espacios-vectoriales';
import { BASES_DIMENSION } from './bases-dimension';
import { TRANSFORMACIONES_LINEALES } from './transformaciones-lineales';
import { NUCLEO_IMAGEN } from './nucleo-imagen';
import { AUTOVALORES_AUTOVECTORES } from './autovalores-autovectores';
import { DIAGONALIZACION } from './diagonalizacion';

export const FACULTAD_ALGEBRA_LINEAL: Tema[] = [
  VECTORES_RN,
  PRODUCTO_INTERNO,
  MATRICES_OPERACIONES,
  DETERMINANTES_N,
  SISTEMAS_RANGO,
  ESPACIOS_VECTORIALES,
  BASES_DIMENSION,
  TRANSFORMACIONES_LINEALES,
  NUCLEO_IMAGEN,
  AUTOVALORES_AUTOVECTORES,
  DIAGONALIZACION,
];
