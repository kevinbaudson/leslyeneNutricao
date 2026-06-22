import "./Hero.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PopupButton } from "react-calendly";
import avatarNutri from "../../assets/images/nutri.png";

function Hero() {
  return (
    <section className="hero section fade-up" id="inicio">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <span className="hero-tag">
              Nutrição personalizada para sua rotina
            </span>

            <h1 className="hero-title">
              Construa hábitos saudáveis sem dietas restritivas.
            </h1>

            <p className="hero-description">
              Atendimento nutricional humanizado, focado em resultados reais,
              emagrecimento sustentável e melhoria da sua relação com a comida.
            </p>

            <div className="hero-buttons">
              <Button
                size="lg"
                className="btn-whatsapp"
                href="https://wa.me/5531973108006"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero começar agora
              </Button>

              <PopupButton
                url="https://calendly.com/leslyenebaudson/30min?lang=pt-BR"
                rootElement={document.body}
                text="Agendar consulta"
                className="btn btn-outline-success btn-lg"
              />
            </div>

            <div className="hero-numbers">
              <div>
                <h3>Atendimento individual</h3>
                <span>Plano personalizado</span>
              </div>

              <div>
                <h3>Foco em resultado real</h3>
                <span>Sem dietas extremas</span>
              </div>

              <div>
                <h3>Online e presencial</h3>
                <span>Flexível para você</span>
              </div>
            </div>
          </Col>

          <Col lg={6} className="text-center hero-image-wrapper">
            <div className="hero-blob"></div>

            <img
              src={avatarNutri}
              alt="Nutricionista Leslyene"
              className="hero-avatar"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
