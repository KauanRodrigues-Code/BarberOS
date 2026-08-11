import styles from "./page.module.css";

export default function Home() {
  return (
  <main className={styles.page}>
    <nav className={styles.nav}>
      <div className={styles.logo}>
        Barber<span>OS</span>
      </div>

      <div className={styles.navLinks}>
        <a href="#como-funciona">Como funciona</a>
        <a href="#recursos">Recursos</a>
        <a href="#sobre">Sobre</a>
      </div>

      <a href="/login" className={styles.login}>
        Entrar
      </a>
    </nav>

    <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            🚀 Gestão inteligente para barbearias
          </div>

          <h1>
            Sua barbearia
            <br />
            <span>em outro nível.</span>
          </h1>

          <p>
            Organize sua agenda, clientes, barbeiros e serviços em um
            único lugar. O BarberOS simplifica a gestão para você focar
            no que realmente importa: seu negócio.
          </p>

          <div className={styles.buttons}>
            <a href="/register" className={styles.primary}>
              Começar agora
              <span>→</span>
            </a>

            <a href="#como-funciona" className={styles.secondary}>
              Conhecer o BarberOS
            </a>
          </div>

          <div className={styles.trust}>
            <div className={styles.trustItem}>
              <strong>100%</strong>
              <span>Online</span>
            </div>

            <div className={styles.trustDivider} />

            <div className={styles.trustItem}>
              <strong>24h</strong>
              <span>Disponível</span>
            </div>

            <div className={styles.trustDivider} />

            <div className={styles.trustItem}>
              <strong>1</strong>
              <span>Plataforma</span>
            </div>
          </div>
        </div>

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
                BarberOS Dashboard
              </span>

              <span className={styles.previewStatus}>
                ● Online
              </span>
            </div>

            <div className={styles.previewBody}>
              <div className={styles.previewSidebar}>
                <div className={styles.previewLogo}>
                  Barber<span>OS</span>
                </div>

                <div className={styles.previewMenu}>
                  <div className={styles.menuActive}>
                    Dashboard
                  </div>
                  <div>Agenda</div>
                  <div>Clientes</div>
                  <div>Barbeiros</div>
                  <div>Serviços</div>
                  <div>Financeiro</div>
                </div>
              </div>

              <div className={styles.previewMain}>
                <div className={styles.previewWelcome}>
                  <span>Bem-vindo de volta</span>
                  <strong>Olá, Kauan 👋</strong>
                </div>

                <div className={styles.previewStats}>
                  <div>
                    <span>Agendamentos</span>
                    <strong>12</strong>
                  </div>

                  <div>
                    <span>Clientes</span>
                    <strong>48</strong>
                  </div>

                  <div>
                    <span>Faturamento</span>
                    <strong>R$ 1.280</strong>
                  </div>
                </div>

                <div className={styles.previewAgenda}>
                  <div className={styles.previewAgendaHeader}>
                    <strong>Próximos agendamentos</strong>
                    <span>Ver agenda →</span>
                  </div>

                  <div className={styles.previewAppointment}>
                    <strong>09:00</strong>
                    <div>
                      <span>João Silva</span>
                      <small>Corte + Barba</small>
                    </div>
                    <em>Confirmado</em>
                  </div>

                  <div className={styles.previewAppointment}>
                    <strong>10:30</strong>
                    <div>
                      <span>Pedro Santos</span>
                      <small>Corte</small>
                    </div>
                    <em>Pendente</em>
                  </div>

                  <div className={styles.previewAppointment}>
                    <strong>14:00</strong>
                    <div>
                      <span>Gabriel Souza</span>
                      <small>Corte + Barba</small>
                    </div>
                    <em>Confirmado</em>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.statsBar}>
        <div>
          <strong>Agenda organizada</strong>
          <span>Tenha controle total dos seus horários</span>
        </div>

        <div>
          <strong>Clientes centralizados</strong>
          <span>Todos os seus clientes em um só lugar</span>
        </div>

        <div>
          <strong>Gestão simplificada</strong>
          <span>Menos burocracia, mais produtividade</span>
        </div>
      </section>

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
            <span>Poderoso para o seu negócio.</span>
          </h2>

          <p>
            O BarberOS foi pensado para tirar a complexidade da gestão
            da sua barbearia.
          </p>
        </div>

        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>01</div>

            <div className={styles.stepIcon}>🏪</div>

            <h3>Crie sua barbearia</h3>

            <p>
              Cadastre sua conta e configure as informações do seu
              negócio em poucos minutos.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>02</div>

            <div className={styles.stepIcon}>⚙️</div>

            <h3>Configure sua equipe</h3>

            <p>
              Adicione seus barbeiros, serviços, horários e deixe
              tudo organizado.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>03</div>

            <div className={styles.stepIcon}>📅</div>

            <h3>Comece a gerenciar</h3>

            <p>
              Controle seus agendamentos, clientes e resultados em
              uma única plataforma.
            </p>
          </div>
        </div>
      </section>

      <section
        id="recursos"
        className={`${styles.section} ${styles.featuresSection}`}
      >
        <div className={styles.sectionHeading}>
          <span className={styles.sectionLabel}>
            TUDO EM UM SÓ LUGAR
          </span>

          <h2>
            Sua operação,
            <br />
            <span>mais inteligente.</span>
          </h2>

          <p>
            Ferramentas para transformar a rotina da sua barbearia.
          </p>
        </div>

        <div className={styles.features}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📅</div>
            <h3>Agenda inteligente</h3>
            <p>
              Visualize seus horários e mantenha todos os
              atendimentos organizados.
            </p>
            <span>01</span>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>👥</div>
            <h3>Gestão de clientes</h3>
            <p>
              Tenha as informações dos seus clientes sempre
              acessíveis.
            </p>
            <span>02</span>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>💈</div>
            <h3>Equipe organizada</h3>
            <p>
              Gerencie seus barbeiros, horários e disponibilidade.
            </p>
            <span>03</span>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>✂️</div>
            <h3>Serviços</h3>
            <p>
              Cadastre seus serviços, preços e duração dos
              atendimentos.
            </p>
            <span>04</span>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📈</div>
            <h3>Visão financeira</h3>
            <p>
              Acompanhe o desempenho financeiro da sua barbearia.
            </p>
            <span>05</span>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🌐</div>
            <h3>Presença online</h3>
            <p>
              Tenha uma experiência moderna para seus clientes.
            </p>
            <span>06</span>
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className={styles.highlight}
      >
        <div className={styles.highlightContent}>
          <span className={styles.sectionLabel}>
            FEITO PARA BARBEARIAS
          </span>

          <h2>
            Pare de perder tempo
            <br />
            <span>com a desorganização.</span>
          </h2>

          <p>
            Agenda no papel, mensagens espalhadas, informações
            perdidas e falta de controle fazem parte da rotina de
            muitas barbearias.
          </p>

          <p>
            O BarberOS reúne tudo em um único sistema para você
            administrar seu negócio de forma simples, rápida e
            profissional.
          </p>

          <a href="/register" className={styles.primary}>
            Quero usar o BarberOS
            <span>→</span>
          </a>
        </div>

        <div className={styles.highlightVisual}>
          <div className={styles.bigNumber}>01</div>

          <div className={styles.visualCard}>
            <span>GESTÃO</span>
            <strong>
              Menos trabalho manual.
            </strong>
            <p>
              Mais tempo para atender seus clientes e fazer sua
              barbearia crescer.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.ctaGlow} />

        <span className={styles.sectionLabel}>
          PRONTO PARA COMEÇAR?
        </span>

        <h2>
          Sua barbearia merece
          <br />
          <span>uma gestão melhor.</span>
        </h2>

        <p>
          Comece agora e leve sua barbearia para outro nível.
        </p>

        <a href="/register" className={styles.primary}>
          Criar minha conta
          <span>→</span>
        </a>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          Barber<span>OS</span>
        </div>

        <p>
          Gestão inteligente para barbearias.
        </p>

        <div className={styles.footerBottom}>
          <span>© 2026 Kauan Rodrigues</span>

          <div>
            <a href="/login">Entrar</a>
            <a href="/register">Criar conta</a>
          </div>
        </div>
      </footer>
    </main>
  );
}