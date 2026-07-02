import React from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
          Tangent
        </Link>
        <div className={styles.links}>
          <Link href="/privacy" className={styles.link}>Privacy</Link>
          <Link href="/terms" className={styles.link}>Terms</Link>
          <a href="https://app.tangentapp.in" className="button button-primary">Open App</a>
        </div>
      </div>
    </nav>
  );
}
