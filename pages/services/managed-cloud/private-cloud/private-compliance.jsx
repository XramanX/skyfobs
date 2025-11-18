import React from "react";
import Head from "next/head";

import HeroSection from "../../../../components/service-detail/HeroSection";
import IconFeatureGrid from "../../../../components/service-detail/IconFeatureGrid";
import ContentSection from "../../../../components/service-detail/ContentSection";
import Progress from "../../../../components/ui/Progress";

import {
  FaFileAlt,
  FaHospital,
  FaCreditCard,
  FaLock,
  FaGavel,
  FaClipboardList,
  FaCalendarCheck,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";
import { GiEuropeanFlag } from "react-icons/gi";

export default function ComplianceAndAudit() {
  const kpis = [
    { label: "Compliance Score", value: 98, icon: <FaClipboardList /> },
    { label: "Controls Implemented", value: 100, icon: <FaCalendarCheck /> },
  ];

  return (
    <>
      <Head>
        <title>Compliance & Audit — Skyfobs</title>
        <meta
          name="description"
          content="Continuous compliance and audit readiness for private cloud platforms — automated evidence collection, policy-as-code, and regulatory controls (ISO, HIPAA, PCI, SOC2, GDPR)."
        />
      </Head>

      <HeroSection
        title="Compliance & Audit"
        intro="Automate compliance, collect auditable evidence, and maintain continuous readiness across standards like ISO 27001, HIPAA, PCI DSS, SOC 2 and GDPR."
      />
      <div className="container progress-container">
        {kpis.map((k) => (
          <Progress label={k.label} value={k.value} icon={k.icon} size="md" />
        ))}
      </div>

      <IconFeatureGrid
        items={[
          { icon: <FaShieldAlt />, title: "24/7", text: "Monitoring" },
          { icon: <FaTools />, title: "0", text: "Open Findings" },
        ]}
      />

      <ContentSection
        sections={[
          {
            heading: "Compliance & Audit",
            paragraphs: [
              "Compliance management ensures private cloud infrastructure meets regulatory requirements and industry standards. Through automated compliance monitoring, comprehensive audit trails, and structured governance, organizations demonstrate adherence to HIPAA, PCI DSS, SOC 2, ISO 27001, and other frameworks while maintaining operational efficiency.",
            ],
          },

          {
            heading: "Regulatory Compliance — HIPAA",
            paragraphs: [
              "HIPAA requires stringent protection of protected health information in healthcare environments. Controls include strong access control, encryption for data at rest and in transit, complete audit logging of PHI access, business associate agreements, and procedures for breach notification and risk assessments.",
            ],
          },

          {
            heading: "PCI DSS for Payment Data",
            paragraphs: [
              "PCI DSS mandates protections around cardholder data: network segmentation for payment flows, strong access controls, encryption in transit and at rest, vulnerability scanning, and quarterly reporting. Maintaining segmented payment environments and evidence of controls is essential for audit readiness.",
            ],
          },

          {
            heading: "GDPR & Data Privacy",
            paragraphs: [
              "GDPR enforces data subject rights and lawful processing for EU residents. Implementations include data minimization, privacy-by-design, documented lawful bases, processes for handling subject requests, robust breach reporting timelines and contractual safeguards for cross-border transfers.",
            ],
          },

          {
            heading: "SOC 2 Trust Services Criteria",
            paragraphs: [
              "SOC 2 assesses security, availability, processing integrity, confidentiality and privacy. Preparing for SOC 2 means implementing documented controls, monitoring their effectiveness, and providing evidence of operational processes and audit trails for the selected trust categories.",
            ],
          },

          {
            heading: "Audit & Evidence Management",
            paragraphs: [
              "Comprehensive audit logging and centralized log aggregation are the backbone of evidence collection. Authentication logs, configuration change histories, data access records and administrative actions should be retained, tamper-evident and readily queryable for auditors.",
            ],
          },

          {
            heading: "Automated Evidence Collection",
            paragraphs: [
              "Automation removes manual overhead and improves accuracy: configuration snapshots, continuous compliance scans, policy-as-code reports and organized evidence repositories provide point-in-time artifacts that streamline audits and reduce preparation time.",
            ],
          },

          {
            heading: "Audit Trail Integrity",
            paragraphs: [
              "Protect audit trails using write-once storage, cryptographic hashing and time-stamping to prove events haven't been altered. Forward logs off-platform quickly to reduce tampering risk and implement strict access controls to prevent unauthorized modifications.",
            ],
          },

          {
            heading: "Audit Readiness & Preparation",
            paragraphs: [
              "Mock audits, evidence libraries and control mapping accelerate formal assessments. Maintain current policy documents, runbooks and remediation records. Prepare for auditor requests by organizing artifacts aligned to framework controls and keep remediation status tracked for previous findings.",
            ],
          },

          {
            heading: "Governance, Policy & Risk Management",
            paragraphs: [
              "Documented policies, risk registers and formal governance structures demonstrate due care. Implement policy reviews, risk scoring and remediation tracking. Vendor assessments and third-party risk management ensure supply chain compliance and reduce external exposure.",
            ],
          },

          {
            heading: "Compliance Automation & Continuous Monitoring",
            paragraphs: [
              "Shift from point-in-time audits to continuous compliance with automated scanning, compliance-as-code and remediation workflows. Dashboards surface compliance posture in real time and alert on drift to ensure teams can remediate before auditors arrive.",
            ],
          },

          {
            heading: "Data Residency & Sovereignty",
            paragraphs: [
              "Private clouds offer geographic control for data residency requirements. Architect to keep regulated data in approved jurisdictions, apply transfer safeguards, and maintain controls that satisfy regional privacy laws and sovereignty requirements.",
            ],
          },

          {
            heading: "Reporting & Metrics",
            paragraphs: [
              "Maintain compliance scorecards, control completion metrics, evidence freshness indicators and trend reports. Metrics drive prioritized remediation and provide leadership with concise views of compliance posture over time.",
            ],
          },

          {
            heading: "Continuous Improvement",
            paragraphs: [
              "Compliance is ongoing — automate controls, review policies regularly, run drills and measure posture. Track mean time to remediation for findings, reduce open findings, and continuously improve your control environment to stay audit-ready.",
            ],
          },
        ]}
      />
    </>
  );
}
