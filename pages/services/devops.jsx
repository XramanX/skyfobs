import React from "react";
import ServicePage from "../../components/services/ServicePage.jsx";

const cards = [
  {
    id: "infra",
    title: "Infrastructure as Code",
    text: "Modular IaC with policy gates and drift detection.",
    href: "/services/devops/iac",
  },
  {
    id: "ci",
    title: "CI/CD",
    text: "Secure, fast pipelines that ship features safely to production.",
    href: "/services/devops/ci-cd",
  },
  {
    id: "obs",
    title: "Observability",
    text: "Logs, metrics and tracing tied into incident workflows.",
    href: "/services/devops/observability",
  },
];

export default function Page() {
  return (
    <ServicePage
      id="devops"
      eyebrow="DevOps"
      title="DevOps and platform engineering"
      lead="Platform-first practices that let teams deliver quickly while staying secure and reliable."
      bullets={["IaC & automation", "Fast CI/CD", "On-call & SRE"]}
      cards={cards}
      ctaLabel="Improve platform reliability"
      imageSrc={"/devOps.svg"}
      imageAlt="devops image"
    />
  );
}
