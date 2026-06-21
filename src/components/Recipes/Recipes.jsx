import './Recipes.css';

import { Container, Row, Col } from 'react-bootstrap';

import RecipeCard from '../RecipeCard/RecipeCard';
import recipe from '../../assets/images/recipes.png';

function Recipes() {
  return (
    <section
      id="receitas"
      className="recipes-section"
    >
      <Container>

        <div className="section-header">

          <span>
            Receitas Saudáveis
          </span>

          <h2>
            Receitas práticas para o dia a dia
          </h2>

          <p>
            Opções deliciosas para ajudar
            você a manter uma alimentação
            equilibrada.
          </p>

        </div>

        <Row>

          <Col lg={4} md={6} className="mb-4">
            <RecipeCard
              image={recipe}
              title="Panqueca Proteica"
              time="10 minutos"
              calories="250 kcal"
            />
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <RecipeCard
             image={recipe}
              title="Salada Fit"
              time="15 minutos"
              calories="180 kcal"
            />
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <RecipeCard
              image={recipe}
              title="Smoothie Verde"
              time="5 minutos"
              calories="140 kcal"
            />
          </Col>

        </Row>

      </Container>
    </section>
  );
}

export default Recipes;