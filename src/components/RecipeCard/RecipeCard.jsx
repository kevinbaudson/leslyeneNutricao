import './RecipeCard.css';
import { Card, Button } from 'react-bootstrap';

function RecipeCard({
  image,
  title,
  time,
  calories
}) {
  return (
    <Card className="recipe-card">

      <Card.Img
        variant="top"
        src={image}
      />

      <Card.Body>

        <Card.Title>
          {title}
        </Card.Title>

        <Card.Text>
          ⏱️ {time}
          <br />
          🔥 {calories}
        </Card.Text>

        <Button
          variant="success"
        >
          Ver Receita
        </Button>

      </Card.Body>

    </Card>
  );
}

export default RecipeCard;