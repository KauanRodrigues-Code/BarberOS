import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
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
          <a href="#como-funciona">Como funciona</a>
          <a href="#recursos">Recursos</a>
          <a href="#sobre">Sobre</a>
        </div>

        <Link href="/login" className={styles.login}>
          Entrar
        </Link>
      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            🚀 Gestão inteligente para barbearias
          </div>

          <h1>
            Sua barbearia
            <br />
            em outro nível
            <br />
            com o <span>BarberOS.</span>
          </h1>

          <p>
            Organize sua agenda, clientes, barbeiros, serviços e financeiro
            em um único sistema. Mais controle para você e uma experiência
            melhor para seus clientes.
          </p>

          <div className={styles.buttons}>
            <Link href="/planos" className={styles.primary}>
              Começar agora
              <span>→</span>
            </Link>
          </div>

          <div className={styles.trust}>
            <div className={styles.trustItem}>
              <strong>100%</strong>
              <span>Online</span>
            </div>

            <div className={styles.trustDivider} />

            <div className={styles.trustItem}>
              <strong>24/7</strong>
              <span>Acessível</span>
            </div>

            <div className={styles.trustDivider} />

            <div className={styles.trustItem}>
              <strong>1</strong>
              <span>Plataforma</span>
            </div>
          </div>
        </div>

        {/* ===================================================
            HERO PREVIEW
        =================================================== */}
        <div className={styles.heroPreview}>
          <div className={styles.previewGlow} />

          <div className={styles.previewWindow}>
            <div className={styles.previewTop}>
              <div className={styles.windowDots}>
                <span />
                <span />
                <span />
              </div>

              <span className={styles.previewTitle}>
                app.barberos.com
              </span>

              <span className={styles.previewStatus}>
                ● ONLINE
              </span>
            </div>

            <div className={styles.previewBody}>
              <aside className={styles.previewSidebar}>
                <div className={styles.previewLogo}>
                  Barber<span>OS</span>
                </div>

                <div className={styles.previewMenu}>
                  <div className={styles.menuActive}>Dashboard</div>
                  <div>Agenda</div>
                  <div>Clientes</div>
                  <div>Barbeiros</div>
                  <div>Serviços</div>
                  <div>Financeiro</div>
                </div>
              </aside>

              <div className={styles.previewMain}>
                <div className={styles.previewWelcome}>
                  <span>VISÃO GERAL</span>
                  <strong>Olá, Kauan 👋</strong>
                </div>

                <div className={styles.previewStats}>
                  <div>
                    <span>AGENDAMENTOS</span>
                    <strong>24</strong>
                  </div>

                  <div>
                    <span>CLIENTES</span>
                    <strong>186</strong>
                  </div>

                  <div>
                    <span>FATURAMENTO</span>
                    <strong>R$ 8.420</strong>
                  </div>
                </div>

                <div className={styles.previewAgenda}>
                  <div className={styles.previewAgendaHeader}>
                    <strong>Próximos horários</strong>
                    <span>Ver agenda →</span>
                  </div>

                  <div className={styles.previewAppointment}>
                    <strong>14:00</strong>

                    <div>
                      <span>João Silva</span>
                      <small>Corte + Barba</small>
                    </div>

                    <em>Confirmado</em>
                  </div>

                  <div className={styles.previewAppointment}>
                    <strong>14:30</strong>

                    <div>
                      <span>Pedro Santos</span>
                      <small>Corte tradicional</small>
                    </div>

                    <em>Confirmado</em>
                  </div>

                  <div className={styles.previewAppointment}>
                    <strong>15:00</strong>

                    <div>
                      <span>Lucas Oliveira</span>
                      <small>Barba</small>
                    </div>

                    <em>Confirmado</em>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FINANCEIRO */}
          <div className={styles.financePreview}>
            <div className={styles.financeHeader}>
              <div>
                <span>FINANCEIRO</span>
                <strong>Faturamento</strong>
              </div>

              <span className={styles.financePeriod}>
                Este mês
              </span>
            </div>

            <div className={styles.financeValue}>
              R$ 8.420
            </div>

            <div className={styles.financeGrowth}>
              <span>↑ 18,4%</span>
              <small>vs. mês anterior</small>
            </div>

            <div className={styles.financeChart}>
              <span style={{ height: "32%" }} />
              <span style={{ height: "47%" }} />
              <span style={{ height: "38%" }} />
              <span style={{ height: "60%" }} />
              <span style={{ height: "52%" }} />
              <span style={{ height: "76%" }} />
              <span style={{ height: "68%" }} />
              <span style={{ height: "91%" }} />
            </div>

            <div className={styles.financeFooter}>
              <div>
                <span>ENTRADAS</span>
                <strong>R$ 9.240</strong>
              </div>

              <div>
                <span>DESPESAS</span>
                <strong>R$ 820</strong>
              </div>

              <div>
                <span>LÍQUIDO</span>
                <strong className={styles.financePositive}>
                  R$ 8.420
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}
      <section className={styles.statsBar}>
        <div>
          <strong>Agenda organizada</strong>
          <span>
            Visualize todos os horários da sua barbearia.
          </span>
        </div>

        <div>
          <strong>Clientes centralizados</strong>
          <span>
            Tenha todas as informações dos seus clientes em um só lugar.
          </span>
        </div>

        <div>
          <strong>Controle financeiro</strong>
          <span>
            Acompanhe entradas, despesas e resultados.
          </span>
        </div>
      </section>

      {/* =====================================================
          COMO FUNCIONA
      ===================================================== */}
      <section
        id="como-funciona"
        className={styles.section}
      >
        <div className={styles.sectionHeading}>
          <span className={styles.sectionLabel}>
            COMO FUNCIONA
          </span>

          <h2>
            Simples para você.
            <br />
            <span>Poderoso para sua barbearia.</span>
          </h2>

          <p>
            O BarberOS foi pensado para deixar a gestão da sua
            barbearia mais simples, rápida e organizada.
          </p>
        </div>

        {/* ===================================================
            OS CARDS TERMINAM AQUI.
        =================================================== */}

        <div className={styles.steps}>
          <article className={styles.step}>
            <div className={styles.stepNumber}>01</div>

            <div className={styles.stepIcon}>📅</div>

            <h3>Organize sua agenda</h3>

            <p>
              Controle todos os horários, barbeiros e
              agendamentos em uma visão simples e organizada.
            </p>
          </article>

          <article className={styles.step}>
            <div className={styles.stepNumber}>02</div>

            <div className={styles.stepIcon}>👥</div>

            <h3>Gerencie seus clientes</h3>

            <p>
              Cadastre clientes e tenha acesso rápido às
              informações importantes de cada atendimento.
            </p>
          </article>

          <article className={styles.step}>
            <div className={styles.stepNumber}>03</div>

            <div className={styles.stepIcon}>📊</div>

            <h3>Acompanhe seus resultados</h3>

            <p>
              Tenha uma visão clara do faturamento,
              serviços realizados e desempenho da sua barbearia.
            </p>
          </article>
        </div>

        {/* ===================================================
            AGENDA — FORA DOS CARDS
        =================================================== */}

        <div className={styles.agendaStandalone}>
          <div className={styles.agendaStandaloneLabel}>
            <span>04</span>
            <div>
              <strong>Tenha tudo em um só lugar</strong>
              <p>
                Uma agenda visual para você acompanhar seus
                próximos atendimentos em poucos segundos.
              </p>
            </div>
          </div>

          <div className={styles.miniDashboard}>
            <div className={styles.miniDashboardTop}>
              <div className={styles.miniDashboardDots}>
                <span />
                <span />
                <span />
              </div>

              <span>BarberOS — Agenda</span>

              <small>● ONLINE</small>
            </div>

            <div className={styles.miniDashboardBody}>
              <aside className={styles.miniDashboardSidebar}>
                <strong>
                  Barber<span>OS</span>
                </strong>

                <div className={styles.miniDashboardMenu}>
                  <span>Dashboard</span>
                  <span className={styles.miniMenuActive}>
                    Agenda
                  </span>
                  <span>Clientes</span>
                  <span>Barbeiros</span>
                  <span>Serviços</span>
                  <span>Financeiro</span>
                </div>
              </aside>

              <div className={styles.miniDashboardMain}>
                <div className={styles.miniDashboardHeading}>
                  <div>
                    <small>AGENDA</small>
                    <strong>Hoje, 08 de agosto</strong>
                  </div>

                  <span>+ Agendar</span>
                </div>

                <div className={styles.miniScheduleList}>
                  <div className={styles.miniScheduleItem}>
                    <strong>14:00</strong>

                    <div>
                      <span>João Silva</span>
                      <small>
                        Corte + Barba • Carlos
                      </small>
                    </div>

                    <em>Confirmado</em>
                  </div>

                  <div className={styles.miniScheduleItem}>
                    <strong>14:30</strong>

                    <div>
                      <span>Pedro Santos</span>
                      <small>
                        Corte • Rafael
                      </small>
                    </div>

                    <em>Confirmado</em>
                  </div>

                  <div className={styles.miniScheduleItem}>
                    <strong>15:00</strong>

                    <div>
                      <span>Lucas Oliveira</span>
                      <small>
                        Barba • Carlos
                      </small>
                    </div>

                    <em>Confirmado</em>
                  </div>

                  <div className={styles.miniScheduleItem}>
                    <strong>15:30</strong>

                    <div>
                      <span>Gabriel Costa</span>
                      <small>
                        Corte • Rafael
                      </small>
                    </div>

                    <em>Confirmado</em>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RECURSOS
      ===================================================== */}
      <section
        id="recursos"
        className={`${styles.section} ${styles.featuresSection}`}
      >
        <div className={styles.sectionHeading}>
          <span className={styles.sectionLabel}>
            RECURSOS
          </span>

          <h2>
            Tudo que sua
            <br />
            <span>barbearia precisa.</span>
          </h2>

          <p>
            Ferramentas pensadas para facilitar sua rotina
            e ajudar sua barbearia a crescer.
          </p>
        </div>

        <div className={styles.features}>
          <article className={styles.featureCard}>
            <div className={styles.featureIcon}>📅</div>

            <h3>Agenda inteligente</h3>

            <p>
              Visualize horários, organize atendimentos e
              evite conflitos na sua agenda.
            </p>

            <span>01</span>
          </article>

          <article className={styles.featureCard}>
            <div className={styles.featureIcon}>👤</div>

            <h3>Gestão de clientes</h3>

            <p>
              Cadastre clientes e mantenha seu histórico
              organizado.
            </p>

            <span>02</span>
          </article>

          <article className={styles.featureCard}>
            <div className={styles.featureIcon}>✂️</div>

            <h3>Barbeiros</h3>

            <p>
              Gerencie sua equipe, disponibilidade, folgas
              e status dos profissionais.
            </p>

            <span>03</span>
          </article>

          <article className={styles.featureCard}>
            <div className={styles.featureIcon}>💈</div>

            <h3>Serviços</h3>

            <p>
              Cadastre seus serviços, preços e organize
              tudo de forma simples.
            </p>

            <span>04</span>
          </article>

          <article className={styles.featureCard}>
            <div className={styles.featureIcon}>💰</div>

            <h3>Financeiro</h3>

            <p>
              Acompanhe faturamento, entradas, despesas
              e resultados da sua operação.
            </p>

            <span>05</span>
          </article>

          <article className={styles.featureCard}>
            <div className={styles.featureIcon}>📱</div>

            <h3>Agendamento online</h3>

            <p>
              Seus clientes podem escolher serviço,
              barbeiro, data e horário.
            </p>

            <span>06</span>
          </article>
        </div>
      </section>

      {/* =====================================================
          SOBRE
      ===================================================== */}
      <section
        id="sobre"
        className={styles.highlight}
      >
        <div className={styles.highlightContent}>
          <span className={styles.sectionLabel}>
            BARBEROS
          </span>

          <h2>
            Menos tempo
            <br />
            <span>organizando.</span>
            <br />
            Mais tempo
            <br />
            trabalhando.
          </h2>

          <p>
            O BarberOS nasceu para resolver um problema simples:
            deixar a gestão de uma barbearia mais prática.
          </p>

          <p>
            Em vez de depender de várias ferramentas diferentes,
            você encontra agenda, clientes, equipe, serviços e
            financeiro em uma única plataforma.
          </p>
        </div>

        <div className={styles.highlightVisual}>
          <div className={styles.bigNumber}>OS</div>

          <div className={styles.visualCard}>
            <span>GESTÃO INTELIGENTE</span>

            <strong>
              Sua operação.
              <br />
              Em um só lugar.
            </strong>

            <p>
              Mais organização, mais controle e uma experiência
              melhor para seus clientes.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className={styles.finalCta}>
        <div className={styles.ctaGlow} />

        <h2>
          Pronto para levar sua
          <br />
          <span>barbearia para outro nível?</span>
        </h2>

        <p>
          Comece a organizar sua operação hoje.
        </p>

        <Link href="/planos" className={styles.primary}>
          Começar agora
          <span>→</span>
        </Link>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          Barber<span>OS</span>
        </div>

        <p>
          Gestão inteligente para barbearias.
        </p>

        <div className={styles.footerBottom}>
          <span>
            © 2026 Kauan Rodrigues
          </span>

          <div className={styles.footerLinks}>
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