import { IconPin, IconClock, IconMail } from "./icons";

export function Visit() {
  return (
    <section id="visit" className="visit">
      <div className="container">
        <div className="visit-grid">
          <div className="visit-info">
            <span className="eyebrow">Find Us</span>
            <h2>Visit us in Chippendale.</h2>
            <div className="visit-rows">
              <div className="visit-row">
                <span className="icon"><IconPin /></span>
                <div className="text">
                  112-126 Broadway,<br />
                  Chippendale NSW 2008
                </div>
              </div>
              <div className="visit-row">
                <span className="icon"><IconClock /></span>
                <div className="text">
                  <div className="hour-line"><span>Mon-Thu</span><span>7:00am - 4:00pm</span></div>
                  <div className="hour-line"><span>Fri</span><span>7:00am - 3:00pm</span></div>
                  <div className="hour-line"><span>Sat-Sun</span><span>Closed</span></div>
                </div>
              </div>
              <div className="visit-row">
                <span className="icon"><IconMail /></span>
                <div className="text">
                  <a href="mailto:sean@forumcoffee.com.au">sean@forumcoffee.com.au</a>
                </div>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=112+Broadway+Chippendale+NSW+2008"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-tan"
            >
              Get Directions
            </a>
          </div>
          <div className="visit-map">
            <iframe
              title="Forum Coffee location map"
              src="https://www.google.com/maps?q=112+Broadway,Chippendale+NSW+2008&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
