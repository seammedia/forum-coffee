import { SQUARE_ONLINE_URL } from "@/lib/config";

export function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="/" className="nav-brand">
          <img src="/images/logo-white.png" alt="Forum Coffee" className="nav-logo" />
        </a>
        <nav className="nav-links">
          <a href="/menu">Menu</a>
          <a href="/catering">Catering</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <a
          href={SQUARE_ONLINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-tan nav-cta"
        >
          Order Online
        </a>
      </div>
    </header>
  );
}
