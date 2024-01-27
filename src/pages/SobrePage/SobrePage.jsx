import React, { useState, useEffect } from 'react'
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import jogadoresData from "/jogadores.json"

import "./SobrePage.css"

export const SobrePage = () => {
  const [jogadores, setJogadores] = useState([]);

  useEffect(() => {
    setJogadores(jogadoresData);
  }, []);

  return(
    <>
      <Header />
      <section className="sobre-content">
        <h1>SobrePage</h1>

        <h1>Lista de Jogadores</h1>
      <ul>
        {jogadores.map(jogador => (
          <li key={jogador.id}>
            {jogador.nome} - <img src={jogador.imgSrc} alt="" />
          </li>
        ))}
      </ul>
      </section>
      <Footer />
    </>
  )
}
