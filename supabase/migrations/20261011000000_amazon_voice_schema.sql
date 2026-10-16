-- ProPractice — Amazon NA Voice Process Schema Migration
-- Defines persistent tables for Quiz Attempts, Question Telemetry, and Question Bank

-- 1. Voice Quiz Attempts Table
CREATE TABLE IF NOT EXISTS public.voice_quiz_attempts (
  id TEXT PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  category TEXT NOT NULL,
  difficulty TEXT NOT NULL,
  question_count INTEGER NOT NULL,
  score INTEGER NOT NULL,
  accuracy_percentage NUMERIC(5, 2) NOT NULL,
  total_duration_seconds INTEGER NOT NULL,
  mode TEXT NOT NULL,
  category_breakdown JSONB NOT NULL DEFAULT '{}'::jsonb,
  started_at TIMESTAMPTZ NOT NULL,
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast user history lookup
CREATE INDEX IF NOT EXISTS idx_voice_quiz_attempts_user_id ON public.voice_quiz_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_voice_quiz_attempts_completed_at ON public.voice_quiz_attempts(completed_at DESC);

-- 2. Voice Question Attempts Table (Granular question-level diagnostics)
CREATE TABLE IF NOT EXISTS public.voice_question_attempts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  attempt_id TEXT REFERENCES public.voice_quiz_attempts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  question_id TEXT NOT NULL,
  category TEXT NOT NULL,
  topic TEXT NOT NULL,
  selected_options TEXT[] NOT NULL DEFAULT '{}',
  is_correct BOOLEAN NOT NULL,
  is_marked_for_review BOOLEAN DEFAULT false,
  time_spent_seconds INTEGER DEFAULT 0,
  answered_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_voice_question_attempts_attempt_id ON public.voice_question_attempts(attempt_id);
CREATE INDEX IF NOT EXISTS idx_voice_question_attempts_question_id ON public.voice_question_attempts(question_id);

-- 3. Voice Question Bank (Cached reusable & verified questions)
CREATE TABLE IF NOT EXISTS public.voice_question_bank (
  id TEXT PRIMARY KEY,
  category TEXT NOT NULL,
  topic TEXT NOT NULL,
  difficulty TEXT NOT NULL,
  type TEXT NOT NULL,
  question TEXT NOT NULL,
  options JSONB NOT NULL,
  correct_answer_ids TEXT[] NOT NULL,
  explanation TEXT NOT NULL,
  hint TEXT,
  reference_source TEXT,
  is_verified BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_voice_question_bank_category ON public.voice_question_bank(category);

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.voice_quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.voice_question_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.voice_question_bank ENABLE ROW LEVEL SECURITY;

-- 5. RLS Policies
-- Users can view and insert their own quiz attempts (or anonymous records)
CREATE POLICY "Allow users to read their own voice quiz attempts"
  ON public.voice_quiz_attempts FOR SELECT
  USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Allow users to insert voice quiz attempts"
  ON public.voice_quiz_attempts FOR INSERT
  WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Allow users to read their own question attempts"
  ON public.voice_question_attempts FOR SELECT
  USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Allow users to insert question attempts"
  ON public.voice_question_attempts FOR INSERT
  WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Allow public read access to verified question bank"
  ON public.voice_question_bank FOR SELECT
  USING (true);
