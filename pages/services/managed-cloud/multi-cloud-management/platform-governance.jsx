// pages/services/platform-governance/index.jsx
import React from "react";
import Head from "next/head";

import HeroSection from "@/components/service-detail/HeroSection";
import IconFeatureGrid from "@/components/service-detail/IconFeatureGrid";
import ContentSection from "@/components/service-detail/ContentSection";

import {
  FaGavel,
  FaUserShield,
  FaCheckCircle,
  FaClipboardList,
  FaAws,
  FaMicrosoft,
  FaGoogle,
  FaCode,
  FaNetworkWired,
  FaLock,
  FaSearch,
  FaDatabase,
} from "react-icons/fa";

export default function PlatformGovernance() {
  return (
    <>
      <Head>
        <title>Platform Governance — Skyfobs</title>
        <meta
          name="description"
          content="Platform governance: policy-as-code, unified access control, automated compliance and audit across multi-cloud environments (AWS, Azure, GCP)."
        />
      </Head>

      <HeroSection
        title="Platform Governance"
        intro="Policy-driven governance, unified access control, and continuous compliance across multi-cloud environments — enforce guardrails without slowing delivery."
      />

      <IconFeatureGrid
        items={[
          {
            icon: <FaGavel />,
            title: "Policy Management",
            text: "Policy-as-code, automated enforcement and centralized policy lifecycle.",
          },
          {
            icon: <FaUserShield />,
            title: "Access Control",
            text: "Unified identity, RBAC and least-privilege across clouds and services.",
          },
          {
            icon: <FaCheckCircle />,
            title: "Compliance",
            text: "Continuous checks, evidence collection and mapped regulatory controls.",
          },
          {
            icon: <FaClipboardList />,
            title: "Audit & Reporting",
            text: "Tamper-evident logs, centralized reporting and audit-ready evidence.",
          },
        ]}
      />

      <IconFeatureGrid
        items={[
          {
            icon: <FaAws />,
            title: "AWS",
            text: "Native controls, SCPs, Config & GuardDuty integrations.",
          },
          {
            icon: <FaMicrosoft />,
            title: "Azure",
            text: "Policy, Blueprints, and role-based access across subscriptions.",
          },
          {
            icon: <FaGoogle />,
            title: "GCP",
            text: "Org policies, VPC Service Controls and IAM.",
          },
        ]}
      />

      <ContentSection
        sections={[
          {
            heading: "Platform Governance — Overview",
            paragraphs: [
              "Platform governance establishes policies, controls and processes to ensure secure, compliant, and consistent multi-cloud operations. It centralizes guardrails while enabling teams to move fast under well-defined rules.",
            ],
          },

          {
            heading: "Policy as Code",
            paragraphs: [
              "Codify organizational policies so they can be automatically evaluated and enforced. Use declarative policy engines (OPA, Sentinel, cloud-native policy services) and store policies in version control so changes are auditable and reversible.",
              "Integrate policy checks into CI/CD and pre-deployment validation to block non-compliant changes early in the lifecycle.",
            ],
          },

          {
            heading: "Multi-Cloud Policy Orchestration",
            paragraphs: [
              "Apply a single governance model across AWS, Azure, GCP and private clouds using an orchestration layer that maps high-level organizational policy into provider-specific controls.",
              "Implement exception workflows and hierarchical policies that allow safe, auditable deviations where necessary.",
            ],
          },

          {
            heading: "Preventive and Detective Controls",
            paragraphs: [
              "Balance preventive enforcement (CI gates, org-level service controls) with detective monitoring (post-provision CSPM scans, drift detection). Preventive controls reduce remediation load; detective controls catch missed or drifted resources.",
            ],
          },

          {
            heading: "Access Control & Identity",
            paragraphs: [
              "Consolidate identities through federation and SSO. Implement RBAC with standardized roles, and prefer short-lived credentials and just-in-time elevation for privileged tasks.",
              "Regularly review and certify permissions to maintain least-privilege and reduce blast radius from compromised accounts.",
            ],
          },

          {
            heading: "Cross-Cloud Access Patterns",
            paragraphs: [
              "Use workload identity federation and secure service accounts for cross-cloud interactions. Avoid credential duplication by relying on token exchange, IAM federation, or short-lived credentials.",
            ],
          },

          {
            heading: "Compliance & Risk Management",
            paragraphs: [
              "Map regulatory requirements (GDPR, HIPAA, PCI DSS, SOC 2, FedRAMP) to concrete cloud controls. Automate evidence collection and maintain artifacts for auditors. Use a risk-based approach to prioritize remediation.",
            ],
          },

          {
            heading: "Security Posture & Remediation",
            paragraphs: [
              "Adopt CSPM tooling to continuously detect misconfigurations and provide remediation playbooks. Integrate posture findings into ticketing and automated remediation pipelines where safe to do so.",
            ],
          },

          {
            heading: "Audit Trails & Evidence Management",
            paragraphs: [
              "Centralize logs, enforce write-once retention where required, and automate evidence collection for audits. Provide clear mappings from controls to evidence so auditors can validate compliance with minimal manual effort.",
            ],
          },

          {
            heading: "Governance Tools & IaC Integration",
            paragraphs: [
              "Enforce governance at the IaC level using pre-commit hooks, pipeline checks, and private module registries. Block or fail builds that violate policies and publish approved modules that encapsulate organizational best-practices.",
            ],
          },

          {
            heading: "Service Catalogs & Self-Service",
            paragraphs: [
              "Offer a self-service catalog of approved components and patterns so teams can deliver quickly while remaining within organizational guardrails. Catalog items should embed policy, security defaults, and cost controls.",
            ],
          },

          {
            heading: "Policy Libraries & Reusable Controls",
            paragraphs: [
              "Build a policy library (CIS-based defaults, provider best-practices, org-specific rules) so new projects can onboard quickly. Version policies and test them against representative templates before rollout.",
            ],
          },

          {
            heading: "Governance Best Practices",
            paragraphs: [
              "Start with critical, high-impact policies and expand iteratively. Involve business stakeholders so policies align with objectives. Automate enforcement, provide good documentation and make governance an enabler rather than a blocker.",
            ],
          },

          {
            heading: "Maturity & Organizational Change",
            paragraphs: [
              "Track governance maturity and evolve from manual reviews to fully automated policy enforcement. Ensure executive sponsorship, clear ownership, training programs, and feedback loops so governance scales with the organization.",
            ],
          },

          {
            heading: "Future Directions",
            paragraphs: [
              "Expect governance to integrate AI-assisted policy recommendations, shift-left enforcement, attribute-based access controls, and continuous compliance that replaces periodic audits with always-on validation.",
            ],
          },
        ]}
      />
    </>
  );
}
