import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { IconCoffee, IconPin, IconStar, Arrow } from "@/components/icons";

export const metadata: Metadata = {
  title: "About — Forum Coffee",
  description:
    "Forum Coffee is a neighbourhood specialty café on Broadway, Chippendale, with a garden courtyard right on the street.",
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
      "A community space first, café second. Locals, visitors and students all welcome, and a door that's always open.",
  },
  {
    icon: <IconStar />,
    title: "Local-first sourcing",
    body:
      "Our pastries walk in by 7am from bakers down the road. Our suppliers are mostly within five kilometres.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="Our Story"
        title="More than coffee."
        description="Forum Coffee opened on Broadway in 2019 with a simple idea: good coffee should be a daily anchor, not a treat. In 2026, the bar is still set by our regulars."
      />

      <section className="section-pad-sm">
        <div className="container">
          <div className="about-grid">
            <div className="about-copy">
              <span className="eyebrow">Why we&apos;re here</span>
              <h2>A neighbourhood café on Broadway.</h2>
              <p>
                Forum Coffee is a neighbourhood specialty café on Broadway in Chippendale,
                pouring single-origin espresso, baking-fresh pastries and serving simple
                café favourites, just moments from the University of Notre Dame.
              </p>
              <p>
                Our garden courtyard sits right on the street, making us a welcoming spot
                for locals, visitors and students alike to relax, meet, or pull up a seat
                for a quiet coffee.
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
              <div className="n">1,500+</div>
              <div className="l">Cups poured weekly</div>
            </div>
            <div className="about-stat">
              <div className="n">14</div>
              <div className="l">Local suppliers</div>
            </div>
            <div className="about-stat">
              <div className="n">4.8★</div>
              <div className="l">Across 800+ reviews</div>
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
            Two minutes from Central Station, with a garden courtyard right on the street
            and bench seating out front. Drop in for a coffee, a pastry, or just to say hi.
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
