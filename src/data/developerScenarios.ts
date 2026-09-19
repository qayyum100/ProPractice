import { ScenarioPractice } from '../types/english'

export const DEVELOPER_SCENARIOS: ScenarioPractice[] = [
  {
    id: 'scenario_pr_review',
    title: 'Constructive Pull Request Review',
    category: 'pr_review',
    roleContext: 'Senior Engineer reviewing a Junior Developer\'s API rate limiter PR',
    textToType: 'Thanks for this PR! The token bucket logic looks solid overall. Could we extract the Redis key prefix into a shared constant, and add a test case verifying behavior when the cache times out?',
    targetVocabulary: ['token bucket', 'extract', 'prefix', 'constant', 'behavior'],
    keyTakeaway: 'Professional, encouraging tone paired with clear, actionable technical suggestions.',
    difficulty: 'intermediate'
  },
  {
    id: 'scenario_incident_postmortem',
    title: 'Production Incident Summary',
    category: 'incident',
    roleContext: 'Lead Architect writing an executive summary for a 15-minute database outage',
    textToType: 'Between 14:02 and 14:17 UTC, our primary PostgreSQL node experienced connection pool exhaustion due to an unindexed query in the billing service. Failover completed automatically, and read-replica traffic is now normalized.',
    targetVocabulary: ['exhaustion', 'unindexed', 'failover', 'replica', 'normalized'],
    keyTakeaway: 'Objective, blameless, fact-oriented technical communication with exact timelines.',
    difficulty: 'advanced'
  },
  {
    id: 'scenario_git_commit',
    title: 'Conventional Git Commit Message',
    category: 'documentation',
    roleContext: 'Submitting a clean git commit adhering to standard semantic specifications',
    textToType: 'feat(auth): add rate limiting middleware for OAuth token refresh endpoints to mitigate brute-force credential stuffing attempts.',
    targetVocabulary: ['middleware', 'mitigate', 'brute-force', 'credential stuffing'],
    keyTakeaway: 'Imperative mood, concise scope indicator, and clear rationale in commit history.',
    difficulty: 'beginner'
  },
  {
    id: 'scenario_client_email',
    title: 'Stakeholder Scope Alignment Email',
    category: 'email',
    roleContext: 'Tech Lead communicating a timeline adjustment to client stakeholders',
    textToType: 'Hi Sarah, based on our discovery findings regarding third-party payment API deprecation, we recommend prioritizing the migration phase in sprint five to prevent downstream checkout interruptions.',
    targetVocabulary: ['discovery', 'deprecation', 'prioritizing', 'downstream', 'interruptions'],
    keyTakeaway: 'Polite, proactive stakeholder communication framing risks as managed solutions.',
    difficulty: 'intermediate'
  },
  {
    id: 'scenario_arch_rfc',
    title: 'Architecture RFC Proposal',
    category: 'documentation',
    roleContext: 'Staff Engineer proposing an event-driven microservices migration',
    textToType: 'We propose migrating the monolithic order processing service to an event-driven architecture using Apache Kafka. Each bounded context will publish domain events to dedicated topics, enabling independent scaling and fault isolation.',
    targetVocabulary: ['event-driven', 'bounded context', 'domain events', 'fault isolation'],
    keyTakeaway: 'Technical precision with clear rationale for architectural decisions.',
    difficulty: 'advanced'
  },
  {
    id: 'scenario_code_review_comment',
    title: 'Diplomatic Code Review Feedback',
    category: 'pr_review',
    roleContext: 'Peer engineer reviewing production code for a critical security module',
    textToType: 'Great approach here! One consideration: this mutation currently bypasses our audit log middleware. Could we route it through the standard mutation wrapper to ensure all state changes remain traceable?',
    targetVocabulary: ['mutation', 'middleware', 'audit log', 'traceable'],
    keyTakeaway: 'Frame critical feedback as questions and collaborative suggestions.',
    difficulty: 'intermediate'
  },
  {
    id: 'scenario_sprint_retrospective',
    title: 'Sprint Retrospective Summary',
    category: 'email',
    roleContext: 'Scrum Master documenting outcomes from a sprint retrospective meeting',
    textToType: 'Team velocity improved by eighteen percent this sprint following the introduction of automated integration tests. The primary bottleneck remains unclear acceptance criteria, which we will address through refined story elaboration sessions.',
    targetVocabulary: ['velocity', 'integration tests', 'bottleneck', 'acceptance criteria'],
    keyTakeaway: 'Metrics-driven retrospective language with clear action items.',
    difficulty: 'intermediate'
  },
  {
    id: 'scenario_security_advisory',
    title: 'Security Vulnerability Advisory',
    category: 'documentation',
    roleContext: 'Security engineer issuing an internal advisory about a discovered vulnerability',
    textToType: 'ADVISORY: A reflected cross-site scripting vulnerability was discovered in the search parameter handler. All API consumers must upgrade to version 3.4.2 immediately. The payload sanitization patch has been deployed to production.',
    targetVocabulary: ['cross-site scripting', 'reflected', 'sanitization', 'payload'],
    keyTakeaway: 'Clear, urgent, and technically precise security communication.',
    difficulty: 'advanced'
  }
]
