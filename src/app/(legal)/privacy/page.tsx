import React from 'react';
import type { Metadata } from 'next';
import styles from './legal.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy — Tangent',
  description: 'How Tangent collects, uses, and protects your information.',
};

export default function PrivacyPolicy() {
  return (
    <div className={`container ${styles.legalPage}`}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.lastUpdated}>Last updated: August 3, 2025</p>

      <p className={styles.lead}>
        Tangent turns your voice notes into transcripts, summaries, and action
        items. This policy explains what we collect, why, and the choices you
        have. We do not sell your data and we do not show ads.
      </p>

      <div className={styles.content}>
        <h2>1. Information we collect</h2>
        <ul>
          <li><strong>Account information.</strong> When you sign up we collect your email address and basic profile details through our authentication provider so we can create and secure your account.</li>
          <li><strong>Your recordings and notes.</strong> Audio you record, along with the transcripts, summaries, and tasks generated from it, and any text you add.</li>
          <li><strong>Subscription information.</strong> If you purchase Tangent Pro, purchases are processed by Apple. We receive your subscription status but never your full payment card details.</li>
          <li><strong>Device and usage data.</strong> Basic technical information such as app version, device type, and a push token if you enable notifications, used to operate and improve the app.</li>
        </ul>

        <h2>2. How we use your information</h2>
        <ul>
          <li>Provide the core service — transcribing your audio and generating summaries, action items, and answers to your questions.</li>
          <li>Manage your account and your Tangent Pro subscription.</li>
          <li>Send notifications you have asked for, such as when a note has finished processing.</li>
          <li>Maintain security, prevent abuse, and improve the app&apos;s reliability and features.</li>
        </ul>

        <h2>3. AI processing</h2>
        <p>To generate transcripts, summaries, action items, and chat answers, your audio and text are processed by trusted third‑party AI and speech‑to‑text providers acting on our behalf. This content is used to deliver these features to you and is not used to show you advertising.</p>

        <h2>4. How we share information</h2>
        <p>We share information only with service providers who help us run Tangent — including our authentication provider, cloud hosting and storage, AI/transcription providers, and Apple for payments. These providers are bound to use your information only to provide their services to us. We do not sell your personal information.</p>

        <h2>5. Data retention and deletion</h2>
        <ul>
          <li>Your notes and recordings are kept until you delete them or close your account.</li>
          <li>You can enable <strong>Auto‑Delete Audio</strong> in the app to remove the local copy of a recording once it has been uploaded.</li>
          <li>You can delete individual notes at any time, and you can request deletion of your account and associated data by emailing us.</li>
        </ul>

        <h2>6. Security</h2>
        <p>We use industry‑standard measures to protect your information in transit and at rest. No method of transmission or storage is completely secure, but we work to protect your data and limit access to it.</p>

        <h2>7. Children&apos;s privacy</h2>
        <p>Tangent is not directed to children under 13, and we do not knowingly collect personal information from them. If you believe a child has provided us information, please contact us and we will delete it.</p>

        <h2>8. Your rights</h2>
        <p>Depending on where you live, you may have the right to access, correct, export, or delete your personal information. To exercise these rights, contact us using the details below.</p>

        <h2>9. Changes to this policy</h2>
        <p>We may update this policy from time to time. When we make material changes, we will update the date above and, where appropriate, notify you in the app.</p>

        <h2>10. Contact us</h2>
        <p>Questions about this Privacy Policy? Email us at <a href="mailto:support@tangentapp.in">support@tangentapp.in</a>.</p>
      </div>
    </div>
  );
}
