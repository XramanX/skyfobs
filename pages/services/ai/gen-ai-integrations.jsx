import React from "react";
import Head from "next/head";
import HeroSection from "../../../components/service-detail/HeroSection";
import IconFeatureGrid from "../../../components/service-detail/IconFeatureGrid";
import ContentSection from "../../../components/service-detail/ContentSection";
import LinkedSteps from "../../../components/ui/LinkedSteps";

import {
  FaRobot,
  FaPaintBrush,
  FaLayerGroup,
  FaSearch,
  FaCloud,
  FaLock,
  FaChartLine,
  FaCogs,
  FaTools,
  FaBolt,
} from "react-icons/fa";

export default function GenAIIntegration() {
  const genAiSteps = [
    { icon: <FaRobot />, label: "Text Generation" },
    { icon: <FaPaintBrush />, label: "Image Creation" },
    { icon: <FaLayerGroup />, label: "Embeddings" },
    { icon: <FaSearch />, label: "RAG Systems" },
  ];

  return (
    <>
      <Head>
        <title>GenAI Integration - Skyfobs</title>
        <meta
          name="description"
          content="Integrate generative AI and multimodal models into apps: model selection, RAG, prompt engineering, safety, and productionization."
        />
      </Head>

      <HeroSection
        title="GenAI Integration"
        intro="Bring large language and multimodal models into your products with robust architecture, prompt engineering, safety controls, and scalable deployment patterns."
      />

      <section
        style={{ maxWidth: 980, margin: "1.25rem auto", padding: "0 1rem" }}
      >
        <LinkedSteps items={genAiSteps} size="md" />
      </section>

      <IconFeatureGrid
        items={[
          {
            icon: <FaCloud />,
            title: "Foundation Models",
            text: "Choose and evaluate models (OpenAI, Anthropic, Claude, Llama, Meta/Falcon) for capability vs cost.",
          },
          {
            icon: <FaBolt />,
            title: "API Patterns",
            text: "Streaming, retry/backoff, batching, caching and async job handling for robust integrations.",
          },
          {
            icon: <FaTools />,
            title: "Prompt Engineering",
            text: "System prompts, templates, few-shot examples and versioned prompt management.",
          },
          {
            icon: <FaCogs />,
            title: "RAG & Retrieval",
            text: "Vector search + context augmentation to ground responses and reduce hallucination.",
          },
          {
            icon: <FaChartLine />,
            title: "Embeddings",
            text: "Semantic search, similarity, and clustering with vector DBs.",
          },
          {
            icon: <FaSearch />,
            title: "Vector DBs",
            text: "Chroma, Pinecone, Weaviate for fast, scalable retrieval.",
          },
          {
            icon: <FaLock />,
            title: "Safety & Governance",
            text: "Filtering, monitoring, prompt isolation and auditing.",
          },
          {
            icon: <FaCloud />,
            title: "Ops & Cost",
            text: "Token budgets, caching, batching and model mix strategies.",
          },
        ]}
      />

      <ContentSection
        sections={[
          {
            heading: "Generative AI Integration",
            paragraphs: [
              "Generative AI integration brings large language and multimodal models into applications, enabling natural language understanding, content generation, and intelligent automation. Successful integration requires careful architecture, prompt engineering, safety controls, and operational design to deliver reliable, cost-effective features.",
            ],
          },

          {
            heading: "Foundation Model Integration",
            paragraphs: [
              "Choosing the right foundation model depends on capability, latency, cost and licensing. Cloud-hosted offerings (OpenAI, Anthropic, Google) provide managed APIs; open-source models (Llama, Mistral, Falcon) allow on-prem or self-hosted deployment for control and cost optimization. Real-world testing with representative prompts gives the best signal for selection.",
            ],
          },

          {
            heading: "API Integration Patterns",
            paragraphs: [
              "Integrate models via REST/streaming APIs with robust retry/backoff, timeouts, and fallbacks. Use caching and batching to reduce cost and latency. For long-running work, process asynchronously and notify clients when results are ready. Monitor API usage and implement rate-limiting and token budgets to avoid surprises.",
            ],
          },

          {
            heading: "Prompt Engineering & Management",
            paragraphs: [
              "System prompts set behavior and guardrails; few-shot examples and templates guide responses and output formats. Version prompts, run A/B tests, and store prompt history for auditing. Chain-of-thought and decomposition strategies improve reasoning for complex tasks.",
            ],
          },

          {
            heading: "Fine-Tuning & Customization",
            paragraphs: [
              "Fine-tuning or parameter-efficient techniques (LoRA, adapters) adapt models to domain language and style. RLHF aligns outputs with preferences. Carefully curate training data, evaluate for bias, and monitor post-deployment performance to avoid regressions.",
            ],
          },

          {
            heading: "Retrieval-Augmented Generation (RAG)",
            paragraphs: [
              "RAG augments generation with retrieved context: ingest documents, chunk and embed content, store in a vector DB, and retrieve relevant passages at query time. Re-ranking, query rewriting, and citation generation improve relevance and traceability, reducing hallucinations on factual tasks.",
            ],
          },

          {
            heading: "Vector Databases & Embeddings",
            paragraphs: [
              "Embeddings map text into vector space for semantic search. Choose vector DBs based on scale, latency, and features (Pinecone, Weaviate, Chroma). Use hybrid search (semantic + keyword) and metadata filters for precise retrieval.",
            ],
          },

          {
            heading: "Document Processing & Chunking",
            paragraphs: [
              "Extract text from PDFs, Office docs and web pages, then chunk with overlap to balance context and precision. Enrich chunks with metadata (source, date) to support citations and filtering during retrieval.",
            ],
          },

          {
            heading: "Safety, Security & Governance",
            paragraphs: [
              "Implement content filters, moderation pipelines, and prompt isolation to reduce harmful outputs. Defend against prompt injection with input sanitization and strict instruction hierarchy. Log requests and responses for auditing while protecting sensitive data via anonymization and access controls.",
            ],
          },

          {
            heading: "Privacy, Compliance & Data Handling",
            paragraphs: [
              "Protect sensitive data by anonymizing or keeping processing on-premises. Use private deployments or enterprise API agreements when necessary. Ensure audit logs, data retention policies, and access controls meet regulatory needs.",
            ],
          },

          {
            heading: "Bias Detection & Mitigation",
            paragraphs: [
              "Evaluate models for demographic and content bias using diverse test suites. Mitigate via careful prompt design, balanced fine-tuning data, and post-processing filters. Regular audits help detect drift in model behavior over time.",
            ],
          },

          {
            heading: "Cost Optimization Strategies",
            paragraphs: [
              "Manage token costs with prompt compression, caching, and model selection. Route simple tasks to smaller models and reserve larger models for complex reasoning. Monitor usage and set alerts for budget thresholds.",
            ],
          },

          {
            heading: "Observability & Monitoring",
            paragraphs: [
              "Track latency, token usage, success rates and content quality. Instrument user feedback and automated metrics to detect regressions. Correlate AI metrics with business KPIs to ensure models deliver value.",
            ],
          },

          {
            heading: "Agent Systems & Tooling",
            paragraphs: [
              "Build agents that orchestrate tools: function calling, tool execution, and multi-step workflows. Use frameworks like LangChain to coordinate retrieval, reasoning, and external API usage while enforcing execution guardrails to limit side effects.",
            ],
          },
        ]}
      />
    </>
  );
}
