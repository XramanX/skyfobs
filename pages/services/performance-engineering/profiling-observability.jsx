import React from "react";
import HeroSection from "../../../components/service-detail/HeroSection";
import IconFeatureGrid from "../../../components/service-detail/IconFeatureGrid";
import ContentSection from "../../../components/service-detail/ContentSection";

import {
  FaTachometerAlt,
  FaChartLine,
  FaMemory,
  FaMicrochip,
  FaNetworkWired,
  FaServer,
} from "react-icons/fa";
import Head from "next/head";

export default function ProfilingObservability() {
  return (
    <>
      <Head>
        <title>Profiling & Observability - Skyfobs</title>
        <meta
          name="description"
          content="Deep insights into system behavior - identify bottlenecks, optimise resources, and improve user experience with profiling and observability."
        />
      </Head>
      <HeroSection
        title="Profiling & Observability"
        intro="Deep insights into system behavior - identify bottlenecks, optimise resources, and improve user experience with profiling and observability."
      />

      <IconFeatureGrid
        items={[
          {
            icon: <FaTachometerAlt />,
            title: "Response Time",
            text: "243 ms (median) - track p50 / p95 / p99 to understand real user impact",
          },
          {
            icon: <FaChartLine />,
            title: "Throughput",
            text: "5.2K requests / s - useful for capacity and scaling decisions",
          },
          {
            icon: <FaMemory />,
            title: "Memory Usage",
            text: "68% - monitor heap and allocation patterns to avoid OOMs",
          },
          {
            icon: <FaMicrochip />,
            title: "CPU Load",
            text: "42% - profile hot paths and reduce expensive work",
          },
          {
            icon: <FaNetworkWired />,
            title: "API Gateway",
            text: "12 ms (edge), 89 ms (auth) - inspect per-hop latency",
          },
          {
            icon: <FaServer />,
            title: "Database Query",
            text: "142 ms (example slow query) - optimize indexes and queries",
          },
        ]}
      />

      <ContentSection
        sections={[
          {
            heading: "Profiling & Observability",
            paragraphs: [
              "Profiling and observability provide deep insights into system behavior, enabling teams to identify bottlenecks, understand resource utilization, and optimize performance. Modern observability goes beyond simple monitoring to provide actionable intelligence about application health and user experience.",
            ],
          },

          {
            heading: "Understanding Application Profiling",
            paragraphs: [
              "Profiling captures where time and resources are spent in your application. It helps you find hot paths, inefficient algorithms, and unexpected CPU or memory consumers so you can focus optimization efforts for maximal impact.",
            ],
          },

          {
            heading: "CPU Profiling",
            paragraphs: [
              "CPU profiling reveals which functions consume the most processing time. Tools like perf, pprof, and Visual Studio Profiler capture call stacks and execution times, showing exactly where CPU cycles are spent. Use these insights to target hot paths and expensive code paths for optimization.",
            ],
          },

          {
            heading: "Memory Profiling",
            paragraphs: [
              "Memory profilers track allocation patterns, identify memory leaks, and reveal opportunities for optimization. Analyzing heap usage, garbage collection behavior, and allocation hotspots prevents out-of-memory errors and reduces application footprint.",
            ],
          },

          {
            heading: "I/O Profiling",
            paragraphs: [
              "I/O operations - disk, network, and database - commonly create bottlenecks. I/O profiling surfaces slow calls and high-latency dependencies so you can introduce caching, batching, or parallelism where it matters most.",
            ],
          },

          {
            heading: "Observability Pillars",
            paragraphs: [
              "Observability is built on metrics, tracing, and logs - together they provide a complete picture of system health and behavior.",
            ],
          },

          {
            heading: "Metrics Collection",
            paragraphs: [
              "Metrics give quantitative measurements of system behavior over time: response times, error rates, throughput, and resource utilization. Time-series stores like Prometheus and visual dashboards such as Grafana are essential for trend analysis and alerting.",
            ],
          },

          {
            heading: "Distributed Tracing",
            paragraphs: [
              "In distributed systems, traces show the request path across services and the latency contribution of each hop. Tools like Jaeger, Zipkin, and AWS X-Ray help pinpoint the service or call that causes delays.",
            ],
          },

          {
            heading: "Structured Logging",
            paragraphs: [
              "Structured logs (JSON) make logs queryable and easy to correlate with traces and metrics. Centralized logging stacks such as ELK, Splunk, or Datadog enable fast searches and powerful analysis across large volumes of logs.",
            ],
          },

          {
            heading: "Application Performance Monitoring (APM)",
            paragraphs: [
              "APM platforms combine metrics, traces, and logs into unified views with automatic instrumentation, anomaly detection, and code-level insights. They accelerate root-cause analysis and connect performance regressions with code changes.",
            ],
          },

          {
            heading: "Real User Monitoring (RUM)",
            paragraphs: [
              "RUM gathers performance data directly from real browsers and devices, revealing geographic or device-specific performance patterns. Use RUM to prioritize optimizations that actually improve users' experience.",
            ],
          },

          {
            heading: "Alerting and Anomaly Detection",
            paragraphs: [
              "Smart alerting notifies teams about real problems and reduces noise. Use statistical baselines, anomaly detection, and alert grouping to minimize alert fatigue while ensuring important issues get attention.",
            ],
          },

          {
            heading: "Observability-Driven Development",
            paragraphs: [
              "Design instrumentation into code from the start: add custom business metrics, propagate trace context, and emit structured logs at key boundaries. Observability-driven development makes systems easier to understand and faster to fix in production.",
            ],
          },
        ]}
      />
    </>
  );
}
