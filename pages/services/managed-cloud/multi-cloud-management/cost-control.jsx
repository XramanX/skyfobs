// pages/services/managed-cloud/cost-and-tagging-controls.jsx
import React from "react";
import Head from "next/head";

import HeroSection from "../../../../components/service-detail/HeroSection";
import IconFeatureGrid from "../../../../components/service-detail/IconFeatureGrid";
import ContentSection from "../../../../components/service-detail/ContentSection";
import CostBreakdown from "../../../../components/ui/CostBreakdown";

import {
  FaBuilding,
  FaCog,
  FaLock,
  FaSyncAlt,
  FaTags,
  FaChartPie,
  FaCloud,
  FaDatabase,
  FaNetworkWired,
} from "react-icons/fa";

export default function CostAndTaggingControls() {
  const costItems = [
    { label: "Compute", amount: "$128K", value: 45 },
    { label: "Storage", amount: "$67K", value: 24 },
    { label: "Networking", amount: "$42K", value: 15 },
    { label: "Databases", amount: "$31K", value: 11 },
    { label: "Other Services", amount: "$16K", value: 5 },
  ];

  const tagCards = [
    {
      icon: <FaTags />,
      title: "Business Tags",
      text: "Cost center, project, owner — enable accurate chargeback and showback.",
    },
    {
      icon: <FaCog />,
      title: "Technical Tags",
      text: "Environment, application, component — support automation & operations.",
    },
    {
      icon: <FaLock />,
      title: "Security Tags",
      text: "Classification, compliance, data sensitivity — drive data protection controls.",
    },
    {
      icon: <FaSyncAlt />,
      title: "Automation Tags",
      text: "Backup policy, scaling rules, lifecycle — enable automated policies and workflows.",
    },
  ];

  return (
    <>
      <Head>
        <title>Cost & Tagging Controls — Skyfobs</title>
        <meta
          name="description"
          content="Cost and tagging controls for multi-cloud: tagging strategy, enforcement, cost allocation, FinOps practices and automated optimization."
        />
      </Head>

      <HeroSection
        title="Cost & Tagging Controls"
        intro="Drive financial accountability and operational efficiency across multi-cloud environments through disciplined tagging, automated enforcement and continuous cost optimization."
      />

      <div className="container progress-container" style={{ marginTop: 18 }}>
        <CostBreakdown total="$284K" items={costItems} />
      </div>

      <IconFeatureGrid items={tagCards} />

      <ContentSection
        sections={[
          {
            heading: "Cost & Tagging Controls",
            paragraphs: [
              "Cost optimization and resource tagging enable financial accountability and operational efficiency in multi-cloud environments. Through comprehensive tagging strategies, automated cost allocation, and proactive optimization, organizations gain visibility into cloud spending while driving informed decisions that balance cost with performance and business value.",
            ],
          },

          {
            heading: "Tagging Strategy and Implementation",
            paragraphs: [
              "Design a tagging framework that balances completeness with usability. Business tags identify cost centers and owners for chargeback; technical tags capture environment and application context; security tags indicate data classification and compliance requirements; automation tags drive policies like backups and scaling.",
            ],
          },

          {
            heading: "Mandatory vs Optional Tags",
            paragraphs: [
              "Enforce a minimal set of mandatory tags (owner, cost center, environment) and allow optional tags for contextual detail. Use conditional requirements for resource-specific tags (e.g., databases require backup policy tags). This approach prevents missing metadata while avoiding deployment friction.",
            ],
          },

          {
            heading: "Tag Enforcement and Automation",
            paragraphs: [
              "Automate tag enforcement via policy-as-code and pre-deployment checks. Use default tags and inheritance to apply standards at scale. Continuously monitor and remediate untagged or mis-tagged resources to ensure consistent accounting and automation behavior.",
            ],
          },

          {
            heading: "Tag Standardization Across Clouds",
            paragraphs: [
              "Standardize tag keys and semantics across AWS, Azure and GCP; build provider mappings to handle naming/case restrictions. Consistent tag schemas enable unified reporting, automation, and governance across multi-cloud landscapes.",
            ],
          },

          {
            heading: "Cost Visibility and Allocation",
            paragraphs: [
              "Use tag-based allocation for chargeback and showback to drive ownership and cost-consciousness. Aggregate costs across clouds, normalize currency, and amortize upfront commitments to show true total cost of cloud operations.",
            ],
          },

          {
            heading: "Cost Anomaly Detection & Attribution",
            paragraphs: [
              "Automated baselines and anomaly detection surface unexpected spending. Combine application-level and service-level attribution to pinpoint root causes and prioritize optimization work where it matters most.",
            ],
          },

          {
            heading: "Optimization Strategies",
            paragraphs: [
              "Right-size underutilized instances, adopt reserved or savings plans for predictable workloads, use spot instances for fault-tolerant workloads, and eliminate idle resources through lifecycle automation to capture immediate savings.",
            ],
          },

          {
            heading: "FinOps & Governance",
            paragraphs: [
              "Embed FinOps practices to align finance, engineering, and operations: allocate budgets, run regular cost reviews, use automated recommendations and workflows, and measure unit economics like cost-per-transaction to connect spending with business value.",
            ],
          },

          {
            heading: "Tools & Automation",
            paragraphs: [
              "Leverage cloud-native cost tools (Cost Explorer, Azure Cost Management, GCP Cost tools) and third-party platforms (CloudHealth, Flexera, Kubecost) to centralize visibility and automate optimizations at scale.",
            ],
          },

          {
            heading: "Sustainability & Green Cloud",
            paragraphs: [
              "Optimize for environmental impact by reducing wasted compute, enabling carbon-aware scheduling and selecting regions with lower carbon intensity—cost savings often align with sustainability gains.",
            ],
          },

          {
            heading: "Operational Best Practices",
            paragraphs: [
              "Start tagging early, automate enforcement, empower teams with showback dashboards, and iterate: tagging and cost control is a continuous operational practice, not a one-time project.",
            ],
          },
        ]}
      />
    </>
  );
}
