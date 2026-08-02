"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Agenda() {
  const [dataAtual, setDataAtual] = useState(
    new Date(2026, 7, 1)
  );

  function mudarDia(dias: number) {
    setDataAtual((data) => {
      const novaData = new Date(data);
      novaData.setDate(novaData.getDate() + dias);
      return novaData;
    });
  }

  function formatarData(data: Date) {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(data);
  }

  return (
    <main className={styles.page}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          Barber<span>OS</span>
        </div>

        <nav>
          <a href="/dashboard">Dashboard</a>

          <a href="/agenda" className={styles.active}>
            Agenda
          </a>

          <a href="/clientes">Clientes</a>
          <a href="/barbeiros">Barbeiros</a>
          <a href="/servicos">Serviços</a>
          <a href="/financeiro">Financeiro</a>
        </nav>

        <div className={styles.sidebarFooter}>
          <strong>BarberOS</strong>
          <span>© 2026 Kauan Rodrigues</span>
        </div>
      </aside>

      <section className={styles.content}>
        <header className={styles.header}>
          <div>
            <span className={styles.welcome}>
              Gestão da barbearia
            </span>

            <h1>Agenda</h1>

            <p>
              Acompanhe os atendimentos e horários do dia.
            </p>
          </div>

          <button
            className={styles.profile}
            type="button"
          >
            K
          </button>
        </header>

        <div className={styles.toolbar}>
          <div className={styles.dateSelector}>
            <button
              type="button"
              onClick={() => mudarDia(-1)}
              aria-label="Dia anterior"
            >
              ‹
            </button>

            <div>
              <span>Data selecionada</span>

              <strong>
                {formatarData(dataAtual)}
              </strong>
            </div>

            <button
              type="button"
              onClick={() => mudarDia(1)}
              aria-label="Próximo dia"
            >
              ›
            </button>
          </div>

          <a
            href="/agenda/novo"
            className={styles.newAppointment}
          >
            + Novo agendamento
          </a>
        </div>

        <div className={styles.calendar}>
          <div className={styles.calendarHeader}>
            <span>Horário</span>
            <span>Cliente</span>
            <span>Barbeiro</span>
            <span>Status</span>
          </div>

          <div className={styles.appointment}>
            <span className={styles.time}>09:00</span>

            <div className={styles.client}>
              <strong>João Silva</strong>
              <span>Corte + Barba</span>
            </div>

            <span className={styles.barber}>
              Carlos
            </span>

            <span
              className={`${styles.status} ${styles.confirmed}`}
            >
              Confirmado
            </span>
          </div>

          <div className={styles.appointment}>
            <span className={styles.time}>10:00</span>

            <div className={styles.client}>
              <strong>Pedro Santos</strong>
              <span>Corte</span>
            </div>

            <span className={styles.barber}>
              Lucas
            </span>

            <span
              className={`${styles.status} ${styles.pending}`}
            >
              Pendente
            </span>
          </div>

          <div className={styles.appointment}>
            <span className={styles.time}>11:00</span>

            <div className={styles.empty}>
              <span>Horário disponível</span>
            </div>

            <span className={styles.barber}>
              Carlos
            </span>

            <a
              href="/agenda/novo?horario=11:00"
              className={styles.available}
            >
              Agendar
            </a>
          </div>

          <div className={styles.appointment}>
            <span className={styles.time}>13:00</span>

            <div className={styles.client}>
              <strong>Gabriel Souza</strong>
              <span>Barba</span>
            </div>

            <span className={styles.barber}>
              Lucas
            </span>

            <span
              className={`${styles.status} ${styles.confirmed}`}
            >
              Confirmado
            </span>
          </div>

          <div className={styles.appointment}>
            <span className={styles.time}>14:00</span>

            <div className={styles.empty}>
              <span>Horário disponível</span>
            </div>

            <span className={styles.barber}>
              Carlos
            </span>

            <a
              href="/agenda/novo?horario=14:00"
              className={styles.available}
            >
              Agendar
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}