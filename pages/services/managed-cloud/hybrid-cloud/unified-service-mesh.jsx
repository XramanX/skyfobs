// pages/services/network-and-connectivity/service-mesh.jsx
import React from "react";
import Head from "next/head";

import HeroSection from "../../../../components/service-detail/HeroSection";
import IconFeatureGrid from "../../../../components/service-detail/IconFeatureGrid";
import ContentSection from "../../../../components/service-detail/ContentSection";
import Progress from "../../../../components/ui/Progress";

import {
  FaLock,
  FaProjectDiagram,
  FaNetworkWired,
  FaBolt,
  FaProjectDiagram as FaPD,
  FaSearch,
  FaChartLine,
  FaShieldAlt,
  FaExchangeAlt,
} from "react-icons/fa";

/**
 * Service Mesh page
 * - Matches the structure/style used in network-connectivity.jsx
 * - Uses only container & progress-container wrappers where needed
 * - Uses IconFeatureGrid for compact feature cards and ContentSection for long-form content
 */
export default function ServiceMesh() {
  const kpis = [
    { icon: <FaLock />, label: "mTLS Coverage", value: 94 },
    { icon: <FaProjectDiagram />, label: "Traffic Managed", value: 88 },
    { icon: <FaChartLine />, label: "Observability Coverage", value: 92 },
  ];

  const quickCards = [
    {
      icon: <FaNetworkWired />,
      title: "Traffic Management",
      text: "Layer-7 routing, weighted canaries, and traffic mirroring for safe rollouts.",
    },
    {
      icon: <FaBolt />,
      title: "Resilience",
      text: "Retries, timeouts, circuit breakers and connection pooling to avoid cascade failures.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Policy Enforcement",
      text: "Centralized policies for access control, rate limiting and operation-level auth.",
    },
  ];

  return (
    <>
      <Head>
        <title>Unified Service Mesh - Skyfobs</title>
        <meta
          name="description"
          content="Unified service mesh for secure, observable, and resilient service-to-service communication across clusters, clouds and on-prem."
        />
      </Head>

      <HeroSection
        title="Unified Service Mesh"
        intro="Automatic encryption, fine-grained traffic control, and built-in observability for hybrid microservices - without changing application code."
      />

      <div className="container progress-container">
        {kpis.map((k) => (
          <Progress
            key={k.label}
            label={k.label}
            value={k.value}
            icon={k.icon}
            size="md"
          />
        ))}
      </div>

      <IconFeatureGrid items={quickCards} />

      <IconFeatureGrid
        items={[
          {
            icon: <FaExchangeAlt />,
            title: "Data Plane & Control Plane",
            text: "Sidecar proxies enforce policies, collect telemetry; control plane manages config and policies centrally.",
          },
          {
            icon: <FaNetworkWired />,
            title: "Sidecar Proxy Pattern",
            text: "Transparent proxying (iptables / eBPF) decouples networking concerns from app code.",
          },
          {
            icon: <FaProjectDiagram />,
            title: "Multi-Cluster / Multi-Cloud",
            text: "Federated control planes and mesh gateways enable cross-cluster / multi-cloud service communication.",
          },
          {
            icon: <FaBolt />,
            title: "Traffic Shaping & Progressive Delivery",
            text: "Weighted routing, mirroring, and canaries for low-risk deployments and A/B testing.",
          },
          {
            icon: <FaShieldAlt />,
            title: "Mutual TLS",
            text: "Automatic mTLS with short-lived certificates and transparent rotation for strong identity and encryption.",
          },
          {
            icon: <FaSearch />,
            title: "Observability",
            text: "Automatic tracing, metrics and access logs integrated with Prometheus, Jaeger and logging platforms.",
          },
        ]}
      />

      <ContentSection
        sections={[
          {
            heading: "Unified Service Mesh",
            paragraphs: [
              "Service mesh provides a transparent infrastructure layer for service-to-service communication: authentication, encryption, routing, telemetry and policy enforcement - all without modifying application code.",
            ],
          },
          {
            heading: "Architecture: Data Plane & Control Plane",
            paragraphs: [
              "The data plane is composed of lightweight sidecar proxies that intercept all traffic and handle TLS, retries, timeouts, load balancing and telemetry. The control plane distributes configuration, policies and collects aggregated telemetry to drive observability and enforcement.",
            ],
          },
          {
            heading: "Sidecar Proxy Pattern",
            paragraphs: [
              "Sidecar proxies run alongside every service instance, intercepting requests via iptables or eBPF. This pattern decouples infrastructure concerns from application logic and supports polyglot services with uniform network behavior.",
            ],
          },
          {
            heading: "Service Discovery & Registration",
            paragraphs: [
              "Automatic service registration and health checking keep the mesh up-to-date as instances scale. DNS or platform-native discovery integrates with orchestrators such as Kubernetes or Consul for dynamic environments.",
            ],
          },
          {
            heading: "Multi-Cluster & Multi-Cloud Mesh",
            paragraphs: [
              "A federated mesh connects clusters and clouds using gateways and identity federation. This enables cross-boundary service calls with consistent policies and observability while supporting incremental migrations.",
            ],
          },
          {
            heading: "Traffic Management",
            paragraphs: [
              "Layer-7 routing, weighted traffic shifts, header-based rules and geographic routing enable advanced deployment strategies like canaries, blue/green and traffic shadowing without code changes.",
            ],
          },
          {
            heading: "Resilience Patterns",
            paragraphs: [
              "Built-in retries, timeouts, circuit breakers and rate limiting prevent cascading failures. Connection pooling and adaptive load balancing improve resource utilization and reduce tail latency.",
            ],
          },
          {
            heading: "Security & Identity",
            paragraphs: [
              "Mutual TLS mTLS provides end-to-end encryption and cryptographic identity for every service. Automatic certificate issuance and rotation combined with fine-grained authorization policies realize a zero-trust posture for service-to-service traffic.",
            ],
          },
          {
            heading: "Policy Enforcement & Secrets",
            paragraphs: [
              "Centralized policy-as-code enforces which services can talk to each other and under what conditions. Integration with secret stores (Vault, KMS) ensures certificates and credentials are injected securely and rotated transparently.",
            ],
          },
          {
            heading: "Observability & Tracing",
            paragraphs: [
              "Automatic distributed tracing, standardized metrics and structured access logs let teams correlate traces, metrics and logs across services. Integration with Prometheus/Grafana and Jaeger/Zipkin enables deep performance and reliability analysis.",
            ],
          },
          {
            heading: "Access Logging & Audit Trails",
            paragraphs: [
              "Service meshes produce detailed access logs that capture source/destination, methods, paths, status codes and metadata - essential for security audits, forensics and compliance evidence.",
            ],
          },
          {
            heading: "SLOs, Error Budgets & Service Health",
            paragraphs: [
              "Mesh-provided metrics feed SLOs and error budgets. Automated alerting and rollback policies can enforce reliability guardrails during progressive rollouts and help teams balance velocity with stability.",
            ],
          },
          {
            heading: "Implementation Guidance",
            paragraphs: [
              "Start small: enable mesh for non-critical services first, validate policies and resource overhead, then expand. Monitor proxy resource usage, tune sampling for tracing, and automate policy deployment through CI/CD.",
            ],
          },
          {
            heading: "Future-Proofing",
            paragraphs: [
              "Watch emerging patterns such as eBPF-based meshes (lower overhead), ambient meshes (sidecar-less models) and WebAssembly extensions for custom data-plane features. Choose a path that balances features with operational simplicity for your environment.",
            ],
          },
        ]}
      />
    </>
  );
}
