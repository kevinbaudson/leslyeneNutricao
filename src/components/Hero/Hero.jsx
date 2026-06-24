import "./Hero.css";
import { Container, Row, Col } from "react-bootstrap";
import avatarNutri from "../../assets/images/nutri.png";
import BookingButton from "../BookingButton/BookingButton";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <Container>
        <Row className="align-items-center hero-row">
          {/* TEXT */}
          <Col lg={6} className="hero-content">
            <span className="hero-badge">
              Nutrição personalizada para sua rotina
            </span>

            <h1 className="hero-title">
              Transforme sua relação com a comida sem dietas restritivas.
            </h1>

            <p className="hero-description">
              Atendimento nutricional humanizado, com foco em resultados reais,
              emagrecimento sustentável e autonomia alimentar.
            </p>

            <div className="hero-actions">
              <BookingButton />

              <a
                href="https://wa.me/5531973108006"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-whatsapp"
              >
                Falar no WhatsApp
              </a>
            </div>
          </Col>

          {/* IMAGE */}
          <Col lg={6} className="hero-image">
            <div className="hero-image-mask">
              <img
                src={avatarNutri}
                alt="Nutricionista Leslyene"
                className="hero-avatar"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
