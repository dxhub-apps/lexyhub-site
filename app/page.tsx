import Link from 'next/link';
import PricingSection from '@/components/PricingSection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="shell hero__wrapper">
          <div className="hero__copy">
            <p className="eyebrow">FREE FOREVER PLAN AVAILABLE</p>
            <h1>Turn Marketplace Data Into Revenue</h1>
            <p className="lead">
              Stop guessing. LexiHub uses AI to analyze keywords across Amazon, Etsy, and Google—revealing hidden opportunities, seasonal trends, and optimization insights that drive real growth.
            </p>
            <div className="hero__cta-row">
              <a
                className="btn btn--primary"
                href="https://app.lexyhub.com/signup"
              >
                Start Free—No Credit Card
              </a>
              <a
                className="btn btn--secondary"
                href="#features"
              >
                See How It Works
              </a>
            </div>
            <p className="hero__perk-note">
              <strong>10 keyword searches/month free forever.</strong> Upgrade to Basic ($6.99), Pro ($12.99), or Growth ($24.99) for more.
            </p>
          </div>
          <div className="hero__side">
            <div className="panel panel--primary" aria-label="Live signals">
              <div className="panel__head">
                <span className="panel__title">Real-Time Intelligence</span>
                <span className="tag tag--live">LIVE</span>
              </div>
              <p className="panel__desc">Cross-marketplace trend analysis</p>
              <ul className="signal-list">
                <li>
                  <span>&quot;personalized jewelry&quot;</span>
                  <span className="trend trend--up">+142%</span>
                </li>
                <li>
                  <span>&quot;custom mom necklace&quot;</span>
                  <span className="trend trend--up">+118%</span>
                </li>
                <li>
                  <span>&quot;seasonal home decor&quot;</span>
                  <span className="trend trend--up">+89%</span>
                </li>
                <li>
                  <span>&quot;print on demand&quot;</span>
                  <span className="trend trend--up">+64%</span>
                </li>
              </ul>
            </div>
            <div className="panel panel--neutral">
              <p className="panel__label">5+ Data Sources</p>
              <p className="panel__body">
                Etsy, Amazon, Google Trends, Pinterest, Reddit—all analyzed in real-time with AI-powered semantic search.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="section section--problem">
        <div className="shell section__head">
          <h2>The Seller&apos;s Dilemma</h2>
          <p>Traditional tools leave you guessing. LexiHub gives you answers.</p>
        </div>
        <div className="shell grid grid--2col">
          <article className="problem-card">
            <div className="problem-card__icon">×</div>
            <h3>Without LexiHub</h3>
            <ul>
              <li>Manual keyword research across multiple tools</li>
              <li>Discover trends after they&apos;re already saturated</li>
              <li>Guess if your listings are optimized</li>
              <li>No way to predict pricing impact</li>
              <li>Miss seasonal opportunities</li>
              <li>Pay $100+/month for scattered tools</li>
            </ul>
          </article>
          <article className="problem-card problem-card--solution">
            <div className="problem-card__icon">✓</div>
            <h3>With LexiHub</h3>
            <ul>
              <li>AI semantic search finds hidden opportunities</li>
              <li>Multi-source trend validation catches emerging niches</li>
              <li>Automated listing audits with specific fixes</li>
              <li>Market Twin simulator models decisions before you act</li>
              <li>Seasonal intelligence plans 3 months ahead</li>
              <li>All-in-one platform starting at $0/month</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="section section--why" id="features">
        <div className="shell section__head">
          <h2>What Makes LexiHub Different</h2>
          <p>We built what we wish existed when we were sellers.</p>
        </div>
        <div className="shell grid grid--3col">
          <article className="card">
            <h3>AI Semantic Search</h3>
            <p>
              Not just keyword matching. Our 3,072-dimensional AI embeddings understand <em>meaning</em>. Search &quot;handmade candles&quot; and discover related opportunities like &quot;artisan wax melts&quot; that competitors miss.
            </p>
          </article>
          <article className="card">
            <h3>5+ Data Sources</h3>
            <p>
              Cross-validate trends across Etsy, Amazon, Google, Pinterest, and Reddit. Reduce false positives and catch opportunities before mainstream tools.
            </p>
          </article>
          <article className="card">
            <h3>Seasonal Intelligence</h3>
            <p>
              Automatic seasonal weighting for Black Friday, Christmas, Mother&apos;s Day, and more. Plan inventory 2-3 months ahead of demand peaks.
            </p>
          </article>
          <article className="card">
            <h3>Market Twin Simulator</h3>
            <p>
              Model &quot;what-if&quot; scenarios before making changes. Test price adjustments, ad spend, and inventory decisions with data-backed projections.
            </p>
          </article>
          <article className="card">
            <h3>Listing Intelligence</h3>
            <p>
              AI-powered quality audits score your listings and provide specific, prioritized fixes. Upload images for computer vision-powered tag suggestions.
            </p>
          </article>
          <article className="card">
            <h3>Visual Tag AI</h3>
            <p>
              Upload product images and get AI-generated tag suggestions using computer vision. Find keywords you never would have thought of.
            </p>
          </article>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="section section--features-deep">
        <div className="shell">
          <div className="feature-block">
            <div className="feature-block__content">
              <h2>Discover Keywords Competitors Don&apos;t See</h2>
              <p className="lead">
                Traditional tools rely on exact keyword matching. LexiHub uses AI to understand semantic relationships, revealing hidden market opportunities.
              </p>
              <ul className="feature-list">
                <li>Search by meaning, not just exact phrases</li>
                <li>Discover sub-niches within your market</li>
                <li>Find buyer intent keywords that drive sales</li>
                <li>Reduce research time from hours to minutes</li>
              </ul>
            </div>
            <div className="feature-block__visual">
              <div className="feature-demo">
                <div className="demo-search">
                  <div className="demo-input">handmade candles</div>
                  <div className="demo-arrow">→</div>
                </div>
                <div className="demo-results">
                  <div className="demo-result">artisan wax melts</div>
                  <div className="demo-result">hand-poured soy candles</div>
                  <div className="demo-result">aromatherapy home decor</div>
                  <div className="demo-result">scented gift sets</div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-block feature-block--reverse">
            <div className="feature-block__content">
              <h2>Know What Will Happen Before You Act</h2>
              <p className="lead">
                Market Twin lets you simulate pricing changes, ad spend adjustments, and seasonal impacts—seeing projected results before investing.
              </p>
              <ul className="feature-list">
                <li>Model price changes and revenue impact</li>
                <li>Test different ad spend scenarios</li>
                <li>Forecast inventory needs</li>
                <li>Compare best-case vs. realistic outcomes</li>
              </ul>
            </div>
            <div className="feature-block__visual">
              <div className="feature-demo feature-demo--simulator">
                <div className="simulator-row">
                  <span>Price: $12.99 → $15.99</span>
                  <span className="simulator-result">+23% revenue</span>
                </div>
                <div className="simulator-row">
                  <span>Ad Spend: +$200/month</span>
                  <span className="simulator-result">+47 sales</span>
                </div>
                <div className="simulator-row">
                  <span>Seasonal Peak: Dec</span>
                  <span className="simulator-result">1.8x demand</span>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-block">
            <div className="feature-block__content">
              <h2>Fix What&apos;s Wrong. Rank Higher.</h2>
              <p className="lead">
                Get specific, actionable fixes for underperforming listings. AI analyzes completeness, sentiment, readability, and keyword density.
              </p>
              <ul className="feature-list">
                <li>Comprehensive quality audits with scores</li>
                <li>Prioritized action items by impact</li>
                <li>Tag health scoring and substitutions</li>
                <li>Competitor benchmarking</li>
              </ul>
            </div>
            <div className="feature-block__visual">
              <div className="feature-demo">
                <div className="audit-score">
                  <div className="score-circle">68/100</div>
                  <div className="score-label">Listing Quality</div>
                </div>
                <div className="audit-items">
                  <div className="audit-item audit-item--high">Readability: 42/100</div>
                  <div className="audit-item audit-item--medium">Keyword density low</div>
                  <div className="audit-item audit-item--low">Completeness: 89/100</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Use Cases / Success Stories */}
      <section className="section section--use-cases">
        <div className="shell section__head">
          <h2>Real Sellers. Real Results.</h2>
          <p>See how LexiHub helps sellers discover opportunities and optimize performance.</p>
        </div>
        <div className="shell grid grid--3col">
          <article className="card">
            <h3>Seasonal Launch Success</h3>
            <p>
              <strong>Challenge:</strong> Launch Christmas ornaments in time for holiday peak.
            </p>
            <p>
              <strong>Solution:</strong> Used semantic search to find high-demand, low-competition keywords. Seasonal calendar identified August launch window. Market Twin modeled optimal pricing.
            </p>
            <p className="result">
              <strong>Result:</strong> Launched 3 months early with data-backed pricing. 40% of seasonal revenue.
            </p>
          </article>
          <article className="card">
            <h3>Untapped Niche Discovery</h3>
            <p>
              <strong>Challenge:</strong> Wanted to expand product line but unsure which direction.
            </p>
            <p>
              <strong>Solution:</strong> Semantic exploration revealed &quot;bohemian wall hanging&quot; niche with low competition, high demand, and 3,200% YoY growth.
            </p>
            <p className="result">
              <strong>Result:</strong> Discovered profitable niche before saturation. Clear path to profitability.
            </p>
          </article>
          <article className="card">
            <h3>Conversion Rate Optimization</h3>
            <p>
              <strong>Challenge:</strong> 20 listings but only 3 driving sales. Others had impressions but no conversions.
            </p>
            <p>
              <strong>Solution:</strong> Listing Intelligence audits identified specific issues (low readability, poor sentiment, weak tags). Quick-fix recommendations prioritized by impact.
            </p>
            <p className="result">
              <strong>Result:</strong> Conversion rate increased from 1.2% to 3.8% across 17 listings.
            </p>
          </article>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section section--comparison">
        <div className="shell section__head">
          <h2>LexiHub vs. Traditional Tools</h2>
          <p>Stop paying for 3-4 separate tools. Get everything in one platform.</p>
        </div>
        <div className="shell">
          <div className="comparison-table">
            <div className="comparison-row comparison-row--header">
              <div className="comparison-cell">Capability</div>
              <div className="comparison-cell">LexiHub</div>
              <div className="comparison-cell">Traditional Tools</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell"><strong>Semantic AI Search</strong></div>
              <div className="comparison-cell comparison-cell--yes">3,072D embeddings</div>
              <div className="comparison-cell comparison-cell--no">Exact matching only</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell"><strong>Multi-Source Data</strong></div>
              <div className="comparison-cell comparison-cell--yes">5+ sources</div>
              <div className="comparison-cell comparison-cell--no">Usually 1-2</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell"><strong>Seasonal Intelligence</strong></div>
              <div className="comparison-cell comparison-cell--yes">Automatic weighting</div>
              <div className="comparison-cell comparison-cell--no">Manual adjustments</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell"><strong>Market Simulator</strong></div>
              <div className="comparison-cell comparison-cell--yes">Built-in scenarios</div>
              <div className="comparison-cell comparison-cell--no">Not available</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell"><strong>Listing Audits</strong></div>
              <div className="comparison-cell comparison-cell--yes">AI-powered analysis</div>
              <div className="comparison-cell comparison-cell--no">Basic SEO checks</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell"><strong>Visual Tag AI</strong></div>
              <div className="comparison-cell comparison-cell--yes">Image-to-tag generation</div>
              <div className="comparison-cell comparison-cell--no">Not available</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell"><strong>Monthly Cost</strong></div>
              <div className="comparison-cell comparison-cell--yes">$0 - $24.99</div>
              <div className="comparison-cell comparison-cell--no">$100 - $200</div>
            </div>
          </div>
          <p className="comparison-note">
            <strong>Save $1,000+ per year</strong> by replacing multiple tools with LexiHub&apos;s all-in-one platform.
          </p>
        </div>
      </section>

      {/* Chrome Extension Section */}
      <section className="section section--extension" id="extension">
        <div className="shell extension-feature">
          <div className="extension-feature__copy">
            <div className="extension-promo-badge">
              🎁 Sign up via extension = FREE 14-day Pro trial!
            </div>
            <h2>
              Your Keyword Sidekick.
              <br />
              Works Everywhere You Do.
            </h2>
            <p className="lead">
              The LexiHub Chrome Extension brings intelligence directly into your workflow. Browse Amazon, Etsy, or Google—we&apos;re already there.
            </p>
            <div className="extension-perks">
              <h3>Extension Features:</h3>
              <ul>
                <li>Instant keyword overlays on product pages</li>
                <li>One-click trend lookups from any search</li>
                <li>Seamless integration with web app</li>
                <li>Privacy-first design (only active on marketplace pages)</li>
                <li><strong>Sign up through extension = 14 days of Pro FREE</strong></li>
              </ul>
            </div>
            <a
              className="btn btn--primary btn--large"
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Extension + Free Pro Trial →
            </a>
            <p className="extension-note">
              Works with Chrome, Edge, Brave, and all Chromium browsers
            </p>
          </div>
          <div className="extension-feature__visual">
            <div className="browser-mockup">
              <div className="browser-chrome">
                <div className="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="browser-address">chrome://extensions</div>
              </div>
              <div className="browser-content">
                <div className="extension-card">
                  <div className="extension-icon">LH</div>
                  <div className="extension-info">
                    <h4>LexiHub Intelligence</h4>
                    <p>Keyword data. Everywhere.</p>
                  </div>
                </div>
                <div className="extension-badge">Installed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section--how">
        <div className="shell section__head">
          <h2>Get Started in Minutes</h2>
          <p>From signup to insights in under 5 minutes.</p>
        </div>
        <div className="shell grid grid--4col">
          <article className="step">
            <h3>1. Sign Up Free</h3>
            <p>Create your account. No credit card needed. Start with 10 free searches per month.</p>
          </article>
          <article className="step">
            <h3>2. Search Keywords</h3>
            <p>Use semantic search to discover opportunities. See demand, competition, and trends.</p>
          </article>
          <article className="step">
            <h3>3. Optimize Listings</h3>
            <p>Run quality audits. Get specific fixes. Upload images for AI tag suggestions.</p>
          </article>
          <article className="step">
            <h3>4. Monitor & Grow</h3>
            <p>Track SERP positions. Get trend alerts. Upgrade when you need more capacity.</p>
          </article>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section section--cta">
        <div className="shell cta-block">
          <h2>Ready to Gain an Unfair Advantage?</h2>
          <p>
            Join sellers who use LexiHub to discover opportunities competitors don&apos;t see.
            Start free—upgrade only when you need more.
          </p>
          <div className="cta-buttons">
            <a
              className="btn btn--primary btn--large"
              href="https://app.lexyhub.com/signup"
            >
              Start Free Forever Plan
            </a>
            <a
              className="btn btn--secondary btn--large"
              href="#pricing"
            >
              View Pricing
            </a>
          </div>
          <p className="cta-note">
            No credit card required • 10 searches/month free forever • Upgrade anytime
          </p>
        </div>
      </section>
    </>
  );
}
