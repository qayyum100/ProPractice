# ProPractice ⚡

> **Intelligent, Adaptive Typing & Professional Articulation Platform powered by Google Gemini AI.**

ProPractice is an enterprise-grade web application designed to accelerate typing velocity, eliminate neuromuscular error latency, and build professional English & developer lexicon mastery through real-time telemetry diagnostics and generative AI curriculum synthesis.

---

## ✨ Key Features

- 🧠 **Google Gemini AI Skill Coach & Synthesizer**: Instant AI-generated custom practice modules for any topic (system design, distributed consensus, executive communication, etc.), intelligent telemetry analysis, and targeted remedial drills.
- ⌨️ **Real-Time Precision Telemetry Engine**: Live WPM, gross/net velocity, character accuracy, error latency tracking, and consistency score calculations.
- 🎯 **8-Axis Skill DNA & Weak-Key Radar**: Multi-dimensional diagnostic profile mapping speed, precision, rhythm, punctuation, numbers, and developer syntax.
- 🗺️ **Interactive Keystroke Heatmap**: Visual overlay of key-pair transition speeds, error densities, and physical layout latencies.
- 📼 **Flight Recorder Session Replay**: Frame-by-frame keystroke replay reproducing pauses, burst speed variations, and backspace habits.
- ⚔️ **Synchronized Multiplayer Arenas**: Real-time racing lobby with live progress tracks, anti-cheat telemetry verification, and competitive podiums.
- 🏆 **Gamification & Achievement Engine**: XP progression, tier badges, streak tracking, and global leaderboard rankings.
- 🛠️ **Custom Test Builder**: Create and customize custom tests or leverage Gemini AI to auto-synthesize complete tests with customized durations and difficulties.

---

## 🚀 Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS
- **AI Intelligence**: Google Gemini API (`gemini-3.5-flash-lite`, `gemini-3.7-flash`)
- **Backend / Auth**: Supabase Auth & Database (with full local mock mode fallback)
- **Icons & Effects**: Lucide Icons, Canvas Confetti
- **Linting & Tooling**: Oxlint, TypeScript Compiler

---

## 📦 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/qayyum100/ProPractice.git
cd ProPractice
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

Configure your environment keys:
```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here

# Google Gemini AI Integration
VITE_GEMINI_API_KEY=your-gemini-api-key-here
```

### 4. Run Development Server
```bash
npm run dev
```

### 5. Build for Production
```bash
npm run build
```

---

## 📄 License
MIT License
