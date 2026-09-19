import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { Input } from '../components/ui/Input'
import { Plus, Clock, User, ArrowRight, Search, Trash2, BookOpen } from 'lucide-react'

interface CustomTestItem {
  id: string
  title: string
  description: string
  textContent: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  duration: number
  author: string
  timesTaken: number
  category: string
  isUserCreated?: boolean
}

const PRESET_CUSTOM_TESTS: CustomTestItem[] = [
  {
    id: 'ct_1',
    title: 'React 19 Server Actions & Optimistic State',
    description: 'Practice modern React asynchronous mutations, server action contracts, and useOptimistic UI updates.',
    textContent: 'Server actions execute async operations directly on the backend, mutating persistent state and triggering automatic server component revalidation with zero client boilerplate.',
    difficulty: 'intermediate',
    duration: 60,
    author: 'Dan_R',
    timesTaken: 342,
    category: 'Frontend'
  },
  {
    id: 'ct_2',
    title: 'PostgreSQL MVCC & Isolation Levels',
    description: 'Deep dive into database transaction isolation levels, WAL write-ahead logs, and MVCC concurrency.',
    textContent: 'PostgreSQL implements Multi-Version Concurrency Control to ensure serializable transaction isolation without taking heavy exclusive table locks on read-heavy workloads.',
    difficulty: 'advanced',
    duration: 90,
    author: 'DatabaseArchitect',
    timesTaken: 512,
    category: 'Databases'
  },
  {
    id: 'ct_3',
    title: 'Executive Negotiation & Feedback Phrasing',
    description: 'Master polite, assertive executive communication patterns for leadership alignment meetings.',
    textContent: 'While we acknowledge the aggressive timeline proposed for Q3 deliverables, allocating dedicated capacity to technical debt will ensure long-term platform stability and SLA compliance.',
    difficulty: 'intermediate',
    duration: 60,
    author: 'LeadershipCoach',
    timesTaken: 195,
    category: 'Leadership & English'
  },
  {
    id: 'ct_4',
    title: 'Kubernetes Pod Scheduling & Affinity Rules',
    description: 'Cloud orchestration terminology, taint tolerances, and anti-affinity scheduling configurations.',
    textContent: 'The kube-scheduler evaluates node affinity expressions, resource requests, and topology spread constraints to distribute replicas resiliently across disparate availability zones.',
    difficulty: 'advanced',
    duration: 60,
    author: 'CloudCaptain',
    timesTaken: 278,
    category: 'DevOps & Cloud'
  },
  {
    id: 'ct_5',
    title: 'Zero-Trust Microservice Authentication',
    description: 'Security architecture, mutual TLS handshakes, and cryptographic JWT identity claims.',
    textContent: 'Zero-trust architecture enforces continuous mutual TLS authentication, strict cryptographic token validation, and principle-of-least-privilege role-based access control across all microservice boundaries.',
    difficulty: 'advanced',
    duration: 60,
    author: 'SecuritySecOps',
    timesTaken: 164,
    category: 'Security'
  },
  {
    id: 'ct_6',
    title: 'Distributed Consensus with Raft Algorithm',
    description: 'Leader election, log replication, and split-brain quorum prevention mechanisms.',
    textContent: 'In Raft consensus, followers transition to candidate state upon heartbeat timeout, requesting votes to establish term leadership and guarantee linearized log consistency across the cluster.',
    difficulty: 'advanced',
    duration: 90,
    author: 'SysDesignPro',
    timesTaken: 409,
    category: 'Distributed Systems'
  },
  {
    id: 'ct_7',
    title: 'Concise Technical Email & Blameless Postmortems',
    description: 'Crisp professional writing for incident timelines, root causes, and action items.',
    textContent: 'Root cause analysis revealed an uncaught null pointer during cache eviction. We mitigated the outage in twelve minutes by rolling back the canary deployment and flushing stale keys.',
    difficulty: 'beginner',
    duration: 45,
    author: 'DevComms',
    timesTaken: 231,
    category: 'Leadership & English'
  },
  {
    id: 'ct_8',
    title: 'TypeScript Type Gymnastics & Conditional Types',
    description: 'Mapped types, template literal types, and distributive conditional type inference.',
    textContent: 'Conditional types distribute over union types when naked, allowing recursive inference and type narrowing through distributive conditional pattern matching with the infer keyword.',
    difficulty: 'intermediate',
    duration: 60,
    author: 'TypeGuru',
    timesTaken: 388,
    category: 'Frontend'
  }
]

const CATEGORIES = ['All', 'Frontend', 'Databases', 'Distributed Systems', 'DevOps & Cloud', 'Security', 'Leadership & English', 'My Custom Tests']

export const CustomTestsPage: React.FC = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [userTests, setUserTests] = useState<CustomTestItem[]>(() => {
    try {
      const stored = localStorage.getItem('practice_custom_tests')
      if (stored) {
        const parsed: CustomTestItem[] = JSON.parse(stored)
        return parsed.map(t => ({ ...t, isUserCreated: true }))
      }
    } catch {
      // Ignore parse error
    }
    return []
  })

  const handleDeleteUserTest = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    const updated = userTests.filter(t => t.id !== id)
    setUserTests(updated)
    try {
      localStorage.setItem('practice_custom_tests', JSON.stringify(updated))
    } catch {
      // Storage fallback
    }
  }

  const allTests = [...userTests, ...PRESET_CUSTOM_TESTS]

  const filteredTests = allTests.filter((test) => {
    if (selectedCategory === 'My Custom Tests') {
      if (!test.isUserCreated) return false
    } else if (selectedCategory !== 'All' && test.category !== selectedCategory) {
      return false
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      return (
        test.title.toLowerCase().includes(q) ||
        test.description.toLowerCase().includes(q) ||
        test.textContent.toLowerCase().includes(q) ||
        test.category.toLowerCase().includes(q)
      )
    }

    return true
  })

  const handleStartTest = (test: CustomTestItem) => {
    navigate('/practice', {
      state: {
        customText: test.textContent,
        mode: 'custom_test',
        duration: test.duration
      }
    })
  }

  return (
    <div className="py-8 sm:py-12 space-y-10 animate-fade-in">
      <Container size="lg" className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                Community & Custom Practice Library
              </span>
              <span className="px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-950/60 text-[10px] font-bold text-sky-700 dark:text-sky-300">
                {allTests.length} Modules
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight mt-1">
              Custom Tests & Curated Scenarios
            </h1>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 max-w-2xl">
              Sharpen your fingers on real-world engineering concepts, cloud architecture protocols, and executive communication templates.
            </p>
          </div>

          <Link to="/custom-tests/create">
            <Button size="md" variant="primary" icon={<Plus className="w-4 h-4" />}>
              Create Custom Test
            </Button>
          </Link>
        </div>

        {/* Search & Category Filter Strip */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="w-full sm:w-96">
              <Input
                placeholder="Search tests by keyword, topic, or concept..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                icon={<Search className="w-4 h-4" />}
              />
            </div>
            <div className="text-xs text-neutral-400 font-mono self-end sm:self-center">
              Showing {filteredTests.length} tests
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm'
                    : 'bg-neutral-100 dark:bg-[#16161c] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-neutral-200/60 dark:border-neutral-800'
                }`}
              >
                {cat}
                {cat === 'My Custom Tests' && userTests.length > 0 && (
                  <span className="ml-1.5 px-1.5 py-0.2 rounded-full bg-sky-500 text-white text-[10px]">
                    {userTests.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tests Grid */}
        {filteredTests.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-3xl bg-neutral-50 dark:bg-[#121216] border border-neutral-200 dark:border-neutral-800 space-y-4">
            <BookOpen className="w-10 h-10 text-neutral-400 mx-auto" />
            <h3 className="text-base font-bold text-neutral-900 dark:text-white">No custom tests found</h3>
            <p className="text-xs text-neutral-500 max-w-sm mx-auto">
              No practice modules match your current filter. Try adjusting your search query or create a new test.
            </p>
            <Link to="/custom-tests/create">
              <Button size="sm" variant="primary" icon={<Plus className="w-4 h-4" />}>
                Create This Test Now
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTests.map((test) => (
              <div
                key={test.id}
                className="group p-6 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm flex flex-col justify-between space-y-4 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-md transition-all relative overflow-hidden"
              >
                {test.isUserCreated && (
                  <div className="absolute top-0 right-0 bg-sky-500 text-white text-[9px] font-bold px-3 py-1 rounded-bl-xl tracking-wider uppercase">
                    Your Test
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant={test.difficulty === 'advanced' ? 'warning' : test.difficulty === 'intermediate' ? 'neutral' : 'success'}>
                        {test.difficulty}
                      </Badge>
                      <span className="text-[11px] font-medium text-sky-600 dark:text-sky-400">
                        {test.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs text-neutral-400 font-mono">
                        {test.timesTaken} runs
                      </span>
                      {test.isUserCreated && (
                        <button
                          onClick={(e) => handleDeleteUserTest(test.id, e)}
                          title="Delete custom test"
                          className="text-neutral-400 hover:text-red-500 p-1 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {test.title}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1 line-clamp-2 leading-relaxed">
                    {test.description}
                  </p>

                  <div className="mt-3.5 p-3 rounded-xl bg-neutral-50 dark:bg-[#181820] text-xs font-mono text-neutral-600 dark:text-neutral-400 line-clamp-2 border border-neutral-200/60 dark:border-neutral-800 leading-relaxed">
                    "{test.textContent}"
                  </div>

                  <div className="flex items-center gap-4 text-xs text-neutral-400 mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800">
                    <div className="flex items-center gap-1.5 font-mono">
                      <Clock className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{test.duration}s</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{test.author}</span>
                    </div>
                  </div>
                </div>

                <Button
                  size="sm"
                  variant="primary"
                  onClick={() => handleStartTest(test)}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="w-full"
                >
                  Start Practice
                </Button>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  )
}
