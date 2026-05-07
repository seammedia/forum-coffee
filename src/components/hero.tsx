export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/images/upload-2.webp" alt="Forum Coffee menu wall and barista" />
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
              <a href="#menu" className="btn btn-tan">View Menu</a>
              <a href="#catering" className="btn btn-outline-light">Order Catering</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
