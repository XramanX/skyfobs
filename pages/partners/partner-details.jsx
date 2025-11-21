import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import Button from "../../components/ui/Button";
import styles from "../../styles/components/partners.module.scss";

export default function PartnerDetails() {
  const benefits = [
    "Listing on Partner Directory to increase discovery",
    "Sales enablement kit with presentations and collateral",
    "Email support for onboarding and basic questions",
    "Co-marketing playbook and templates for joint campaigns",
  ];

  const idealFor = [
    "New partners exploring the ecosystem",
    "Businesses with referral-based models",
    "Companies seeking low-risk entry into partnership",
    "Organizations testing market fit before deeper commitment",
  ];

  return (
    <>
      <Head>
        <title>Partner - Skyfobs</title>
        <meta
          name="description"
          content="Partner tier - listing, sales kit, email support and co-marketing playbook for referral-based partners."
        />
      </Head>

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroInner}>
              <div className={styles.heroText}>
                <div className={styles.kicker}>
                  <span>Partner</span>
                </div>

                <h1 className={styles.title}>Partner Tier</h1>

                <p className={styles.lead}>
                  Foundational relationship through referrals and basic
                  integrations. Low-commitment entry to start collaborating.
                </p>

                <div className={styles.ctaRow}>
                  <Link href="/contact">
                    <Button>Apply to Partner</Button>
                  </Link>
                  <Link href="/partner-program">
                    <Button variant="ghost">Back to tiers</Button>
                  </Link>
                </div>
              </div>

              <div className={styles.heroVisual} aria-hidden>
                <Image
                  src="/basic-partner.svg"
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
                  <h3 className={styles.tierName}>Partner</h3>
                  <div className={styles.tierPrice}>Free</div>
                </div>

                <p className={styles.tierLead}>Referral & basic integrations</p>
                <p className={styles.tierShort}>
                  Essential tools and enablement to start referring and
                  collaborating.
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
                    <Button variant="ghost">Contact us</Button>
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
              Visibility, sales materials and light-touch support to help you
              refer customers and start collaborative marketing.
            </p>

            <div className={styles.resourcesCards}>
              <div className={styles.resourceCard}>
                <h4>Partner directory</h4>
                <p>Be discoverable by customers searching for partners.</p>
              </div>
              <div className={styles.resourceCard}>
                <h4>Sales kit</h4>
                <p>Presentations, one-pagers and objection-handling notes.</p>
              </div>
              <div className={styles.resourceCard}>
                <h4>Co-marketing</h4>
                <p>Playbook, templates and suggested campaign ideas.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.ctaStrip}>
          <div className="container">
            <div className={styles.ctaInner}>
              <div>
                <h3>Ready to start?</h3>
                <p>
                  Apply now and our partner team will follow up to help you get
                  going.
                </p>
              </div>

              <div>
                <Link href="/contact">
                  <Button>Apply to Partner</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
