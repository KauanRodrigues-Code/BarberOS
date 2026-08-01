import styles from "./page.module.css";

export default function Cliente() {
  return (
    <main className={styles.page}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          Barber<span>OS</span>
        </div>

        <nav>
          <a href="/dashboard">Dashboard</a>

          <a href="/agenda">Agenda</a>

          <a className={styles.active} href="/clientes">
            Clientes
          </a>

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

            <h1>Cliente</h1>

            <p>
              Visualize as informações e o histórico do cliente.
            </p>
          </div>

          <button className={styles.profile}>
            KR
          </button>
        </header>

        {/* VOLTAR PARA CLIENTES */}

        <a href="/clientes" className={styles.back}>
          ← Voltar para clientes
        </a>

        {/* PERFIL DO CLIENTE */}

        <section className={styles.profileCard}>
          <div className={styles.avatar}>
            JS
          </div>

          <div className={styles.clientMain}>
            <span className={styles.label}>
              Cliente
            </span>

            <h2>João Silva</h2>

            <p>
              Cliente desde 2026
            </p>
          </div>
        </section>

        {/* INFORMAÇÕES */}

        <section className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <span>Telefone</span>

            <strong>
              (11) 99999-9999
            </strong>
          </div>

          <div className={styles.infoCard}>
            <span>Email</span>

            <strong>
              joao@email.com
            </strong>
          </div>

          <div className={styles.infoCard}>
            <span>Último atendimento</span>

            <strong>
              Hoje
            </strong>
          </div>

          <div className={styles.infoCard}>
            <span>Total de atendimentos</span>

            <strong>
              24
            </strong>
          </div>
        </section>

        {/* HISTÓRICO */}

        <section className={styles.history}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.label}>
                Histórico
              </span>

              <h2>
                Últimos atendimentos
              </h2>
            </div>

            <a
              href="/agenda/novo?cliente=joao"
              className={styles.newAppointment}
            >
              + Novo agendamento
            </a>
          </div>

          <div className={styles.historyHeader}>
            <span>Data</span>
            <span>Serviço</span>
            <span>Barbeiro</span>
            <span>Status</span>
          </div>

          {/* ATENDIMENTO 1 */}

          <div className={styles.historyItem}>
            <span>31/07/2026</span>

            <div>
              <strong>Corte + Barba</strong>
              <small>R$ 60,00</small>
            </div>

            <span>Carlos</span>

            <span
              className={`${styles.status} ${styles.confirmed}`}
            >
              Concluído
            </span>
          </div>

          {/* ATENDIMENTO 2 */}

          <div className={styles.historyItem}>
            <span>24/07/2026</span>

            <div>
              <strong>Corte</strong>
              <small>R$ 40,00</small>
            </div>

            <span>Lucas</span>

            <span
              className={`${styles.status} ${styles.confirmed}`}
            >
              Concluído
            </span>
          </div>

          {/* ATENDIMENTO 3 */}

          <div className={styles.historyItem}>
            <span>17/07/2026</span>

            <div>
              <strong>Corte + Barba</strong>
              <small>R$ 60,00</small>
            </div>

            <span>Carlos</span>

            <span
              className={`${styles.status} ${styles.confirmed}`}
            >
              Concluído
            </span>
          </div>
        </section>
      </section>
    </main>
  );
}