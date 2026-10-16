export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string | null
          full_name: string | null
          avatar_url: string | null
          primary_goal: string
          is_developer: boolean
          daily_target_minutes: number
          experience_level: string
          english_level: string
          created_at: string
          updated_at: string
        }
        Insert: Partial<Database['public']['Tables']['profiles']['Row']> & { id: string }
        Update: Partial<Database['public']['Tables']['profiles']['Row']>
      }
      user_stats: {
        Row: {
          user_id: string
          total_xp: number
          current_level: number
          current_streak: number
          longest_streak: number
          last_practice_date: string | null
          total_sessions: number
          total_practice_seconds: number
          avg_wpm: number
          top_wpm: number
          avg_accuracy: number
          updated_at: string
        }
        Insert: Partial<Database['public']['Tables']['user_stats']['Row']> & { user_id: string }
        Update: Partial<Database['public']['Tables']['user_stats']['Row']>
      }
      typing_sessions: {
        Row: {
          id: string
          user_id: string
          content_id: string | null
          category: string
          duration_seconds: number
          gross_wpm: number
          net_wpm: number
          accuracy: number
          error_count: number
          consistency_score: number
          backspace_count: number
          keystroke_log: Json | null
          weak_keys: string[]
          created_at: string
        }
        Insert: Partial<Database['public']['Tables']['typing_sessions']['Row']> & {
          user_id: string
          category: string
          duration_seconds: number
          gross_wpm: number
          net_wpm: number
          accuracy: number
        }
        Update: Partial<Database['public']['Tables']['typing_sessions']['Row']>
      }
      voice_quiz_attempts: {
        Row: {
          id: string
          user_id: string | null
          category: string
          difficulty: string
          question_count: number
          score: number
          accuracy_percentage: number
          total_duration_seconds: number
          mode: string
          category_breakdown: Json
          started_at: string
          completed_at: string
          created_at: string
        }
        Insert: {
          id: string
          user_id?: string | null
          category: string
          difficulty: string
          question_count: number
          score: number
          accuracy_percentage: number
          total_duration_seconds: number
          mode: string
          category_breakdown?: Json
          started_at?: string
          completed_at?: string
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['voice_quiz_attempts']['Insert']>
        Relationships: []
      }
      voice_question_attempts: {
        Row: {
          id: string
          attempt_id: string
          user_id: string | null
          question_id: string
          category: string
          topic: string
          selected_options: string[]
          is_correct: boolean
          is_marked_for_review: boolean
          time_spent_seconds: number
          answered_at: string
        }
        Insert: {
          id?: string
          attempt_id: string
          user_id?: string | null
          question_id: string
          category: string
          topic: string
          selected_options?: string[]
          is_correct: boolean
          is_marked_for_review?: boolean
          time_spent_seconds?: number
          answered_at?: string
        }
        Update: Partial<Database['public']['Tables']['voice_question_attempts']['Insert']>
        Relationships: []
      }
    }
  }
}
