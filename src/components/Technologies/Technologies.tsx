import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../../types";
import TechnologyCard from "../TechnologyCard/TechnologyCard";
import Stack from "../Stack/Stack";

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
        toast.error("Failed to load technologies");
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
      toast.warning(
        `${technology.name} is already in your stack`
      );
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack`
    );
  };

  const handleRemove = (id: string) => {
    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    if (removedTechnology) {
      toast.info(
        `${removedTechnology.name} removed from your stack`
      );
    }
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);
    toast.info("All technologies removed from your stack");
  };

  const isAdded = (id: string) => {
    return stack.some((item) => item.id === id);
  };

  if (loading) {
    return (
      <section className="px-4 py-20">
        <div className="flex min-h-60 flex-col items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500"></div>

          <p className="mt-4 text-sm text-gray-500">
            Loading technologies...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="technologies"
      className="bg-gray-50/50 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Explore the{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--brand-gradient)" }}
            >
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Pick technologies to build your ideal development stack.
          </p>
        </div>

        {/* Technologies + Stack */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[3fr_1fr]">

          {/* Technology Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                handleAddToStack={handleAddToStack}
                isAdded={isAdded(technology.id)}
              />
            ))}
          </div>

          {/* Stack */}
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