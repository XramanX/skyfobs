// pages/services/network-and-connectivity/network-connectivity.jsx
import React from "react";
import Head from "next/head";

import HeroSection from "../../../../components/service-detail/HeroSection";
import IconFeatureGrid from "../../../../components/service-detail/IconFeatureGrid";
import ContentSection from "../../../../components/service-detail/ContentSection";
import Progress from "../../../../components/ui/Progress";

import {
  FaCloud,
  FaBuilding,
  FaGlobe,
  FaLock,
  FaBolt,
  FaNetworkWired,
  FaChartLine,
  FaProjectDiagram,
  FaEye,
} from "react-icons/fa";

export default function NetworkConnectivity() {
  const kpis = [
    { icon: <FaCloud />, label: "Uptime SLA", value: 99.9 },
    { icon: <FaChartLine />, label: "Ticket Resolution", value: 98 },
    {
      icon: <FaProjectDiagram />,
      label: "Customer Satisfaction",
      value: (4.8 / 5) * 100,
    },
  ];

  const quickCards = [
    {
      icon: <FaBolt />,
      title: "Response Time",
      text: "< 15m - fast escalation & routing for critical network events",
    },
    {
      icon: <FaNetworkWired />,
      title: "Low Latency",
      text: "Optimized routing, direct cloud connections and edge placement",
    },
    {
      icon: <FaLock />,
      title: "Secure Connectivity",
      text: "Encrypted tunnels, VPNs, and Zero Trust principles",
    },
  ];

  return (
    <>
      <Head>
        <title>Network & Connectivity - Skyfobs</title>
        <meta
          name="description"
          content="Hybrid cloud networking: secure tunnels, SD-WAN, direct cloud links, edge connectivity, intelligent traffic management and observability for low-latency, high-availability networks."
        />
      </Head>

      <HeroSection
        title="Network & Connectivity"
        intro="Hybrid cloud networking across public cloud, private cloud and edge - secure connectivity, optimized routing, high availability and deep observability."
      />

      <div className="container progress-container">
        {kpis.map((k) => (
          <Progress label={k.label} value={k.value} icon={k.icon} size="md" />
        ))}
      </div>

      <IconFeatureGrid items={quickCards} />

      <IconFeatureGrid
        items={[
          {
            icon: <FaCloud />,
            title: "Public Cloud",
            text: "Direct interconnects (Direct Connect / ExpressRoute / Interconnect) for predictable latency and bandwidth.",
          },
          {
            icon: <FaBuilding />,
            title: "Private Cloud",
            text: "Isolated, hardened networking with segmentation for tenant separation and compliance.",
          },
          {
            icon: <FaGlobe />,
            title: "Edge / On-Prem",
            text: "Edge nodes and on-prem deployments for ultra-low latency and local processing.",
          },
          {
            icon: <FaNetworkWired />,
            title: "Network Virtualization",
            text: "Overlays, microsegmentation and intent-based policies enabling workload mobility and fine-grained controls.",
          },
          {
            icon: <FaLock />,
            title: "Zero Trust & Security",
            text: "Identity-based access controls, encrypted tunnels and continuous verification across hybrid networks.",
          },
          {
            icon: <FaEye />,
            title: "Observability",
            text: "Flow logs, real-time telemetry and analytics to surface anomalies and optimize traffic.",
          },
        ]}
      />

      <ContentSection
        sections={[
          {
            heading: "Network & Connectivity",
            paragraphs: [
              "Hybrid cloud networking creates seamless connectivity across public clouds, private datacenters, and edge locations. Through secure tunnels, software-defined networking, and intelligent routing, hybrid networks enable workload mobility, data synchronization, and unified management while maintaining security and performance.",
            ],
          },
          {
            heading: "Software-Defined WAN (SD-WAN)",
            paragraphs: [
              "SD-WAN transforms hybrid connectivity with policy-driven routing and application-aware path selection. It balances cost and performance by steering traffic across multiple links, and includes QoS controls to prioritize critical traffic. Centralized management simplifies operations at scale.",
            ],
          },
          {
            heading: "VPNs and Encrypted Tunnels",
            paragraphs: [
              "Site-to-site VPNs, IPsec and TLS-based tunnels secure hybrid links over untrusted networks. High-availability VPN configurations and split-tunnel optimizations preserve performance while ensuring confidentiality of sensitive traffic.",
            ],
          },
          {
            heading: "Direct Cloud Connections",
            paragraphs: [
              "Dedicated links (Direct Connect / ExpressRoute / Cloud Interconnect) bypass the public internet, providing consistent latency and higher bandwidth. Redundant attachments across facilities increase resilience and reduce transfer costs for heavy workloads.",
            ],
          },
          {
            heading: "Network Virtualization & Overlays",
            paragraphs: [
              "Overlays (VXLAN/GENEVE) decouple logical topology from physical networks allowing seamless workload mobility. Microsegmentation enforces least-privilege east-west policies, and virtual network functions replace legacy appliances with flexible software services.",
            ],
          },
          {
            heading: "Multi-Cloud and Edge Patterns",
            paragraphs: [
              "Multi-cloud connectivity leverages interconnection fabric (Equinix, Megaport) and transit gateways to unify networking across providers. Edge connectivity uses 5G, local breakout and CDN strategies to reduce latency for real-time and IoT workloads.",
            ],
          },
          {
            heading: "Traffic Management & Load Balancing",
            paragraphs: [
              "Global load balancing routes users to the best endpoint based on health, proximity and capacity. Application delivery controllers and DNS-based routing improve resiliency and user experience across distributed infrastructure.",
            ],
          },
          {
            heading: "Zero Trust & Network Security",
            paragraphs: [
              "Zero trust principles require continuous verification for every connection. Combine identity-based controls, microsegmentation, WAFs, IPS and DDoS protection to defend hybrid networks from modern threats.",
            ],
          },
          {
            heading: "Observability & Performance Analytics",
            paragraphs: [
              "Comprehensive observability captures latency, jitter, packet loss and throughput. Flow analysis and distributed tracing correlate network metrics with application performance to pinpoint issues and guide optimization.",
            ],
          },
          {
            heading: "Resilience & Disaster Recovery",
            paragraphs: [
              "Design networks with redundant paths, automatic failover and geographic diversity. Regular DR tests validate failover procedures and ensure continuity during link or site failures.",
            ],
          },
          {
            heading: "Automation & Orchestration",
            paragraphs: [
              "Automate network provisioning and policy deployment with IaC and network automation platforms. Intent-based networking and preflight testing reduce human error and accelerate safe changes across hybrid environments.",
            ],
          },
          {
            heading: "Compliance & Data Residency",
            paragraphs: [
              "Policy-based routing and geographic controls keep sensitive data within required jurisdictions. Flow logging and audit trails provide the evidence required for regulatory audits and data sovereignty requirements.",
            ],
          },
          {
            heading: "Continuous Optimization",
            paragraphs: [
              "Continuously monitor performance, tune routing policies, optimize WAN links and right-size connectivity. Capacity planning and traffic engineering ensure the network meets evolving business needs.",
            ],
          },
        ]}
      />
    </>
  );
}
