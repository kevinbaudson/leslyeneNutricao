import "./Plans.css";
import { useSectionReveal } from "../../hooks/useSectionReveal";

export default function Plans() {
  const [ref, visible] = useSectionReveal();

  const planos = [
    {
      nome: "Consulta Avulsa",
      preco: "R$ 150",
      descricao: "Ideal para quem quer um direcionamento inicial.",
      beneficios: [
        "Avaliação completa",
        "Plano alimentar personalizado",
        "Orientações práticas",
      ],
      destaque: false,
    },
    {
      nome: "Acompanhamento Mensal",
      preco: "R$ 290",
      descricao: "O mais escolhido pelos pacientes.",
      beneficios: [
        "Consulta inicial + retorno",
        "Ajustes no plano alimentar",
        "Suporte via WhatsApp",
      ],
      destaque: true,
    },
    {
      nome: "Transformação Completa",
      preco: "R$ 590",
      descricao: "Para quem quer resultado rápido e acompanhamento intenso.",
      beneficios: [
        "Consultas ilimitadas no mês",
        "Acompanhamento semanal",
        "Suporte diário via WhatsApp",
      ],
      destaque: false,
    },
  ];

  return (
    <section
      ref={ref}
      className={`plans ${visible ? "show" : ""}`}
      id="plans"
    >
      <div className="plans-container">

        <h2>Planos de Acompanhamento</h2>
        <p>Escolha o formato ideal para o seu objetivo</p>

        <div className="plans-grid">
          {planos.map((plan, index) => (
            <div
              key={index}
              className={`plan-card ${plan.destaque ? "destaque" : ""}`}
              style={{ "--i": index }}
            >
              {plan.destaque && (
                <span className="badge">Mais escolhido</span>
              )}

              <h3>{plan.nome}</h3>
              <span className="price">{plan.preco}</span>
              <p>{plan.descricao}</p>

              <ul>
                {plan.beneficios.map((item, i) => (
                  <li key={i}>✔ {item}</li>
                ))}
              </ul>

              <a
                href={`https://wa.me/5531973108006?text=${encodeURIComponent(
                  `Olá! Tenho interesse no plano: ${plan.nome}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="plan-btn"
              >
                Quero esse plano
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}