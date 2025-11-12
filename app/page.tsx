import Link from "next/link";

export default function Home() {
  return (
    <div className="landing">
      <section className="hero" id="home">
        <div className="shell hero__grid">
          <div className="hero__content">
            <h1>Find what buyers really search for.</h1>
            <p className="hero__lead">
              LexyHub shows you which keywords, products, and trends are worth your time — using real marketplace data.
            </p>
            <div className="hero__actions">
              <a className="hero__cta" href="https://app.lexyhub.com/signup">
                Try Free Now
              </a>
              <Link className="hero__demo" href="#demo">
                Watch 1-Minute Demo
              </Link>
            </div>
          </div>
          <div className="hero__visual" role="presentation" aria-hidden="true">
            <div className="hero__screen">
              <div className="hero__screen-top">
                <span className="hero__light" />
                <span className="hero__light" />
                <span className="hero__light" />
              </div>
              <div className="hero__search">
                <div className="hero__search-label">Keyword check</div>
                <div className="hero__search-input">
                  <span>necklaces</span>
                </div>
              </div>
              <div className="hero__result-card">
                <div className="hero__result-title">Demand snapshot</div>
                <div className="hero__result-rows">
                  <div>
                    <span className="hero__badge hero__badge--high">High demand</span>
                    <span className="hero__meta">22K searches this week</span>
                  </div>
                  <div>
                    <span className="hero__badge hero__badge--calm">Stable price</span>
                    <span className="hero__meta">Average sale $34</span>
                  </div>
                  <div>
                    <span className="hero__badge hero__badge--medium">Medium risk</span>
                    <span className="hero__meta">Competition easing</span>
                  </div>
                </div>
              </div>
              <div className="hero__note">Real numbers from Etsy &amp; Amazon, updated today.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--benefits" id="how-it-helps">
        <div className="shell">
          <h2>How it helps you sell</h2>
          <div className="benefits__grid">
            <article className="benefit-card">
              <h3>Discover what sells</h3>
              <p>Search any word and see if buyers are looking for it right now.</p>
            </article>
            <article className="benefit-card">
              <h3>Get smart tips</h3>
              <p>LexyHub explains how to improve your listings and avoid mistakes.</p>
            </article>
            <article className="benefit-card">
              <h3>Grow safely</h3>
              <p>Track your keywords and learn what&apos;s changing in your market.</p>
            </article>
          </div>
          <a className="section-link" href="https://app.lexyhub.com/signup">
            See Example Results
          </a>
        </div>
      </section>

      <section className="section section--product" id="product">
        <div className="shell product__grid">
          <div className="product__visual" aria-hidden="true">
            <div className="product__card">
              <p className="product__title">Keyword results</p>
              <div className="product__rows">
                <div className="product__row">
                  <span>wall art</span>
                  <span className="product__chip product__chip--good">High demand</span>
                </div>
                <div className="product__row">
                  <span>nursery print</span>
                  <span className="product__chip product__chip--steady">Balanced</span>
                </div>
                <div className="product__row">
                  <span>metal sign</span>
                  <span className="product__chip product__chip--watch">Keep watch</span>
                </div>
              </div>
              <div className="product__chart">
                <div className="product__bar product__bar--primary" style={{ height: "80%" }} />
                <div className="product__bar" style={{ height: "55%" }} />
                <div className="product__bar product__bar--accent" style={{ height: "68%" }} />
                <div className="product__bar" style={{ height: "40%" }} />
              </div>
              <div className="product__footer">
                <span>Watchlist</span>
                <span className="product__add">+ Add keyword</span>
              </div>
            </div>
          </div>
          <div className="product__copy">
            <h2>See everything in one simple dashboard</h2>
            <ul>
              <li>Clear demand, competition, and risk badges</li>
              <li>Track the ideas you care about with one click</li>
              <li>Spot trends with easy-to-read charts</li>
            </ul>
            <p className="product__note">Prefer video? A quick loop shows &ldquo;wall art&rdquo; turning into instant insights.</p>
          </div>
        </div>
      </section>

      <section className="section section--love" id="love">
        <div className="shell">
          <h2>Why sellers love it</h2>
          <div className="love__grid">
            <blockquote>
              “LexyHub tells me which ideas are worth making. It’s like a cheat sheet for Etsy.”
            </blockquote>
            <blockquote>
              “Finally something that makes data simple.”
            </blockquote>
            <blockquote>
              “I stopped guessing and started selling what people want.”
            </blockquote>
          </div>
          <div className="love__logos" role="list" aria-label="Supported marketplaces">
            <span role="listitem">Etsy</span>
            <span role="listitem">Amazon</span>
            <span role="listitem">Shopify</span>
          </div>
        </div>
      </section>

      <section className="section section--extension" id="extension">
        <div className="shell extension__content">
          <div>
            <h2>Free Chrome Extension - Get insights while you browse</h2>
            <p>Install our free Chrome extension to highlight keywords and add them to your watchlist instantly while browsing Etsy or Amazon.</p>
            <ul className="extension__list">
              <li>One-click install</li>
              <li>Works right on marketplace pages</li>
              <li>Completely free with your LexyHub account</li>
            </ul>
            <a className="extension__cta" href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer">
              Use Now - Free Extension
            </a>
          </div>
        </div>
      </section>

      <section className="section section--pricing" id="pricing">
        <div className="shell">
          <h2>Pricing made easy</h2>
          <div className="pricing__grid">
            <article className="pricing-card">
              <h3>Free</h3>
              <p className="pricing-card__price">$0</p>
              <p className="pricing-card__tag">Just starting</p>
              <ul>
                <li>Limited searches</li>
                <li>Basic tips</li>
              </ul>
            </article>
            <article className="pricing-card pricing-card--highlight">
              <h3>Basic</h3>
              <p className="pricing-card__price">$6.99/mo</p>
              <p className="pricing-card__tag">Small shops</p>
              <ul>
                <li>Unlimited searches</li>
                <li>Insights and watchlists</li>
              </ul>
            </article>
            <article className="pricing-card">
              <h3>Pro</h3>
              <p className="pricing-card__price">$12.99/mo</p>
              <p className="pricing-card__tag">Growing sellers</p>
              <ul>
                <li>Everything in Basic</li>
                <li>AI keyword ideas</li>
              </ul>
            </article>
          </div>
          <p className="pricing__note">Cancel anytime. No credit card for Free plan.</p>
          <a className="pricing__cta" href="https://app.lexyhub.com/signup">
            Start Free Today
          </a>
        </div>
      </section>

      <section className="section section--faq" id="faq">
        <div className="shell">
          <h2>FAQ</h2>
          <div className="faq__list">
            <details open>
              <summary>How does LexyHub get its data?</summary>
              <p>We analyze real marketplace trends and keep them updated daily.</p>
            </details>
            <details>
              <summary>Do I need technical skills?</summary>
              <p>No. Just type what you sell and read the results.</p>
            </details>
            <details>
              <summary>Does it work for Amazon or Etsy?</summary>
              <p>Yes — and more marketplaces soon.</p>
            </details>
            <details>
              <summary>What is the Chrome extension?</summary>
              <p>A small tool that shows keyword info right on product pages.</p>
            </details>
            <details>
              <summary>Can I cancel my plan?</summary>
              <p>Anytime, from your account settings.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="section section--cta" id="demo">
        <div className="shell final-cta">
          <h2>Stop guessing. Start knowing.</h2>
          <p>Join thousands of marketplace sellers who grow with LexyHub every day.</p>
          <a className="final-cta__button" href="https://app.lexyhub.com/signup">
            Create Free Account
          </a>
          <p className="final-cta__note">Works with Etsy, Amazon, and Shopify.</p>
        </div>
      </section>

    </div>
  );
}
