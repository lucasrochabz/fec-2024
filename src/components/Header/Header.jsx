import { Link, useLocation } from "react-router-dom"
import "./Header.css"
import { useState } from "react"

export const Header = () => {
  const [activeClass, setActiveClass] = useState(null)

  const { pathname } = useLocation()

  return(
    <>
      <header className="header-container">
        
        <nav className="menu">
          <ul>
            <li>
              <Link to='/' className={pathname === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>

            <li>
              <Link to='/jogadores' className={pathname === '/jogadores' ? 'active' : ''}>
                Jogadores
              </Link>
            </li>

            <li>
              <Link to='/sobre' className={pathname === '/sobre' ? 'active' : ''}>
                Sobre
              </Link>
            </li>
          </ul>
        </nav>

        <figure>
          <img src="src/assets/imagens/logo-fortaleza.png" alt="Escudo do Fortaleza" />
        </figure>

          <div className="navegacao-externa">
            <ul>
              <li>
                <Link>Loja</Link>
              </li>
              <li>
                <Link>Sócio</Link>
              </li>
              <li>
                <Link>instagram</Link>
              </li>
              <li>
                <Link>youtube</Link>
              </li>
              <li>
                <Link>facebook</Link>
              </li>
              <li>
                <Link>twitter</Link>
              </li>
            </ul>
          </div>
      </header>
    </>
  )
}
