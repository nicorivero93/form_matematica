import type { Tema } from '../tipos';
import { LIMITES_FORMALES } from './limites-formales';
import { SUCESIONES_CAUCHY } from './sucesiones-cauchy';
import { CONTINUIDAD_UNIFORME } from './continuidad-uniforme';
import { TEOREMA_BOLZANO } from './teorema-bolzano';
import { TEOREMA_VALOR_MEDIO } from './teorema-valor-medio';
import { REGLA_LHOPITAL } from './regla-lhopital';
import { DERIVADAS_SUPERIORES } from './derivadas-superiores';
import { POLINOMIO_TAYLOR } from './polinomio-taylor';
import { CRITERIOS_CONVERGENCIA } from './criterios-convergencia';
import { SERIES_POTENCIAS } from './series-potencias';
import { INTEGRAL_RIEMANN } from './integral-riemann';
import { METODOS_INTEGRACION } from './metodos-integracion';
import { INTEGRAL_IMPROPIA } from './integral-impropia';

export const FACULTAD_ANALISIS_1: Tema[] = [
  LIMITES_FORMALES,
  SUCESIONES_CAUCHY,
  CONTINUIDAD_UNIFORME,
  TEOREMA_BOLZANO,
  TEOREMA_VALOR_MEDIO,
  REGLA_LHOPITAL,
  DERIVADAS_SUPERIORES,
  POLINOMIO_TAYLOR,
  CRITERIOS_CONVERGENCIA,
  SERIES_POTENCIAS,
  INTEGRAL_RIEMANN,
  METODOS_INTEGRACION,
  INTEGRAL_IMPROPIA,
];
