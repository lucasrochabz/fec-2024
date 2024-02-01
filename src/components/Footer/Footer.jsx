import { Link } from "react-router-dom"
import "./Footer.css"
export const Footer = () => {
  return(
    <>
      <footer className="footer-content">
        <figure>
          <img src="src/assets/imagens/logo-fortaleza.png" alt="Escudo do Fortaleza" />
        </figure>

      <div className="rede-social">
        <ul>
          <li>
            <Link>
              instagram
            </Link>
          </li>
          <li>
            <Link>
              youtube
            </Link>
          </li>
          <li>
            <Link>
              facebook
            </Link>
          </li>
          <li>
            <Link>
              twitter 
            </Link>
          </li>
        </ul>
      </div>

        <div className="copy">
          <p>Por Lucas Rocha &copy; 2024</p>
          <p>Alguns direitos reservados.</p>
        </div>
        <p>Loja</p>
        <p>Socio</p>
      </footer>
    </>
  )
}
