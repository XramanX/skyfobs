// pages/about.jsx
import React, { useMemo } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  FaGlobe,
  FaRocket,
  FaHandsHelping,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";
import styles from "../styles/components/about.module.scss";
import Timeline from "@/components/sections/Timeline";

const TEAM = [
  {
    name: "Alice Johnson",
    title: "Head of Engineering",
    img: "/team/alice.jpg",
    bio: "Builds resilient systems and leads the platform team.",
  },
  {
    name: "Rahul Singh",
    title: "Cloud Architect",
    img: "/team/rahul.jpg",
    bio: "Designs secure, cost-effective cloud platforms for scale.",
  },
  {
    name: "Maria Lopez",
    title: "Product & Design",
    img: "/team/maria.jpg",
    bio: "Shapes product strategy and user experience.",
  },
];

function Stat({ value, label }) {
  return (
    <div className={styles.stat}>
      <div className={styles.statValue}>{value}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

function ValueCard({ icon: Icon, title, children }) {
  return (
    <div className={styles.value}>
      <div className={styles.valueIcon} aria-hidden>
        <Icon />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
}

function TeamMember({ person }) {
  return (
    <article className={styles.member} tabIndex={0}>
      {/* <div className={styles.avatarWrap}>
        <Image
          src={person.img}
          alt={`Photo of ${person.name}`}
          width={110}
          height={110}
          className={styles.avatar}
          priority={false}
        />
      </div> */}

      <div className={styles.meta}>
        <h3>{person.name}</h3>
        <p className={styles.role}>{person.title}</p>
        <p className={styles.bio}>{person.bio}</p>
      </div>
    </article>
  );
}

export default function AboutPage() {
  const team = useMemo(() => TEAM, []);

  return (
    <>
      <Head>
        <title>About — Skyfobs</title>
        <meta
          name="description"
          content="Skyfobs: software engineering and managed cloud solutions. Mission, values and team."
        />
      </Head>

      <main className={styles.page}>
        <header className={styles.hero}>
          <div className="container">
            <div className={styles.heroInner}>
              <div className={styles.heroText}>
                <p className={styles.kicker}>About Skyfobs</p>
                <h1 className={styles.title}>
                  Trusted technology partners for growth
                </h1>
                <p className={styles.lead}>
                  We help companies move faster and operate reliably in the
                  cloud — through pragmatic engineering, secure infrastructure
                  and product-focused delivery.
                </p>

                <div className={styles.heroCtas}>
                  <Link href="/contact" className="button primary">
                    Work with us
                  </Link>
                  <Link href="/services/managed-cloud" className="button ghost">
                    Our services
                  </Link>
                </div>

                <div className={styles.heroMeta}>
                  <div className={styles.heroMetaItem}>
                    <FaEnvelope aria-hidden />
                    <div>
                      <small>Contact</small>
                      <div className={styles.metaValue}>hello@skyfobs.com</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.heroVisual} aria-hidden>
                <Image
                  src="/about-us.svg"
                  alt=""
                  width={520}
                  height={380}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </header>

        <section className={styles.mission} aria-labelledby="mission-title">
          <div className="container">
            <div className={styles.missionGrid}>
              <div className={styles.missionText}>
                <h2 id="mission-title">Our mission</h2>
                <p>
                  To enable businesses to deliver secure, scalable software and
                  cloud platforms that unlock measurable value — faster
                  releases, lower operating cost, and resilient services that
                  customers trust.
                </p>

                <p className={styles.missionNote}>
                  We combine product thinking with engineering discipline:
                  measure, iterate and ship.
                </p>
              </div>

              <div className={styles.values}>
                <ValueCard icon={FaRocket} title="Velocity">
                  Small cross-functional teams that deliver end-to-end outcomes.
                </ValueCard>

                <ValueCard icon={FaGlobe} title="Reliability">
                  Design for failure, observability-first and proven runbooks.
                </ValueCard>

                <ValueCard icon={FaHandsHelping} title="Collaboration">
                  We partner closely with product and operations to solve real
                  problems.
                </ValueCard>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.stats} aria-label="Company stats">
          <div className="container">
            <div className={styles.statsList}>
              <Stat value="20+" label="years combined experience" />
              <Stat value="100+" label="platforms & apps shipped" />
              <Stat value="24/7" label="managed ops & support" />
              <Stat value="99.99%" label="avg platform uptime" />
            </div>
          </div>
        </section>

        <section className={styles.teamSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Leadership & Engineers</h2>
            <p className={styles.sectionLead}>
              A small, experienced team focused on engineering excellence and
              long-term partnerships.
            </p>

            <div className={styles.teamGrid}>
              {team.map((m) => (
                <TeamMember key={m.name} person={m} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.timelineSection} aria-labelledby="story">
          <Timeline />
        </section>

        <section className={styles.footerCta}>
          <div className="container">
            <div className={styles.ctaInner}>
              <div>
                <h3>Ready to modernise your platform?</h3>
                <p>
                  Tell us about your challenges and we'll propose a practical,
                  costed plan.
                </p>
              </div>

              <div className={styles.ctaActions}>
                <Link href="/contact" className="button primary">
                  Get in touch
                </Link>
                <Link href="/services/managed-cloud" className="button ghost">
                  See Managed Cloud
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
