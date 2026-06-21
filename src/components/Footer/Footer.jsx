import "./Footer.css";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h3>Leslyene Nutricionista</h3>
          <p>
            Alimentação equilibrada para sua melhor versão,
            com foco em saúde, leveza e resultados reais.
          </p>
        </div>

        <div className="footer-right">
          <a
            href="https://www.instagram.com/lebaudson.nutri/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <FaInstagram />
            <span>Siga no Instagram</span>
          </a>
        </div>

      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Leslyene Nutricionista. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;