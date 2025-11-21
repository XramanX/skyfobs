import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import Button from "../../components/ui/Button";
import styles from "../../styles/components/partners.module.scss";

export default function AdvancedDetails() {
  const benefits = [
    "API credits & sandbox for development and demos",
    "Priority support with faster SLAs",
    "Joint case studies and co-marketing assets",
    "Quarterly technical review and architecture guidance",
    "Access to partner-only enablement workshops",
  ];

  const idealFor = [
    "Technical partners building integrations",
    "Growing consultancies scaling delivery",
    "Companies with existing client engagements",
    "Teams wanting dedicated technical enablement",
  ];

  return (
    <>
      <Head>
        <title>Advanced Partner - Skyfobs</title>
        <meta
          name="description"
          content="Advanced tier - technical enablement, API credits, priority support and joint go-to-market."
        />
      </Head>

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroInner}>
              <div className={styles.heroText}>
                <div className={styles.kicker}>
                  <span>Advanced</span>
                </div>

                <h1 className={styles.title}>Advanced Partner Tier</h1>

                <p className={styles.lead}>
                  Technical enablement and joint go-to-market support for
                  partners ready to scale integrations and commercial motion.
                </p>

                <div className={styles.ctaRow}>
                  <Link href="/contact">
                    <Button>Apply to Advanced</Button>
                  </Link>
                  <Link href="/partner-program">
                    <Button variant="ghost">Back to tiers</Button>
                  </Link>
                </div>
              </div>

              <div className={styles.heroVisual} aria-hidden>
                <Image
                  src="/advanced-partner.svg"
                  alt=""
                  width={420}
                  height={280}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                  priority={false}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.tiers}>
          <div className="container">
            <div className={styles.tierGrid}>
              <div className={styles.tierCard}>
                <div className={styles.tierTop}>
                  <h3 className={styles.tierName}>Advanced</h3>
                  <div className={styles.tierPrice}>$2,999 / Month</div>
                </div>

                <p className={styles.tierLead}>
                  Technical enablement & joint go-to-market
                </p>
                <p className={styles.tierShort}>
                  Access API credits, sandbox, priority support and joint GTM.
                </p>

                <ul className={styles.tierBenefits}>
                  {benefits.map((b, i) => (
                    <li key={i}>
                      <FaCheck className={styles.benefitIcon} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.tierCtas}>
                  <Link href="/contact">
                    <Button>Apply now</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="ghost">Request demo</Button>
                  </Link>
                </div>
              </div>

              <div className={styles.resourceCard}>
                <h4>Ideal for</h4>
                <ul className={styles.idealList}>
                  {idealFor.map((item) => (
                    <li key={item}>
                      <FaCheck className={styles.benefitIcon} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.resources}>
          <div className="container">
            <h2 className={styles.sectionTitle}>What you get</h2>
            <p className={styles.sectionLead}>
              Dedicated technical credits, faster support and close
              collaboration to build and scale partner-led solutions.
            </p>

            <div className={styles.resourcesCards}>
              <div className={styles.resourceCard}>
                <h4>API & Sandbox</h4>
                <p>
                  Pre-funded credits and isolated sandbox environments for POCs
                  and productisation.
                </p>
              </div>
              <div className={styles.resourceCard}>
                <h4>Priority Support</h4>
                <p>Named support queue and faster SLAs to unblock delivery.</p>
              </div>
              <div className={styles.resourceCard}>
                <h4>GTM & Case Studies</h4>
                <p>
                  Playbooks, joint case studies and campaigns to accelerate
                  sales.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaStrip}>
          <div className="container">
            <div className={styles.ctaInner}>
              <div>
                <h3>Ready to scale?</h3>
                <p>
                  Apply or request a demo and our partner team will reach out.
                </p>
              </div>

              <div>
                <Link href="/contact">
                  <Button>Contact partner team</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
