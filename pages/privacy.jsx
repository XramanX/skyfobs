// pages/privacy.jsx
import React from "react";
import Head from "next/head";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import styles from "../styles/components/policy.module.scss";

const CONTACT_EMAIL = "contact@skyfobs.com";

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Skyfobs</title>
        <meta
          name="description"
          content="Skyfobs privacy policy - how we collect, use and protect your information."
        />
      </Head>

      <main className={styles.page}>
        <div className="container">
          <header className={styles.header}>
            <h1>Privacy Policy</h1>
            <p className={styles.lead}>
              This Privacy Policy explains what information Skyfobs collects,
              how we use it, and your rights. Last updated:{" "}
              <strong>November 14, 2024</strong>.
            </p>
          </header>

          <section className={styles.section}>
            <h2>1. Information we collect</h2>
            <p>
              We collect information you provide directly (for example: contact
              forms, newsletter signups) and technical information collected
              automatically (for example: IP address, device and browser
              details, cookies and similar technologies).
            </p>

            <ul>
              <li>
                <strong>Contact data:</strong> name, email, phone when you
                contact us.
              </li>
              <li>
                <strong>Usage data:</strong> pages visited, timestamps, referral
                URLs.
              </li>
              <li>
                <strong>Cookies & tracking:</strong> small files used to
                remember preferences and analytics.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>2. How we use information</h2>
            <p>We use collected data to:</p>
            <ul>
              <li>Provide and operate our services and website.</li>
              <li>Respond to your inquiries and requests.</li>
              <li>
                Improve and personalise the website experience and content.
              </li>
              <li>
                Send transactional communications and (with consent) marketing
                updates.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. Cookies and tracking</h2>
            <p>
              We use cookies and similar technologies for analytics, security,
              and to store user preferences. You can manage cookies via your
              browser settings; disabling some cookies may affect site
              functionality.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Third parties & integrations</h2>
            <p>
              We may share aggregated or anonymised data with service providers
              (analytics, hosting, email delivery). We require trusted vendors
              to handle data securely. Links to third-party sites may appear on
              our site - we are not responsible for their practices.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Data retention & security</h2>
            <p>
              We retain personal data only as long as necessary for the purposes
              described. We maintain reasonable administrative, technical and
              physical safeguards to protect data, but no internet transmission
              is 100% secure.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Your rights</h2>
            <p>
              Depending on your jurisdiction you may have rights to access,
              correct, or delete your personal data, or to object to certain
              processing. To exercise these rights, contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Children's privacy</h2>
            <p>
              Our services are not directed at children under 13. We do not
              knowingly collect personal data from children. If you believe we
              have such data, please contact us.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. When changes are
              significant, we will make that clear on our site and update the
              effective date above.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Contact</h2>
            <p>
              For privacy questions or requests email:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
            <p className={styles.disclaimer}>
              Note: This page is provided for informational purposes and is not
              legal advice. Consider a qualified privacy attorney for regulatory
              compliance (GDPR, CCPA, etc.) if you operate in regulated regions.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
