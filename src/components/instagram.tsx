const tiles = [
  "/images/latte-pastry.webp",
  "/images/wraps.webp",
  "/images/menu-wall-tight.webp",
  "/images/storefront.webp",
  "/images/menu-wall-wide.webp",
  "/images/latte-pastry.webp",
];

export function Instagram() {
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Follow along</span>
            <h2><em>@forumcoffee</em></h2>
          </div>
          <p className="lede">
            New beans, daily specials, and the very occasional dog. Tag us with
            <span style={{ fontFamily: "var(--mono)", color: "var(--terracotta)" }}> #weTalkCoffee</span> for a feature.
          </p>
        </div>
        <div className="insta-grid">
          {tiles.map((src, i) => (
            <a key={i} className="ig" href="#">
              <img src={src} alt="" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
