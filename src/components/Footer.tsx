import React from 'react';
import Link from 'next/link';
import { TangentMark } from './TangentMark';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.col}>
          <div className={styles.logo}>
            <TangentMark size={22} stroke={11} />
            Tangent
          </div>
          <p className={styles.desc}>Talk it out. Tangent turns your voice notes into transcripts, summaries, and action items.</p>
        </div>
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Help</h4>
          <Link href="/support" className={styles.link}>Support</Link>
          <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
          <Link href="/terms" className={styles.link}>Terms of Service</Link>
        </div>
      </div>
      <div className={`container ${styles.copyright}`}>
        &copy; {new Date().getFullYear()} Tangent. All rights reserved.
      </div>
    </footer>
  );
}
