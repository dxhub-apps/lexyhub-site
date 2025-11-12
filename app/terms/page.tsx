import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | LexyHub",
  description: "Terms and conditions for using LexyHub's marketplace signal platform.",
};

export default function Terms() {
  return (
    <div className="legal-content">
      <h1>Terms of Service</h1>
      <p className="updated">Last updated: November 3, 2025</p>

      <p>
        Welcome to LexyHub. These Terms of Service (&quot;Terms&quot;) govern your access to and use of the LexyHub platform,
        website, and services (collectively, the &quot;Services&quot;). By accessing or using our Services, you agree to be bound by
        these Terms.
      </p>

      <h2>1. Acceptance of Terms</h2>

      <p>
        By creating an account, accessing, or using LexyHub, you acknowledge that you have read, understood, and agree to be
        bound by these Terms and our <Link href="/privacy">Privacy Policy</Link>. If you do not agree to these Terms, you may
        not access or use our Services.
      </p>

      <h2>2. Eligibility</h2>

      <p>
        You must be at least 18 years old and have the legal capacity to enter into contracts to use our Services. By using
        our Services, you represent and warrant that you meet these eligibility requirements.
      </p>

      <h2>3. Account Registration and Security</h2>

      <h3>Account Creation</h3>
      <p>
        To access certain features of our Services, you must create an account. You agree to provide accurate, current, and
        complete information during registration and to update such information to keep it accurate, current, and complete.
      </p>

      <h3>Account Security</h3>
      <p>
        You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur
        under your account. You agree to:
      </p>
      <ul>
        <li>Use a strong, unique password for your account</li>
        <li>Not share your account credentials with others</li>
        <li>Notify us immediately of any unauthorized access or security breach</li>
        <li>Accept responsibility for all activities conducted through your account</li>
      </ul>

      <h2>4. Services and Subscription Plans</h2>

      <h3>Service Description</h3>
      <p>
        LexyHub provides marketplace signal intelligence by aggregating and analyzing data from Amazon, Etsy, Google Trends, and
        other sources. Our Services include trend analysis, opportunity scoring, AI-generated insights, and related features.
      </p>

      <h3>Subscription Plans</h3>
      <p>
        We offer multiple subscription tiers (Free, Basic, Pro, and custom Growth plans) with varying features and usage limits.
        Your access to features depends on your selected plan. We reserve the right to modify, suspend, or discontinue any plan
        at any time with reasonable notice.
      </p>

      <h3>Free Trial and Free Plan</h3>
      <p>
        We may offer a free trial or free plan with limited features. We reserve the right to modify or terminate free offerings
        at any time without notice.
      </p>

      <h2>5. Payment Terms</h2>

      <h3>Fees</h3>
      <p>
        Paid subscription plans require payment of fees as described on our pricing page. All fees are in U.S. dollars unless
        otherwise stated. You agree to pay all applicable fees for your selected plan.
      </p>

      <h3>Billing</h3>
      <p>
        Subscription fees are billed in advance on a monthly or annual basis, depending on your selected billing cycle. You
        authorize us to charge your payment method for all fees incurred.
      </p>

      <h3>Automatic Renewal</h3>
      <p>
        Your subscription will automatically renew at the end of each billing period unless you cancel before the renewal date.
        You can cancel your subscription at any time through your account settings.
      </p>

      <h3>Refunds</h3>
      <p>
        We generally do not provide refunds for subscription fees. However, we may provide refunds on a case-by-case basis at
        our sole discretion. Contact us at <a href="mailto:billing@lexyhub.com">billing@lexyhub.com</a> if you believe you are
        entitled to a refund.
      </p>

      <h2>6. Acceptable Use</h2>

      <p>You agree not to use our Services to:</p>
      <ul>
        <li>Violate any applicable laws, regulations, or third-party rights</li>
        <li>Engage in fraudulent, deceptive, or misleading activities</li>
        <li>Interfere with or disrupt the Services or servers/networks connected to the Services</li>
        <li>Attempt to gain unauthorized access to any portion of the Services or other accounts</li>
        <li>Use any automated means (bots, scrapers, etc.) to access the Services without our express permission</li>
        <li>Reverse engineer, decompile, or disassemble any portion of the Services</li>
        <li>Resell, redistribute, or sublicense the Services without our written permission</li>
        <li>Use the Services to develop competing products or services</li>
        <li>Remove, obscure, or alter any proprietary rights notices on the Services</li>
      </ul>

      <h2>7. Data and Marketplace Connections</h2>

      <h3>Marketplace Authorization</h3>
      <p>
        When you connect your marketplace accounts (Amazon, Etsy, etc.) to LexyHub, you grant us permission to access and
        analyze data from those platforms as necessary to provide our Services. You are responsible for ensuring you have the
        right to share this data with us.
      </p>

      <h3>Data Accuracy</h3>
      <p>
        While we strive to provide accurate and timely marketplace signals, we do not guarantee the accuracy, completeness, or
        timeliness of any data or insights provided through our Services. You acknowledge that marketplace data may be delayed,
        incomplete, or contain errors.
      </p>

      <h3>Third-Party Data Sources</h3>
      <p>
        Our Services rely on data from third-party platforms. We are not responsible for changes, interruptions, or
        discontinuation of access to third-party data sources beyond our control.
      </p>

      <h2>8. Intellectual Property</h2>

      <h3>Our Rights</h3>
      <p>
        The Services, including all content, features, functionality, software, designs, text, graphics, logos, and trademarks,
        are owned by LexyHub and are protected by copyright, trademark, and other intellectual property laws. You may not copy,
        modify, distribute, sell, or lease any part of our Services without our express written permission.
      </p>

      <h3>Your Content</h3>
      <p>
        You retain ownership of any data, content, or information you provide to us. By using our Services, you grant us a
        worldwide, non-exclusive, royalty-free license to use, process, and analyze your content solely to provide and improve
        our Services.
      </p>

      <h3>Feedback</h3>
      <p>
        If you provide us with feedback, suggestions, or ideas about our Services, you grant us the right to use such feedback
        without any obligation to you.
      </p>

      <h2>9. Disclaimers and Limitations of Liability</h2>

      <h3>Service Availability</h3>
      <p>
        We strive to maintain high availability of our Services but do not guarantee uninterrupted or error-free operation.
        The Services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied.
      </p>

      <h3>No Investment Advice</h3>
      <p>
        The insights, signals, and recommendations provided through our Services are for informational purposes only and do not
        constitute financial, investment, or business advice. You are solely responsible for your business decisions and should
        conduct your own due diligence.
      </p>

      <h3>Limitation of Liability</h3>
      <p>
        To the maximum extent permitted by law, LexyHub and its affiliates, officers, employees, agents, partners, and licensors
        shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits,
        revenue, data, or business opportunities, arising from your use or inability to use the Services.
      </p>

      <p>
        In no event shall our total liability to you for all claims related to the Services exceed the amount you paid us in the
        12 months preceding the claim.
      </p>

      <h2>10. Indemnification</h2>

      <p>
        You agree to indemnify, defend, and hold harmless LexyHub and its affiliates, officers, employees, agents, partners, and
        licensors from and against any claims, liabilities, damages, losses, costs, or expenses arising from:
      </p>
      <ul>
        <li>Your use of the Services</li>
        <li>Your violation of these Terms</li>
        <li>Your violation of any third-party rights</li>
        <li>Any content you provide through the Services</li>
      </ul>

      <h2>11. Termination</h2>

      <h3>Termination by You</h3>
      <p>
        You may cancel your subscription and terminate your account at any time through your account settings. Upon cancellation,
        you will continue to have access to paid features until the end of your current billing period.
      </p>

      <h3>Termination by Us</h3>
      <p>
        We reserve the right to suspend or terminate your account and access to the Services at any time, with or without cause,
        with or without notice. Reasons for termination may include:
      </p>
      <ul>
        <li>Violation of these Terms</li>
        <li>Fraudulent or illegal activity</li>
        <li>Non-payment of fees</li>
        <li>Extended period of inactivity</li>
        <li>At our discretion for any reason</li>
      </ul>

      <h3>Effect of Termination</h3>
      <p>
        Upon termination, your right to access and use the Services will immediately cease. We may delete your account data in
        accordance with our data retention policies. Termination does not relieve you of any payment obligations incurred before
        termination.
      </p>

      <h2>12. Modifications to Terms</h2>

      <p>
        We reserve the right to modify these Terms at any time. We will notify you of material changes by email or through a
        prominent notice on our website. Your continued use of the Services after such notification constitutes acceptance of
        the modified Terms.
      </p>

      <h2>13. Dispute Resolution</h2>

      <h3>Informal Resolution</h3>
      <p>
        Before filing a claim, you agree to contact us at <a href="mailto:legal@lexyhub.com">legal@lexyhub.com</a> and attempt
        to resolve the dispute informally. We will attempt to resolve the dispute through good-faith negotiations.
      </p>

      <h3>Arbitration</h3>
      <p>
        If we cannot resolve a dispute informally, any claims arising from these Terms or the Services shall be resolved through
        binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall be
        conducted in San Francisco, California.
      </p>

      <h3>Class Action Waiver</h3>
      <p>
        You agree to resolve disputes with us on an individual basis and waive your right to participate in class actions, class
        arbitrations, or representative actions.
      </p>

      <h2>14. Governing Law</h2>

      <p>
        These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard
        to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts located in San
        Francisco, California for any disputes not subject to arbitration.
      </p>

      <h2>15. Miscellaneous</h2>

      <h3>Entire Agreement</h3>
      <p>
        These Terms, together with our Privacy Policy, constitute the entire agreement between you and LexyHub regarding the
        Services and supersede all prior agreements and understandings.
      </p>

      <h3>Severability</h3>
      <p>
        If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full
        force and effect.
      </p>

      <h3>Waiver</h3>
      <p>
        Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
      </p>

      <h3>Assignment</h3>
      <p>
        You may not assign or transfer these Terms or your account without our prior written consent. We may assign or transfer
        these Terms without restriction.
      </p>

      <h3>Force Majeure</h3>
      <p>
        We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control,
        including acts of God, natural disasters, war, terrorism, labor disputes, or government actions.
      </p>

      <h2>16. Contact Information</h2>

      <p>If you have any questions about these Terms, please contact us:</p>
      <ul>
        <li>Email: <a href="mailto:legal@lexyhub.com">legal@lexyhub.com</a></li>
        <li>Support: <a href="mailto:support@lexyhub.com">support@lexyhub.com</a></li>
        <li>Address: 2100 Market Street, Suite 502, San Francisco, CA 94114</li>
        <li>Phone: +1 (415) 555-0123</li>
      </ul>
    </div>
  );
}
