import { IconStar } from "./icons";

const reviews = [
  {
    quote:
      "The coffee is consistently excellent and the staff are so friendly. My favourite spot in Chippendale.",
    author: "Sarah M.",
  },
  {
    quote:
      "Best cold brew in Sydney! The food is amazing and the vibe is perfect.",
    author: "James T.",
  },
  {
    quote:
      "Our team orders catering from Forum Coffee all the time. Always a hit!",
    author: "Olivia R.",
  },
];

function Stars() {
  return (
    <div className="stars" aria-label="5 star rating">
      {[0, 1, 2, 3, 4].map((i) => (
        <IconStar key={i} size={13} />
      ))}
    </div>
  );
}

export function Together() {
  return (
    <section className="together">
      <div className="container">
        <div className="together-grid">
          <div className="promo">
            <img src="/images/upload-1.webp" alt="Coffee and pastry" />
            <div className="promo-content">
              <span className="eyebrow">Good Days Start Here</span>
              <h3>Great coffee.<br />Better together.</h3>
              <a href="/menu" className="btn">View Our Menu</a>
            </div>
          </div>
          <div className="reviews-block">
            <span className="eyebrow">What People Say</span>
            <h2>Loved by locals.</h2>
            <div className="review-row">
              {reviews.map((r) => (
                <div key={r.author} className="review-card">
                  <Stars />
                  <p className="quote">&ldquo;{r.quote}&rdquo;</p>
                  <div className="author">{r.author}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
