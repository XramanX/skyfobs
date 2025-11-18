import React from "react";
import Head from "next/head";
import HeroSection from "../../../components/service-detail/HeroSection";
import IconFeatureGrid from "../../../components/service-detail/IconFeatureGrid";
import ContentSection from "../../../components/service-detail/ContentSection";
import LinkedSteps from "../../../components/ui/LinkedSteps";

import {
  FaCloud,
  FaNetworkWired,
  FaDatabase,
  FaTools,
  FaCodeBranch,
  FaCubes,
  FaPlay,
  FaServer,
} from "react-icons/fa";

export default function IaCAndAutomation() {
  const infraFlow = [
    { icon: <FaCloud />, label: "Cloud Resources" },
    { icon: <FaNetworkWired />, label: "Network & Security" },
    { icon: <FaDatabase />, label: "Data Storage" },
    { icon: <FaCubes />, label: "Kubernetes" },
  ];

  const toolset = [
    {
      icon: <FaCodeBranch />,
      title: "Terraform",
      text: "Provider-agnostic, declarative infrastructure provisioning.",
    },
    {
      icon: <FaTools />,
      title: "Ansible",
      text: "Agentless configuration management and orchestration.",
    },
    {
      icon: <FaPlay />,
      title: "Kubernetes",
      text: "Container orchestration for deployments, scaling and self-healing.",
    },
    {
      icon: <FaServer />,
      title: "Serverless & VMs",
      text: "Flexible compute patterns for different workloads.",
    },
  ];

  return (
    <>
      <Head>
        <title>Infrastructure as Code & Automation — Skyfobs</title>
        <meta
          name="description"
          content="Declarative, testable and automated infrastructure: IaC, GitOps, configuration management and observability to run reliable cloud-native systems."
        />
      </Head>

      <HeroSection
        title="Infrastructure as Code & Automation"
        intro="Treat infrastructure as software — declare, version, test and automate cloud resources and configurations to achieve repeatable, auditable operations."
      />

      <section
        style={{ maxWidth: 980, margin: "1.25rem auto", padding: "0 1rem" }}
      >
        <LinkedSteps items={infraFlow} size="md" />
      </section>

      <IconFeatureGrid items={toolset} />

      <ContentSection
        sections={[
          {
            heading: "Infrastructure as Code & Automation",
            paragraphs: [
              "Infrastructure as Code (IaC) transforms infrastructure management by describing desired infrastructure state in code, enabling repeatability, version control, and automated reconciliation. Combined with configuration management and GitOps, IaC reduces human error and accelerates safe deployments across environments.",
            ],
          },

          {
            heading: "Declarative Infrastructure Definition",
            paragraphs: [
              "IaC uses declarative languages (HCL, CloudFormation, Pulumi) to define resources such as VMs, networks, storage, and security policies. The IaC engine computes the plan to reach desired state and applies changes idempotently, handling dependencies and ordering automatically.",
            ],
          },

          {
            heading: "Version Control and Collaboration",
            paragraphs: [
              "Store infrastructure code in Git alongside application code. Pull requests enable reviews, approvals, and audit trails for infrastructure changes. Branching and promotion workflows support dev/staging/production lifecycles and provide fast rollback through Git history.",
            ],
          },

          {
            heading: "Idempotency, Drift Detection and State Management",
            paragraphs: [
              "IaC tools are idempotent—reapplying the same configuration converges to the same state. Remote state backends (S3, Azure Storage, Terraform Cloud) and state locking prevent concurrent state corruption. Drift detection identifies manual changes and automated remediation restores the desired state.",
            ],
          },

          {
            heading: "Multi-Cloud and Hybrid Deployments",
            paragraphs: [
              "Terraform's provider ecosystem, cloud-native templates, and Pulumi's multi-language approach enable consistent workflows across cloud and on-prem environments. Multi-cloud strategies reduce lock-in and support geographic redundancy and workload placement optimization.",
            ],
          },

          {
            heading: "Configuration Management & Automation",
            paragraphs: [
              "Tools like Ansible, Chef and Puppet manage software and runtime configuration on provisioned hosts. Use declarative playbooks/roles to install packages, configure services, and enforce security settings. Combine provisioning (IaC) and configuration management for full lifecycle automation.",
            ],
          },

          {
            heading: "GitOps, Immutable Infrastructure & Observability",
            paragraphs: [
              "GitOps treats Git as the single source of truth; CI/CD pipelines and controllers (ArgoCD, Flux) continuously reconcile cluster state from Git. Immutable infrastructure patterns (golden images, redeploy instead of mutate) reduce drift. Always provision monitoring, logging and alerting alongside resources to enable fast detection and response.",
            ],
          },

          {
            heading: "Testing, Validation & Policy as Code",
            paragraphs: [
              "Test IaC with unit tests, integration tests and ephemeral environments. Policy-as-code (Open Policy Agent, Sentinel, Cloud Custodian) enforces security and compliance automatically during pull requests and deployments, blocking non-compliant changes pre-deployment.",
            ],
          },

          {
            heading: "Cost Optimization & Automation Patterns",
            paragraphs: [
              "Automate cost controls: scheduled auto-shutdown for non-prod, right-sizing recommendations, spot instances integration and tagging for FinOps. Automation unlocks sophisticated patterns for autoscaling, canary rollouts and progressive delivery while keeping costs predictable.",
            ],
          },

          {
            heading: "State Management Best Practices",
            paragraphs: [
              "Choose remote backends with locking and encryption, separate state per environment or workspace, and protect state access with strict IAM controls. Regularly back up state and use state versioning to recover from accidental changes.",
            ],
          },

          {
            heading: "Infrastructure Observability",
            paragraphs: [
              "Provision observability (metrics, logs, traces) together with application infrastructure. Dashboards and alerts surface infrastructure health and capacity signals; tracing helps debug cross-service issues. Observability ensures operations remain data-driven and actionable.",
            ],
          },

          {
            heading: "IaC Best Practices",
            paragraphs: [
              "Organize code into reusable modules, avoid duplicating logic, parameterize environment-specific values, and manage secrets securely through vaults or cloud secret managers. Document module interfaces and use CI for testing and validation of infrastructure changes.",
            ],
          },
        ]}
      />
    </>
  );
}
