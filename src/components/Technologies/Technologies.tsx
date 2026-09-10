import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../../types";
import TechnologyCard from "../TechnologyCard/TechnologyCard";
import Stack from "../Stack/Stack";
import "./Technologies.css";

export default function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        return response.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
      })
      .catch(() => {
        toast.error("Failed to load technologies.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack.`);
  };

  const handleRemove = (id: string) => {
    const removedTechnology = stack.find(
      (technology) => technology.id === id
    );

    setStack((previousStack) =>
      previousStack.filter(
        (technology) => technology.id !== id
      )
    );

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack.`);
    }
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  const isAdded = (id: string) => {
    return stack.some((technology) => technology.id === id);
  };

  if (loading) {
    return (
      <section className="technologies-section" id="technologies">
        <div className="technologies-container">
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading technologies...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="technologies-section" id="technologies">
      <div className="technologies-container">

        <div className="section-heading">
          <h2>
            Explore the <span>Technologies</span>
          </h2>

          <p>
            Pick a technology per category to build your ideal stack.
          </p>
        </div>

        <div className="technologies-layout">

          <div className="technology-grid">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                handleAddToStack={handleAddToStack}
                isAdded={isAdded(technology.id)}
              />
            ))}
          </div>

          <Stack
            stack={stack}
            handleRemove={handleRemove}
            handleRemoveAll={handleRemoveAll}
          />

        </div>

      </div>
    </section>
  );
}