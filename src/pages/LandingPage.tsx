import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Container } from '../components/layout/Container'
import { StaggeredText } from '../components/StaggeredText'
import {
  Sparkles,
  Zap,
  Bot,
  Target,
  Terminal,
  Swords,
  TrendingUp,
  ShieldCheck,
  Award,
  ArrowRight,
  Star,
  Flame,
  BarChart2
} from 'lucide-react'

const TYPING_DEMO_TEXT = "Verify the JSON Web Token in the authorization header before processing."
const DEMO_SPEED = 55 // ms per character

const HeroTypingDemo: React.FC = () => {
  const [charIndex, setCharIndex] = useState(0)
  const [wpm, setWpm] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    const start = () => {
      setCharIndex(0)
      setWpm(0)
      startTimeRef.current = Date.now()
      intervalRef.current = setInterval(() => {
        setCharIndex(prev => {
          const next = prev + 1
          if (next > TYPING_DEMO_TEXT.length) {
            // Pause then restart
            setTimeout(start, 2000)
            if (intervalRef.current) clearInterval(intervalRef.current)
            return prev
          }
          // Calculate live WPM
          if (startTimeRef.current) {
            const elapsedMin = (Date.now() - startTimeRef.current) / 60000
            const currentWpm = elapsedMin > 0 ? Math.round((next / 5) / elapsedMin) : 0
            setWpm(currentWpm)
          }
          return next
        })
      }, DEMO_SPEED)
    }
    start()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div className="rounded-3xl bg-[#0d0d12] border border-neutral-800 shadow-2xl overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-800 bg-[#111116]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-amber-400/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs text-neutral-400 font-mono">Live Practice — Developer English</span>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono">
          <span className="text-neutral-500">00:{(60 - Math.floor(charIndex * DEMO_SPEED / 1000)).toString().padStart(2, '0')} left</span>
          <span className="text-sky-400 font-bold">{wpm} WPM</span>
          <span className="text-emerald-400 font-bold">
            {charIndex > 0 ? Math.round((Array.from(TYPING_DEMO_TEXT.slice(0, charIndex)).filter((c, i) => c === TYPING_DEMO_TEXT[i]).length / charIndex) * 100) : 100}% Acc
          </span>
        </div>
      </div>

      {/* Typing area */}
      <div className="p-4 sm:p-6 md:p-10 font-mono text-base sm:text-xl md:text-2xl leading-relaxed tracking-wide min-h-[100px] overflow-hidden">
        {TYPING_DEMO_TEXT.split('').map((char, i) => {
          if (i < charIndex) {
            return <span key={i} className="text-emerald-400">{char}</span>
          } else if (i === charIndex) {
            return (
              <span key={i} className="relative">
                <span className="absolute -left-[1px] top-1 bottom-1 w-[2.5px] bg-sky-400 rounded-full animate-pulse-subtle" />
                <span className="text-neutral-600">{char}</span>
              </span>
            )
          }
          return <span key={i} className="text-neutral-700">{char}</span>
        })}
      </div>

      {/* Coach feedback bar */}
      <div className="flex items-center justify-between px-5 py-3 border-t border-neutral-800 bg-[#111116]">
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <Bot className="w-4 h-4 text-sky-400" />
          <span>AI Coach: Perfect rhythm on camelCase. Watch the period key.</span>
        </div>
        <span className="text-xs text-amber-400 font-semibold font-mono">+{charIndex > 5 ? 45 : 0} XP</span>
      </div>
    </div>
  )
}

const FeaturePillar: React.FC<{
  icon: React.ReactNode
  color: string
  title: string
  description: string
}> = ({ icon, color, title, description }) => (
  <div className="group p-8 rounded-3xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 space-y-4">
    <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{title}</h3>
    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{description}</p>
  </div>
)

const StatCard: React.FC<{ value: string; label: string; icon: React.ReactNode }> = ({ value, label, icon }) => (
  <div className="text-center space-y-2">
    <div className="flex items-center justify-center text-sky-500 mb-1">{icon}</div>
    <div className="text-3xl sm:text-4xl font-mono font-extrabold text-neutral-900 dark:text-white tracking-tight">
      {value}
    </div>
    <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">{label}</div>
  </div>
)

export const LandingPage: React.FC = () => {
  return (
    <div className="space-y-20 sm:space-y-32 py-12 sm:py-16">

      {/* ============== HERO ============== */}
      <Container size="lg" className="space-y-10">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200/80 dark:border-sky-800/60 text-xs font-semibold text-sky-700 dark:text-sky-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Typing Speed × English Mastery × AI Intelligence</span>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.05]">
              <StaggeredText
                text="Type better."
                as="span"
                by="word"
                variant="fadeUp"
                staggerDelay={80}
                duration={600}
                delay={100}
                onScroll={false}
                className="block"
              />
              <StaggeredText
                text="Think faster."
                as="span"
                by="word"
                variant="fadeUp"
                staggerDelay={80}
                duration={600}
                delay={380}
                onScroll={false}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-400"
              />
            </h1>
            <StaggeredText
              text="Build professional typing speed, neuromuscular accuracy, vocabulary breadth, and developer English through adaptive, data-driven daily practice."
              as="p"
              by="word"
              variant="fadeUp"
              staggerDelay={12}
              duration={450}
              delay={680}
              onScroll={false}
              className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/practice">
              <Button size="lg" variant="primary" icon={<Zap className="w-4 h-4" />}>
                Start Practicing Free
              </Button>
            </Link>
            <Link to="/assessment">
              <Button size="lg" variant="secondary" icon={<Target className="w-4 h-4" />}>
                Take Skill Assessment
              </Button>
            </Link>
          </div>
        </div>

        {/* Live typing demo */}
        <div className="max-w-5xl mx-auto animate-slide-up overflow-hidden">
          <HeroTypingDemo />
        </div>
      </Container>

      {/* ============== STATS STRIP ============== */}
      <div className="py-12 border-y border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-[#0e0e14]">
        <Container size="lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            <StatCard value="28+" label="Practice Modes" icon={<BarChart2 className="w-5 h-5" />} />
            <StatCard value="10" label="Skill Levels" icon={<TrendingUp className="w-5 h-5" />} />
            <StatCard value="6" label="Categories" icon={<Sparkles className="w-5 h-5" />} />
            <StatCard value="AI" label="Coaching Engine" icon={<Bot className="w-5 h-5" />} />
          </div>
        </Container>
      </div>

      {/* ============== THREE PILLARS ============== */}
      <Container size="lg" className="space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
            Engineered For Long-Term Growth
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Not just a speed test. A comprehensive skill engine.
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Every session generates deep telemetry to identify your weaknesses and compound your progress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeaturePillar
            icon={<Zap className="w-6 h-6 text-sky-600 dark:text-sky-400" />}
            color="bg-sky-50 dark:bg-sky-950/60"
            title="Zero-Latency Typing Core"
            description="Sub-millisecond input handling, Gross & Net WPM distinction, keystroke interval consistency analytics, and flight recorder replays to analyze your every session."
          />
          <FeaturePillar
            icon={<Terminal className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />}
            color="bg-indigo-50 dark:bg-indigo-950/60"
            title="Developer & Practical English"
            description="Practice real-world Pull Request reviews, incident postmortems, architecture RFCs, and professional stakeholder communication in realistic scenarios."
          />
          <FeaturePillar
            icon={<Bot className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
            color="bg-purple-50 dark:bg-purple-950/60"
            title="AI Skill Coach & Radar"
            description="Identifies weak transition keys and punctuation bottlenecks. Dynamically generates personalized remedial drills tuned exactly to your documented weaknesses."
          />
        </div>
      </Container>

      {/* ============== MORE FEATURES GRID ============== */}
      <Container size="lg" className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Everything you need to master your craft.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />, bg: 'bg-emerald-50 dark:bg-emerald-950/40', title: 'Anti-Cheat Telemetry', desc: 'Keystroke timing analysis ensures fair multiplayer competition.' },
            { icon: <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />, bg: 'bg-amber-50 dark:bg-amber-950/40', title: 'XP & Achievements', desc: 'Earn XP, level up through 10 tiers, and unlock achievement badges.' },
            { icon: <Star className="w-5 h-5 text-sky-600 dark:text-sky-400" />, bg: 'bg-sky-50 dark:bg-sky-950/40', title: 'Skill DNA Profile', desc: '8-axis performance fingerprint across speed, rhythm, vocabulary, and syntax.' },
            { icon: <Flame className="w-5 h-5 text-red-500 dark:text-red-400" />, bg: 'bg-red-50 dark:bg-red-950/40', title: 'Daily Streak System', desc: 'Maintain momentum with daily practice goals and streak tracking.' },
            { icon: <Swords className="w-5 h-5 text-violet-600 dark:text-violet-400" />, bg: 'bg-violet-50 dark:bg-violet-950/40', title: 'Live Challenge Rooms', desc: 'Race friends in real-time with room codes and synchronized starts.' },
            { icon: <BarChart2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />, bg: 'bg-blue-50 dark:bg-blue-950/40', title: 'Deep Analytics', desc: 'Velocity trajectory charts, heatmaps, and consistency scoring.' },
            { icon: <Terminal className="w-5 h-5 text-teal-600 dark:text-teal-400" />, bg: 'bg-teal-50 dark:bg-teal-950/40', title: 'Custom Test Builder', desc: 'Build and share your own custom typing tests with the community.' },
            { icon: <TrendingUp className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />, bg: 'bg-indigo-50 dark:bg-indigo-950/40', title: 'Adaptive Difficulty', desc: 'The platform detects your level and adjusts text difficulty automatically.' },
          ].map((f, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white dark:bg-[#121216] border border-neutral-200 dark:border-[#22222a] shadow-sm hover:shadow-md transition-all space-y-3 group">
              <div className={`w-9 h-9 rounded-xl ${f.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                {f.icon}
              </div>
              <h4 className="text-sm font-bold text-neutral-900 dark:text-white">{f.title}</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* ============== CHALLENGE ROOMS SHOWCASE ============== */}
      <Container size="lg">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl border border-neutral-800">
          <div className="space-y-5 max-w-lg">
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400">
              <Swords className="w-4 h-4" />
              <span>Multiplayer Challenge Rooms</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Race live against friends and colleagues.
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Create a custom challenge room, share the 6-character room code, and compete in real-time with synchronized starts, live progress tracks, and anti-cheat keystroke telemetry.
            </p>
            <Link to="/challenges">
              <Button size="md" variant="secondary" icon={<ArrowRight className="w-4 h-4" />}>
                Explore Challenge Rooms
              </Button>
            </Link>
          </div>

          <div className="w-full md:w-80 p-5 rounded-2xl bg-neutral-800/60 border border-neutral-700 space-y-4 font-mono text-xs shrink-0">
            <div className="flex justify-between text-neutral-400">
              <span>ROOM: #DEV-829</span>
              <span className="text-emerald-400 font-bold animate-pulse-subtle">● LIVE RACE</span>
            </div>
            <div className="space-y-3">
              {[
                { name: 'You', wpm: 84, pct: 85, color: 'bg-sky-500' },
                { name: 'Alex M.', wpm: 72, pct: 68, color: 'bg-purple-400' },
                { name: 'Sarah T.', wpm: 68, pct: 55, color: 'bg-neutral-500' },
              ].map((p, i) => (
                <div key={i}>
                  <div className="flex justify-between text-neutral-300 mb-1">
                    <span>{i + 1}. {p.name}</span>
                    <span className="text-sky-400 font-bold">{p.wpm} WPM</span>
                  </div>
                  <div className="w-full bg-neutral-700 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${p.color} rounded-full transition-all`}
                      style={{ width: `${p.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* ============== CALL TO ACTION ============== */}
      <Container size="md" className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs font-semibold text-amber-700 dark:text-amber-400">
          <Flame className="w-3.5 h-3.5" />
          <span>Join thousands of professionals improving daily</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
          Ready to elevate your typing and articulation?
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
          Engineers, writers, and students worldwide are building speed, accuracy, and language fluency through deliberate daily practice.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link to="/practice">
            <Button size="lg" variant="primary" icon={<Zap className="w-4 h-4" />}>
              Start Practicing Now — Free
            </Button>
          </Link>
          <Link to="/assessment">
            <Button size="lg" variant="outline">
              Take Initial Assessment
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  )
}
