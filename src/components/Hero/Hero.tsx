import bannerImage from "../../assets/banner.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <h1>
            Build Your Ideal
            <span>Development Stack</span>
          </h1>

          <p>
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="hero-buttons">
            <button className="hero-primary-button">
              Explore Technologies
            </button>

            <button className="hero-secondary-button">
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img src={bannerImage} alt="Development stack illustration" />
        </div>

      </div>
    </section>
  );
}
// kj