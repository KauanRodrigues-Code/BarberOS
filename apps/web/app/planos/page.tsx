import Link from "next/link";
import styles from "./page.module.css";

const plans = [
  {
    name: "Starter",
    description: "Para começar a organizar sua barbearia.",
    price: "29,90",
    featured: false,
    features: [
      "Agenda de agendamentos",
      "Cadastro de clientes",
      "Cadastro de serviços",
      "Até 2 barbeiros",
      "Agendamento online",
      "Dashboard básico",
    ],
  },
  {
    name: "Pro",
    description: "Para barbearias em crescimento.",
    price: "59,90",
    featured: true,
    features: [
      "Tudo do plano Starter",
      "Até 5 barbeiros",
      "Gestão financeira",
      "Relatórios",
      "Controle de folgas",
      "Histórico de clientes",
      "Dashboard completo",
      "Suporte prioritário",
    ],
  },
  {
    name: "Business",
    description: "Para operações maiores e mais completas.",
    price: "99,90",
    featured: false,
    features: [
      "Tudo do plano Pro",
      "Barbeiros ilimitados",
      "Relatórios avançados",
      "Gestão financeira completa",
      "Recursos administrativos",
      "Chat com IA",
      "Suporte prioritário",
    ],
  },
];

export default function Planos() {
  return (
    <main className={styles.page}>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          Barber<span>OS</span>
        </Link>

        <div className={styles.navLinks}>
          <Link href="/#como-funciona">Como funciona</Link>
          <Link href="/#recursos">Recursos</Link>
          <Link href="/#sobre">Sobre</Link>
        </div>

        <Link href="/login" className={styles.login}>
          Entrar
        </Link>
      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <span className={styles.label}>
          PLANOS
        </span>

        <h1>
          Escolha o plano ideal
          <br />
          para sua <span>barbearia.</span>
        </h1>

        <p>
          Comece a organizar sua operação e tenha tudo que
          sua barbearia precisa em um só lugar.
        </p>
      </section>

      {/* =====================================================
          PLANOS
      ===================================================== */}

      <section className={styles.plansSection}>
        <div className={styles.plansGrid}>
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`${styles.planCard} ${
                plan.featured ? styles.featured : ""
              }`}
            >
              {plan.featured && (
                <div className={styles.popular}>
                  MAIS POPULAR
                </div>
              )}

              <div className={styles.planTop}>
                <span className={styles.planName}>
                  {plan.name}
                </span>

                <p>{plan.description}</p>
              </div>

              <div className={styles.price}>
                <span>R$</span>
                <strong>{plan.price}</strong>
                <small>/mês</small>
              </div>

              <div className={styles.divider} />

              <div className={styles.featureTitle}>
                O que está incluso:
              </div>

              <ul className={styles.features}>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span className={styles.check}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/login"
                className={`${styles.planButton} ${
                  plan.featured
                    ? styles.planButtonFeatured
                    : ""
                }`}
              >
                {plan.featured
                  ? "Começar agora"
                  : "Escolher plano"}

                <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          IA
      ===================================================== */}

      <section className={styles.aiSection}>
        <div className={styles.aiGlow} />

        <div className={styles.aiContent}>
          <span className={styles.label}>
            BUSINESS
          </span>

          <h2>
            Uma inteligência
            <br />
            para ajudar sua <span>operação.</span>
          </h2>

          <p>
            No plano Business, o BarberOS conta com um
            Chat com IA para ajudar você a analisar informações
            da sua barbearia e tomar decisões com mais facilidade.
          </p>

          <div className={styles.aiFeatures}>
            <div>
              <span>✦</span>
              <strong>Assistente inteligente</strong>
              <p>
                Converse com a IA sobre os dados da sua operação.
              </p>
            </div>

            <div>
              <span>✦</span>
              <strong>Análises rápidas</strong>
              <p>
                Tenha respostas e insights de forma simples.
              </p>
            </div>

            <div>
              <span>✦</span>
              <strong>Mais controle</strong>
              <p>
                Use informações da operação para tomar decisões.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.aiCard}>
          <div className={styles.aiCardHeader}>
            <div className={styles.aiIcon}>
              ✦
            </div>

            <div>
              <strong>BarberOS AI</strong>
              <span>Assistente inteligente</span>
            </div>

            <small>● ONLINE</small>
          </div>

          <div className={styles.chat}>
            <div className={styles.messageUser}>
              Como está o desempenho da minha barbearia?
            </div>

            <div className={styles.messageAI}>
              <span>✦</span>
              <p>
                Sua operação apresentou crescimento
                neste mês. Posso analisar faturamento,
                agendamentos e desempenho dos serviços
                para você.
              </p>
            </div>

            <div className={styles.chatInput}>
              <span>Digite uma pergunta...</span>
              <strong>↑</strong>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className={styles.faq}>
        <div className={styles.faqHeading}>
          <span className={styles.label}>
            DÚVIDAS
          </span>

          <h2>
            Tudo simples.
            <br />
            <span>Sem complicação.</span>
          </h2>
        </div>

        <div className={styles.faqList}>
          <div className={styles.faqItem}>
            <strong>
              Posso trocar de plano depois?
            </strong>

            <span>
              +
            </span>
          </div>

          <div className={styles.faqItem}>
            <strong>
              Posso cancelar quando quiser?
            </strong>

            <span>
              +
            </span>
          </div>

          <div className={styles.faqItem}>
            <strong>
              O agendamento online está incluso?
            </strong>

            <span>
              +
            </span>
          </div>

          <div className={styles.faqItem}>
            <strong>
              O Chat com IA está disponível em qual plano?
            </strong>

            <span>
              +
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className={styles.cta}>
        <div className={styles.ctaGlow} />

        <span className={styles.label}>
          BARBEROS
        </span>

        <h2>
          Pronto para organizar
          <br />
          sua <span>barbearia?</span>
        </h2>

        <p>
          Escolha seu plano e comece a transformar
          a gestão da sua operação.
        </p>

        <Link href="/planos" className={styles.ctaButton}>
          Escolher planos
          <span>→</span>
        </Link>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div>
            <div className={styles.footerLogo}>
              Barber<span>OS</span>
            </div>

            <p>
              Gestão inteligente para barbearias.
            </p>
          </div>

          <div className={styles.footerLinks}>
            <Link href="/">Início</Link>
            <Link href="/#recursos">Recursos</Link>
            <Link href="/planos">Planos</Link>
            <Link href="/login">Entrar</Link>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <span>
            © 2026 Kauan Rodrigues
          </span>

          <div>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}