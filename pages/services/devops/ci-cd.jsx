import React from "react";
import Head from "next/head";
import HeroSection from "../../../components/service-detail/HeroSection";
import IconFeatureGrid from "../../../components/service-detail/IconFeatureGrid";
import ContentSection from "../../../components/service-detail/ContentSection";
import LinkedSteps from "../../../components/ui/LinkedSteps";

import {
  FaCodeBranch,
  FaHammer,
  FaCheckCircle,
  FaRocket,
  FaStopwatch,
  FaCloudUploadAlt,
  FaTachometerAlt,
  FaBolt,
} from "react-icons/fa";

export default function FastCICD() {
  const flow = [
    { icon: <FaCodeBranch />, label: "Commit" },
    { icon: <FaHammer />, label: "Build" },
    { icon: <FaCheckCircle />, label: "Test" },
    { icon: <FaRocket />, label: "Deploy" },
  ];

  return (
    <>
      <Head>
        <title>Fast CI/CD - Skyfobs</title>
        <meta
          name="description"
          content="Design and run fast, reliable CI/CD pipelines - optimize builds and tests, enable progressive delivery, and measure pipeline performance to ship safely at high velocity."
        />
      </Head>

      <HeroSection
        title="Fast CI/CD"
        intro="High-performance pipelines: commit → build → test → deploy. Optimize critical paths, parallelize work, and automate release strategies to deploy quickly and safely."
      />

      {/* visual flow */}
      <section
        style={{ maxWidth: 980, margin: "1.25rem auto", padding: "0 1rem" }}
      >
        <LinkedSteps items={flow} size="md" />
      </section>

      {/* key metrics */}
      <IconFeatureGrid
        items={[
          {
            icon: <FaStopwatch />,
            title: "< 10m Build Time",
            text: "Keep builds fast with caching, incremental compilation and distributed builders.",
          },
          {
            icon: <FaCloudUploadAlt />,
            title: "50+ Deploys/Day",
            text: "Automate promotions and artifact promotion to increase deployment frequency.",
          },
          {
            icon: <FaTachometerAlt />,
            title: "99.9% Success Rate",
            text: "Test optimization and flake management increase pipeline reliability.",
          },
          {
            icon: <FaBolt />,
            title: "< 1h Mean Time to Recovery",
            text: "Automated rollback, health checks and observability reduce outage impact.",
          },
        ]}
      />

      <ContentSection
        sections={[
          {
            heading: "Fast CI/CD",
            paragraphs: [
              "Fast CI/CD pipelines enable rapid, reliable software delivery through automation, parallelization, and optimization. By minimizing feedback loops and eliminating bottlenecks, high-performing teams deploy multiple times daily with confidence while maintaining quality and stability.",
            ],
          },

          {
            heading: "Pipeline Architecture and Design",
            paragraphs: [
              "Design pipelines to balance speed and thoroughness: run quick checks (lint, unit tests, lightweight security scans) early and comprehensive tests (integration, E2E) later. Adopt fail-fast principles to conserve resources and return feedback quickly.",
            ],
          },

          {
            heading: "Build Optimization Techniques",
            paragraphs: [
              "Use incremental builds, distributed compilation, and build caching to avoid rebuilding unchanged artifacts. Cache dependencies and container layers, and reuse artifacts across environments (build once, deploy many) to shrink build times dramatically.",
            ],
          },

          {
            heading: "Test Execution Optimization",
            paragraphs: [
              "Parallelize test execution across machines, select tests affected by code changes, and prioritize fast, high-value tests. Detect and quarantine flaky tests; use smart ordering to run historically failing tests earlier in the pipeline.",
            ],
          },

          {
            heading: "Artifact Management",
            paragraphs: [
              "Store immutable build artifacts in registries and promote them between environments instead of rebuilding. Use artifact metadata and signatures for traceability. Retain artifacts based on retention policies to balance cost and recoverability.",
            ],
          },

          {
            heading: "Progressive Delivery Patterns",
            paragraphs: [
              "Adopt blue-green and canary strategies to release safely. Use feature flags to separate deployment from release, enabling controlled exposure and quick rollback. Automate health checks and monitoring to drive automated rollback decisions.",
            ],
          },

          {
            heading: "Automated Rollback and Recovery",
            paragraphs: [
              "Implement automated health checks, smoke tests and circuit breakers that trigger rollbacks when key metrics degrade. Maintain runbooks and automated recovery playbooks to reduce mean time to recovery (MTTR).",
            ],
          },

          {
            heading: "Zero-Downtime Deployments",
            paragraphs: [
              "Use rolling updates, connection draining, and backward-compatible schema changes to avoid downtime. Design deployments so old and new versions can run concurrently during transition windows.",
            ],
          },

          {
            heading: "Multi-Environment Pipelines",
            paragraphs: [
              "Promote artifacts through dev, staging and production environments using the same tested artifact. Use environment-specific configuration injection and automated gates to ensure safe promotion.",
            ],
          },

          {
            heading: "CI/CD Platform Selection",
            paragraphs: [
              "Choose managed solutions (GitHub Actions, GitLab CI, CircleCI) for ease of use or self-hosted systems (Jenkins, Tekton, Argo Workflows) for control. Evaluate on caching capabilities, parallelism, integration ecosystem and cost model.",
            ],
          },

          {
            heading: "Platform Engineering & Developer Experience",
            paragraphs: [
              "Provide golden-path pipeline templates, self-service portals, and standard SDKs to reduce friction. Platform teams should measure pipeline health and partner with teams to remove bottlenecks and keep pipelines fast and reliable.",
            ],
          },

          {
            heading: "CI/CD Best Practices",
            paragraphs: [
              "Keep pipelines simple and modular, run fast checks early, parallelize aggressively, fail fast, and ensure clear error messages. Use trunk-based development and short-lived branches to reduce merge complexity and keep the main branch deployable.",
            ],
          },

          {
            heading: "Security in CI/CD",
            paragraphs: [
              "Secure pipelines by managing secrets in vaults, scanning images for vulnerabilities, and limiting pipeline permissions. Integrate dependency scanning and policy-as-code gates to prevent insecure changes from deploying.",
            ],
          },

          {
            heading: "Metrics and Observability",
            paragraphs: [
              "Track build time, queue time, test duration, deployment frequency, success rate and MTTR. Use dashboards to spot regressions and prioritize optimizations. These metrics enable continuous improvement and validate CI/CD investments.",
            ],
          },
        ]}
      />
    </>
  );
}
