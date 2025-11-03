import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact LexyHub | Get in Touch",
  description: "Contact the LexyHub team of data-obsessed marketplace sellers for demos, data partnerships, and signal reviews.",
};

export default function Contact() {
  return (
    <>
      <section className="section">
        <div className="shell section__head">
          <p className="eyebrow">CONTACT</p>
          <h1>Talk to the people who actually unify the data.</h1>
          <p>
            Tell us what you sell, which marketplaces matter, and which signals you are missing. We will map Amazon, Etsy, Google
            Trends, and web keyword sources to your use case and show how to turn them into profit decisions.
          </p>
        </div>

        <div className="shell grid grid--features">
          <article className="feature feature--accent">
            <h2>Product + demo</h2>
            <p>
              Need to see how your categories look in LexyHub? Email{' '}
              <a href="mailto:demos@lexyhub.com">demos@lexyhub.com</a>. We plug in your vertical and walk through demand,
              saturation, and keyword opportunities.
            </p>
          </article>
          <article className="feature">
            <h2>Data & marketplace partners</h2>
            <p>
              Have Amazon, Etsy, or search-side signals we should ingest? Write{' '}
              <a href="mailto:partners@lexyhub.com">partners@lexyhub.com</a> and we will scope ingestion windows and formats.
            </p>
          </article>
          <article className="feature">
            <h2>Signal reviews</h2>
            <p>
              Want our analysts to tell you what&apos;s real and what&apos;s noise? Send your listings or SKUs to{' '}
              <a href="mailto:signals@lexyhub.com">signals@lexyhub.com</a>.
            </p>
          </article>
          <article className="feature">
            <h2>Press & research</h2>
            <p>
              For media, benchmark reports, or commentary on marketplace demand, contact{' '}
              <a href="mailto:press@lexyhub.com">press@lexyhub.com</a>.
            </p>
          </article>
        </div>
      </section>

      <section className="section" id="connect">
        <div className="shell section__head">
          <h2>Direct lines</h2>
          <p>
            We are operators. We respond. Choose the fastest path for your decision.
          </p>
        </div>
        <div className="shell grid grid--features">
          <article className="feature">
            <h3>Slack access</h3>
            <p>
              Join our seller-first Slack for weekly signal breakdowns. Request an invite at{' '}
              <a href="mailto:community@lexyhub.com">community@lexyhub.com</a>.
            </p>
          </article>
          <article className="feature">
            <h3>Support</h3>
            <p>
              Open a ticket at{' '}
              <a href="https://support.lexyhub.com">support.lexyhub.com</a>
              {' '}for ingestion issues, data freshness, or mapping questions.
            </p>
          </article>
          <article className="feature">
            <h3>Office hours</h3>
            <p>
              Weekly 30-minute virtual sessions where we look at your signals live and optimize watchlists.
            </p>
          </article>
          <article className="feature">
            <h3>Location</h3>
            <p>LexyHub, 2100 Market Street, Suite 502, San Francisco, CA 94114</p>
          </article>
        </div>
      </section>
    </>
  );
}
