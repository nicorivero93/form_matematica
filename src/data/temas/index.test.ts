import { describe, it, expect } from 'vitest';
import { TEMAS, getTemaPorSlug, getTemasPorAnio, getTemasPorArea } from './index';
import { ANIOS } from '../anios';
import { AREAS } from '../areas';
import { VISUALIZADOR_IDS } from '@/components/visualizadores/_registry';

describe('catálogo de temas', () => {
  it('tiene al menos un tema cargado', () => {
    expect(TEMAS.length).toBeGreaterThan(0);
  });

  it('todos los slugs son únicos', () => {
    const slugs = TEMAS.map((t) => t.slug);
    const set = new Set(slugs);
    expect(set.size).toBe(slugs.length);
  });

  it('todos los slugs son kebab-case sin tildes ni mayúsculas', () => {
    const re = /^[a-z0-9]+(-[a-z0-9]+)*$/;
    for (const t of TEMAS) {
      expect(t.slug, `slug inválido: ${t.slug}`).toMatch(re);
    }
  });

  it('todos los anios referenciados existen', () => {
    const anioIds = new Set(ANIOS.map((a) => a.id));
    for (const t of TEMAS) {
      for (const aid of t.anios) {
        expect(anioIds.has(aid), `año inexistente "${aid}" en "${t.slug}"`).toBe(true);
      }
    }
  });

  it('todas las areas referenciadas existen', () => {
    const areaIds = new Set(AREAS.map((a) => a.id));
    for (const t of TEMAS) {
      expect(areaIds.has(t.area), `area inexistente "${t.area}" en "${t.slug}"`).toBe(true);
    }
  });

  it('todos los relacionados apuntan a slugs existentes', () => {
    const slugs = new Set(TEMAS.map((t) => t.slug));
    for (const t of TEMAS) {
      for (const r of t.relacionados ?? []) {
        expect(slugs.has(r), `relacionado inexistente "${r}" en "${t.slug}"`).toBe(true);
      }
    }
  });

  it('todos los visualizadorId apuntan a un visualizador registrado', () => {
    const validos = new Set(VISUALIZADOR_IDS);
    for (const t of TEMAS) {
      if (t.visualizadorId) {
        expect(
          validos.has(t.visualizadorId),
          `visualizadorId no registrado "${t.visualizadorId}" en "${t.slug}"`
        ).toBe(true);
      }
    }
  });

  it('todos los temas tienen al menos 1 ejemplo y 1 error común', () => {
    for (const t of TEMAS) {
      expect(t.ejemplos.length, `${t.slug} sin ejemplos`).toBeGreaterThan(0);
      expect(t.erroresComunes.length, `${t.slug} sin errores comunes`).toBeGreaterThan(0);
    }
  });

  describe('helpers', () => {
    it('getTemaPorSlug encuentra un tema existente', () => {
      const t = getTemaPorSlug('numeros-hasta-10000');
      expect(t).toBeDefined();
      expect(t?.slug).toBe('numeros-hasta-10000');
    });

    it('getTemaPorSlug devuelve undefined para uno inexistente', () => {
      expect(getTemaPorSlug('no-existe')).toBeUndefined();
    });

    it('getTemasPorAnio devuelve solo temas del año pedido', () => {
      const temas = getTemasPorAnio('primaria-4');
      expect(temas.length).toBeGreaterThan(0);
      for (const t of temas) {
        expect(t.anios).toContain('primaria-4');
      }
    });

    it('getTemasPorArea devuelve solo temas del área pedida', () => {
      const temas = getTemasPorArea('numeros-y-operaciones');
      expect(temas.length).toBeGreaterThan(0);
      for (const t of temas) {
        expect(t.area).toBe('numeros-y-operaciones');
      }
    });
  });

  describe('quizzes', () => {
    it('toda pregunta múltiple tiene una opción correcta válida', () => {
      for (const t of TEMAS) {
        for (const p of t.quiz?.preguntas ?? []) {
          if (p.tipo === 'multiple') {
            expect(p.opciones.length).toBeGreaterThanOrEqual(2);
            expect(p.correcta).toBeGreaterThanOrEqual(0);
            expect(p.correcta).toBeLessThan(p.opciones.length);
          }
        }
      }
    });
  });
});
