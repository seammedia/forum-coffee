import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { Arrow } from "@/components/icons";

export const metadata: Metadata = {
  title: "Catering — Forum Coffee",
  description:
    "Mobile coffee carts, batch brew towers, hand-pour bars, and grazing tables. Catering for offices, openings, and big mornings across Sydney CBD.",
};

const tiers = [
  {
    name: "The Round",
    badge: null,
    priceFrom: "14",
    note: "/ head",
    features: [
      "Batch brew on a self-serve tower",
      "Selection of teas and milks",
      "Pastry tray for the table",
      "Up to 50 cups, 2-hour drop-in",
      "Delivered, set up, packed down",
    ],
  },
  {
    name: "The Bar",
    badge: "Most Popular",
    priceFrom: "22",
    note: "/ head",
    features: [
      "On-site barista with espresso cart",
      "All your espresso menu favourites",
      "Plant milks included",
      "Up to 100 covers, 3 service hours",
      "Branded cups available on request",
    ],
  },
  {
    name: "The Forum",
    badge: null,
    priceFrom: "32",
    note: "/ head",
    features: [
      "Two baristas, espresso + filter",
      "Grazing table with house pastries",
      "Cold brew on tap option",
      "Custom signage and printed menu",
      "Up to 250 covers, 4 service hours",
    ],
  },
];

const steps = [
  {
    n: "01",
    title: "Send a brief",
    body: "Date, headcount, address, service hours. The more detail the better.",
  },
  {
    n: "02",
    title: "Get a quote",
    body: "We come back within one business day with options and pricing.",
  },
  {
    n: "03",
    title: "Confirm & pay",
    body: "Lock in with a 30% deposit. Final headcount confirmed 48 hours out.",
  },
  {
    n: "04",
    title: "We arrive",
    body: "Set up 30 minutes before service. You enjoy the morning.",
  },
];

export default function CateringPage() {
  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="Catering · Sydney CBD"
        title="Coffee for your big morning."
        description="Mobile carts, batch brew towers, hand-pour bars and grazing tables. We cater offices, conferences, gallery openings and weddings — from Pyrmont to Surry Hills, with 48 hours' notice."
      />

      <section>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "60ch", margin: "0 auto" }}>
            <span className="eyebrow" style={{ display: "block", marginBottom: 14 }}>
              Three Packages
            </span>
            <h2 className="h-display" style={{ fontSize: "clamp(32px, 4vw, 52px)", color: "var(--navy)", margin: 0 }}>
              Pick the one that fits your morning.
            </h2>
          </div>
          <div className="catering-tiers">
            {tiers.map((t) => (
              <div key={t.name} className={`catering-tier${t.badge ? " featured" : ""}`}>
                {t.badge && <span className="badge">{t.badge}</span>}
                <h3>{t.name}</h3>
                <div className="price-from">
                  from <b>${t.priceFrom}</b>
                  <span style={{ fontStyle: "normal", fontSize: 13, marginLeft: 4, opacity: 0.7 }}>{t.note}</span>
                </div>
                <ul className="feature">
                  {t.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a
                  href="/contact"
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
            <a href="/contact" className="btn btn-tan">Request a Quote <Arrow /></a>
            <a href="mailto:catering@forumcoffee.com.au" className="btn btn-outline-light">
              catering@forumcoffee.com.au
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
