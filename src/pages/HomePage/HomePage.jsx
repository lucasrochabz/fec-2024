import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import "./HomePage.css"

export const HomePage = () => {
  return(
    <>
      <Header />
        <section class="content">
          <h1>HomePage</h1>
          <h1>Jogadores</h1>
          <h1>Sobre</h1>
        </section>
      <Footer />
    </>
  )
}
