import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <button className="menu-button" type="button">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <a href="#" className="brand">
          <span className="brand-logo">DS</span>
          <span className="brand-text">
            Dev<span>Stack</span>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#" className="active">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="auth-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>

      </div>
    </header>
  );
}