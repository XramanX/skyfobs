// pages/terms.jsx
import React from "react";
import Head from "next/head";

import styles from "../styles/components/policy.module.scss";

const CONTACT_EMAIL = "contact@skyfobs.com";

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service — Skyfobs</title>
        <meta
          name="description"
          content="Terms of service for Skyfobs — rules and disclaimers for using our website and services."
        />
      </Head>

      <main className={styles.page}>
        <div className="container">
          <header className={styles.header}>
            <h1>Terms of Service</h1>
            <p className={styles.lead}>
              These Terms govern your use of the Skyfobs website and services.
              Last updated: <strong>November 14, 2024</strong>.
            </p>
          </header>

          <section className={styles.section}>
            <h2>1. Acceptance</h2>
            <p>
              By accessing or using our website you agree to these Terms. If you
              do not agree, do not use the site.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Services & content</h2>
            <p>
              Information on the site describes our offerings but does not
              create a commercial agreement. Formal engagement requires a
              written contract.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. User obligations</h2>
            <p>
              You agree to use the site lawfully, not to abuse or attempt to
              compromise the service, and not to upload harmful content.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Intellectual property</h2>
            <p>
              The site content (text, images, code snippets, logos) is owned by
              Skyfobs or licensed—you may not reuse it without permission.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, Skyfobs is not liable for
              indirect, incidental or consequential damages arising from use of
              the site or services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Links & third parties</h2>
            <p>
              We may link to third-party resources. Those are provided for
              convenience; we are not responsible for their content or policies.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Governing law</h2>
            <p>
              These Terms are governed by the law in the jurisdiction where the
              company is established. If you have questions, contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Contact</h2>
            <p>
              If you have questions about these Terms write to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
            <p className={styles.disclaimer}>
              Note: These Terms outline how you can use Skyfobs services and how
              we keep your data and experience secure. They’re intentionally
              written in plain language - no unnecessary legal jargon. For
              company-specific legal requirements, always consult a licensed
              attorney.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
