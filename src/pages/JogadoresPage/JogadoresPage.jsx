import React, { useState, useEffect } from 'react'
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import jogadoresData from "/jogadores.json"
import { JogadorList } from '../../components/JogadorList/JogadorList'
import "./JogadoresPage.css"

export const JogadoresPage = () => {

    const [jogadores, setJogadores] = useState([]);
  
    useEffect(() => {
      setJogadores(jogadoresData);
    }, []);

  return(
    <>
      <Header />
      
      <section className="jogadores-content">
        <nav>
          <ul>
            {jogadores.map(jogador => (
              <li key={jogador.nome}>
                <a href={`#jogador-${jogador.id}`}>{jogador.nome}</a>
              </li>
            ))}
          </ul>
        </nav>

        <JogadorList jogadores={jogadores} />

        <div className="button">
          <button>Jogador Anterior</button>
          <h2>Nome</h2>
          <button className="next">Próximo jogador</button>
        </div>
      </section>
      
      <Footer />
    </>
  )
}
