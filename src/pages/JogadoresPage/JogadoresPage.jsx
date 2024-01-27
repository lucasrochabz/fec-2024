import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import "./JogadoresPage.css"

export const JogadoresPage = () => {
  return(
    <>
      <Header />
      <section className="jogadores-content">
        <h1>JogadoresPage</h1>
        <div className="info">
            <div className="img">
              <img src="src/assets/imagens/jogador1.png" alt="Foto do Jogador" />
            </div>
            <div className="button">
                <button>Jogador Anterior</button>
                <h2>Tinga</h2>
                <button class="next">Próximo jogador</button>
            </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
