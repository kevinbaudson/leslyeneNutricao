import "./Testimonials.css";

export default function Testimonials() {
  const depoimentos = [
    {
      nome: "Mariana S.",
      texto:
        "Em 2 meses consegui emagrecer de forma saudável sem passar fome. Atendimento incrível!",
    },
    {
      nome: "Carlos R.",
      texto:
        "Melhorei minha disposição e meus treinos evoluíram muito com o plano alimentar.",
    },
    {
      nome: "Juliana P.",
      texto:
        "Nunca consegui manter dieta antes. Agora consegui criar hábitos reais e sustentáveis.",
    },
  ];

  return (
    <section className="testimonials"
    id="testimonials">
      <div className="testimonials-container">

        <h2>O que os pacientes dizem</h2>
        <p>Resultados reais de quem já passou pelo acompanhamento</p>

        <div className="testimonials-grid">
          {depoimentos.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p className="testimonial-text">"{item.texto}"</p>
              <span className="testimonial-name">- {item.nome}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}