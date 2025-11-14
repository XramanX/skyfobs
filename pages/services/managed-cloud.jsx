// pages/managed-cloud.jsx
import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from "react";
import Head from "next/head";
import {
  FaCloudUploadAlt,
  FaServer,
  FaNetworkWired,
  FaShieldAlt,
  FaGlobe,
} from "react-icons/fa";
import styles from "../../styles/components/managedCloud.module.scss";
import Link from "next/link";
import TagButton from "../../components/ui/TagButton";
import ServiceCard from "../../components/common/ServiceCard";
import Image from "next/image";
import Button from "@/components/ui/Button";

const TABS = [
  {
    id: "migration",
    label: "Cloud Migration & Modernization",
    icon: <FaCloudUploadAlt />,
  },
  { id: "private", label: "Private Cloud", icon: <FaServer /> },
  { id: "hybrid", label: "Hybrid Cloud", icon: <FaNetworkWired /> },
  { id: "disaster", label: "Disaster Recovery", icon: <FaShieldAlt /> },
  { id: "multicloud", label: "Multi-Cloud Management", icon: <FaGlobe /> },
];

const CONTENT = {
  migration: {
    eyebrow: "Migration & Modernization",
    title: "Move to cloud safely and modernize for scale",
    lead: "We assess, replatform and migrate applications with minimal downtime. Our approach balances risk, cost and business continuity — from lift-and-shift to full refactor and cloud-native transformation.",
    bullets: [
      "Comprehensive migration assessment & runbook",
      "Strangling monoliths into microservices / containers",
      "Cutover planning, validation & post-migration support",
    ],
    cards: [
      {
        id: "assessment",
        title: "Assessment & Strategy",
        text: "Prioritise workloads, estimate costs and build a migration roadmap aligned to business outcomes.",
        href: "/services/migration-assessment",
      },
      {
        id: "pipelines",
        title: "Automated Migration Pipelines",
        text: "Repeatable IaC-driven pipelines for provisioning, migration, validation and rollback.",
        href: "/services/migration-pipelines",
      },
      {
        id: "optimize",
        title: "Post-Migration Optimization",
        text: "Right-sizing, tagging, and FinOps practices to reduce cloud costs after migration.",
        href: "/services/migration-optimization",
      },
    ],
  },

  private: {
    eyebrow: "Private Cloud",
    title: "Secure, compliant private clouds for regulated workloads",
    lead: "Design and operate private cloud platforms (on-prem / co-lo / hosted private). We build hardened infrastructure with strict identity, network zoning and policy-as-code for compliance.",
    bullets: [
      "Isolated tenancy and strict RBAC",
      "Audit-ready logging & policy enforcement",
      "Lifecycle management and patching",
    ],
    cards: [
      {
        id: "hardened",
        title: "Hardened Platform",
        text: "Built using best-practice baselines, CIS hardening and immutable infrastructure.",
        href: "/services/private-hardened-platform",
      },
      {
        id: "compliance",
        title: "Compliance & Audit",
        text: "Support for PCI / SOC / ISO controls with evidence collection and reporting.",
        href: "/services/private-compliance",
      },
      {
        id: "ops",
        title: "Managed Operations",
        text: "24/7 platform ops, patching, backups and capacity planning.",
        href: "/services/private-ops",
      },
    ],
  },

  hybrid: {
    eyebrow: "Hybrid Cloud",
    title: "Connect on-prem and public cloud with reliability",
    lead: "Enable flexible workload placement and burst capacity with consistent networking, shared identity and unified observability across environments.",
    bullets: [
      "Secure VPNs, Direct Connect and SD-WAN",
      "Consistent IaC across clouds",
      "Centralized monitoring and policy layers",
    ],
    cards: [
      {
        id: "network",
        title: "Network & Connectivity",
        text: "Low-latency links, secure peering and resilient routes between datacenters and cloud.",
        href: "/services/hybrid-network",
      },
      {
        id: "mesh",
        title: "Unified Service Mesh",
        text: "Cross-environment service connectivity, resilience and observability.",
        href: "/services/hybrid-mesh",
      },
      {
        id: "datafabric",
        title: "Data Fabric",
        text: "Secure replication, tiering and governance across environments.",
        href: "/services/hybrid-datafabric",
      },
    ],
  },

  disaster: {
    eyebrow: "Resilience",
    title: "Disaster recovery that restores business quickly",
    lead: "Design DR plans with RTO/RPO tailored to critical services, automated failover, and rehearsed runbooks so recovery is predictable and testable.",
    bullets: [
      "RPO/RTO modelling and cost trade-offs",
      "Automated failover and failback runbooks",
      "Regular DR rehearsals and compliance reporting",
    ],
    cards: [
      {
        id: "strategy",
        title: "DR Strategy",
        text: "Design warm/cold/hot standby models aligned to business impact.",
        href: "/services/dr-strategy",
      },
      {
        id: "automation",
        title: "Automation & Orchestration",
        text: "Scripts and pipelines to automate failover, DNS, and service re-mapping.",
        href: "/services/dr-automation",
      },
      {
        id: "testing",
        title: "Test & Validate",
        text: "Planned rehearsals with integrity checks and post-mortem reports.",
        href: "/services/dr-testing",
      },
    ],
  },

  multicloud: {
    eyebrow: "Multi-cloud",
    title: "Manage multiple clouds without the chaos",
    lead: "We provide governance, cost controls and unified tooling so multi-cloud becomes a strategic advantage, not an operational headache.",
    bullets: [
      "Centralized policy & configuration",
      "Unified metrics, traces and alerts",
      "Cross-cloud cost visibility & optimizations",
    ],
    cards: [
      {
        id: "governance",
        title: "Platform Governance",
        text: "Single-pane policy enforcement and identity across providers.",
        href: "/services/multicloud-governance",
      },
      {
        id: "observability",
        title: "Observability Mesh",
        text: "Correlation and traces across services in different clouds.",
        href: "/services/multicloud-observability",
      },
      {
        id: "finops",
        title: "Cost & Tagging Controls",
        text: "Automated tagging, budgets, and anomaly detection to prevent bill surprises.",
        href: "/services/multicloud-finops",
      },
    ],
  },
};

function useKeyboardTabs(setIndex, listRef) {
  useEffect(() => {
    function onKey(e) {
      if (!listRef.current) return;
      const focusable = Array.from(
        listRef.current.querySelectorAll('[role="tab"]')
      );
      if (!focusable.length) return;
      const active = document.activeElement;
      const idx = focusable.indexOf(active);
      if (e.key === "ArrowRight") {
        const next = focusable[(idx + 1) % focusable.length];
        next?.focus();
        setIndex((i) => (i + 1) % focusable.length);
      } else if (e.key === "ArrowLeft") {
        const prev = focusable[(idx - 1 + focusable.length) % focusable.length];
        prev?.focus();
        setIndex((i) => (i - 1 + focusable.length) % focusable.length);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [listRef, setIndex]);
}

export default function ManagedCloudPage() {
  const [active, setActive] = useState("migration");
  const tabListRef = useRef(null);

  useEffect(() => {
    const hash =
      typeof window !== "undefined"
        ? window.location.hash.replace("#", "")
        : "";
    if (hash && CONTENT[hash]) setActive(hash);
  }, []);

  useKeyboardTabs(
    useCallback((fn) => {}, []),
    tabListRef
  );

  const tabIndex = useMemo(
    () => TABS.map((t) => t.id).indexOf(active),
    [active]
  );

  return (
    <>
      <Head>
        <title>Managed Cloud Solutions — Skyfobs</title>
      </Head>

      <main>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroInner}>
              <div className={styles.heroText}>
                <div className={styles.kicker}>Managed Cloud</div>
                <h1 className={styles.title}>
                  End-to-End Cloud Migration from Anywhere to Anywhere
                </h1>
                <p className={styles.lead}>
                  Migrate your infrastructure smoothly from any cloud or data
                  center to any target environment with secure, scalable, and
                  effortless cloud migration services.
                </p>

                <div className={styles.ctaRow}>
                  <Link href="/contact" className="button primary">
                    <Button>Contact us</Button>
                  </Link>
                </div>
              </div>

              <div className={styles.heroVisual} aria-hidden>
                <Image
                  src={"/migration.png"}
                  alt=""
                  width={520}
                  height={520}
                  priority={false}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.tabsSection}>
          <div className="container">
            <div
              className={styles.tabBar}
              role="tablist"
              aria-label="Managed cloud topics"
              ref={tabListRef}
            >
              {TABS.map((t) => {
                const isActive = active === t.id;
                return (
                  <TagButton
                    key={t.id}
                    role="tab"
                    active={isActive}
                    aria-selected={isActive}
                    aria-controls={`panel-${t.id}`}
                    id={`tab-${t.id}`}
                    onClick={() => {
                      setActive(t.id);
                      history.replaceState(null, "", `#${t.id}`);
                    }}
                  >
                    <span
                      className={`${styles.tabIcon} ${
                        isActive ? styles.iconActive : styles.iconInactive
                      }`}
                      aria-hidden
                    >
                      {t.icon}
                    </span>

                    <span className={styles.tabLabel}>{t.label}</span>
                  </TagButton>
                );
              })}
            </div>

            <div className={styles.panelWrap}>
              {TABS.map((t) => {
                const data = CONTENT[t.id];
                const isActive = t.id === active;
                return (
                  <article
                    key={t.id}
                    id={`panel-${t.id}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${t.id}`}
                    hidden={!isActive}
                    className={`${styles.panel} ${isActive ? styles.show : ""}`}
                  >
                    <div className={styles.cards}>
                      {data.cards.map((c) => (
                        <ServiceCard
                          key={c.id}
                          title={c.title}
                          text={c.text}
                          href={c.href}
                          learnMoreBtn={false}
                        />
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
