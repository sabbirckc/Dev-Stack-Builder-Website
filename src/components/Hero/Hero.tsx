import bannerImage from "../../assets/banner.png";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">

        {/* Hero Content */}
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            Build Your Ideal
            <span
              className="block bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--brand-gradient)" }}
            >
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            Explore frontend, backend, database, and tooling
            options, compare them side by side, and build the
            stack that fits your next project.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-md px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              style={{ background: "var(--brand-gradient)" }}
            >
              Explore Technologies
            </button>

            <button
              type="button"
              className="rounded-md border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:border-gray-300"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={bannerImage}
            alt="Development stack illustration"
            className="w-full max-w-md object-contain"
          />
        </div>

      </div>
    </section>
  );
}