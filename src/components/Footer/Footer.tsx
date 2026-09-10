import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-main">

          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <span className="footer-logo-icon">DS</span>

              <span className="footer-logo-text">
                Dev<span>Stack</span>
              </span>
            </a>

            <p className="footer-description">
              Curated tools, technologies, and resources for
              developers building modern software.
            </p>

            <div className="social-links">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="footer-links-group">
            <h3>PRODUCT</h3>

            <a href="#home">Home</a>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
          </div>

          <div className="footer-links-group">
            <h3>COMPANY</h3>

            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#careers">Careers</a>
          </div>

          <div className="footer-links-group">
            <h3>LEGAL</h3>

            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © 2026 DevStack. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}