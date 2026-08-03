import React from 'react';
import type { Metadata } from 'next';
import styles from '../privacy/legal.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service — Tangent',
  description: 'The terms that govern your use of Tangent.',
};

export default function TermsOfService() {
  return (
    <div className={`container ${styles.legalPage}`}>
      <h1 className={styles.title}>Terms of Service</h1>
      <p className={styles.lastUpdated}>Last updated: August 3, 2025</p>

      <p className={styles.lead}>
        These terms govern your use of Tangent. By creating an account or using
        the app, you agree to them. Please read them carefully.
      </p>

      <div className={styles.content}>
        <h2>1. The service</h2>
        <p>Tangent lets you record voice notes and uses automated tools to generate transcripts, summaries, action items, and answers to questions about your notes. Features may change or improve over time.</p>

        <h2>2. Your account</h2>
        <p>You must provide accurate information when signing up and are responsible for activity under your account. Keep your login credentials secure and let us know promptly if you suspect unauthorized use.</p>

        <h2>3. Your content</h2>
        <p>You own the recordings, transcripts, and notes you create in Tangent. You grant us a limited license to store and process your content solely to provide the service to you — for example, to transcribe audio and generate summaries. You are responsible for ensuring you have the right to record and upload the content you provide.</p>

        <h2>4. Subscriptions and billing</h2>
        <ul>
          <li>Tangent Pro is offered as an auto‑renewing subscription billed through your Apple account.</li>
          <li>Your subscription renews automatically unless you cancel at least 24 hours before the end of the current period.</li>
          <li>You can manage or cancel your subscription any time in your device&apos;s App Store settings.</li>
          <li>Payments and refunds are handled by Apple in accordance with the App Store terms.</li>
        </ul>

        <h2>5. Acceptable use</h2>
        <ul>
          <li>Do not use Tangent to record or upload content you do not have the right to, or that is unlawful.</li>
          <li>Do not attempt to disrupt, reverse engineer, or gain unauthorized access to the service.</li>
          <li>Do not misuse the AI features to generate harmful, illegal, or abusive content.</li>
        </ul>

        <h2>6. AI‑generated content</h2>
        <p>Transcripts, summaries, and answers are generated automatically and may contain errors or omissions. They are provided for your convenience and should not be relied on as professional, legal, medical, or financial advice. Please review important results before acting on them.</p>

        <h2>7. Disclaimers</h2>
        <p>Tangent is provided on an &quot;as is&quot; and &quot;as available&quot; basis, without warranties of any kind, whether express or implied, including fitness for a particular purpose and non‑infringement. We do not warrant that the service will be uninterrupted or error‑free.</p>

        <h2>8. Limitation of liability</h2>
        <p>To the maximum extent permitted by law, Tangent and its team will not be liable for any indirect, incidental, or consequential damages, or for any loss of data or profits, arising from your use of the service.</p>

        <h2>9. Termination</h2>
        <p>You may stop using Tangent and delete your account at any time. We may suspend or terminate access if you violate these terms or use the service in a way that could harm others or us.</p>

        <h2>10. Changes to these terms</h2>
        <p>We may update these terms from time to time. When we make material changes, we will update the date above and, where appropriate, notify you in the app. Continued use after changes take effect means you accept the updated terms.</p>

        <h2>11. Contact us</h2>
        <p>Questions about these Terms? Email us at <a href="mailto:support@tangentapp.in">support@tangentapp.in</a>.</p>
      </div>
    </div>
  );
}
