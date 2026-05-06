export function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2>Built for the<br /><em>everyday ritual.</em></h2>
          </div>
          <p className="lede">
            Forum is a meeting place - a small civic room dressed in navy, brass, and
            Sydney sun. We opened in 2019 with one belief: that good coffee should be
            a daily anchor, not a treat.
          </p>
        </div>
        <div className="about-grid">
          <div className="about-photos">
            <div className="p p-1">
              <img src="/images/storefront.webp" alt="Forum Coffee storefront on Broadway" />
            </div>
            <div className="p p-2">
              <img src="/images/menu-wall-tight.webp" alt="Menu wall detail" />
            </div>
            <div className="p p-3">
              <img src="/images/wraps.webp" alt="Lunch wraps and antioxidant juice" />
            </div>
          </div>
          <div className="about-body">
            <p className="drop">
              Our roastery partners cup every batch we serve. Our bakers walk pastries
              in by 6:30am. Our regulars know the staff by name - and most of the dogs, too.
            </p>
            <p>
              We named the café for the Roman forum: a place where citizens met, traded
              news, and lingered. That&apos;s the bar we hold ourselves to. Stay a while.
            </p>
            <div className="about-stats">
              <div className="stat">
                <div className="n">1,200+</div>
                <div className="l">Cups poured weekly</div>
              </div>
              <div className="stat">
                <div className="n">14</div>
                <div className="l">Local suppliers</div>
              </div>
              <div className="stat">
                <div className="n">4.8★</div>
                <div className="l">632 Google reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
