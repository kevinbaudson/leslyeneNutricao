import "./About.css";
import { useSectionReveal } from "../../hooks/useSectionReveal";
import BookingButton from "../BookingButton/BookingButton";

export default function About() {
  const [ref, visible] = useSectionReveal();

  return (
    <section ref={ref} className="about" id="about">
      <div className="about-wrapper">

        <div className="about-header">
          <span className="about-badge">Nutricionista Clínica</span>

          <h2 className={`fade-up ${visible ? "show" : ""}`}>
            Nutrição baseada em ciência,
            <br />
            focada em resultados reais
          </h2>

          <p className={`fade-up ${visible ? "show" : ""}`} style={{ transitionDelay: "0.15s" }}>
            Atendimento personalizado para emagrecimento, saúde metabólica e performance.
          </p>
        </div>

        <div className="about-grid">
          <div className={`about-card fade-up ${visible ? "show" : ""}`} style={{ transitionDelay: "0.2s" }}>
            <h3>Emagrecimento inteligente</h3>
            <p>Estratégias sustentáveis sem efeito sanfona.</p>
          </div>

          <div className={`about-card fade-up ${visible ? "show" : ""}`} style={{ transitionDelay: "0.3s" }}>
            <h3>Saúde metabólica</h3>
            <p>Melhora de energia, hormônios e bem-estar.</p>
          </div>

          <div className={`about-card fade-up ${visible ? "show" : ""}`} style={{ transitionDelay: "0.4s" }}>
            <h3>Performance</h3>
            <p>Foco em hipertrofia e rendimento físico.</p>
          </div>

          <div className={`about-card fade-up ${visible ? "show" : ""}`} style={{ transitionDelay: "0.5s" }}>
            <h3>Reeducação alimentar</h3>
            <p>Criação de hábitos que duram a vida toda.</p>
          </div>
        </div>

        <div className={`about-cta fade-up ${visible ? "show" : ""}`} style={{ transitionDelay: "0.6s" }}>
          <BookingButton />
        </div>

      </div>
    </section>
  );
}