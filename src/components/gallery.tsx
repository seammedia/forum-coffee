export function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">The Room</span>
            <h2>Navy walls,<br />brass rails, <em>good light.</em></h2>
          </div>
          <p className="lede">
            A 40-seat room on Broadway, designed to slow you down. Long communal table,
            window perches, a courtyard out the back when the weather plays nice.
          </p>
        </div>
        <div className="gallery-grid">
          <div className="g g-1">
            <img src="/images/menu-wall-tight.webp" alt="Menu wall in navy and brass" />
            <div className="cap">Menu wall · 2024</div>
          </div>
          <div className="g g-2">
            <img src="/images/menu-wall-wide.webp" alt="Wide view of cafe interior" />
            <div className="cap">Bar · morning</div>
          </div>
          <div className="g g-3">
            <img src="/images/storefront.webp" alt="Storefront from the street" />
            <div className="cap">Broadway entrance</div>
          </div>
          <div className="g g-4">
            <img src="/images/latte-pastry.webp" alt="Latte and pastry" />
            <div className="cap">9:14am</div>
          </div>
          <div className="g g-5">
            <img src="/images/wraps.webp" alt="Wraps and juice" />
            <div className="cap">Lunch board</div>
          </div>
        </div>
      </div>
    </section>
  );
}
