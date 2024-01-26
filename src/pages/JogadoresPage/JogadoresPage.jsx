import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import "./JogadoresPage.css"

export const JogadoresPage = () => {
  return(
    <>
      <Header />
      <section className="jogadores-content">
        <h1>JogadoresPage</h1>
        <div class="info">
            <div class="img">
                {/* <img src="/imagens/jogador1.png" alt="jogador"> */}
            </div>
            <div class="navigation">
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
