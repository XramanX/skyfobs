import React from "react";
import HeroSection from "../../../components/service-detail/HeroSection";
import IconFeatureGrid from "../../../components/service-detail/IconFeatureGrid";
import ContentSection from "../../../components/service-detail/ContentSection";
import Progress from "../../../components/ui/Progress";

import {
  FaSearch,
  FaBullseye,
  FaBolt,
  FaCheckCircle,
  FaClock,
  FaServer,
  FaDatabase,
} from "react-icons/fa";
import Head from "next/head";

export default function PerformanceOperations() {
  const budgets = {
    pageLoadMs: 2000,
    apiMs: 300,
    dbMs: 100,
  };

  const metrics = {
    pageLoadMs: 1200, // 1.2s
    apiMs: 243,
    dbMs: 45,
  };

  const pct = (valueMs, budgetMs) =>
    Math.round(Math.max(0, Math.min(100, (valueMs / budgetMs) * 100)));

  return (
    <>
      <Head>
        <title>Performance Operations - Skyfobs</title>
        <meta
          name="description"
          content="Integrate performance engineering into daily operations - monitor, analyze, optimize, and validate performance continuously to maintain exceptional user experiences."
        />
      </Head>
      <HeroSection
        title="Performance Operations"
        intro="Integrate performance engineering into daily operations - monitor, analyze, optimize, and validate performance continuously to maintain exceptional user experiences."
      />
      <div className="container progress-container">
        <Progress
          label={`Page Load Time - ${metrics.pageLoadMs / 1000}s`}
          value={pct(metrics.pageLoadMs, budgets.pageLoadMs)}
          icon={<FaClock />}
          size="md"
        />

        <Progress
          label={`API Response - ${metrics.apiMs}ms`}
          value={pct(metrics.apiMs, budgets.apiMs)}
          icon={<FaServer />}
          size="md"
        />

        <Progress
          label={`Database Query - ${metrics.dbMs}ms`}
          value={pct(metrics.dbMs, budgets.dbMs)}
          icon={<FaDatabase />}
          size="md"
        />
      </div>
      <IconFeatureGrid
        items={[
          {
            icon: <FaSearch />,
            title: "Measure",
            text: "Collect key metrics across frontend, backend, API, and database layers.",
          },
          {
            icon: <FaBullseye />,
            title: "Analyze",
            text: "Identify trends, anomalies, and regressions using real-time insights.",
          },
          {
            icon: <FaBolt />,
            title: "Optimize",
            text: "Improve code, architecture, caching, and resource usage to boost performance.",
          },
          {
            icon: <FaCheckCircle />,
            title: "Validate",
            text: "Continuously verify improvements with automated tests and monitoring.",
          },
        ]}
      />

      <ContentSection
        sections={[
          {
            heading: "Performance Operations",
            paragraphs: [
              "Performance operations integrates performance engineering practices into daily operations. It ensures that systems consistently deliver optimal experiences as architectures evolve and traffic scales. This discipline brings together monitoring, optimization, automation, and continuous improvement to maintain high-quality performance over time.",
            ],
          },

          {
            heading: "Continuous Performance Monitoring",
            paragraphs: [
              "Modern systems require proactive monitoring to detect performance issues early. Continuous monitoring captures real-time and historical performance data, ensuring teams can identify regressions, scalability issues, and anomalies before users are impacted.",
            ],
          },

          {
            heading: "Establishing Performance Baselines",
            paragraphs: [
              "Baselines define what constitutes acceptable system performance. These include response time thresholds, throughput targets, error rate limits, and resource utilization expectations. Aligning baselines with business goals ensures performance standards match user expectations and service-level agreements.",
            ],
          },

          {
            heading: "Real-Time Performance Monitoring",
            paragraphs: [
              "Dashboards provide real-time visibility into key performance metrics. Alerts trigger when metrics exceed defined baselines, enabling rapid investigation and mitigation. Time-series databases store historical data for trend analysis, capacity planning, and identifying slow degradation over time.",
            ],
          },

          {
            heading: "Performance Budgets",
            paragraphs: [
              "Performance budgets enforce limits on critical metrics. Frontend budgets may restrict JavaScript bundle size, render times, or image payloads. Backend budgets set targets for API latency, throughput, and memory usage. Build pipelines can automatically fail when performance budgets are exceeded, preventing regressions.",
            ],
          },

          {
            heading: "Optimization Strategies",
            paragraphs: [
              "Performance improvements require targeted optimizations informed by real data. These strategies span database tuning, caching, code-level optimization, and frontend efficiency techniques.",
            ],
          },

          {
            heading: "Database Optimization",
            paragraphs: [
              "Database performance directly impacts system responsiveness. Key techniques include adding indexes, optimizing queries, caching results, and partitioning large datasets. Query analysis tools surface high-latency queries and help prioritize improvements. Connection pooling and read replicas reduce load and improve scalability.",
            ],
          },

          {
            heading: "Caching Strategies",
            paragraphs: [
              "Caching improves performance at every level. Browser caching accelerates static asset delivery, CDNs reduce geographic latency, application caching stores frequently accessed results, and database caches minimize repetitive queries. Effective invalidation strategies maintain freshness while maximizing hit rates.",
            ],
          },

          {
            heading: "Code-Level Optimization",
            paragraphs: [
              "Profiling identifies slow functions and hot paths that require optimization. Focus on algorithmic improvements, reducing unnecessary work, and minimizing allocations. Prioritize impactful optimizations rather than micro-tuning areas with negligible performance gains.",
            ],
          },

          {
            heading: "Frontend Performance",
            paragraphs: [
              "Frontend performance heavily influences user perception. Techniques include code splitting, minimizing bundle size, lazy loading, optimizing images, preloading key assets, and reducing main-thread blocking. Performance budgets and Lighthouse audits help maintain fast user experiences.",
            ],
          },
        ]}
      />
    </>
  );
}
