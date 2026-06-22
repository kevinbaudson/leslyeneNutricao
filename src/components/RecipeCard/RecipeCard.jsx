import './RecipeCard.css';

function RecipeCard({
  image,
  category,
  title,
  description,
  calories,
  time
}) {
  return (
    <div className="recipe-card">

      <img src={image} alt={title} />

      <div className="recipe-content">

        <span className="recipe-category">
          {category}
        </span>

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="recipe-info">
          <span>⏱ {time}</span>
          <span>🔥 {calories}</span>
        </div>

      </div>

    </div>
  );
}

export default RecipeCard;