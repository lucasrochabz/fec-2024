import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import "./HomePage.css"

export const HomePage = () => {
  return(
    <>
      <Header />
        <section class="home-content">
          <h1>Patrocinadores 1</h1>
          <h1>Patrocinadores 2</h1>
        </section>
      <Footer />
    </>
  )
}
