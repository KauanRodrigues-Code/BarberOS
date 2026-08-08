"use client";

import { useState } from "react";
import styles from "../page.module.css";

interface Props {
  barbeiroId: string;
  servicoId: string;
  onSelecionarData: (data: string) => void;
  onSelecionarHorario: (horario: string) => void;
}

export default function Calendario({
  barbeiroId,
  servicoId,
  onSelecionarData,
  onSelecionarHorario,
}: Props) {
  const [dataSelecionada, setDataSelecionada] =
    useState("");

  function selecionar(data: string) {
    setDataSelecionada(data);

    onSelecionarData(data);

    // O horário será escolhido no page.tsx
    onSelecionarHorario("");
  }

  const hoje = new Date();

  const dias = Array.from(
    { length: 14 },
    (_, i) => {
      const data = new Date(hoje);

      data.setDate(
        hoje.getDate() + i,
      );

      return data;
    },
  );

  return (
    <div className={styles.calendar}>
      {dias.map((dia) => {
        const valor = dia
          .toISOString()
          .slice(0, 10);

        const selecionado =
          valor === dataSelecionada;

        return (
          <button
            key={valor}
            type="button"
            className={
              selecionado
                ? styles.daySelected
                : styles.day
            }
            onClick={() =>
              selecionar(valor)
            }
          >
            <span>
              {dia.toLocaleDateString(
                "pt-BR",
                {
                  weekday: "short",
                },
              )}
            </span>

            <strong>
              {dia.getDate()}
            </strong>
          </button>
        );
      })}
    </div>
  );
}