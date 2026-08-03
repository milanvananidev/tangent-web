import React from 'react';
import Link from 'next/link';
import { TangentMark } from './TangentMark';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo} aria-label="Tangent home">
          <TangentMark size={22} stroke={11} />
          Tangent
        </Link>
        <div className={styles.links}>
          <Link href="/support" className={styles.link}>Support</Link>
          <Link href="/privacy" className={styles.link}>Privacy</Link>
          <Link href="/terms" className={styles.link}>Terms</Link>
          <a href="https://app.tangentapp.in" className="button button-primary">Open App</a>
        </div>
      </div>
    </nav>
  );
}
