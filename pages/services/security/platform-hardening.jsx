import React from "react";
import Head from "next/head";
import HeroSection from "../../../components/service-detail/HeroSection";
import IconFeatureGrid from "../../../components/service-detail/IconFeatureGrid";
import ContentSection from "../../../components/service-detail/ContentSection";

import { FaShieldAlt, FaLock, FaNetworkWired, FaFileAlt } from "react-icons/fa";

export default function PlatformHardening() {
  return (
    <>
      <Head>
        <title>Platform Hardening — Skyfobs</title>
        <meta
          name="description"
          content="Reduce attack surface and strengthen systems — OS, network, app and cloud hardening to create resilient, defensible platforms."
        />
      </Head>

      <HeroSection
        title="Platform Hardening"
        intro="Reduce attack surface and strengthen systems by hardening operating systems, networks, applications, and cloud infrastructure with defense-in-depth controls."
      />

      <IconFeatureGrid
        items={[
          {
            icon: <FaShieldAlt />,
            title: "Access Control",
            text: "Least privilege, IAM hardening and role-based access policies.",
          },
          {
            icon: <FaLock />,
            title: "Encryption",
            text: "Protect data at rest and in transit with strong key management.",
          },
          {
            icon: <FaNetworkWired />,
            title: "Network Segmentation",
            text: "Microsegmentation, VLANs and default-deny network policies.",
          },
          {
            icon: <FaFileAlt />,
            title: "Audit Logging",
            text: "Comprehensive, centralized logs for detection and forensics.",
          },
        ]}
      />

      <ContentSection
        sections={[
          {
            heading: "Platform Hardening",
            paragraphs: [
              "Platform hardening reduces attack surfaces by eliminating unnecessary services, strengthening configurations, and implementing defense-in-depth controls. Hardening across OS, network, application, and cloud layers minimizes vulnerabilities and increases resilience against sophisticated attacks.",
            ],
          },

          {
            heading: "Operating System Hardening",
            paragraphs: [
              "Minimal installations remove non-essential packages and services to shrink the attack surface. Apply security baselines (CIS, DISA STIGs, vendor guides) and automate configuration with tools like Ansible or Salt to ensure consistency.",
              "Patch management must be automated and orchestrated—test in staging, schedule rollouts, and prioritize critical fixes to close known vulnerabilities quickly.",
            ],
          },

          {
            heading: "Kernel Hardening and Security Modules",
            paragraphs: [
              "Use kernel protections and Mandatory Access Control modules (SELinux, AppArmor) to enforce fine-grained policies. Tune kernel parameters to disable unnecessary features and enable hardening options that prevent privilege escalation and memory exploitation.",
            ],
          },

          {
            heading: "Network Hardening",
            paragraphs: [
              "Segment networks with VLANs, SDN or microsegmentation so breaches cannot freely traverse the environment. Put public services into DMZs and isolate sensitive backends.",
              "Enforce default-deny firewall rules and regularly audit rule sets to remove permissive or unused entries. Deploy IDS/IPS sensors to detect and block suspicious traffic patterns.",
            ],
          },

          {
            heading: "Network Access Control (NAC)",
            paragraphs: [
              "Authenticate and posture-check devices before granting network access (802.1X, posture assessment). Quarantine non-compliant devices until remediated to prevent infected endpoints from spreading threats.",
            ],
          },

          {
            heading: "Application Hardening",
            paragraphs: [
              "Harden application configurations: remove defaults, disable unused features, and enforce secure settings via templates. Use WAFs for virtual patching and RASP where appropriate to detect runtime attacks.",
              "APIs require auth, rate limiting, schema validation and encryption. Gateways centralize those controls and simplify enforcement.",
            ],
          },

          {
            heading: "Cloud Infrastructure Hardening",
            paragraphs: [
              "Implement least-privilege IAM, enforce MFA for privileged accounts, and perform periodic access reviews. Use conditional access and short-lived credentials where possible.",
              "Encrypt data at rest and in transit; rely on robust key management and rotate keys regularly. Apply security groups / network policies with default-deny rules to control traffic precisely.",
            ],
          },

          {
            heading: "Logging, Monitoring & Detection",
            paragraphs: [
              "Centralize logs and telemetry in a tamper-resistant platform. Correlate logs, metrics and traces to detect anomalies, privilege escalation, and data exfiltration. Automate alerts and integrate with incident response playbooks.",
            ],
          },

          {
            heading: "Container & Immutable Infrastructure Hardening",
            paragraphs: [
              "Use minimal base images, run containers as non-root, and enforce read-only filesystems and resource limits. Scan images before push and enforce registry policies for approved images.",
              "Immutable infra (golden images / image pipelines) prevents configuration drift—redeploy rather than mutate hosts so every instance matches hardened baselines.",
            ],
          },

          {
            heading: "Security Automation and Orchestration",
            paragraphs: [
              "Automate hardening steps, compliance checks, and remediation using configuration management and CI/CD gates. Continuous compliance tools detect drift and can remediate or block non-conforming changes.",
            ],
          },

          {
            heading: "Common Hardening Pitfalls",
            paragraphs: [
              "Over-aggressive hardening can break functionality. Validate hardening changes in staging and document exceptions. Balance security with operational needs and maintain runbooks for troubleshooting.",
            ],
          },

          {
            heading: "Defense in Depth",
            paragraphs: [
              "Apply multiple independent controls — segmentation, host hardening, application controls, encryption and monitoring — so the failure of one control does not result in a full compromise. Regular assessments validate that layers remain effective and highlight gaps.",
            ],
          },
        ]}
      />
    </>
  );
}
