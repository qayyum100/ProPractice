import { VocabularyItem, GrammarPattern } from '../types/english'

export const VOCABULARY_CURRICULUM: VocabularyItem[] = [
  {
    id: 'vocab_1',
    word: 'Pragmatic',
    phonetic: '/præɡˈmætɪk/',
    partOfSpeech: 'adjective',
    definition: 'Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations.',
    exampleSentence: 'She took a pragmatic approach to refactoring the legacy codebase without halting feature releases.',
    level: 'Level 3',
    category: 'business',
    synonyms: ['practical', 'realistic', 'sensible']
  },
  {
    id: 'vocab_2',
    word: 'Idempotent',
    phonetic: '/ˌaɪdəmˈpoʊtənt/',
    partOfSpeech: 'adjective',
    definition: 'An operation that can be applied multiple times without changing the result beyond the initial application.',
    exampleSentence: 'HTTP PUT and DELETE methods are designed to be idempotent to guarantee system resilience.',
    level: 'Level 4',
    category: 'developer',
    synonyms: ['repeatable', 'consistent', 'deterministic']
  },
  {
    id: 'vocab_3',
    word: 'Eloquent',
    phonetic: '/ˈɛləkwənt/',
    partOfSpeech: 'adjective',
    definition: 'Fluent or persuasive in speaking or writing.',
    exampleSentence: 'His eloquent summary of the quarterly roadmap won unanimous stakeholder approval.',
    level: 'Level 2',
    category: 'academic',
    synonyms: ['articulate', 'expressive', 'fluent']
  },
  {
    id: 'vocab_4',
    word: 'Ambiguity',
    phonetic: '/ˌæmbɪˈɡjuːəti/',
    partOfSpeech: 'noun',
    definition: 'The quality of being open to more than one interpretation; inexactness.',
    exampleSentence: 'Clear specification documents eliminate ambiguity for frontend and backend engineers alike.',
    level: 'Level 2',
    category: 'business',
    synonyms: ['uncertainty', 'vagueness', 'imprecision']
  },
  {
    id: 'vocab_5',
    word: 'Superfluous',
    phonetic: '/suːˈpɜːrfluəs/',
    partOfSpeech: 'adjective',
    definition: 'Unnecessary, especially through being more than enough.',
    exampleSentence: 'Removing superfluous logging statements reduced memory pressure on our production containers.',
    level: 'Level 4',
    category: 'developer',
    synonyms: ['redundant', 'excess', 'surplus']
  },
  {
    id: 'vocab_6',
    word: 'Meticulous',
    phonetic: '/məˈtɪkjələs/',
    partOfSpeech: 'adjective',
    definition: 'Showing great attention to detail; very careful and precise.',
    exampleSentence: 'The security audit team conducted a meticulous review of our authentication protocols.',
    level: 'Level 3',
    category: 'everyday',
    synonyms: ['diligent', 'thorough', 'fastidious']
  },
  {
    id: 'vocab_7',
    word: 'Iterative',
    phonetic: '/ˈɪtərətɪv/',
    partOfSpeech: 'adjective',
    definition: 'Relating to a process of repeating and refining steps to approach a desired result.',
    exampleSentence: 'The iterative development cycle enabled the team to gather user feedback after each two-week sprint.',
    level: 'Level 3',
    category: 'developer',
    synonyms: ['incremental', 'cyclic', 'repetitive']
  },
  {
    id: 'vocab_8',
    word: 'Concise',
    phonetic: '/kənˈsaɪs/',
    partOfSpeech: 'adjective',
    definition: 'Giving a lot of information clearly and in a few words; brief but comprehensive.',
    exampleSentence: 'A concise commit message that describes both the what and the why saves hours of debugging later.',
    level: 'Level 2',
    category: 'everyday',
    synonyms: ['brief', 'succinct', 'terse']
  },
  {
    id: 'vocab_9',
    word: 'Resilient',
    phonetic: '/rɪˈzɪliənt/',
    partOfSpeech: 'adjective',
    definition: 'Able to recover quickly from difficult conditions or disruptions.',
    exampleSentence: 'A resilient microservice architecture includes circuit breakers, fallback mechanisms, and graceful degradation patterns.',
    level: 'Level 3',
    category: 'developer',
    synonyms: ['robust', 'durable', 'fault-tolerant']
  },
  {
    id: 'vocab_10',
    word: 'Verbose',
    phonetic: '/vɜːrˈboʊs/',
    partOfSpeech: 'adjective',
    definition: 'Using more words than needed; characterized by unnecessary length and detail.',
    exampleSentence: 'Refactoring verbose error messages into structured log objects improved both readability and observability.',
    level: 'Level 3',
    category: 'developer',
    synonyms: ['wordy', 'prolix', 'long-winded']
  }
]

export const GRAMMAR_PATTERNS: GrammarPattern[] = [
  {
    id: 'gram_1',
    title: 'Conditional Type 3 (Past Unreal)',
    ruleExplanation: 'Used to talk about a condition in the past that did not happen, and the unreal past result.',
    commonMistake: 'If I would have known the bug, I would fix it.',
    correctUsage: 'If I had known about the bug, I would have fixed it before deployment.',
    practiceSentence: 'If the distributed cache had synchronized earlier, the API would have responded within ten milliseconds.',
    level: 'Level 3'
  },
  {
    id: 'gram_2',
    title: 'Subjunctive Mood in Recommendations',
    ruleExplanation: 'After verbs of demand or recommendation (insist, suggest, recommend), use the base form of the verb without "s".',
    commonMistake: 'The architect recommended that he writes unit tests first.',
    correctUsage: 'The architect recommended that he write unit tests first.',
    practiceSentence: 'We recommend that every engineer review the security guidelines before committing secrets to git repositories.',
    level: 'Level 4'
  },
  {
    id: 'gram_3',
    title: 'Parallel Structure in Series',
    ruleExplanation: 'Ensure all items in a list share the same grammatical form (e.g., all starting with imperative verbs or gerunds).',
    commonMistake: 'The engineer enjoys debugging code, refactoring tests, and to deploy containers.',
    correctUsage: 'The engineer enjoys debugging code, refactoring tests, and deploying containers.',
    practiceSentence: 'Our continuous integration pipeline automates building artifacts, executing unit tests, and verifying code coverage.',
    level: 'Level 2'
  },
  {
    id: 'gram_4',
    title: 'Active vs. Passive Voice',
    ruleExplanation: 'Prefer active voice in professional communication for clarity and directness. Use passive voice only when the actor is unknown or irrelevant.',
    commonMistake: 'The bug was introduced by the new deployment.',
    correctUsage: 'The new deployment introduced the bug. (or) An unknown actor introduced the bug.',
    practiceSentence: 'The engineering team deployed the hotfix within thirty minutes, restoring service availability for all affected customers.',
    level: 'Level 2'
  },
  {
    id: 'gram_5',
    title: 'That vs. Which (Restrictive Clauses)',
    ruleExplanation: '"That" introduces restrictive clauses that define the noun. "Which" introduces non-restrictive clauses that add extra information and are surrounded by commas.',
    commonMistake: 'The service which handles authentication crashed.',
    correctUsage: 'The service that handles authentication crashed. OR The auth service, which handles OAuth, crashed.',
    practiceSentence: 'The microservice that processes payment events must remain isolated from services which handle user profile data.',
    level: 'Level 3'
  },
  {
    id: 'gram_6',
    title: 'Nominalization (Avoiding Zombie Nouns)',
    ruleExplanation: 'Turning verbs into nouns ("implementation" of "implement") weakens writing. Use the verb form for stronger, clearer sentences.',
    commonMistake: 'The implementation of the cache layer was completed by the team.',
    correctUsage: 'The team implemented the cache layer.',
    practiceSentence: 'Engineers who communicate with precision consistently achieve better alignment with product managers and stakeholders.',
    level: 'Level 4'
  }
]
