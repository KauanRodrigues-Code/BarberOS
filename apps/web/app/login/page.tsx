"use client";

import { FormEvent, useState } from "react";
import styles from "./page.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `${API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            senha,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Email ou senha inválidos.",
        );
      }

      localStorage.setItem(
        "barberos_token",
        data.token,
      );

      window.location.href = "/dashboard";
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Erro ao conectar com o servidor.",
      );
    } finally {
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
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              required
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
            />
          </div>

          {error && (
            <p
              className={styles.error}
              role="alert"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
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