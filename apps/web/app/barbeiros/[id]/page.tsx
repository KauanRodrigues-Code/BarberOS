import styles from "./page.module.css";

const barbers = {
  carlos: {
    name: "Carlos Almeida",
    initials: "CA",
    since: "2024",
    attendances: 156,
    status: "Ativo",
    phone: "(11) 99999-1111",
  },

  lucas: {
    name: "Lucas Santos",
    initials: "LS",
    since: "2025",
    attendances: 98,
    status: "Ativo",
    phone: "(11) 98888-2222",
  },

  rafael: {
    name: "Rafael Martins",
    initials: "RM",
    since: "2026",
    attendances: 64,
    status: "Ativo",
    phone: "(11) 97777-3333",
  },

  joao: {
    name: "João Ferreira",
    initials: "JF",
    since: "2026",
    attendances: 41,
    status: "Folga",
    phone: "(11) 96666-4444",
  },
};

type BarberId = keyof typeof barbers;

export default async function PerfilBarbeiro({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const barber = barbers[id as BarberId];

  if (!barber) {
    return (
      <main className={styles.page}>
        <section className={styles.notFound}>
          <h1>Barbeiro não encontrado</h1>

          <p>
            O barbeiro que você está procurando não existe.
          </p>

          <a
            href="/barbeiros"
            className={styles.back}
          >
            ← Voltar para equipe
          </a>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>

        {/* HEADER */}

        <header className={styles.header}>
          <a
            href="/barbeiros"
            className={styles.back}
          >
            ← Voltar para equipe
          </a>

          <span className={styles.label}>
            Perfil do barbeiro
          </span>
        </header>

        {/* PERFIL */}

        <section className={styles.profile}>
          <div className={styles.avatar}>
            {barber.initials}
          </div>

          <div className={styles.info}>
            <span className={styles.small}>
              BarberOS
            </span>

            <h1>
              {barber.name}
            </h1>

            <p>
              Barbeiro desde {barber.since}
            </p>

            <span
              className={`${styles.status} ${
                barber.status === "Ativo"
                  ? styles.active
                  : styles.off
              }`}
            >
              {barber.status}
            </span>
          </div>
        </section>

        {/* INFORMAÇÕES */}

        <section className={styles.details}>

          <div className={styles.detail}>
            <span>Atendimentos</span>

            <strong>
              {barber.attendances}
            </strong>
          </div>

          <div className={styles.detail}>
            <span>Telefone</span>

            <strong>
              {barber.phone}
            </strong>
          </div>

          <div className={styles.detail}>
            <span>Status</span>

            <strong>
              {barber.status}
            </strong>
          </div>

          <div className={styles.detail}>
            <span>Desde</span>

            <strong>
              {barber.since}
            </strong>
          </div>

        </section>

        {/* AÇÕES */}

        <section className={styles.actions}>

          <a
            href="/agenda"
            className={styles.primary}
          >
            Ver agenda
          </a>

          <a
            href="/barbeiros"
            className={styles.secondary}
          >
            Voltar para equipe
          </a>

        </section>

        <footer>
          © 2026 Kauan Rodrigues
        </footer>

      </section>
    </main>
  );
}