"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css";

function AgendaContent() {
  const searchParams = useSearchParams();

  const horario = searchParams.get("horario") || "";
  const cliente = searchParams.get("cliente") || "";

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.header}>
          <div>
            <span>Novo agendamento</span>

            <h1>Agendar atendimento</h1>

            <p>
              Crie um novo horário para sua barbearia.
            </p>
          </div>
        </div>

        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="client">
              Cliente
            </label>

            <select
              id="client"
              defaultValue={cliente}
            >
              <option value="" disabled>
                Selecione o cliente
              </option>

              <option value="joao">
                João Silva
              </option>

              <option value="pedro">
                Pedro Santos
              </option>

              <option value="gabriel">
                Gabriel Souza
              </option>
            </select>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="date">
                Data
              </label>

              <input
                id="date"
                type="date"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="time">
                Horário
              </label>

              <input
                id="time"
                type="time"
                defaultValue={horario}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="service">
              Serviço
            </label>

            <select
              id="service"
              defaultValue=""
            >
              <option value="" disabled>
                Selecione o serviço
              </option>

              <option value="corte">
                Corte
              </option>

              <option value="barba">
                Barba
              </option>

              <option value="corte-barba">
                Corte + Barba
              </option>
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="barber">
              Barbeiro
            </label>

            <select
              id="barber"
              defaultValue=""
            >
              <option value="" disabled>
                Selecione o barbeiro
              </option>

              <option value="carlos">
                Carlos
              </option>

              <option value="lucas">
                Lucas
              </option>
            </select>
          </div>

          <div className={styles.actions}>
            <a
              href="/agenda"
              className={styles.cancel}
            >
              Cancelar
            </a>

            <button
              type="submit"
              className={styles.submit}
            >
              Criar agendamento
            </button>
          </div>
        </form>

        <footer>
          © 2026 Kauan Rodrigues
        </footer>
      </section>
    </main>
  );
}

export default function Agenda() {
  return (
    <Suspense fallback={null}>
      <AgendaContent />
    </Suspense>
  );
}pnpm build