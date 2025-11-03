import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About LexyHub | Our Story",
  description: "LexyHub is a crew of data-obsessed marketplace sellers and engineers who were tired of guessing from outdated, noisy signals.",
};

export default function About() {
  return (
    <>
      <section className="section">
        <div className="shell section__head">
          <p className="eyebrow">ABOUT LEXYHUB</p>
          <h1>We sell. We stare at data. We hate guessing.</h1>
          <p>
            LexyHub was built by marketplace operators who have actually fought for the Buy Box, got penalized for wrong
            inventory bets, and watched a trend peak before the report arrived. We wired every data source we wanted into one
            interface and made it explain itself.
          </p>
        </div>

        <div className="shell grid grid--features">
          <article className="feature feature--accent">
            <h2>Origin story</h2>
            <p>
              We ran multi-marketplace catalogs. Amazon, Etsy, D2C. Every week the same problem: signals were everywhere,
              timestamps were off, teams were reacting late. So we built a commerce-grade signal layer.
            </p>
          </article>
          <article className="feature">
            <h2>What we&apos;re obsessed with</h2>
            <p>Complete, time-aligned, explainable data.</p>
            <ul className="feature__list">
              <li>Real marketplace search, not proxies</li>
              <li>Momentum scored against saturation</li>
              <li>AI briefs that show their work</li>
            </ul>
          </article>
          <article className="feature">
            <h2>Seller pain we solve</h2>
            <p>We know the ugly parts.</p>
            <ul className="feature__list">
              <li>Chasing spikes without stock</li>
              <li>SEO keywords aging out in days</li>
              <li>Ops demanding &quot;why this SKU&quot;</li>
              <li>CMO asking for proof of trend</li>
            </ul>
          </article>
          <article className="feature">
            <h2>Our non-negotiables</h2>
            <p>
              No black-box signals. No 30-day-old &quot;insights.&quot; No charts that don&apos;t tell you what to launch or drop. If it
              doesn&apos;t move GMV or launch velocity, we rip it out.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="shell section__head">
          <h2>Built by people who shipped SKUs, not just dashboards</h2>
          <p>
            We have sat in the 10 p.m. &quot;are we buying this or not&quot; call. We have overbought on a trend that was already decaying.
            That is why LexyHub exposes signal age, source, and confidence.
          </p>
        </div>
        <div className="shell grid grid--workflow">
          <article className="stage">
            <h3>1. Marketplace truth</h3>
            <p>We ingest real marketplace and cultural signals at the speed needed to catch surges.</p>
          </article>
          <article className="stage">
            <h3>2. Seller context</h3>
            <p>We score for saturation, seasonality, and inventory risk. That&apos;s seller brain, not generic BI.</p>
          </article>
          <article className="stage">
            <h3>3. Team routing</h3>
            <p>Growth, merch, ops see the same story. No more &quot;where did this number come from.&quot;</p>
          </article>
          <article className="stage">
            <h3>4. Feedback in</h3>
            <p>Performance goes back to the model so next week&apos;s signals are sharper.</p>
          </article>
        </div>
      </section>

      <section className="section" id="team">
        <div className="shell section__head">
          <h2>The crew</h2>
          <p>Operators first. Analysts always. Engineers who hate lag.</p>
        </div>
        <div className="shell grid grid--features">
          <article className="feature">
            <h3>Naya Chen — CEO</h3>
            <p>
              Scaled marketplace revenue. Lived the pain of reconciling Amazon keyword jumps with Etsy buyers and D2C ops.
              Started LexyHub to kill that swivel-chair work.
            </p>
          </article>
          <article className="feature">
            <h3>Gabriel Ortiz — CTO</h3>
            <p>
              Data infra, ML, and pipeline hardening. Owns the ingestion and scoring spine so signals stay fresh and provable.
            </p>
          </article>
          <article className="feature">
            <h3>Samira Patel — Intelligence</h3>
            <p>
              Tracks cultural shifts against actual SKUs. If TikTok says it&apos;s hot but Amazon says it&apos;s flat, she shows you the
              gap.
            </p>
          </article>
          <article className="feature">
            <h3>Seller council</h3>
            <p>
              Active marketplace sellers who test features in real catalogs. If they cannot use it during peak, we don&apos;t ship it.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
