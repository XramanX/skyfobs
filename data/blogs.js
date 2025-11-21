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
    contentHtml: `
      <h2>Why choose an engineered migration</h2>
      <p>Successful migrations focus on people, process and automation - not just lift-and-shift. We emphasise discovery, runbook-driven cutovers and repeatable IaC pipelines.</p>

      <h3>Three-step approach</h3>
      <ol>
        <li><strong>Assess & prioritise:</strong> Inventory applications, map dependencies, and score risk/cost to prioritise workloads.</li>
        <li><strong>Automate migration pipelines:</strong> Build repeatable IaC + validation pipelines (infrastructure, DB replication, smoke tests).</li>
        <li><strong>Validate & optimise:</strong> Post-migration right-sizing, tagging and FinOps to control costs.</li>
      </ol>

      <h3>Common patterns</h3>
      <ul>
        <li><strong>Rehost (lift & shift):</strong> Fastest but often temporary - used for low-risk services.</li>
        <li><strong>Replatform:</strong> Small changes to use managed services (databases, caches).</li>
        <li><strong>Refactor:</strong> Cloud-native redesign (containers, serverless) for long-term velocity and cost benefits.</li>
      </ul>

      <h3>Cutover checklist (example)</h3>
      <ul>
        <li>Pre-cutover smoke tests & synthetic traffic</li>
        <li>Database replication and consistency checks</li>
        <li>DNS TTL reduction & controlled traffic switch</li>
        <li>Rollback plan and automated rollback pipeline</li>
      </ul>

      <p>Following a repeatable, observable migration process reduces downtime and gives teams confidence to modernise faster.</p>
    `,
  },

  {
    slug: "observability-for-cloud-platforms",
    title: "Observability for Cloud Platforms",
    date: "2024-09-12",
    readingMins: 6,
    tags: ["observability", "platform", "sre"],
    excerpt:
      "Designing observability that scales: traces, metrics, logs and runbooks that help teams move fast while staying safe.",
    heroHtml:
      "<p>Observability is the foundation of reliable cloud platforms - here’s how to design it so it stays useful at scale.</p>",
    contentHtml: `
      <h2>A practical observability strategy</h2>
      <p>Collect the right signals and make sure they help engineers answer business questions fast. Observability is useful only when it reduces time-to-meaning.</p>

      <h3>Three signal pillars</h3>
      <ul>
        <li><strong>Metrics:</strong> Aggregated KPIs (SLOs, latency, error rates).</li>
        <li><strong>Traces:</strong> Distributed traces for request flows and latency hotspots.</li>
        <li><strong>Logs:</strong> Structured logs with correlation IDs for debug and audit.</li>
      </ul>

      <h3>Operational practices</h3>
      <p>Turn signals into action by pairing alerts with playbooks, running regular chaos exercises, and using dashboards that map to business outcomes (checkout success, API availability).</p>

      <h3>Short example: SLO-driven alerting</h3>
      <ol>
        <li>Define a latency SLO for the API (p95 & p99).</li>
        <li>Create an error budget and monitor burn rate.</li>
        <li>Trigger automated investigated workflows when burn thresholds are hit.</li>
      </ol>

      <p>Good observability shortens incident MTTR, surfaces regressions earlier and helps teams release confidently.</p>
    `,
  },

  {
    slug: "secure-cloud-ops-basics",
    title: "Secure Cloud Operations: Basics",
    date: "2024-08-22",
    readingMins: 5,
    tags: ["security", "ops", "compliance"],
    excerpt:
      "Security hygiene for cloud teams: identity, least privilege, automated patching and evidence for audits.",
    heroHtml:
      "<p>Security-first operations protect customers and reduce risk. Start with identity and automation.</p>",
    contentHtml: `
      <h2>Foundations of secure operations</h2>
      <p>Security is an operational discipline: policy-as-code, automation and evidence collection make security repeatable and auditable.</p>

      <h3>Practical checklist</h3>
      <ul>
        <li><strong>Identity & access:</strong> Centralise identity, enforce least privilege and use short-lived credentials.</li>
        <li><strong>Patch & vulnerability management:</strong> Automate build-time and run-time scanning and scheduled patch windows.</li>
        <li><strong>Logging & evidence:</strong> Centralise logs, retain tamper-evident copies and automate evidence reports for audits.</li>
      </ul>

      <h3>Response & readiness</h3>
      <p>Create playbooks for common incidents (compromise, data exposure) and run quarterly tabletop exercises with engineering and leadership.</p>

      <p>Security maturity is a combination of automation, policy and ongoing practice - not a one-off project.</p>
    `,
  },

  // --- new posts below ---
  {
    slug: "finops-practices-for-engineering-teams",
    title: "FinOps Practices for Engineering Teams",
    date: "2024-11-05",
    readingMins: 6,
    tags: ["finops", "cost-optimization", "cloud"],
    excerpt:
      "Practical FinOps for teams: tagging, budgets, rightsizing and cross-functional accountability to control cloud spend.",
    heroHtml:
      "<p>FinOps brings engineering, finance and product together to manage cloud spend without slowing delivery.</p>",
    contentHtml: `
      <h2>Why FinOps matters</h2>
      <p>Cloud costs scale quickly unless teams build cost-awareness into delivery. FinOps balances speed and cost through shared accountability.</p>

      <h3>Core practices</h3>
      <ul>
        <li><strong>Tagging & chargeback:</strong> enforce consistent tags and show teams their bills.</li>
        <li><strong>Budgets & alerts:</strong> automated budgets per team and anomaly detection on spikes.</li>
        <li><strong>Rightsizing:</strong> scheduled analysis for idle resources, oversized instances and unused volumes.</li>
      </ul>

      <h3>Example playbook</h3>
      <ol>
        <li>Monthly cost review meeting with engineering + finance.</li>
        <li>Action items (rightsizing, reserved instance purchases, shutdown unused envs).</li>
        <li>Measure savings and iterate the plan.</li>
      </ol>

      <p>Start small: tag everything, show costs, then automate the low-hanging savings.</p>
    `,
  },

  {
    slug: "incident-response-in-cloud-environments",
    title: "Incident Response in Cloud Environments",
    date: "2024-07-18",
    readingMins: 7,
    tags: ["incident-response", "sre", "security"],
    excerpt:
      "Build reliable incident response for cloud platforms: runbooks, automation and post-incident learning cycles.",
    heroHtml:
      "<p>Plan for incidents before they happen: automation, clear ownership and rehearsed runbooks reduce impact.</p>",
    contentHtml: `
      <h2>Designing an incident response program</h2>
      <p>An effective IR program defines roles, automates detection and rehearses recovery repeatedly.</p>

      <h3>Key elements</h3>
      <ul>
        <li><strong>Detection:</strong> robust alerting and noise reduction so engineers can trust signals.</li>
        <li><strong>Playbooks:</strong> step-by-step runbooks for common failure modes (DB outage, network partition).</li>
        <li><strong>Automation:</strong> automated failovers, health checks and rollback actions to reduce manual toil.</li>
      </ul>

      <h3>Post-incident</h3>
      <p>Run blameless postmortems with measurable action items (SLO changes, automation work), and track completion in backlog.</p>

      <p>Prepared teams recover quickly; build a culture where rehearsing incidents is normal.</p>
    `,
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
    contentHtml: `
      <h2>Production considerations for GenAI</h2>
      <p>Model hosting and inference at scale introduce new operational patterns: batching, caching, and GPU cost controls.</p>

      <h3>Architecture patterns</h3>
      <ul>
        <li><strong>Model as a service:</strong> isolated inference service behind rate-limited APIs.</li>
        <li><strong>Hybrid inference:</strong> CPU-based for low-latency small requests, GPU-burst for heavy workloads.</li>
        <li><strong>Edge caching:</strong> cache frequent responses and use approximate results to reduce compute.</li>
      </ul>

      <h3>Data & privacy</h3>
      <p>Ensure input data is anonymised where needed, enforce retention policies and provide audit logs for model inputs/outputs.</p>

      <h3>Cost controls</h3>
      <p>Use autoscaling, batch processing and request throttles. Monitor cost per inference and add quotas to prevent runaway spend.</p>

      <p>GenAI can add huge value but needs engineering discipline: treat models as first-class, observable services.</p>
    `,
  },
];

// helpers (unchanged)
export function getAllPosts() {
  // newest first
  return [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug) {
  return POSTS.find((p) => p.slug === slug) || null;
}

export function getLatest(n = 3) {
  return getAllPosts().slice(0, n);
}

export default POSTS;
