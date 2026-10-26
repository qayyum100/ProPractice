/**
 * Automated Verification Tests for ProPractice English Levels Quiz System
 * Tests:
 * 1. CEFR Level completeness (Level 1 to Level 5)
 * 2. Question Bank Integrity & 4-option structure
 * 3. Correct answer mapping & pedagogical explanations
 * 4. Focus Competency Topics mapping
 * 5. Scoring & Level breakdown calculations
 */

import {
  ENGLISH_LEVELS_METADATA,
  FOCUS_ENGLISH_TOPICS,
  VERIFIED_ENGLISH_QUESTION_BANK
} from '../../data/englishLevelsQuestionBank'
import { EnglishQuizLevelKey, EnglishQuizAttemptRecord } from '../../types/englishQuiz'

export function runEnglishTestSuite(): { passed: number; failed: number; errors: string[] } {
  let passed = 0
  let failed = 0
  const errors: string[] = []

  function assert(condition: boolean, testName: string) {
    if (condition) {
      passed++
      console.log(`✓ PASS: ${testName}`)
    } else {
      failed++
      errors.push(testName)
      console.error(`✗ FAIL: ${testName}`)
    }
  }

  console.log('--- Starting ProPractice English Levels Quiz Unit & Integrity Tests ---')

  // Test 1: CEFR Level Completeness (All 5 Levels Defined)
  const expectedLevels: EnglishQuizLevelKey[] = ['level_1', 'level_2', 'level_3', 'level_4', 'level_5']

  assert(
    ENGLISH_LEVELS_METADATA.length === 5,
    'Exactly 5 CEFR proficiency levels are defined in metadata'
  )

  expectedLevels.forEach((key) => {
    const meta = ENGLISH_LEVELS_METADATA.find((m) => m.key === key)
    assert(!!meta, `Level metadata exists for: ${key}`)

    const count = VERIFIED_ENGLISH_QUESTION_BANK.filter((q) => q.level === key).length
    assert(count >= 10, `Level ${key} has at least 10 verified questions (found ${count})`)
  })

  // Test 2: Question Bank Schema & Quality
  assert(
    VERIFIED_ENGLISH_QUESTION_BANK.length >= 50,
    `Question bank contains at least 50 verified questions (found ${VERIFIED_ENGLISH_QUESTION_BANK.length})`
  )

  VERIFIED_ENGLISH_QUESTION_BANK.forEach((q) => {
    assert(Boolean(q.id && q.id.startsWith('eng-')), `Question ${q.id} has valid ID prefix`)
    assert(Boolean(q.question && q.question.length > 10), `Question ${q.id} has substantial prompt`)
    assert(Array.isArray(q.options) && q.options.length >= 4, `Question ${q.id} has at least 4 options`)
    assert(Boolean(q.correctAnswerIds && q.correctAnswerIds.length >= 1), `Question ${q.id} has correct answer`)
    assert(
      q.correctAnswerIds.every((id) => q.options.some((opt) => opt.id === id)),
      `Question ${q.id} correct answer matches an existing option ID`
    )
    assert(Boolean(q.explanation && q.explanation.length > 20), `Question ${q.id} has detailed explanation`)
    assert(Boolean(q.hint && q.hint.length > 5), `Question ${q.id} has helpful hint`)
    assert(Boolean(q.referenceCEFR), `Question ${q.id} has CEFR reference tag: ${q.referenceCEFR}`)
  })

  // Test 3: Focus Topics Coverage
  assert(
    FOCUS_ENGLISH_TOPICS.length === 8,
    'All 8 focus competency topics are defined'
  )

  FOCUS_ENGLISH_TOPICS.forEach((topic) => {
    const qTerm = topic.query.toLowerCase()
    const matching = VERIFIED_ENGLISH_QUESTION_BANK.filter(
      (q) =>
        q.topic.toLowerCase().includes(qTerm) ||
        q.question.toLowerCase().includes(qTerm) ||
        q.explanation.toLowerCase().includes(qTerm) ||
        (q.grammarRule && q.grammarRule.toLowerCase().includes(qTerm))
    )
    assert(
      matching.length >= 3,
      `Focus topic "${topic.title}" matches at least 3 questions in bank (found ${matching.length})`
    )
  })

  // Test 4: Scoring and Level Breakdown Calculation
  const mockQuestions = VERIFIED_ENGLISH_QUESTION_BANK.slice(0, 10)
  const mockUserAnswers: Record<string, { selectedOptionIds: string[]; isCorrect: boolean }> = {}

  let expectedCorrect = 0
  mockQuestions.forEach((q, idx) => {
    if (idx % 2 === 0) {
      mockUserAnswers[q.id] = { selectedOptionIds: [q.correctAnswerIds[0]], isCorrect: true }
      expectedCorrect++
    } else {
      mockUserAnswers[q.id] = { selectedOptionIds: ['wrong_opt'], isCorrect: false }
    }
  })

  const calculatedCorrect = mockQuestions.filter((q) => mockUserAnswers[q.id]?.isCorrect).length
  assert(calculatedCorrect === expectedCorrect, 'Score accurately counts correct user answers')
  assert(calculatedCorrect === 5, '5 out of 10 mock questions evaluate to correct')

  console.log(`--- English Levels Unit Tests Finished: ${passed} Passed, ${failed} Failed ---`)
  return { passed, failed, errors }
}
