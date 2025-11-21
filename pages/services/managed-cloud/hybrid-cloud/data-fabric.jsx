// pages/services/data-platform/data-fabric.jsx
import React from "react";
import Head from "next/head";

import HeroSection from "../../../../components/service-detail/HeroSection";
import IconFeatureGrid from "../../../../components/service-detail/IconFeatureGrid";
import ContentSection from "../../../../components/service-detail/ContentSection";
import Progress from "../../../../components/ui/Progress";

import {
  FaLayerGroup,
  FaProjectDiagram,
  FaDatabase,
  FaCloud,
  FaServer,
  FaHdd,
  FaFileAlt,
  FaPlug,
  FaCubes,
  FaSearch,
  FaSyncAlt,
  FaChartLine,
} from "react-icons/fa";

export default function DataFabric() {
  const kpis = [
    { icon: <FaSyncAlt />, label: "Query Success", value: 99 },
    { icon: <FaChartLine />, label: "Data Freshness", value: 98 },
    { icon: <FaCubes />, label: "Feature Reuse", value: 84 },
  ];

  const sourceCards = [
    {
      icon: <FaDatabase />,
      title: "Databases",
      text: "Relational and NoSQL stores for transactional data.",
    },
    {
      icon: <FaHdd />,
      title: "Data Lakes",
      text: "Raw, large-scale storage for analytics and ML.",
    },
    {
      icon: <FaServer />,
      title: "Data Warehouses",
      text: "Curated, query-optimized analytics storage.",
    },
    {
      icon: <FaFileAlt />,
      title: "File Systems",
      text: "Shared files and archives accessible to pipelines.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Storage",
      text: "Object stores and buckets for cloud-native data.",
    },
    {
      icon: <FaPlug />,
      title: "APIs",
      text: "Service and SaaS endpoints for operational data.",
    },
  ];

  return (
    <>
      <Head>
        <title>Data Fabric - Skyfobs</title>
        <meta
          name="description"
          content="Data fabric delivers unified data access, metadata-driven automation, and governance across hybrid cloud environments - enabling analytics, ML and operational use cases without heavy data movement."
        />
      </Head>

      <HeroSection
        title="Data Fabric"
        intro="Create a unified data access layer across hybrid cloud and on-prem systems - metadata-driven, secure, and optimized for analytics and ML."
      />

      <div className="container progress-container" style={{ gap: 12 }}>
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

      <IconFeatureGrid
        items={[
          {
            icon: <FaLayerGroup />,
            title: "Unified Data Access",
            text: "Single interface and virtualization for queries across sources.",
          },
          {
            icon: <FaProjectDiagram />,
            title: "Data Orchestration",
            text: "Automated pipelines, CDC and streaming for reliable movement.",
          },
          {
            icon: <FaSearch />,
            title: "Metadata Management",
            text: "Catalog, lineage and active metadata to drive automation.",
          },
        ]}
      />

      <IconFeatureGrid items={sourceCards} />

      <ContentSection
        sections={[
          {
            heading: "Data Fabric",
            paragraphs: [
              "Data fabric creates an intelligent, metadata-driven layer that unifies access to databases, data lakes, warehouses, file systems, cloud storage and APIs - without forcing full consolidation. It enables development and analytics teams to find, access and use data where it lives while governance and policies are applied consistently.",
            ],
          },

          {
            heading: "Unified Data Access Layer",
            paragraphs: [
              "The fabric exposes consistent query and API interfaces, supporting virtualization and federated queries. Applications and analytics workflows query data across heterogeneous systems as if it were local, reducing ETL overhead and accelerating time-to-insight.",
            ],
          },

          {
            heading: "Metadata-Driven Architecture",
            paragraphs: [
              "Active metadata (technical, business and operational) powers automation: discovery, lineage, transformation suggestions and quality checks. Rich metadata catalogs make data discoverable and provide context for safe reuse.",
            ],
          },

          {
            heading: "Knowledge Graphs & Semantics",
            paragraphs: [
              "Knowledge graphs connect entities and semantics across datasets, enabling semantic search, entity resolution and richer discovery. Business ontologies and entity linking improve data findability and enable cross-domain analytics.",
            ],
          },

          {
            heading: "Distributed Data Processing",
            paragraphs: [
              "Fabric architectures push compute to data where possible (query pushdown) while orchestrating distributed processing for heavy workloads. Caching, materialized views and smart placement optimize latency and cost across hybrid environments.",
            ],
          },

          {
            heading: "Data Integration & Orchestration",
            paragraphs: [
              "Automated ETL/ELT, change-data-capture streams and event-driven pipelines keep targets synchronized. Orchestration handles retries, error handling and monitoring so pipelines remain reliable and observable.",
            ],
          },

          {
            heading: "Real-Time Integration & Replication",
            paragraphs: [
              "Streaming and CDC provide near-real-time replication for analytics and operational use cases. Active-active or selective replication options support locality, sovereignty and low-latency access requirements.",
            ],
          },

          {
            heading: "Governance, Security & Compliance",
            paragraphs: [
              "Fine-grained access control, row/column security, encryption and audit trails enforce policies consistently. Lineage, data quality scorecards and catalog evidence simplify audits and regulatory reporting.",
            ],
          },

          {
            heading: "Feature Stores & ML Integration",
            paragraphs: [
              "Fabric integrates with feature stores and ML platforms, ensuring training-serving parity and reliable feature serving for production models. Lineage and quality metrics feed model governance and drift detection.",
            ],
          },

          {
            heading: "Performance, Scalability & Cost",
            paragraphs: [
              "Performance is optimized through partitioning, indexing, materialized views and intelligent caching. Elastic, cloud-native components scale with demand while placement and transfer decisions balance latency against cost.",
            ],
          },

          {
            heading: "DataOps & Automation",
            paragraphs: [
              "Treat data pipelines as code: CI/CD for data, automated testing, and observability for pipelines reduces failures and accelerates safe changes. DataOps practices drive collaboration between data engineers, analysts and platform teams.",
            ],
          },

          {
            heading: "When to Use a Data Fabric",
            paragraphs: [
              "Data fabric is ideal when your organization needs unified access across many data sources, low-latency analytics without mass consolidation, strong governance across hybrid environments, or improved time-to-value for ML and analytics teams.",
            ],
          },
        ]}
      />
    </>
  );
}
