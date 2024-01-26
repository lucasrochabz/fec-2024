import { Link } from "react-router-dom"
import "./Header.css"

export const Header = () => {
  return(
    <>
      <header className="header-content">
        <figure>
          <img src="src/assets/imagens/logo-fortaleza.png" alt="Escudo do Fortaleza" />
        </figure>
        <nav className="menu">
          <ul>
            <Link to='/'>Home</Link>
            <Link to='/jogadores'>Jogadores</Link>
            <Link to='/sobre'>Sobre</Link>
          </ul>
        </nav>
      </header>
    </>
  )
}
