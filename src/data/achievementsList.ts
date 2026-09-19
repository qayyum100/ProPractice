import { Achievement, LevelTier } from '../types/gamification'

export const LEVEL_TIERS: LevelTier[] = [
  {
    level: 1,
    title: 'Keyboard Explorer',
    minXp: 0,
    maxXp: 200,
    badgeIcon: 'Compass',
    description: 'Begin your journey across keyboard mechanics and foundational English syntax.',
    unlockedFeatures: ['Basic Speed Tests', 'Warm-up Exercises']
  },
  {
    level: 2,
    title: 'Key Starter',
    minXp: 200,
    maxXp: 600,
    badgeIcon: 'Zap',
    description: 'Building muscle memory and comfortable baseline typing cadence.',
    unlockedFeatures: ['15s & 30s Speed Tests', 'Vocabulary Cards']
  },
  {
    level: 3,
    title: 'Sentence Builder',
    minXp: 600,
    maxXp: 1200,
    badgeIcon: 'BookOpen',
    description: 'Connecting words smoothly into syntactically flawless sentences.',
    unlockedFeatures: ['Grammar Pattern Tests', 'Custom Test Builder']
  },
  {
    level: 4,
    title: 'Speed Builder',
    minXp: 1200,
    maxXp: 2000,
    badgeIcon: 'Gauge',
    description: 'Breaking through typing velocity barriers while maintaining 95%+ precision.',
    unlockedFeatures: ['60s Endurance Tests', 'Weakness Radar']
  },
  {
    level: 5,
    title: 'Precision Typist',
    minXp: 2000,
    maxXp: 3000,
    badgeIcon: 'Target',
    description: 'Flawless execution with near-zero backspaces across punctuation and symbols.',
    unlockedFeatures: ['Punctuation Precision Mode', 'Flight Recorder 4x Playback']
  },
  {
    level: 6,
    title: 'Confident Writer',
    minXp: 3000,
    maxXp: 4500,
    badgeIcon: 'PenTool',
    description: 'Effortlessly writing complex paragraphs with natural English fluency.',
    unlockedFeatures: ['Professional Scenarios', 'AI Coach Diagnostics']
  },
  {
    level: 7,
    title: 'Professional Typist',
    minXp: 4500,
    maxXp: 6500,
    badgeIcon: 'Briefcase',
    description: 'Business-level typing velocity exceeding industry benchmarks.',
    unlockedFeatures: ['Multiplayer Challenge Rooms', 'Global Leaderboards']
  },
  {
    level: 8,
    title: 'Technical Communicator',
    minXp: 6500,
    maxXp: 9000,
    badgeIcon: 'Terminal',
    description: 'Mastery of software engineering terminology, code reviews, and architecture documentation.',
    unlockedFeatures: ['Developer English Mode', 'Skill DNA Polygon Visualizer']
  },
  {
    level: 9,
    title: 'Advanced Practitioner',
    minXp: 9000,
    maxXp: 12000,
    badgeIcon: 'Award',
    description: 'Sustained typing endurance exceeding 85+ WPM with 98%+ accuracy.',
    unlockedFeatures: ['Adaptive Dynamic Difficulty', 'Priority Challenge Hosting']
  },
  {
    level: 10,
    title: 'Typing Master',
    minXp: 12000,
    maxXp: 20000,
    badgeIcon: 'Crown',
    description: 'Elite keyboard virtuoso with comprehensive English and technical mastery.',
    unlockedFeatures: ['Master Badge', 'Unlimited AI Practice Generation']
  }
]

export const ACHIEVEMENTS_CATALOG: Achievement[] = [
  {
    id: 'first_practice',
    title: 'First Step',
    description: 'Complete your very first typing practice session.',
    category: 'general' as const,
    iconName: 'Sparkles',
    xpReward: 50,
    condition: { type: 'sessions', target: 1 }
  },
  {
    id: 'speed_50',
    title: 'Half Century',
    description: 'Reach a net speed of 50 WPM on any standard test.',
    category: 'speed',
    iconName: 'Gauge',
    xpReward: 100,
    condition: { type: 'wpm', target: 50 }
  },
  {
    id: 'speed_75',
    title: 'Velocity Surge',
    description: 'Reach a net speed of 75 WPM on any standard test.',
    category: 'speed',
    iconName: 'Zap',
    xpReward: 200,
    condition: { type: 'wpm', target: 75 }
  },
  {
    id: 'speed_100',
    title: 'Century Club',
    description: 'Break the prestigious 100 WPM speed milestone.',
    category: 'speed',
    iconName: 'Flame',
    xpReward: 500,
    condition: { type: 'wpm', target: 100 }
  },
  {
    id: 'accuracy_95',
    title: 'Eagle Eye',
    description: 'Complete a test with at least 95% accuracy.',
    category: 'accuracy',
    iconName: 'CheckCircle',
    xpReward: 100,
    condition: { type: 'accuracy', target: 95 }
  },
  {
    id: 'accuracy_99',
    title: 'Surgical Precision',
    description: 'Complete a test with 99% or higher accuracy.',
    category: 'accuracy',
    iconName: 'Crosshair',
    xpReward: 300,
    condition: { type: 'accuracy', target: 99 }
  },
  {
    id: 'flawless_100',
    title: 'Zero Imperfection',
    description: 'Complete a test with 100% accuracy and zero backspaces.',
    category: 'accuracy',
    iconName: 'ShieldCheck',
    xpReward: 400,
    condition: { type: 'flawless', target: 100 }
  },
  {
    id: 'streak_7',
    title: 'Weekly Ritual',
    description: 'Maintain an uninterrupted 7-day practice streak.',
    category: 'streak',
    iconName: 'Calendar',
    xpReward: 250,
    condition: { type: 'streak', target: 7 }
  },
  {
    id: 'sessions_100',
    title: 'Century Practitioner',
    description: 'Complete 100 full practice sessions.',
    category: 'endurance',
    iconName: 'Medal',
    xpReward: 500,
    condition: { type: 'sessions', target: 100 }
  },
  {
    id: 'developer_master',
    title: 'Full Stack Typist',
    description: 'Complete 10 Developer English scenario practices.',
    category: 'developer',
    iconName: 'Terminal',
    xpReward: 300,
    condition: { type: 'sessions', target: 10 }
  }
]
