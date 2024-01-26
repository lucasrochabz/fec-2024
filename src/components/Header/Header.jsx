import { Link } from "react-router-dom"
import "./Header.css"

export const Header = () => {
  return(
    <>
      <header className="header-content">
        <p>Logo</p>
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
