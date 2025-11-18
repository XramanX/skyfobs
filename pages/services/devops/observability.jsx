import React from "react";
import Head from "next/head";
import HeroSection from "../../../components/service-detail/HeroSection";
import IconFeatureGrid from "../../../components/service-detail/IconFeatureGrid";
import ContentSection from "../../../components/service-detail/ContentSection";
import Progress from "../../../components/ui/Progress";

import {
  FaCircle,
  FaBolt,
  FaChartBar,
  FaWaveSquare,
  FaHeartbeat,
  FaClock,
  FaServer,
  FaProjectDiagram,
} from "react-icons/fa";

export default function OnCallSRE() {
  const metrics = [
    { icon: <FaHeartbeat />, title: "Availability", value: 99.9 },
    { icon: <FaWaveSquare />, title: "Latency P95", value: 98.5 },
    { icon: <FaChartBar />, title: "Error Rate", value: 99.2 },
    { icon: <FaServer />, title: "Throughput", value: 97.8 },
  ];

  const statusCards = [
    {
      icon: <FaCircle style={{ color: "#16a34a" }} />,
      title: "Healthy",
      text: "System Status",
    },
    {
      icon: <FaBolt />,
      title: "245ms",
      text: "Response Time",
    },
    {
      icon: <FaChartBar />,
      title: "99.95%",
      text: "Uptime",
    },
    {
      icon: <FaClock />,
      title: "< 1h",
      text: "Mean Time to Recovery",
    },
  ];

  return (
    <>
      <Head>
        <title>On-call & SRE — Skyfobs</title>
        <meta
          name="description"
          content="Site Reliability Engineering: SLOs, monitoring, incident response, on-call best practices and observability to keep systems healthy and reliable."
        />
      </Head>

      <HeroSection
        title="On-call & Site Reliability Engineering"
        intro="SRE practices that balance reliability and velocity — SLOs, observability, incident response, and sustainable on-call operations."
      />
      <div className="container progress-container">
        {metrics.map((m) => (
          <Progress label={m.title} value={m.value} size="md" icon={m.icon} />
        ))}
      </div>

      <IconFeatureGrid
        items={statusCards.map((c) => ({
          icon: c.icon,
          title: c.title,
          text: c.text,
        }))}
      />

      <ContentSection
        sections={[
          {
            heading: "SRE Principles and Practices",
            paragraphs: [
              "Site Reliability Engineering combines software engineering with operations to build highly reliable systems at scale. Through SLOs, error budgets, automation and strong observability, SRE teams balance reliability with feature velocity while keeping on-call sustainable.",
            ],
          },

          {
            heading: "Service Level Objectives & Error Budgets",
            paragraphs: [
              "Define SLOs for availability, latency and error rate that reflect real user experience and business needs. Error budgets quantify acceptable unreliability and enable data-driven tradeoffs between launches and reliability work.",
            ],
          },

          {
            heading: "Monitoring & Observability",
            paragraphs: [
              "Invest in golden signals (latency, traffic, errors, saturation), distributed tracing, structured logs and metrics dashboards. Observability enables fast diagnosis and reduces mean time to recovery by surfacing actionable signals during incidents.",
            ],
          },

          {
            heading: "Alerting & On-call Management",
            paragraphs: [
              "Design alerts to be actionable and routed to the right owners. Reduce alert fatigue by eliminating noisy alerts, tuning thresholds, and using multi-window / multi-burn-rate strategies to detect both fast failures and gradual degradations.",
            ],
          },

          {
            heading: "Incident Response & Communication",
            paragraphs: [
              "Use clear incident roles (incident commander, scribe, communications), escalation, and runbooks. Keep stakeholders informed with concise external updates and internal coordination to focus technical responders on remediation.",
            ],
          },

          {
            heading: "Toil Reduction & Automation",
            paragraphs: [
              "Automate repetitive operational work and invest engineering time into building tooling that eliminates toil. Measure toil and target automation projects that improve reliability while freeing engineers for higher-value work.",
            ],
          },

          {
            heading: "Post-Incident Reviews and Learning",
            paragraphs: [
              "Run blameless post-incident reviews to capture root causes, action items and follow-through. Treat incidents as learning opportunities and track remediation to prevent recurrence.",
            ],
          },

          {
            heading: "On-Call Best Practices",
            paragraphs: [
              "Keep rotations sustainable, provide runbooks and tooling, and invest in training and shadowing. Use GameDays and disaster rehearsals to build muscle memory for incident response.",
            ],
          },

          {
            heading: "Capacity Planning & Scaling",
            paragraphs: [
              "Proactively plan capacity with load testing and headroom analysis. Use autoscaling and scheduled scaling policies to address seasonal patterns and sudden spikes while controlling cost.",
            ],
          },

          {
            heading: "Disaster Recovery & Business Continuity",
            paragraphs: [
              "Define RTO/RPO objectives and test disaster recovery procedures regularly. Use multi-region architectures and tested failover processes to ensure business continuity under major outages.",
            ],
          },

          {
            heading: "SRE Engagement Models & Culture",
            paragraphs: [
              "Embed SRE practices through shared ownership, blameless culture, and platform engineering that reduces cognitive load for product teams. Align incentives around measurable reliability outcomes and continuous improvement.",
            ],
          },
        ]}
      />
    </>
  );
}
