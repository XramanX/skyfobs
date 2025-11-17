import React from "react";
import ServicePage from "../../components/services/ServicePage.jsx";

const cards = [
  {
    id: "arch",
    title: "Platform Architecture",
    text: "Design resilient microservice and event-driven architectures for scale.",
    href: "/services/software-engineering/platform-architecture",
  },
  {
    id: "dev",
    title: "Full-stack Engineering",
    text: "Expert teams building performant and maintainable apps with modern frameworks.",
    href: "/services/software-engineering/full-stack-engineering",
  },
  {
    id: "qa",
    title: "Quality & CI",
    text: "Automated testing, CI pipelines and deploy gating to keep releases safe.",
    href: "/services/software-engineering/quality-cli",
  },
];

export default function Page() {
  return (
    <ServicePage
      id="software-engineering"
      eyebrow="Software Engineering"
      title="Build modern, reliable software that scales"
      lead="End-to-end engineering: product-aligned teams, clean architecture and pragmatic delivery for long-term velocity."
      bullets={[
        "Product-aligned squads",
        "Test & CI-first workflows",
        "APIs & integrations",
      ]}
      cards={cards}
      ctaHref="/contact"
      // ctaLabel="Talk to engineering"
      imageSrc={"/software-engineer.svg"}
      imageAlt="sde image"
    />
  );
}
