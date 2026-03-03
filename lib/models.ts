export interface Model {
  id: string;
  name: string;
  domain: string;
  tagline: string;
  description: string;
  accent: string;
  eta: string;
  github: string;
  url: string;
  tags: string[];
}

export const models: Model[] = [
  {
    id: "nalana",
    name: "Nalana",
    domain: "3D Creation",
    tagline: "You speak. Nalana builds.",
    description:
      "Universal voice-to-3D workflow AI. Executes expert-level commands across Blender, Maya, Cinema 4D, Houdini, Unreal Engine, and more. First model trained on execution-verified 3D workflows with a Universal DSL.",
    accent: "#7C3AED",
    eta: "Q2 2026",
    github: "https://github.com/calebnewtonusc/nalana-dataset",
    url: "https://nalana.io",
    tags: ["3D Creation", "Voice AI", "Multi-Platform"],
  },
  {
    id: "podium",
    name: "Podium",
    domain: "ML Competition",
    tagline: "Competition-grade ML engineering, automated.",
    description:
      "The first trained specialist for winning Kaggle competitions. Bakes grandmaster knowledge into weights via CV-verified RL. Targeting 60%+ medal rate vs. 17% for existing systems.",
    accent: "#F59E0B",
    eta: "Q3 2026",
    github: "https://github.com/calebnewtonusc/podium",
    url: "https://podium-tawny.vercel.app",
    tags: ["Kaggle", "AutoML", "Competition"],
  },
  {
    id: "greenlight-ci",
    name: "Greenlight CI",
    domain: "CI/CD Repair",
    tagline: "CI never stays broken.",
    description:
      "Turns failing CI green by opening minimal-risk PRs. Analyzes failure taxonomy — flaky test vs. dep drift vs. env issue — and generates minimal patches that stay green.",
    accent: "#22C55E",
    eta: "Q3 2026",
    github: "https://github.com/calebnewtonusc/greenlight-ci",
    url: "https://greenlight-ci.vercel.app",
    tags: ["DevOps", "CI/CD", "Automation"],
  },
  {
    id: "sealpatch",
    name: "SealPatch",
    domain: "Container Security",
    tagline: "Scanners report. SealPatch removes.",
    description:
      "Scans Dockerfiles and build artifacts, then opens PRs that reduce CVEs while preserving behavior. The gap between 'we found 240 CVEs' and 'here are 3 safe PRs that eliminate all of them'.",
    accent: "#EF4444",
    eta: "Q3 2026",
    github: "https://github.com/calebnewtonusc/sealpatch",
    url: "https://sealpatch.vercel.app",
    tags: ["Security", "Docker", "DevSecOps"],
  },
  {
    id: "upgradeshield",
    name: "UpgradeShield",
    domain: "Framework Migration",
    tagline: "Migration succeeded. Nothing broke. Proven.",
    description:
      "Prevents the most expensive kind of migration failure: tests passed, but behavior changed. Generates behavioral invariants and behavior-lock tests that catch semantic regressions.",
    accent: "#3B82F6",
    eta: "Q4 2026",
    github: "https://github.com/calebnewtonusc/upgradeshield",
    url: "https://upgradeshield.vercel.app",
    tags: ["Migration", "Testing", "Safety"],
  },
  {
    id: "evalforge",
    name: "EvalForge",
    domain: "AI Evaluation",
    tagline: "Evaluations that models can't game.",
    description:
      "Continuously generates contamination-resistant evaluation benchmarks. Probes for shortcuts, detects memorization, and tracks whether benchmark scores actually correlate with real-world performance.",
    accent: "#8B5CF6",
    eta: "Q4 2026",
    github: "https://github.com/calebnewtonusc/evalforge",
    url: "https://evalforge-five.vercel.app",
    tags: ["Evaluation", "Benchmarks", "Anti-Goodhart"],
  },
  {
    id: "fiduciaryos",
    name: "FiduciaryOS",
    domain: "Wealth Management",
    tagline: "Fiduciary-grade autonomous wealth management.",
    description:
      "Replaces wealth advisors with machine-checkable fiduciary constraints and a full audit trail. After-tax optimization, rebalancing, risk controls — with optional opt-in alpha sleeve.",
    accent: "#10B981",
    eta: "Q1 2027",
    github: "https://github.com/calebnewtonusc/fiduciaryos",
    url: "https://fiduciaryos.vercel.app",
    tags: ["Finance", "Fiduciary", "Wealth"],
  },
  {
    id: "flagfoundry",
    name: "FlagFoundry",
    domain: "Cybersecurity",
    tagline: "Every flag. Every time.",
    description:
      "CTF competition specialist trained on 50k+ writeups across web exploitation, binary exploitation, cryptography, forensics, and reverse engineering. Execution-verified via sandboxed Docker.",
    accent: "#F97316",
    eta: "Q4 2026",
    github: "https://github.com/calebnewtonusc/flagfoundry",
    url: "https://flagfoundry.vercel.app",
    tags: ["CTF", "Security", "Exploitation"],
  },
  {
    id: "proofcoach",
    name: "ProofCoach",
    domain: "Math Education",
    tagline: "Teaches like a grandmaster. Proves like a computer.",
    description:
      "Math olympiad tutor with Lean 4 proof verification. Diagnoses misconceptions, teaches through Socratic dialogue with multiple explanation approaches, and sequences practice to mastery.",
    accent: "#6366F1",
    eta: "Q4 2026",
    github: "https://github.com/calebnewtonusc/proofcoach",
    url: "https://proofcoach.vercel.app",
    tags: ["Math", "Education", "Olympiad"],
  },
  {
    id: "mergepilot",
    name: "MergePilot",
    domain: "Code Review",
    tagline: "Review → Improve → Merge. Automated.",
    description:
      "Turns code review into merged improvements. Generates minimal test-backed PRs that address architectural issues, security vulnerabilities, and performance — the kind of review that causes complete rewrites.",
    accent: "#0EA5E9",
    eta: "Q4 2026",
    github: "https://github.com/calebnewtonusc/mergepilot",
    url: "https://mergepilot.vercel.app",
    tags: ["Code Review", "GitHub", "Quality"],
  },
  {
    id: "perfsmith",
    name: "PerfSmith",
    domain: "Performance Optimization",
    tagline: "Profiles in. Patches out. Benchmarks prove it.",
    description:
      "Converts profiles and flame graphs into patches that provably improve latency. Understands hardware-specific optimization — cache hierarchy, branch prediction, SIMD — not just algorithmic complexity.",
    accent: "#F43F5E",
    eta: "Q1 2027",
    github: "https://github.com/calebnewtonusc/perfsmith",
    url: "https://perfsmith.vercel.app",
    tags: ["Performance", "Systems", "Profiling"],
  },
  {
    id: "querymedic",
    name: "QueryMedic",
    domain: "Database Optimization",
    tagline: "Diagnose. Prescribe. Prove faster.",
    description:
      "Takes real query workloads and EXPLAIN plans, then proposes indexes or rewrites that prove latency improvement while respecting write amplification and storage budgets.",
    accent: "#14B8A6",
    eta: "Q1 2027",
    github: "https://github.com/calebnewtonusc/querymedic",
    url: "https://querymedic.vercel.app",
    tags: ["Database", "PostgreSQL", "Query Optimization"],
  },
  {
    id: "oncallcompass",
    name: "OncallCompass",
    domain: "Incident Response",
    tagline: "Root cause found. MTTR crushed.",
    description:
      "Manages production incidents end-to-end: reads alerts, correlates symptoms, ranks root cause hypotheses, directs investigation, and drafts postmortems. Trained on 10,000+ real incident reports.",
    accent: "#D97706",
    eta: "Q1 2027",
    github: "https://github.com/calebnewtonusc/oncallcompass",
    url: "https://oncallcompass.vercel.app",
    tags: ["SRE", "Incidents", "On-Call"],
  },
  {
    id: "legacybridge",
    name: "LegacyBridge",
    domain: "Legacy Modernization",
    tagline: "Legacy modernized. Business logic preserved. Proven.",
    description:
      "Modernizes COBOL, Fortran, VB6, and MUMPS codebases while preserving ALL business logic with machine-verified tests. The $50B mainframe modernization market — solved.",
    accent: "#A16207",
    eta: "Q1 2027",
    github: "https://github.com/calebnewtonusc/legacybridge",
    url: "https://legacybridge-three.vercel.app",
    tags: ["COBOL", "Modernization", "Enterprise"],
  },
  {
    id: "mergecraft",
    name: "MergeCraft",
    domain: "Open Source",
    tagline: "Contributions that get merged.",
    description:
      "Generates open source contributions that actually merge — understands maintainer preferences, unwritten project conventions, PR scope rules, and the social dynamics that decide acceptance.",
    accent: "#16A34A",
    eta: "Q1 2027",
    github: "https://github.com/calebnewtonusc/mergecraft",
    url: "https://mergecraft.vercel.app",
    tags: ["Open Source", "GitHub", "Contributions"],
  },
  {
    id: "prizetrack",
    name: "PrizeTrack",
    domain: "Hackathons",
    tagline: "Built to win. Calibrated to judges.",
    description:
      "Hackathon optimization engine calibrated to specific judge rubrics and sponsor tracks. Trained on 200k+ Devpost submissions — understands why the same project wins one track and loses another.",
    accent: "#EAB308",
    eta: "Q2 2027",
    github: "https://github.com/calebnewtonusc/prizetrack",
    url: "https://prizetrack.vercel.app",
    tags: ["Hackathon", "Competition", "Pitching"],
  },
];
