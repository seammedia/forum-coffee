import { ForumLogo, Arrow } from "./icons";

export function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <nav className="nav-links">
          <a href="#menu">Menu</a>
          <a href="#about">Our Story</a>
          <a href="#catering">Catering</a>
          <a href="#visit">Visit</a>
        </nav>
        <a href="#" className="brand">
          <ForumLogo color="var(--navy)" />
          <span className="brand-name">FORUM</span>
        </a>
        <div className="nav-right">
          <div className="nav-hours">
            <span className="dot" />
            <span>Open · until 4pm</span>
          </div>
          <a href="#visit" className="btn primary" style={{ padding: "10px 18px", fontSize: 12 }}>
            Find us <Arrow />
          </a>
        </div>
      </div>
    </header>
  );
}
