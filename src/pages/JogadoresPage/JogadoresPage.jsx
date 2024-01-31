import React, { useState, useEffect } from 'react'
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import jogadoresData from "/jogadores.json"
import "./JogadoresPage.css"
import { JogadoresCard } from '../../components/JogadoresCard/JogadoresCard'

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

        {jogadores.map(jogador => (
          <JogadoresCard key={jogador.id} jogador={jogador} />
        ))}

        <div className="button">
          <button>Jogador Anterior</button>
          <h2>Nome</h2>
          <button class="next">Próximo jogador</button>
        </div>
      </section>
      <Footer />
    </>
  )
}
