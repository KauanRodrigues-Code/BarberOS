import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.content}>
          <span className={styles.badge}>
            🚀 Gestão inteligente para barbearias
          </span>

          <h1>
            Sua barbearia em outro nível com o{" "}
            <span>BarberOS</span>
          </h1>

          <p>
            Controle agendamentos, clientes, serviços e o crescimento
            do seu negócio em uma única plataforma.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primary}>
              Começar agora
            </button>

            <button className={styles.secondary}>
              Conhecer plataforma
            </button>
          </div>
        </div>

        <div className={styles.dashboard}>
          <div className={styles.card}>
            <h3>Agenda de hoje</h3>
            <p>12 horários marcados</p>
          </div>

          <div className={styles.card}>
            <h3>Clientes</h3>
            <p>+350 cadastrados</p>
          </div>

          <div className={styles.card}>
            <h3>Faturamento</h3>
            <p>Controle completo</p>
          </div>
        </div>
      </section>
    </main>
  );
}