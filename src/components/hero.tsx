import { Arrow } from "./icons";

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Est. 2019 · Chippendale, Sydney</span>
            <h1>
              Coffee,<br />
              <em>conversation,</em><br />
              and a corner<br />
              of the city.
            </h1>
            <div className="hero-tag">
              <span className="dot" />
              <span>We. Talk. Coffee.</span>
            </div>
            <p className="hero-sub">
              A neighbourhood specialty café on Broadway - slow-pulled espresso,
              morning pastries from local bakers, and lunches built for the long table.
            </p>
            <div className="hero-ctas">
              <a href="#menu" className="btn dark">See the menu <Arrow /></a>
              <a href="#visit" className="btn">Plan a visit <Arrow /></a>
            </div>
          </div>
          <div>
            <div className="hero-photo">
              <img src="/images/latte-pastry.webp" alt="Latte and almond croissant in morning light" />
              <div className="hero-badge">
                <div className="seal">F</div>
                <div>
                  <div style={{ opacity: 0.6, fontSize: 9, marginBottom: 2 }}>House blend</div>
                  <div>Single origin · Forum Roast</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-meta">
          <div className="item">
            <div className="k">Hours today</div>
            <div className="v">7:00 - 4:00 <small>Mon-Fri</small></div>
          </div>
          <div className="item">
            <div className="k">Address</div>
            <div className="v">112-126 Broadway <small>Chippendale</small></div>
          </div>
          <div className="item">
            <div className="k">Brewing</div>
            <div className="v">La Marzocco <small>Linea Mini</small></div>
          </div>
          <div className="item">
            <div className="k">Beans</div>
            <div className="v">Single origin <small>rotating weekly</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}
