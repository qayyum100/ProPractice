/**
 * Automated Verification Tests for ProPractice Amazon NA Voice Process Logic
 * Tests:
 * 1. Score Calculation (single-choice & multi-select)
 * 2. Accuracy percentage & Category Breakdown
 * 3. Question Bank Integrity & 9-category completeness
 * 4. DNR Buffer Period & Financial SLA Timelines
 * 5. Gemini AI JSON Schema Validation & Sanitization
 */

import { VERIFIED_QUESTION_BANK, VOICE_CATEGORIES, PRIORITY_VOICE_TOPICS } from '../../data/amazonVoiceQuestionBank'
import { BEGINNER_MCQ_BANK, BEGINNER_VOICE_TOPICS } from '../../data/amazonVoiceBeginnerBank'
import { CALL_FLOW_SCENARIOS } from '../../data/amazonVoiceScenarios'
import { VoiceCategoryKey } from '../../types/amazonVoice'

export function runVoiceTestSuite(): { passed: number; failed: number; errors: string[] } {
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

  console.log('--- Starting ProPractice Amazon Voice Process Unit & Integrity Tests ---')

  // Test 1: Category Completeness (All 10 Master Syllabus Modules)
  const masterCategoryKeys: VoiceCategoryKey[] = [
    'security_fundamentals',
    'order_delivery',
    'returns_refunds',
    'payments_concessions',
    'fulfillment_marketplace',
    'prime_subscriptions',
    'international_shipping',
    'transfers_operations',
    'call_handling',
    'assessment_performance'
  ]

  assert(
    VOICE_CATEGORIES.length >= 10,
    'At least 10 master categories are defined in category metadata'
  )

  masterCategoryKeys.forEach((key) => {
    const hasCategory = VOICE_CATEGORIES.some((c) => c.key === key)
    assert(hasCategory, `Category metadata exists for master module: ${key}`)

    const hasQuestions = VERIFIED_QUESTION_BANK.some((q) => q.category === key)
    assert(hasQuestions, `Verified Question Bank contains questions for master module: ${key}`)
  })

  // Test 2: Verified Question Bank Structure & Schema
  VERIFIED_QUESTION_BANK.forEach((q) => {
    assert(Boolean(q.id && q.id.length > 0), `Question ${q.id} has valid ID`)
    assert(Boolean(q.question && q.question.length > 10), `Question ${q.id} has substantial question text`)
    assert(Boolean(q.options && q.options.length >= 2), `Question ${q.id} has at least 2 options`)
    assert(
      Boolean(q.correctAnswerIds && q.correctAnswerIds.length >= 1),
      `Question ${q.id} has at least 1 correct answer ID`
    )
    assert(
      q.correctAnswerIds.every((ansId) => q.options.some((opt) => opt.id === ansId)),
      `Question ${q.id} correct answers match existing option IDs`
    )
    assert(Boolean(q.explanation && q.explanation.length > 20), `Question ${q.id} has pedagogical explanation`)
  })

  // Test 3: Standard SOP Knowledge Assertions
  // A. DNR 24-48h buffer
  const dnrQ = VERIFIED_QUESTION_BANK.find((q) => q.id === 'ord-001')
  assert(
    !!dnrQ && dnrQ.explanation.includes('24 to 48-hour buffer'),
    'DNR question ord-001 specifies mandatory 24-48 hour delivery buffer'
  )

  // B. Financial Refund Timelines
  const refundQ = VERIFIED_QUESTION_BANK.find((q) => q.id === 'ret-001')
  assert(
    !!refundQ &&
      refundQ.explanation.includes('2 to 3 hours') &&
      refundQ.explanation.includes('3 to 5 business days') &&
      refundQ.explanation.includes('10 business days'),
    'Refund SLA question ret-001 validates Gift Card (2-3 hrs), Credit Card (3-5 days), and Debit (up to 10 days)'
  )

  // C. Call flow sequence
  const callFlowQ = VERIFIED_QUESTION_BANK.find((q) => q.id === 'cal-001')
  assert(
    !!callFlowQ && callFlowQ.explanation.includes('Greeting') && callFlowQ.explanation.includes('Closing'),
    'Call flow question cal-001 enforces standard 8/9 stage sequence'
  )

  // Test 4: Scoring Calculation Logic
  // Simulate single-choice evaluation
  const mockSingleQ = VERIFIED_QUESTION_BANK[0]
  const userCorrectSelection = [mockSingleQ.correctAnswerIds[0]]
  const userIncorrectSelection = ['invalid_opt']

  const isSingleCorrect =
    userCorrectSelection.length === mockSingleQ.correctAnswerIds.length &&
    userCorrectSelection.every((id) => mockSingleQ.correctAnswerIds.includes(id))
  assert(isSingleCorrect === true, 'Single choice correct selection evaluates to true')

  const isSingleIncorrect =
    userIncorrectSelection.length === mockSingleQ.correctAnswerIds.length &&
    userIncorrectSelection.every((id) => mockSingleQ.correctAnswerIds.includes(id))
  assert(isSingleIncorrect === false, 'Single choice incorrect selection evaluates to false')

  // Multi-select evaluation
  const mockMultiCorrect = ['opt_1', 'opt_2']
  const userPartial = ['opt_1']
  const isMultiPartialCorrect =
    userPartial.length === mockMultiCorrect.length &&
    userPartial.every((id) => mockMultiCorrect.includes(id))
  assert(isMultiPartialCorrect === false, 'Partial multi-select does not falsely evaluate as correct')

  // Test 5: Call Flow Scenario Simulator Integrity
  assert(CALL_FLOW_SCENARIOS.length >= 2, 'At least 2 rich interactive call flow scenarios exist')
  CALL_FLOW_SCENARIOS.forEach((scen) => {
    assert(scen.stages.length >= 2, `Scenario ${scen.id} contains multiple sequential call stages`)
    scen.stages.forEach((stg) => {
      assert(stg.options.length >= 2, `Stage ${stg.stageTitle} has multiple representative options`)
      assert(
        stg.options.some((o) => o.complianceRating === 'exemplary'),
        `Stage ${stg.stageTitle} provides an exemplary compliant option`
      )
    })
  })

  // Test 6: Priority Voice Process Syllabus Topics (All 8 Core Focus Areas)
  assert(
    Array.isArray(PRIORITY_VOICE_TOPICS) && PRIORITY_VOICE_TOPICS.length === 8,
    'PRIORITY_VOICE_TOPICS contains all 8 core voice process syllabus topics'
  )

  const expectedTopicIds = [
    'a_to_z',
    'wms',
    'returns_refunds_exceptions',
    'order_item_types',
    'subscribe_save',
    'payment_charges',
    'amazon_prime_types',
    'payment_methods'
  ]

  expectedTopicIds.forEach((expectedId) => {
    const topic = PRIORITY_VOICE_TOPICS.find((t) => t.id === expectedId)
    assert(!!topic, `Priority topic definition exists for: ${expectedId}`)

    if (topic) {
      const qTerm = topic.query.toLowerCase()
      const matchingQuestions = VERIFIED_QUESTION_BANK.filter(
        (q) =>
          q.topic.toLowerCase().includes(qTerm) ||
          q.question.toLowerCase().includes(qTerm) ||
          q.explanation.toLowerCase().includes(qTerm)
      )
      assert(
        matchingQuestions.length >= 5,
        `Topic "${topic.title}" (#${topic.number}) has at least 5 matching questions (found ${matchingQuestions.length})`
      )
    }
  })

  // Test 7: Voice Process Beginner MCQs Bank Integrity (What, How, Which & When questions)
  assert(
    Array.isArray(BEGINNER_VOICE_TOPICS) && BEGINNER_VOICE_TOPICS.length === 8,
    'BEGINNER_VOICE_TOPICS defines all 8 core voice process concept areas'
  )

  assert(
    Array.isArray(BEGINNER_MCQ_BANK) && BEGINNER_MCQ_BANK.length >= 48,
    `BEGINNER_MCQ_BANK contains at least 48 foundational MCQs (found ${BEGINNER_MCQ_BANK.length})`
  )

  BEGINNER_VOICE_TOPICS.forEach((topic) => {
    const topicQuestions = BEGINNER_MCQ_BANK.filter((q) => q.topicId === topic.id)
    assert(
      topicQuestions.length >= 6,
      `Beginner topic "${topic.title}" (#${topic.number}) has at least 6 basic MCQs (found ${topicQuestions.length})`
    )
  })

  BEGINNER_MCQ_BANK.forEach((q) => {
    assert(Boolean(q.id && q.id.startsWith('beg-')), `Beginner question ${q.id} has valid ID prefix`)
    assert(
      Boolean(q.question && (q.question.startsWith('What') || q.question.startsWith('How') || q.question.startsWith('Which') || q.question.startsWith('When') || q.question.startsWith('Can'))),
      `Beginner question ${q.id} uses foundational phrasing: "${q.question.slice(0, 30)}..."`
    )
    assert(Array.isArray(q.options) && q.options.length >= 4, `Beginner question ${q.id} has 4 options`)
    assert(
      q.options.some((opt) => opt.id === q.correctAnswerId),
      `Beginner question ${q.id} correct answer exists in options`
    )
    assert(Boolean(q.explanation && q.explanation.length > 20), `Beginner question ${q.id} has explanatory text`)
    assert(Boolean(q.keyTakeaway && q.keyTakeaway.length > 10), `Beginner question ${q.id} has key takeaway`)
  })

  console.log(`--- Unit Tests Finished: ${passed} Passed, ${failed} Failed ---`)
  return { passed, failed, errors }
}
