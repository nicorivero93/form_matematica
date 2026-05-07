import type { AnioId, AreaId, Tema } from './tipos';
import { PRIMARIA_4 } from './primaria-4';
import { PRIMARIA_5 } from './primaria-5';
import { PRIMARIA_6 } from './primaria-6';
import { PRIMARIA_7 } from './primaria-7';
import { SECUNDARIA_1 } from './secundaria-1';
import { SECUNDARIA_2 } from './secundaria-2';
import { SECUNDARIA_3 } from './secundaria-3';
import { SECUNDARIA_4 } from './secundaria-4';
import { SECUNDARIA_5 } from './secundaria-5';
import { FACULTAD_ANALISIS_1 } from './facultad-analisis-1';
import { FACULTAD_ANALISIS_2 } from './facultad-analisis-2';
import { FACULTAD_ALGEBRA_LINEAL } from './facultad-algebra-lineal';
import { FACULTAD_PROBABILIDAD_ESTADISTICA } from './facultad-probabilidad-estadistica';

export const TEMAS: Tema[] = [
  ...PRIMARIA_4,
  ...PRIMARIA_5,
  ...PRIMARIA_6,
  ...PRIMARIA_7,
  ...SECUNDARIA_1,
  ...SECUNDARIA_2,
  ...SECUNDARIA_3,
  ...SECUNDARIA_4,
  ...SECUNDARIA_5,
  ...FACULTAD_ANALISIS_1,
  ...FACULTAD_ANALISIS_2,
  ...FACULTAD_ALGEBRA_LINEAL,
  ...FACULTAD_PROBABILIDAD_ESTADISTICA,
];

// Sanity checks que corren al importar este módulo. Cualquier inconsistencia
// rompe el build/dev — preferimos fallar rápido antes que servir contenido roto.
{
  const slugs = new Set<string>();
  for (const t of TEMAS) {
    if (slugs.has(t.slug)) {
      throw new Error(`[temas] slug duplicado: "${t.slug}"`);
    }
    slugs.add(t.slug);
  }

  for (const t of TEMAS) {
    for (const slugRel of t.relacionados ?? []) {
      if (!slugs.has(slugRel)) {
        throw new Error(
          `[temas] "${t.slug}" referencia tema relacionado inexistente: "${slugRel}"`
        );
      }
    }
  }
}

export function getTemaPorSlug(slug: string): Tema | undefined {
  return TEMAS.find((t) => t.slug === slug);
}

export function getTemasPorAnio(anioId: AnioId): Tema[] {
  return TEMAS.filter((t) => t.anios.includes(anioId));
}

export function getTemasPorArea(areaId: AreaId): Tema[] {
  return TEMAS.filter((t) => t.area === areaId);
}
