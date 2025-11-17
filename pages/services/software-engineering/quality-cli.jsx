import React from "react";
import HeroSection from "../../../components/service-detail/HeroSection";
import IconFeatureGrid from "../../../components/service-detail/IconFeatureGrid";
import ContentSection from "../../../components/service-detail/ContentSection";

import {
  FaCode,
  FaSearch,
  FaRocket,
  FaPercent,
  FaClock,
  FaCheckCircle,
  FaSatelliteDish,
} from "react-icons/fa";

export default function QualityAndCI() {
  return (
    <>
      <HeroSection
        title="Quality Assurance & Continuous Integration"
        intro="Quality assurance and continuous integration form the backbone of modern software delivery, catching issues early, maintaining code standards, and enabling rapid, confident deployments."
      />

      {/* Primary feature grid: Code / Test / Deploy */}
      <IconFeatureGrid
        items={[
          {
            icon: <FaCode />,
            title: "Code",
            text: "Clean, well-tested code with linters, static analysis and solid architecture.",
          },
          {
            icon: <FaSearch />,
            title: "Test",
            text: "Unit, integration and end-to-end tests that give fast and reliable feedback.",
          },
          {
            icon: <FaRocket />,
            title: "Deploy",
            text: "Automated pipelines and safe deployment patterns — feature flags, rollbacks, and canaries.",
          },
        ]}
      />

      {/* Compact metrics grid (visual shorthand for the stats you shared) */}
      <IconFeatureGrid
        items={[
          {
            icon: <FaPercent />,
            title: "95% Code Coverage",
            text: "Aim for meaningful coverage that protects critical paths and edge cases.",
          },
          {
            icon: <FaClock />,
            title: "< 10m Build Time",
            text: "Fast CI pipelines keep feedback loops short and developer productivity high.",
          },
          {
            icon: <FaCheckCircle />,
            title: "100% Automated Tests",
            text: "Every change runs through automated test suites before merging.",
          },
          {
            icon: <FaSatelliteDish />,
            title: "24/7 Monitoring",
            text: "Continuous observability with alerts, logs and traces in production.",
          },
        ]}
      />

      <ContentSection
        sections={[
          {
            heading: "Quality Assurance & Continuous Integration",
            paragraphs: [
              "Quality assurance and continuous integration form the backbone of modern software delivery, catching issues early, maintaining code standards, and enabling rapid, confident deployments.",
            ],
          },

          {
            heading: "Testing Strategies — Test Pyramid",
            paragraphs: [
              "A well-balanced testing strategy includes unit tests forming the foundation, integration tests in the middle, and end-to-end tests at the top. This pyramid ensures comprehensive coverage while maintaining fast feedback loops.",
            ],
          },

          {
            heading: "Unit Testing",
            paragraphs: [
              "Testing individual functions and components in isolation verifies that code behaves correctly under various conditions. Modern frameworks like Jest, pytest, and JUnit make unit testing accessible and maintainable.",
            ],
          },

          {
            heading: "Integration Testing",
            paragraphs: [
              "These tests verify that different modules work together correctly, catching issues that unit tests miss. Integration tests validate API endpoints, database interactions, and service communications.",
            ],
          },

          {
            heading: "End-to-End Testing",
            paragraphs: [
              "Tools like Cypress, Selenium, and Playwright simulate real user interactions, ensuring the entire application flow works correctly from the user's perspective.",
            ],
          },

          {
            heading: "Continuous Integration Practices",
            paragraphs: [
              "CI systems like Jenkins, GitLab CI, GitHub Actions, or CircleCI automatically build, test, and validate code changes. Every commit triggers a pipeline that catches issues before they reach production.",
            ],
          },

          {
            heading: "Automated Build Pipelines",
            paragraphs: [
              "Automated pipelines compile, test, lint and package code on every change. Keep pipelines fast and focused: split heavy jobs, cache artifacts, and parallelize where safe.",
            ],
          },

          {
            heading: "Code Quality Gates",
            paragraphs: [
              "Automated checks enforce coding standards through linters, measure test coverage, identify security vulnerabilities, and analyze code complexity. These gates prevent problematic code from progressing through the pipeline.",
            ],
          },

          {
            heading: "Fast Feedback Loops",
            paragraphs: [
              "Developers receive immediate feedback on their changes, enabling quick fixes and maintaining development momentum. Fast CI pipelines, typically completing in under 10 minutes, are crucial for productivity.",
            ],
          },

          {
            heading: "Quality Metrics and Monitoring",
            paragraphs: [
              "Code coverage indicates how much of the codebase is exercised by tests. Aim for meaningful coverage that tests critical paths and edge cases, not just high percentages.",
              "Performance testing (load and stress tests) reveals how systems behave under various conditions. Tools like JMeter, Gatling, or k6 help identify bottlenecks early.",
              "Static code analysis flags potential bugs, security issues, and maintainability problems before runtime. Popular tools include SonarQube and ESLint.",
            ],
          },

          {
            heading: "Continuous Deployment & Feature Flags",
            paragraphs: [
              "Taking CI further, continuous deployment automatically releases changes that pass all quality gates. This requires robust testing, monitoring, and rollback mechanisms, but enables rapid iteration.",
              "Feature flags decouple deployment from release, allowing teams to control feature visibility, roll out gradually, A/B test, and disable features quickly if issues arise.",
            ],
          },

          {
            heading: "Monitoring and Observability",
            paragraphs: [
              "Production monitoring with Prometheus, Grafana, Datadog or similar gives insights into system health, user behavior, and performance metrics. Combined logging and distributed tracing help diagnose issues quickly.",
            ],
          },

          {
            heading: "Cultural Impact",
            paragraphs: [
              "Quality and CI practices transform team culture, encouraging collaboration, shared ownership, and continuous improvement. When quality is automated and visible, teams ship with confidence, iterate faster, and deliver better products to users.",
            ],
          },
        ]}
      />
    </>
  );
}
