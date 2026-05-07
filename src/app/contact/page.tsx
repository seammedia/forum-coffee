import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { IconPin, IconClock, IconPhone, IconMail } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact — Forum Coffee",
  description:
    "Find Forum Coffee in Chippendale, get our hours, or send us a message. We reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="Get in touch"
        title="Say hello, drop in, or send us a brief."
        description="We answer emails within one business day. For catering enquiries, the fastest path is the form below."
      />

      <section>
        <div className="container">
          <div className="contact-grid">
            <form
              className="contact-form"
              action="https://formsubmit.co/hello@forumcoffee.com.au"
              method="POST"
            >
              <div className="field-row">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" required placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required placeholder="you@email.com" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" defaultValue="General">
                  <option>General enquiry</option>
                  <option>Catering enquiry</option>
                  <option>Wholesale</option>
                  <option>Press</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required placeholder="How can we help?" />
              </div>
              <button type="submit" className="btn btn-tan" style={{ alignSelf: "flex-start" }}>
                Send Message
              </button>
            </form>

            <div className="contact-info">
              <div>
                <h3>Find us</h3>
                <div className="visit-rows" style={{ marginBottom: 0 }}>
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
                      <div className="hour-line"><span>Mon-Fri</span><span>6:30am - 3:30pm</span></div>
                      <div className="hour-line"><span>Sat-Sun</span><span>7:00am - 3:00pm</span></div>
                    </div>
                  </div>
                  <div className="visit-row">
                    <span className="icon"><IconPhone /></span>
                    <div className="text"><a href="tel:+61299991234">(02) 9999 1234</a></div>
                  </div>
                  <div className="visit-row">
                    <span className="icon"><IconMail /></span>
                    <div className="text">
                      <a href="mailto:hello@forumcoffee.com.au">hello@forumcoffee.com.au</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="visit-map" style={{ minHeight: 320 }}>
                <iframe
                  title="Forum Coffee location map"
                  src="https://www.google.com/maps?q=112+Broadway,Chippendale+NSW+2008&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
