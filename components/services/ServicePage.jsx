// pages/service-page.jsx  (or wherever ServicePage lives)
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ServiceCard from "../common/ServiceCard";
import styles from "../../styles/components/managedCloud.module.scss";

export default function ServicePage({
  id,
  title,
  eyebrow = "",
  lead = "",
  bullets = [],
  cards = [],
  ctaHref = "/contact",
  ctaLabel = "Contact us",
  imageSrc = null,
  imageAlt = "",
}) {
  return (
    <>
      <Head>
        <title>{title} — Skyfobs</title>
        <meta name="description" content={lead} />
      </Head>

      <main>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroInner}>
              <div className={styles.heroText}>
                {eyebrow && <div className={styles.kicker}>{eyebrow}</div>}
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.lead}>{lead}</p>

                <div className={styles.ctaRow}>
                  <Link href={ctaHref} className="button primary">
                    {ctaLabel}
                  </Link>
                  <Link href="/services" className="button ghost">
                    All services
                  </Link>
                </div>
              </div>

              <div
                className={styles.heroVisual}
                aria-hidden={imageAlt ? "false" : "true"}
              >
                {imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt={imageAlt || title}
                    width={520}
                    height={320}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain",
                    }}
                    priority={false}
                  />
                ) : (
                  <svg
                    width="420"
                    height="220"
                    viewBox="0 0 420 220"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-hidden="true"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="420"
                      height="220"
                      rx="12"
                      fill="#f8fbff"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.tabsSection}>
          <div className="container">
            <div className={styles.panelWrap}>
              <article className={`${styles.panel} ${styles.show}`}>
                <header className={styles.panelHeader}>
                  <p className={styles.eyebrow}>{eyebrow}</p>
                  <h2 className={styles.panelTitle}>{title}</h2>
                  <p className={styles.panelLead}>{lead}</p>

                  {bullets?.length > 0 && (
                    <ul className={styles.bullets}>
                      {bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </header>

                {cards?.length > 0 && (
                  <div className={styles.cards}>
                    {cards.map((c) => (
                      <ServiceCard
                        key={c.id || c.title}
                        title={c.title}
                        text={c.text}
                        href={c.href}
                      />
                    ))}
                  </div>
                )}
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
