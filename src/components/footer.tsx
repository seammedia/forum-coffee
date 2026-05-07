import { IconInstagram } from "./icons";

export function Footer() {
  return (
    <footer id="contact">
      <div className="foot-photo">
        <img src="/images/upload-3.webp" alt="" aria-hidden="true" />
      </div>
      <div className="container">
        <div className="foot-inner">
          <div className="foot-brand-block">
            <a href="#" className="nav-brand">
              <img src="/images/logo-white.png" alt="Forum Coffee" className="nav-logo" />
            </a>
            <p>
              Well-made coffee, good food, nice people, and a place you&apos;ll
              want to come back to.
            </p>
            <div className="foot-social">
              <a
                href="https://www.instagram.com/forumcoffeeunda/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
            </div>
          </div>
          <div className="foot-col">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#catering">Catering</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#menu">Order Online</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Hours</h4>
            <div className="lines">
              <div className="hour-line"><span>Mon-Fri</span><span>6:30am - 3:30pm</span></div>
              <div className="hour-line"><span>Sat-Sun</span><span>Closed</span></div>
            </div>
          </div>
          <div className="foot-col">
            <h4>Contact</h4>
            <div className="lines">
              <div className="line">112-126 Broadway,<br />Chippendale NSW 2008</div>
              <div className="line"><a href="mailto:hello@forumcoffee.com.au">hello@forumcoffee.com.au</a></div>
            </div>
          </div>
          <div />
        </div>
        <div className="foot-bottom">
          <div>© 2026 Forum Coffee. All rights reserved.</div>
          <div>Chippendale, Sydney</div>
        </div>
      </div>
    </footer>
  );
}
