import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import "./HomePage.css"

export const HomePage = () => {
  return(
    <>
      <Header />
        <section className="home-content">
          <h1>Patrocinadores linha 1</h1>
          <ul>
            <li>sócio torcedor</li>
            <li>novibet</li>
            <li>zenir</li>
            <li>inter</li>
            <li>brisanet</li>
            <li>unimed</li>
            <li>soccer grass</li>
          </ul>
          <h1>Patrocinadores linha 2</h1>
          <ul>
            <li>SP Combustiveis</li>
            <li>FTrade</li>
            <li>Volt</li>
            <li>Coco Bambu</li>
            <li>Naturágua</li>
            <li>BS Innovation Hub</li>
            <li>Prefeitura de Fortaleza</li>
            <li>Governo do estado do Ceará</li>
          </ul>
        </section>
      <Footer />
    </>
  )
}
