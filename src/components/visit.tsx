import { Arrow } from "./icons";

const hours: [string, string, boolean][] = [
  ["Monday", "7:00 – 4:00", false],
  ["Tuesday", "7:00 – 4:00", false],
  ["Wednesday", "7:00 – 4:00", true],
  ["Thursday", "7:00 – 4:00", false],
  ["Friday", "7:00 – 4:00", false],
  ["Saturday", "8:00 – 3:00", false],
  ["Sunday", "Closed", false],
];

export function Visit() {
  return (
    <section id="visit" className="visit">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Visit</span>
            <h2>Pull up a chair<br />on <em>Broadway.</em></h2>
          </div>
          <p className="lede">
            Two minutes from Central Station, opposite Victoria Park. Bike racks
            out front, courtyard out back, and a long table that&apos;s almost always free at 10am.
          </p>
        </div>
        <div className="visit-grid">
          <div className="visit-card">
            <h3>Find us</h3>
            <div className="addr">
              112-126 Broadway,<br />
              Chippendale NSW 2008<br />
              Sydney, Australia
            </div>
            <div style={{ height: 1, background: "var(--rule)" }} />
            <div style={{ display: "flex", gap: 24, fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" as const }}>
              <a href="mailto:hello@forumcoffee.com.au">Hello@forumcoffee.com.au</a>
              <a href="tel:+61280000000">+61 2 8000 0000</a>
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
              <a href="#" className="btn primary">Get directions <Arrow /></a>
              <a href="#" className="btn">Book a table <Arrow /></a>
            </div>
          </div>
          <div className="visit-card dark">
            <h3>Hours</h3>
            <div className="hours">
              {hours.map(([day, time, today], i) => (
                <div key={i} className={"row" + (today ? " today" : "")}>
                  <span>{day}{today ? " · today" : ""}</span>
                  <span>{time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
