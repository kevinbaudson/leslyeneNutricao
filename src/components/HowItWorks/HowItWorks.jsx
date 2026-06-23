import "./HowItWorks.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaCalendarCheck,
  FaClipboardList,
  FaAppleAlt,
  FaHeart,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaCalendarCheck />,
    title: "Agende sua consulta",
    description:
      "Escolha o melhor horário e dê o primeiro passo para transformar sua alimentação.",
  },
  {
    icon: <FaClipboardList />,
    title: "Avaliação completa",
    description:
      "Análise detalhada dos seus hábitos, objetivos, rotina e histórico de saúde.",
  },
  {
    icon: <FaAppleAlt />,
    title: "Plano personalizado",
    description:
      "Receba um plano alimentar adaptado à sua realidade e às suas necessidades.",
  },
  {
    icon: <FaHeart />,
    title: "Acompanhamento contínuo",
    description:
      "Suporte e ajustes constantes para garantir evolução e resultados duradouros.",
  },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="how-it-works">
      <Container>
        <div className="section-header">
          <span>Como Funciona</span>
          <h2>Sua jornada para uma vida mais saudável</h2>
        </div>

        <Row>
          {steps.map((step, index) => (
            <Col lg={3} md={6} key={index}>
              <div className="step-card">
                <div className="step-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="step-icon">{step.icon}</div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default HowItWorks;