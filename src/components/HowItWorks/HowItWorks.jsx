import { useEffect, useState } from "react";
import "./HowItWorks.css";
import BookingButton from "../BookingButton/BookingButton";
import {
  FaWhatsapp,
  FaCalendarCheck,
  FaAppleAlt,
  FaChartLine,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaWhatsapp />,
    title: "Primeiro contato",
    subtitle: "Entendimento inicial",
    text: "Você me chama no WhatsApp e compartilha seus objetivos.",
    details:
      "Aqui eu entendo sua rotina, limitações e objetivos reais para direcionar o atendimento.",
  },
  {
    icon: <FaCalendarCheck />,
    title: "Consulta personalizada",
    subtitle: "Diagnóstico completo",
    text: "Avaliação detalhada dos seus hábitos e histórico alimentar.",
    details:
      "Isso permite criar um plano totalmente adaptado à sua realidade e não genérico.",
  },
  {
    icon: <FaAppleAlt />,
    title: "Plano alimentar",
    subtitle: "Estratégia prática",
    text: "Você recebe um plano simples e aplicável no seu dia a dia.",
    details:
      "Pensado para consistência, sem dietas extremas ou difíceis de seguir.",
  },
  {
    icon: <FaChartLine />,
    title: "Acompanhamento",
    subtitle: "Evolução contínua",
    text: "Ajustes são feitos conforme sua evolução real.",
    details: "O objetivo é resultado sustentável, sem efeito sanfona.",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // detecta mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // autoplay lento estilo onboarding
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 7000); // lento = leitura confortável

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="how" id="steps">
      <div className="container">

        {/* HEADER só desktop ou leve no mobile */}
        <div className="how-header">
          <span>Como funciona</span>
          <h2>Um processo simples e guiado</h2>
        </div>

        <div className="how-grid">

          {/* DESKTOP: steps */}
          {!isMobile && (
            <div className="how-steps">
              {steps.map((step, index) => (
                <button
                  key={index}
                  className={`how-step ${active === index ? "active" : ""}`}
                  onClick={() => setActive(index)}
                >
                  <div className="how-icon">{step.icon}</div>
                  <div className="how-info">
                    <strong>{step.title}</strong>
                    <span>{step.subtitle}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* CONTENT (DESKTOP E MOBILE) */}
          <div key={active} className="how-content fade">

            <div className="how-badge">{steps[active].icon}</div>

            <h3>{steps[active].title}</h3>

            <p className="main-text">{steps[active].text}</p>

            <p className="detail-text">{steps[active].details}</p>

            {/* CTA opcional só no último step */}
            {active === steps.length - 1 && (
              <div className="how-cta">
                <h4>Pronta para começar?</h4>
                <p>Agende sua consulta em poucos minutos.</p>
                <BookingButton />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}