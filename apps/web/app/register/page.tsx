import styles from "./page.module.css";

export default function Register() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <div className={styles.brand}>
          <h1>
            Barber<span>OS</span>
          </h1>

          <p>
            Crie sua conta e comece a gerenciar sua barbearia.
          </p>
        </div>

        <form className={styles.form}>
          <div>
            <label htmlFor="name">Seu nome</label>
            <input
              id="name"
              type="text"
              autoComplete="name"
            />
          </div>

          <div>
            <label htmlFor="barbershop">Nome da barbearia</label>
            <input
              id="barbershop"
              type="text"
              autoComplete="organization"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
            />
          </div>

          <button type="submit">
            Criar conta
          </button>
        </form>

        <p className={styles.login}>
          Já possui uma conta?
          <a href="/login">Entrar</a>
        </p>

        <footer>
          © 2026 Kauan Rodrigues
        </footer>
      </section>
    </main>
  );
}