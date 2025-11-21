import React from "react";
import Head from "next/head";
import HeroSection from "../../../../components/service-detail/HeroSection";
import IconFeatureGrid from "../../../../components/service-detail/IconFeatureGrid";
import ContentSection from "../../../../components/service-detail/ContentSection";

import {
  FaShieldAlt,
  FaUserShield,
  FaKey,
  FaNetworkWired,
  FaChartLine,
  FaLock,
  FaDatabase,
  FaBug,
  FaTools,
  FaClock,
} from "react-icons/fa";

export default function HardenedPlatform() {
  return (
    <>
      <Head>
        <title>Hardened Platform - Skyfobs</title>
        <meta
          name="description"
          content="Hardened private cloud platforms with defense-in-depth: identity & access, encryption, network segmentation, monitoring, and continuous security management."
        />
      </Head>

      <HeroSection
        title="Hardened Platform"
        intro="Enterprise-grade private cloud hardening: defense-in-depth across infrastructure, network, identity, encryption and continuous monitoring to reduce attack surface and maintain compliance."
      />

      <IconFeatureGrid
        items={[
          {
            icon: <FaShieldAlt />,
            title: "Infrastructure Security",
            text: "Hypervisor & compute hardening, minimal installs, secure boot and host isolation.",
          },
          {
            icon: <FaUserShield />,
            title: "Identity & Access",
            text: "RBAC, least-privilege, MFA, SSO and privileged access management for tenant separation.",
          },
          {
            icon: <FaKey />,
            title: "Key & Secret Management",
            text: "Centralized KMS, HSM-backed keys, automated rotation and secrets lifecycle control.",
          },
          {
            icon: <FaNetworkWired />,
            title: "Network Security",
            text: "Segmentation, DMZs, microsegmentation and firewall policies to contain lateral movement.",
          },
          {
            icon: <FaLock />,
            title: "Encryption",
            text: "TLS in transit, AES-256 at rest, field-level encryption and key lifecycle management.",
          },
          {
            icon: <FaChartLine />,
            title: "Monitoring & Logging",
            text: "SIEM, IDS/IPS, structured logs and anomaly detection for continuous threat visibility.",
          },
          {
            icon: <FaBug />,
            title: "Vulnerability Management",
            text: "Automated scans, patch management, prioritization and pen testing backed by metrics.",
          },
          {
            icon: <FaTools />,
            title: "Security Configuration",
            text: "Baselines, config management, continuous compliance and automated remediation.",
          },
          {
            icon: <FaClock />,
            title: "Incident Response",
            text: "Playbooks, runbooks, forensics and regular drills to shorten detection and recovery.",
          },
        ]}
      />

      <ContentSection
        sections={[
          {
            heading: "Hardened Platform",
            paragraphs: [
              "Hardened private cloud platforms provide enterprise-grade security through defense-in-depth strategies, comprehensive access controls, and continuous security monitoring. Implementing security at every layer - from physical datacenters to application workloads - reduces attack surfaces and supports compliance requirements.",
            ],
          },

          {
            heading: "Infrastructure Security",
            paragraphs: [
              "Physical security and datacenter hardening are foundational: restricted facility access, surveillance, environmental controls and tamper-evident protections reduce physical attack vectors. Hypervisor and virtualization hardening (minimal installs, secure boot, timely patching) isolate workloads and limit lateral movement. Server and storage hardening follows CIS benchmarks, host-based firewalls, EDR and encrypted storage.",
            ],
          },

          {
            heading: "Network Segmentation & Isolation",
            paragraphs: [
              "Network architecture must create multiple security zones: management networks, DMZs for external-facing services, and segmented tenant networks. VLANs, microsegmentation and software-defined networking enforce least-privilege communications and contain breaches. Firewalls and NAC (802.1X, posture checks) prevent unauthorized device access.",
            ],
          },

          {
            heading: "Identity & Access Management",
            paragraphs: [
              "Robust identity controls include RBAC, least-privilege role design, multi-factor authentication, SSO and privileged access management. Tenant isolation prevents cross-tenant access in private clouds. Regular access reviews and audit logging ensure permissions remain appropriate and auditable.",
            ],
          },

          {
            heading: "Key Management & Secrets",
            paragraphs: [
              "Centralized key management backed by HSMs secures cryptographic keys. Automated key rotation, separation of duties and lifecycle tracking reduce key exposure. Secrets management solutions store API keys, certificates and credentials securely and rotate them automatically to limit blast radius.",
            ],
          },

          {
            heading: "Encryption - At Rest & In Transit",
            paragraphs: [
              "Encrypt data at rest (full-disk, database encryption, object storage) and in transit (TLS with strong cipher suites and perfect forward secrecy). Apply field-level and application-level encryption for sensitive data. Protect backups and snapshots with encryption and access controls to prevent exfiltration.",
            ],
          },

          {
            heading: "Monitoring, Detection & Threat Response",
            paragraphs: [
              "Continuous monitoring using SIEM, IDS/IPS and anomaly detection provides real-time threat visibility. Structured logging, metrics and distributed tracing aid rapid triage. Threat intelligence and SOAR integration automate common responses while human analysts handle triage and escalation.",
            ],
          },

          {
            heading: "Vulnerability & Patch Management",
            paragraphs: [
              "Automated scanning, prioritized remediation workflows and patch automation reduce time-to-fix for known vulnerabilities. Penetration testing and bug bounty programs complement automated tooling, validating defenses and uncovering complex flaws requiring manual analysis.",
            ],
          },

          {
            heading: "Security Configuration & Compliance",
            paragraphs: [
              "Define and enforce security baselines using configuration management (Ansible, Chef, etc.) and policy-as-code (OPA, Sentinel). Continuous compliance monitoring detects drift and triggers automated remediation. Maintain documented baselines (CIS, DISA STIGs) and test changes in staging before production rollout.",
            ],
          },

          {
            heading: "Backup, Recovery & Forensics",
            paragraphs: [
              "Design backups to be encrypted, immutable where appropriate, and air-gapped for ransomware resilience. Regular recovery tests validate restoration processes. Forensics capabilities preserve evidence, enable safe analysis, and support post-incident investigations while minimizing service impact.",
            ],
          },

          {
            heading: "Incident Response & Operational Readiness",
            paragraphs: [
              "Maintain tested incident response plans and runbooks, with clear roles for containment, eradication and recovery. Regular incident drills and tabletop exercises build competence. Post-incident reviews (blameless) drive improvements and ensure follow-through on remediation actions.",
            ],
          },

          {
            heading: "Continuous Improvement & Automation",
            paragraphs: [
              "Hardened platforms require ongoing investment: automated hardening, continuous scanning, compliance-as-code, and orchestration to scale controls across environments. Automation reduces manual toil, enforces consistency, and ensures security controls keep pace with evolving threats.",
            ],
          },
        ]}
      />
    </>
  );
}
