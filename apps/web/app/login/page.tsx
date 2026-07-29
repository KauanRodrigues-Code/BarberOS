import styles from "./page.module.css";

export default function Login() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>

        <div className={styles.brand}>
          <h1>
            Barber<span>OS</span>
          </h1>

          <p>
            Gestão inteligente para sua barbearia
          </p>
        </div>


        <form className={styles.form}>

          <div>
            <label>Email</label>
            <input 
              type="email"
              placeholder="seu@email.com"
            />
          </div>


          <div>
            <label>Senha</label>
            <input 
              type="password"
              placeholder="••••••••"
            />
          </div>


          <button type="submit">
            Entrar
          </button>

        </form>


        <p className={styles.register}>
          Ainda não possui conta?
          <a href="#">
            Criar agora
          </a>
        </p>


       <footer>
  © 2026 Kauan Rodrigues
</footer>

      </section>
    </main>
  );
}