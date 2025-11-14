// pages/partners.jsx
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  FaHandshake,
  FaTrophy,
  FaNetworkWired,
  FaRegLightbulb,
  FaChevronDown,
  FaCheck,
} from "react-icons/fa";
import Button from "../components/ui/Button";
import styles from "../styles/components/partners.module.scss";
import Link from "next/link";

const TIERS = [
  {
    id: "partner",
    name: "Partner",
    price: "Free",
    lead: "Referral & basic integrations",
    benefits: [
      "Listing on partner directory",
      "Sales enablement kit",
      "Email support",
      "Co-marketing playbook",
    ],
  },
  {
    id: "advanced",
    name: "Advanced",
    price: "$2,500 / yr",
    lead: "Technical enablement & joint go-to-market",
    benefits: [
      "API credits & sandbox",
      "Priority support",
      "Joint case studies",
      "Quarterly technical review",
    ],
  },
  {
    id: "strategic",
    name: "Strategic",
    price: "Invitation",
    lead: "Dedicated partnership and revenue share",
    benefits: [
      "Dedicated partner manager",
      "Custom integrations & co-engineering",
      "Shared incentives & SLAs",
      "Marketing co-investment",
    ],
  },
];

const FAQS = [
  {
    q: "Who should apply?",
    a: "Consultancies, system integrators, cloud-native product teams, and MSPs with experience in infrastructure, SaaS, or cloud migrations.",
  },
  {
    q: "Is there a revenue requirement?",
    a: "For the Advanced tier we recommend existing client engagements or pipeline. Strategic partnerships are invitation-only and based on demonstrated scale.",
  },
  {
    q: "How long does onboarding take?",
    a: "Typical onboarding is 2–6 weeks depending on integration complexity and training needs.",
  },
  {
    q: "Do you provide technical training?",
    a: "Yes — we provide workshops, sandbox access and co-delivery support depending on tier.",
  },
];

export default function PartnersPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Head>
        <title>Partner Program — Skyfobs</title>
        <meta
          name="description"
          content="Join Skyfobs Partner Program — referral, delivery and strategic partnership tracks for consultancies, MSPs and ISVs."
        />
      </Head>

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroInner}>
              <div className={styles.heroText}>
                <div className={styles.kicker}>
                  <FaHandshake className={styles.kickerIcon} />
                  <span>Partnership</span>
                </div>

                <h1 className={styles.title}>
                  Partner with Skyfobs — grow revenue, speed delivery
                </h1>

                <p className={styles.lead}>
                  Join our partner program to collaborate on cloud migrations,
                  platform engineering and managed services. We provide the
                  tools, go-to-market support and technical enablement so you
                  can deliver value faster and scale with confidence.
                </p>

                <div className={styles.ctaRow}>
                  <Link href="/contact">
                    <Button>Become a partner</Button>
                  </Link>
                </div>
              </div>

              <div className={styles.heroVisual} aria-hidden>
                <Image
                  src="/partner.svg"
                  alt=""
                  width={520}
                  height={340}
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

        <section className={styles.reasons}>
          <div className="container">
            <div className={styles.reasonsGrid}>
              <div className={styles.reason}>
                <div className={styles.iconWrap}>
                  <FaRegLightbulb />
                </div>
                <h3>Accelerate delivery</h3>
                <p>
                  Use our playbooks, IaC modules and runbooks to shorten
                  delivery time and reduce risk in migrations and platform work.
                </p>
              </div>

              <div className={styles.reason}>
                <div className={styles.iconWrap}>
                  <FaNetworkWired />
                </div>
                <h3>Technical enablement</h3>
                <p>
                  Training, sandbox credits and architecture reviews to help
                  your engineers win and deliver projects.
                </p>
              </div>

              <div className={styles.reason}>
                <div className={styles.iconWrap}>
                  <FaTrophy />
                </div>
                <h3>Go-to-market</h3>
                <p>
                  Co-marketing, joint case studies and revenue incentives so
                  partnerships scale commercial value for both sides.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TIERS */}
        <section className={styles.tiers} id="tiers">
          <div className="container">
            <h2 className={styles.sectionTitle}>Program tiers</h2>
            <p className={styles.sectionLead}>
              Pick a track that matches your business model — refer, deliver, or
              co-engineer with us.
            </p>

            <div className={styles.tierGrid}>
              {TIERS.map((t) => (
                <div key={t.id} className={styles.tierCard}>
                  <div className={styles.tierTop}>
                    <h3 className={styles.tierName}>{t.name}</h3>
                    <div className={styles.tierPrice}>{t.price}</div>
                  </div>

                  <p className={styles.tierLead}>{t.lead}</p>

                  <ul className={styles.tierBenefits}>
                    {t.benefits.map((b, i) => (
                      <li key={i}>
                        <FaCheck className={styles.benefitIcon} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.tierCtas}>
                    <Button onClick={() => (window.location.href = "/contact")}>
                      Apply now
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={() =>
                        (window.location.href = `/partners#${t.id}-details`)
                      }
                    >
                      Learn more
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RESOURCES & REQUIREMENTS */}
        <section className={styles.resources}>
          <div className="container">
            <div className={styles.resourcesInner}>
              <div className={styles.resourcesText}>
                <h2>Partner resources</h2>
                <p>
                  Partners receive sales materials, reference architectures, IaC
                  modules, and access to a technical sandbox. We also host
                  quarterly enablement sessions and partner-only hackathons.
                </p>

                <ul className={styles.reqList}>
                  <li>Minimum one endorsed case study (Advanced)</li>
                  <li>Signed partner agreement and NDAs</li>
                  <li>Technical contact for onboarding & reviews</li>
                </ul>
              </div>

              <div className={styles.resourcesCards}>
                <div className={styles.resourceCard}>
                  <h4>Co-marketing</h4>
                  <p>Templates, joint webinars and campaign support.</p>
                </div>
                <div className={styles.resourceCard}>
                  <h4>Technical sandbox</h4>
                  <p>Preconfigured environments for demos and testing.</p>
                </div>
                <div className={styles.resourceCard}>
                  <h4>Priority support</h4>
                  <p>
                    Faster SLA and direct partner manager for Advanced &
                    Strategic tiers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faqs}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Frequently asked</h2>

            <div className={styles.faqList}>
              {FAQS.map((f, i) => (
                <details
                  key={i}
                  className={styles.faqItem}
                  onToggle={(e) => {
                    if (e.target.open) {
                      // close others
                      const others = Array.from(
                        e.target.parentElement.querySelectorAll("details")
                      ).filter((d) => d !== e.target);
                      others.forEach((d) => (d.open = false));
                    }
                  }}
                >
                  <summary>
                    <span>{f.q}</span>
                    <FaChevronDown className={styles.chev} />
                  </summary>

                  <div className={styles.answer}>
                    <p>{f.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaStrip}>
          <div className="container">
            <div className={styles.ctaInner}>
              <div>
                <h3>Ready to partner?</h3>
                <p>
                  Apply and our partner team will review your profile and reach
                  out.
                </p>
              </div>

              <div>
                <Button onClick={() => (window.location.href = "/contact")}>
                  Apply now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
