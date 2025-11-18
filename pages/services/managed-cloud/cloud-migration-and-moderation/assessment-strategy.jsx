import React from "react";
import Head from "next/head";
import HeroSection from "../../../../components/service-detail/HeroSection";
import IconFeatureGrid from "../../../../components/service-detail/IconFeatureGrid";
import ContentSection from "../../../../components/service-detail/ContentSection";
import LinkedSteps from "../../../../components/ui/LinkedSteps";

import {
  FaSearch,
  FaClipboardList,
  FaBullseye,
  FaCalculator,
  FaCloudUploadAlt,
  FaTools,
  FaBolt,
  FaRedo,
  FaTrashAlt,
  FaDatabase,
  FaProjectDiagram,
  FaChartLine,
} from "react-icons/fa";

export default function AssessmentStrategy() {
  const discoveryFlow = [
    { icon: <FaSearch />, label: "Discovery & Assessment" },
    { icon: <FaClipboardList />, label: "Portfolio Analysis" },
    { icon: <FaBullseye />, label: "Strategy Planning" },
    { icon: <FaCalculator />, label: "Business Case" },
  ];

  const migrationOptions = [
    { icon: <FaCloudUploadAlt />, label: "Rehost", subtitle: "Lift & Shift" },
    { icon: <FaTools />, label: "Replatform", subtitle: "Lift & Optimize" },
    { icon: <FaBolt />, label: "Refactor", subtitle: "Re-architect" },
    {
      icon: <FaProjectDiagram />,
      label: "Repurchase",
      subtitle: "SaaS Replace",
    },
    { icon: <FaRedo />, label: "Retain", subtitle: "Keep on-prem" },
    { icon: <FaTrashAlt />, label: "Retire", subtitle: "Decommission" },
  ];

  return (
    <>
      <Head>
        <title>Assessment & Strategy — Cloud Migration — Skyfobs</title>
        <meta
          name="description"
          content="Discovery, portfolio analysis and migration strategy: choose the right migration approach (rehost, replatform, refactor, repurchase, retain, retire) and build a business-backed roadmap."
        />
      </Head>

      <HeroSection
        title="Assessment & Strategy"
        intro="Start cloud migration with a thorough assessment, clear strategy and financial case. Discover dependencies, size workloads, and pick the right migration approach for each application."
      />

      <section
        style={{ maxWidth: 980, margin: "1.25rem auto", padding: "0 1rem" }}
      >
        <LinkedSteps items={discoveryFlow} size="md" />
      </section>

      <IconFeatureGrid
        items={migrationOptions.map((m) => ({
          icon: m.icon,
          title: m.label,
          text: m.subtitle,
        }))}
      />

      <ContentSection
        sections={[
          {
            heading: "Assessment & Strategy",
            paragraphs: [
              "Successful cloud migration starts with a comprehensive assessment and a clear strategy. Understand your current state, analyze business and technical priorities, and pick migration approaches that balance risk, speed and long-term value.",
            ],
          },

          {
            heading: "Discovery and Portfolio Assessment",
            paragraphs: [
              "Perform automated and manual discovery to build a complete inventory of servers, databases, network configurations and application dependencies. Agent-based discovery provides deep telemetry; agentless tools give broad coverage. Discovery reveals shadow IT and dependency blindspots that must be addressed before migration.",
            ],
          },

          {
            heading: "Application Portfolio Analysis",
            paragraphs: [
              "Evaluate applications across technical complexity, business value, licensing and migration readiness. Categorize applications into migration waves—start with high-value, low-complexity apps to deliver quick wins while building migration experience for the team.",
            ],
          },

          {
            heading: "Dependency Mapping",
            paragraphs: [
              "Map runtime dependencies using network flow analysis and tracing to ensure clustered, tightly-coupled systems migrate together. Accurate dependency maps prevent integration breakage and allow realistic sequencing of migration waves.",
            ],
          },

          {
            heading: "Performance & Sizing Analysis",
            paragraphs: [
              "Collect representative performance data (CPU, memory, disk, network) across peak and typical periods. Right-size cloud instances using utilization baselines, adopt autoscaling for variable loads, and validate performance in staging to match or exceed on-prem SLAs.",
            ],
          },

          {
            heading: "Migration Strategy Selection — The 6 R's",
            paragraphs: [
              "Use the six (or more) migration patterns—Rehost (lift-and-shift), Replatform (lift & optimize), Refactor (re-architect), Repurchase (SaaS), Retain (stay on-prem), and Retire (decommission)—to select the appropriate approach per application based on cost, risk and strategic value.",
            ],
          },

          {
            heading: "Rehost: Lift & Shift",
            paragraphs: [
              "Rehosting moves workloads with minimal changes to cloud IaaS, enabling fast datacenter exits. It's low risk and quick but may miss cloud-native benefits. Often used as a first step before later optimization.",
            ],
          },

          {
            heading: "Replatform & Refactor",
            paragraphs: [
              "Replatforming applies targeted optimizations (managed DBs, autoscaling) without deep code changes. Refactoring re-architects apps for cloud-native patterns—microservices, serverless, managed services—delivering the biggest long-term benefits but requiring more investment.",
            ],
          },

          {
            heading: "Repurchase, Retain & Retire",
            paragraphs: [
              "Repurchase replaces custom solutions with SaaS when it reduces cost and maintenance. Retain keeps certain workloads on-premises for technical or regulatory reasons. Retire decommissions obsolete systems to reduce future migration scope.",
            ],
          },

          {
            heading: "Financial Planning & Business Case",
            paragraphs: [
              "Produce a TCO model comparing current on-prem costs (hardware, facilities, staffing) with projected cloud expenses. Include migration tooling, training and temporary parallel-run costs. Quantify operational benefits and strategic gains to build a robust business case.",
            ],
          },

          {
            heading: "Roadmapping & Wave Planning",
            paragraphs: [
              "Sequence migrations into waves driven by dependencies and business priorities. Pilot low-risk apps first, validate landing zones and CI/CD pipelines, then scale to more complex systems. Define success criteria for each wave and automate validation where possible.",
            ],
          },

          {
            heading: "Risk Assessment & Mitigation",
            paragraphs: [
              "Identify technical, business and organizational risks early. Use proof-of-concepts for technical feasibility, create rollback plans, and run staging validations. Maintain a risk register and mitigation playbooks to reduce surprises during migration.",
            ],
          },

          {
            heading: "Stakeholder Engagement & Governance",
            paragraphs: [
              "Engage executives, application owners, operations and security teams early. Establish governance for decisions, runbooks, and change approval. Clear communication and executive sponsorship accelerate migration progress and resolve cross-team blockers.",
            ],
          },

          {
            heading: "Best Practices & Next Steps",
            paragraphs: [
              "Start with accurate discovery, prioritize high-value/win applications, validate technical feasibility with pilots, model TCO realistically, and iterate. Use automation, IaC and CI/CD to make migrations repeatable and auditable. Treat migration as an ongoing transformation rather than a one-time project.",
            ],
          },
        ]}
      />
    </>
  );
}
