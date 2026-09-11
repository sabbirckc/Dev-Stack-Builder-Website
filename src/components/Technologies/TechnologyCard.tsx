import type { Technology } from "../../types";

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
    <article className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-8 w-8 object-contain"
          />
        </div>

        <span className="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-medium text-green-600">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-4 text-base font-semibold text-gray-900">
        {technology.name}
      </h3>

      <p className="mt-2 min-h-12 text-xs leading-5 text-gray-500">
        {technology.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="rounded bg-gray-50 px-2 py-1 text-[10px] text-gray-500">
          {technology.category}
        </span>

        <span className="text-[10px] text-gray-500">
          {technology.difficulty}
        </span>

        <span className="ml-auto text-xs text-gray-500">
          <span className="text-yellow-500">★</span>{" "}
          {technology.rating}
        </span>
      </div>

      <button
        type="button"
        onClick={() => handleAddToStack(technology)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-md py-2.5 text-xs font-medium transition ${
          isAdded
            ? "cursor-not-allowed bg-gray-100 text-gray-500"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>

    </article>
  );
}