// components/layout/Footer.jsx
import React, { useCallback } from "react";
import Link from "next/link";
import styles from "../../styles/components/footer.module.scss";
import Image from "next/image";

const CONTACT = {
  email: "contact@skyfobs.com",
  phone: "+971556551387",
  addressLine2: "4201-01, Churchill Executive Tower",
  addressLine1: "Skyfobs Nextgen Cloud Service LLC",
  city: "Business Bay, Dubai",
};

function FooterInner() {
  const onNewsletterSubmit = useCallback((e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements?.email?.value ?? "";

    console.log("Newsletter signup (mock):", email);
    form.reset();
  }, []);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} aria-label="Home">
              <Image
                src="/skyfobs.png"
                alt="Skyfobs logo"
                width={180}
                height={40}
                priority
              />
            </Link>
            <p className={styles.tagline}>
              Trusted cloud engineering, managed platforms and secure
              operations.
            </p>

            <div className={styles.contact}>
              <a
                className={styles.contactLink}
                href={`mailto:${CONTACT.email}`}
              >
                {CONTACT.email}
              </a>

              <a className={styles.contactLink} href={`tel:${CONTACT.phone}`}>
                {CONTACT.phone}
              </a>

              <address className={styles.address}>
                <span>{CONTACT.addressLine1}</span>
                <span>{CONTACT.addressLine2}</span>
                <span>{CONTACT.city}</span>
              </address>
            </div>
          </div>

          <nav className={styles.links} aria-label="Footer">
            <h4 className={styles.colTitle}>Company</h4>
            <ul>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/partner-program">Partner program</Link>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className={styles.links}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul>
              <li>
                <Link href="/services/managed-cloud">Managed Cloud</Link>
              </li>
              <li>
                <Link href="/services/security">Cloud Security</Link>
              </li>
              <li>
                <Link href="/services/ai">AI & GenAI</Link>
              </li>
              <li>
                <Link href="/services/devops">DevOps</Link>
              </li>
            </ul>
          </div>

          <div className={styles.news}>
            <h4 className={styles.colTitle}>Stay updated</h4>

            <form className={styles.form} onSubmit={onNewsletterSubmit}>
              <label htmlFor="footer-news-email" className={styles.srOnly}>
                Email address
              </label>
              <input
                id="footer-news-email"
                name="email"
                type="email"
                placeholder="Your work email"
                required
                className={styles.input}
                aria-label="Enter your email to receive updates"
              />
              <button
                type="submit"
                className={`${styles.button} ${styles.primary}`}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Skyfobs. All rights reserved.
          </p>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(FooterInner);
