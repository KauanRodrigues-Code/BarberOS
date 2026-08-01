"use client";

import { FormEvent, useState } from "react";
import styles from "./page.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Register() {
  const [nome, setNome] = useState("");
  const [nomeBarbearia, setNomeBarbearia] = useState("");
  const [telefoneBarbearia, setTelefoneBarbearia] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          senha,
          nomeBarbearia,
          telefoneBarbearia,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Não foi possível realizar o cadastro."
        );
      }

      localStorage.setItem("barberos_token", data.token);

      setSuccess(true);

      setNome("");
      setNomeBarbearia("");
      setTelefoneBarbearia("");
      setEmail("");
      setSenha("");

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1800);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Erro ao conectar com o servidor."
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
            Crie sua conta e comece a gerenciar sua barbearia.
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Seu nome</label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="barbershop">Nome da barbearia</label>
            <input
              id="barbershop"
              type="text"
              autoComplete="organization"
              value={nomeBarbearia}
              onChange={(event) => setNomeBarbearia(event.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="phone">Telefone da barbearia</label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              value={telefoneBarbearia}
              onChange={(event) =>
                setTelefoneBarbearia(event.target.value)
              }
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              required
              minLength={6}
            />
          </div>

          {error && (
            <p className={styles.error} role="alert">
              {error}
            </p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Criando conta..." : "Criar conta"}
          </button>
        </form>

        <p className={styles.login}>
          Já possui uma conta?
          <a href="/login">Entrar</a>
        </p>

        <footer>© 2026 Kauan Rodrigues</footer>
      </section>

      {success && (
        <div className={styles.successOverlay}>
          <div className={styles.successCard}>
            <div className={styles.successIcon}>
              <svg viewBox="0 0 52 52">
                <circle
                  className={styles.successCircle}
                  cx="26"
                  cy="26"
                  r="24"
                />
                <path
                  className={styles.successCheck}
                  d="M14 27l8 8 16-18"
                />
              </svg>
            </div>

            <h2>Tudo pronto!</h2>

            <p>
              Sua barbearia foi criada com sucesso.
            </p>

            <span>Preparando seu painel...</span>
          </div>
        </div>
      )}
    </main>
  );
}