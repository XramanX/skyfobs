import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  FaHandshake,
  FaTrophy,
  FaNetworkWired,
  FaRegLightbulb,
  FaCheck,
} from "react-icons/fa";
import Button from "../components/ui/Button";
import styles from "../styles/components/partners.module.scss";
import FAQItem from "@/components/common/FAQItem";
import { FaRegFileAlt, FaServer, FaHeadset } from "react-icons/fa";

const TIERS = [
  {
    id: "partner",
    name: "Partner",
    price: "Free",
    lead: "Referral & basic integrations",
    benefits: [
      "Listing on Partner Directory",
      "Sales Enablement Kit",
      "Email Support",
      "Co-marketing Playbook",
    ],
    short: "Foundational relationship via referral and basic integrations.",
  },
  {
    id: "advanced",
    name: "Advanced",
    price: "$2,999 / Month",
    lead: "Technical enablement & joint go-to-market",
    benefits: [
      "API credits & sandbox",
      "Priority support",
      "Joint case studies",
      "Quarterly technical review",
    ],
    short: "Enhanced support and resources for technical partners.",
    featured: true,
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
    short: "Exclusive, deeply-aligned revenue-sharing partnerships.",
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
    a: "Yes - we provide workshops, sandbox access and co-delivery support depending on tier.",
  },
];
export default function PartnersPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  return (
    <>
      <Head>
        <title>Partner Program - Skyfobs</title>
        <meta
          name="description"
          content="Join Skyfobs Partner Program - referral, delivery and strategic partnership tracks for consultancies, MSPs and ISVs."
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
                  Partner with Skyfobs - grow revenue, speed delivery
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
                  <Link href="/contact">
                    <Button variant="ghost">Talk to partner team</Button>
                  </Link>
                </div>
              </div>

              <div className={styles.heroVisual} aria-hidden>
                <div className={styles.heroCard}>
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
          </div>
        </section>

        <section className={styles.reasons}>
          <div className="container">
            <div className={styles.reasonsGrid}>
              <div className={styles.reason}>
                <div className={styles.iconWrap}>
                  <FaRegLightbulb />
                </div>
                <div>
                  <h3>Accelerate delivery</h3>
                  <p className={styles.small}>
                    Playbooks, IaC and runbooks to shorten delivery and reduce
                    risk.
                  </p>
                </div>
              </div>

              <div className={styles.reason}>
                <div className={styles.iconWrap}>
                  <FaNetworkWired />
                </div>
                <div>
                  <h3>Technical enablement</h3>
                  <p className={styles.small}>
                    Sandbox credits, training and architecture reviews.
                  </p>
                </div>
              </div>

              <div className={styles.reason}>
                <div className={styles.iconWrap}>
                  <FaTrophy />
                </div>
                <div>
                  <h3>Go-to-market</h3>
                  <p className={styles.small}>
                    Co-marketing, joint case studies and revenue incentives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.tiers} id="tiers">
          <div className="container">
            <h2 className={styles.sectionTitle}>Program tiers</h2>
            <p className={styles.sectionLead}>
              Choose the track that fits your goals - start with referral-based
              engagement, add technical enablement, or pursue deep strategic
              collaboration.
            </p>

            <div className={styles.tierGrid}>
              {TIERS.map((t) => (
                <div
                  key={t.id}
                  className={`${styles.tierCard} ${
                    t.featured ? styles.featured : ""
                  }`}
                  id={`${t.id}-card`}
                >
                  {t.featured && (
                    <div className={styles.ribbon}>Most popular</div>
                  )}
                  <div className={styles.tierTop}>
                    <h3 className={styles.tierName}>{t.name}</h3>
                    <div className={styles.priceWrap}>
                      <div className={styles.tierPrice}>{t.price}</div>
                      {/* <div className={styles.priceBadge}>
                        {t.price === "Free" ? "Start" : "Billed annually"}
                      </div> */}
                    </div>
                  </div>

                  <p className={styles.tierLead}>{t.lead}</p>
                  <p className={styles.tierShort}>{t.short}</p>

                  <ul className={styles.tierBenefits}>
                    {t.benefits.map((b, i) => (
                      <li key={i} className={styles.featureRow}>
                        <span className={styles.featureIcon}>
                          <FaCheck />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.tierCtas}>
                    <Link href="/contact">
                      <Button>Apply now</Button>
                    </Link>

                    <Link href={`/partners/${t.id}-details`}>
                      <Button variant="ghost">Learn more</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.resources}>
          <div className="container">
            <div className={styles.resourcesInner}>
              <div>
                <h2 className={styles.sectionTitle}>Partner resources</h2>
                <p className={styles.sectionLead}>
                  Partners receive sales materials, reference architectures, IaC
                  modules, and technical sandbox access. We also host quarterly
                  enablement sessions and partner-only hackathons.
                </p>

                <ul className={styles.reqList}>
                  <li>Minimum one endorsed case study (Advanced)</li>
                  <li>Signed partner agreement and NDAs</li>
                  <li>Technical contact for onboarding & reviews</li>
                </ul>
              </div>

              <div className={styles.resourcesCards}>
                <article className={styles.resourceCard}>
                  <div className={styles.resourceIcon}>
                    <FaRegFileAlt />
                  </div>
                  <div>
                    <h4>Co-marketing</h4>
                    <p>Templates, joint webinars and campaign support.</p>
                  </div>
                </article>

                <article className={styles.resourceCard}>
                  <div className={styles.resourceIcon}>
                    <FaServer />
                  </div>
                  <div>
                    <h4>Technical sandbox</h4>
                    <p>Preconfigured environments for demos and testing.</p>
                  </div>
                </article>

                <article className={styles.resourceCard}>
                  <div className={styles.resourceIcon}>
                    <FaHeadset />
                  </div>
                  <div>
                    <h4>Priority support</h4>
                    <p>
                      Faster SLA and direct partner manager for Advanced &
                      Strategic tiers.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.faqs}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Frequently asked</h2>

            <div className={styles.faqList}>
              {FAQS.map((f, i) => (
                <FAQItem
                  key={i}
                  q={f.q}
                  a={f.a}
                  open={openFaqIndex === i}
                  onToggle={() =>
                    setOpenFaqIndex((prev) => (prev === i ? null : i))
                  }
                />
              ))}
            </div>
          </div>
        </section>

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
                <Link href="/contact">
                  <Button>Apply now</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
