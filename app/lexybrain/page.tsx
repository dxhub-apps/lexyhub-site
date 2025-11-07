import Link from 'next/link';

export const metadata = {
  title: 'LexyBrain™ - AI Intelligence Engine | LexyHub',
  description: 'Learn about LexyBrain™, the proprietary AI intelligence engine developed by LexyHub to analyze marketplace signals and predict market trends.',
};

export default function LexyBrainPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero hero--lexybrain">
        <div className="shell hero__wrapper">
          <div className="hero__copy hero__copy--centered">
            <div className="lexybrain-hero__badge">
              <span className="badge-dot"></span>
              Proprietary AI Technology
            </div>
            <h1>LexyHub Presents LexyBrain™</h1>
            <p className="hero__subtitle">
              Developed by LexyHub. Designed to think like the market itself.
            </p>
            <p className="lead">
              LexyBrain™ is not just another AI feature — it&apos;s our proprietary intelligence engine,
              developed entirely by LexyHub to redefine how sellers understand and dominate their markets.
            </p>
          </div>
        </div>
      </section>

      {/* Main Introduction */}
      <section className="section section--intro">
        <div className="shell">
          <div className="content-block">
            <h2>The Intelligence Behind Every Insight</h2>
            <p className="lead">
              Built from the ground up by the LexyHub team, LexyBrain™ analyzes millions of marketplace
              signals — keywords, buyer intent, trend shifts, and competition patterns — and transforms
              them into crystal-clear insights you can act on instantly.
            </p>
          </div>

          <div className="highlight-box">
            <h3>It doesn&apos;t just collect data. It thinks.</h3>
            <p>
              LexyBrain™ learns how your niche behaves, predicts emerging opportunities, and helps you make
              precise decisions before anyone else sees what&apos;s coming.
            </p>
            <p>
              Every recommendation inside LexyHub — every trend, insight, and alert — is powered by
              the analytical depth of LexyBrain™, an AI system engineered to interpret meaning, not just numbers.
            </p>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="section section--capabilities">
        <div className="shell section__head">
          <h2>Why LexyBrain™ Matters</h2>
          <p>Four core capabilities that give you an unfair advantage</p>
        </div>
        <div className="shell grid grid--2col">
          <article className="card card--feature">
            <div className="card__icon">🎯</div>
            <h3>Predictive Precision</h3>
            <p>
              Detect tomorrow&apos;s winners before they peak. LexyBrain™ identifies emerging trends
              before they hit mainstream tools, giving you first-mover advantage in untapped niches.
            </p>
            <ul>
              <li>Early trend detection across 5+ data sources</li>
              <li>Pattern recognition from millions of marketplace signals</li>
              <li>Predictive modeling for seasonal and cyclical trends</li>
            </ul>
          </article>

          <article className="card card--feature">
            <div className="card__icon">💡</div>
            <h3>Actionable Clarity</h3>
            <p>
              Understand why trends move and how to leverage them. Get context-rich insights that
              explain the &quot;why&quot; behind every data point, not just the numbers.
            </p>
            <ul>
              <li>Semantic analysis reveals buyer intent</li>
              <li>Competition pattern recognition</li>
              <li>Specific, prioritized action recommendations</li>
            </ul>
          </article>

          <article className="card card--feature">
            <div className="card__icon">🔄</div>
            <h3>Adaptive Learning</h3>
            <p>
              LexyBrain™ evolves with every keyword, every signal, every market cycle. The more
              you use LexyHub, the smarter your insights become.
            </p>
            <ul>
              <li>Continuous learning from marketplace behavior</li>
              <li>Niche-specific pattern adaptation</li>
              <li>Real-time signal processing and analysis</li>
            </ul>
          </article>

          <article className="card card--feature">
            <div className="card__icon">⚡</div>
            <h3>Creator Advantage</h3>
            <p>
              Built exclusively for sellers who want data-driven confidence without technical complexity.
              Enterprise-grade intelligence, accessible to everyone.
            </p>
            <ul>
              <li>No technical expertise required</li>
              <li>Instant insights from complex data</li>
              <li>Designed for sellers, by sellers</li>
            </ul>
          </article>
        </div>
      </section>

      {/* How It Works */}
      <section className="section section--how-it-works">
        <div className="shell section__head">
          <h2>How LexyBrain™ Works</h2>
          <p>From millions of signals to actionable insights in milliseconds</p>
        </div>
        <div className="shell">
          <div className="process-flow">
            <div className="process-step">
              <div className="process-step__number">01</div>
              <h3>Data Collection</h3>
              <p>
                Continuously ingests signals from Amazon, Etsy, Google Trends, Pinterest, Reddit,
                and more — processing millions of data points daily.
              </p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="process-step__number">02</div>
              <h3>Intelligent Analysis</h3>
              <p>
                Uses 3,072-dimensional AI embeddings to understand semantic relationships,
                buyer intent, and market patterns that traditional tools miss.
              </p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="process-step__number">03</div>
              <h3>Pattern Recognition</h3>
              <p>
                Identifies trends, anomalies, and opportunities by comparing current signals
                against historical patterns and seasonal cycles.
              </p>
            </div>
            <div className="process-arrow">→</div>
            <div className="process-step">
              <div className="process-step__number">04</div>
              <h3>Actionable Output</h3>
              <p>
                Delivers crystal-clear insights with specific recommendations you can
                implement immediately to grow your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Deep Dive */}
      <section className="section section--technology">
        <div className="shell">
          <div className="content-block">
            <h2>Built Different. Built Better.</h2>
            <p className="lead">
              LexyBrain™ represents years of development by the LexyHub team, combining cutting-edge
              AI technology with deep marketplace expertise.
            </p>
          </div>

          <div className="grid grid--2col">
            <div className="tech-feature">
              <h3>Semantic Understanding</h3>
              <p>
                Unlike traditional keyword tools that rely on exact matching, LexyBrain™ uses
                advanced natural language processing to understand the meaning and context behind
                search terms, revealing hidden connections and opportunities.
              </p>
            </div>
            <div className="tech-feature">
              <h3>Multi-Source Validation</h3>
              <p>
                Cross-validates trends across multiple platforms to reduce false positives and
                identify truly sustainable opportunities. If a trend appears on Etsy but nowhere
                else, LexyBrain™ flags it.
              </p>
            </div>
            <div className="tech-feature">
              <h3>Temporal Intelligence</h3>
              <p>
                Automatically adjusts for seasonal patterns, holidays, and market cycles. Knows
                that &quot;Christmas ornaments&quot; means something different in July vs. November.
              </p>
            </div>
            <div className="tech-feature">
              <h3>Competitive Analysis</h3>
              <p>
                Analyzes competition patterns to identify low-saturation, high-opportunity niches.
                Finds the sweet spot where demand is high but competition is manageable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section section--impact">
        <div className="shell">
          <div className="impact-statement">
            <h2>Beyond Analytics. Into Intelligence.</h2>
            <p className="lead">
              With LexyHub developed LexyBrain™, we&apos;ve moved beyond simple data dashboards
              into true market intelligence. It&apos;s not about having more data — it&apos;s about
              having smarter insights.
            </p>
            <div className="impact-grid">
              <div className="impact-stat">
                <div className="stat-number">Millions</div>
                <div className="stat-label">Signals analyzed daily</div>
              </div>
              <div className="impact-stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Data sources integrated</div>
              </div>
              <div className="impact-stat">
                <div className="stat-number">3,072</div>
                <div className="stat-label">AI embedding dimensions</div>
              </div>
              <div className="impact-stat">
                <div className="stat-number">Real-time</div>
                <div className="stat-label">Continuous learning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="section section--closing">
        <div className="shell">
          <div className="closing-statement">
            <h2>It&apos;s Not a Dashboard. It&apos;s Your Competitive Edge.</h2>
            <p>
              Every feature in LexyHub — from semantic keyword search to Market Twin simulations —
              is powered by LexyBrain™. When you use LexyHub, you&apos;re leveraging an AI system
              built specifically to help sellers win in competitive marketplaces.
            </p>
            <p>
              <strong>This is what separates LexyHub from every other marketplace tool.</strong>
            </p>
            <div className="closing-cta">
              <Link href="/#pricing" className="btn btn--primary btn--large">
                Start Using LexyBrain™ Today
              </Link>
              <Link href="/" className="btn btn--secondary btn--large">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
