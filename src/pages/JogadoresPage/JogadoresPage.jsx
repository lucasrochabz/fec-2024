import React, { useState, useEffect } from 'react'
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import jogadoresData from "/jogadores.json"
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

        <div>
          {jogadores.map(jogador => (
            <>
              <div className='jogadores'>
                <h2 id={`jogador-${jogador.id}`}>{jogador.nome}</h2>
                <p>{jogador.posicao}</p>
                <p>{jogador.numero}</p>
                <div className="img" key={jogador.id}>
                  <img src={jogador.imgSrc} alt="" />
                </div>
                <hr />
              </div>
            </>
          ))}
        </div>

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
