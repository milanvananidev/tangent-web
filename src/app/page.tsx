import styles from "./landing.module.css";
import { TangentLockup } from "@/components/TangentMark";
import { AppleIcon } from "@/components/AppleIcon";
import { FeatureIcon } from "@/components/Icons";
import { AnimatedWaveform } from "@/components/AnimatedWaveform";

export const APP_STORE_URL = "https://apps.apple.com/in/app/tangent-ai-voice-note/id6796945435";
export const NAV_LINKS = ["Features", "How it works", "Privacy"];

const FEATURE_ROWS = [
  {
    eyebrow: "01 · Capture",
    title: "One tap. Then forget about it.",
    copy: "No setup, no menus. Tap record, talk like a normal person, walk away. We listen and tidy in the background.",
    image: "/screens/recording.svg",
    reverse: false,
  },
  {
    eyebrow: "02 · Tidy",
    title: "Every commitment, captured.",
    copy: "A clean transcript, a short summary, and every \"I'll do that\" pulled into a checklist you can actually finish.",
    image: "/screens/tasks.svg",
    reverse: true,
  },
  {
    eyebrow: "03 · Recall",
    title: "Ask your notes anything.",
    copy: "\"What did I commit to this week?\" Get answers with quotes pulled straight from your own recordings.",
    image: "/screens/chat.svg",
    reverse: false,
  },
];

const EXTRA_FEATURES = [
  { icon: "bell" as const, title: "Smart reminders", desc: "Said you'd do it by 4? We nudge you — with the moment you said it attached." },
  { icon: "sparkle" as const, title: "Daily & weekly review", desc: "A gentle brief of what's open and what you closed. Celebrates wins, never scolds." },
  { icon: "lock" as const, title: "Face ID locked notes", desc: "Therapy, medical, journals — encrypted, hidden from search, opened with your face." },
  { icon: "upload" as const, title: "Bring your own audio", desc: "Drop in an mp3 or m4a — same transcript, summary and checklist." },
  { icon: "widget" as const, title: "Home-screen widgets", desc: "One-tap capture and today's tasks, without opening the app." },
  { icon: "folder" as const, title: "Projects & folders", desc: "Group related notes into projects. Keep work, personal, and side hustles neatly separated." },
];

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function LandingPage() {
  return (
    <div className={styles.page}>
      {/* ── Nav ── */}
      <nav className={`${styles.nav} ${styles.fadeIn}`}>
        <TangentLockup size={20} color="#f4f2ec" />
        <div className={styles.navLinks}>
          {NAV_LINKS.map((x) => (
            <a key={x} href={`#${x.toLowerCase().replace(/ /g, "-")}`} className={styles.navLink}>{x}</a>
          ))}
        </div>
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={styles.navCta}>Get the app</a>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        {/* <div className={styles.heroWaveform} aria-hidden="true">
          <AnimatedWaveform />
        </div> */}
        <div className={styles.heroContent}>
          <div className={`${styles.heroBadge} ${styles.fadeInUp}`} style={{ animationDelay: "0.1s" }}>
            <span className={styles.heroBadgeDot} /> Voice notes for the ADHD brain
          </div>
          <h1 className={`${styles.heroTitle} ${styles.fadeInUp}`} style={{ animationDelay: "0.2s" }}>
            Turn your tangents<br />into action.
          </h1>
          <p className={`${styles.heroSub} ${styles.fadeInUp}`} style={{ animationDelay: "0.35s" }}>
            Talk for 60 seconds. Get a clean checklist. Tangent listens to the ramble
            and hands back the summary and the to-dos &mdash; so the thought doesn&apos;t slip away.
          </p>
          <div className={`${styles.heroCtas} ${styles.fadeInUp}`} style={{ animationDelay: "0.5s" }}>
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
              <AppleIcon /> Download for iPhone
            </a>
          </div>
          <p className={`${styles.heroFine} ${styles.fadeInUp}`} style={{ animationDelay: "0.6s" }}>7-day free trial &middot; no credit card upfront &middot; iPhone &amp; iPad</p>
        </div>

        {/* Phone trio */}
        <div className={`${styles.phoneTrio} ${styles.fadeInUp}`} style={{ animationDelay: "0.7s" }}>
          <div className={styles.phoneSide}>
            <PhoneMock image="/screens/recording.svg" />
          </div>
          <div className={styles.phoneCenter}>
            <PhoneMock image="/screens/tasks.svg" />
          </div>
          <div className={styles.phoneSide}>
            <PhoneMock image="/screens/chat.svg" />
          </div>
        </div>
      </section>

      {/* ── Tagline ── */}
      <section className={styles.tagline} id="features">
        <span className={styles.eyebrowMono}>The whole idea</span>
        <h2 className={styles.taglineTitle}>
          Other apps make you tidy up. <span className={styles.taglineAccent}>Tangent does it for you</span> &mdash; so the messy 3am idea still becomes something you actually do.
        </h2>
      </section>

      {/* ── Feature rows ── */}
      <div id="how-it-works">
        {FEATURE_ROWS.map((row) => (
          <section key={row.eyebrow} className={styles.featureRow}>
            <div className={`${styles.featureRowGrid} ${row.reverse ? styles.featureRowReverse : ""}`}>
              <div className={styles.featureRowText}>
                <span className={styles.eyebrowMono}>{row.eyebrow}</span>
                <h2 className={styles.featureRowTitle}>{row.title}</h2>
                <p className={styles.featureRowCopy}>{row.copy}</p>
              </div>
              <div className={styles.featureRowPhone}>
                <PhoneMock image={row.image} />
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── Extra features grid ── */}
      <section className={styles.extras}>
        <span className={styles.eyebrowMono}>And the rest of it</span>
        <div className={styles.extrasGrid}>
          {EXTRA_FEATURES.map((f) => (
            <div key={f.title} className={styles.extraCard}>
              <div className={styles.extraIcon}>
                <FeatureIcon name={f.icon} />
              </div>
              <div className={styles.extraTitle}>{f.title}</div>
              <div className={styles.extraDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className={styles.finalCta}>
        <h2 className={styles.finalCtaTitle}>Stop taking notes.<br />Start finishing things.</h2>
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
          <AppleIcon /> Try Tangent free for 7 days
        </a>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className={styles.footerSimple}>
          <TangentLockup size={18} color="#f4f2ec" />
          <div className={styles.footerLinks}>
            {FOOTER_LINKS.map((l) => (
              <a key={l.label} href={l.href} className={styles.footerLink}>{l.label}</a>
            ))}
          </div>
          <div className={styles.footerCopy}>
            &copy; {new Date().getFullYear()} Tangent
          </div>
        </div>
      </footer>
    </div>
  );
}

function PhoneMock({ image }: { image: string }) {
  return (
    <div className={styles.phoneMock}>
      <div className={styles.phoneMockInner}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className={styles.phoneMockImg} />
      </div>
    </div>
  );
}
