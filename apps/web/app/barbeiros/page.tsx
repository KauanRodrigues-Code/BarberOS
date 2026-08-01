import styles from "./page.module.css";

export default function Barbeiros() {
  return (
    <main className={styles.page}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          Barber<span>OS</span>
        </div>

        <nav>
          <a href="/dashboard">Dashboard</a>

          <a href="/agenda">Agenda</a>

          <a href="/clientes">Clientes</a>

          <a className={styles.active} href="/barbeiros">
            Barbeiros
          </a>

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

            <h1>Barbeiros</h1>

            <p>
              Gerencie os barbeiros e a equipe da sua barbearia.
            </p>
          </div>

          <button
            className={styles.profile}
            aria-label="Abrir perfil"
          >
            KR
          </button>
        </header>

        <section className={styles.toolbar}>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Buscar barbeiro..."
            />
          </div>

          <a
            href="/barbeiros/novo"
            className={styles.newBarber}
          >
            + Novo barbeiro
          </a>
        </section>

        <section className={styles.barbers}>
          <div className={styles.barbersHeader}>
            <span>Barbeiro</span>
            <span>Especialidade</span>
            <span>Atendimentos</span>
            <span>Status</span>
            <span>Ações</span>
          </div>

          <div className={styles.barber}>
            <div className={styles.barberInfo}>
              <div className={styles.avatar}>CA</div>

              <div>
                <strong>Carlos Almeida</strong>
                <span>Barbeiro desde 2024</span>
              </div>
            </div>

            <span className={styles.specialty}>
              Corte e Barba
            </span>

            <span className={styles.attendances}>
              156 atendimentos
            </span>

            <span className={`${styles.status} ${styles.activeStatus}`}>
              Ativo
            </span>

            <a
              href="/barbeiros/carlos"
              className={styles.action}
            >
              Ver perfil
            </a>
          </div>

          <div className={styles.barber}>
            <div className={styles.barberInfo}>
              <div className={styles.avatar}>LS</div>

              <div>
                <strong>Lucas Santos</strong>
                <span>Barbeiro desde 2025</span>
              </div>
            </div>

            <span className={styles.specialty}>
              Corte masculino
            </span>

            <span className={styles.attendances}>
              98 atendimentos
            </span>

            <span className={`${styles.status} ${styles.activeStatus}`}>
              Ativo
            </span>

            <a
              href="/barbeiros/lucas"
              className={styles.action}
            >
              Ver perfil
            </a>
          </div>

          <div className={styles.barber}>
            <div className={styles.barberInfo}>
              <div className={styles.avatar}>RM</div>

              <div>
                <strong>Rafael Martins</strong>
                <span>Barbeiro desde 2026</span>
              </div>
            </div>

            <span className={styles.specialty}>
              Barba e acabamento
            </span>

            <span className={styles.attendances}>
              64 atendimentos
            </span>

            <span className={`${styles.status} ${styles.activeStatus}`}>
              Ativo
            </span>

            <a
              href="/barbeiros/rafael"
              className={styles.action}
            >
              Ver perfil
            </a>
          </div>

          <div className={styles.barber}>
            <div className={styles.barberInfo}>
              <div className={styles.avatar}>JF</div>

              <div>
                <strong>João Ferreira</strong>
                <span>Barbeiro desde 2026</span>
              </div>
            </div>

            <span className={styles.specialty}>
              Corte e finalização
            </span>

            <span className={styles.attendances}>
              41 atendimentos
            </span>

            <span className={`${styles.status} ${styles.inactiveStatus}`}>
              Folga
            </span>

            <a
              href="/barbeiros/joao"
              className={styles.action}
            >
              Ver perfil
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}