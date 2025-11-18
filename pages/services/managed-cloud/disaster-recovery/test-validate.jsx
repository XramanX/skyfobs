// pages/services/managed-cloud/disaster-recovery/dr-testing.jsx
import React from "react";
import Head from "next/head";

import HeroSection from "../../../../components/service-detail/HeroSection";
import IconFeatureGrid from "../../../../components/service-detail/IconFeatureGrid";
import ContentSection from "../../../../components/service-detail/ContentSection";
import Progress from "../../../../components/ui/Progress";

import {
  FaClipboardList,
  FaFlask,
  FaChartBar,
  FaSyncAlt,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaCalendarAlt,
} from "react-icons/fa";

/**
 * DR Testing & Validation page
 *
 * - Shows KPI progress bars (Test Success Rate, RTO Achievement, RPO Compliance)
 * - A small stat card for Annual Tests (12)
 * - IconFeatureGrid for the Plan / Execute / Analyze / Improve loop
 * - ContentSection contains the DR testing guidance you provided (organized and trimmed for readability)
 *
 * Adjust import paths if your project uses a different folder structure.
 */

export default function DRTesting() {
  const kpis = [
    { icon: <FaCheckCircle />, label: "Test Success Rate", value: 96 },
    { icon: <FaClock />, label: "RTO Achievement", value: 98 },
    { icon: <FaShieldAlt />, label: "RPO Compliance", value: 100 },
  ];

  const loopCards = [
    {
      icon: <FaClipboardList />,
      title: "Plan",
      text: "Design realistic scenarios, roles, and success criteria.",
    },
    {
      icon: <FaFlask />,
      title: "Execute",
      text: "Run tabletop, parallel, failover and GameDay tests.",
    },
    {
      icon: <FaChartBar />,
      title: "Analyze",
      text: "Capture metrics, gaps and root causes — document results.",
    },
    {
      icon: <FaSyncAlt />,
      title: "Improve",
      text: "Remediate gaps, automate steps and iterate testing cadence.",
    },
  ];

  return (
    <>
      <Head>
        <title>DR Testing & Validation — Skyfobs</title>
        <meta
          name="description"
          content="Disaster recovery testing: tabletop, parallel, failover and GameDay simulations — practical validation, metrics and continuous improvement to ensure readiness."
        />
      </Head>

      <HeroSection
        title="Test & Validate — Disaster Recovery"
        intro="Prove your recovery capabilities with repeatable DR tests: plan realistic scenarios, execute technical & business validations, analyze gaps and continuously improve."
      />

      <div className="container progress-container">
        {kpis.map((k) => (
          <Progress label={k.label} value={k.value} icon={k.icon} size="md" />
        ))}
      </div>

      <div style={{ marginTop: 18 }}>
        <IconFeatureGrid items={loopCards} />
      </div>

      {/* Long-form guidance: organized into ContentSection */}
      <ContentSection
        sections={[
          {
            heading: "Test & Validate — Overview",
            paragraphs: [
              "Regular DR testing validates recovery capabilities, identifies gaps, and builds team confidence. Use a mix of tabletop, parallel, failover and GameDay tests to cover people, processes and technology.",
            ],
          },

          {
            heading: "DR Testing Methodologies",
            paragraphs: [
              "Tabletop Exercises — low-risk walkthroughs that uncover procedural gaps and clarify responsibilities without changing production state.",
              "Parallel Testing — start DR systems side-by-side with production to validate boot, integration and data replication while avoiding traffic switchovers.",
              "Failover Testing — full traffic cutover tests the entire recovery path and failback procedures; highest confidence but requires careful scheduling and stakeholder coordination.",
              "GameDay Simulations — realistic, surprise scenarios or chaos experiments that stress people and systems together to surface operational weaknesses.",
            ],
          },

          {
            heading: "Validation Procedures",
            paragraphs: [
              "Technical Validation — confirm infrastructure provisioning, networking, service startup sequencing, integrations, performance and security posture in the DR environment.",
              "Data Integrity Validation — verify record counts, checksums, point-in-time correctness and representative business transactions to ensure recovered data is usable.",
              "User Acceptance Testing — run critical business workflows and reports to confirm the recovery meets actual user needs beyond technical checks.",
            ],
          },

          {
            heading: "Performance & Scalability",
            paragraphs: [
              "Include load, stress and spike tests in DR validation to ensure DR environments can sustain production traffic patterns. Performance testing prevents surprises when real traffic hits recovery systems.",
            ],
          },

          {
            heading: "Test Planning & Execution",
            paragraphs: [
              "Design realistic scenarios and acceptance criteria. Coordinate schedules, reserve resources, notify stakeholders and define abort criteria. Clear role assignments (coordinator, validators, observers, timekeeper) make tests run smoothly.",
            ],
          },

          {
            heading: "Analysis & Continuous Improvement",
            paragraphs: [
              "Document outcomes, collect metrics (RTO, RPO, success rates), run gap analysis, and track remediation items. Feed improvements back into runbooks and automation to shrink recovery windows over time.",
            ],
          },

          {
            heading: "Automation & Frequency",
            paragraphs: [
              "Automate pre-flight checks, failover validation, and data integrity tests where possible. Automated tests enable higher cadence (e.g., quarterly or monthly) and shift testing from an annual checkbox to continuous assurance.",
            ],
          },

          {
            heading: "Risk Management & Safety",
            paragraphs: [
              "Plan tests to avoid unintended production impact. Define rollback procedures, abort criteria and communication plans. Use parallel tests or isolated replicas when risk of production disruption is unacceptable.",
            ],
          },

          {
            heading: "Metrics & Maturity",
            paragraphs: [
              "Track test success rate, RTO achievement, RPO compliance, test frequency and automation coverage. Use a maturity model — tabletop → parallel → failover → automated continuous testing — to measure progress.",
            ],
          },

          {
            heading: "Regulatory & Compliance Considerations",
            paragraphs: [
              "Many sectors require documented DR testing (financial, healthcare, government). Maintain test evidence, remediation tracking and audit artifacts to demonstrate compliance with standards and contracts.",
            ],
          },

          {
            heading: "Making Tests Valuable",
            paragraphs: [
              "Treat each test as a learning opportunity: prioritize remediation, automate repeatable checks, improve runbooks from lessons learned, and gradually increase scenario complexity to build confidence.",
            ],
          },
        ]}
      />
    </>
  );
}
