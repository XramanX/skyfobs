import React from "react";
import Head from "next/head";
import HeroSection from "../../../../components/service-detail/HeroSection";
import IconFeatureGrid from "../../../../components/service-detail/IconFeatureGrid";
import ContentSection from "../../../../components/service-detail/ContentSection";
import LinkedSteps from "../../../../components/ui/LinkedSteps";

import {
  FaBox,
  FaSyncAlt,
  FaCheck,
  FaRocket,
  FaShieldAlt,
  FaTimesCircle,
  FaVial,
} from "react-icons/fa";

export default function AutomatedMigrationPipelines() {
  const pipelineSteps = [
    { icon: <FaBox />, label: "Prepare" },
    { icon: <FaSyncAlt />, label: "Replicate" },
    { icon: <FaCheck />, label: "Test" },
    { icon: <FaRocket />, label: "Cutover" },
  ];

  const highlights = [
    {
      icon: <FaSyncAlt />,
      title: "Continuous Replication",
      text: "Real-time synchronization with minimal lag to keep targets up-to-date prior to cutover.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Zero-Downtime",
      text: "Orchestrated migrations designed to avoid service interruption during switchovers.",
    },
    {
      icon: <FaTimesCircle />,
      title: "Automated Rollback",
      text: "Instant recovery paths that revert changes automatically if post-cutover validations fail.",
    },
    {
      icon: <FaVial />,
      title: "Validation Testing",
      text: "Automated functional and data integrity tests executed as part of every pipeline run.",
    },
  ];

  return (
    <>
      <Head>
        <title>Automated Migration Pipelines — Skyfobs</title>
        <meta
          name="description"
          content="Automated migration pipelines: continuous replication, pre-flight validation, test migrations and orchestrated cutover to migrate with minimal downtime and predictable outcomes."
        />
      </Head>

      <HeroSection
        title="Automated Migration Pipelines"
        intro="Automate discovery, continuous replication, validation testing and orchestrated cutovers to migrate workloads at scale with low risk and minimal downtime."
      />

      <LinkedSteps items={pipelineSteps} size="md" />

      <IconFeatureGrid items={highlights} />

      <ContentSection
        sections={[
          {
            heading: "Automated Migration Pipelines",
            paragraphs: [
              "Automated migration pipelines accelerate cloud adoption while reducing risk and manual effort. By combining continuous replication, automated validation and orchestrated cutovers, teams migrate large portfolios predictably with minimal downtime.",
            ],
          },

          {
            heading: "Migration Automation Platforms",
            paragraphs: [
              "Cloud providers offer native migration services that integrate deeply with their platforms (AWS Application Migration Service, Azure Migrate, Google Migrate). Third-party platforms (Zerto, CloudEndure, Carbonite) provide multi-cloud flexibility and advanced replication features for complex environments.",
            ],
          },

          {
            heading: "Database Migration Services",
            paragraphs: [
              "Database migrations use specialized services for schema conversion, continuous change-data-capture replication, and cutover coordination. These services minimize downtime and preserve transactional integrity throughout the migration process.",
            ],
          },

          {
            heading: "Containerization & Modernization Tools",
            paragraphs: [
              "Modernization pipelines automate packaging legacy apps into containers, enable Kubernetes orchestration, and integrate service meshes and observability for cloud-native operation, simplifying the lift-and-optimize path.",
            ],
          },

          {
            heading: "Migration Pipeline Architecture",
            paragraphs: [
              "A robust pipeline includes initial bulk sync, continuous replication of incremental changes, automated pre-cutover validations, an orchestrated cutover sequence, and post-cutover verification. Orchestration engines coordinate steps and trigger rollback if validation fails.",
            ],
          },

          {
            heading: "Continuous Replication",
            paragraphs: [
              "Continuous replication keeps target systems closely in sync with sources using block-level or application-level streaming. Initial full transfer is followed by near-real-time change capture to minimize the final sync window before cutover.",
            ],
          },

          {
            heading: "Pre-Migration Validation",
            paragraphs: [
              "Automated pre-flight checks validate capacity, compatibility, network connectivity, permissions and licensing. Running these checks prevents common cutover failures and ensures the target environment is ready.",
            ],
          },

          {
            heading: "Test Migration & Validation",
            paragraphs: [
              "Test migrations validate the entire pipeline in non-production. Validation includes boot testing, functional testing, integration checks, performance testing and data integrity verification. Successful tests build confidence for production cutover.",
            ],
          },

          {
            heading: "Orchestrated Cutover Procedures",
            paragraphs: [
              "Cutover automation executes defined sequences: final sync, graceful shutdowns, DNS updates, target startup and smoke tests. Automated rollback triggers restore previous routing and state if validation fails, reducing risk during the critical window.",
            ],
          },

          {
            heading: "Operational Considerations",
            paragraphs: [
              "Monitor replication lag, validate backups, ensure strong observability and maintain clear rollback plans. Coordinate cutovers with stakeholders, schedule low-risk windows, and automate post-cutover verification and monitoring to confirm success.",
            ],
          },

          {
            heading: "When to Use Automation",
            paragraphs: [
              "Automated pipelines shine for large-scale migrations, frequent or repeated migrations (portfolio moves), and scenarios demanding minimal downtime. For simple, single-server migrations, lightweight approaches may suffice, but automation pays off as scale and complexity grow.",
            ],
          },
        ]}
      />
    </>
  );
}
