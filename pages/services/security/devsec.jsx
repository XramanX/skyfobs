import React from "react";
import Head from "next/head";
import HeroSection from "../../../components/service-detail/HeroSection";
import IconFeatureGrid from "../../../components/service-detail/IconFeatureGrid";
import ContentSection from "../../../components/service-detail/ContentSection";
import LinkedSteps from "../../../components/ui/LinkedSteps";

import {
  FaLaptopCode,
  FaLock,
  FaVials,
  FaRocket,
  FaSearch,
  FaNetworkWired,
  FaBoxOpen,
  FaShieldAlt,
} from "react-icons/fa";

export default function DevSecOps() {
  const flowItems = [
    { icon: <FaLaptopCode />, label: "Code" },
    { icon: <FaLock />, label: "Secure" },
    { icon: <FaVials />, label: "Test" },
    { icon: <FaRocket />, label: "Deploy" },
  ];

  return (
    <>
      <Head>
        <title>DevSecOps - Skyfobs</title>
        <meta
          name="description"
          content="Embed security across the software lifecycle - from code to cloud. Automate testing, enforce policy-as-code, and make security a shared responsibility."
        />
      </Head>

      <HeroSection
        title="DevSecOps"
        intro="Embed security across the software lifecycle - from code to cloud. Automate testing, enforce policy-as-code, and make security a shared responsibility."
      />

      <section
        style={{ maxWidth: 980, margin: "1.25rem auto", padding: "0 1rem" }}
      >
        <LinkedSteps items={flowItems} size="lg" />
      </section>

      <IconFeatureGrid
        items={[
          {
            icon: <FaSearch />,
            title: "SAST",
            text: "Static code analysis to find vulnerabilities early.",
          },
          {
            icon: <FaNetworkWired />,
            title: "DAST",
            text: "Dynamic testing of running apps and APIs.",
          },
          {
            icon: <FaBoxOpen />,
            title: "SCA",
            text: "Dependency scanning and vulnerability inventory.",
          },
          {
            icon: <FaShieldAlt />,
            title: "IaC Security",
            text: "Infrastructure scanning to prevent misconfigurations.",
          },
        ]}
      />

      <ContentSection
        sections={[
          {
            heading: "DevSecOps",
            paragraphs: [
              "DevSecOps integrates security practices into DevOps workflows, making security a shared responsibility across development, operations, and security teams. Instead of treating security as a gate, DevSecOps embeds testing, monitoring, and controls throughout the software development lifecycle for fast, secure delivery.",
            ],
          },

          {
            heading: "Shift-Left Security - Early Security Integration",
            paragraphs: [
              "Shift-left security moves testing earlier in development: in the IDE, pre-commit hooks, and CI. Developers get immediate feedback on security issues so vulnerabilities are cheaper and faster to fix, reducing security debt and preventing issues from reaching production.",
            ],
          },

          {
            heading: "Security as Code",
            paragraphs: [
              "Security policies, configuration validation, and compliance checks are codified and versioned alongside application code. Policy-as-code tools like Open Policy Agent allow automated enforcement, consistent standards, and auditable security changes.",
            ],
          },

          {
            heading: "Developer Security Training",
            paragraphs: [
              "Training programs and security champions help developers adopt secure coding patterns and threat-aware design. Hands-on platforms and regular exercises embed security knowledge into everyday engineering work.",
            ],
          },

          {
            heading: "Automated Security Testing - SAST",
            paragraphs: [
              "Static Application Security Testing analyzes source code for vulnerabilities without execution. Integrated SAST scans in CI catch issues at commit time and block merges when critical risks are detected, providing remediation guidance and code examples.",
            ],
          },

          {
            heading: "Automated Security Testing - DAST",
            paragraphs: [
              "Dynamic testing evaluates running applications the way an attacker would. DAST tools run against staging environments to surface runtime issues like injection flaws, auth bypasses, and misconfigurations before deployment.",
            ],
          },

          {
            heading: "Software Composition Analysis (SCA)",
            paragraphs: [
              "SCA inventories open-source dependencies, flags known CVEs, and monitors for newly disclosed vulnerabilities. Integrating SCA into pipelines ensures teams can patch or mitigate dependency risks proactively.",
            ],
          },

          {
            heading: "Container & Image Scanning",
            paragraphs: [
              "Scan container images for vulnerable packages and insecure base images before pushing to registries. Enforce registry policies so only scanned and approved images are deployed to runtime environments.",
            ],
          },

          {
            heading: "Infrastructure as Code (IaC) Security",
            paragraphs: [
              "IaC scanning validates Terraform, CloudFormation, and similar templates for insecure configurations (exposed secrets, wide-open permissions, unencrypted storage). Prevent insecure infra from being provisioned by enforcing scans in CI/CD.",
            ],
          },

          {
            heading: "Secrets Management",
            paragraphs: [
              "Remove hardcoded credentials from source. Use vaults (HashiCorp Vault, AWS Secrets Manager, Azure Key Vault) for secure storage, runtime retrieval, and automated rotation. Secret scanning prevents accidental commits of sensitive data.",
            ],
          },

          {
            heading: "Security Observability",
            paragraphs: [
              "Extend observability to security signals: aggregate logs, alerts, and threat telemetry into SIEM/SOAR platforms. Correlate security events with application traces and metrics to speed investigation and response.",
            ],
          },

          {
            heading: "Compliance Automation",
            paragraphs: [
              "Automate continuous compliance checks to ensure systems meet regulatory frameworks (PCI, HIPAA, SOC 2, ISO 27001, GDPR). Automatic remediation and immutable infrastructure reduce drift and demonstrate due diligence.",
            ],
          },

          {
            heading: "Security Champions Program",
            paragraphs: [
              "Security champions embed expertise within development teams. They review pull requests for security issues, mentor peers, and act as a bridge to centralized security teams-scaling security practices while maintaining velocity.",
            ],
          },
        ]}
      />
    </>
  );
}
