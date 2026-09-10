import type { Technology } from "../../types";
import "./Stack.css";

interface StackProps {
  stack: Technology[];
  handleRemove: (id: string) => void;
  handleRemoveAll: () => void;
}

export default function Stack({
  stack,
  handleRemove,
  handleRemoveAll,
}: StackProps) {
  return (
    <aside className="stack">
      <div className="stack-header">
        <div>
          <h2>Your Stack</h2>

          <p>
            {stack.length}{" "}
            {stack.length === 1 ? "Technology" : "Technologies"} Selected
          </p>
        </div>
      </div>

      {stack.length === 0 ? (
        <div className="stack-empty">
          <p>Your stack is empty</p>
          <span>Select technologies to build your ideal stack.</span>
        </div>
      ) : (
        <>
          <div className="stack-items">
            {stack.map((technology) => (
              <div className="stack-item" key={technology.id}>
                <div className="stack-item-icon">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                  />
                </div>

                <div className="stack-item-content">
                  <h3>{technology.name}</h3>
                  <p>{technology.category}</p>
                </div>

                <button
                  className="remove-button"
                  onClick={() => handleRemove(technology.id)}
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            className="remove-all-button"
            onClick={handleRemoveAll}
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}