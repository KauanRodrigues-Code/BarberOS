"use client";

import { useState } from "react";
import styles from "../page.module.css";


interface Props {
  barbeiroId: string;
  onSelecionarData: (data: string) => void;
}


export default function Calendario({
  barbeiroId,
  onSelecionarData,
}: Props) {


  const [dataSelecionada, setDataSelecionada] =
    useState("");



  function selecionar(
    data: string,
  ) {

    setDataSelecionada(data);

    onSelecionarData(data);

  }



  const hoje =
    new Date();



  const dias =
    Array.from(
      { length: 14 },
      (_, i) => {

        const data =
          new Date();


        data.setDate(
          hoje.getDate() + i,
        );


        return data;

      },
    );



  return (

    <div className={styles.calendar}>


      {
        dias.map((dia)=>{


          const valor =
            dia
              .toISOString()
              .split("T")[0];



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

                {
                  dia.toLocaleDateString(
                    "pt-BR",
                    {
                      weekday: "short",
                    },
                  )
                }

              </span>



              <strong>

                {
                  dia.getDate()
                }

              </strong>



            </button>

          );


        })
      }


    </div>

  );

}