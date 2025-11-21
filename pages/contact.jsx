// pages/contact.jsx
import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/components/contact.module.scss";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import { sendContact } from "../lib/api";
import Toast from "../components/ui/Toast";
import toastStyles from "../styles/components/toast.module.scss";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });
  const [toasts, setToasts] = useState([]);

  const addToast = (t) => {
    const id = Date.now() + Math.random();
    setToasts((s) => [...s, { id, ...t }]);
  };
  const removeToast = (id) => setToasts((s) => s.filter((x) => x.id !== id));

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: "" });

    try {
      await sendContact({
        name: form.name.trim(),
        email: form.email.trim(),
        contact: form.contact.trim(),
        message: form.message.trim(),
      });

      setStatus({ loading: false, success: true, error: "" });
      setForm({ name: "", email: "", contact: "", message: "" });

      addToast({
        type: "success",
        title: "Message sent",
        message: "Thanks - we’ll reply within 24 hours.",
      });

      setTimeout(() => setStatus((s) => ({ ...s, success: false })), 2800);
    } catch (err) {
      // console.error(err);
      const message = err?.message || "Failed to send message";
      setStatus({ loading: false, success: false, error: message });
      addToast({ type: "error", title: "Send failed", message });
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - Skyfobs</title>
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
                    <span>contact@skyfobs.com</span>
                  </div>
                  <div className={styles.infoItem}>
                    <FiPhone />
                    <span>+971556551387</span>
                  </div>
                  <div className={styles.infoItem}>
                    <FiMapPin />
                    <span>
                      Skyfobs Nextgen Cloud Service LLC 4201-01, Churchill
                      Executive Tower Business Bay, Dubai
                    </span>
                  </div>
                </div>

                <div className={styles.note}>
                  Available Monday–Friday, 9 AM – 6 PM (GMT+4)
                </div>
              </div>

              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.field}>
                  <label>Your Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    type="text"
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className={styles.field}>
                  <label>Email Address</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    type="email"
                    required
                    placeholder="you@example.com"
                  />
                </div>

                <div className={styles.field}>
                  <label>Contact (optional)</label>
                  <input
                    name="contact"
                    value={form.contact}
                    onChange={onChange}
                    type="tel"
                    placeholder="+91 1234 567 890"
                  />
                </div>

                <div className={styles.field}>
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={5}
                    required
                    placeholder="How can we help?"
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={status.loading}
                >
                  <span>{status.loading ? "Sending..." : "Send Message"}</span>
                  {!status.loading && <FiArrowRight />}
                </button>

                {status.error && (
                  <div className={styles.error} role="alert">
                    {status.error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        <div
          className={toastStyles.toastStack}
          aria-hidden={toasts.length === 0 ? "true" : "false"}
        >
          {toasts.map((t) => (
            <Toast
              key={t.id}
              id={t.id}
              type={t.type}
              title={t.title}
              message={t.message}
              onClose={removeToast}
            />
          ))}
        </div>
      </main>
    </>
  );
}
