import styles from "./page.module.css";

export default function NovoBarbeiro() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.header}>
          <div>
            <span>Novo barbeiro</span>

            <h1>Cadastrar barbeiro</h1>

            <p>
              Adicione um novo profissional à equipe da sua barbearia.
            </p>
          </div>

          <a href="/barbeiros" className={styles.back}>
            Voltar
          </a>
        </div>

        <form className={styles.form}>
          {/* NOME */}
          <div className={styles.field}>
            <label htmlFor="name">
              Nome completo
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Digite o nome do barbeiro"
              required
            />
          </div>

          {/* TELEFONE */}
          <div className={styles.field}>
            <label htmlFor="phone">
              Telefone
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(11) 99999-9999"
              required
            />
          </div>

          {/* EMAIL */}
          <div className={styles.field}>
            <label htmlFor="email">
              E-mail
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="barbeiro@email.com"
            />
          </div>

          {/* ANO DE ENTRADA */}
          <div className={styles.field}>
            <label htmlFor="since">
              Ano de entrada
            </label>

            <input
              id="since"
              name="since"
              type="number"
              placeholder="2026"
              min="2000"
              max="2100"
              required
            />
          </div>

          {/* STATUS */}
          <div className={styles.field}>
            <label htmlFor="status">
              Status
            </label>

            <select
              id="status"
              name="status"
              defaultValue="ativo"
            >
              <option value="ativo">
                Ativo
              </option>

              <option value="folga">
                Folga
              </option>

              <option value="inativo">
                Inativo
              </option>
            </select>
          </div>

          {/* AÇÕES */}
          <div className={styles.actions}>
            <a
              href="/barbeiros"
              className={styles.cancel}
            >
              Cancelar
            </a>

            <button
              type="submit"
              className={styles.submit}
            >
              Cadastrar barbeiro
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