import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container">
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Coming Soon</h1>
          <p className={styles.subtitle}>
            We're working hard to bring you the best workspace for your notes and tasks. Stay tuned!
          </p>
        </div>
      </section>
    </div>
  );
}
