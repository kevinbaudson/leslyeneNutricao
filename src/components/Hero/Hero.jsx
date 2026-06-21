import "./Hero.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PopupButton } from "react-calendly";
import avatarNutri from "../../assets/images/avatar-nutri.png";

function Hero() {
  return (
    <section className="hero fade-up" id="inicio">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <span className="hero-tag">Nutrição personalizada</span>

            <h1 className="hero-title">
              Transforme sua alimentação e conquiste mais saúde.
            </h1>

            <p className="hero-description">
              Atendimento nutricional focado em resultados reais, hábitos
              sustentáveis e qualidade de vida.
            </p>

            <div className="hero-buttons">
              <Button
                size="lg"
                className="btn-whatsapp"
                href="https://wa.me/+5531973108006"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </Button>

              <PopupButton
                url="https://calendly.com/kevinbaudson/30min"
                rootElement={document.body}
                text="Agendar Consulta"
                className="btn btn-outline-success btn-lg"
              />
            </div>

            <div className="hero-numbers">
              <div>
                <h3>+500</h3>
                <span>Pacientes</span>
              </div>

              <div>
                <h3>5★</h3>
                <span>Avaliações</span>
              </div>

              <div>
                <h3>Escolha</h3>
                <span>Online ou presencial</span>
              </div>
            </div>
          </Col>

          <Col lg={6} className="text-center hero-image-wrapper">
            <div className="hero-blob"></div>

            <img
              src={avatarNutri}
              alt="Nutricionista"
              className="hero-avatar"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
