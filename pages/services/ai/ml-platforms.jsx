import React from "react";
import Head from "next/head";
import HeroSection from "../../../components/service-detail/HeroSection";
import IconFeatureGrid from "../../../components/service-detail/IconFeatureGrid";
import ContentSection from "../../../components/service-detail/ContentSection";
import LinkedSteps from "../../../components/ui/LinkedSteps";

import {
  FaDatabase,
  FaLaptopCode,
  FaCloud,
  FaBolt,
  FaCogs,
  FaChartLine,
  FaProjectDiagram,
  FaServer,
  FaAtom,
} from "react-icons/fa";

export default function MLPlatforms() {
  const lifecycleSteps = [
    { icon: <FaDatabase />, label: "Data Ingestion" },
    { icon: <FaBolt />, label: "Model Training" },
    { icon: <FaChartLine />, label: "Model Validation" },
    { icon: <FaServer />, label: "Model Deployment" },
  ];

  return (
    <>
      <Head>
        <title>ML Platforms — Skyfobs</title>
        <meta
          name="description"
          content="End-to-end ML platforms and MLOps: data ingestion, distributed training, experiment tracking, model serving, and monitoring at scale."
        />
      </Head>

      <HeroSection
        title="ML Platforms"
        intro="Platforms and best practices to build, train, deploy, and operate machine learning models at scale — reproducibly and reliably."
      />

      <section
        style={{ maxWidth: 980, margin: "1.25rem auto", padding: "0 1rem" }}
      >
        <LinkedSteps items={lifecycleSteps} size="md" />
      </section>

      <IconFeatureGrid
        items={[
          {
            icon: <FaAtom />,
            title: "MLflow",
            text: "Experiment tracking, model registry and simple deployment.",
          },
          {
            icon: <FaProjectDiagram />,
            title: "Kubeflow",
            text: "Kubernetes-native ML pipelines and portable workflows.",
          },
          {
            icon: <FaCloud />,
            title: "SageMaker",
            text: "AWS managed platform for training, tuning and deployment.",
          },
          {
            icon: <FaCloud />,
            title: "Vertex AI",
            text: "Google Cloud unified platform for AutoML and custom training.",
          },
          {
            icon: <FaLaptopCode />,
            title: "Experiment Tracking",
            text: "Track runs, hyperparameters, and artifacts for reproducibility (MLflow, W&B).",
          },
          {
            icon: <FaCogs />,
            title: "Distributed Training",
            text: "Scale training across GPUs and nodes with orchestration and elastic resource scheduling.",
          },
          {
            icon: <FaCloud />,
            title: "Model Serving",
            text: "Low-latency inference, batching, and autoscaling via TF Serving, Triton, or custom servers.",
          },
          {
            icon: <FaProjectDiagram />,
            title: "Feature Stores",
            text: "Centralized feature engineering and serving to prevent training-serving skew.",
          },
        ]}
      />

      <ContentSection
        sections={[
          {
            heading: "ML Platforms",
            paragraphs: [
              "Machine learning platforms provide infrastructure and tooling for the full model lifecycle: data ingestion, experiment tracking, distributed training, model registry, deployment pipelines, and monitoring. They enable reproducibility, governance, and faster iteration across teams.",
            ],
          },

          {
            heading: "End-to-End ML Lifecycle Management",
            paragraphs: [
              "Modern platforms support data preparation, experiment management, model versioning, deployment pipelines, and monitoring. Experiment tracking records runs, hyperparameters and artifacts; model registries store versioned models and metadata; deployment pipelines automate serving with rollback capabilities.",
            ],
          },

          {
            heading: "Distributed Training Infrastructure",
            paragraphs: [
              "Large models require distributed training across multiple GPUs and nodes. Platforms orchestrate distributed training (Horovod, PyTorch/XLA, TF distributed) and optimize GPU utilization with resource schedulers and elastic scaling to balance cost and speed.",
            ],
          },

          {
            heading: "Experiment Management and Tracking",
            paragraphs: [
              "Tools like MLflow and Weights & Biases capture experiment metadata, metrics and artifacts. Visualization and comparison across experiments help select effective hyperparameters and architectures while ensuring reproducibility through environment and dataset versioning.",
            ],
          },

          {
            heading: "AutoML and Hyperparameter Optimization",
            paragraphs: [
              "AutoML and automated HPO explore model and hyperparameter spaces efficiently using Bayesian optimization, population-based training, or grid/random search. Early stopping and resource-aware tuning conserve compute while finding performant models.",
            ],
          },

          {
            heading: "Model Serving and Deployment",
            paragraphs: [
              "Production serving needs low-latency inference and high throughput. Frameworks like TensorFlow Serving, TorchServe, and Triton provide optimized model serving. Kubernetes enables autoscaling and canary/canary or A/B rollouts to validate model performance in production.",
            ],
          },

          {
            heading: "Model Optimization and Quantization",
            paragraphs: [
              "Optimization techniques (quantization, pruning, distillation) reduce model size and latency without large accuracy loss. ONNX and model compilers enable cross-framework deployment and accelerated inference on CPU/GPU/edge devices.",
            ],
          },

          {
            heading: "Feature Engineering and Transformation",
            paragraphs: [
              "Consistent feature pipelines for training and serving are critical to prevent skew. Feature stores centralize transformation logic, provide versioning, and enable reuse across teams to accelerate development and maintain consistency.",
            ],
          },

          {
            heading: "MLOps and Model Monitoring",
            paragraphs: [
              "MLOps automates training, validation, deployment and retraining. Continuous training pipelines refresh models with new data; monitoring tracks predictions, latency, and data drift. Alerts and automated retraining keep models accurate and reliable.",
            ],
          },

          {
            heading: "Data Drift and Concept Drift Detection",
            paragraphs: [
              "Detect shifts in input distributions and target relationships using statistical tests and monitoring. Trigger retraining when drift exceeds thresholds to maintain model quality over time.",
            ],
          },

          {
            heading: "Model Governance and Compliance",
            paragraphs: [
              "Model cards, lineage tracking, access controls and audit logs provide governance. Explainability tools and documented model behavior help meet regulatory requirements and build stakeholder trust.",
            ],
          },

          {
            heading: "Cloud & Open-Source Platforms",
            paragraphs: [
              "Cloud platforms (SageMaker, Vertex AI) provide managed tooling for training and serving. Open-source options like Kubeflow and MLflow give vendor-neutral alternatives with portability across environments and strong community ecosystems.",
            ],
          },

          {
            heading: "Feature Stores Integration",
            paragraphs: [
              "Feature stores separate feature engineering from model code, ensuring consistent preprocessing, versioning and serving. They reduce duplicated effort and enable reproducible pipelines across experiments and production.",
            ],
          },
        ]}
      />
    </>
  );
}
