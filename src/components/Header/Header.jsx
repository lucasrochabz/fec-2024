import { Link, useLocation } from "react-router-dom"
import "./Header.css"
import { useState } from "react"

export const Header = () => {
  const [activeClass, setActiveClass] = useState(null)

  const { pathname } = useLocation()

  return(
    <>
      <header className="header-content">
        <figure>
          <img src="src/assets/imagens/logo-fortaleza.png" alt="Escudo do Fortaleza" />
        </figure>
        <nav className="menu">
          <ul>
            <Link to='/' className={pathname === '/' ? 'active' : ''}>
              Home
            </Link>

            <Link to='/jogadores' className={pathname === '/jogadores' ? 'active' : ''}>
              Jogadores
            </Link>

            <Link to='/sobre' className={pathname === '/sobre' ? 'active' : ''}>
              Sobre
            </Link>
          </ul>
        </nav>
      </header>
    </>
  )
}
