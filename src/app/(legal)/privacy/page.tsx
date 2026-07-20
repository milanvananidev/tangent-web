import React from 'react';
import styles from './legal.module.css';

export default function PrivacyPolicy() {
  return (
    <div className={`container ${styles.legalPage}`}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString()}</p>
      
      <div className={styles.content}>
        <h2>1. Introduction</h2>
        <p>Welcome to Tangent. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our application.</p>
        
        <h2>2. Information We Collect</h2>
        <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
        <ul>
          <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number.</li>
          <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Application, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Application.</li>
        </ul>

        <h2>3. Use of Your Information</h2>
        <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:</p>
        <ul>
          <li>Create and manage your account.</li>
          <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
          <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Application to you.</li>
        </ul>
        
        <h2>4. Contact Us</h2>
        <p>If you have questions or comments about this Privacy Policy, please contact us at: support@tangentapp.in</p>
      </div>
    </div>
  );
}
