import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.col}>
          <div className={styles.logo}>Tangent</div>
          <p className={styles.desc}>The all-in-one workspace for your ideas, notes, and tasks.</p>
        </div>
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Legal</h4>
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
