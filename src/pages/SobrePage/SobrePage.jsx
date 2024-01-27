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
        <h2>Sobre o clube</h2>
      </section>
      <Footer />
    </>
  )
}
