"use client";

import {
  useEffect,
  useState,
} from "react";

import { useParams } from "next/navigation";

import styles from "./page.module.css";

import Calendario from "./components/Calendario";

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

  const [loading, setLoading] =
    useState(true);

  const [erro, setErro] =
    useState("");

  const [
    servicoSelecionado,
    setServicoSelecionado,
  ] = useState("");

  const [
    barbeiroSelecionado,
    setBarbeiroSelecionado,
  ] = useState("");

  const [
    dataSelecionada,
    setDataSelecionada,
  ] = useState("");

  const [
    horarios,
    setHorarios,
  ] = useState<string[]>([]);

  const [
    horarioSelecionado,
    setHorarioSelecionado,
  ] = useState("");

  const [
    carregandoHorarios,
    setCarregandoHorarios,
  ] = useState(false);

  const [
    erroHorarios,
    setErroHorarios,
  ] = useState("");

  /*
  ==========================
  CARREGAR BARBEARIA
  ==========================
  */

  useEffect(() => {
    async function carregar() {
      try {
        const apiUrl =
          process.env.NEXT_PUBLIC_API_URL;

        if (!apiUrl) {
          throw new Error(
            "NEXT_PUBLIC_API_URL não configurada.",
          );
        }

        const response =
          await fetch(
            `${apiUrl}/barbearias/public/${slug}`,
          );

        const data =
          await response.json();

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

  /*
  ==========================
  LIMPAR HORÁRIOS
  ==========================
  */

  useEffect(() => {
    setHorarios([]);
    setHorarioSelecionado("");
    setErroHorarios("");
  }, [
    servicoSelecionado,
    barbeiroSelecionado,
    dataSelecionada,
  ]);

  /*
  ==========================
  BUSCAR HORÁRIOS
  ==========================
  */

  useEffect(() => {
    async function carregarHorarios() {
      if (
        !servicoSelecionado ||
        !barbeiroSelecionado ||
        !dataSelecionada ||
        !dados
      ) {
        return;
      }

      setCarregandoHorarios(true);
      setErroHorarios("");
      setHorarios([]);
      setHorarioSelecionado("");

      try {
        const apiUrl =
          process.env.NEXT_PUBLIC_API_URL;

        if (!apiUrl) {
          throw new Error(
            "NEXT_PUBLIC_API_URL não configurada.",
          );
        }

        const response =
          await fetch(
            `${apiUrl}/agendamentos/disponiveis?barbeiroId=${barbeiroSelecionado}&data=${dataSelecionada}&servicoId=${servicoSelecionado}`,
          );

        const data =
          await response.json();

        if (!response.ok) {
          throw new Error(
            data.message ||
              "Não foi possível carregar os horários.",
          );
        }

        setHorarios(
          Array.isArray(data)
            ? data
            : [],
        );
      } catch (error) {
        setErroHorarios(
          error instanceof Error
            ? error.message
            : "Erro ao carregar horários.",
        );
      } finally {
        setCarregandoHorarios(false);
      }
    }

    carregarHorarios();
  }, [
    servicoSelecionado,
    barbeiroSelecionado,
    dataSelecionada,
    dados,
  ]);

  /*
  ==========================
  LOADING
  ==========================
  */

  if (loading) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.empty}>
            <div className={styles.spinner} />

            <p>
              Carregando barbearia...
            </p>
          </div>
        </div>
      </main>
    );
  }

  /*
  ==========================
  ERRO
  ==========================
  */

  if (erro || !dados) {
    return (
      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.empty}>
            <div
              className={styles.errorIcon}
            >
              !
            </div>

            <h1>
              Barbearia não encontrada
            </h1>

            <p>
              {erro ||
                "Não foi possível encontrar esta barbearia."}
            </p>
          </div>
        </div>
      </main>
    );
  }

  /*
  ==========================
  PÁGINA
  ==========================
  */

  return (
    <main className={styles.page}>
      <div className={styles.container}>

        {/* HEADER */}

        <header
          className={styles.header}
        >
          <div
            className={styles.logo}
          >
            Barber
            <span>OS</span>
          </div>

          <div
            className={
              styles.headerBadge
            }
          >
            Agendamento online
          </div>
        </header>

        {/* HERO */}

        <section
          className={styles.hero}
        >
          <div
            className={
              styles.heroIcon
            }
          >
            ✂
          </div>

          <div>
            <span
              className={
                styles.label
              }
            >
              BEM-VINDO
            </span>

            <h1>
              {dados.barbearia.nome}
            </h1>

            <p>
              Escolha seu serviço,
              barbeiro, data e horário.
            </p>
          </div>
        </section>

        <section
          className={styles.content}
        >

          {/* ==========================
              SERVIÇOS
          ========================== */}

          <div
            className={styles.step}
          >
            <div
              className={
                styles.stepHeader
              }
            >
              <div
                className={
                  styles.stepNumber
                }
              >
                1
              </div>

              <div>
                <span>
                  PRIMEIRO PASSO
                </span>

                <h2>
                  Escolha seu serviço
                </h2>
              </div>
            </div>

            {dados.servicos.length ===
            0 ? (
              <div
                className={
                  styles.empty
                }
              >
                <span>✂</span>

                <p>
                  Nenhum serviço
                  disponível no momento.
                </p>
              </div>
            ) : (
              <div
                className={
                  styles.services
                }
              >
                {dados.servicos.map(
                  (servico) => {
                    const selecionado =
                      servicoSelecionado ===
                      servico.id;

                    return (
                      <button
                        key={
                          servico.id
                        }
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
                        <div
                          className={
                            styles.serviceMain
                          }
                        >
                          <div>
                            <h3>
                              {
                                servico.nome
                              }
                            </h3>

                            {servico.descricao && (
                              <p>
                                {
                                  servico.descricao
                                }
                              </p>
                            )}
                          </div>

                          <strong>
                            R${" "}
                            {
                              servico.preco
                            }
                          </strong>
                        </div>

                        <div
                          className={
                            styles.serviceFooter
                          }
                        >
                          <span>
                            ⏱{" "}
                            {
                              servico.duracao
                            }{" "}
                            min
                          </span>

                          <span
                            className={
                              styles.radio
                            }
                          >
                            {selecionado
                              ? "✓"
                              : ""}
                          </span>
                        </div>
                      </button>
                    );
                  },
                )}
              </div>
            )}
          </div>

          {/* ==========================
              BARBEIROS
          ========================== */}

          <div
            className={styles.step}
          >
            <div
              className={
                styles.stepHeader
              }
            >
              <div
                className={
                  styles.stepNumber
                }
              >
                2
              </div>

              <div>
                <span>
                  SEGUNDO PASSO
                </span>

                <h2>
                  Escolha o barbeiro
                </h2>
              </div>
            </div>

            {dados.barbeiros.length ===
            0 ? (
              <div
                className={
                  styles.empty
                }
              >
                <span>✂</span>

                <p>
                  Nenhum barbeiro
                  disponível no momento.
                </p>
              </div>
            ) : (
              <div
                className={
                  styles.barbers
                }
              >
                {dados.barbeiros.map(
                  (barbeiro) => {
                    const selecionado =
                      barbeiroSelecionado ===
                      barbeiro.id;

                    return (
                      <button
                        key={
                          barbeiro.id
                        }
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
                        <div
                          className={
                            styles.avatar
                          }
                        >
                          {barbeiro.nome
                            .charAt(0)
                            .toUpperCase()}
                        </div>

                        <div>
                          <strong>
                            {
                              barbeiro.nome
                            }
                          </strong>

                          <span>
                            Barbeiro
                          </span>
                        </div>

                        <div
                          className={
                            styles.check
                          }
                        >
                          {selecionado
                            ? "✓"
                            : ""}
                        </div>
                      </button>
                    );
                  },
                )}
              </div>
            )}
          </div>

          {/* ==========================
              DATA
          ========================== */}

          <div
            className={styles.step}
          >
            <div
              className={
                styles.stepHeader
              }
            >
              <div
                className={
                  styles.stepNumber
                }
              >
                3
              </div>

              <div>
                <span>
                  TERCEIRO PASSO
                </span>

                <h2>
                  Escolha a data
                </h2>
              </div>
            </div>

            <Calendario
              barbeiroId={
                barbeiroSelecionado
              }
              servicoId={
                servicoSelecionado
              }
              onSelecionarData={(
                data,
              ) => {
                setDataSelecionada(
                  data,
                );
              }}
              onSelecionarHorario={(
                horario,
              ) => {
                setHorarioSelecionado(
                  horario,
                );
              }}
            />

            {dataSelecionada && (
              <div
                style={{
                  marginTop:
                    "18px",
                  padding:
                    "12px 14px",
                  borderRadius:
                    "12px",
                  background:
                    "rgba(212, 175, 55, 0.07)",
                  border:
                    "1px solid rgba(212, 175, 55, 0.25)",
                  color:
                    "#d4af37",
                  fontSize:
                    "13px",
                }}
              >
                📅 Data selecionada:{" "}
                <strong>
                  {new Date(
                    `${dataSelecionada}T12:00:00`,
                  ).toLocaleDateString(
                    "pt-BR",
                    {
                      weekday:
                        "long",
                      day: "2-digit",
                      month:
                        "2-digit",
                      year:
                        "numeric",
                    },
                  )}
                </strong>
              </div>
            )}
          </div>

          {/* ==========================
              HORÁRIOS
          ========================== */}

          {dataSelecionada &&
            servicoSelecionado &&
            barbeiroSelecionado && (
              <div
                className={
                  styles.step
                }
              >
                <div
                  className={
                    styles.stepHeader
                  }
                >
                  <div
                    className={
                      styles.stepNumber
                    }
                  >
                    4
                  </div>

                  <div>
                    <span>
                      QUARTO PASSO
                    </span>

                    <h2>
                      Escolha o horário
                    </h2>
                  </div>
                </div>

                {carregandoHorarios ? (
                  <div
                    className={
                      styles.empty
                    }
                  >
                    <div
                      className={
                        styles.spinner
                      }
                    />

                    <p>
                      Buscando horários
                      disponíveis...
                    </p>
                  </div>
                ) : erroHorarios ? (
                  <div
                    className={
                      styles.empty
                    }
                  >
                    <span>⚠</span>

                    <p>
                      {
                        erroHorarios
                      }
                    </p>
                  </div>
                ) : horarios.length ===
                  0 ? (
                  <div
                    className={
                      styles.empty
                    }
                  >
                    <span>🕐</span>

                    <p>
                      Nenhum horário
                      disponível para
                      esta data.
                    </p>
                  </div>
                ) : (
                  <div
                    style={{
                      display:
                        "grid",
                      gridTemplateColumns:
                        "repeat(auto-fill, minmax(100px, 1fr))",
                      gap: "10px",
                    }}
                  >
                    {horarios.map(
                      (horario) => {
                        const selecionado =
                          horarioSelecionado ===
                          horario;

                        return (
                          <button
                            key={
                              horario
                            }
                            type="button"
                            onClick={() =>
                              setHorarioSelecionado(
                                horario,
                              )
                            }
                            style={{
                              padding:
                                "14px 10px",
                              borderRadius:
                                "12px",
                              border:
                                selecionado
                                  ? "1px solid #d4af37"
                                  : "1px solid rgba(255,255,255,0.08)",
                              background:
                                selecionado
                                  ? "rgba(212,175,55,0.12)"
                                  : "#101010",
                              color:
                                selecionado
                                  ? "#d4af37"
                                  : "#fff",
                              cursor:
                                "pointer",
                              fontSize:
                                "14px",
                              fontWeight:
                                700,
                              transition:
                                "all 0.2s",
                            }}
                          >
                            🕐{" "}
                            {horario}
                          </button>
                        );
                      },
                    )}
                  </div>
                )}

                {horarioSelecionado && (
                  <div
                    style={{
                      marginTop:
                        "18px",
                      padding:
                        "12px 14px",
                      borderRadius:
                        "12px",
                      background:
                        "rgba(212,175,55,0.07)",
                      border:
                        "1px solid rgba(212,175,55,0.25)",
                      color:
                        "#d4af37",
                      fontSize:
                        "13px",
                    }}
                  >
                    🕐 Horário
                    selecionado:{" "}
                    <strong>
                      {
                        horarioSelecionado
                      }
                    </strong>
                  </div>
                )}
              </div>
            )}

          {/* ==========================
              FOOTER
          ========================== */}

          <div
            className={
              styles.footer
            }
          >
            <span>
              Agendamento seguro
              pelo
              <strong>
                {" "}BarberOS
              </strong>
            </span>

            <span>
              © 2026 Kauan Rodrigues
            </span>

            {dados.barbearia
              .telefone && (
              <span>
                📱{" "}
                {
                  dados.barbearia
                    .telefone
                }
              </span>
            )}
          </div>

        </section>
      </div>
    </main>
  );
}