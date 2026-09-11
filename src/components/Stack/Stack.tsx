import type { Technology } from "../../types";

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
    <aside className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm lg:sticky lg:top-20">

      <div>
        <h2 className="text-base font-semibold text-gray-900">
          Your Stack
        </h2>

        <p className="mt-1 text-xs text-gray-400">
          {stack.length}{" "}
          {stack.length === 1
            ? "Technology"
            : "Technologies"}{" "}
          Selected
        </p>
      </div>

      {stack.length === 0 ? (
        <div className="mt-5 flex min-h-32 flex-col items-center justify-center rounded-lg border border-dashed border-gray-200 px-4 text-center">
          <p className="text-xs font-medium text-gray-500">
            Your stack is empty
          </p>

          <span className="mt-2 max-w-48 text-[11px] leading-5 text-gray-400">
            Select technologies to build your ideal stack.
          </span>
        </div>
      ) : (
        <>
          <div className="mt-5 space-y-2">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center rounded-lg border border-gray-100 p-2.5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-6 w-6 object-contain"
                  />
                </div>

                <div className="ml-2 min-w-0 flex-1">
                  <h3 className="truncate text-xs font-semibold text-gray-800">
                    {technology.name}
                  </h3>

                  <p className="mt-1 text-[10px] text-gray-400">
                    {technology.category}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemove(technology.id)}
                  className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleRemoveAll}
            className="mt-4 w-full rounded-md border border-red-200 py-2.5 text-xs font-medium text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}

    </aside>
  );
}