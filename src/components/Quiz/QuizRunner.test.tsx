import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QuizRunner } from './QuizRunner';
import { useProgreso } from '@/store/progreso';
import type { Quiz } from '@/data/temas/tipos';

const quizMixto: Quiz = {
  preguntas: [
    {
      tipo: 'numerica',
      enunciado: '¿Cuánto es 2 + 2?',
      respuesta: 4,
      explicacion: 'Suma simple.',
    },
    {
      tipo: 'multiple',
      enunciado: 'Elegí el correcto:',
      opciones: ['mal', 'bien', 'no'],
      correcta: 1,
      explicacion: '"bien" es lo correcto.',
    },
    {
      tipo: 'verdadero-falso',
      enunciado: 'El cielo es azul.',
      correcta: true,
      explicacion: 'Cierto.',
    },
  ],
};

describe('QuizRunner', () => {
  beforeEach(() => {
    useProgreso.getState().limpiar();
  });

  it('renderiza una pregunta de cada tipo', () => {
    render(<QuizRunner temaSlug="t" quiz={quizMixto} />);
    expect(screen.getByText(/¿Cuánto es 2 \+ 2\?/)).toBeInTheDocument();
    expect(screen.getByText(/Elegí el correcto/)).toBeInTheDocument();
    expect(screen.getByText(/El cielo es azul/)).toBeInTheDocument();
  });

  it('marca correcta una respuesta numérica acertada', async () => {
    const user = userEvent.setup();
    render(<QuizRunner temaSlug="t" quiz={quizMixto} />);
    const input = screen.getByLabelText(/Respuesta a la pregunta 1/);
    await user.type(input, '4');
    const verificar = screen.getAllByRole('button', { name: /Verificar/i })[0];
    await user.click(verificar);
    expect(screen.getByText(/¡Correcto!/i)).toBeInTheDocument();
  });

  it('marca incorrecta una respuesta numérica equivocada y muestra la correcta', async () => {
    const user = userEvent.setup();
    render(<QuizRunner temaSlug="t" quiz={quizMixto} />);
    const input = screen.getByLabelText(/Respuesta a la pregunta 1/);
    await user.type(input, '5');
    const verificar = screen.getAllByRole('button', { name: /Verificar/i })[0];
    await user.click(verificar);
    expect(screen.getByText(/Incorrecto/i)).toBeInTheDocument();
    expect(screen.getByText(/Respuesta correcta/i)).toBeInTheDocument();
  });

  it('persiste el score cuando se contestan todas', async () => {
    const user = userEvent.setup();
    render(<QuizRunner temaSlug="tema-test" quiz={quizMixto} />);

    function clickVerificarHabilitado() {
      const habilitado = screen
        .getAllByRole('button', { name: /Verificar/i })
        .find((b) => !(b as HTMLButtonElement).disabled);
      if (!habilitado) throw new Error('no hay botón "Verificar" habilitado');
      return user.click(habilitado);
    }

    // Pregunta 1: correcta
    await user.type(screen.getByLabelText(/Respuesta a la pregunta 1/), '4');
    await clickVerificarHabilitado();

    // Pregunta 2: clic en "bien" (correcta) y verificar
    await user.click(screen.getByRole('button', { name: /b\) bien/i }));
    await clickVerificarHabilitado();

    // Pregunta 3: Verdadero (correcta)
    await user.click(screen.getByRole('button', { name: /^Verdadero$/i }));

    // Resumen final: 3 correctas
    expect(await screen.findByText(/3 de 3 correctas|todas correctas/i)).toBeInTheDocument();

    const score = useProgreso.getState().getScoreQuiz('tema-test');
    expect(score?.correctas).toBe(3);
    expect(score?.total).toBe(3);
  });

  it('respeta la tolerancia en preguntas numéricas', async () => {
    const user = userEvent.setup();
    const quiz: Quiz = {
      preguntas: [
        {
          tipo: 'numerica',
          enunciado: 'pi',
          respuesta: 3.14,
          tolerancia: 0.05,
          explicacion: 'pi',
        },
      ],
    };
    render(<QuizRunner temaSlug="t" quiz={quiz} />);
    await user.type(screen.getByLabelText(/Respuesta a la pregunta 1/), '3.13');
    await user.click(screen.getByRole('button', { name: /Verificar/i }));
    expect(screen.getByText(/¡Correcto!/i)).toBeInTheDocument();
  });
});
