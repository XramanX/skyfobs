import React from "react";
import ServicePage from "../../components/services/ServicePage.jsx";

const cards = [
  {
    id: "ml",
    title: "ML Platforms",
    text: "Reusable MLOps pipelines and model serving for production scale.",
    href: "/services/ai#ml",
  },
  {
    id: "gen",
    title: "GenAI Integrations",
    text: "Secure prompt design, retrieval-augmented generation, and guardrails.",
    href: "/services/ai#gen",
  },
  {
    id: "ops",
    title: "Data & Feature Stores",
    text: "Reliable data pipelines, feature stores and model observability.",
    href: "/services/ai#ops",
  },
];

export default function Page() {
  return (
    <ServicePage
      id="ai"
      eyebrow="AI & Gen AI"
      title="Production-ready AI and GenAI integration"
      lead="From prototypes to production: data pipelines, model ops and safe deployments that deliver value."
      bullets={["MLOps & pipelines", "RAG & retrieval", "Safety & governance"]}
      cards={cards}
      ctaLabel="Talk AI"
    />
  );
}
