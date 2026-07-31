import styles from "./page.module.css";

export default function Dashboard() {
  return (
    <main className={styles.page}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          Barber<span>OS</span>
        </div>

        <nav>
          <a className={styles.active} href="/dashboard">
            Dashboard
          </a>

          <a href="#">Agenda</a>
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
            <span className={styles.welcome}>Bem-vindo de volta</span>
            <h1>Olá, Kauan 👋</h1>
          </div>

          <button className={styles.profile}>
            KR
          </button>
        </header>

        <section className={styles.stats}>
          <div className={styles.card}>
            <span>Agendamentos hoje</span>
            <strong>12</strong>
          </div>

          <div className={styles.card}>
            <span>Clientes</span>
            <strong>48</strong>
          </div>

          <div className={styles.card}>
            <span>Barbeiros</span>
            <strong>4</strong>
          </div>

          <div className={styles.card}>
            <span>Faturamento</span>
            <strong>R$ 1.280</strong>
          </div>
        </section>

        <section className={styles.agenda}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.welcome}>Hoje</span>
              <h2>Próximos agendamentos</h2>
            </div>

            <button>Ver agenda</button>
          </div>

          <div className={styles.appointment}>
            <div className={styles.time}>09:00</div>

            <div>
              <strong>João Silva</strong>
              <span>Corte + Barba</span>
            </div>

            <span className={styles.barber}>Carlos</span>
          </div>

          <div className={styles.appointment}>
            <div className={styles.time}>10:30</div>

            <div>
              <strong>Pedro Santos</strong>
              <span>Corte</span>
            </div>

            <span className={styles.barber}>Lucas</span>
          </div>

          <div className={styles.appointment}>
            <div className={styles.time}>14:00</div>

            <div>
              <strong>Gabriel Souza</strong>
              <span>Corte + Barba</span>
            </div>

            <span className={styles.barber}>Carlos</span>
          </div>
        </section>
      </section>
    </main>
  );
}