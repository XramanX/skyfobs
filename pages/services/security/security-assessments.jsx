import React from "react";
import HeroSection from "../../../components/service-detail/HeroSection";
import IconFeatureGrid from "../../../components/service-detail/IconFeatureGrid";
import ContentSection from "../../../components/service-detail/ContentSection";

import {
  FaSearch,
  FaBullseye,
  FaChartBar,
  FaExclamationTriangle,
  FaBolt,
  FaCheckCircle,
} from "react-icons/fa";
import Head from "next/head";

export default function SecurityAssessments() {
  return (
    <>
      <Head>
        <title>Security Assessments — Skyfobs</title>
        <meta
          name="description"
          content="Comprehensive evaluation of applications, systems, and infrastructure to identify vulnerabilities, validate controls, and strengthen your security posture."
        />
      </Head>
      <HeroSection
        title="Security Assessments"
        intro="Comprehensive evaluation of applications, systems, and infrastructure to identify vulnerabilities, validate controls, and strengthen your security posture."
      />

      <IconFeatureGrid
        items={[
          {
            icon: <FaSearch />,
            title: "Vulnerability Assessment",
            text: "Identify weaknesses, misconfigurations, and outdated dependencies.",
          },
          {
            icon: <FaBullseye />,
            title: "Penetration Testing",
            text: "Exploit and validate vulnerabilities to demonstrate real risk.",
          },
          {
            icon: <FaChartBar />,
            title: "Risk Analysis",
            text: "Evaluate severity, likelihood, and business impact.",
          },
        ]}
      />

      <IconFeatureGrid
        items={[
          {
            icon: <FaExclamationTriangle />,
            title: "High Risk",
            text: "Critical vulnerabilities requiring immediate remediation.",
          },
          {
            icon: <FaBolt />,
            title: "Medium Risk",
            text: "Important issues with moderate business impact.",
          },
          {
            icon: <FaCheckCircle />,
            title: "Low Risk",
            text: "Minor vulnerabilities with limited exposure.",
          },
        ]}
      />

      <ContentSection
        sections={[
          {
            heading: "Security Assessments",
            paragraphs: [
              "Security assessments provide systematic evaluation of systems, applications, and infrastructure to identify vulnerabilities, misconfigurations, and security gaps before attackers can exploit them. Organizations gain clear visibility into their security posture and can make informed decisions about risk mitigation.",
            ],
          },

          {
            heading: "Vulnerability Assessment Methodologies",
            paragraphs: [],
          },

          {
            heading: "Automated Vulnerability Scanning",
            paragraphs: [
              "Automated scanners like Nessus, Qualys, and OpenVAS identify missing patches, weak configurations, default credentials, and known vulnerabilities across systems. Continuous scanning helps teams detect newly discovered vulnerabilities early and track remediation progress.",
            ],
          },

          {
            heading: "Manual Security Testing",
            paragraphs: [
              "Manual testing reveals complex security issues automated tools cannot detect. Testers analyze logic flows, authentication processes, and access controls to uncover business logic flaws and zero-day vulnerabilities.",
            ],
          },

          {
            heading: "Code Review and Static Analysis",
            paragraphs: [
              "Source code review and SAST tools like SonarQube, Checkmarx, and Fortify detect vulnerabilities such as injection flaws, insecure cryptography, and logic weaknesses. Manual review validates findings and discovers deeper architectural issues.",
            ],
          },

          {
            heading: "Dynamic Application Security Testing",
            paragraphs: [
              "DAST tools like Burp Suite, OWASP ZAP, and Acunetix test running applications from an attacker’s perspective. These tools fuzz inputs, analyze responses, and detect runtime vulnerabilities without requiring access to source code.",
            ],
          },

          {
            heading: "Penetration Testing",
            paragraphs: [],
          },

          {
            heading: "Understanding Penetration Testing",
            paragraphs: [
              "Penetration testing simulates real-world attacks to validate security controls and determine actual risk. Testers exploit vulnerabilities to understand business impact, lateral movement potential, and depth of compromise.",
            ],
          },

          {
            heading: "Types of Penetration Tests",
            paragraphs: [
              "Black box testing simulates external attackers with no internal knowledge. White box testing provides full access to system information, allowing deeper analysis. Gray box testing blends both approaches to reflect insider threats or partial compromise.",
            ],
          },

          {
            heading: "Penetration Testing Phases",
            paragraphs: [
              "Testing involves reconnaissance, enumeration, exploitation, and post-exploitation. Testers map attack surfaces, identify weaknesses, escalate privileges, and assess the overall risk of compromise.",
            ],
          },

          {
            heading: "Web Application Penetration Testing",
            paragraphs: [
              "Web applications expose significant attack surfaces. Testers evaluate authentication flows, authorization logic, session management, and input validation to detect issues like SQL injection, XSS, CSRF, and broken access controls.",
            ],
          },

          {
            heading: "Network Penetration Testing",
            paragraphs: [
              "Network testing identifies misconfigurations, insecure devices, weak segmentation, and lateral movement opportunities. Internal testing simulates compromised endpoints; external testing probes perimeter defenses.",
            ],
          },

          {
            heading: "Security Risk Assessment",
            paragraphs: [],
          },

          {
            heading: "Risk Identification and Analysis",
            paragraphs: [
              "Risk assessment evaluates threats, vulnerabilities, and business impact to prioritize remediation. Key factors include asset value, threat actors, severity of vulnerabilities, and existing controls.",
            ],
          },

          {
            heading: "Threat Modeling",
            paragraphs: [
              "Threat modeling frameworks such as STRIDE, PASTA, and VAST help teams identify potential attack vectors early in development, enabling proactive risk mitigation.",
            ],
          },

          {
            heading: "Compliance Assessments",
            paragraphs: [
              "Compliance assessments verify adherence to standards such as PCI DSS, HIPAA, SOC 2, ISO 27001, and GDPR. These ensure that security policies, procedures, and technical controls meet regulatory requirements.",
            ],
          },

          {
            heading: "Continuous Security Assessment",
            paragraphs: [
              "Modern environments require continuous assessment via automated scanning, ongoing monitoring, and regular testing. Integrating security into CI/CD pipelines ensures vulnerabilities are detected before production deployment.",
            ],
          },

          {
            heading: "Bug Bounty Programs",
            paragraphs: [
              "Bug bounty programs engage ethical hackers to identify vulnerabilities through responsible disclosure. Platforms like HackerOne and Bugcrowd expand testing coverage and uncover issues traditional methods may miss.",
            ],
          },

          {
            heading: "Security Assessment Reporting",
            paragraphs: [
              "Effective reporting translates technical findings into actionable remediation guidance. Executive summaries highlight business risk, while technical sections provide vulnerability details, impact analysis, and risk ratings.",
            ],
          },
        ]}
      />
    </>
  );
}
