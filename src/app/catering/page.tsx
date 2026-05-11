import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Arrow } from "@/components/icons";

export const metadata: Metadata = {
  title: "Catering — Forum Coffee",
  description:
    "Breakfast platters, sandwiches, gourmet finger food, grazing tables and canapé packages. Catering anywhere in Sydney with 24 hours' notice.",
};

const packages = [
  {
    name: "Cocktail Reception",
    badge: null,
    priceFrom: "26",
    note: "/ per person",
    features: [
      "Five canapés per person",
      "Cold + warm options",
      "GF, V and vegan choices",
      "Black caviar blini, beef salad, watermelon and more",
      "Perfect for openings and receptions",
    ],
  },
  {
    name: "Celebration Package",
    badge: "Most Popular",
    priceFrom: "48.5",
    note: "/ per person",
    features: [
      "Eight items per person",
      "Cold + warm canapés, substantial sliders, sweet",
      "Hazelnut tartlet with native Davidson plum",
      "GF, DF, V and vegan options included",
      "Built for events that go the distance",
    ],
  },
  {
    name: "Custom Menu",
    badge: null,
    priceFrom: "POA",
    note: "",
    features: [
      "Built from our full catering menu",
      "Breakfast platters, sandwiches, finger food",
      "Grazing boards, sweets and canapés",
      "Mobile coffee carts available on request",
      "Any size, any Sydney event",
    ],
  },
];

const menuCategories = [
  {
    name: "Breakfast + Morning Starters",
    items: "Yoghurt + Granola Cups · Fresh Fruit Platter · Breakfast Sliders · Mini Savoury Croissants · Mini Muffins · Danish Pastries · Mix Pastries",
  },
  {
    name: "Sandwiches + Wraps",
    items: "Classic Sandwich Quarters · Wraps Assorted · Mini Sliders · Mini Prawn Brioche Rolls · Finger Sandwiches",
  },
  {
    name: "Gourmet Finger Food (Warm)",
    items: "Arancini Balls · Teriyaki Chicken Skewers · Puff Pastry Quiches · Mini Chorizo · Veggie Spring Rolls",
  },
  {
    name: "Gourmet Finger Food (Cold)",
    items: "Chili Mango Salsa · Baby Frittatas · Maki Sushi Box · Rice Paper Rolls · Peking Duck Pancakes",
  },
  {
    name: "Shared Grazing + Platters",
    items: "Artisanal Cheese Board · Antipasto Platter · Garden Crudités & Dips",
  },
  {
    name: "Sweet Treats",
    items: "Apple & Cinnamon Pastry Tacos · Assorted Mini Cakes · GF Chocolate Brownies · Mini Jam Donuts",
  },
];

const steps = [
  {
    n: "01",
    title: "Send a brief",
    body: "Date, headcount, address, service window. The more detail the better.",
  },
  {
    n: "02",
    title: "Get a quote",
    body: "We come back within one business day with options and pricing.",
  },
  {
    n: "03",
    title: "Confirm & pay",
    body: "Lock in with a 10% deposit. We work with you on the final headcount.",
  },
  {
    n: "04",
    title: "You enjoy the event",
    body: "We set up, serve, and pack down. You enjoy the event.",
  },
];

export default function CateringPage() {
  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="Catering · Sydney-wide"
        title="Bring Forum to your event."
        description="Breakfast platters, sandwiches, gourmet finger food, grazing boards and canapé packages. Catering anywhere in Sydney with 24 hours' notice."
      />

      <section>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "60ch", margin: "0 auto" }}>
            <span className="eyebrow" style={{ display: "block", marginBottom: 14 }}>
              Download the full menu
            </span>
            <h2 className="h-display" style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "var(--navy)", margin: "0 0 24px" }}>
              The catering menu, in full.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--muted)", margin: "0 0 28px" }}>
              All categories, sizes and pricing. Orders placed before 2pm are delivered the next business day. All prices exclude GST.
            </p>
            <a
              href="/forum-coffee-catering-menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-tan"
            >
              Download Catering Menu (PDF) <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--paper)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "60ch", margin: "0 auto" }}>
            <span className="eyebrow" style={{ display: "block", marginBottom: 14 }}>
              What's on the menu
            </span>
            <h2 className="h-display" style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "var(--navy)", margin: 0 }}>
              Something for every event.
            </h2>
          </div>
          <div style={{ marginTop: "clamp(40px, 5vw, 64px)", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {menuCategories.map((c) => (
              <div key={c.name} style={{ background: "#fff", border: "1px solid var(--rule)", borderRadius: 4, padding: "28px 32px" }}>
                <h3 style={{ fontFamily: "var(--display)", fontWeight: 400, fontSize: 24, color: "var(--navy)", margin: "0 0 10px" }}>{c.name}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--muted)", margin: 0 }}>{c.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "60ch", margin: "0 auto" }}>
            <span className="eyebrow" style={{ display: "block", marginBottom: 14 }}>
              Canapé packages
            </span>
            <h2 className="h-display" style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "var(--navy)", margin: 0 }}>
              Pick the one that fits your event.
            </h2>
          </div>
          <div className="catering-tiers">
            {packages.map((t) => (
              <div key={t.name} className={`catering-tier${t.badge ? " featured" : ""}`}>
                {t.badge && <span className="badge">{t.badge}</span>}
                <h3>{t.name}</h3>
                <div className="price-from">
                  {t.priceFrom === "POA" ? <b>POA</b> : <>from <b>${t.priceFrom}</b></>}
                  <span style={{ fontStyle: "normal", fontSize: 13, marginLeft: 4, opacity: 0.7 }}>{t.note}</span>
                </div>
                <ul className="feature">
                  {t.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a
                  href="mailto:lucas@forumcoffee.com.au"
                  className={t.badge ? "btn btn-tan" : "btn btn-dark"}
                  style={{ alignSelf: "stretch" }}
                >
                  Request a Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--paper)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "60ch", margin: "0 auto" }}>
            <span className="eyebrow" style={{ display: "block", marginBottom: 14 }}>How it works</span>
            <h2 className="h-display" style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "var(--navy)", margin: 0 }}>
              Booked in four steps.
            </h2>
          </div>
          <div className="catering-how">
            {steps.map((s) => (
              <div key={s.n} className="catering-step">
                <div className="num">{s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <h2>Ready to brief us?</h2>
          <p>
            Tell us the date, the headcount and the rough location. We&apos;ll come
            back within one business day with options.
          </p>
          <div className="cta-strip-actions">
            <a href="mailto:lucas@forumcoffee.com.au" className="btn btn-tan">Request a Quote <Arrow /></a>
            <a href="mailto:lucas@forumcoffee.com.au" className="btn btn-outline-light">
              lucas@forumcoffee.com.au
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
