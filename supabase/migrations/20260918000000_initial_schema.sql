-- Practice: Adaptive Typing & English Learning Platform
-- Supabase PostgreSQL Schema Migration with RLS and Triggers

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Profiles Table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  primary_goal TEXT DEFAULT 'increase_speed',
  is_developer BOOLEAN DEFAULT false,
  daily_target_minutes INTEGER DEFAULT 15,
  experience_level TEXT DEFAULT 'intermediate',
  english_level TEXT DEFAULT 'Level 2',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. User Stats Table
CREATE TABLE IF NOT EXISTS public.user_stats (
  user_id UUID PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
  total_xp INTEGER DEFAULT 0,
  current_level INTEGER DEFAULT 1,
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  last_practice_date DATE,
  total_sessions INTEGER DEFAULT 0,
  total_practice_seconds INTEGER DEFAULT 0,
  avg_wpm NUMERIC(5, 2) DEFAULT 0,
  top_wpm NUMERIC(5, 2) DEFAULT 0,
  avg_accuracy NUMERIC(5, 2) DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Typing Sessions Table
CREATE TABLE IF NOT EXISTS public.typing_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  content_id TEXT,
  category TEXT NOT NULL, -- 'typing', 'english', 'mixed', 'developer', 'scenario', 'custom'
  duration_seconds NUMERIC(6, 2) NOT NULL,
  gross_wpm NUMERIC(5, 2) NOT NULL,
  net_wpm NUMERIC(5, 2) NOT NULL,
  accuracy NUMERIC(5, 2) NOT NULL,
  error_count INTEGER DEFAULT 0,
  consistency_score NUMERIC(5, 2) DEFAULT 0,
  backspace_count INTEGER DEFAULT 0,
  keystroke_log JSONB,
  weak_keys TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Typing Key Metrics Table (Heatmap & Weakness analysis)
CREATE TABLE IF NOT EXISTS public.typing_key_metrics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  key_char VARCHAR(10) NOT NULL,
  total_presses INTEGER DEFAULT 0,
  error_presses INTEGER DEFAULT 0,
  avg_latency_ms NUMERIC(6, 2) DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, key_char)
);

-- 5. English Progress Table
CREATE TABLE IF NOT EXISTS public.english_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  vocabulary_word TEXT NOT NULL,
  category TEXT DEFAULT 'general',
  mastery_score INTEGER DEFAULT 0,
  mistake_count INTEGER DEFAULT 0,
  last_practiced_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, vocabulary_word)
);

-- 6. Personal Bests Table
CREATE TABLE IF NOT EXISTS public.personal_bests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  test_type TEXT NOT NULL, -- '15s', '30s', '60s', '120s', '300s', 'english', 'developer'
  highest_wpm NUMERIC(5, 2) NOT NULL,
  highest_accuracy NUMERIC(5, 2) NOT NULL,
  achieved_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, test_type)
);

-- 7. Achievements Catalogue Table
CREATE TABLE IF NOT EXISTS public.achievements (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  xp_reward INTEGER DEFAULT 100,
  category TEXT DEFAULT 'general',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. User Unlocked Achievements
CREATE TABLE IF NOT EXISTS public.user_achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  achievement_id TEXT REFERENCES public.achievements(id) ON DELETE CASCADE,
  unlocked_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, achievement_id)
);

-- 9. Custom Tests Table
CREATE TABLE IF NOT EXISTS public.custom_tests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  creator_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  description TEXT,
  text_content TEXT NOT NULL,
  difficulty TEXT DEFAULT 'intermediate',
  category TEXT DEFAULT 'general',
  duration_seconds INTEGER DEFAULT 60,
  visibility TEXT DEFAULT 'public', -- 'public', 'unlisted', 'private'
  times_taken INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. Multiplayer Challenge Rooms Table
CREATE TABLE IF NOT EXISTS public.challenge_rooms (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  host_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  room_code VARCHAR(8) UNIQUE NOT NULL,
  title TEXT NOT NULL,
  text_content TEXT NOT NULL,
  duration_seconds INTEGER DEFAULT 60,
  max_participants INTEGER DEFAULT 8,
  status TEXT DEFAULT 'waiting', -- 'waiting', 'in_progress', 'completed'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 11. Room Participants Table
CREATE TABLE IF NOT EXISTS public.room_participants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  room_id UUID REFERENCES public.challenge_rooms(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  username TEXT NOT NULL,
  current_wpm NUMERIC(5, 2) DEFAULT 0,
  progress_percent NUMERIC(5, 2) DEFAULT 0,
  accuracy NUMERIC(5, 2) DEFAULT 100,
  is_finished BOOLEAN DEFAULT false,
  final_wpm NUMERIC(5, 2),
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(room_id, user_id)
);

-- Indexes for high-frequency queries
CREATE INDEX IF NOT EXISTS idx_typing_sessions_user ON public.typing_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_typing_sessions_created ON public.typing_sessions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_typing_key_metrics_user ON public.typing_key_metrics(user_id);
CREATE INDEX IF NOT EXISTS idx_user_stats_wpm ON public.user_stats(top_wpm DESC);
CREATE INDEX IF NOT EXISTS idx_custom_tests_public ON public.custom_tests(visibility, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_room_code ON public.challenge_rooms(room_code);

-- Enable Row Level Security (RLS) on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.typing_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.typing_key_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.english_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.personal_bests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.custom_tests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.challenge_rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.room_participants ENABLE ROW LEVEL SECURITY;

-- RLS Policies
-- Profiles: Users can read public info; only owner can update
CREATE POLICY "Profiles are viewable by everyone" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- User Stats: Viewable by everyone for leaderboards, updatable by owner
CREATE POLICY "Stats are viewable by everyone" ON public.user_stats FOR SELECT USING (true);
CREATE POLICY "Users can update own stats" ON public.user_stats FOR ALL USING (auth.uid() = user_id);

-- Typing Sessions: Private to the user
CREATE POLICY "Users can manage own sessions" ON public.typing_sessions FOR ALL USING (auth.uid() = user_id);

-- Key Metrics: Private to the user
CREATE POLICY "Users can manage own key metrics" ON public.typing_key_metrics FOR ALL USING (auth.uid() = user_id);

-- English Progress: Private to the user
CREATE POLICY "Users can manage own english progress" ON public.english_progress FOR ALL USING (auth.uid() = user_id);

-- Personal Bests: Viewable by all, updatable by owner
CREATE POLICY "Personal bests viewable by everyone" ON public.personal_bests FOR SELECT USING (true);
CREATE POLICY "Users can update own personal bests" ON public.personal_bests FOR ALL USING (auth.uid() = user_id);

-- Achievements: Public catalogue
CREATE POLICY "Achievements catalogue is public" ON public.achievements FOR SELECT USING (true);
CREATE POLICY "Users can view and insert own achievements" ON public.user_achievements FOR ALL USING (auth.uid() = user_id);

-- Custom Tests: Public tests viewable by all, private only by creator
CREATE POLICY "Custom tests visibility rule" ON public.custom_tests FOR SELECT USING (
  visibility = 'public' OR visibility = 'unlisted' OR auth.uid() = creator_id
);
CREATE POLICY "Users can manage own custom tests" ON public.custom_tests FOR ALL USING (auth.uid() = creator_id);

-- Challenge Rooms & Participants
CREATE POLICY "Rooms viewable by everyone" ON public.challenge_rooms FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create rooms" ON public.challenge_rooms FOR INSERT WITH CHECK (auth.uid() = host_id);
CREATE POLICY "Host can update room" ON public.challenge_rooms FOR UPDATE USING (auth.uid() = host_id);

CREATE POLICY "Room participants viewable by all" ON public.room_participants FOR SELECT USING (true);
CREATE POLICY "Users can join rooms" ON public.room_participants FOR ALL USING (auth.uid() = user_id);

-- Auto-create profile trigger on auth signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username, full_name, avatar_url)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'username', 'User_' || SUBSTRING(new.id::text, 1, 6)),
    COALESCE(new.raw_user_meta_data->>'full_name', 'Practitioner'),
    COALESCE(new.raw_user_meta_data->>'avatar_url', '')
  );
  
  INSERT INTO public.user_stats (user_id)
  VALUES (new.id);
  
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
