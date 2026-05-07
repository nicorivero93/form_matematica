import { describe, it, expect, beforeEach } from 'vitest';
import { useProgreso } from './progreso';

describe('useProgreso', () => {
  beforeEach(() => {
    useProgreso.getState().limpiar();
  });

  it('arranca vacío', () => {
    const s = useProgreso.getState();
    expect(s.completados).toEqual([]);
    expect(s.totales().completados).toBe(0);
  });

  it('marca un tema como completado', () => {
    useProgreso.getState().marcarCompletado('numeros-hasta-10000');
    expect(useProgreso.getState().estaCompletado('numeros-hasta-10000')).toBe(true);
    expect(useProgreso.getState().totales().completados).toBe(1);
  });

  it('marcar dos veces no duplica', () => {
    useProgreso.getState().marcarCompletado('a');
    useProgreso.getState().marcarCompletado('a');
    expect(useProgreso.getState().completados).toEqual(['a']);
  });

  it('toggleCompletado alterna entre marcado y desmarcado', () => {
    useProgreso.getState().toggleCompletado('a');
    expect(useProgreso.getState().estaCompletado('a')).toBe(true);
    useProgreso.getState().toggleCompletado('a');
    expect(useProgreso.getState().estaCompletado('a')).toBe(false);
  });

  it('desmarcarCompletado lo saca aunque no esté', () => {
    useProgreso.getState().desmarcarCompletado('no-existe');
    expect(useProgreso.getState().completados).toEqual([]);
  });

  it('guardarScoreQuiz persiste correctas/total y timestamp', () => {
    useProgreso.getState().guardarScoreQuiz('a', 4, 5);
    const score = useProgreso.getState().getScoreQuiz('a');
    expect(score?.correctas).toBe(4);
    expect(score?.total).toBe(5);
    expect(typeof score?.ultimoIntento).toBe('string');
  });

  it('persiste en localStorage (clave mate:progreso)', () => {
    useProgreso.getState().marcarCompletado('a');
    const raw = localStorage.getItem('mate:progreso');
    expect(raw).not.toBeNull();
    const parsed = JSON.parse(raw!);
    expect(parsed.state.completados).toContain('a');
  });

  it('limpiar borra todo', () => {
    useProgreso.getState().marcarCompletado('a');
    useProgreso.getState().guardarScoreQuiz('a', 1, 2);
    useProgreso.getState().limpiar();
    expect(useProgreso.getState().completados).toEqual([]);
    expect(useProgreso.getState().scoresQuiz).toEqual({});
  });
});
