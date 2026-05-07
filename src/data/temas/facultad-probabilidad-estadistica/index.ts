import type { Tema } from '../tipos';
import { PROBABILIDAD_AXIOMATICA } from './probabilidad-axiomatica';
import { VARIABLES_ALEATORIAS_DISCRETAS } from './variables-aleatorias-discretas';
import { VARIABLES_ALEATORIAS_CONTINUAS } from './variables-aleatorias-continuas';
import { ESPERANZA_VARIANZA } from './esperanza-varianza';
import { DISTRIBUCION_NORMAL } from './distribucion-normal';
import { TEOREMA_CENTRAL_LIMITE } from './teorema-central-limite';
import { ESTIMACION_INTERVALOS } from './estimacion-intervalos';
import { TESTS_HIPOTESIS } from './tests-hipotesis';

export const FACULTAD_PROBABILIDAD_ESTADISTICA: Tema[] = [
  PROBABILIDAD_AXIOMATICA,
  VARIABLES_ALEATORIAS_DISCRETAS,
  VARIABLES_ALEATORIAS_CONTINUAS,
  ESPERANZA_VARIANZA,
  DISTRIBUCION_NORMAL,
  TEOREMA_CENTRAL_LIMITE,
  ESTIMACION_INTERVALOS,
  TESTS_HIPOTESIS,
];
