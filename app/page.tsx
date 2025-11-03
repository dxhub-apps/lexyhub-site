import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="shell hero__wrapper">
          <div className="hero__copy">
            <p className="eyebrow">DATA FROM AMAZON, ETSY, & GOOGLE TRENDS</p>
            <h1>See What Buyers Want. Right Now.</h1>
            <p className="lead">
              Stop sorting through messy dashboards. LexyHub unifies real-time
              search data from Amazon, Etsy, and Google into one clean,
              actionable feed. See the opportunity *before* it becomes a
              saturated trend.
            </p>
            <div className="hero__cta-row">
              <a className="btn btn--primary" href="#pricing">
                View pricing
              </a>
              <Link className="btn btn--link" href="/about">
                Why sellers built LexyHub →
              </Link>
            </div>
            <div className="hero__meta-row">
              <div className="meta-block">
                <p className="meta-title">3 Sources</p>
                <p className="meta-text">Amazon, Etsy, Google</p>
              </div>
              <div className="meta-block">
                <p className="meta-title">Explainable</p>
                <p className="meta-text">Every signal has a source</p>
              </div>
              <div className="meta-block">
                <p className="meta-title">Seller-First</p>
                <p className="meta-text">Built to make money</p>
              </div>
            </div>
          </div>
          <div className="hero__side">
            <div className="panel panel--primary" aria-label="Live signals">
              <div className="panel__head">
                <span className="panel__title">Live Signal Board</span>
                <span className="tag tag--green">live</span>
              </div>
              <p className="panel__desc">Cross-marketplace spikes (10:05)</p>
              <ul className="signal-list">
                <li>
                  <span>&quot;message card jewelry&quot;</span>
                  <span className="trend trend--up">+142%</span>
                </li>
                <li>
                  <span>&quot;personalized gift for mom&quot;</span>
                  <span className="trend trend--up">+118%</span>
                </li>
                <li>
                  <span>&quot;etsy valentines gift&quot;</span>
                  <span className="trend trend--up">+74%</span>
                </li>
                <li>
                  <span>&quot;print on demand shirt&quot;</span>
                  <span className="trend trend--up">+51%</span>
                </li>
              </ul>
            </div>
            <div className="panel panel--neutral">
              <p className="panel__label">AI Launch Brief</p>
              <p className="panel__body">
                Signal confirmed across Amazon, Etsy, and search. Competition
                still light. Launch in 3–5 days. Route to Merch + Ops.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="product">
        <div className="shell section__head">
          <h2>Intelligence, Not Just Data.</h2>
          <p>Structured marketplace intelligence. Not dashboards.</p>
        </div>
        <div className="shell grid grid--3col">
          <article className="card">
            <h3>Unified Signals</h3>
            <p>
              We pull and align real-time demand from Amazon, Etsy, and Google.
              No more comparing apples and oranges.
            </p>
          </article>
          <article className="card">
            <h3>Opportunity Scoring</h3>
            <p>
              Our algorithm ranks every signal on velocity, saturation, and
              profit potential. Focus on what works.
            </p>
          </article>
          <article className="card">
            <h3>AI Launch Briefs</h3>
            <p>
              Every signal is explained. Get AI-powered briefs your team can
              trust and act on instantly.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--gray" id="pricing">
        <div className="shell section__head section__head--left">
          <h2>Pricing built for sellers</h2>
          <p>Choose your intake. Upgrade when you outgrow it.</p>
        </div>
        <div className="shell pricing">
          <article className="plan">
            <p className="plan__badge">Free forever</p>
            <h3>Free</h3>
            <p className="plan__price">$0</p>
            <p className="plan__desc">Validate product ideas on real signals.</p>
            <ul className="plan__list">
              <li>100 lookups/month</li>
              <li>3 watchlists</li>
              <li>Weekly signal digest</li>
            </ul>
            <a
              className="btn btn--ghost btn--full"
              href="https://app.lexyhub.com/signup"
            >
              Start for Free
            </a>
          </article>
          <article className="plan">
            <p className="plan__badge">For operators</p>
            <h3>Basic</h3>
            <p className="plan__price">$7</p>
            <p className="plan__desc">More volume, fresher keyword data.</p>
            <ul className="plan__list">
              <li>1,000 lookups</li>
              <li>Auto watchlist refresh</li>
              <li>CSV exports</li>
            </ul>
            <a
              className="btn btn--primary btn--full"
              href="https://app.lexyhub.com/signup?plan=basic"
            >
              Start Basic
            </a>
          </article>
          <article className="plan plan--highlight">
            <p className="plan__badge plan__badge--blue">Teams&apos; choice</p>
            <h3>Pro</h3>
            <p className="plan__price">$29</p>
            <p className="plan__desc">
              Unlimited signals plus explainable AI briefs.
            </p>
            <ul className="plan__list">
              <li>Unlimited lookups</li>
              <li>Cross-market comparisons</li>
              <li>Workspace alerts & roles</li>
              <li>API access</li>
            </ul>
            <a
              className="btn btn--primary btn--full"
              href="https://app.lexyhub.com/signup?plan=pro"
            >
              Start Pro
            </a>
            <p className="plan__foot">Annual: 20% off</p>
          </article>
        </div>
        <p className="shell growth-link">
          <Link href="/contact">Ask about our Growth plan →</Link>
        </p>
      </section>

      <section className="section">
        <div className="shell section__head section__head--left">
          <h2>Your 5-Minute Workflow</h2>
          <p>From signal to decision, fast. No visual noise.</p>
        </div>
        <div className="shell grid grid--4col">
          <article className="step">
            <h3>1. Ingest</h3>
            <p>Pull marketplace, trend, and keyword data.</p>
          </article>
          <article className="step">
            <h3>2. Score</h3>
            <p>Rank by speed, saturation, and value.</p>
          </article>
          <article className="step">
            <h3>3. Explain</h3>
            <p>Generate context for teams.</p>
          </article>
          <article className="step">
            <h3>4. Deploy</h3>
            <p>Send to watchlists and alerts.</p>
          </article>
        </div>
      </section>
    </>
  );
}
