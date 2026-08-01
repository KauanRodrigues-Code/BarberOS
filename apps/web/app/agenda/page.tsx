"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Agenda() {
  const [selectedDate, setSelectedDate] = useState(
    new Date(2026, 6, 31)
  );

  function previousDay() {
    setSelectedDate((currentDate) => {
      const newDate = new Date(currentDate);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
  }

  function nextDay() {
    setSelectedDate((currentDate) => {
      const newDate = new Date(currentDate);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
  }

  function formatDate(date: Date) {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  }

  return (
    <main className={styles.page}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          Barber<span>OS</span>
        </div>

        <nav>
          <a href="/dashboard">Dashboard</a>

          <a className={styles.active} href="/agenda">
            Agenda
          </a>

          <a href="/clientes">Clientes</a>
          <a href="/barbeiros">Barbeiros</a>
          <a href="/servicos">Serviços</a>
          <a href="/financeiro">Financeiro</a>
        </nav>

        <div className={styles.sidebarFooter}>
          <span>© 2026</span>
          <strong>Kauan Rodrigues</strong>
        </div>
      </aside>

      <section className={styles.content}>
        <header className={styles.header}>
          <div>
            <span className={styles.welcome}>BarberOS</span>

            <h1>Agenda</h1>

            <p>
              Gerencie os horários e agendamentos da sua barbearia.
            </p>
          </div>

          <button className={styles.profile}>
            KR
          </button>
        </header>

        <section className={styles.toolbar}>
          <div className={styles.dateSelector}>
            <button
              type="button"
              onClick={previousDay}
              aria-label="Dia anterior"
            >
              ‹
            </button>

            <div>
              <span>Agenda</span>

              <strong>
                {formatDate(selectedDate)}
              </strong>
            </div>

            <button
              type="button"
              onClick={nextDay}
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
        </section>

        <section className={styles.calendar}>
          <div className={styles.calendarHeader}>
            <span>Horário</span>
            <span>Agendamento</span>
            <span>Barbeiro</span>
            <span>Status</span>
          </div>

          <div className={styles.appointment}>
            <div className={styles.time}>09:00</div>

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
            <div className={styles.time}>10:30</div>

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
              Aguardando
            </span>
          </div>

          <div className={styles.appointment}>
            <div className={styles.time}>12:00</div>

            <div className={styles.empty}>
              <span>Horário disponível</span>
            </div>

            <span className={styles.barber}>
              Carlos
            </span>

            <a
              href="/agenda/novo?horario=12:00"
              className={styles.available}
            >
              Agendar
            </a>
          </div>

          <div className={styles.appointment}>
            <div className={styles.time}>14:00</div>

            <div className={styles.client}>
              <strong>Gabriel Souza</strong>
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
            <div className={styles.time}>15:30</div>

            <div className={styles.empty}>
              <span>Horário disponível</span>
            </div>

            <span className={styles.barber}>
              Lucas
            </span>

            <a
              href="/agenda/novo?horario=15:30"
              className={styles.available}
            >
              Agendar
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}