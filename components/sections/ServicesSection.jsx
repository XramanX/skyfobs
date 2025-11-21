// components/sections/ServicesSection.jsx
import React, { useState, useMemo, useCallback } from "react";
import ServiceCard from "../common/ServiceCard";
import TagButton from "../ui/TagButton";
import styles from "../../styles/components/servicesSection.module.scss";

const ALL_SERVICES = [
  {
    id: "platform",
    title: "Managed Cloud Platforms",
    text: "Managed AWS / Azure / GCP platforms with 24/7 ops, cost optimisation and platform reliability engineering.",
    href: "/services/managed-cloud",
    tags: ["managed"],
  },
  {
    id: "infra",
    title: "Cloud Infrastructure",
    text: "IaC, CI/CD, and platform automation to accelerate delivery and improve developer experience at scale.",
    href: "/services/security",
    tags: ["solutions"],
  },
  {
    id: "infra-cloud",
    title: "DevOps & Performance Engineering",
    text: "DevOps transformation, SRE practices and performance engineering to improve reliability and speed of delivery.",
    href: "/services/devops",
    tags: ["solutions"],
  },
  {
    id: "security",
    title: "Security",
    text: "Cloud security assessments, architecture reviews and managed detection & response to protect your cloud assets.",
    href: "/services/security",
    tags: ["security"],
  },
  {
    id: "ai",
    title: "AI & GenAI on Cloud",
    text: "Build and deploy GenAI solutions with secure data pipelines and cost-efficient model hosting.",
    href: "/services/ai",
    tags: ["ai"],
  },
  {
    id: "performance",
    title: "Performance & Observability",
    text: "Full-stack observability, runbooks and chaos testing to ensure reliability under load.",
    href: "/services/performance-engineering",
    tags: ["managed"],
  },
];

const FILTERS = [
  { id: "all", label: "All services" },
  { id: "solutions", label: "Cloud solutions" },
  { id: "managed", label: "Managed services" },
  { id: "security", label: "Security" },
  { id: "ai", label: "AI & GenAI" },
];

export default function ServicesSection({ services = ALL_SERVICES }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const visible = useMemo(() => {
    if (activeFilter === "all") return services;
    return services.filter((s) => (s.tags || []).includes(activeFilter));
  }, [activeFilter, services]);

  const onFilterClick = useCallback((id) => setActiveFilter(id), []);

  return (
    <section className={styles.section} aria-label="Cloud services">
      <div className="container">
        <div className={`${styles.header}`} data-delay={80}>
          <div className={styles.kicker}>SERVICES</div>
          <h2 className={styles.title}>
            Cloud engineering, operations and managed services
          </h2>
          <p className={styles.lead}>
            We design, run and protect cloud platforms for businesses that need
            reliability, security and rapid innovation. From migration and
            DevOps to AI deployment and managed operations - we help teams run
            production at scale.
          </p>

          <div className={styles.controls}>
            <div
              className={styles.filters}
              role="tablist"
              aria-label="Service filters"
            >
              {FILTERS.map((f, idx) => (
                <TagButton
                  key={f.id}
                  role="tab"
                  active={activeFilter === f.id}
                  aria-selected={activeFilter === f.id}
                  onClick={() => onFilterClick(f.id)}
                  // className="reveal-on-scroll"
                  data-delay={140 + idx * 40}
                >
                  {f.label}
                </TagButton>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.grid} aria-hidden={false}>
          {visible.map((s, i) => (
            <div
              key={s.id}
              // className="reveal-on-scroll"
              data-delay={200 + i * 60}
              tabIndex={-1}
            >
              <ServiceCard title={s.title} text={s.text} href={s.href} />
            </div>
          ))}
        </div>

        <div
          className={styles.mobileSlider}
          role="region"
          aria-label="Services carousel"
        >
          <div
            className={`${styles.sliderTrack}`}
            tabIndex={0}
            data-delay={320}
          >
            {visible.map((s, idx) => (
              <div className={styles.slide} key={s.id}>
                <ServiceCard title={s.title} text={s.text} href={s.href} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
