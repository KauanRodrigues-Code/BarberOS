"use client";

import { FormEvent, useState } from "react";
import styles from "./page.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (loading) {
      return;
    }

    setError("");

    const emailNormalizado = email.trim().toLowerCase();

    if (!emailNormalizado || !senha) {
      setError("Email e senha são obrigatórios.");
      return;
    }

    if (!API_URL) {
      setError(
        "Não foi possível conectar ao servidor. Tente novamente mais tarde.",
      );
      return;
    }

    setLoading(true);

    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, 10000);

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailNormalizado,
          senha,
        }),
        signal: controller.signal,
        cache: "no-store",
      });

      let data: {
        token?: string;
        message?: string | string[];
      } = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        throw new Error("Email ou senha inválidos.");
      }

      if (!data.token || typeof data.token !== "string") {
        throw new Error("Não foi possível concluir o login.");
      }

      /*
       * Temporário:
       * o backend ainda retorna o JWT diretamente.
       *
       * Em uma próxima etapa vamos migrar para
       * cookie HttpOnly, evitando que o token fique
       * acessível ao JavaScript do navegador.
       */
      localStorage.setItem("barberos_token", data.token);

      window.location.replace("/dashboard");
    } catch (err) {
      if (
        err instanceof DOMException &&
        err.name === "AbortError"
      ) {
        setError(
          "O servidor demorou para responder. Tente novamente.",
        );
      } else {
        setError(
          err instanceof Error
            ? err.message
            : "Não foi possível realizar o login.",
        );
      }
    } finally {
      clearTimeout(timeout);
      setLoading(false);
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.brand}>
          <h1>
            Barber<span>OS</span>
          </h1>

          <p>
            Gestão inteligente para sua barbearia
          </p>
        </div>

        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
              disabled={loading}
              maxLength={254}
            />
          </div>

          <div>
            <label htmlFor="password">
              Senha
            </label>

            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={senha}
              onChange={(event) =>
                setSenha(event.target.value)
              }
              required
              disabled={loading}
              maxLength={128}
            />
          </div>

          {error && (
            <p
              className={styles.error}
              role="alert"
              aria-live="polite"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Entrando..."
              : "Entrar"}
          </button>
        </form>

        <p className={styles.register}>
          Ainda não possui conta?

          <a href="/register">
            Criar agora
          </a>
        </p>

        <footer>
          © 2026 Kauan Rodrigues
        </footer>
      </section>
    </main>
  );
}