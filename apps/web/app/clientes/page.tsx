import styles from "./page.module.css";

export default function Clientes() {
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
            <h1>Clientes</h1>
            <p>
              Gerencie os clientes da sua barbearia.
            </p>
          </div>

          <button className={styles.profile}>
            KR
          </button>
        </header>

        <section className={styles.toolbar}>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Buscar cliente..."
            />
          </div>

          <button className={styles.newClient}>
            + Novo cliente
          </button>
        </section>

        <section className={styles.clients}>
          <div className={styles.clientsHeader}>
            <span>Cliente</span>
            <span>Telefone</span>
            <span>Último atendimento</span>
            <span>Ações</span>
          </div>

          <div className={styles.client}>
            <div className={styles.clientInfo}>
              <div className={styles.avatar}>JS</div>

              <div>
                <strong>João Silva</strong>
                <span>Cliente desde 2026</span>
              </div>
            </div>

            <span className={styles.phone}>
              (11) 99999-9999
            </span>

            <span className={styles.lastVisit}>
              Hoje
            </span>

            <button className={styles.action}>
              Ver cliente
            </button>
          </div>

          <div className={styles.client}>
            <div className={styles.clientInfo}>
              <div className={styles.avatar}>PS</div>

              <div>
                <strong>Pedro Santos</strong>
                <span>Cliente desde 2026</span>
              </div>
            </div>

            <span className={styles.phone}>
              (11) 98888-8888
            </span>

            <span className={styles.lastVisit}>
              28/07/2026
            </span>

            <button className={styles.action}>
              Ver cliente
            </button>
          </div>

          <div className={styles.client}>
            <div className={styles.clientInfo}>
              <div className={styles.avatar}>GS</div>

              <div>
                <strong>Gabriel Souza</strong>
                <span>Cliente desde 2026</span>
              </div>
            </div>

            <span className={styles.phone}>
              (11) 97777-7777
            </span>

            <span className={styles.lastVisit}>
              25/07/2026
            </span>

            <button className={styles.action}>
              Ver cliente
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}