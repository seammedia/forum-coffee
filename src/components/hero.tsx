export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img
          src="/images/hero-menu-wall-2400.jpg"
          srcSet="/images/hero-menu-wall-1600.jpg 1600w, /images/hero-menu-wall-2400.jpg 2400w"
          sizes="100vw"
          alt="Forum Coffee menu wall and barista at the counter"
        />
      </div>
      <div className="hero-inner">
        <div className="container">
          <div className="hero-content">
            <h1>We Talk Coffee.</h1>
            <p>
              Well-made coffee, good food, nice people, and a place you&apos;ll
              want to come back to.
            </p>
            <div className="hero-ctas">
              <a href="/menu" className="btn btn-tan">View Menu</a>
              <a href="/catering" className="btn btn-outline-light">Order Catering</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
