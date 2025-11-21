import React from "react";
import Head from "next/head";
import Link from "next/link";
import HeroSection from "@/components/service-detail/HeroSection";
import IconFeatureGrid from "@/components/service-detail/IconFeatureGrid";
import ContentSection from "@/components/service-detail/ContentSection";
import { FaCubes, FaProjectDiagram, FaCloud } from "react-icons/fa";
import Button from "@/components/ui/Button";

export default function PlatformArchitecture() {
  const features = [
    {
      icon: <FaCubes />,
      title: "Modularity",
      text: "Break systems into smaller modules with single responsibilities to enable independent development and safer changes.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Event-driven Patterns",
      text: "Use events and streams to decouple services for elasticity and asynchronous processing.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud-native Infrastructure",
      text: "Leverage containers, orchestration and IaC (Kubernetes, Terraform) for reproducible deployments and autoscaling.",
    },
  ];

  const sections = [
    {
      heading: "Core Principles",
      paragraphs: [
        "A strong platform starts with a set of guiding principles that shape design and operational decisions.",
      ],
    },
    {
      heading: "Modularity and Separation of Concerns",
      paragraphs: [
        "Breaking down complex systems into smaller, manageable modules allows teams to work independently and reduces the risk of system-wide failures. Each component should have a single, well-defined responsibility.",
      ],
    },
    {
      heading: "Scalability by Design",
      paragraphs: [
        "Modern platforms must accommodate growth in users, data, and functionality. Implement horizontal scaling strategies, load balancing, and distributed patterns to expand without redesign.",
      ],
    },
    {
      heading: "Resilience and Fault Tolerance",
      paragraphs: [
        "Implement circuit breakers, retries, graceful degradation, and comprehensive monitoring so the platform keeps operating even when parts fail.",
      ],
    },
    {
      heading: "Architectural Patterns",
      paragraphs: [
        "Common patterns help you structure systems for maintainability, scale and operational clarity.",
      ],
    },
    {
      heading: "Microservices Architecture",
      paragraphs: [
        "Structure applications as collections of loosely coupled services. Microservices enable independent deployment, technology diversity, and team autonomy.",
      ],
    },
    {
      heading: "Event-Driven Architecture",
      paragraphs: [
        "Use events to trigger and communicate between services. Message queues and event streams decouple producers from consumers, enabling async processing and better resource utilization.",
      ],
    },
    {
      heading: "API Gateway Pattern",
      paragraphs: [
        "A single entry point for client requests provides benefits like authentication, rate limiting, routing, and response transformation. It simplifies client interactions while centralizing cross-cutting concerns.",
      ],
    },
    {
      heading: "Infrastructure Considerations",
      paragraphs: [
        "Cloud-native technologies such as Docker, Kubernetes, and IaC (Terraform) enable reproducible deployments, autoscaling, and consistent environments across teams.",
      ],
    },
    {
      heading: "Database Strategy",
      paragraphs: [
        "Choose between SQL and NoSQL based on consistency and query needs. Use read replicas, sharding, and caching (Redis, Memcached) to optimize throughput and latency.",
      ],
    },
    {
      heading: "Observability",
      paragraphs: [
        "Implement logging, metrics and tracing (ELK/EFK, Prometheus, Jaeger) early in design. Observability shortens incident response time and helps with capacity planning.",
      ],
    },
    {
      heading: "Security",
      paragraphs: [
        "Security must be embedded at every layer. Encrypt transit data, enforce least-privilege, use strong identity and access management, and run continuous security assessments.",
      ],
    },
    {
      heading: "Practical Security Controls",
      paragraphs: [
        "Network segmentation and secure ingress/egress controls; identity and access management and strong authentication; API security: rate limits, throttling, and payload validation; regular audits, vulnerability scanning and automated patching.",
      ],
    },
    {
      heading: "Conclusion",
      paragraphs: [
        "A thoughtful platform architecture balances modularity, scalability, resilience and security. Using cloud-native patterns and solid infrastructure practices helps teams deliver reliable systems that grow with the business.",
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Platform Architecture - Skyfobs</title>
        <meta
          name="description"
          content="Platform architecture forms the foundation of modern software systems. Learn core principles, patterns, infrastructure and security considerations."
        />
      </Head>

      <HeroSection
        title="Platform Architecture"
        intro="Platform architecture forms the foundation of modern software systems, defining how components interact, scale, and evolve. A well-designed platform architecture ensures your applications can handle growth, maintain performance, and adapt to changing business needs."
      />

      <IconFeatureGrid items={features} />

      <ContentSection sections={sections} />

      <section style={{ padding: "2.25rem 0 3rem" }}>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Link href="/contact" passHref>
            <Button as="a">Talk to our platform architects</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
