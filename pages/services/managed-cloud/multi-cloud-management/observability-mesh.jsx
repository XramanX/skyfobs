// pages/services/observability/observability-mesh.jsx
import React from "react";
import Head from "next/head";

import HeroSection from "../../../../components/service-detail/HeroSection";
import IconFeatureGrid from "../../../../components/service-detail/IconFeatureGrid";
import ContentSection from "../../../../components/service-detail/ContentSection";
import Progress from "../../../../components/ui/Progress";

import {
  FaChartLine,
  FaClipboardList,
  FaProjectDiagram,
  FaServer,
  FaDatabase,
  FaWaveSquare,
  FaSearch,
  FaProjectDiagram as FaDeps,
  FaNetworkWired,
  FaEye,
} from "react-icons/fa";

/**
 * Observability Mesh page
 *
 * - Lightweight, content-first page for the "Observability Mesh" topic.
 * - Uses existing UI primitives: HeroSection, IconFeatureGrid, ContentSection, Progress.
 * - Keep this file focused on content so it's easy to iterate and reuse.
 *
 * Adjust imports paths if your repo structure differs.
 */

export default function ObservabilityMesh() {
  const kpis = [
    { icon: <FaChartLine />, label: "Metric Coverage", value: 92 },
    { icon: <FaWaveSquare />, label: "Trace Sampling", value: 78 },
    { icon: <FaServer />, label: "Log Ingestion", value: 88 },
  ];

  const quickCards = [
    {
      icon: <FaNetworkWired />,
      title: "Multi-Cloud Collection",
      text: "Centralize telemetry from AWS, Azure, GCP and on-prem with OpenTelemetry-based pipelines.",
    },
    {
      icon: <FaSearch />,
      title: "Correlation & Context",
      text: "Correlate metrics, logs and traces with consistent identifiers and unified namespaces.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Dependency Mapping",
      text: "Automatic service dependency graphs and cross-cloud request-flows for fast RCA.",
    },
    {
      icon: <FaEye />,
      title: "User & UX Monitoring",
      text: "Real User Monitoring (RUM) + synthetic checks to capture real experience across regions.",
    },
  ];

  return (
    <>
      <Head>
        <title>Observability Mesh — Skyfobs</title>
        <meta
          name="description"
          content="Observability mesh: unified metrics, logs and traces across multi-cloud environments — correlation, intelligent alerting and AIOps for fast root cause and performance optimization."
        />
      </Head>

      <HeroSection
        title="Observability Mesh"
        intro="Unified telemetry across clouds — correlate metrics, logs and traces for fast root-cause analysis, performance optimization and resilient operations."
      />

      <div
        className="container progress-container"
        style={{ marginTop: 18, marginBottom: 18 }}
      >
        {kpis.map((k) => (
          <Progress
            key={k.label}
            label={k.label}
            value={k.value}
            size="md"
            icon={k.icon}
          />
        ))}
      </div>

      <IconFeatureGrid items={quickCards} />

      <ContentSection
        sections={[
          {
            heading: "Unified Observability Architecture",
            paragraphs: [
              "An observability mesh aggregates telemetry from multiple clouds and infrastructure sources, providing a single-pane view of system health. OpenTelemetry provides vendor-neutral instrumentation while cloud-native agents fill provider-specific gaps.",
            ],
          },

          {
            heading: "Multi-Cloud Telemetry Collection",
            paragraphs: [
              "Collect metrics, logs, and traces from AWS, Azure, GCP and on-prem systems. Adopt a consistent naming and tagging scheme so telemetry from different sources can be correlated directly. Use durable pipelines and buffering to avoid data loss during transient outages.",
            ],
          },

          {
            heading: "Metrics Aggregation & Correlation",
            paragraphs: [
              "Store high-cardinality metrics in a time-series backend and use consistent namespaces to enable cross-cloud comparisons. Correlate metrics with trace and log context to move rapidly from symptom to root-cause.",
            ],
          },

          {
            heading: "Distributed Log Management",
            paragraphs: [
              "Centralized log ingestion with structured JSON logs enables rich queries and fast search. Use index/ingest strategies to balance cost and query performance. Correlate logs to traces and metrics via request IDs and span context.",
            ],
          },

          {
            heading: "Distributed Tracing & Dependency Mapping",
            paragraphs: [
              "Instrument services for distributed tracing and propagate context across async boundaries. Visualize full request paths across services and clouds, enabling dependency mapping and pinpointing bottlenecks that span providers.",
            ],
          },

          {
            heading: "Monitoring, Alerting & SLOs",
            paragraphs: [
              "Define SLIs/SLOs backed by telemetry and build alerting that reduces noise: composite alerts, anomaly detection and SLO-based alerts that focus on user impact rather than infra chatter.",
            ],
          },

          {
            heading: "Root Cause Analysis & AIOps",
            paragraphs: [
              "Observability meshes accelerate RCA via automatic correlation, change-correlation (deployments/config), and ML-driven anomaly detection. AIOps can prioritize alerts and suggest probable causes to reduce mean time to repair.",
            ],
          },

          {
            heading: "Performance Optimization & Capacity Planning",
            paragraphs: [
              "Use long-term telemetry to establish baselines, detect slow degradation and forecast capacity. Correlate cost and performance to identify inefficient resources and guide rightsizing decisions.",
            ],
          },

          {
            heading: "User Experience & Synthetic Monitoring",
            paragraphs: [
              "Combine RUM, synthetic checks and server-side telemetry to get a complete picture of user experience across regions and providers. Session sampling and targeted traces help reproduce and resolve user-impacting issues.",
            ],
          },

          {
            heading: "Observability as Code",
            paragraphs: [
              "Define dashboards, alerts and recording rules in code for review, versioning and reproducibility. Treat observability config like application code—test it in staging and promote via CI/CD.",
            ],
          },

          {
            heading: "Security & Compliance Observability",
            paragraphs: [
              "Extend observability to security telemetry: audit logs, IDS/IPS signals and SIEM integrations. Correlate security events with traces/metrics to accelerate forensic analysis and meet compliance needs.",
            ],
          },

          {
            heading: "Tooling & Platform Choices",
            paragraphs: [
              "Open-source stacks (Prometheus, Grafana, Jaeger, OpenTelemetry, ELK) offer flexibility; commercial platforms (Datadog, New Relic, Dynatrace) provide managed experiences and advanced analytics. Balance vendor capabilities with multi-cloud portability and cost.",
            ],
          },

          {
            heading: "Best Practices",
            paragraphs: [
              "Instrument early, standardize telemetry schemas, focus on golden signals (latency, traffic, errors, saturation), and tune alerting to reduce fatigue. Monitor observability health itself (ingestion lag, pipeline errors) to ensure trust in your telemetry.",
            ],
          },
        ]}
      />
    </>
  );
}
