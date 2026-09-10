import type { Technology } from "../../types";
import "./TechnologyCard.css";

interface TechnologyCardProps {
  technology: Technology;
  handleAddToStack: (technology: Technology) => void;
  isAdded: boolean;
}

export default function TechnologyCard({
  technology,
  handleAddToStack,
  isAdded,
}: TechnologyCardProps) {
  return (
    <article className="technology-card">
      <div className="technology-card-top">
        <div className="technology-icon">
          <img src={technology.icon} alt={technology.name} />
        </div>

        <span className="technology-badge">
          {technology.badge}
        </span>
      </div>

      <h3>{technology.name}</h3>

      <p className="technology-description">
        {technology.description}
      </p>

      <div className="technology-info">
        <span className="category-chip">
          {technology.category}
        </span>

        <span className="difficulty">
          {technology.difficulty}
        </span>

        <span className="rating">
          <span>★</span> {technology.rating}
        </span>
      </div>

      <button
        className={`add-stack-button ${isAdded ? "added" : ""}`}
        onClick={() => handleAddToStack(technology)}
        disabled={isAdded}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}