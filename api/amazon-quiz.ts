/**
 * Vercel Serverless API Route: /api/amazon-quiz
 * Secure server-side Google Gemini AI integration for generating structured Amazon Voice Process quizzes.
 * Ensures GEMINI_API_KEY is never exposed in client bundles.
 */

import type { IncomingMessage, ServerResponse } from 'http'

interface QuizRequestBody {
  categories?: string[]
  difficulty?: 'beginner' | 'intermediate' | 'advanced' | 'mixed'
  questionCount?: number
  questionType?: 'single_choice' | 'multi_select' | 'true_false' | 'scenario' | 'mixed'
  customNotes?: string
  hideAnswersForAssessment?: boolean
}

// In-memory rate limiting tracker (per IP / window)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW_MS = 60 * 1000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 20

function isRateLimited(clientIp: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(clientIp)

  if (!record || now > record.resetAt) {
    rateLimitMap.set(clientIp, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true
  }

  record.count += 1
  return false
}

export default async function handler(req: IncomingMessage & { body?: any }, res: ServerResponse) {
  // CORS Headers for API
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  if (req.method === 'OPTIONS') {
    res.statusCode = 204
    res.end()
    return
  }

  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Method not allowed. Only POST is supported.' }))
    return
  }

  const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown'
  if (isRateLimited(clientIp)) {
    res.statusCode = 429
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Rate limit exceeded. Please wait a minute before generating more questions.' }))
    return
  }

  // Parse Body
  let body: QuizRequestBody = {}
  try {
    if (typeof req.body === 'object' && req.body !== null) {
      body = req.body
    } else {
      const buffers = []
      for await (const chunk of req) {
        buffers.push(chunk)
      }
      const rawData = Buffer.concat(buffers).toString()
      body = rawData ? JSON.parse(rawData) : {}
    }
  } catch {
    res.statusCode = 400
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Invalid JSON request payload' }))
    return
  }

  const {
    categories = ['order_issues', 'returns_refunds', 'call_structure'],
    difficulty = 'intermediate',
    questionCount = 5,
    questionType = 'single_choice',
    customNotes = '',
    hideAnswersForAssessment = false
  } = body

  // Guard bounds
  const safeCount = Math.min(Math.max(Number(questionCount) || 5, 1), 15) // Max 15 per batch to control latency & tokens

  const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY
  if (!apiKey) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({
      error: 'GEMINI_API_KEY is not configured on the server. Please check your environment variables.'
    }))
    return
  }

  const configuredModel = process.env.GEMINI_MODEL || 'gemini-3.5-flash'
  const fallbackModels = [configuredModel, 'gemini-3.8-flash', 'gemini-flash-latest', 'gemini-3.5-flash-lite']

  const prompt = `You are a Senior Customer Service Trainer and QA Auditor specializing in the Amazon North America (NA) Voice Process.
Generate a structured quiz consisting of EXACTLY ${safeCount} questions.

Configuration:
- Target Categories: ${categories.join(', ')}
- Difficulty: ${difficulty}
- Question Type: ${questionType}
${customNotes ? `- Authorized Training Notes to adhere to:\n"${customNotes.slice(0, 800)}"` : ''}

Strict Amazon NA Voice 10-Domain Master Knowledge Guidelines:
1. Security & Fundamentals: Authentication standards, PII masking (never full 16 digits/CVV/SSN), social engineering/pretexting defenses, order lifecycle (pending, preparing, shipped, delivered), unauthorized order / CAP escalation.
2. Order Issues & Delivery: DNR mandatory 24-48h buffer before replacement/refund, Where Is My Stuff (WIS) residential delivery up to 8:00 PM local time, missing items / split parcels, switcheroo/mispack verification, damaged goods/hazardous liquids disposal, RDD weather buffers.
3. Returns, Refunds & Replacements: Standard 30-day return window, Extended Holiday return (Nov 1-Dec 31 returnable to Jan 31), Refund at First Scan (RFS), exact financial timelines (Gift Card 2-3h, Credit Card 3-5 business days, Debit up to 10 business days), 30-day return window for original item on replacements, returnless refunds for hazards/low-value.
4. Payments & Concessions: Pre-authorization hold vs dispatch settlement, split-tender (Gift Card + 1 card), courtesy credits and shipping fee refunds for verified delays, partial refund adjustments for bulky cosmetic flaws.
5. Fulfillment & Marketplace: FBA vs MFN; MFN requires buyer-seller messaging with mandatory 48h seller response SLA before A-to-z claim; SFP / MFN Prime; Amazon Retail 1P ownership; zero tolerance for off-platform payment solicitations.
6. Prime & Subscriptions: Prime tiers (Standard $139/yr, Prime Student 50% discount, Prime Access EBT), Amazon Household sharing, full refund on cancellation if zero benefits used / prorated if used, Subscribe & Save (1-4 items = 5%, 5+ items = 15%).
7. International Shipping: Amazon Global Store, DDP Import Fees Deposit (IFD) with 60-day auto-refund of surplus, customs clearance tax ID requirements, 3-5 business day international delay buffer before lost-in-transit declaration.
8. Transfers & Operations: Warm Transfer protocol (permission, hold, brief receiving agent, introduce), Inline Transfers, routing to specialized teams (CAP/Fraud, Ring Tech, Logistics), searching Heartbeat/CSC in AC3.
9. Call Handling & Communication: 9-Stage Call Flow (Greeting, Verification, ACA Empathy, Probing, 1-2 min max hold with permission, Clear Resolution, Further Assistance, Power Closing), avoiding jargon (AC3, CSC, SOP, MFN) with customers, never guessing facts.
10. Assessment & Performance: First Contact Resolution (FCR), Average Handling Time (AHT 5-7 min target), CSAT/DSAT, structured AC3 contact notes (Issue, Verification, Action, Next Steps), policy-first decision making without concession coercion.

Output MUST be a valid JSON array conforming strictly to this TypeScript schema:
[
  {
    "id": "ai-gen-[number]",
    "category": "${categories[0] || 'order_issues'}",
    "topic": "Specific SOP topic name",
    "difficulty": "beginner" | "intermediate" | "advanced",
    "type": "single_choice" | "multi_select" | "true_false" | "scenario",
    "question": "Clear, professional question text (or realistic scenario dialogue)",
    "options": [
      { "id": "opt_a", "text": "Option text", "distractorReason": "Why this is incorrect or correct" },
      { "id": "opt_b", "text": "Option text", "distractorReason": "Why this is incorrect or correct" },
      { "id": "opt_c", "text": "Option text", "distractorReason": "Why this is incorrect or correct" },
      { "id": "opt_d", "text": "Option text", "distractorReason": "Why this is incorrect or correct" }
    ],
    "correctAnswerIds": ["opt_a"],
    "explanation": "Thorough, authoritative explanation referencing the specific SOP policy rule.",
    "hint": "A pedagogic clue that teaches the concept without giving away the direct answer.",
    "referenceSource": "Amazon NA Voice Process SOP",
    "isVerified": false
  }
]

Do NOT output markdown fences or code blocks. Output ONLY raw JSON.`

  let lastError = ''
  for (const model of fallbackModels) {
    try {
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 2500,
            responseMimeType: 'application/json'
          }
        })
      })

      if (!response.ok) {
        const errorBody = await response.text()
        lastError = `Model ${model} returned HTTP ${response.status}: ${errorBody}`
        continue
      }

      const resJson = await response.json()
      const rawText = resJson?.candidates?.[0]?.content?.parts?.[0]?.text
      if (!rawText) {
        lastError = `Model ${model} returned empty content parts.`
        continue
      }

      // Parse and validate
      let parsedQuestions: any[] = []
      const jsonStart = rawText.indexOf('[')
      const jsonEnd = rawText.lastIndexOf(']')
      if (jsonStart >= 0 && jsonEnd > jsonStart) {
        parsedQuestions = JSON.parse(rawText.substring(jsonStart, jsonEnd + 1))
      } else {
        parsedQuestions = JSON.parse(rawText)
      }

      if (!Array.isArray(parsedQuestions) || parsedQuestions.length === 0) {
        throw new Error('AI output was not a non-empty array of questions.')
      }

      // Sanitize and validate each question
      const validatedQuestions = parsedQuestions.map((q, idx) => {
        const qId = q.id || `ai-${Date.now()}-${idx}`
        const options = Array.isArray(q.options)
          ? q.options.map((opt: any, oIdx: number) => ({
              id: opt.id || `opt_${oIdx + 1}`,
              text: String(opt.text || `Option ${oIdx + 1}`).trim(),
              distractorReason: opt.distractorReason ? String(opt.distractorReason).trim() : undefined
            }))
          : []

        return {
          id: qId,
          category: q.category || categories[0] || 'order_issues',
          topic: q.topic || 'General Voice SOP',
          difficulty: ['beginner', 'intermediate', 'advanced'].includes(q.difficulty) ? q.difficulty : difficulty,
          type: ['single_choice', 'multi_select', 'true_false', 'scenario'].includes(q.type) ? q.type : 'single_choice',
          question: String(q.question || 'SOP Knowledge Question').trim(),
          options,
          correctAnswerIds: Array.isArray(q.correctAnswerIds) && q.correctAnswerIds.length > 0 ? q.correctAnswerIds : [options[0]?.id || 'opt_1'],
          explanation: String(q.explanation || 'Refer to Amazon standard operating procedures for resolution guidance.').trim(),
          hint: String(q.hint || 'Review the core call flow and SLA timelines for North America.').trim(),
          referenceSource: q.referenceSource || 'Amazon NA Voice Process - Gemini AI Generated',
          isVerified: false
        }
      })

      // In assessment mode, do not send correctAnswerIds or explanation to the client upfront
      if (hideAnswersForAssessment) {
        const clientQuestions = validatedQuestions.map(({ correctAnswerIds, explanation, ...rest }) => rest)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({
          questions: clientQuestions,
          assessmentSessionKey: Buffer.from(JSON.stringify(validatedQuestions)).toString('base64'),
          count: clientQuestions.length,
          modelUsed: model
        }))
        return
      }

      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({
        questions: validatedQuestions,
        count: validatedQuestions.length,
        modelUsed: model
      }))
      return
    } catch (err: any) {
      lastError = err?.message || String(err)
    }
  }

  // If all models failed
  res.statusCode = 502
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({
    error: 'Gemini AI generation failed across all models.',
    details: lastError
  }))
}
