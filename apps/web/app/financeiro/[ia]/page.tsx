"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function IA() {
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!message.trim()) return;

    // Futuramente:
    // enviar mensagem para o backend + IA

    setMessage("");
  }

  return (
    <main className={styles.page}>
      <section className={styles.chat}>
        {/* HEADER */}

        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <a href="/financeiro" className={styles.back}>
              ←
            </a>

            <div className={styles.aiAvatar}>
              AI
            </div>

            <div>
              <span className={styles.label}>
                BarberOS
              </span>

              <h1>Assistente IA</h1>
            </div>
          </div>

          <span className={styles.online}>
            ● Online
          </span>
        </header>

        {/* CHAT */}

        <section className={styles.messages}>
          <div className={styles.aiMessage}>
            <div className={styles.messageAvatar}>
              AI
            </div>

            <div className={styles.messageContent}>
              <span>BarberOS IA</span>

              <p>
                Olá! 👋 Posso analisar os dados da sua
                barbearia e ajudar você a entender seu
                financeiro, seus atendimentos e seu
                desempenho.
              </p>

              <p>
                Você pode me perguntar, por exemplo:
              </p>

              <div className={styles.suggestions}>
                <button
                  type="button"
                  onClick={() =>
                    setMessage(
                      "Como está o faturamento da minha barbearia?"
                    )
                  }
                >
                  Como está meu faturamento?
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setMessage(
                      "Qual serviço está gerando mais dinheiro?"
                    )
                  }
                >
                  Qual serviço gera mais dinheiro?
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setMessage(
                      "Como posso aumentar meu faturamento?"
                    )
                  }
                >
                  Como aumentar meu faturamento?
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* INPUT */}

        <form
          className={styles.inputArea}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Pergunte algo sobre sua barbearia..."
          />

          <button
            type="submit"
            disabled={!message.trim()}
            aria-label="Enviar mensagem"
          >
            ↑
          </button>
        </form>

        <p className={styles.disclaimer}>
          A IA utiliza os dados da sua barbearia para gerar
          análises e recomendações.
        </p>
      </section>
    </main>
  );
}