import React from "react";
import Head from "next/head";

import HeroSection from "@/components/service-detail/HeroSection";
import IconFeatureGrid from "@/components/service-detail/IconFeatureGrid";
import ContentSection from "@/components/service-detail/ContentSection";
import Progress from "@/components/ui/Progress";

import {
  FaTachometerAlt,
  FaClock,
  FaTicketAlt,
  FaSmile,
  FaServer,
  FaClipboardList,
  FaCogs,
  FaWrench,
  FaChartLine,
  FaCloud,
} from "react-icons/fa";

export default function ManagedOperations() {
  const kpis = [
    { icon: <FaTachometerAlt />, label: "Uptime SLA", value: 99.9 },
    {
      icon: <FaSmile />,
      label: "Customer Satisfaction",
      value: (4.8 / 5) * 100,
    },
  ];

  const quickFacts = [
    { icon: <FaClock />, title: "Response Time", text: "< 15m" },
    { icon: <FaTicketAlt />, title: "Ticket Resolution", text: "< 15m" },
    { icon: <FaCloud />, title: "Managed", text: "24/7 Operations" },
    { icon: <FaChartLine />, title: "Success Rate", text: "99.9%" },
  ];

  return (
    <>
      <Head>
        <title>Managed Operations - Skyfobs</title>
        <meta
          name="description"
          content="Managed operations: 24/7 monitoring, proactive maintenance, incident management, capacity planning and continuous optimization for private cloud environments."
        />
      </Head>

      <HeroSection
        title="Managed Operations"
        intro="Reliable, efficient managed services for private cloud - monitoring, maintenance, incident response and continuous optimization to keep services healthy and performant."
      />

      <div className="container progress-container">
        {kpis.map((k) => (
          <Progress label={k.label} value={k.value} icon={k.icon} size="md" />
        ))}
      </div>

      <IconFeatureGrid items={quickFacts} />

      <ContentSection
        sections={[
          {
            heading: "Managed Operations",
            paragraphs: [
              "Managed operations deliver reliable, efficient private cloud services through 24/7 monitoring, proactive maintenance, and continuous optimization. By combining automation with expert operational teams, managed services ensure high availability, optimal performance, and responsive support while reducing operational burden on internal teams.",
            ],
          },

          {
            heading: "Service Level Management",
            paragraphs: [
              "Define clear SLAs and internal SLOs aligned with customer expectations. Availability SLAs (99.9% / 99.99%) and response/resolution targets are explicit and measured. Service credits and escalation paths ensure accountability and transparency.",
            ],
          },

          {
            heading: "Capacity Planning & Management",
            paragraphs: [
              "Proactively forecast capacity needs with utilization trends and headroom analysis. Schedule expansions before resource saturation, use autoscaling for variable loads, and perform regular capacity reviews to avoid both constraint and waste.",
            ],
          },

          {
            heading: "Performance Monitoring & Optimization",
            paragraphs: [
              "Continuously monitor infrastructure and application performance (CPU, memory, I/O, latency). Use baselines and anomaly detection to spot regressions early. Regular tuning and performance reviews prevent gradual degradation and optimize cost-performance trade-offs.",
            ],
          },

          {
            heading: "Availability & Reliability",
            paragraphs: [
              "Design for redundancy and automated recovery: health checks, load balancing, instance replacement and graceful failover. Regular availability testing (chaos exercises, game days) validates recovery procedures and ensures resilience.",
            ],
          },

          {
            heading: "Operational Support & 24/7 Monitoring",
            paragraphs: [
              "Round-the-clock operations combine monitoring, intelligent alerting, and on-call rotations. Escalation policies route incidents to the right owners. Follow-the-sun support ensures global coverage while minimizing fatigue for individual engineers.",
            ],
          },

          {
            heading: "Incident Management",
            paragraphs: [
              "Structured incident processes: detection, classification, response, communication and post-incident review. Runbooks and clear roles accelerate remediation and reduce mean time to recovery.",
            ],
          },

          {
            heading: "Change & Problem Management",
            paragraphs: [
              "Formal change management reduces deployment risk through reviews, validation windows and rollback plans. Problem management addresses root causes to remove recurring incidents and reduce operational load over time.",
            ],
          },

          {
            heading: "Maintenance & Patch Management",
            paragraphs: [
              "Scheduled preventive maintenance reduces failures; patch pipelines test and verify updates in staging before rollout. Emergency patching workflows address critical vulnerabilities quickly while preserving system stability.",
            ],
          },

          {
            heading: "Backup, Recovery & Business Continuity",
            paragraphs: [
              "Automated backups with verification, immutable snapshots where appropriate, and regular recovery drills ensure data and service recoverability. Offsite replication and tested DR plans provide resilience against catastrophic failures.",
            ],
          },

          {
            heading: "Self-Service & Developer Experience",
            paragraphs: [
              "Self-service portals and APIs empower teams while maintaining governance via policy enforcement. Service catalogs, templates and automation accelerate delivery and reduce operational tickets.",
            ],
          },

          {
            heading: "Automation, Orchestration & Knowledge Management",
            paragraphs: [
              "Automate repetitive tasks, orchestrate complex workflows, and maintain a searchable runbook/knowledge base. Automation reduces toil and speeds resolution while documentation preserves tribal knowledge and accelerates onboarding.",
            ],
          },

          {
            heading: "Continuous Improvement & Cost Optimization",
            paragraphs: [
              "Use metrics to drive operational improvements: reduce mean time to detect/repair, lower incident rates, and optimize resource spending. Regular reviews and continuous tuning deliver compounding benefits over time.",
            ],
          },
        ]}
      />
    </>
  );
}
