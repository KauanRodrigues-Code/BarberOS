"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

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

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function AgendamentoPublico() {
  const params = useParams();
  const slug = params.slug as string;

  const [dados, setDados] =
    useState<DadosPublicos | null>(null);

  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregarBarbearia() {
      try {
        const response = await fetch(
          `${API_URL}/barbearias/public/${slug}`,
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
      carregarBarbearia();
    }
  }, [slug]);

  if (loading) {
    return (
      <main>
        <p>Carregando...</p>
      </main>
    );
  }

  if (erro) {
    return (
      <main>
        <h1>Ops!</h1>
        <p>{erro}</p>
      </main>
    );
  }

  if (!dados) {
    return null;
  }

  return (
    <main>
      <section>
        <span>BarberOS</span>

        <h1>{dados.barbearia.nome}</h1>

        <p>
          Escolha o serviço e faça seu agendamento.
        </p>

        {dados.barbearia.telefone && (
          <p>
            Telefone: {dados.barbearia.telefone}
          </p>
        )}
      </section>

      <section>
        <h2>Escolha seu serviço</h2>

        {dados.servicos.length === 0 ? (
          <p>
            Esta barbearia ainda não possui serviços
            cadastrados.
          </p>
        ) : (
          dados.servicos.map((servico) => (
            <article key={servico.id}>
              <h3>{servico.nome}</h3>

              {servico.descricao && (
                <p>{servico.descricao}</p>
              )}

              <strong>
                R$ {servico.preco}
              </strong>

              <span>
                {servico.duracao} minutos
              </span>
            </article>
          ))
        )}
      </section>

      <section>
        <h2>Barbeiros</h2>

        {dados.barbeiros.length === 0 ? (
          <p>
            Esta barbearia ainda não possui barbeiros
            cadastrados.
          </p>
        ) : (
          dados.barbeiros.map((barbeiro) => (
            <article key={barbeiro.id}>
              <h3>{barbeiro.nome}</h3>
            </article>
          ))
        )}
      </section>
    </main>
  );
}