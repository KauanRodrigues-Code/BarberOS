import styles from "./page.module.css";

export default function NovoServico() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.header}>
          <div>
            <span>Novo serviço</span>

            <h1>Cadastrar serviço</h1>

            <p>
              Adicione um novo serviço oferecido pela sua barbearia.
            </p>
          </div>

          <a href="/servicos" className={styles.back}>
            Voltar
          </a>
        </div>

        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name">
              Nome do serviço
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Ex: Corte masculino"
              required
            />
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="price">
                Preço
              </label>

              <input
                id="price"
                name="price"
                type="number"
                step="0.01"
                min="0"
                placeholder="45.00"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="duration">
                Duração
              </label>

              <select
                id="duration"
                name="duration"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Selecione
                </option>

                <option value="15">
                  15 minutos
                </option>

                <option value="30">
                  30 minutos
                </option>

                <option value="45">
                  45 minutos
                </option>

                <option value="60">
                  1 hora
                </option>

                <option value="90">
                  1h30
                </option>
              </select>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="description">
              Descrição
            </label>

            <textarea
              id="description"
              name="description"
              placeholder="Descreva brevemente o serviço..."
              rows={4}
            />
          </div>

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

              <option value="inativo">
                Inativo
              </option>
            </select>
          </div>

          <div className={styles.actions}>
            <a
              href="/servicos"
              className={styles.cancel}
            >
              Cancelar
            </a>

            <button
              type="submit"
              className={styles.submit}
            >
              Cadastrar serviço
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