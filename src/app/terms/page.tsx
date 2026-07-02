import React from 'react';
import styles from '../privacy/legal.module.css';

export default function TermsOfService() {
  return (
    <div className={`container ${styles.legalPage}`}>
      <h1 className={styles.title}>Terms of Service</h1>
      <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString()}</p>
      
      <div className={styles.content}>
        <h2>1. Agreement to Terms</h2>
        <p>By accessing or using our application, Tangent, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application.</p>
        
        <h2>2. Use License</h2>
        <p>Permission is granted to temporarily download one copy of the materials on Tangent's application for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul>
          <li>Modify or copy the materials.</li>
          <li>Use the materials for any commercial purpose, or for any public display.</li>
          <li>Attempt to decompile or reverse engineer any software contained on Tangent's application.</li>
        </ul>

        <h2>3. Disclaimer</h2>
        <p>The materials on Tangent's application are provided on an 'as is' basis. Tangent makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        
        <h2>4. Contact Us</h2>
        <p>If you have questions or comments about these Terms of Service, please contact us at: support@tangentapp.in</p>
      </div>
    </div>
  );
}
