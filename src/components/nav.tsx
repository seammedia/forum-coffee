import { ForumLogo } from "./icons";
import { SQUARE_ONLINE_URL } from "@/lib/config";

export function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="/" className="nav-brand">
          <ForumLogo color="#fff" size={26} />
          <span className="nav-brand-name">FORUM COFFEE</span>
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
