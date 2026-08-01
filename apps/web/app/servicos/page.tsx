import styles from "./page.module.css";

export default function Servicos() {
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

          <a href="/barbeiros">Barbeiros</a>

          <a className={styles.active} href="/servicos">
            Serviços
          </a>

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

            <h1>Serviços</h1>

            <p>
              Gerencie os serviços oferecidos pela sua barbearia.
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
              placeholder="Buscar serviço..."
            />
          </div>

          <a
            href="/servicos/novo"
            className={styles.newService}
          >
            + Novo serviço
          </a>
        </section>

        <section className={styles.services}>
          <div className={styles.servicesHeader}>
            <span>Serviço</span>
            <span>Duração</span>
            <span>Preço</span>
            <span>Status</span>
            <span>Ações</span>
          </div>

          <div className={styles.service}>
            <div className={styles.serviceInfo}>
              <div className={styles.icon}>C</div>

              <div>
                <strong>Corte masculino</strong>
                <span>Corte tradicional e acabamento</span>
              </div>
            </div>

            <span className={styles.duration}>
              45 min
            </span>

            <span className={styles.price}>
              R$ 35,00
            </span>

            <span
              className={`${styles.status} ${styles.activeStatus}`}
            >
              Ativo
            </span>

            <a
              href="/servicos/corte-masculino"
              className={styles.action}
            >
              Ver serviço
            </a>
          </div>

          <div className={styles.service}>
            <div className={styles.serviceInfo}>
              <div className={styles.icon}>B</div>

              <div>
                <strong>Barba</strong>
                <span>Barba completa e acabamento</span>
              </div>
            </div>

            <span className={styles.duration}>
              30 min
            </span>

            <span className={styles.price}>
              R$ 25,00
            </span>

            <span
              className={`${styles.status} ${styles.activeStatus}`}
            >
              Ativo
            </span>

            <a
              href="/servicos/barba"
              className={styles.action}
            >
              Ver serviço
            </a>
          </div>

          <div className={styles.service}>
            <div className={styles.serviceInfo}>
              <div className={styles.icon}>CB</div>

              <div>
                <strong>Corte + Barba</strong>
                <span>Combo completo</span>
              </div>
            </div>

            <span className={styles.duration}>
              1h 10min
            </span>

            <span className={styles.price}>
              R$ 55,00
            </span>

            <span
              className={`${styles.status} ${styles.activeStatus}`}
            >
              Ativo
            </span>

            <a
              href="/servicos/corte-barba"
              className={styles.action}
            >
              Ver serviço
            </a>
          </div>

          <div className={styles.service}>
            <div className={styles.serviceInfo}>
              <div className={styles.icon}>P</div>

              <div>
                <strong>Pezinho</strong>
                <span>Acabamento e contorno</span>
              </div>
            </div>

            <span className={styles.duration}>
              15 min
            </span>

            <span className={styles.price}>
              R$ 15,00
            </span>

            <span
              className={`${styles.status} ${styles.inactiveStatus}`}
            >
              Inativo
            </span>

            <a
              href="/servicos/pezinho"
              className={styles.action}
            >
              Ver serviço
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}