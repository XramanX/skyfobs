import React from "react";
import ServicePage from "../../components/services/ServicePage.jsx";

const cards = [
  {
    id: "assess",
    title: "Security Assessments",
    text: "Threat modelling, architecture reviews and pentests.",
    href: "/services/security#assess",
  },
  {
    id: "devsec",
    title: "DevSecOps",
    text: "Shift-left security in CI, secrets management and policy-as-code.",
    href: "/services/security#devsec",
  },
  {
    id: "infra",
    title: "Platform Hardening",
    text: "Network zoning, IAM controls and automated compliance checks.",
    href: "/services/security#infra",
  },
];

export default function Page() {
  return (
    <ServicePage
      id="security"
      eyebrow="Security"
      title="Security engineered into your platform"
      lead="Protect your systems and data with threat-aware engineering, automated controls and ongoing monitoring."
      bullets={["Threat modelling", "Automated detection", "Policy-as-code"]}
      cards={cards}
      ctaLabel="Request a security review"
      imageSrc={"/security.svg"}
      imageAlt="security image"
    />
  );
}
