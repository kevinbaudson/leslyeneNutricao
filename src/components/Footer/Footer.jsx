import "./Footer.css";
import { FaInstagram, FaEnvelope, FaClock } from "react-icons/fa";

import Logo from "../../assets/images/logo-mod.jpeg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img
            src={Logo}
            alt="Leslyene Nutricionista"
            className="footer-logo"
          />
          <p>
            Alimentação equilibrada para sua melhor versão, com foco em saúde,
            leveza e resultados reais.
          </p>

          <div className="footer-contact">
            <p>
              <FaEnvelope /> Leslyenebaudson@icloud.com
            </p>
            <p>
              <FaClock /> Seg - Sex: 08h às 18h
            </p>
          </div>
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

          <a href="mailto:Leslyenebaudson@icloud.com" className="email-link">
            <FaEnvelope />
            <span>Enviar e-mail</span>
          </a>
          <div className="footer-map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.608594354249!2d-44.0304649!3d-20.0249356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6beb037742465%3A0x3fb51b7378702bc0!2sR.%20M%C3%A1rcia%20de%20Windsor%2C%2025%20-%20%C3%81guia%20Dourada%2C%20Belo%20Horizonte%20-%20MG%2C%2032405-567!5e0!3m2!1spt-BR!2sbr!4v1782165291809!5m2!1spt-BR!2sbr"
              loading="lazy"
              className="footer-map"
            ></iframe>
            <p className="footer-address">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rua+Márcia+de+Windsor+25+Belo+Horizonte"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rua Márcia de Windsor, 25 - Mineirão, Belo Horizonte - MG
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Leslyene Nutricionista. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
