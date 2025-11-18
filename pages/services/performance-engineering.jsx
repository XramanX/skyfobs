import React from "react";
import ServicePage from "../../components/services/ServicePage.jsx";

const cards = [
  {
    id: "profiling",
    title: "Profiling & Observability",
    text: "Identify bottlenecks and surface latency across systems.",
    href: "/services/performance-engineering/profiling-observability",
  },
  {
    id: "load",
    title: "Load & Chaos Testing",
    text: "Prove resilience with realistic load and failure scenarios.",
    href: "/services/performance-engineering/load",
  },
  {
    id: "opt",
    title: "Performance Ops",
    text: "Infrastructure tuning, caching and CDN strategies to reduce cost.",
    href: "/services/performance-engineering/performance-ops",
  },
];

export default function Page() {
  return (
    <ServicePage
      id="performance-engineering"
      eyebrow="Performance"
      title="Performance engineering for faster experiences"
      lead="Reduce latency, improve throughput and deliver predictable user experiences through measurement and engineering."
      bullets={[
        "End-to-end tracing",
        "CDN & caching",
        "SLA-driven performance",
      ]}
      cards={cards}
      ctaLabel="Get a performance audit"
      imageSrc={"/performance-engineer.svg"}
      imageAlt="performance image"
    />
  );
}
