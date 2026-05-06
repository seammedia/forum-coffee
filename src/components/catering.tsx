import { Arrow } from "./icons";

export function Catering() {
  return (
    <section id="catering" className="catering">
      <div className="container">
        <div className="catering-grid">
          <div>
            <span className="eyebrow">Catering · Sydney CBD</span>
            <h2>Coffee for<br />your <em>office, opening,</em><br />or one big morning.</h2>
            <p>
              Mobile carts, batch brew towers, hand-pour bars, and grazing tables.
              We deliver from Pyrmont to Surry Hills with a 48-hour heads up.
            </p>
            <a href="#" className="btn">Request a quote <Arrow /></a>
          </div>
          <div className="catering-card">
            <h4>From $14 / head</h4>
            <div className="row"><span className="k">Lead time</span><span className="v">48 hours</span></div>
            <div className="row"><span className="k">Min. group</span><span className="v">25 people</span></div>
            <div className="row"><span className="k">Service</span><span className="v">Cart · Tower · Pour</span></div>
            <div className="row"><span className="k">Travel zone</span><span className="v">CBD + 5km</span></div>
            <div className="row"><span className="k">Booked this month</span><span className="v">14 events</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
