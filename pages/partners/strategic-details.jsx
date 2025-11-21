import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import Button from "../../components/ui/Button";
import styles from "../../styles/components/partners.module.scss";

export default function StrategicDetails() {
  const benefits = [
    "Dedicated partner manager for strategic alignment",
    "Custom integrations and co-engineering with our team",
    "Shared incentives, revenue-sharing and SLAs",
    "Marketing co-investment including campaigns and events",
  ];

  const idealFor = [
    "Enterprise partners with significant market presence",
    "Organizations seeking deep strategic alignment",
    "Companies ready for co-innovation and joint product development",
    "Partners with substantial revenue potential and commitment",
  ];

  return (
    <>
      <Head>
        <title>Strategic - Skyfobs</title>
        <meta
          name="description"
          content="Strategic tier - invitation-only partnerships with dedicated managers, co-engineering, revenue-share and marketing co-investment."
        />
      </Head>

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroInner}>
              <div className={styles.heroText}>
                <div className={styles.kicker}>
                  <span>Strategic</span>
                </div>

                <h1 className={styles.title}>Strategic Partner Tier</h1>

                <p className={styles.lead}>
                  Invitation-only strategic partnerships with deep
                  collaboration, shared incentives and co-innovation.
                </p>

                <div className={styles.ctaRow}>
                  <Link href="/contact">
                    <Button>Request invitation</Button>
                  </Link>
                  <Link href="/partner-program">
                    <Button variant="ghost">Back to tiers</Button>
                  </Link>
                </div>
              </div>

              <div className={styles.heroVisual} aria-hidden>
                <Image
                  src="/strategic-partner.svg"
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
                  <h3 className={styles.tierName}>Strategic</h3>
                  <div className={styles.tierPrice}>Invitation</div>
                </div>

                <p className={styles.tierLead}>
                  Dedicated partnership and revenue share
                </p>
                <p className={styles.tierShort}>
                  White-glove service, co-engineering and shared commercial
                  models.
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
                    <Button>Request invite</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="ghost">Talk to partner team</Button>
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
            <h2 className={styles.sectionTitle}>Strategic collaboration</h2>
            <p className={styles.sectionLead}>
              Formalized revenue-sharing, co-engineering and marketing
              investment to drive joint product and market outcomes.
            </p>

            <div className={styles.resourcesCards}>
              <div className={styles.resourceCard}>
                <h4>Partner Manager</h4>
                <p>
                  Dedicated single point of contact for planning and execution.
                </p>
              </div>
              <div className={styles.resourceCard}>
                <h4>Co-engineering</h4>
                <p>
                  Workshops, joint sprints and product integrations with our
                  engineering team.
                </p>
              </div>
              <div className={styles.resourceCard}>
                <h4>Marketing Co-investment</h4>
                <p>
                  Shared budget and resources for high-impact campaigns and
                  events.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaStrip}>
          <div className="container">
            <div className={styles.ctaInner}>
              <div>
                <h3>Interested in Strategic?</h3>
                <p>
                  Request an invitation and our partnerships team will evaluate
                  fit and next steps.
                </p>
              </div>

              <div>
                <Link href="/contact">
                  <Button>Request invitation</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
