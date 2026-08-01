import styles from "./page.module.css";

export default function Financeiro() {
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

          <a href="/servicos">Serviços</a>

          <a className={styles.active} href="/financeiro">
            Financeiro
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
            <span className={styles.welcome}>BarberOS</span>

            <h1>Financeiro</h1>

            <p>
              Acompanhe o faturamento e as movimentações da sua barbearia.
            </p>
          </div>

          <div className={styles.headerActions}>
            <a
              href="/financeiro/ia"
              className={styles.aiButton}
            >
              <span>✦</span>
              Falar com IA
            </a>

            <button
              className={styles.profile}
              aria-label="Abrir perfil"
            >
              KR
            </button>
          </div>
        </header>

        {/* =========================
            RESUMO
        ========================= */}

        <section className={styles.stats}>
          <div className={styles.card}>
            <span>Faturamento este mês</span>

            <strong>R$ 5.840</strong>

            <small className={styles.positive}>
              ↑ 12% comparado ao mês anterior
            </small>
          </div>

          <div className={styles.card}>
            <span>Faturamento hoje</span>

            <strong>R$ 420</strong>

            <small className={styles.positive}>
              ↑ 8% comparado a ontem
            </small>
          </div>

          <div className={styles.card}>
            <span>Atendimentos</span>

            <strong>86</strong>

            <small className={styles.neutral}>
              Este mês
            </small>
          </div>

          <div className={styles.card}>
            <span>Ticket médio</span>

            <strong>R$ 67,90</strong>

            <small className={styles.positive}>
              ↑ 4% este mês
            </small>
          </div>
        </section>

        {/* =========================
            MOVIMENTAÇÕES
        ========================= */}

        <section className={styles.transactions}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.welcome}>
                Movimentações
              </span>

              <h2>Últimos pagamentos</h2>
            </div>

            <select className={styles.filter} defaultValue="mes">
            <option value="hoje">Hoje</option>
            <option value="semana">Esta semana</option>
            <option value="mes">Este mês</option>
            <option value="anterior">Mês anterior</option>
           </select>
          </div>

          <div className={styles.transactionHeader}>
            <span>Cliente</span>
            <span>Serviço</span>
            <span>Data</span>
            <span>Pagamento</span>
            <span>Valor</span>
          </div>

          {/* PAGAMENTO 1 */}

          <div className={styles.transaction}>
            <div className={styles.client}>
              <strong>João Silva</strong>

              <span>Cliente</span>
            </div>

            <span className={styles.service}>
              Corte + Barba
            </span>

            <span className={styles.date}>
              Hoje, 09:00
            </span>

            <span className={styles.payment}>
              Pix
            </span>

            <strong className={styles.value}>
              R$ 70,00
            </strong>
          </div>

          {/* PAGAMENTO 2 */}

          <div className={styles.transaction}>
            <div className={styles.client}>
              <strong>Pedro Santos</strong>

              <span>Cliente</span>
            </div>

            <span className={styles.service}>
              Corte
            </span>

            <span className={styles.date}>
              Hoje, 10:30
            </span>

            <span className={styles.payment}>
              Cartão
            </span>

            <strong className={styles.value}>
              R$ 40,00
            </strong>
          </div>

          {/* PAGAMENTO 3 */}

          <div className={styles.transaction}>
            <div className={styles.client}>
              <strong>Gabriel Souza</strong>

              <span>Cliente</span>
            </div>

            <span className={styles.service}>
              Corte + Barba
            </span>

            <span className={styles.date}>
              30/07/2026
            </span>

            <span className={styles.payment}>
              Pix
            </span>

            <strong className={styles.value}>
              R$ 70,00
            </strong>
          </div>

          {/* PAGAMENTO 4 */}

          <div className={styles.transaction}>
            <div className={styles.client}>
              <strong>Lucas Oliveira</strong>

              <span>Cliente</span>
            </div>

            <span className={styles.service}>
              Barba
            </span>

            <span className={styles.date}>
              30/07/2026
            </span>

            <span className={styles.payment}>
              Dinheiro
            </span>

            <strong className={styles.value}>
              R$ 30,00
            </strong>
          </div>
        </section>
      </section>
    </main>
  );
}