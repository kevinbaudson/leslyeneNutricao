import "./About.css";

import { useSectionReveal } from "../../hooks/useSectionReveal";

export default function About() {
  const [ref, visible] = useSectionReveal();
  return (
    <section
      ref={ref}
      className={`about section ${visible ? "show" : ""}`}
      id="about"
    >
      <div className="about-wrapper">
        <div className="about-header">
          <span className="about-badge">Nutricionista Clínica</span>

          <h2 style={{ transitionDelay: "0.1s" }}>
            Nutrição baseada em ciência,
            <br />
            focada em resultados reais
          </h2>

          <p style={{ transitionDelay: "0.2s" }}>
            Atendimento personalizado para emagrecimento, saúde metabólica e
            performance, sem dietas restritivas e com foco em sustentabilidade.
          </p>
        </div>

        <div className="about-grid" style={{ transitionDelay: "0.3s" }}>
          <div className="about-card">
            <h3>Emagrecimento inteligente</h3>
            <p>Estratégias sustentáveis sem efeito sanfona.</p>
          </div>

          <div className="about-card">
            <h3>Saúde metabólica</h3>
            <p>Melhora de energia, hormônios e bem-estar.</p>
          </div>

          <div className="about-card">
            <h3>Performance</h3>
            <p>Foco em hipertrofia e rendimento físico.</p>
          </div>

          <div className="about-card">
            <h3>Reeducação alimentar</h3>
            <p>Criação de hábitos que duram a vida toda.</p>
          </div>
        </div>

        <div className="about-cta">
          <button>Agendar consulta</button>
        </div>
      </div>
    </section>
  );
}
