import React from 'react';
import type { Metadata } from 'next';
import styles from '../privacy/legal.module.css';

export const metadata: Metadata = {
  title: 'Support — Tangent',
  description: 'Get help with Tangent — recording, transcripts, subscriptions, and your data.',
};

export default function Support() {
  return (
    <div className={`container ${styles.legalPage}`}>
      <h1 className={styles.title}>Support</h1>
      <p className={styles.lastUpdated}>We&apos;re here to help you get the most out of Tangent.</p>

      <p className={styles.lead}>
        Have a question, hit a snag, or want to request a feature? Email us at{' '}
        <a href="mailto:support@tangentapp.in">support@tangentapp.in</a>{' '}
        and we&apos;ll get back to you, usually within 1–2 business days.
      </p>

      <div className={styles.content}>
        <h2>Getting started</h2>
        <ul>
          <li><strong>Record a note.</strong> Tap the record button, talk for as long as you like, then finish. Tangent transcribes your audio and generates a summary and action items.</li>
          <li><strong>Review your note.</strong> Open any note to see its summary, full transcript, and the tasks it found. You can add, edit, check off, or delete action items.</li>
          <li><strong>Ask your notes.</strong> Use Chat to ask questions and get answers pulled directly from your notes, with sources.</li>
        </ul>

        <h2>Common questions</h2>
        <ul>
          <li><strong>My note is still processing.</strong> Transcription and summarizing can take a moment, especially for longer recordings. You can leave the screen — we&apos;ll keep working and update the note when it&apos;s ready.</li>
          <li><strong>Can I keep recordings on my device?</strong> Yes. By default the local copy is removed after it&apos;s safely uploaded. You can turn off <strong>Auto‑Delete Audio</strong> in Settings to keep local copies.</li>
          <li><strong>How do I restore my subscription?</strong> Go to Settings and choose Restore Purchases, or reinstall the app while signed in with the same Apple ID.</li>
          <li><strong>How do I cancel Tangent Pro?</strong> Manage or cancel your subscription anytime in your device&apos;s App Store settings under your Apple account.</li>
        </ul>

        <h2>Your account and data</h2>
        <ul>
          <li><strong>Delete a note.</strong> Open the note, tap the more menu, and choose Delete.</li>
          <li><strong>Delete your account and data.</strong> Email <a href="mailto:support@tangentapp.in">support@tangentapp.in</a> from the address on your account and we&apos;ll remove your account and associated data.</li>
        </ul>

        <h2>Still need help?</h2>
        <p>
          Email <a href="mailto:support@tangentapp.in">support@tangentapp.in</a> with a
          short description of what happened — and, if it helps, the device you&apos;re
          using and a screenshot. See also our{' '}
          <a href="/privacy">Privacy Policy</a> and <a href="/terms">Terms of Service</a>.
        </p>
      </div>
    </div>
  );
}
