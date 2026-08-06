"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import styles from "./page.module.css";

type Servico = {
  id: string;
  nome: string;
  descricao: string | null;
  preco: string;
  duracao: number;
};

type Barbeiro = {
  id: string;
  nome: string;
};

type Barbearia = {
  id: string;
  nome: string;
  slug: string;
  telefone: string | null;
};

type DadosPublicos = {
  barbearia: Barbearia;
  servicos: Servico[];
  barbeiros: Barbeiro[];
};

export default function AgendarPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [dados, setDados] =
    useState<DadosPublicos | null>(null);

  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  const [servicoSelecionado, setServicoSelecionado] =
    useState("");

  const [barbeiroSelecionado, setBarbeiroSelecionado] =
    useState("qualquer");

  useEffect(() => {
    async function carregar() {
      try {
        const apiUrl =
          process.env.NEXT_PUBLIC_API_URL;

        const response = await fetch(
          `${apiUrl}/barbearias/public/${slug}`,
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message ||
              "Não foi possível carregar a barbearia.",
          );
        }

        setDados(data);
      } catch (error) {
        setErro(
          error instanceof Error
            ? error.message
            : "Erro ao conectar com o servidor.",
        );
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      carregar();
    }
  }, [slug]);

  if (loading) {
    return (
      <main className={styles.page}>
        <div className={styles.loading}>
          <div className={styles.spinner} />

          <p>Carregando barbearia...</p>
        </div>
      </main>
    );
  }

  if (erro || !dados) {
    return (
      <main className={styles.page}>
        <div className={styles.error}>
          <div className={styles.errorIcon}>
            !
          </div>

          <h1>Barbearia não encontrada</h1>

          <p>
            {erro ||
              "Não foi possível encontrar esta barbearia."}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logo}>
            Barber<span>OS</span>
          </div>

          <div className={styles.headerBadge}>
            Agendamento online
          </div>
        </header>

        <section className={styles.hero}>
          <div className={styles.heroIcon}>
            ✂
          </div>

          <div>
            <span className={styles.label}>
              BEM-VINDO
            </span>

            <h1>{dados.barbearia.nome}</h1>

            <p>
              Escolha seu serviço e encontre o melhor
              horário para você.
            </p>
          </div>
        </section>

        <section className={styles.content}>
          {/* SERVIÇOS */}
          <div className={styles.step}>
            <div className={styles.stepHeader}>
              <div className={styles.stepNumber}>
                1
              </div>

              <div>
                <span>PRIMEIRO PASSO</span>

                <h2>Escolha seu serviço</h2>
              </div>
            </div>

            {dados.servicos.length === 0 ? (
              <div className={styles.empty}>
                <span>✂</span>

                <p>
                  Nenhum serviço disponível no momento.
                </p>
              </div>
            ) : (
              <div className={styles.services}>
                {dados.servicos.map((servico) => {
                  const selecionado =
                    servicoSelecionado === servico.id;

                  return (
                    <button
                      key={servico.id}
                      type="button"
                      className={`${styles.service} ${
                        selecionado
                          ? styles.serviceSelected
                          : ""
                      }`}
                      onClick={() =>
                        setServicoSelecionado(
                          servico.id,
                        )
                      }
                    >
                      <div className={styles.serviceMain}>
                        <div>
                          <h3>{servico.nome}</h3>

                          {servico.descricao && (
                            <p>
                              {servico.descricao}
                            </p>
                          )}
                        </div>

                        <strong>
                          R$ {servico.preco}
                        </strong>
                      </div>

                      <div
                        className={
                          styles.serviceFooter
                        }
                      >
                        <span>
                          ⏱ {servico.duracao} min
                        </span>

                        <span
                          className={styles.radio}
                        >
                          {selecionado ? "✓" : ""}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* BARBEIROS */}
          <div className={styles.step}>
            <div className={styles.stepHeader}>
              <div className={styles.stepNumber}>
                2
              </div>

              <div>
                <span>SEGUNDO PASSO</span>

                <h2>Escolha o barbeiro</h2>
              </div>
            </div>

            <div className={styles.barbers}>
              <button
                type="button"
                className={`${styles.barber} ${
                  barbeiroSelecionado ===
                  "qualquer"
                    ? styles.barberSelected
                    : ""
                }`}
                onClick={() =>
                  setBarbeiroSelecionado(
                    "qualquer",
                  )
                }
              >
                <div className={styles.avatar}>
                  ✂
                </div>

                <div>
                  <strong>
                    Qualquer barbeiro
                  </strong>

                  <span>
                    Primeiro horário disponível
                  </span>
                </div>

                <div className={styles.check}>
                  {barbeiroSelecionado ===
                  "qualquer"
                    ? "✓"
                    : ""}
                </div>
              </button>

              {dados.barbeiros.map((barbeiro) => {
                const selecionado =
                  barbeiroSelecionado ===
                  barbeiro.id;

                return (
                  <button
                    key={barbeiro.id}
                    type="button"
                    className={`${styles.barber} ${
                      selecionado
                        ? styles.barberSelected
                        : ""
                    }`}
                    onClick={() =>
                      setBarbeiroSelecionado(
                        barbeiro.id,
                      )
                    }
                  >
                    <div className={styles.avatar}>
                      {barbeiro.nome
                        .charAt(0)
                        .toUpperCase()}
                    </div>

                    <div>
                      <strong>
                        {barbeiro.nome}
                      </strong>

                      <span>
                        Barbeiro
                      </span>
                    </div>

                    <div className={styles.check}>
                      {selecionado ? "✓" : ""}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* DATA */}
          <div className={styles.step}>
            <div className={styles.stepHeader}>
              <div className={styles.stepNumber}>
                3
              </div>

              <div>
                <span>TERCEIRO PASSO</span>

                <h2>Escolha a data</h2>
              </div>
            </div>

            <div className={styles.comingSoon}>
              <span>📅</span>

              <div>
                <strong>
                  Calendário em breve
                </strong>

                <p>
                  Nesta etapa vamos mostrar somente
                  os dias disponíveis para
                  agendamento.
                </p>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className={styles.footer}>
            <span>
              Agendamento seguro pelo
              <strong> BarberOS</strong>
            </span>

            <span>
              © 2026 Kauan Rodrigues
            </span>

            {dados.barbearia.telefone && (
              <span>
                📱 {dados.barbearia.telefone}
              </span>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}