"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("barberos_token");

    if (!token) {
      router.replace("/login");
    }
  }, [router]);

  function handleLogout() {
    localStorage.removeItem("barberos_token");
    router.replace("/login");
  }

  return (
    <main className={styles.page}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          Barber<span>OS</span>
        </div>

        <nav>
          <a className={styles.active} href="/dashboard">
            <span>Dashboard</span>
          </a>

          <a href="/agenda">
            <span>Agenda</span>
          </a>

          <a href="/clientes">
            <span>Clientes</span>
          </a>

          <a href="/barbeiros">
            <span>Barbeiros</span>
          </a>

          <a href="/servicos">
            <span>Serviços</span>
          </a>

          <a href="/financeiro">
            <span>Financeiro</span>
          </a>
        </nav>

        <div className={styles.sidebarFooter}>
          <span>© 2026</span>
          <strong>Kauan Rodrigues</strong>
        </div>
      </aside>

      <section className={styles.content}>
        <header className={styles.header}>
          <div>
            <span className={styles.welcome}>
              Bem-vindo de volta
            </span>

            <h1>Olá, Kauan 👋</h1>

            <p className={styles.date}>
              Aqui está o resumo da sua barbearia hoje.
            </p>
          </div>

          <button
            className={styles.profile}
            aria-label="Sair"
            type="button"
            onClick={handleLogout}
          >
            KR
          </button>
        </header>

        <section className={styles.stats}>
          <div className={styles.card}>
            <span>Agendamentos hoje</span>
            <strong>12</strong>
            <small className={styles.positive}>
              ↑ 8% comparado a ontem
            </small>
          </div>

          <div className={styles.card}>
            <span>Clientes</span>
            <strong>48</strong>
            <small className={styles.positive}>
              ↑ 5 novos este mês
            </small>
          </div>

          <div className={styles.card}>
            <span>Barbeiros</span>
            <strong>4</strong>
            <small className={styles.neutral}>
              Equipe ativa
            </small>
          </div>

          <div className={styles.card}>
            <span>Faturamento</span>
            <strong>R$ 1.280</strong>
            <small className={styles.positive}>
              ↑ 12% este mês
            </small>
          </div>
        </section>

        <section className={styles.agenda}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.welcome}>
                Hoje
              </span>

              <h2>Próximos agendamentos</h2>
            </div>

            <a
              href="/agenda"
              className={styles.viewAgenda}
            >
              Ver agenda
            </a>
          </div>

          <div className={styles.appointment}>
            <div className={styles.time}>
              09:00
            </div>

            <div className={styles.client}>
              <strong>João Silva</strong>
              <span>Corte + Barba</span>
            </div>

            <div className={styles.appointmentInfo}>
              <span className={styles.barber}>
                Carlos
              </span>

              <span
                className={`${styles.status} ${styles.confirmed}`}
              >
                Confirmado
              </span>
            </div>
          </div>

          <div className={styles.appointment}>
            <div className={styles.time}>
              10:30
            </div>

            <div className={styles.client}>
              <strong>Pedro Santos</strong>
              <span>Corte</span>
            </div>

            <div className={styles.appointmentInfo}>
              <span className={styles.barber}>
                Lucas
              </span>

              <span
                className={`${styles.status} ${styles.pending}`}
              >
                Aguardando
              </span>
            </div>
          </div>

          <div className={styles.appointment}>
            <div className={styles.time}>
              14:00
            </div>

            <div className={styles.client}>
              <strong>Gabriel Souza</strong>
              <span>Corte + Barba</span>
            </div>

            <div className={styles.appointmentInfo}>
              <span className={styles.barber}>
                Carlos
              </span>

              <span
                className={`${styles.status} ${styles.confirmed}`}
              >
                Confirmado
              </span>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}