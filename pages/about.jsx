import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaGlobe, FaRocket, FaHandsHelping, FaClock } from "react-icons/fa";
import styles from "../styles/components/about.module.scss";

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

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About — Skyfobs</title>
        <meta
          name="description"
          content="Skyfobs is a technology partner specialising in software engineering and managed cloud solutions. Learn about our mission, values and team."
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
                  priority={false}
                />
              </div>
            </div>
          </div>
        </header>

        {/* MISSION */}
        <section className={styles.mission}>
          <div className="container">
            <div className={styles.missionGrid}>
              <div className={styles.missionText}>
                <h2>Our mission</h2>
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
                <div className={styles.value}>
                  <div className={styles.icon}>
                    <FaRocket />
                  </div>
                  <div>
                    <h3>Velocity</h3>
                    <p>
                      Small cross-functional teams that deliver end-to-end
                      outcomes.
                    </p>
                  </div>
                </div>

                <div className={styles.value}>
                  <div className={styles.icon}>
                    <FaGlobe />
                  </div>
                  <div>
                    <h3>Reliability</h3>
                    <p>
                      Design for failure, observability-first and proven
                      runbooks.
                    </p>
                  </div>
                </div>

                <div className={styles.value}>
                  <div className={styles.icon}>
                    <FaHandsHelping />
                  </div>
                  <div>
                    <h3>Collaboration</h3>
                    <p>
                      We partner closely with product and operations to solve
                      real problems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE / STATS */}
        <section className={styles.stats}>
          <div className="container">
            <ul className={styles.statsList}>
              <li>
                <strong>20+</strong>
                <span>years combined experience</span>
              </li>
              <li>
                <strong>100+</strong>
                <span>platforms & apps shipped</span>
              </li>
              <li>
                <strong>24/7</strong>
                <span>managed ops & support</span>
              </li>
              <li>
                <strong>99.99%</strong>
                <span>average platform uptime</span>
              </li>
            </ul>
          </div>
        </section>

        {/* TEAM */}
        <section className={styles.teamSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Leadership & Engineers</h2>
            <p className={styles.sectionLead}>
              A small, experienced team focused on engineering excellence and
              long-term partnerships.
            </p>

            <div className={styles.teamGrid}>
              {TEAM.map((m) => (
                <article key={m.name} className={styles.member}>
                  <div className={styles.avatar}>
                    <Image
                      src={m.img}
                      alt={m.name}
                      width={200}
                      height={200}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div className={styles.meta}>
                    <h3>{m.name}</h3>
                    <p className={styles.role}>{m.title}</p>
                    <p className={styles.bio}>{m.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className={styles.timelineSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Our story</h2>

            <ol className={styles.timeline}>
              <li>
                <div className={styles.year}>2018</div>
                <div className={styles.event}>
                  <h4>Founded</h4>
                  <p>
                    Started as a small consulting team solving integration
                    challenges for banks.
                  </p>
                </div>
              </li>

              <li>
                <div className={styles.year}>2020</div>
                <div className={styles.event}>
                  <h4>Cloud-first shift</h4>
                  <p>
                    Built managed cloud offerings and automated platform tooling
                    for customers.
                  </p>
                </div>
              </li>

              <li>
                <div className={styles.year}>2023</div>
                <div className={styles.event}>
                  <h4>Product & services</h4>
                  <p>
                    Launched service packages for migration, observability and
                    security.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* CTA */}
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
