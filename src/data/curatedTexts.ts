export interface CuratedText {
  id: string
  title: string
  category: 'speed' | 'accuracy' | 'english' | 'developer' | 'quote'
  difficulty: 'easy' | 'intermediate' | 'advanced'
  text: string
  author?: string
}

export const CURATED_TEXTS: CuratedText[] = [
  // ==================== SPEED TEXTS ====================
  {
    id: 'speed_warmup_1',
    title: 'Flow State Awakening',
    category: 'speed',
    difficulty: 'easy',
    text: 'Typing with consistent rhythm creates a natural sense of focus. Keep your hands relaxed, maintain steady breathing, and let your fingers glide effortlessly across the home row.'
  },
  {
    id: 'speed_warmup_2',
    title: 'Home Row Foundation',
    category: 'speed',
    difficulty: 'easy',
    text: 'The foundation of fast typing is the home row. Keep your fingers anchored on the letters A, S, D, F and J, K, L, semicolon. Return to this base after every keystroke.'
  },
  {
    id: 'speed_warmup_3',
    title: 'Muscle Memory',
    category: 'speed',
    difficulty: 'easy',
    text: 'Muscle memory develops through deliberate daily repetition. Each practice session builds the neural pathways that will eventually make fast, accurate typing feel completely natural and automatic.'
  },
  {
    id: 'speed_medium_1',
    title: 'The Art of Precision',
    category: 'speed',
    difficulty: 'intermediate',
    text: 'True speed emerges from flawless accuracy. When you eliminate hesitation and backspaces, your net words per minute increase automatically without extra physical effort or mental strain.'
  },
  {
    id: 'speed_medium_2',
    title: 'The Deliberate Typist',
    category: 'speed',
    difficulty: 'intermediate',
    text: 'Deliberate practice separates average typists from exceptional ones. Focus on eliminating your most common errors first, then gradually increase your pace as accuracy becomes automatic.'
  },
  {
    id: 'speed_medium_3',
    title: 'Rhythm and Flow',
    category: 'speed',
    difficulty: 'intermediate',
    text: 'Professional typists maintain a steady cadence regardless of word complexity. Rather than bursting and pausing, develop a consistent rhythm that carries you smoothly through even challenging passages.'
  },
  {
    id: 'speed_medium_4',
    title: 'Breaking the 60 WPM Barrier',
    category: 'speed',
    difficulty: 'intermediate',
    text: 'Surpassing sixty words per minute requires abandoning character-by-character thinking. You must train your brain to recognize entire words and common phrases as single motor units.'
  },
  {
    id: 'speed_hard_1',
    title: 'Cognitive Velocity',
    category: 'speed',
    difficulty: 'advanced',
    text: 'High-frequency keystroke cadence demands rapid word recognition and neuromuscular coordination. Skilled typists read several words ahead, preprocessing complex linguistic syntax before fingers depress each mechanical switch.'
  },
  {
    id: 'speed_hard_2',
    title: 'Elite Performance',
    category: 'speed',
    difficulty: 'advanced',
    text: 'Elite typists operating beyond one hundred words per minute demonstrate extraordinary visual processing bandwidth. They chunk entire clauses simultaneously while their motor system executes the previous sequence with zero conscious attention.'
  },
  {
    id: 'speed_hard_3',
    title: 'Sustained Endurance',
    category: 'speed',
    difficulty: 'advanced',
    text: 'Sustained high-speed typing across lengthy technical documents challenges both fine motor endurance and cognitive stamina simultaneously. Proper ergonomics, wrist angles, and deliberate micro-breaks prevent repetitive strain while maintaining peak throughput.'
  },

  // ==================== DEVELOPER TEXTS ====================
  {
    id: 'dev_auth_flow',
    title: 'JWT Authentication Architecture',
    category: 'developer',
    difficulty: 'intermediate',
    text: 'Verify the JSON Web Token in the authorization header before processing the request payload. Ensure claims are validated and check if the signature matches the public key stored securely.'
  },
  {
    id: 'dev_concurrency',
    title: 'Asynchronous Concurrency',
    category: 'developer',
    difficulty: 'advanced',
    text: 'Prevent race conditions by implementing distributed mutex locks or atomic compare-and-swap operations across your Redis cache cluster before writing state to the PostgreSQL primary database.'
  },
  {
    id: 'dev_pr_review',
    title: 'Pull Request Review',
    category: 'developer',
    difficulty: 'intermediate',
    text: 'LGTM with minor suggestions: Consider extracting the validation logic into a separate utility function to improve testability. The error handling in the catch block should also log the stack trace for better observability.'
  },
  {
    id: 'dev_incident',
    title: 'Incident Postmortem',
    category: 'developer',
    difficulty: 'advanced',
    text: 'Root cause analysis identified a cascading failure triggered by an unexpected null pointer in the payment processor. The system lacked circuit breakers, causing the service mesh to become overwhelmed with retry storms during the outage window.'
  },
  {
    id: 'dev_api_design',
    title: 'RESTful API Design',
    category: 'developer',
    difficulty: 'intermediate',
    text: 'Design idempotent endpoints using proper HTTP verbs and status codes. GET requests must never mutate state, while POST creates new resources. Use PATCH for partial updates and return appropriate 2xx, 4xx, or 5xx response codes.'
  },
  {
    id: 'dev_system_design',
    title: 'System Architecture RFC',
    category: 'developer',
    difficulty: 'advanced',
    text: 'Propose a horizontally scalable event-driven microservices architecture using Apache Kafka for asynchronous message queuing. Each bounded context should own its data store and communicate exclusively through well-defined domain events.'
  },
  {
    id: 'dev_git_workflow',
    title: 'Git Merge Conflict Resolution',
    category: 'developer',
    difficulty: 'intermediate',
    text: 'Rebase your feature branch onto the main branch to resolve conflicts cleanly. After resolving each conflicting hunk, stage the changes with git add and continue the rebase. Avoid force-pushing to shared branches without team coordination.'
  },
  {
    id: 'dev_docker',
    title: 'Container Deployment',
    category: 'developer',
    difficulty: 'intermediate',
    text: 'Build a multi-stage Dockerfile to separate the compilation environment from the production runtime image. Pin base image versions explicitly to ensure reproducible builds across development, staging, and production environments.'
  },

  // ==================== ENGLISH VOCABULARY TEXTS ====================
  {
    id: 'english_vocab_1',
    title: 'Clarity and Articulation',
    category: 'english',
    difficulty: 'intermediate',
    text: 'Articulating concise arguments requires an expansive lexicon and disciplined syntax. Strive to eliminate superfluous words while retaining persuasive nuance and intellectual clarity in every sentence.'
  },
  {
    id: 'english_idiom_1',
    title: 'Nuanced Discourse',
    category: 'english',
    difficulty: 'advanced',
    text: 'Subtle linguistic distinctions frequently convey profound implications in executive negotiations. Deliberate phrasing establishes authoritative yet empathetic collaboration that fosters trust across organizational boundaries.'
  },
  {
    id: 'english_professional_1',
    title: 'Professional Communication',
    category: 'english',
    difficulty: 'intermediate',
    text: 'Effective professional communication requires balancing precision with brevity. Every email, document, and verbal message should convey the intended meaning clearly while respecting the recipient\'s limited cognitive bandwidth.'
  },
  {
    id: 'english_academic_1',
    title: 'Academic Writing Style',
    category: 'english',
    difficulty: 'advanced',
    text: 'Scholarly writing demands rigorous citation practices, methodological transparency, and logically coherent argumentation. Assertions must be supported by empirical evidence and situated within the broader academic discourse of the field.'
  },

  // ==================== QUOTES ====================
  {
    id: 'quote_knuth',
    title: 'Premature Optimization',
    category: 'quote',
    difficulty: 'intermediate',
    author: 'Donald Knuth',
    text: 'Premature optimization is the root of all evil. Programmers waste enormous amounts of time thinking about the speed of noncritical parts of their programs, and these attempts at efficiency have a strong negative impact when debugging.'
  },
  {
    id: 'quote_jobs',
    title: 'Simplicity and Focus',
    category: 'quote',
    difficulty: 'easy',
    author: 'Steve Jobs',
    text: 'Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple. But it is worth it in the end because once you get there, you can move mountains.'
  },
  {
    id: 'quote_dijkstra',
    title: 'On Testing',
    category: 'quote',
    difficulty: 'intermediate',
    author: 'Edsger Dijkstra',
    text: 'Program testing can be used to show the presence of bugs, but never to show their absence. The art of programming is the art of organizing complexity and mastering the details that matter most.'
  },
  {
    id: 'quote_feynman',
    title: 'Understanding',
    category: 'quote',
    difficulty: 'easy',
    author: 'Richard Feynman',
    text: 'If you cannot explain something in simple terms, you do not understand it well enough. The first step to deep expertise is the humility to admit what you do not yet know and the curiosity to find out.'
  },
  {
    id: 'quote_linus',
    title: 'Talk is Cheap',
    category: 'quote',
    difficulty: 'easy',
    author: 'Linus Torvalds',
    text: 'Talk is cheap. Show me the code. The greatest ideas remain theoretical until someone sits down, writes the implementation, and ships it to users who can actually benefit from the work.'
  },
  {
    id: 'quote_fowler',
    title: 'Readable Code',
    category: 'quote',
    difficulty: 'intermediate',
    author: 'Martin Fowler',
    text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand. Readability is not a luxury but a fundamental quality of well-crafted software.'
  },
  {
    id: 'quote_uncle_bob',
    title: 'Clean Code',
    category: 'quote',
    difficulty: 'intermediate',
    author: 'Robert C. Martin',
    text: 'Clean code always looks like it was written by someone who cares deeply about their craft. It is not about being clever but about being clear, honest, and respectful of the readers who will maintain your work long after you have moved on.'
  },
  {
    id: 'quote_grace_hopper',
    title: 'On Debugging',
    category: 'quote',
    difficulty: 'easy',
    author: 'Grace Hopper',
    text: 'The most dangerous phrase in the language is: we have always done it this way. Innovation in software requires the courage to question assumptions and the discipline to validate new approaches rigorously.'
  },
]
