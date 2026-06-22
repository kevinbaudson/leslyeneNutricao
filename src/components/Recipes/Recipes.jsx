import "./Recipes.css";

import { Container, Row, Col } from "react-bootstrap";
import { PopupButton } from "react-calendly";

import RecipeCard from "../RecipeCard/RecipeCard";
import recipe from "../../assets/images/recipes.png";

import panqueca from "../../assets/images/panqueca.jpg";
import salada from "../../assets/images/salada.jpg";
import smoothie from "../../assets/images/smoothie.jpg";

function Recipes() {
  return (
    <section id="receitas" className="recipes-section">
      <Container>
        <div className="section-header">
          <span>Receitas Saudáveis</span>

          <h2>Alimentação saudável sem abrir mão do sabor</h2>

          <p>
            Algumas receitas que fazem parte de uma rotina equilibrada e
            sustentável.
          </p>
        </div>

        <Row className="g-4">
          <Col lg={4}>
            <RecipeCard
              image={panqueca}
              category="Café da manhã"
              title="Panqueca Proteica de Banana"
              description="Rica em proteínas, saciedade e energia para começar o dia."
              calories="245 kcal"
              time="10 min"
            />
          </Col>

          <Col lg={4}>
            <RecipeCard
              image={salada}
              category="Almoço"
              title="Salada de Frango com Quinoa"
              description="Combinação equilibrada de proteínas, fibras e nutrientes."
              calories="320 kcal"
              time="15 min"
            />
          </Col>

          <Col lg={4}>
            <RecipeCard
              image={smoothie}
              category="Lanche"
              title="Smoothie Verde Detox"
              description="Refrescante, nutritivo e ideal para os intervalos do dia."
              calories="160 kcal"
              time="5 min"
            />
          </Col>
        </Row>

        <div className="recipes-cta">
          <h3>Quer receber receitas personalizadas para seus objetivos?</h3>

          <p>
            Monte um plano alimentar adaptado à sua rotina, preferências e
            necessidades.
          </p>

           <PopupButton
                url="https://calendly.com/kevinbaudson/30min"
                rootElement={document.body}
                text="Agendar Consulta"
                className="btn btn-outline-success btn-lg"
              />
        </div>
      </Container>
    </section>
  );
}

export default Recipes;
