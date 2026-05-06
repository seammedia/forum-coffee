const REVIEWS = [
  {
    quote: "The flat white set the standard for my whole week. Staff remember your order by visit two.",
    name: "Marcus L.",
    meta: "Local guide · Google",
    initial: "M",
  },
  {
    quote: "Genuinely the prettiest little café in Chippendale. The almond croissant is a religious experience.",
    name: "Priya S.",
    meta: "Sydney Morning Herald",
    initial: "P",
  },
  {
    quote: "Catering for our office launch was effortless. Hot coffee on time, every time, with a smile.",
    name: "Daniel R.",
    meta: "Atlassian, George St",
    initial: "D",
  },
];

export function Reviews() {
  return (
    <section className="reviews">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">In the wild</span>
            <h2>What people<br /><em>are saying.</em></h2>
          </div>
          <p className="lede">
            4.8 stars across 632 reviews. Featured in Broadsheet, Concrete Playground,
            and the very particular notebooks of our regulars.
          </p>
        </div>
        <div className="review-grid">
          {REVIEWS.map((r, i) => (
            <div key={i} className="review">
              <div className="stars">★★★★★</div>
              <div className="quote">&ldquo;{r.quote}&rdquo;</div>
              <div className="who">
                <div className="avatar">{r.initial}</div>
                <div>
                  <div className="name">{r.name}</div>
                  <div className="meta">{r.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
