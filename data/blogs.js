const POSTS = [
  {
    slug: "cloud-migration-from-anywhere",
    title: "Cloud Migration from Anywhere to Anywhere",
    date: "2024-10-01",
    readingMins: 6,
    tags: ["migration", "cloud", "modernization"],
    excerpt:
      "Migrate your infrastructure securely from any provider or data center. Practical steps, risk reduction and modernization patterns.",
    heroHtml:
      "<p>Migrate your infrastructure seamlessly from any cloud or data center to any destination with secure, scalable, and hassle-free cloud migration services.</p>",
    blocks: [
      {
        type: "html",
        html: "<h2>Why choose an engineered migration</h2><p>Successful migrations focus on people, process and automation - not just lift-and-shift. We emphasise discovery, runbook-driven cutovers and repeatable IaC pipelines.</p>",
      },
    ],
    contentHtml: null,
  },
  {
    slug: "deploying-genai-on-cloud",
    title: "Deploying GenAI on Cloud: Practical Guide",
    date: "2024-12-02",
    readingMins: 8,
    tags: ["ai", "genai", "cloud"],
    excerpt:
      "Deploying GenAI models safely and efficiently: data pipelines, model hosting options and cost trade-offs.",
    heroHtml:
      "<p>GenAI requires production-grade data pipelines, observability and careful cost management. Here are realistic patterns.</p>",
    blocks: [
      {
        type: "html",
        html: "<h2>Production considerations for GenAI</h2><p>Model hosting and inference at scale introduce new operational patterns: batching, caching, and GPU cost controls.</p>",
      },
      {
        type: "code",
        lang: "bash",
        caption: "Provision GPU instance (example)",
        code: `# create a GPU VM (example)
gcloud compute instances create genai-infer \\
  --machine-type=a2-highgpu-1g \\
  --accelerator=type=nvidia-tesla-a100,count=1 \\
  --image-family=tf-latest-2-10 --image-project=deeplearning-platform-release`,
      },
      {
        type: "html",
        html: "<h3>Architecture patterns</h3><ul><li>Model as a service</li><li>Hybrid inference</li><li>Edge caching</li></ul>",
      },
      {
        type: "code",
        lang: "javascript",
        caption: "Server: basic inference handler",
        code: `import express from 'express';
import { runInference } from './inference';

const app = express();
app.use(express.json());

app.post('/infer', async (req, res) => {
  try {
    const result = await runInference(req.body.input);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'inference failed' });
  }
});`,
      },
    ],
    contentHtml: null,
  },
];

export function getAllPosts() {
  return [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return POSTS.find((p) => p.slug === slug) || null;
}

export function getLatest(n = 3) {
  return getAllPosts().slice(0, n);
}

export default POSTS;
