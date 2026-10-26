import {
  EnglishLevelMeta,
  EnglishQuizQuestion,
  EnglishFocusTopic
} from '../types/englishQuiz'

export const ENGLISH_LEVELS_METADATA: EnglishLevelMeta[] = [
  {
    key: 'level_1',
    number: 1,
    title: 'Level 1: A1 Beginner Foundations',
    shortTitle: 'Level 1 (A1)',
    cefr: 'A1',
    badge: 'Beginner',
    description: 'Master the fundamentals: personal pronouns, present simple (to be, to have), articles (a/an/the), basic prepositions of time & place, question words, and essential everyday vocabulary.',
    topics: [
      'Subject & Object Pronouns',
      'Verb "To Be" & Present Simple',
      'Articles (A, An, The & Zero Article)',
      'Basic Prepositions (In, On, At)',
      'Wh- Question Words (What, Where, When, Who, Why)',
      'Plural Nouns & Demonstratives (This, That, These, Those)'
    ],
    iconName: 'Compass',
    color: {
      accent: '#10b981',
      border: 'border-emerald-500/20',
      bgLight: 'bg-emerald-50',
      bgDark: 'dark:bg-emerald-950/20',
      text: 'text-emerald-600 dark:text-emerald-400'
    }
  },
  {
    key: 'level_2',
    number: 2,
    title: 'Level 2: A2 Elementary Competence',
    shortTitle: 'Level 2 (A2)',
    cefr: 'A2',
    badge: 'Elementary',
    description: 'Expand your practical English: Past Simple regular and irregular verbs, Present Continuous vs Simple, Modal verbs of ability and permission (can, could, should), Comparatives, and Conjunctions.',
    topics: [
      'Past Simple (Regular & Irregular Verbs)',
      'Present Continuous vs. Present Simple',
      'Modal Verbs of Ability & Obligation (Can, Must, Should)',
      'Comparatives & Superlatives',
      'Prepositions of Movement & Direction',
      'Conjunctions & Linking Words (Because, Although, So)'
    ],
    iconName: 'BookOpen',
    color: {
      accent: '#06b6d4',
      border: 'border-cyan-500/20',
      bgLight: 'bg-cyan-50',
      bgDark: 'dark:bg-cyan-950/20',
      text: 'text-cyan-600 dark:text-cyan-400'
    }
  },
  {
    key: 'level_3',
    number: 3,
    title: 'Level 3: B1 Intermediate Fluency',
    shortTitle: 'Level 3 (B1)',
    cefr: 'B1',
    badge: 'Intermediate',
    description: 'Connect ideas smoothly: Present Perfect vs Past Simple, First & Second Conditionals, Essential Phrasal Verbs, Relative Clauses, and Workplace / Customer Service email etiquette.',
    topics: [
      'Present Perfect vs. Past Simple',
      'First & Second Conditionals (If Clauses)',
      'Essential Phrasal Verbs in Context',
      'Defining & Non-Defining Relative Clauses (Who, Which, That)',
      'Polite Requests & Professional Communication',
      'Countable vs. Uncountable Nouns & Quantifiers'
    ],
    iconName: 'Zap',
    color: {
      accent: '#3b82f6',
      border: 'border-blue-500/20',
      bgLight: 'bg-blue-50',
      bgDark: 'dark:bg-blue-950/20',
      text: 'text-blue-600 dark:text-blue-400'
    }
  },
  {
    key: 'level_4',
    number: 4,
    title: 'Level 4: B2 Upper-Intermediate Precision',
    shortTitle: 'Level 4 (B2)',
    cefr: 'B2',
    badge: 'Upper-Intermediate',
    description: 'Professional precision: Third Conditionals (unreal past), Passive Voice across complex tenses, Subjunctive mood, Parallel grammatical structures, and Business Idioms.',
    topics: [
      'Third Conditionals (Past Unreal & Regrets)',
      'Passive Voice in Formal Technical & Incident Reports',
      'Subjunctive Mood in Recommendations',
      'Parallel Structure in Series & Lists',
      'Reported Speech & Backshifting Rules',
      'Advanced Connectors (Moreover, Consequently, Nevertheless)'
    ],
    iconName: 'Sparkles',
    color: {
      accent: '#8b5cf6',
      border: 'border-purple-500/20',
      bgLight: 'bg-purple-50',
      bgDark: 'dark:bg-purple-950/20',
      text: 'text-purple-600 dark:text-purple-400'
    }
  },
  {
    key: 'level_5',
    number: 5,
    title: 'Level 5: C1/C2 Advanced & Professional Mastery',
    shortTitle: 'Level 5 (C1/C2)',
    cefr: 'C1/C2',
    badge: 'Mastery',
    description: 'Executive & technical mastery: Negative Inversion, Nuanced Academic & Developer vocabulary (pragmatic, idempotent, verbose), Mixed Conditionals, Nominalization reduction, and Diplomatic Tone.',
    topics: [
      'Negative & Limiting Inversion (Seldom, Rarely, Under no circumstances)',
      'Advanced Developer & Business Vocabulary (Pragmatic, Idempotent, Verbose)',
      'Nominalization Elimination (Active vs Zombie Nouns)',
      'Mixed Conditionals (Past Condition with Present Impact)',
      'Subtle Connotation & Diplomatic Tone Modulation',
      'Cleft Sentences for Focus & Emphasis'
    ],
    iconName: 'Crown',
    color: {
      accent: '#f59e0b',
      border: 'border-amber-500/20',
      bgLight: 'bg-amber-50',
      bgDark: 'dark:bg-amber-950/20',
      text: 'text-amber-600 dark:text-amber-400'
    }
  }
]

export const FOCUS_ENGLISH_TOPICS: EnglishFocusTopic[] = [
  {
    id: 'foc_tenses',
    title: 'Tenses & Verb Conjugations',
    shortTitle: 'Tenses & Verbs',
    badge: 'Grammar Core',
    query: 'tense',
    levelKey: 'level_2',
    description: 'Present Simple vs Continuous, Past Simple vs Present Perfect, and future aspects.'
  },
  {
    id: 'foc_conditionals',
    title: 'Conditionals (Zero, 1st, 2nd, 3rd & Mixed)',
    shortTitle: 'Conditionals',
    badge: 'Logic & If Clauses',
    query: 'conditional',
    levelKey: 'level_3',
    description: 'Master unreal situations, future possibilities, past regrets, and hypothetical conditions.'
  },
  {
    id: 'foc_prepositions',
    title: 'Prepositions & Phrasal Verbs',
    shortTitle: 'Prepositions & Verbs',
    badge: 'Usage & Collocations',
    query: 'preposition',
    levelKey: 'level_1',
    description: 'In/On/At rules, prepositions of movement, and high-yield workplace phrasal verbs.'
  },
  {
    id: 'foc_articles',
    title: 'Articles (A, An, The & Zero Article)',
    shortTitle: 'Articles (A/An/The)',
    badge: 'Accuracy',
    query: 'article',
    levelKey: 'level_1',
    description: 'Specific vs non-specific nouns, vowel sound rules (an hour vs a university), and unique entities.'
  },
  {
    id: 'foc_passive_modals',
    title: 'Passive Voice & Modal Verbs',
    shortTitle: 'Passive & Modals',
    badge: 'Tone & Register',
    query: 'passive',
    levelKey: 'level_4',
    description: 'Constructing formal technical reports, obligation vs deduction (must, might, should).'
  },
  {
    id: 'foc_subjunctive_inversion',
    title: 'Subjunctive Mood & Inversion',
    shortTitle: 'Subjunctive & Inversion',
    badge: 'Advanced C1',
    query: 'inversion',
    levelKey: 'level_5',
    description: 'Negative inversions (Rarely have I seen) and base-form subjunctive recommendations.'
  },
  {
    id: 'foc_vocabulary',
    title: 'Executive & Developer Vocabulary',
    shortTitle: 'High-Impact Vocab',
    badge: 'Vocabulary',
    query: 'vocabulary',
    levelKey: 'level_5',
    description: 'Precision words: pragmatic, concise, idempotent, resilient, meticulous, superfluous.'
  },
  {
    id: 'foc_business_comm',
    title: 'Workplace & Customer Communication',
    shortTitle: 'Business English',
    badge: 'Professional',
    query: 'communication',
    levelKey: 'level_3',
    description: 'Polite requests, constructive code reviews, de-escalation, and concise stakeholder emails.'
  }
]

export const VERIFIED_ENGLISH_QUESTION_BANK: EnglishQuizQuestion[] = [
  // =========================================================================
  // LEVEL 1: A1 BEGINNER FOUNDATIONS (11 Questions)
  // =========================================================================
  {
    id: 'eng-l1-001',
    level: 'level_1',
    levelNumber: 1,
    levelLabel: 'Level 1: A1 Beginner Foundations',
    topic: 'Articles (A vs. An)',
    difficulty: 'beginner',
    question: 'Which sentence correctly uses the indefinite article "a" or "an"?',
    options: [
      { id: 'opt_1', text: 'She has been waiting for an hour for the server deployment to finish.', distractorReason: '' },
      { id: 'opt_2', text: 'She has been waiting for a hour for the server deployment to finish.', distractorReason: '"Hour" begins with a silent "h", creating an initial vowel sound /aʊər/, so "an" is required.' },
      { id: 'opt_3', text: 'She has been waiting for an computer to arrive.', distractorReason: '"Computer" starts with a consonant sound /k/, so it takes "a", not "an".' },
      { id: 'opt_4', text: 'She has been waiting for a honest answer.', distractorReason: '"Honest" has a silent "h" and begins with a vowel sound, requiring "an honest answer".' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'The choice between "a" and "an" is determined by sound, not spelling. Because the "h" in "hour" is silent, the word begins with a vowel sound (/aʊər/), requiring "an hour". Conversely, words starting with consonant sounds take "a" (e.g. "a university" /juː/).',
    hint: 'Listen to the first sound of the word: vowel sounds take "an", consonant sounds take "a".',
    grammarRule: 'Use "an" before vowel sounds (a, e, i, o, u sounds) and "a" before consonant sounds.',
    exampleSentence: 'It took an hour to set up a new staging environment.',
    referenceCEFR: 'A1',
    isVerified: true
  },
  {
    id: 'eng-l1-002',
    level: 'level_1',
    levelNumber: 1,
    levelLabel: 'Level 1: A1 Beginner Foundations',
    topic: 'Verb "To Be" & Subject-Verb Agreement',
    difficulty: 'beginner',
    question: 'Choose the correct form of the verb "to be" to complete the sentence: "Neither of the systems _____ responding to the ping request."',
    options: [
      { id: 'opt_1', text: 'is', distractorReason: '' },
      { id: 'opt_2', text: 'are', distractorReason: '"Neither" is a singular indefinite pronoun when followed by "of the [plural noun]" in formal English, requiring the singular verb "is".' },
      { id: 'opt_3', text: 'were being', distractorReason: 'Grammatically awkward and introduces unnecessary progressive passive.' },
      { id: 'opt_4', text: 'be', distractorReason: '"Be" is the uninflected base form and cannot act as the main present tense verb here.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'In standard English, the indefinite pronoun "neither" is grammatically singular when used as the subject ("Neither of the systems is..."). It refers to "not one nor the other individually", taking a singular verb.',
    hint: '"Neither" means "not one or the other", which behaves as a singular subject.',
    grammarRule: '"Neither of + plural noun" takes a singular verb in formal grammar.',
    exampleSentence: 'Neither of the databases is currently available for write operations.',
    referenceCEFR: 'A1',
    isVerified: true
  },
  {
    id: 'eng-l1-003',
    level: 'level_1',
    levelNumber: 1,
    levelLabel: 'Level 1: A1 Beginner Foundations',
    topic: 'Prepositions of Time (In, On, At)',
    difficulty: 'beginner',
    question: 'Select the sentence with the correct preposition of time:',
    options: [
      { id: 'opt_1', text: 'Our sprint retrospective meeting starts at 3:00 PM on Friday in October.', distractorReason: '' },
      { id: 'opt_2', text: 'Our sprint retrospective meeting starts on 3:00 PM at Friday in October.', distractorReason: '"On" is used for days/dates, while "at" is required for precise clock times.' },
      { id: 'opt_3', text: 'Our sprint retrospective meeting starts in 3:00 PM on Friday at October.', distractorReason: '"In" cannot be used for specific clock times, and "at" is incorrect for months.' },
      { id: 'opt_4', text: 'Our sprint retrospective meeting starts at 3:00 PM in Friday on October.', distractorReason: 'Days of the week require "on", and months alone require "in".' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'The standard preposition rule of time: use "at" for precise clock times (at 3:00 PM), "on" for days and dates (on Friday, on October 26th), and "in" for longer periods such as months, years, and seasons (in October, in 2026).',
    hint: 'Clock times take "at", days of the week take "on", and months take "in".',
    grammarRule: 'At + precise time; On + day/date; In + month/year/season.',
    exampleSentence: 'The conference begins at 9:00 AM on Monday in November.',
    referenceCEFR: 'A1',
    isVerified: true
  },
  {
    id: 'eng-l1-004',
    level: 'level_1',
    levelNumber: 1,
    levelLabel: 'Level 1: A1 Beginner Foundations',
    topic: 'Pronouns (Subject vs. Object)',
    difficulty: 'beginner',
    question: 'Which pronoun correctly completes this sentence? "The team lead asked Sarah and _____ to review the pull request."',
    options: [
      { id: 'opt_1', text: 'me', distractorReason: '' },
      { id: 'opt_2', text: 'I', distractorReason: '"I" is a subject pronoun. Here, the pronoun is the object of the verb "asked" ("asked me").' },
      { id: 'opt_3', text: 'myself', distractorReason: 'Reflexive pronouns are only used when the subject and object are the same person ("I asked myself").' },
      { id: 'opt_4', text: 'mine', distractorReason: '"Mine" is a possessive pronoun, not an object pronoun.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'To determine whether to use "I" or "me" in compound objects, remove the other person: "The team lead asked me to review..." (not "asked I"). Therefore, "Sarah and me" is the correct compound object of the transitive verb "asked".',
    hint: 'Remove "Sarah and" to test: would you say "asked I" or "asked me"?',
    grammarRule: 'Use object pronouns (me, him, her, us, them) as objects of verbs and prepositions.',
    exampleSentence: 'Management invited David and me to present the system architecture.',
    referenceCEFR: 'A1',
    isVerified: true
  },
  {
    id: 'eng-l1-005',
    level: 'level_1',
    levelNumber: 1,
    levelLabel: 'Level 1: A1 Beginner Foundations',
    topic: 'Wh- Question Words',
    difficulty: 'beginner',
    question: 'Which question word correctly inquires about the manner or method in which an operation was executed?',
    options: [
      { id: 'opt_1', text: 'How', distractorReason: '' },
      { id: 'opt_2', text: 'Whose', distractorReason: '"Whose" asks about possession/ownership, not method.' },
      { id: 'opt_3', text: 'Where', distractorReason: '"Where" asks about physical or logical location, not manner.' },
      { id: 'opt_4', text: 'Which', distractorReason: '"Which" asks for a choice among alternatives, not method.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: '"How" is the interrogative adverb used to ask about manner, condition, or the method used to accomplish an action (e.g. "How did you resolve the latency issue?").',
    hint: 'Which word asks "by what method or process"?',
    grammarRule: '"How" asks about manner or process; "Why" asks about reasons; "Where" asks about location.',
    exampleSentence: 'How did you configure the load balancer to distribute incoming traffic?',
    referenceCEFR: 'A1',
    isVerified: true
  },
  {
    id: 'eng-l1-006',
    level: 'level_1',
    levelNumber: 1,
    levelLabel: 'Level 1: A1 Beginner Foundations',
    topic: 'Present Simple Negation',
    difficulty: 'beginner',
    question: 'Complete the sentence with correct present simple negation: "He _____ have access to the production database."',
    options: [
      { id: 'opt_1', text: "doesn't", distractorReason: '' },
      { id: 'opt_2', text: "don't", distractorReason: '"Don\'t" is used with I/you/we/they. Third-person singular (he/she/it) requires "doesn\'t".' },
      { id: 'opt_3', text: 'no', distractorReason: '"No" cannot negate an English main verb in standard grammar.' },
      { id: 'opt_4', text: "isn't", distractorReason: '"Isn\'t" is the negation of "to be", not the auxiliary for the lexical verb "have".' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'In the present simple, third-person singular subjects (he, she, it) form negative statements using the auxiliary "does not" ("doesn\'t") followed by the bare infinitive of the main verb ("have").',
    hint: 'Third-person singular subjects (he/she/it) require "does not" + base verb.',
    grammarRule: 'Subject (he/she/it) + does not + bare infinitive verb.',
    exampleSentence: 'She does not have permission to delete the primary repository branch.',
    referenceCEFR: 'A1',
    isVerified: true
  },
  {
    id: 'eng-l1-007',
    level: 'level_1',
    levelNumber: 1,
    levelLabel: 'Level 1: A1 Beginner Foundations',
    topic: 'Demonstrative Pronouns (This, That, These, Those)',
    difficulty: 'beginner',
    question: 'Which sentence correctly refers to multiple items located near the speaker?',
    options: [
      { id: 'opt_1', text: 'These laptops on my desk are ready for configuration.', distractorReason: '' },
      { id: 'opt_2', text: 'This laptops on my desk are ready for configuration.', distractorReason: '"This" is singular and cannot modify the plural noun "laptops".' },
      { id: 'opt_3', text: 'Those laptops on my desk are ready for configuration.', distractorReason: '"Those" denotes distance from the speaker, whereas "on my desk" indicates proximity (near).' },
      { id: 'opt_4', text: 'That laptops on my desk are ready for configuration.', distractorReason: '"That" is singular and distant.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: '"These" is the plural demonstrative used for multiple items that are near the speaker in space or time ("These laptops here on my desk").',
    hint: '"These" is plural and nearby; "Those" is plural and far away.',
    grammarRule: 'This (singular, near), That (singular, far), These (plural, near), Those (plural, far).',
    exampleSentence: 'These documents here on my screen need your immediate signature.',
    referenceCEFR: 'A1',
    isVerified: true
  },
  {
    id: 'eng-l1-008',
    level: 'level_1',
    levelNumber: 1,
    levelLabel: 'Level 1: A1 Beginner Foundations',
    topic: 'Prepositions of Place (In vs. On vs. At)',
    difficulty: 'beginner',
    question: 'Which preposition correctly completes the sentence: "The customer support representative is sitting _____ her desk _____ the fifth floor?"',
    options: [
      { id: 'opt_1', text: 'at / on', distractorReason: '' },
      { id: 'opt_2', text: 'in / in', distractorReason: 'Floors of a building take "on" (on the fifth floor), not "in".' },
      { id: 'opt_3', text: 'on / at', distractorReason: 'Sitting "on her desk" implies sitting on top of the physical furniture instead of working "at" it.' },
      { id: 'opt_4', text: 'to / on', distractorReason: '"To" denotes direction/movement, not stationary location.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'One works "at a desk" (a specific work point or station) and is located "on the fifth floor" of a building (floors take the preposition "on").',
    hint: 'Workstations take "at", and floor levels of a building take "on".',
    grammarRule: 'At a desk/table/station; On a floor/street/surface.',
    exampleSentence: 'She works at her terminal on the second floor of the technology center.',
    referenceCEFR: 'A1',
    isVerified: true
  },
  {
    id: 'eng-l1-009',
    level: 'level_1',
    levelNumber: 1,
    levelLabel: 'Level 1: A1 Beginner Foundations',
    topic: 'Basic Plurals & Irregular Nouns',
    difficulty: 'beginner',
    question: 'What is the correct plural form of the irregular noun "criterion"?',
    options: [
      { id: 'opt_1', text: 'criteria', distractorReason: '' },
      { id: 'opt_2', text: 'criterions', distractorReason: '"Criterions" is non-standard; Greek-origin nouns ending in -on form plurals with -a.' },
      { id: 'opt_3', text: 'criterias', distractorReason: '"Criteria" is already plural; adding an "s" is a common error of double-pluralization.' },
      { id: 'opt_4', text: 'criterium', distractorReason: '"Criterium" is a bicycle racing event, not the plural of criterion.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: '"Criterion" (singular) derives from Greek and forms its plural as "criteria" (plural). Because "criteria" is plural, it takes a plural verb: "The acceptance criteria are satisfied."',
    hint: 'Think of Greek loanwords: phenomenon -> phenomena, criterion -> criteria.',
    grammarRule: 'Nouns ending in -on often pluralize to -a (criterion -> criteria).',
    exampleSentence: 'All quality assurance criteria were thoroughly verified before release.',
    referenceCEFR: 'A1',
    isVerified: true
  },
  {
    id: 'eng-l1-010',
    level: 'level_1',
    levelNumber: 1,
    levelLabel: 'Level 1: A1 Beginner Foundations',
    topic: 'Articles (The vs. Zero Article)',
    difficulty: 'beginner',
    question: 'In which sentence is the definite article "the" used correctly?',
    options: [
      { id: 'opt_1', text: 'Information security is essential for protecting customer data.', distractorReason: '' },
      { id: 'opt_2', text: 'The information security is essential for all.', distractorReason: 'Uncountable concepts in general statements take the zero article (no "the").' },
      { id: 'opt_3', text: 'He likes the coffee in the mornings.', distractorReason: 'General food/drink preferences take zero article: "He likes coffee".' },
      { id: 'opt_4', text: 'The engineers write the code every day.', distractorReason: 'General statements about professions and tasks do not require "the" before non-specific nouns.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'When speaking about abstract concepts or mass nouns in general (like "information security", "patience", "technology"), English uses the zero article (no "the"). "The" is only used when referring to a specific instance (e.g. "The information security policy of our company").',
    hint: 'General statements about abstract subjects do not take "the".',
    grammarRule: 'Use zero article (no article) with plural or uncountable nouns when speaking generally.',
    exampleSentence: 'Software engineering requires discipline and continuous learning.',
    referenceCEFR: 'A1',
    isVerified: true
  },
  {
    id: 'eng-l1-011',
    level: 'level_1',
    levelNumber: 1,
    levelLabel: 'Level 1: A1 Beginner Foundations',
    topic: 'Subject Pronoun Agreement',
    difficulty: 'beginner',
    question: 'Complete the sentence: "Every team member must submit _____ weekly timesheet by Friday afternoon."',
    options: [
      { id: 'opt_1', text: 'their', distractorReason: '' },
      { id: 'opt_2', text: 'its', distractorReason: '"Its" refers to inanimate objects, not human team members.' },
      { id: 'opt_3', text: 'theirs', distractorReason: '"Theirs" is an independent possessive pronoun (e.g. "The timesheet is theirs"), not an adjective modifying "timesheet".' },
      { id: 'opt_4', text: 'they', distractorReason: '"They" is a subject pronoun, not a possessive determiner.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'Singular "their" is standard in contemporary English as a gender-neutral singular possessive determiner referring back to indefinite distributive expressions like "every team member" or "everyone".',
    hint: 'Use the gender-neutral possessive adjective "their".',
    grammarRule: 'Singular "their" is used with indefinite pronouns like "everybody", "everyone", or "every person".',
    exampleSentence: 'Every customer should receive their tracking confirmation immediately.',
    referenceCEFR: 'A1',
    isVerified: true
  },
  {
    id: 'eng-l1-012',
    level: 'level_1',
    levelNumber: 1,
    levelLabel: 'Level 1: A1 Beginner Foundations',
    topic: 'Articles (The with Superlatives & Unique Entities)',
    difficulty: 'beginner',
    question: 'Which sentence correctly uses the definite article "the" with a superlative adjective?',
    options: [
      { id: 'opt_1', text: 'Reducing latency is the highest priority issue for our engineering team this quarter.', distractorReason: '' },
      { id: 'opt_2', text: 'Reducing latency is a highest priority issue for our engineering team this quarter.', distractorReason: 'Superlative adjectives (highest, best, fastest) require the definite article "the" because they designate a unique extreme degree.' },
      { id: 'opt_3', text: 'Reducing latency is highest priority issue for our engineering team this quarter.', distractorReason: 'Missing the required definite article "the" before the superlative adjective.' },
      { id: 'opt_4', text: 'Reducing latency is an highest priority issue for our engineering team this quarter.', distractorReason: 'Ungrammatical pairing of indefinite article "an" with a superlative.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'Superlative adjectives (highest, fastest, most reliable, best) identify a singular, supreme entity or condition within a group. Because that entity is unique, English universally requires the definite article "the" before superlatives.',
    hint: 'Superlatives describing the extreme degree (highest, best) always take "the".',
    grammarRule: 'Use the definite article "the" before all superlative adjectives (the best, the highest).',
    exampleSentence: 'Customer trust is the most critical foundation of our business.',
    referenceCEFR: 'A1',
    isVerified: true
  },

  // =========================================================================
  // LEVEL 2: A2 ELEMENTARY COMPETENCE (11 Questions)
  // =========================================================================
  {
    id: 'eng-l2-001',
    level: 'level_2',
    levelNumber: 2,
    levelLabel: 'Level 2: A2 Elementary Competence',
    topic: 'Tenses: Past Simple vs. Present Continuous',
    difficulty: 'beginner',
    question: 'Choose the sentence that correctly contrasts an ongoing action with a completed past action:',
    options: [
      { id: 'opt_1', text: 'While the lead developer was explaining the pull request, the server crashed.', distractorReason: '' },
      { id: 'opt_2', text: 'While the lead developer explained the pull request, the server was crashed.', distractorReason: '"Was crashed" is an incorrect passive form of the intransitive verb "crash".' },
      { id: 'opt_3', text: 'While the lead developer is explaining the pull request, the server crashed yesterday.', distractorReason: 'Mismatches present continuous with past tense "yesterday".' },
      { id: 'opt_4', text: 'While the lead developer was explained the pull request, the server crashes.', distractorReason: 'Incorrect passive form and conflicting present tense.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'The past continuous ("was explaining") describes a longer, ongoing activity in the past that was interrupted by a shorter, completed action in the past simple ("the server crashed").',
    hint: 'Use the past continuous for the background ongoing action and past simple for the interrupting event.',
    grammarRule: 'Past Continuous (background action) + Past Simple (interruption).',
    exampleSentence: 'While we were running the performance benchmark, the network connection dropped.',
    referenceCEFR: 'A2',
    isVerified: true
  },
  {
    id: 'eng-l2-002',
    level: 'level_2',
    levelNumber: 2,
    levelLabel: 'Level 2: A2 Elementary Competence',
    topic: 'Comparatives & Superlatives',
    difficulty: 'beginner',
    question: 'Which sentence correctly uses the comparative form of the adjective "fast"?',
    options: [
      { id: 'opt_1', text: 'The new caching algorithm is significantly faster than the legacy implementation.', distractorReason: '' },
      { id: 'opt_2', text: 'The new caching algorithm is more faster than the legacy implementation.', distractorReason: 'Double comparative error: never combine "more" with one-syllable "-er" adjectives.' },
      { id: 'opt_3', text: 'The new caching algorithm is fast than the legacy implementation.', distractorReason: 'Missing the comparative suffix "-er".' },
      { id: 'opt_4', text: 'The new caching algorithm is the most fast of all.', distractorReason: 'Single-syllable adjectives take "-est" for superlatives ("fastest"), not "most fast".' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'Single-syllable adjectives form their comparative by adding "-er" ("fast" -> "faster"). Combining "more" with "-er" (e.g. "more faster") is a double-comparative error and strictly ungrammatical.',
    hint: 'Single-syllable adjectives add "-er". Never say "more faster".',
    grammarRule: 'One-syllable adjectives: base + -er + than.',
    exampleSentence: 'Fiber optic connections are much faster than copper cabling.',
    referenceCEFR: 'A2',
    isVerified: true
  },
  {
    id: 'eng-l2-003',
    level: 'level_2',
    levelNumber: 2,
    levelLabel: 'Level 2: A2 Elementary Competence',
    topic: 'Modal Verbs (Can, Could, Should, Must)',
    difficulty: 'beginner',
    question: 'Which modal verb expresses strong necessity or mandatory obligation in workplace SOPs?',
    options: [
      { id: 'opt_1', text: 'must', distractorReason: '' },
      { id: 'opt_2', text: 'might', distractorReason: '"Might" expresses weak possibility or uncertainty, not mandatory compliance.' },
      { id: 'opt_3', text: 'could', distractorReason: '"Could" expresses past ability or polite suggestion, not mandatory rule.' },
      { id: 'opt_4', text: 'would', distractorReason: '"Would" expresses conditional outcome or past habitual action.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: '"Must" expresses imperative necessity and non-negotiable obligation. In customer service and engineering SOPs, "must" indicates a strict requirement (e.g. "Representatives must verify customer identity").',
    hint: 'Which modal verb expresses an essential, mandatory obligation?',
    grammarRule: '"Must" = mandatory obligation; "Should" = strong advice; "Might" = possibility.',
    exampleSentence: 'All employees must enable multi-factor authentication on their corporate accounts.',
    referenceCEFR: 'A2',
    isVerified: true
  },
  {
    id: 'eng-l2-004',
    level: 'level_2',
    levelNumber: 2,
    levelLabel: 'Level 2: A2 Elementary Competence',
    topic: 'Tenses: Past Simple Irregular Verbs',
    difficulty: 'beginner',
    question: 'Identify the correct irregular past simple verb forms to complete the sentence: "The lead architect _____ the requirements document and _____ it to the repository."',
    options: [
      { id: 'opt_1', text: 'wrote / committed', distractorReason: '' },
      { id: 'opt_2', text: 'writed / commited', distractorReason: '"Writed" is non-existent; the past of "write" is "wrote". Also "committed" has double "t".' },
      { id: 'opt_3', text: 'written / commit', distractorReason: '"Written" is a past participle and requires an auxiliary verb (e.g. "had written").' },
      { id: 'opt_4', text: 'writes / commiting', distractorReason: 'Mismatches present tense with an unassisted gerund.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'The verb "write" is irregular (write -> wrote -> written). The past simple of "commit" doubles the final consonant before adding "-ed" (commit -> committed).',
    hint: 'Past simple of write is wrote; past of commit is committed.',
    grammarRule: 'Irregular verbs undergo internal vowel shifts in past simple (write -> wrote).',
    exampleSentence: 'The engineer wrote a diagnostic script and committed the changes yesterday.',
    referenceCEFR: 'A2',
    isVerified: true
  },
  {
    id: 'eng-l2-005',
    level: 'level_2',
    levelNumber: 2,
    levelLabel: 'Level 2: A2 Elementary Competence',
    topic: 'Prepositions of Movement',
    difficulty: 'beginner',
    question: 'Which preposition expresses movement entering into an enclosed container or system?',
    options: [
      { id: 'opt_1', text: 'into', distractorReason: '' },
      { id: 'opt_2', text: 'onto', distractorReason: '"Onto" expresses movement toward a flat surface (e.g. onto the table).' },
      { id: 'opt_3', text: 'across', distractorReason: '"Across" expresses movement from one side of an area to another.' },
      { id: 'opt_4', text: 'through', distractorReason: '"Through" means entering one side and exiting the other, not insertion into a space.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: '"Into" denotes movement resulting in being inside something (e.g. "inserting data into the database", "walking into the office"). "In" indicates stationary location, whereas "into" indicates dynamic movement.',
    hint: 'Movement from outside to inside uses "into".',
    grammarRule: 'Into = motion toward the inside of a space or container.',
    exampleSentence: 'The developer ingested raw log files into the analytics pipeline.',
    referenceCEFR: 'A2',
    isVerified: true
  },
  {
    id: 'eng-l2-006',
    level: 'level_2',
    levelNumber: 2,
    levelLabel: 'Level 2: A2 Elementary Competence',
    topic: 'Conjunctions (Although vs. Because vs. But)',
    difficulty: 'beginner',
    question: 'Select the conjunction that correctly shows an unexpected contrast: "_____ the system passed all automated tests, users experienced slow response times."',
    options: [
      { id: 'opt_1', text: 'Although', distractorReason: '' },
      { id: 'opt_2', text: 'Because', distractorReason: '"Because" introduces a cause-and-effect reason, not a concession or contrast.' },
      { id: 'opt_3', text: 'Since', distractorReason: '"Since" means because or from a time in the past, failing to show contrast.' },
      { id: 'opt_4', text: 'Unless', distractorReason: '"Unless" introduces a negative condition (meaning "if not").' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: '"Although" is a subordinating conjunction used to introduce a dependent clause that contrasts with or qualifies the main clause (concession).',
    hint: 'Look for the word meaning "even though" or "in spite of the fact that".',
    grammarRule: '"Although / Even though" introduces concessive clauses showing contrast.',
    exampleSentence: 'Although the team worked under tight deadlines, the software was delivered with zero critical bugs.',
    referenceCEFR: 'A2',
    isVerified: true
  },
  {
    id: 'eng-l2-007',
    level: 'level_2',
    levelNumber: 2,
    levelLabel: 'Level 2: A2 Elementary Competence',
    topic: 'Future Expressions (Will vs. Going To)',
    difficulty: 'beginner',
    question: 'Which sentence correctly uses "be going to" for a pre-planned event?',
    options: [
      { id: 'opt_1', text: 'We are going to migrate the database this Saturday because the maintenance window is already approved.', distractorReason: '' },
      { id: 'opt_2', text: 'We will going to migrate the database this Saturday.', distractorReason: 'Cannot combine modal "will" with "going to".' },
      { id: 'opt_3', text: 'We are go to migrate the database this Saturday.', distractorReason: 'Missing "-ing" on "going".' },
      { id: 'opt_4', text: 'We will to migrate the database this Saturday.', distractorReason: 'Modal "will" is followed directly by bare infinitive without "to".' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: '"Be going to + base verb" is used for intentions and plans decided before the moment of speaking (e.g. "We are going to migrate"). "Will" is preferred for spontaneous decisions made at the moment of speaking or formal predictions.',
    hint: 'Use "am/is/are going to" for prior arrangements and planned actions.',
    grammarRule: 'Subject + be (am/is/are) + going to + bare infinitive for prior plans.',
    exampleSentence: 'The engineering department is going to hire five new frontend engineers next quarter.',
    referenceCEFR: 'A2',
    isVerified: true
  },
  {
    id: 'eng-l2-008',
    level: 'level_2',
    levelNumber: 2,
    levelLabel: 'Level 2: A2 Elementary Competence',
    topic: 'Adverbs of Frequency',
    difficulty: 'beginner',
    question: 'Where is the adverb of frequency "always" placed in relation to the main verb "test"?',
    options: [
      { id: 'opt_1', text: 'We always test our code before pushing it to production.', distractorReason: '' },
      { id: 'opt_2', text: 'We test always our code before pushing it to production.', distractorReason: 'Adverbs of frequency must not be placed between the verb and its direct object.' },
      { id: 'opt_3', text: 'Always we test our code before pushing it to production.', distractorReason: 'Unnatural word order in standard English for mid-sentence adverbs.' },
      { id: 'opt_4', text: 'We test our code always before pushing it to production.', distractorReason: 'Placing "always" after the direct object is awkward.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'Adverbs of frequency (always, often, usually, never) precede lexical main verbs (e.g. "We always test"), but follow the verb "to be" (e.g. "The system is always online") and auxiliary verbs (e.g. "We have always tested").',
    hint: 'Adverbs of frequency go BEFORE regular verbs, but AFTER the verb "to be".',
    grammarRule: 'Subject + adverb of frequency + main verb.',
    exampleSentence: 'Senior engineers always review critical database migrations before execution.',
    referenceCEFR: 'A2',
    isVerified: true
  },
  {
    id: 'eng-l2-009',
    level: 'level_2',
    levelNumber: 2,
    levelLabel: 'Level 2: A2 Elementary Competence',
    topic: 'Quantifiers (Few vs. Little vs. Less vs. Fewer)',
    difficulty: 'beginner',
    question: 'Which sentence correctly applies the rule for countable versus uncountable quantifiers?',
    options: [
      { id: 'opt_1', text: 'The new release contains fewer bugs and consumes less memory.', distractorReason: '' },
      { id: 'opt_2', text: 'The new release contains less bugs and consumes fewer memory.', distractorReason: 'Inverted: "bugs" is countable (requires fewer) and "memory" is uncountable (requires less).' },
      { id: 'opt_3', text: 'The new release contains fewer bugs and consumes fewer memory.', distractorReason: '"Memory" is an uncountable noun and cannot take "fewer".' },
      { id: 'opt_4', text: 'The new release contains little bugs and consumes few memory.', distractorReason: 'Mismatched quantifiers.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'Use "fewer" with plural countable nouns (e.g. fewer bugs, fewer tickets, fewer servers). Use "less" with singular uncountable nouns (e.g. less memory, less latency, less time).',
    hint: 'Countable items take "fewer"; uncountable quantities take "less".',
    grammarRule: 'Fewer + countable plural nouns; Less + uncountable singular nouns.',
    exampleSentence: 'With fewer manual steps, the deployment pipeline experienced less downtime.',
    referenceCEFR: 'A2',
    isVerified: true
  },
  {
    id: 'eng-l2-010',
    level: 'level_2',
    levelNumber: 2,
    levelLabel: 'Level 2: A2 Elementary Competence',
    topic: 'Question Formation with Do/Does/Did',
    difficulty: 'beginner',
    question: 'Which question is formed correctly in the past simple?',
    options: [
      { id: 'opt_1', text: 'Did the customer receive the replacement package yesterday?', distractorReason: '' },
      { id: 'opt_2', text: 'Did the customer received the replacement package yesterday?', distractorReason: 'Double past tense error: after the auxiliary "did", the lexical verb must remain in its bare infinitive form ("receive").' },
      { id: 'opt_3', text: 'Does the customer received the replacement package yesterday?', distractorReason: 'Cannot use present auxiliary "does" with past time marker "yesterday".' },
      { id: 'opt_4', text: 'Did the customer receives the replacement package yesterday?', distractorReason: 'Cannot add third-person "-s" after the auxiliary "did".' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'When forming questions in the past simple, the auxiliary "did" marks the tense, so the main verb must remain in the bare base form (infinitive): "Did + subject + bare infinitive" (Did you receive...).',
    hint: 'After "Did", the main verb is always in its base form (no -ed, no -s).',
    grammarRule: 'Did + subject + bare base verb.',
    exampleSentence: 'Did the delivery driver scan the package at the front porch?',
    referenceCEFR: 'A2',
    isVerified: true
  },
  {
    id: 'eng-l2-011',
    level: 'level_2',
    levelNumber: 2,
    levelLabel: 'Level 2: A2 Elementary Competence',
    topic: 'Gerund vs. Infinitive after Verbs',
    difficulty: 'beginner',
    question: 'Which sentence correctly uses the gerund after the verb "enjoy"?',
    options: [
      { id: 'opt_1', text: 'The engineers enjoy collaborating on open-source libraries.', distractorReason: '' },
      { id: 'opt_2', text: 'The engineers enjoy to collaborate on open-source libraries.', distractorReason: '"Enjoy" must be followed by a gerund (-ing), never a to-infinitive.' },
      { id: 'opt_3', text: 'The engineers enjoy collaborate on open-source libraries.', distractorReason: 'Missing "-ing" form after "enjoy".' },
      { id: 'opt_4', text: 'The engineers are enjoy collaborating.', distractorReason: 'Incorrect auxiliary pairing with "are enjoy".' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'Certain English verbs (enjoy, avoid, consider, finish, suggest) must be followed by a gerund (verb + -ing), not a full to-infinitive.',
    hint: 'Verbs of enjoyment and avoidance take the gerund (-ing form).',
    grammarRule: 'Enjoy + gerund (-ing).',
    exampleSentence: 'Support associates enjoy helping customers resolve complex order inquiries.',
    referenceCEFR: 'A2',
    isVerified: true
  },
  {
    id: 'eng-l2-012',
    level: 'level_2',
    levelNumber: 2,
    levelLabel: 'Level 2: A2 Elementary Competence',
    topic: 'Passive Voice in Warehouse & Logistics Instructions',
    difficulty: 'beginner',
    question: 'Select the sentence that correctly forms the present simple passive voice to explain how packages are handled:',
    options: [
      { id: 'opt_1', text: 'All packages are scanned at the fulfillment center before they are loaded onto delivery vans.', distractorReason: '' },
      { id: 'opt_2', text: 'All packages are scan at the fulfillment center before loading.', distractorReason: 'The passive voice requires the past participle form ("scanned"), not the bare infinitive ("scan").' },
      { id: 'opt_3', text: 'All packages is scanned at the fulfillment center before loading.', distractorReason: 'Subject-verb agreement error: plural subject "packages" requires "are", not "is".' },
      { id: 'opt_4', text: 'All packages scan at the fulfillment center before loading.', distractorReason: 'Active voice implies the inanimate packages perform the scanning action themselves.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'The present simple passive is formed using "am/is/are + past participle" (e.g. "packages are scanned"). It is standard in operational guides and SOPs where the action performed on the object is the primary focus.',
    hint: 'Present simple passive = are + past participle (are scanned).',
    grammarRule: 'Present Passive: Subject + am/is/are + past participle (V3).',
    exampleSentence: 'Customer returns are inspected within twenty-four hours of arrival at the warehouse.',
    referenceCEFR: 'A2',
    isVerified: true
  },

  // =========================================================================
  // LEVEL 3: B1 INTERMEDIATE FLUENCY (11 Questions)
  // =========================================================================
  {
    id: 'eng-l3-001',
    level: 'level_3',
    levelNumber: 3,
    levelLabel: 'Level 3: B1 Intermediate Fluency',
    topic: 'Tenses: Present Perfect vs. Past Simple',
    difficulty: 'intermediate',
    question: 'Select the sentence that correctly uses the Present Perfect to describe an experience with present relevance:',
    options: [
      { id: 'opt_1', text: 'I have worked on distributed microservices for five years and I still maintain them.', distractorReason: '' },
      { id: 'opt_2', text: 'I have worked on distributed microservices in 2018.', distractorReason: 'Specific past time points (in 2018, yesterday, two days ago) require the Past Simple, not Present Perfect.' },
      { id: 'opt_3', text: 'I worked on microservices since five years.', distractorReason: '"Since" indicates a starting point in time and requires the Present Perfect ("have worked"), not Past Simple.' },
      { id: 'opt_4', text: 'I am working on microservices since 2020.', distractorReason: 'English requires the Present Perfect Continuous ("have been working") when combining an action with "since".' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'The Present Perfect ("have worked") connects the past with the present, expressing an action that started in the past and continues into the present. When a specific, finished time is stated (e.g. "in 2018"), the Past Simple must be used.',
    hint: 'Specific finished time = Past Simple. Action continuing to now = Present Perfect.',
    grammarRule: 'Present Perfect (have/has + past participle) connects past action to the present moment.',
    exampleSentence: 'We have monitored the payment gateway since 8:00 AM and observed zero error spikes.',
    referenceCEFR: 'B1',
    isVerified: true
  },
  {
    id: 'eng-l3-002',
    level: 'level_3',
    levelNumber: 3,
    levelLabel: 'Level 3: B1 Intermediate Fluency',
    topic: 'Second Conditional (Hypothetical Present)',
    difficulty: 'intermediate',
    question: 'Which sentence correctly constructs a Second Conditional expressing a hypothetical present scenario?',
    options: [
      { id: 'opt_1', text: 'If we had more automated tests, we would deploy code with greater confidence.', distractorReason: '' },
      { id: 'opt_2', text: 'If we will have more automated tests, we would deploy code with confidence.', distractorReason: '"Will" should never be used in the "if" clause of a standard conditional.' },
      { id: 'opt_3', text: 'If we would have more automated tests, we will deploy code.', distractorReason: '"Would" is ungrammatical in the if-clause of a standard conditional.' },
      { id: 'opt_4', text: 'If we had more automated tests, we will deploy code.', distractorReason: 'Conditional tense clash: Past subjunctive "had" in the if-clause requires "would" in the result clause.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'The Second Conditional describes imaginary, hypothetical, or improbable present/future situations. The formula is: If + past simple, would + bare infinitive.',
    hint: 'Second Conditional pattern: If + Past Simple, would + base verb.',
    grammarRule: 'If + past simple, would + bare infinitive.',
    exampleSentence: 'If the team had redundant network switches, a single cable failure would not disrupt operations.',
    referenceCEFR: 'B1',
    isVerified: true
  },
  {
    id: 'eng-l3-003',
    level: 'level_3',
    levelNumber: 3,
    levelLabel: 'Level 3: B1 Intermediate Fluency',
    topic: 'First Conditional (Real Future Possibility)',
    difficulty: 'intermediate',
    question: 'Complete the First Conditional: "If the carrier _____ the parcel today, the customer _____ it by tomorrow afternoon."',
    options: [
      { id: 'opt_1', text: 'delivers / will receive', distractorReason: '' },
      { id: 'opt_2', text: 'will deliver / receives', distractorReason: 'Do not use "will" in the if-clause.' },
      { id: 'opt_3', text: 'delivered / will receive', distractorReason: 'Tense mismatch between past "delivered" and future "will receive".' },
      { id: 'opt_4', text: 'deliver / would receive', distractorReason: 'Singular subject "carrier" takes "delivers", and First Conditional uses "will", not "would".' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'The First Conditional expresses real and likely future outcomes: If + present simple (delivers), will + base verb (will receive).',
    hint: 'First Conditional: If + Present Simple, will + base verb.',
    grammarRule: 'If + present simple, will + bare infinitive.',
    exampleSentence: 'If the customer initiates the return before midnight, the system will process the refund tomorrow.',
    referenceCEFR: 'B1',
    isVerified: true
  },
  {
    id: 'eng-l3-004',
    level: 'level_3',
    levelNumber: 3,
    levelLabel: 'Level 3: B1 Intermediate Fluency',
    topic: 'Phrasal Verbs in Professional Context',
    difficulty: 'intermediate',
    question: 'What is the meaning of the phrasal verb "look into" in the statement: "I will look into this billing discrepancy for you immediately"?',
    options: [
      { id: 'opt_1', text: 'To investigate or examine the facts of a situation.', distractorReason: '' },
      { id: 'opt_2', text: 'To physically stare at a piece of glass.', distractorReason: 'Literal meaning, not the idiomatic phrasal verb meaning.' },
      { id: 'opt_3', text: 'To cancel or delete the transaction.', distractorReason: 'Cancelling would be "call off" or "void", not "look into".' },
      { id: 'opt_4', text: 'To blame the customer for the error.', distractorReason: 'Absurd distractor.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'In customer service and professional English, "look into" is an inseparable transitive phrasal verb meaning to investigate, research, or examine the details of a customer\'s issue.',
    hint: '"Look into" is a synonym for investigate or examine.',
    grammarRule: 'Phrasal verb: look into = to investigate.',
    exampleSentence: 'Our Tier-2 logistics support team will look into why the carrier marked the package inaccessible.',
    referenceCEFR: 'B1',
    isVerified: true
  },
  {
    id: 'eng-l3-005',
    level: 'level_3',
    levelNumber: 3,
    levelLabel: 'Level 3: B1 Intermediate Fluency',
    topic: 'Defining vs. Non-Defining Relative Clauses',
    difficulty: 'intermediate',
    question: 'Which sentence correctly uses a non-defining relative clause with appropriate punctuation?',
    options: [
      { id: 'opt_1', text: 'Amazon Prime, which was launched in 2005, provides free fast shipping to millions of members.', distractorReason: '' },
      { id: 'opt_2', text: 'Amazon Prime that was launched in 2005 provides free fast shipping.', distractorReason: '"That" cannot be used in non-defining relative clauses in formal grammar, and commas are required.' },
      { id: 'opt_3', text: 'Amazon Prime, that was launched in 2005, provides free shipping.', distractorReason: 'Non-defining clauses require "which" for things, never "that".' },
      { id: 'opt_4', text: 'Amazon Prime which was launched in 2005 provides free fast shipping.', distractorReason: 'Non-defining relative clauses must be set off by commas.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'A non-defining relative clause provides non-essential, extra information about an already identified proper noun ("Amazon Prime"). It must be separated by commas and use "which" (not "that") for objects or institutions.',
    hint: 'Extra information about a specific name takes "which" with commas before and after.',
    grammarRule: 'Non-defining relative clauses use commas and "which" (never "that" for things).',
    exampleSentence: 'The Seattle fulfillment center, which spans two million square feet, operates twenty-four hours a day.',
    referenceCEFR: 'B1',
    isVerified: true
  },
  {
    id: 'eng-l3-006',
    level: 'level_3',
    levelNumber: 3,
    levelLabel: 'Level 3: B1 Intermediate Fluency',
    topic: 'Polite Professional Requests in Workplace Communication',
    difficulty: 'intermediate',
    question: 'Which of the following is the most professional and polite way for a customer service voice associate to request information?',
    options: [
      { id: 'opt_1', text: 'Could you please verify the billing zip code associated with your Amazon account?', distractorReason: '' },
      { id: 'opt_2', text: 'Give me your zip code now.', distractorReason: 'Blunt, rude, and aggressive command.' },
      { id: 'opt_3', text: 'You must say your zip code or I hang up.', distractorReason: 'Unacceptable, threatening tone.' },
      { id: 'opt_4', text: 'Zip code?', distractorReason: 'Too informal and lacking standard professional phone etiquette.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'In customer contact operations, professional requests use modal auxiliaries like "Could you please..." or "Would you mind...", which soften commands and convey respect while maintaining compliance.',
    hint: 'Use polite modal phrasing: "Could you please...".',
    grammarRule: 'Polite request: Modal (Could/Would) + subject + please + base verb.',
    exampleSentence: 'Could you please confirm the last four digits of the payment card billed for this order?',
    referenceCEFR: 'B1',
    isVerified: true
  },
  {
    id: 'eng-l3-007',
    level: 'level_3',
    levelNumber: 3,
    levelLabel: 'Level 3: B1 Intermediate Fluency',
    topic: 'Used to vs. Be Used To',
    difficulty: 'intermediate',
    question: 'Choose the sentence that correctly expresses being accustomed to a situation:',
    options: [
      { id: 'opt_1', text: 'Our support team is used to handling high call volumes during peak holiday events.', distractorReason: '' },
      { id: 'opt_2', text: 'Our support team is used to handle high call volumes.', distractorReason: '"Be used to" (accustomed to) takes a gerund (-ing), not a bare infinitive.' },
      { id: 'opt_3', text: 'Our support team used to handling high call volumes.', distractorReason: 'Missing the verb "to be" for the accustomed meaning.' },
      { id: 'opt_4', text: 'Our support team is use to handle call volumes.', distractorReason: 'Grammatically corrupted.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: '"Be used to + gerund/noun" means to be accustomed to something. In contrast, "used to + base verb" expresses a past habit that no longer occurs (e.g. "We used to write manual invoices").',
    hint: '"Be used to" (accustomed) is followed by a gerund (-ing).',
    grammarRule: 'Be used to + V-ing / noun = accustomed to.',
    exampleSentence: 'Experienced associates are used to de-escalating tense customer disputes calmly.',
    referenceCEFR: 'B1',
    isVerified: true
  },
  {
    id: 'eng-l3-008',
    level: 'level_3',
    levelNumber: 3,
    levelLabel: 'Level 3: B1 Intermediate Fluency',
    topic: 'Since vs. For with Time Periods',
    difficulty: 'intermediate',
    question: 'Select the sentence with the correct usage of "since" and "for":',
    options: [
      { id: 'opt_1', text: 'The customer has been an active Prime member for six years, ever since 2020.', distractorReason: '' },
      { id: 'opt_2', text: 'The customer has been an active Prime member since six years.', distractorReason: '"Since" requires a specific starting point in time (e.g. since 2020), while duration takes "for".' },
      { id: 'opt_3', text: 'The customer has been an active Prime member for 2020.', distractorReason: '"For" requires a duration of time (e.g. for six years), not a specific calendar year.' },
      { id: 'opt_4', text: 'The customer is an active Prime member during six years.', distractorReason: '"During" cannot replace "for" to express duration with the Present Perfect.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: '"For" is used with durations and periods of time (for six years, for three days). "Since" is used with a specific starting timestamp or event (since 2020, since yesterday morning).',
    hint: '"For" + length of time; "Since" + starting point in time.',
    grammarRule: 'For + duration of time; Since + starting point in time.',
    exampleSentence: 'The courier tracking status has remained unchanged for 48 hours, ever since Monday.',
    referenceCEFR: 'B1',
    isVerified: true
  },
  {
    id: 'eng-l3-009',
    level: 'level_3',
    levelNumber: 3,
    levelLabel: 'Level 3: B1 Intermediate Fluency',
    topic: 'Subject-Verb Agreement with Either/Or',
    difficulty: 'intermediate',
    question: 'Choose the correct verb form: "Either the database administrator or the lead engineers _____ responsible for authorizing the production release."',
    options: [
      { id: 'opt_1', text: 'are', distractorReason: '' },
      { id: 'opt_2', text: 'is', distractorReason: 'When subjects are joined by "either... or", the verb agrees with the closer subject ("engineers" is plural, so "are").' },
      { id: 'opt_3', text: 'was being', distractorReason: 'Unnecessary progressive passive.' },
      { id: 'opt_4', text: 'be', distractorReason: 'Base form cannot function as finite present tense.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'Under the Proximity Rule of subject-verb agreement: when two subjects are connected by "either... or" or "neither... nor", the verb must agree in number with the subject closest to it ("lead engineers" is plural -> "are").',
    hint: 'With "either... or", the verb agrees with the closer subject (engineers -> are).',
    grammarRule: 'The verb agrees with the closer subject in "either... or" constructions.',
    exampleSentence: 'Either the primary server or the backup nodes are designated to handle peak traffic.',
    referenceCEFR: 'B1',
    isVerified: true
  },
  {
    id: 'eng-l3-010',
    level: 'level_3',
    levelNumber: 3,
    levelLabel: 'Level 3: B1 Intermediate Fluency',
    topic: 'Phrasal Verb: Call Off vs. Put Off',
    difficulty: 'intermediate',
    question: 'Which sentence correctly uses "call off" to mean cancel completely?',
    options: [
      { id: 'opt_1', text: 'Due to severe blizzard conditions, logistics management had to call off all scheduled deliveries for the day.', distractorReason: '' },
      { id: 'opt_2', text: 'Due to severe blizzard conditions, management had to put off all deliveries for good.', distractorReason: '"Put off" means to postpone/delay to a later date, whereas "for good" implies permanent cancellation.' },
      { id: 'opt_3', text: 'The customer called on their subscription order.', distractorReason: '"Call on" means to visit or request someone to speak, not cancel.' },
      { id: 'opt_4', text: 'The carrier called in the delivery to the future.', distractorReason: 'Incorrect phrasal verb usage.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: '"Call off" means to cancel an event or operation entirely. In contrast, "put off" means to postpone or reschedule it for a future time.',
    hint: '"Call off" means cancel; "Put off" means postpone.',
    grammarRule: 'Call off = cancel completely; Put off = postpone to later.',
    exampleSentence: 'Amazon had to call off the outdoor delivery drone trials due to high gale-force winds.',
    referenceCEFR: 'B1',
    isVerified: true
  },
  {
    id: 'eng-l3-011',
    level: 'level_3',
    levelNumber: 3,
    levelLabel: 'Level 3: B1 Intermediate Fluency',
    topic: 'So vs. Such',
    difficulty: 'intermediate',
    question: 'Complete the sentence: "The customer experienced _____ a frustrating delay that the manager approved an immediate concession."',
    options: [
      { id: 'opt_1', text: 'such', distractorReason: '' },
      { id: 'opt_2', text: 'so', distractorReason: '"So" modifies adjectives alone (e.g. "so frustrating"), whereas "such" modifies noun phrases with adjectives (e.g. "such a frustrating delay").' },
      { id: 'opt_3', text: 'very', distractorReason: '"Very" cannot be paired with the result clause "that" in this correlative structure.' },
      { id: 'opt_4', text: 'too', distractorReason: '"Too" pairs with "to + verb" (too frustrating to ignore), not "that".' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: '"Such + a/an + adjective + noun + that" is used to emphasize the degree of a noun phrase resulting in a consequence. "So" is used when modifying an adjective or adverb alone without a following noun.',
    hint: 'Use "such a [adjective] [noun]", but "so [adjective]".',
    grammarRule: 'So + adjective/adverb; Such + (a/an) + adjective + noun.',
    exampleSentence: 'It was such an unexpected outage that disaster recovery protocols were triggered.',
    referenceCEFR: 'B1',
    isVerified: true
  },

  // =========================================================================
  // LEVEL 4: B2 UPPER-INTERMEDIATE PRECISION (11 Questions)
  // =========================================================================
  {
    id: 'eng-l4-001',
    level: 'level_4',
    levelNumber: 4,
    levelLabel: 'Level 4: B2 Upper-Intermediate Precision',
    topic: 'Third Conditional (Unreal Past)',
    difficulty: 'advanced',
    question: 'Which sentence correctly constructs a Third Conditional expressing an unreal past scenario and regret?',
    options: [
      { id: 'opt_1', text: 'If the automated test suite had caught the regression, the service outage would not have occurred.', distractorReason: '' },
      { id: 'opt_2', text: 'If the automated test suite would have caught the regression, the outage would not occur.', distractorReason: '"Would have" is ungrammatical in the if-clause of a conditional.' },
      { id: 'opt_3', text: 'If the automated test suite had caught the regression, the outage would not occur.', distractorReason: 'Mismatches past condition with present result clause without mixed conditional justification.' },
      { id: 'opt_4', text: 'If the automated test suite caught the regression, the outage would not have occurred.', distractorReason: 'The if-clause requires the past perfect ("had caught") for third conditionals.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'The Third Conditional describes counterfactual past events (things that did not happen). The grammatical structure is: If + past perfect (had + past participle), would have + past participle.',
    hint: 'Third conditional formula: If + had + past participle, would have + past participle.',
    grammarRule: 'If + had + V3, would have + V3.',
    exampleSentence: 'If the security team had patched the vulnerability earlier, the breach would have been prevented.',
    referenceCEFR: 'B2',
    isVerified: true
  },
  {
    id: 'eng-l4-002',
    level: 'level_4',
    levelNumber: 4,
    levelLabel: 'Level 4: B2 Upper-Intermediate Precision',
    topic: 'Subjunctive Mood in Formal Recommendations',
    difficulty: 'advanced',
    question: 'Select the sentence that correctly employs the English subjunctive mood in a workplace recommendation:',
    options: [
      { id: 'opt_1', text: 'The incident commander recommended that every engineer rotate their credentials immediately.', distractorReason: '' },
      { id: 'opt_2', text: 'The incident commander recommended that every engineer rotates their credentials immediately.', distractorReason: 'The subjunctive requires the bare base form of the verb ("rotate"), omitting the indicative third-person "-s".' },
      { id: 'opt_3', text: 'The incident commander recommended that every engineer should rotated credentials.', distractorReason: 'Ungrammatical past participle after "should".' },
      { id: 'opt_4', text: 'The incident commander recommended that every engineer will rotate credentials.', distractorReason: 'Future modal "will" is not used in mandative subjunctive clauses.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'In formal English, verbs of demand, request, or recommendation (insist, suggest, recommend, demand) take a subjunctive "that" clause using the base form of the verb without "-s" or "-ed" (e.g. "that he rotate", "that she be").',
    hint: 'After "recommend that...", use the base form of the verb without the third-person "-s".',
    grammarRule: 'Verb of recommendation + that + subject + bare base verb (subjunctive).',
    exampleSentence: 'The operations manager demanded that the carrier provide proof of delivery for the disputed order.',
    referenceCEFR: 'B2',
    isVerified: true
  },
  {
    id: 'eng-l4-003',
    level: 'level_4',
    levelNumber: 4,
    levelLabel: 'Level 4: B2 Upper-Intermediate Precision',
    topic: 'Parallel Structure in Series',
    difficulty: 'advanced',
    question: 'Identify the sentence that maintains flawless parallel grammatical structure:',
    options: [
      { id: 'opt_1', text: 'The customer service lead specializes in de-escalating conflicts, analyzing metrics, and training new associates.', distractorReason: '' },
      { id: 'opt_2', text: 'The customer service lead specializes in de-escalating conflicts, analyzing metrics, and to train new associates.', distractorReason: 'Faulty parallelism: combines two gerunds (-ing) with an infinitive ("to train").' },
      { id: 'opt_3', text: 'The customer service lead specializes in de-escalation of conflicts, analyzing metrics, and training.', distractorReason: 'Faulty parallelism: combines a noun phrase ("de-escalation") with active participial phrases.' },
      { id: 'opt_4', text: 'The customer service lead specializes in to de-escalate, analyzing metrics, and train associates.', distractorReason: 'Inconsistent mix of infinitive, gerund, and bare forms.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'Parallel structure requires that all items in a coordinated list or series share the exact same grammatical pattern (in this case, three parallel gerunds: de-escalating, analyzing, and training).',
    hint: 'All items in a list must share the same grammatical form (all -ing verbs).',
    grammarRule: 'Elements in a list joined by coordinating conjunctions must be grammatically parallel.',
    exampleSentence: 'Our continuous integration pipeline automates building artifacts, running unit tests, and deploying containers.',
    referenceCEFR: 'B2',
    isVerified: true
  },
  {
    id: 'eng-l4-004',
    level: 'level_4',
    levelNumber: 4,
    levelLabel: 'Level 4: B2 Upper-Intermediate Precision',
    topic: 'Passive Voice in Technical Contexts',
    difficulty: 'advanced',
    question: 'Choose the sentence where the passive voice is appropriately used to focus on the affected system rather than the actor:',
    options: [
      { id: 'opt_1', text: 'The database replica was automatically promoted to primary after the health check failed.', distractorReason: '' },
      { id: 'opt_2', text: 'The database replica did promote by the system.', distractorReason: 'Active construction using "did promote" makes the inanimate database seem like the actor.' },
      { id: 'opt_3', text: 'The database replica has been promote.', distractorReason: 'Missing past participle ending "-ed".' },
      { id: 'opt_4', text: 'The database replica was being promote.', distractorReason: 'Missing past participle ending.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'Passive voice (was + past participle "promoted") is preferred in technical incident postmortems when the action or receiving system is more relevant than the automated trigger or human agent.',
    hint: 'Passive formula: Form of "to be" + Past Participle (was promoted).',
    grammarRule: 'Passive voice: be + past participle.',
    exampleSentence: 'A full refund of $149.99 was credited to the customer\'s original payment card.',
    referenceCEFR: 'B2',
    isVerified: true
  },
  {
    id: 'eng-l4-005',
    level: 'level_4',
    levelNumber: 4,
    levelLabel: 'Level 4: B2 Upper-Intermediate Precision',
    topic: 'Reported Speech & Backshifting',
    difficulty: 'advanced',
    question: 'Direct quote: "I am investigating the carrier tracking," said the representative. Which option correctly converts this into reported speech?',
    options: [
      { id: 'opt_1', text: 'The representative said that he was investigating the carrier tracking.', distractorReason: '' },
      { id: 'opt_2', text: 'The representative said that he is investigating the carrier tracking.', distractorReason: 'In reported speech following a past reporting verb ("said"), present continuous backshifts to past continuous.' },
      { id: 'opt_3', text: 'The representative said that he had been investigate the tracking.', distractorReason: 'Ungrammatical verb form "had been investigate".' },
      { id: 'opt_4', text: 'The representative said that he will investigate the tracking.', distractorReason: 'Distorts the original present continuous meaning into a future intention.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'When backshifting into reported speech after a past reporting verb ("said"), the present continuous ("am investigating") changes to the past continuous ("was investigating").',
    hint: 'Present continuous ("am investigating") shifts to past continuous ("was investigating").',
    grammarRule: 'Reported speech: Present Continuous backshifts to Past Continuous after past reporting verbs.',
    exampleSentence: 'The customer stated that she had not received the parcel delivery notification.',
    referenceCEFR: 'B2',
    isVerified: true
  },
  {
    id: 'eng-l4-006',
    level: 'level_4',
    levelNumber: 4,
    levelLabel: 'Level 4: B2 Upper-Intermediate Precision',
    topic: 'Advanced Connectors: Although vs. Despite vs. In Spite Of',
    difficulty: 'advanced',
    question: 'Select the sentence that correctly uses "despite" followed by a noun phrase:',
    options: [
      { id: 'opt_1', text: 'Despite repeated delivery attempts, the courier was unable to access the gated community.', distractorReason: '' },
      { id: 'opt_2', text: 'Despite of repeated delivery attempts, the courier was unable to access the community.', distractorReason: '"Despite" is never followed by "of" ("in spite of" takes "of", but "despite" stands alone).' },
      { id: 'opt_3', text: 'Despite the courier attempted repeatedly, access was blocked.', distractorReason: '"Despite" must be followed by a noun phrase or gerund, not a full independent subject-verb clause (use "although" for clauses).' },
      { id: 'opt_4', text: 'In despite of repeated delivery attempts, access was blocked.', distractorReason: 'Corrupted blend of "in spite of" and "despite".' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: '"Despite" is a preposition that takes a noun phrase or gerund (e.g. "despite repeated delivery attempts"). It is NEVER followed by "of". To introduce a full clause with a subject and verb, use "although" or "even though".',
    hint: 'Never say "despite of". Use "despite" + noun phrase, or "in spite of" + noun phrase.',
    grammarRule: 'Despite + noun phrase; In spite of + noun phrase; Although + clause (subject + verb).',
    exampleSentence: 'Despite the tight SLA deadline, the engineering team resolved all high-severity bugs.',
    referenceCEFR: 'B2',
    isVerified: true
  },
  {
    id: 'eng-l4-007',
    level: 'level_4',
    levelNumber: 4,
    levelLabel: 'Level 4: B2 Upper-Intermediate Precision',
    topic: 'Adverbial Clauses of Concession',
    difficulty: 'advanced',
    question: 'Choose the sentence where "whereas" is used correctly to contrast two related facts:',
    options: [
      { id: 'opt_1', text: 'Amazon Retail orders are fulfilled directly by Amazon, whereas MFN orders are shipped independently by marketplace sellers.', distractorReason: '' },
      { id: 'opt_2', text: 'Amazon Retail orders are fulfilled by Amazon, whereas because of sellers.', distractorReason: '"Whereas" must connect two balanced clauses, not fragment prepositional phrases.' },
      { id: 'opt_3', text: 'Whereas the package arrived, so we were happy.', distractorReason: 'Cannot combine "whereas" with coordinate "so" in the main clause.' },
      { id: 'opt_4', text: 'The order arrived whereas yesterday.', distractorReason: 'Nonsensical usage.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: '"Whereas" is a subordinating conjunction used to contrast two balanced, contrasting facts or circumstances between two groups or entities.',
    hint: '"Whereas" connects two complete statements to contrast them.',
    grammarRule: 'Clause A, whereas Clause B (showing formal contrast).',
    exampleSentence: 'Credit card refunds take three to five business days, whereas gift card refunds post within hours.',
    referenceCEFR: 'B2',
    isVerified: true
  },
  {
    id: 'eng-l4-008',
    level: 'level_4',
    levelNumber: 4,
    levelLabel: 'Level 4: B2 Upper-Intermediate Precision',
    topic: 'Causative Verbs (Have / Get / Make)',
    difficulty: 'advanced',
    question: 'Which sentence correctly uses the causative structure "have someone do something"?',
    options: [
      { id: 'opt_1', text: 'The lead architect had the security auditor review the encryption protocols.', distractorReason: '' },
      { id: 'opt_2', text: 'The lead architect had the security auditor to review the encryption protocols.', distractorReason: 'The causative "have + person" takes the bare infinitive ("review"), not a to-infinitive.' },
      { id: 'opt_3', text: 'The lead architect had the security auditor reviewing the encryption protocols yesterday completely.', distractorReason: 'Conveys a continuous scene rather than an accomplished task directive.' },
      { id: 'opt_4', text: 'The lead architect got the security auditor review the encryption protocols.', distractorReason: 'The causative "get + person" requires a to-infinitive ("got the auditor to review").' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'The causative formula with "have" is: Subject + have + person + bare infinitive (no "to"). In contrast, "get" takes a to-infinitive (Subject + get + person + to + verb).',
    hint: 'Have + person + bare verb (no "to"); Get + person + to-verb.',
    grammarRule: 'Have someone do something; Get someone to do something.',
    exampleSentence: 'The customer service manager had the team review the updated Hazmat return SOP.',
    referenceCEFR: 'B2',
    isVerified: true
  },
  {
    id: 'eng-l4-009',
    level: 'level_4',
    levelNumber: 4,
    levelLabel: 'Level 4: B2 Upper-Intermediate Precision',
    topic: 'Dangling & Misplaced Modifiers',
    difficulty: 'advanced',
    question: 'Identify the sentence that avoids a dangling modifier error:',
    options: [
      { id: 'opt_1', text: 'While reviewing the tracking history in AC3, the associate discovered that the delivery buffer had expired.', distractorReason: '' },
      { id: 'opt_2', text: 'While reviewing the tracking history in AC3, the delivery buffer had expired.', distractorReason: 'Dangling modifier: makes it sound as if the "delivery buffer" was personally reviewing the tracking history in AC3.' },
      { id: 'opt_3', text: 'Having arrived at the doorstep, the customer was nowhere to be found by the package.', distractorReason: 'Dangling modifier: implies the package was actively looking for the customer.' },
      { id: 'opt_4', text: 'Damaged during transit, the associate processed an immediate refund.', distractorReason: 'Dangling modifier: grammatically states that the associate was damaged during transit.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'An introductory participial phrase ("While reviewing...") must be immediately followed by the subject performing that action ("the associate"). When the wrong noun follows, it creates a dangling modifier.',
    hint: 'The person doing the action in the opening phrase must immediately follow the comma.',
    grammarRule: 'Introductory modifier + logical agent as subject.',
    exampleSentence: 'After examining the return barcode, the warehouse technician accepted the merchandise.',
    referenceCEFR: 'B2',
    isVerified: true
  },
  {
    id: 'eng-l4-010',
    level: 'level_4',
    levelNumber: 4,
    levelLabel: 'Level 4: B2 Upper-Intermediate Precision',
    topic: 'Prepositional Idioms: In terms of vs. With respect to',
    difficulty: 'advanced',
    question: 'Complete the sentence with the correct formal business phrase: "_____ system reliability, the new cluster outperforms legacy hardware by thirty percent."',
    options: [
      { id: 'opt_1', text: 'In terms of', distractorReason: '' },
      { id: 'opt_2', text: 'In term of', distractorReason: 'Singular "term" is incorrect; the idiom is strictly plural ("in terms of").' },
      { id: 'opt_3', text: 'In terms with', distractorReason: 'Wrong preposition; it is "in terms of", not "in terms with".' },
      { id: 'opt_4', text: 'With respect of', distractorReason: 'The standard idiom is "with respect to", not "with respect of".' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: '"In terms of" is a set prepositional phrase used to specify the particular aspect, criterion, or perspective being discussed.',
    hint: 'The set phrase is "in terms of" (always plural "terms").',
    grammarRule: 'Set idiom: In terms of + noun phrase.',
    exampleSentence: 'In terms of customer satisfaction, First Contact Resolution is our highest-priority KPI.',
    referenceCEFR: 'B2',
    isVerified: true
  },
  {
    id: 'eng-l4-011',
    level: 'level_4',
    levelNumber: 4,
    levelLabel: 'Level 4: B2 Upper-Intermediate Precision',
    topic: 'Modal Verbs of Past Deduction (Must Have vs. Could Have)',
    difficulty: 'advanced',
    question: 'The parcel is marked "Delivered" and a clear photo shows it on the customer\'s front porch. Which sentence expresses logical past deduction with high certainty?',
    options: [
      { id: 'opt_1', text: 'The delivery driver must have reached the location before 5:00 PM.', distractorReason: '' },
      { id: 'opt_2', text: 'The delivery driver should have reached the location before 5:00 PM.', distractorReason: '"Should have" expresses an expectation or missed obligation, not a confirmed deduction based on visual proof.' },
      { id: 'opt_3', text: 'The delivery driver can have reached the location.', distractorReason: '"Can have" is not used for past deductions in standard English.' },
      { id: 'opt_4', text: 'The delivery driver must reach the location yesterday.', distractorReason: 'Mismatches present modal "must reach" with past time "yesterday".' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: '"Must have + past participle" expresses strong logical deduction or certainty about a past event based on available evidence.',
    hint: '"Must have + past participle" expresses strong certainty about past events.',
    grammarRule: 'Must have + V3 = strong logical deduction about the past.',
    exampleSentence: 'The system must have restarted automatically because uptime reset to zero minutes.',
    referenceCEFR: 'B2',
    isVerified: true
  },
  {
    id: 'eng-l4-012',
    level: 'level_4',
    levelNumber: 4,
    levelLabel: 'Level 4: B2 Upper-Intermediate Precision',
    topic: 'Passive Voice with Impersonal Reporting Verbs',
    difficulty: 'advanced',
    question: 'Select the sentence that uses the passive voice with a reporting verb to maintain an objective, professional tone in a technical post-mortem:',
    options: [
      { id: 'opt_1', text: 'The caching layer is reported to have handled over ten million concurrent requests during Prime Day without latency degradation.', distractorReason: '' },
      { id: 'opt_2', text: 'People report the caching layer to have handled ten million requests.', distractorReason: 'Vague active attribution ("people report") is informal and discouraged in engineering post-mortems.' },
      { id: 'opt_3', text: 'The caching layer reported to be handled over ten million requests.', distractorReason: 'Active "reported" distorts the meaning and treats the caching layer as a reporter.' },
      { id: 'opt_4', text: 'It was reporting that the caching layer handled over ten million requests.', distractorReason: 'Active continuous "was reporting" fails to establish formal passive reporting structure.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'The impersonal passive reporting pattern "Subject + is reported/believed/said + to have + past participle" expresses confirmed objective facts in high-level engineering reports without informal speculation.',
    hint: 'Use the passive reporting pattern: is reported to have handled.',
    grammarRule: 'Passive reporting: Subject + is/are reported + to have + past participle.',
    exampleSentence: 'The database cluster is known to have recovered automatically within twelve seconds.',
    referenceCEFR: 'B2',
    isVerified: true
  },

  // =========================================================================
  // LEVEL 5: C1/C2 ADVANCED & PROFESSIONAL MASTERY (11 Questions)
  // =========================================================================
  {
    id: 'eng-l5-001',
    level: 'level_5',
    levelNumber: 5,
    levelLabel: 'Level 5: C1/C2 Advanced & Professional Mastery',
    topic: 'Negative & Limiting Inversion',
    difficulty: 'advanced',
    question: 'Which sentence correctly executes negative inversion for stylistic emphasis in formal executive communication?',
    options: [
      { id: 'opt_1', text: 'Seldom have we witnessed such remarkable resilience across our distributed cloud architecture.', distractorReason: '' },
      { id: 'opt_2', text: 'Seldom we have witnessed such remarkable resilience across our cloud architecture.', distractorReason: 'Fails to invert: after an initial negative/limiting adverb, auxiliary verb must precede the subject.' },
      { id: 'opt_3', text: 'Seldom have witnessed we such resilience.', distractorReason: 'Distorts word order: only the auxiliary verb moves before the subject, not the main participle.' },
      { id: 'opt_4', text: 'Seldom we witnessed such resilience.', distractorReason: 'Lacks required auxiliary inversion.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'When a negative or restrictive adverb (seldom, rarely, scarcely, under no circumstances, little) is placed at the beginning of a sentence for rhetorical emphasis, subject-auxiliary inversion is mandatory: Adverb + Auxiliary + Subject + Main Verb.',
    hint: 'After an initial negative adverb like "Seldom", invert the auxiliary and subject: "Seldom have we...".',
    grammarRule: 'Negative Adverb + Auxiliary Verb + Subject + Main Verb.',
    exampleSentence: 'Under no circumstances should associates request a customer\'s full 16-digit payment card number.',
    referenceCEFR: 'C1',
    isVerified: true
  },
  {
    id: 'eng-l5-002',
    level: 'level_5',
    levelNumber: 5,
    levelLabel: 'Level 5: C1/C2 Advanced & Professional Mastery',
    topic: 'Advanced Technical Vocabulary (Idempotent)',
    difficulty: 'advanced',
    question: 'What is the precise architectural meaning of the adjective "idempotent" in modern software and API design?',
    options: [
      { id: 'opt_1', text: 'An operation that produces the exact same outcome regardless of whether it is executed once or multiple times.', distractorReason: '' },
      { id: 'opt_2', text: 'A program that runs twice as fast on multi-core processors.', distractorReason: 'That refers to concurrent parallelism or optimization, not idempotency.' },
      { id: 'opt_3', text: 'A temporary variable that self-destructs after 60 seconds.', distractorReason: 'That describes TTL (time to live) or ephemeral storage.' },
      { id: 'opt_4', text: 'An encrypted token that cannot be decrypted without a hardware security key.', distractorReason: 'That describes cryptographic security.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: '"Idempotent" denotes a mathematical and computing property wherein an operation can be applied multiple times without altering the result beyond the initial application (e.g. HTTP PUT and DELETE or payment retry keys).',
    hint: 'Executing it once or ten times produces the exact same end state.',
    grammarRule: 'Adjective: Idempotent = invariant under repetition.',
    exampleSentence: 'Implementing idempotent payment webhooks prevents duplicate customer charges during network retries.',
    referenceCEFR: 'C1',
    isVerified: true
  },
  {
    id: 'eng-l5-003',
    level: 'level_5',
    levelNumber: 5,
    levelLabel: 'Level 5: C1/C2 Advanced & Professional Mastery',
    topic: 'Advanced Technical Vocabulary (Pragmatic)',
    difficulty: 'advanced',
    question: 'In software engineering leadership, what does a "pragmatic" approach entail?',
    options: [
      { id: 'opt_1', text: 'Prioritizing practical, realistic, and sensible solutions over rigid theoretical ideals.', distractorReason: '' },
      { id: 'opt_2', text: 'Demanding 100% academic perfection regardless of commercial delivery deadlines.', distractorReason: 'That is dogmatism or purism, the exact opposite of pragmatism.' },
      { id: 'opt_3', text: 'Writing undocumented code to finish tasks early.', distractorReason: 'That is carelessness or technical debt accrual.' },
      { id: 'opt_4', text: 'Rejecting all modern design patterns in favor of legacy scripts.', distractorReason: 'Incorrect.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: '"Pragmatic" means dealing with things sensibly and realistically based on practical considerations rather than abstract or dogmatic theory.',
    hint: 'Pragmatic = practical, grounded, and focused on real-world results.',
    grammarRule: 'Adjective: Pragmatic = practical and outcome-oriented.',
    exampleSentence: 'The staff engineer took a pragmatic approach to refactoring, delivering critical performance gains without halting feature releases.',
    referenceCEFR: 'C1',
    isVerified: true
  },
  {
    id: 'eng-l5-004',
    level: 'level_5',
    levelNumber: 5,
    levelLabel: 'Level 5: C1/C2 Advanced & Professional Mastery',
    topic: 'Mixed Conditionals (Past Cause, Present Effect)',
    difficulty: 'advanced',
    question: 'Select the sentence that accurately constructs a mixed conditional connecting an unfulfilled past action with a current present state:',
    options: [
      { id: 'opt_1', text: 'If the team had secured the database credentials yesterday, the staging cluster would be operational right now.', distractorReason: '' },
      { id: 'opt_2', text: 'If the team secured the database credentials yesterday, the cluster will be operational now.', distractorReason: 'Cannot combine past indicative with future "will" for counterfactual mixed situations.' },
      { id: 'opt_3', text: 'If the team had secured credentials yesterday, the cluster would have been operational right now.', distractorReason: '"Would have been" refers to a past result, whereas "right now" requires the present result form "would be".' },
      { id: 'opt_4', text: 'If the team would have secured credentials, the cluster is operational.', distractorReason: 'Ungrammatical "would have" in the if-clause.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'A mixed conditional combines past unfulfilled condition (If + past perfect "had secured") with a present ongoing consequence (would + bare infinitive "would be operational right now").',
    hint: 'Past condition (had + V3) + Present result (would + bare verb).',
    grammarRule: 'Mixed Conditional: If + past perfect, would + bare infinitive (present effect).',
    exampleSentence: 'If she had accepted the principal architect role in June, she would be leading the AI initiative today.',
    referenceCEFR: 'C1',
    isVerified: true
  },
  {
    id: 'eng-l5-005',
    level: 'level_5',
    levelNumber: 5,
    levelLabel: 'Level 5: C1/C2 Advanced & Professional Mastery',
    topic: 'Nominalization Reduction (Style & Clarity)',
    difficulty: 'advanced',
    question: 'Which revised sentence successfully eliminates weak nominalizations ("zombie nouns") in favor of vigorous, direct verbs?',
    options: [
      { id: 'opt_1', text: 'The security team investigated the data anomaly and restored the service promptly.', distractorReason: '' },
      { id: 'opt_2', text: 'The conducting of the investigation into the data anomaly was carried out by the team with prompt restoration of the service.', distractorReason: 'Heavily bogged down by nominalizations ("conducting", "investigation", "restoration").' },
      { id: 'opt_3', text: 'An investigation of the anomaly had its implementation executed by the team.', distractorReason: 'Extremely verbose and bureaucratic nominalization.' },
      { id: 'opt_4', text: 'There was an accomplishment of the restoration by the team.', distractorReason: 'Weak and passive nominalized structure.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'Nominalization occurs when dynamic verbs are buried inside clunky abstract nouns (e.g. "conduct an investigation of" instead of "investigate"). Replacing nominalizations with active verbs makes professional communication crisp, concise, and persuasive.',
    hint: 'Choose the sentence that uses active verbs instead of wordy nouns ending in -tion.',
    grammarRule: 'Prefer strong active verbs over nominalizations (nouns ending in -tion, -ment, -ance).',
    exampleSentence: 'Engineers who communicate with precision consistently achieve faster stakeholder alignment.',
    referenceCEFR: 'C1',
    isVerified: true
  },
  {
    id: 'eng-l5-006',
    level: 'level_5',
    levelNumber: 5,
    levelLabel: 'Level 5: C1/C2 Advanced & Professional Mastery',
    topic: 'Cleft Sentences for Focus & Emphasis',
    difficulty: 'advanced',
    question: 'Which option correctly constructs an "It-cleft" sentence to emphasize the root cause of an incident?',
    options: [
      { id: 'opt_1', text: 'It was a misconfigured DNS routing table that caused the cascading regional outage.', distractorReason: '' },
      { id: 'opt_2', text: 'What caused the outage was it a misconfigured DNS table.', distractorReason: 'Ungrammatical blending of wh-cleft and it-cleft structures.' },
      { id: 'opt_3', text: 'It caused by a misconfigured DNS table.', distractorReason: 'Missing auxiliary verb "was".' },
      { id: 'opt_4', text: 'It is a misconfigured DNS table caused the outage.', distractorReason: 'Missing relative pronoun "that" or "which".' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'An "It-cleft" sentence splits a single clause into two sections to place intense thematic focus on a specific component: "It + be + emphasized element + that/who + rest of clause".',
    hint: 'Formula: It was [emphasized noun] that [did the action].',
    grammarRule: 'It + form of be + emphasized element + that/who + clause.',
    exampleSentence: 'It was the associate\'s empathetic listening that de-escalated the executive customer\'s grievance.',
    referenceCEFR: 'C1',
    isVerified: true
  },
  {
    id: 'eng-l5-007',
    level: 'level_5',
    levelNumber: 5,
    levelLabel: 'Level 5: C1/C2 Advanced & Professional Mastery',
    topic: 'Advanced Vocabulary: Verbose vs. Concise',
    difficulty: 'advanced',
    question: 'What is the precise meaning of the adjective "verbose" when evaluating technical documentation or code comments?',
    options: [
      { id: 'opt_1', text: 'Using more words than necessary; wordy and unnecessarily lengthy.', distractorReason: '' },
      { id: 'opt_2', text: 'Containing mathematical syntax errors.', distractorReason: 'That refers to malformed syntax.' },
      { id: 'opt_3', text: 'Extremely clear, brief, and highly compressed.', distractorReason: 'That defines "concise" or "succinct", the antonym of verbose.' },
      { id: 'opt_4', text: 'Written in an ancient foreign language.', distractorReason: 'Incorrect.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: '"Verbose" means characterized by the use of more words than are necessary or desirable; long-winded and redundant.',
    hint: 'Verbose = overly wordy and unnecessarily long.',
    grammarRule: 'Adjective: Verbose = using excessive words.',
    exampleSentence: 'Refactoring verbose error responses into concise structured JSON reduced transmission overhead.',
    referenceCEFR: 'C1',
    isVerified: true
  },
  {
    id: 'eng-l5-008',
    level: 'level_5',
    levelNumber: 5,
    levelLabel: 'Level 5: C1/C2 Advanced & Professional Mastery',
    topic: 'Diplomatic Tone & Executive Workplace Communication',
    difficulty: 'advanced',
    question: 'In an executive email to senior leadership regarding a delayed delivery deadline, which phrasing demonstrates the highest level of professional diplomacy?',
    options: [
      { id: 'opt_1', text: 'While we encountered unexpected third-party dependencies, we have mobilized additional engineering resources to deliver the release by Friday.', distractorReason: '' },
      { id: 'opt_2', text: 'The third party messed up completely so do not expect anything before next week.', distractorReason: 'Blunt, finger-pointing, and unprofessional tone.' },
      { id: 'opt_3', text: 'We missed the deadline and it cannot be helped.', distractorReason: 'Defeatist and irresponsible register.' },
      { id: 'opt_4', text: 'You should have known this project was impossible to finish on time.', distractorReason: 'Hostile and confrontational.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'Advanced professional English modulates tone through concessive clauses ("While we encountered..."), objective attribution ("third-party dependencies"), and proactive remedial commitments ("we have mobilized resources to deliver...").',
    hint: 'Look for constructive accountability, objective language, and proactive resolution.',
    grammarRule: 'Diplomatic discourse: Acknowledge challenge objectively + present actionable solution.',
    exampleSentence: 'While carrier delays have temporarily impacted tracking updates, we are actively expediting replacement units for affected customers.',
    referenceCEFR: 'C1',
    isVerified: true
  },
  {
    id: 'eng-l5-009',
    level: 'level_5',
    levelNumber: 5,
    levelLabel: 'Level 5: C1/C2 Advanced & Professional Mastery',
    topic: 'Subordinate Concessive Inversion: As / Though',
    difficulty: 'advanced',
    question: 'Which sentence correctly uses fronted adjective inversion with "as" or "though" to express strong concession?',
    options: [
      { id: 'opt_1', text: 'Challenging though the legacy database migration was, the team completed it with zero data loss.', distractorReason: '' },
      { id: 'opt_2', text: 'Though challenging was the migration, the team completed it.', distractorReason: 'Incorrect word order; adjective must be fronted before "though" or "as".' },
      { id: 'opt_3', text: 'Challenging as was the migration, zero data loss.', distractorReason: 'Fragment lacking proper subject-verb clause.' },
      { id: 'opt_4', text: 'Although challenging though the migration was, they finished.', distractorReason: 'Double concession error: combining "although" and "though".' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'In advanced English rhetoric, an adjective or adverb is fronted before "as" or "though" followed by subject + verb to express intense concession: "Adjective + though/as + subject + verb" (e.g. "Challenging though the task was...").',
    hint: 'Fronted adjective + though/as + subject + verb.',
    grammarRule: 'Adjective + though/as + subject + be, main clause.',
    exampleSentence: 'Complex though the A-to-z claim dispute was, the senior associate resolved it amicably.',
    referenceCEFR: 'C2',
    isVerified: true
  },
  {
    id: 'eng-l5-010',
    level: 'level_5',
    levelNumber: 5,
    levelLabel: 'Level 5: C1/C2 Advanced & Professional Mastery',
    topic: 'Vocabulary Precision: Superfluous',
    difficulty: 'advanced',
    question: 'What is the definition of the adjective "superfluous" in architectural and code reviews?',
    options: [
      { id: 'opt_1', text: 'Unnecessary, especially through being more than enough; redundant.', distractorReason: '' },
      { id: 'opt_2', text: 'Critically vital and foundational to security.', distractorReason: 'Superfluous means unnecessary, the polar opposite of vital.' },
      { id: 'opt_3', text: 'Operating with superior computational speed.', distractorReason: 'Confuses "superfluous" with "superfast" or "superior".' },
      { id: 'opt_4', text: 'Fluid and flowing smoothly like liquid.', distractorReason: 'Confuses with "fluid" or "superfluent".' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: '"Superfluous" means exceeding what is sufficient or necessary; unnecessary or redundant.',
    hint: 'Superfluous = redundant, unnecessary, extra.',
    grammarRule: 'Adjective: Superfluous = non-essential and redundant.',
    exampleSentence: 'Eliminating superfluous database indexes reduced write latency by fifteen percent.',
    referenceCEFR: 'C1',
    isVerified: true
  },
  {
    id: 'eng-l5-011',
    level: 'level_5',
    levelNumber: 5,
    levelLabel: 'Level 5: C1/C2 Advanced & Professional Mastery',
    topic: 'Participle Clauses for Sentence Economy',
    difficulty: 'advanced',
    question: 'Which sentence correctly uses a perfect participle clause to express an action completed before the main clause?',
    options: [
      { id: 'opt_1', text: 'Having finalized the multi-region failover plan, the infrastructure team scheduled the simulation drill.', distractorReason: '' },
      { id: 'opt_2', text: 'Having finalize the failover plan, the team scheduled the drill.', distractorReason: '"Having" requires the past participle ("finalized"), not the bare base form.' },
      { id: 'opt_3', text: 'Finalizing the failover plan yesterday, the drill was scheduled by them.', distractorReason: 'Dangling participle: the drill did not finalize the plan.' },
      { id: 'opt_4', text: 'Have finalized the plan, the infrastructure team scheduled.', distractorReason: 'Ungrammatical participle structure.' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'A perfect participle clause ("Having + past participle") emphasizes that the first action was fully completed prior to the event in the main clause, avoiding wordy temporal clauses like "After they had finalized...".',
    hint: 'Perfect participle formula: Having + past participle (Having finalized...).',
    grammarRule: 'Having + past participle (perfect participle clause).',
    exampleSentence: 'Having completed the security audit, the compliance officer signed off on the enterprise deployment.',
    referenceCEFR: 'C1',
    isVerified: true
  },
  {
    id: 'eng-l5-012',
    level: 'level_5',
    levelNumber: 5,
    levelLabel: 'Level 5: C1/C2 Advanced & Professional Mastery',
    topic: 'Negative Inversion (Not Only... But Also)',
    difficulty: 'advanced',
    question: 'Which sentence correctly applies inverted word order following the correlative conjunction "Not only" at the beginning of an executive statement?',
    options: [
      { id: 'opt_1', text: 'Not only did the automated safeguard prevent data corruption, but it also restored system throughput within seconds.', distractorReason: '' },
      { id: 'opt_2', text: 'Not only the automated safeguard prevented data corruption, but it also restored system throughput.', distractorReason: 'Fails to invert: initial correlative "Not only" requires subject-auxiliary inversion ("did the safeguard prevent").' },
      { id: 'opt_3', text: 'Not only prevented the automated safeguard data corruption, but also restored throughput.', distractorReason: 'Inverts the lexical verb directly rather than using dummy auxiliary "did".' },
      { id: 'opt_4', text: 'Not only had the automated safeguard prevent data corruption, but it also restored throughput.', distractorReason: 'The auxiliary "had" requires a past participle ("prevented"), not a bare form ("prevent").' }
    ],
    correctAnswerIds: ['opt_1'],
    explanation: 'When a clause begins with the negative correlative "Not only", it triggers mandatory subject-auxiliary inversion: "Not only + auxiliary (did) + subject + base verb..., but (subject) also...".',
    hint: 'After initial "Not only", use inverted word order: "Not only did [subject] [verb]...".',
    grammarRule: 'Not only + auxiliary + subject + main verb, but [subject] also + verb.',
    exampleSentence: 'Not only did the resolution exceed customer expectations, but it also strengthened brand loyalty.',
    referenceCEFR: 'C1',
    isVerified: true
  }
]
