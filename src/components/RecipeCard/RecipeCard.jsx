import "./RecipeCard.css";

function RecipeCard({
  image,
  title,
  calories,
  time
}) {
  return (
    <div className="recipe-item">
      <img
        src={image}
        alt={title}
        className="recipe-thumb"
      />

      <div className="recipe-body">
        <h3>{title}</h3>

        <div className="recipe-meta">
          <span>⏱ {time}</span>
          <span>🔥 {calories}</span>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;