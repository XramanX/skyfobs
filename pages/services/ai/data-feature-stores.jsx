import React from "react";
import Head from "next/head";
import HeroSection from "../../../components/service-detail/HeroSection";
import IconFeatureGrid from "../../../components/service-detail/IconFeatureGrid";
import ContentSection from "../../../components/service-detail/ContentSection";
import LinkedSteps from "../../../components/ui/LinkedSteps";

import {
  FaHdd,
  FaCogs,
  FaBoxOpen,
  FaProjectDiagram,
  FaDatabase,
  FaCloud,
  FaChartLine,
} from "react-icons/fa";

export default function FeatureStores() {
  const flow = [
    { icon: <FaHdd />, label: "Raw Data" },
    { icon: <FaCogs />, label: "Transform" },
    { icon: <FaBoxOpen />, label: "Feature Store" },
    { icon: <FaProjectDiagram />, label: "ML Models" },
  ];

  return (
    <>
      <Head>
        <title>Feature Stores & Data Stores - Skyfobs</title>
        <meta
          name="description"
          content="Feature stores centralize feature engineering, storage and serving to ensure training-serving parity, versioned features, low-latency inference and strong governance."
        />
      </Head>

      <HeroSection
        title="Feature Stores & Data Stores"
        intro="Manage features as versioned, reusable assets - eliminate training/serving skew, improve model reliability, and speed ML development."
      />

      <section
        style={{ maxWidth: 980, margin: "1.25rem auto", padding: "0 1rem" }}
      >
        <LinkedSteps items={flow} size="md" />
      </section>

      <IconFeatureGrid
        items={[
          {
            icon: <FaDatabase />,
            title: "Training-Serving Parity",
            text: "Versioned features, point-in-time correctness and reproducible pipelines.",
          },
          {
            icon: <FaChartLine />,
            title: "Performance",
            text: "Low-latency online serving, batch processing and real-time updates.",
          },
          {
            icon: <FaCloud />,
            title: "Reusability",
            text: "Shared feature registry, discovery and standardized definitions.",
          },
          {
            icon: <FaHdd />,
            title: "Governance",
            text: "Access controls, lineage tracking and quality monitoring.",
          },
        ]}
      />

      <ContentSection
        sections={[
          {
            heading: "Data and Feature Stores",
            paragraphs: [
              "Feature stores centralize feature engineering, storage, and serving for machine learning applications. By managing features as reusable, versioned assets, feature stores eliminate training-serving skew, accelerate model development, and ensure consistency across models while providing enterprise-grade governance and monitoring.",
            ],
          },

          {
            heading: "Feature Store Architecture",
            paragraphs: [
              "Core components include a feature registry with metadata, offline storage for batch training data, online stores for low-latency serving, feature pipelines that compute and update features, and APIs/SDKs for retrieval during training and inference.",
            ],
          },

          {
            heading: "Batch vs Real-Time Features",
            paragraphs: [
              "Feature stores support both scheduled batch computation and real-time streaming updates. Hybrid patterns precompute expensive aggregates in batch while applying lightweight transforms at inference time to balance freshness and cost.",
            ],
          },

          {
            heading: "Training-Serving Consistency",
            paragraphs: [
              "Define transformation logic once and use it for both training and serving to avoid skew. Point-in-time joins reconstruct feature values as they existed at prediction time, preventing leakage and ensuring correct historical training datasets.",
            ],
          },

          {
            heading: "Feature Engineering & Management",
            paragraphs: [
              "Feature pipelines should be declarative, version-controlled, and testable. Incremental processing and dependency management optimize compute. Feature versioning and lineage enable reproducibility and safe evolution of feature logic.",
            ],
          },

          {
            heading: "Feature Discovery & Reuse",
            paragraphs: [
              "A discoverable registry with documentation, owners, and quality metrics promotes reuse across teams. Searchable features and usage tracking reduce duplicated engineering effort and speed up model development.",
            ],
          },

          {
            heading: "Feature Quality & Monitoring",
            paragraphs: [
              "Monitor freshness, completeness, distributions and drift. Automated validation catches schema changes or anomalies early. Quality dashboards and alerts enable fast remediation and maintain model health.",
            ],
          },

          {
            heading: "Feature Serving Patterns",
            paragraphs: [
              "Online serving uses low-latency stores (Redis, DynamoDB) for real-time lookups; offline retrieval builds historical training datasets via point-in-time joins. Streaming computation frameworks keep online and offline stores consistent.",
            ],
          },

          {
            heading: "Popular Solutions",
            paragraphs: [
              "Open-source options like Feast, Hopsworks and Tecton-style platforms provide varying degrees of streaming, governance and monitoring. Cloud-managed stores (SageMaker Feature Store, Vertex AI Feature Store) offer integrated offline/online sync and easier operations.",
            ],
          },

          {
            heading: "When to Adopt Feature Stores",
            paragraphs: [
              "Feature stores are most valuable when multiple models share features, low-latency serving is required, or strict training-serving consistency is critical. Start small with high-value shared features and expand as ML maturity grows.",
            ],
          },

          {
            heading: "Best Practices",
            paragraphs: [
              "Version features, codify transformations, establish ownership and documentation, monitor quality, and design features for reuse. Automate tests and CI for feature pipelines, and enforce access controls and audit logging for governance.",
            ],
          },
        ]}
      />
    </>
  );
}
