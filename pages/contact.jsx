import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/components/contact.module.scss";
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <>
      <Head>
        <title>Contact Us — Skyfobs</title>
      </Head>

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroInner}>
              <h1>Let’s Build Something Exceptional</h1>
              <p>
                Whether you need cloud migration, platform engineering, or a
                full-stack product partner - we’re here to help.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.contactSection}>
          <div className="container">
            <div className={styles.grid}>
              <div className={styles.infoBox}>
                <h2>Contact Details</h2>
                <p>
                  Reach out anytime. We typically reply within <b>24 hours</b>.
                </p>

                <div className={styles.infoList}>
                  <div className={styles.infoItem}>
                    <FiMail />
                    <span>support@skyfobs.com</span>
                  </div>

                  <div className={styles.infoItem}>
                    <FiPhone />
                    <span>+971556551387</span>
                  </div>

                  <div className={styles.infoItem}>
                    <FiMapPin />
                    <span>Business Bay, Dubai</span>
                  </div>
                </div>

                <div className={styles.note}>
                  Available Monday–Friday, 9 AM – 6 PM (GMT+4)
                </div>
              </div>

              {/* RIGHT FORM */}
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.field}>
                  <label>Your Name</label>
                  <input type="text" required placeholder="John Doe" />
                </div>

                <div className={styles.field}>
                  <label>Email Address</label>
                  <input type="email" required placeholder="you@example.com" />
                </div>

                <div className={styles.field}>
                  <label>Message</label>
                  <textarea rows={5} required placeholder="How can we help?" />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  <span>{sent ? "Message Sent!" : "Send Message"}</span>
                  {!sent && <FiArrowRight />}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
