import styles from "./page.module.css";

export default function NovoCliente() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.header}>
          <div>
            <span>Novo cliente</span>
            <h1>Cadastrar cliente</h1>
            <p>
              Adicione um novo cliente à sua barbearia.
            </p>
          </div>

          <a href="/clientes" className={styles.back}>
            Voltar
          </a>
        </div>

        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              placeholder="Nome do cliente"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="phone">Telefone</label>
            <input
              id="phone"
              type="tel"
              placeholder="(00) 00000-0000"
            />
          </div>

          <div className={styles.actions}>
            <a href="/clientes" className={styles.cancel}>
              Cancelar
            </a>

            <button type="submit" className={styles.submit}>
              Cadastrar cliente
            </button>
          </div>
        </form>

        <footer>
          © 2026 Kauan Rodrigues
        </footer>
      </section>
    </main>
  );
}