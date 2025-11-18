// pages/services/managed-cloud/cloud-migration-and-moderation/disaster-recovery.jsx
import React from "react";
import Head from "next/head";

import HeroSection from "../../../../components/service-detail/HeroSection";
import IconFeatureGrid from "../../../../components/service-detail/IconFeatureGrid";
import ContentSection from "../../../../components/service-detail/ContentSection";
import Progress from "../../../../components/ui/Progress";

import {
  FaClock,
  FaRedoAlt,
  FaFireAlt,
  FaSnowflake,
  FaCloud,
  FaExclamationTriangle,
  FaNetworkWired,
  FaFileInvoice,
  FaUsersCog,
} from "react-icons/fa";

export default function DisasterRecovery() {
  const kpis = [
    { icon: <FaClock />, label: "RTO Readiness", value: 86 },
    { icon: <FaRedoAlt />, label: "RPO Readiness", value: 92 },
  ];

  const siteOptions = [
    {
      icon: <FaFireAlt />,
      title: "Hot Site",
      text: "Fully operational duplicate environment with real-time replication — near-zero RTO/RPO for mission-critical systems.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud DR",
      text: "On-demand cloud resources for flexible, cost-effective disaster recovery and rapid scaling during failover.",
    },
    {
      icon: <FaSnowflake />,
      title: "Warm Site",
      text: "Partially configured environment with data sync; shorter activation time and lower ongoing cost than hot sites.",
    },
    {
      icon: <FaSnowflake style={{ transform: "rotate(180deg)" }} />,
      title: "Cold Site",
      text: "Basic infrastructure requiring full configuration at recovery time — low cost, longer RTO.",
    },
  ];

  const processCards = [
    {
      icon: <FaNetworkWired />,
      title: "Continuous Replication",
      text: "Keep target systems synchronized with minimal lag using block-level or CDC replication.",
    },
    {
      icon: <FaFileInvoice />,
      title: "Validation Testing",
      text: "Automated verification of backups, boot tests and data integrity before cutover.",
    },
    {
      icon: <FaExclamationTriangle />,
      title: "Automated Rollback",
      text: "Instant recovery if validation fails — orchestrated rollback minimizes business impact.",
    },
    {
      icon: <FaUsersCog />,
      title: "Runbooks & Roles",
      text: "Clear runbooks, role definitions and contact trees ensure efficient, repeatable recovery execution.",
    },
  ];

  return (
    <>
      <Head>
        <title>Disaster Recovery — Skyfobs</title>
        <meta
          name="description"
          content="Disaster recovery strategy and planning: RTO/RPO objectives, hot/warm/cold site patterns, cloud DR, runbooks, testing and orchestration for business continuity."
        />
      </Head>

      <HeroSection
        title="Disaster Recovery Strategy & Planning"
        intro="Define RTO/RPO targets, select appropriate recovery patterns (hot/warm/cold/cloud), and automate validation and cutover to protect business continuity."
      />

      <div className="container progress-container">
        {kpis.map((k) => (
          <Progress
            key={k.label}
            label={k.label}
            value={k.value}
            icon={k.icon}
            size="md"
          />
        ))}
      </div>

      <IconFeatureGrid items={siteOptions} />

      <IconFeatureGrid items={processCards} />

      <ContentSection
        sections={[
          {
            heading: "DR Strategy & Planning",
            paragraphs: [
              "A robust DR strategy begins with business impact analysis to identify critical systems and the recovery objectives that matter to the business. Use RTO to define acceptable downtime and RPO to define acceptable data loss — these targets drive architecture and cost decisions.",
            ],
          },

          {
            heading: "Business Impact Analysis & Prioritization",
            paragraphs: [
              "Inventory systems, map dependencies, and score criticality to prioritize recovery sequencing. Revenue-impacting and compliance-critical systems get the highest priority during planning and testing.",
            ],
          },

          {
            heading: "RTO & RPO — Tradeoffs and Choices",
            paragraphs: [
              "Lower RTO/RPO (minutes) requires active-active or hot-site architectures with synchronous replication — expensive but necessary for mission-critical systems. Higher RTO/RPO tolerances allow warm, pilot-light or backup-and-restore patterns that reduce cost while accepting longer recovery windows.",
            ],
          },

          {
            heading: "DR Architecture Patterns",
            paragraphs: [
              "Active-active provides near-zero downtime at higher cost. Active-passive (primary/standby) balances cost and recovery speed. Pilot-light keeps core services running and scales compute on demand. Backup-and-restore (cold) is lowest cost but longest to recover.",
            ],
          },

          {
            heading:
              "Automation: Continuous Replication & Cutover Orchestration",
            paragraphs: [
              "Automate replication, pre-cutover validation, DNS updates, and post-cutover checks. Continuous replication reduces lag; pre-flight validation prevents surprises. Orchestrated cutover and automated rollback reduce human error and speed recovery.",
            ],
          },

          {
            heading: "Testing, Validation & Runbooks",
            paragraphs: [
              "Regular test migrations, failover rehearsals and runbook-driven drills validate assumptions and build team muscle memory. Boot tests, data integrity checks, and application smoke tests confirm readiness before live failover.",
            ],
          },

          {
            heading: "Cloud DR & Pilot Light",
            paragraphs: [
              "Cloud DR offers on-demand capacity for lower standing costs and rapid provisioning during cutover. Pilot light keeps minimal core services running (eg. DB), provisioning front-end compute only during failover for cost-effective recovery.",
            ],
          },

          {
            heading: "Multi-Cloud & Hybrid Considerations",
            paragraphs: [
              "Multi-cloud DR improves resilience by avoiding single-provider dependency but adds operational complexity. Hybrid DR pairs on-prem primaries with cloud secondaries for flexible recovery strategies aligned to data sovereignty and cost constraints.",
            ],
          },

          {
            heading: "Runbooks, Roles & Communication",
            paragraphs: [
              "Define incident commander, technical leads and communications roles. Maintain escalation paths, contact lists and clear runbooks that are kept up-to-date. Communication templates reduce cognitive load during high-pressure recoveries.",
            ],
          },

          {
            heading: "Common Pitfalls & Mitigations",
            paragraphs: [
              "Untested plans, outdated documentation, hidden dependencies and insufficient network capacity at DR sites are common failure points. Regular testing, dependency discovery, and capacity validation mitigate these risks.",
            ],
          },

          {
            heading: "DR as a Continuous Program",
            paragraphs: [
              "Treat disaster recovery as an ongoing program: review RTO/RPO targets, test regularly, automate validations, and update plans as architectures evolve. Integrate DR checks into change management and CI/CD to prevent configuration drift from undermining recoverability.",
            ],
          },
        ]}
      />
    </>
  );
}
