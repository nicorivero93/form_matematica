/**
 * Tipos de dominio para temas matemáticos.
 *
 * Un `Tema` es la unidad pedagógica completa: teoría + ejemplos + errores comunes
 * + quiz opcional + visualizador opcional + relacionados.
 */

export type AnioId =
  | 'primaria-4'
  | 'primaria-5'
  | 'primaria-6'
  | 'primaria-7'
  | 'secundaria-1'
  | 'secundaria-2'
  | 'secundaria-3'
  | 'secundaria-4'
  | 'secundaria-5'
  | 'facultad-analisis-1'
  | 'facultad-analisis-2'
  | 'facultad-algebra-lineal'
  | 'facultad-probabilidad-estadistica';

export type AreaId =
  | 'numeros-y-operaciones'
  | 'fracciones-decimales'
  | 'geometria'
  | 'medida'
  | 'algebra'
  | 'funciones'
  | 'trigonometria'
  | 'estadistica-probabilidad'
  | 'analisis';

export type Nivel = 'intro' | 'intermedio' | 'avanzado';

/** Bloque de teoría dentro de un tema. */
export type BloqueTeoria =
  | { tipo: 'parrafo'; texto: string }
  | { tipo: 'lista'; items: string[]; ordenada?: boolean }
  | { tipo: 'latex'; latex: string; display?: boolean }
  | { tipo: 'callout'; variante: 'tip' | 'cuidado' | 'definicion'; titulo?: string; texto: string }
  | { tipo: 'tabla'; encabezados: string[]; filas: string[][] };

/** Variable de una fórmula (símbolo + significado + unidad si aplica). */
export type Variable = {
  simbolo: string;
  nombre: string;
  unidad?: string;
  desc: string;
};

/** Fórmula clave dentro de un tema (renderizada con KaTeX). */
export type FormulaClave = {
  nombre: string;
  latex: string;
  variables: Variable[];
  /** Cuándo usarla, en una línea. */
  cuandoUsar?: string;
};

/** Un paso resuelto de un ejemplo. */
export type PasoEjemplo = {
  explicacion: string;
  latex?: string;
};

/** Ejemplo resuelto paso a paso. */
export type Ejemplo = {
  titulo: string;
  enunciado: string;
  pasos: PasoEjemplo[];
  resultado: string;
};

/** Pregunta numérica: el alumno escribe un número. `tolerancia` por defecto = 0.001. */
export type PreguntaNumerica = {
  tipo: 'numerica';
  enunciado: string;
  respuesta: number;
  tolerancia?: number;
  explicacion: string;
  unidad?: string;
};

/** Multiple choice. `correcta` es el índice 0-based. */
export type PreguntaMultiple = {
  tipo: 'multiple';
  enunciado: string;
  opciones: string[];
  correcta: number;
  explicacion: string;
};

export type PreguntaVF = {
  tipo: 'verdadero-falso';
  enunciado: string;
  correcta: boolean;
  explicacion: string;
};

export type PreguntaQuiz = PreguntaNumerica | PreguntaMultiple | PreguntaVF;

export type Quiz = {
  preguntas: PreguntaQuiz[];
};

export type Tema = {
  /** Único globalmente, kebab-case sin tildes (validado en build). */
  slug: string;
  titulo: string;
  /** Año(s) escolares donde aplica. Casi siempre uno solo. */
  anios: AnioId[];
  area: AreaId;
  nivel: Nivel;
  /** 1-2 líneas: aparece en cards y en search. */
  resumen: string;
  /** Bloques pedagógicos en orden. */
  teoria: BloqueTeoria[];
  /** Fórmulas clave (puede no haber: ej. "qué es una fracción"). */
  formulasClave?: FormulaClave[];
  ejemplos: Ejemplo[];
  erroresComunes: string[];
  quiz?: Quiz;
  /** Id de un componente registrado en `components/visualizadores/_registry.ts`. */
  visualizadorId?: string;
  /** Slugs de otros temas (deben existir; validado en build). */
  relacionados?: string[];
  /** Para fuzzy search. */
  tags: string[];
};
