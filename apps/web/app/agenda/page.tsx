import styles from "./page.module.css";

export default function Agenda() {
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

          <a href="#">Clientes</a>
          <a href="#">Barbeiros</a>
          <a href="#">Serviços</a>
          <a href="#">Financeiro</a>
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
            <p>Gerencie os horários e agendamentos da sua barbearia.</p>
          </div>

          <button className={styles.profile}>
            KR
          </button>
        </header>

        <section className={styles.toolbar}>
          <div className={styles.dateSelector}>
            <button>‹</button>

            <div>
              <span>Hoje</span>
              <strong>31 de Julho de 2026</strong>
            </div>

            <button>›</button>
          </div>

          <button className={styles.newAppointment}>
            + Novo agendamento
          </button>
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

            <span className={styles.barber}>Carlos</span>

            <span className={`${styles.status} ${styles.confirmed}`}>
              Confirmado
            </span>
          </div>

          <div className={styles.appointment}>
            <div className={styles.time}>10:30</div>

            <div className={styles.client}>
              <strong>Pedro Santos</strong>
              <span>Corte</span>
            </div>

            <span className={styles.barber}>Lucas</span>

            <span className={`${styles.status} ${styles.pending}`}>
              Aguardando
            </span>
          </div>

          <div className={styles.appointment}>
            <div className={styles.time}>12:00</div>

            <div className={styles.empty}>
              <span>Horário disponível</span>
            </div>

            <span className={styles.barber}>Carlos</span>

            <button className={styles.available}>
              Agendar
            </button>
          </div>

          <div className={styles.appointment}>
            <div className={styles.time}>14:00</div>

            <div className={styles.client}>
              <strong>Gabriel Souza</strong>
              <span>Corte + Barba</span>
            </div>

            <span className={styles.barber}>Carlos</span>

            <span className={`${styles.status} ${styles.confirmed}`}>
              Confirmado
            </span>
          </div>

          <div className={styles.appointment}>
            <div className={styles.time}>15:30</div>

            <div className={styles.empty}>
              <span>Horário disponível</span>
            </div>

            <span className={styles.barber}>Lucas</span>

            <button className={styles.available}>
              Agendar
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}