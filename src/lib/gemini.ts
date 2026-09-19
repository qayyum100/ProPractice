/**
 * Google Gemini AI Integration for ProPractice
 * Provides high-speed LLM text synthesis, customized typing drills,
 * adaptive weak-key remediation, and intelligent coaching insights.
 */

const GEMINI_API_KEY = (import.meta.env.VITE_GEMINI_API_KEY as string) || ''

// Candidate models ordered by speed and availability
const GEMINI_MODELS = [
  'gemini-3.5-flash-lite',
  'gemini-3.7-flash',
  'gemini-flash-latest',
  'gemini-3.5-flash'
]

interface GeminiGenerateOptions {
  temperature?: number
  maxOutputTokens?: number
  systemInstruction?: string
}

/**
 * Core caller for Gemini API with automatic model failover
 */
export async function generateWithGemini(
  prompt: string,
  options: GeminiGenerateOptions = {}
): Promise<string> {
  const apiKey = GEMINI_API_KEY.trim()
  if (!apiKey) {
    throw new Error('Gemini API key is not configured')
  }

  let lastError: Error | null = null

  for (const model of GEMINI_MODELS) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`

      const payload: Record<string, unknown> = {
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ],
        generationConfig: {
          temperature: options.temperature ?? 0.7,
          maxOutputTokens: options.maxOutputTokens ?? 600
        }
      }

      if (options.systemInstruction) {
        payload.systemInstruction = {
          parts: [{ text: options.systemInstruction }]
        }
      }

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}))
        const message = errJson?.error?.message || `HTTP ${response.status}`
        lastError = new Error(`Gemini ${model} failed: ${message}`)
        continue // Try next model
      }

      const data = await response.json()
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text
      if (text && typeof text === 'string') {
        return text.trim()
      }
    } catch (err: unknown) {
      lastError = err instanceof Error ? err : new Error(String(err))
    }
  }

  throw lastError || new Error('All Gemini models failed to respond')
}

/**
 * Clean generated text for typing test usage (remove markdown code fences, asterisks, enclosing quotes)
 */
export function sanitizeTypingText(rawText: string): string {
  return rawText
    .replace(/^```[\s\S]*?\n/g, '')
    .replace(/```$/g, '')
    .replace(/^["']|["']$/g, '')
    .replace(/[*_#`~]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Generate a typing practice passage on any custom user topic
 */
export async function generateTopicPracticePassage(
  topic: string,
  difficulty: 'beginner' | 'intermediate' | 'advanced' = 'intermediate'
): Promise<string> {
  const prompt = `Create a realistic, engaging, and professional typing practice passage about: "${topic}".
Difficulty level: ${difficulty}.
Requirements:
1. Provide exactly 2 to 4 coherent sentences.
2. Target word count: 35 to 65 words.
3. Natural grammar and punctuation suitable for typing fluency.
4. Output ONLY the raw plain text passage with no titles, quotes, or markdown formatting.`

  try {
    const raw = await generateWithGemini(prompt, {
      temperature: 0.6,
      systemInstruction:
        'You are an expert typing tutor and curriculum author. Produce clean, perfectly formatted English text passages for typing speed practice.'
    })
    const cleaned = sanitizeTypingText(raw)
    return (
      cleaned ||
      `Mastering ${topic} requires dedicated repetition, tactical problem solving, and deliberate practice across core fundamentals.`
    )
  } catch (error) {
    console.warn('Gemini topic generation fallback:', error)
    return `Mastering ${topic} requires dedicated repetition, tactical problem solving, and deliberate practice across core fundamentals.`
  }
}

/**
 * Synthesize a comprehensive Custom Test (title, category, text, description) from a user prompt
 */
export interface SynthesizedCustomTest {
  title: string
  description: string
  category: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  duration: number
  textContent: string
}

export async function synthesizeCustomTestFromPrompt(
  userPrompt: string
): Promise<SynthesizedCustomTest> {
  const prompt = `Based on this user idea: "${userPrompt}", generate a complete typing test module as JSON with these exact keys:
- "title": (short catchy title, max 6 words)
- "description": (1 concise sentence explaining the learning outcome)
- "category": (one of: "Frontend", "Backend", "DevOps & Cloud", "Security", "Engineering", "Business & English", "Medical", "General")
- "difficulty": (one of: "beginner", "intermediate", "advanced")
- "duration": (one of: 30, 60, 90, 120)
- "textContent": (a high quality 40-70 word passage for typing practice, with realistic punctuation and flow)

Return ONLY valid JSON matching the above schema.`

  try {
    const raw = await generateWithGemini(prompt, {
      temperature: 0.5,
      systemInstruction:
        'You are a JSON-only API that synthesizes professional typing test curricula.'
    })
    
    // Extract JSON block if wrapped
    const jsonMatch = raw.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0])
      return {
        title: parsed.title || userPrompt,
        description:
          parsed.description || `Curated practice module synthesized for: ${userPrompt}`,
        category: parsed.category || 'Engineering',
        difficulty:
          parsed.difficulty === 'beginner' ||
          parsed.difficulty === 'intermediate' ||
          parsed.difficulty === 'advanced'
            ? parsed.difficulty
            : 'intermediate',
        duration: [30, 60, 90, 120].includes(Number(parsed.duration))
          ? Number(parsed.duration)
          : 60,
        textContent: sanitizeTypingText(parsed.textContent || userPrompt)
      }
    }
  } catch (error) {
    console.warn('Gemini custom test synthesis fallback:', error)
  }

  // Fallback if parsing or API fails
  return {
    title: userPrompt,
    description: `Curated practice module synthesized for: ${userPrompt}`,
    category: 'Engineering',
    difficulty: 'intermediate',
    duration: 60,
    textContent: sanitizeTypingText(
      `Mastering ${userPrompt} requires deliberate execution, rhythmic keystroke cadence, and deep muscle memory across essential paradigms.`
    )
  }
}

/**
 * Generate a weak-key remedial drill sentence targeting high-error letters
 */
export async function generateWeakKeyDrillWithGemini(key: string): Promise<string> {
  const prompt = `Write a short, engaging, and grammatically correct English sentence (15 to 25 words) that frequently uses the letter '${key}'.
Make it smooth and rhythmic to type. Output ONLY the raw sentence with no quotes or markdown.`

  try {
    const raw = await generateWithGemini(prompt, {
      temperature: 0.7,
      systemInstruction: 'You are a typing drill author creating alliteration and high-frequency targeted drills.'
    })
    const cleaned = sanitizeTypingText(raw)
    return cleaned || `Deliberate practice with the letter ${key} develops smooth transitions and finger independence.`
  } catch (error) {
    console.warn('Gemini weak-key drill fallback:', error)
    return `Deliberate practice with the letter ${key} develops smooth transitions and finger independence.`
  }
}

/**
 * Generate deep personalized AI Coach telemetry insights for a completed typing session
 */
export async function generateSessionCoachFeedback(stats: {
  netWpm: number
  accuracy: number
  durationSeconds: number
  category: string
  weakKeys: string[]
}): Promise<{
  speedComment: string
  accuracyComment: string
  coachingRecommendation: string
  drillText: string
  motivationalNote: string
}> {
  const prompt = `Analyze this typing performance session:
- Net Speed: ${stats.netWpm} WPM
- Accuracy: ${stats.accuracy}%
- Duration: ${Math.round(stats.durationSeconds)} seconds
- Category: ${stats.category}
- High-Error Keys: ${stats.weakKeys.join(', ') || 'None'}

Provide personalized coaching feedback as JSON with these exact fields:
- "speedComment": (1-2 sentences assessing cadence, rhythm, burst speed)
- "accuracyComment": (1-2 sentences diagnosing accuracy and error recovery)
- "coachingRecommendation": (1 actionable technical tip for their next run)
- "drillText": (a customized 20-30 word remedial sentence targeting their weak spots)
- "motivationalNote": (a concise empowering closing quote)

Return ONLY valid JSON.`

  try {
    const raw = await generateWithGemini(prompt, {
      temperature: 0.6,
      systemInstruction:
        'You are an elite cognitive typing and ergonomics coach. Provide high-impact, encouraging, and actionable telemetry insights.'
    })
    const jsonMatch = raw.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0])
      return {
        speedComment: parsed.speedComment || `Your cadence sustained ${stats.netWpm} Net WPM with steady rhythm.`,
        accuracyComment: parsed.accuracyComment || `Accuracy recorded at ${stats.accuracy}%.`,
        coachingRecommendation:
          parsed.coachingRecommendation ||
          'Focus on smooth finger transition speeds across home row key pairs.',
        drillText: sanitizeTypingText(
          parsed.drillText ||
            'Precision precedes velocity. Maintain relaxed wrists and deliberate key strikes.'
        ),
        motivationalNote:
          parsed.motivationalNote || 'Consistency compounds quickly. Keep pushing forward!'
      }
    }
  } catch (error) {
    console.warn('Gemini coach telemetry fallback:', error)
  }

  return {
    speedComment: `Your cadence clocked ${stats.netWpm} Net WPM with solid consistency.`,
    accuracyComment: `${stats.accuracy}% accuracy is solid with smooth key transitions.`,
    coachingRecommendation: `Focus on clean finger transitions on ${stats.weakKeys.join(', ') || 'punctuation'} to build muscle memory.`,
    drillText: 'Precision precedes velocity. Maintain relaxed wrists and deliberate key strikes.',
    motivationalNote: 'Great consistency today! Regular deliberate practice compounds quickly.'
  }
}
