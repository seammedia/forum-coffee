import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { IconCoffee, IconPin, IconStar, Arrow } from "@/components/icons";

export const metadata: Metadata = {
  title: "About — Forum Coffee",
  description:
    "Forum Coffee is a neighbourhood specialty café on Broadway, Chippendale. Our story, our values, and the people behind the bar.",
};

const values = [
  {
    icon: <IconCoffee />,
    title: "Quality, every cup",
    body:
      "We work with one roaster, cup every batch, and dial in the grind throughout the day. No shortcuts on the bar.",
  },
  {
    icon: <IconPin />,
    title: "A place to belong",
    body:
      "A community space first, café second. Long communal table, free wifi, and a door that's always open.",
  },
  {
    icon: <IconStar />,
    title: "Local-first sourcing",
    body:
      "Our pastries walk in by 6:30am from bakers down the road. Our suppliers are mostly within five kilometres.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="Our Story"
        title="More than coffee."
        description="Forum Coffee opened on Broadway in 2019 with one belief — good coffee should be a daily anchor, not a treat. Five years on, the bar is still set by our regulars."
      />

      <section className="section-pad-sm">
        <div className="container">
          <div className="about-grid">
            <div className="about-copy">
              <span className="eyebrow">Why we&apos;re here</span>
              <h2>Built around the everyday ritual.</h2>
              <p>
                We named the café after the Roman forum — a place where citizens met,
                traded news, and lingered. That&apos;s the bar we hold ourselves to.
                Whether you&apos;re here for the espresso, the egg roll, or the long
                table, you&apos;re welcome to stay a while.
              </p>
              <p>
                Our roastery partners cup every batch we serve. Our bakers walk pastries
                in before sunrise. Our regulars know the staff by name — and most of the
                dogs, too.
              </p>
              <a href="/contact" className="link-tan">Come say hi.</a>
            </div>
            <div className="about-photo">
              <img src="/images/upload-5.webp" alt="Forum Coffee storefront on Broadway" />
            </div>
          </div>

          <div className="about-stats-row">
            <div className="about-stat">
              <div className="n">2019</div>
              <div className="l">Doors opened</div>
            </div>
            <div className="about-stat">
              <div className="n">1,200+</div>
              <div className="l">Cups poured weekly</div>
            </div>
            <div className="about-stat">
              <div className="n">14</div>
              <div className="l">Local suppliers</div>
            </div>
            <div className="about-stat">
              <div className="n">4.8★</div>
              <div className="l">Across 632 reviews</div>
            </div>
          </div>
        </div>
      </section>

      <section className="signatures" style={{ background: "var(--paper)" }}>
        <div className="container">
          <span className="eyebrow">What we stand for</span>
          <h2>Three values, on the wall.</h2>
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.title} className="value-card">
                <div className="icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <h2>Pull up a chair on Broadway.</h2>
          <p>
            Two minutes from Central Station, opposite Victoria Park. Bike racks
            out front, courtyard out back, and a long table that&apos;s almost always
            free at 10am.
          </p>
          <div className="cta-strip-actions">
            <a href="/contact" className="btn btn-tan">Visit Us <Arrow /></a>
            <a href="/menu" className="btn btn-outline-light">View Menu</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
