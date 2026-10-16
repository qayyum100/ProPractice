import React, { useState } from 'react'
import { CALL_FLOW_SCENARIOS } from '../../data/amazonVoiceScenarios'
import { CallFlowScenario, CallFlowStepOption } from '../../types/amazonVoice'
import {
  PhoneCall,
  User,
  ShieldCheck,
  Heart,
  Timer,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Award
} from 'lucide-react'

export const VoiceCallSimulator: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(CALL_FLOW_SCENARIOS[0].id)
  const [currentStageIdx, setCurrentStageIdx] = useState(0)
  const [stageHistory, setStageHistory] = useState<
    { stageIdx: number; option: CallFlowStepOption }[]
  >([])
  const [isCompleted, setIsCompleted] = useState(false)
  const [holdTimerActive, setHoldTimerActive] = useState(false)
  const [holdSeconds, setHoldSeconds] = useState(0)

  const scenario: CallFlowScenario =
    CALL_FLOW_SCENARIOS.find((s) => s.id === selectedScenarioId) || CALL_FLOW_SCENARIOS[0]

  const currentStage = scenario.stages[currentStageIdx]
  const currentSelection = stageHistory.find((h) => h.stageIdx === currentStageIdx)?.option

  const handleSelectOption = (option: CallFlowStepOption) => {
    const updated = [
      ...stageHistory.filter((h) => h.stageIdx !== currentStageIdx),
      { stageIdx: currentStageIdx, option }
    ]
    setStageHistory(updated)
  }

  const handleNextStage = () => {
    if (currentStageIdx < scenario.stages.length - 1) {
      setCurrentStageIdx(currentStageIdx + 1)
    } else {
      setIsCompleted(true)
    }
  }

  const handlePrevStage = () => {
    if (currentStageIdx > 0) {
      setCurrentStageIdx(currentStageIdx - 1)
    }
  }

  const handleReset = (scenarioId?: string) => {
    if (scenarioId) setSelectedScenarioId(scenarioId)
    setCurrentStageIdx(0)
    setStageHistory([])
    setIsCompleted(false)
    setHoldTimerActive(false)
    setHoldSeconds(0)
  }

  // Calculate scores
  const avgEmpathy =
    stageHistory.length > 0
      ? Math.round(
          (stageHistory.reduce((acc, h) => acc + h.option.empathyScore, 0) /
            (stageHistory.length * 5)) *
            100
        )
      : 0

  const exemplaryCount = stageHistory.filter(
    (h) => h.option.complianceRating === 'exemplary'
  ).length
  const criticalFailCount = stageHistory.filter(
    (h) => h.option.complianceRating === 'critical_fail'
  ).length

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header & Scenario Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <PhoneCall className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Interactive Call Flow Simulator
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-900 dark:text-white">
            {scenario.title}
          </h2>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            {scenario.customerPersona.summary}
          </p>
        </div>

        {/* Scenario Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {CALL_FLOW_SCENARIOS.map((scen) => (
            <button
              key={scen.id}
              type="button"
              onClick={() => handleReset(scen.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedScenarioId === scen.id
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200'
              }`}
            >
              {scen.customerPersona.name} ({scen.category === 'order_issues' ? 'DNR' : 'Prime'})
            </button>
          ))}
        </div>
      </div>

      {/* Context & Telemetry Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Caller Info Card */}
        <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#15151c] border border-neutral-200/80 dark:border-neutral-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-neutral-500">
            <span>Caller Profile</span>
            <User className="w-3.5 h-3.5 text-neutral-400" />
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-neutral-500">Name:</span>
              <strong className="text-neutral-900 dark:text-white">{scenario.customerPersona.name}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Tone:</span>
              <span className="px-2 py-0.5 rounded-md font-bold text-[10px] bg-rose-500/10 text-rose-600 dark:text-rose-400">
                {scenario.customerPersona.tone}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Prime Member:</span>
              <span className="font-semibold text-sky-600 dark:text-sky-400">
                {scenario.context.primeMember ? 'Yes (Active)' : 'No'}
              </span>
            </div>
          </div>
        </div>

        {/* Order Details in CSC / AC3 Card */}
        <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#15151c] border border-neutral-200/80 dark:border-neutral-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-neutral-500">
            <span>AC3 Order Lookup</span>
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-neutral-500">Item:</span>
              <span className="font-semibold text-neutral-800 dark:text-neutral-200 truncate max-w-[160px]" title={scenario.context.item}>
                {scenario.context.item}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Price:</span>
              <span className="font-mono font-bold text-neutral-900 dark:text-white">{scenario.context.itemPrice}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">24-48h Buffer Met:</span>
              <span className={`font-bold ${scenario.context.deliveryBufferMet ? 'text-emerald-500' : 'text-amber-500'}`}>
                {scenario.context.deliveryBufferMet ? 'Buffer Expired' : 'Active (Do not refund)'}
              </span>
            </div>
          </div>
        </div>

        {/* Real-time Quality Telemetry (Empathy & FCR) */}
        <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-[#15151c] border border-neutral-200/80 dark:border-neutral-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-neutral-500">
            <span>Call Flow QA Score</span>
            <Heart className="w-3.5 h-3.5 text-rose-500" />
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="text-center p-2 rounded-xl bg-white dark:bg-[#1e1e28]">
              <span className="text-[10px] text-neutral-400 block font-semibold uppercase">Empathy</span>
              <span className="text-lg font-mono font-bold text-emerald-600 dark:text-emerald-400">
                {avgEmpathy}%
              </span>
            </div>
            <div className="text-center p-2 rounded-xl bg-white dark:bg-[#1e1e28]">
              <span className="text-[10px] text-neutral-400 block font-semibold uppercase">Exemplary</span>
              <span className="text-lg font-mono font-bold text-amber-500">
                {exemplaryCount}/{scenario.stages.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Stage Experience */}
      {!isCompleted ? (
        <div className="bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
          {/* Stage Progression Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-amber-600 dark:text-amber-400">
                {currentStage.stageTitle}
              </span>
              <span className="text-neutral-400">
                Step {currentStageIdx + 1} of {scenario.stages.length}
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300"
                style={{
                  width: `${((currentStageIdx + 1) / scenario.stages.length) * 100}%`
                }}
              />
            </div>
          </div>

          {/* Caller Dialogue Simulation Bubble */}
          <div className="p-5 rounded-2xl bg-amber-500/10 dark:bg-amber-950/20 border border-amber-500/20 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-300">
              <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
              <span>{scenario.customerPersona.name} (Live on phone):</span>
            </div>
            <blockquote className="text-sm sm:text-base font-medium italic text-neutral-900 dark:text-neutral-100 leading-relaxed">
              {currentStage.customerDialogue}
            </blockquote>
          </div>

          {/* Representative Response Choices */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
              Choose your response as the Amazon NA Voice Representative:
            </label>

            {currentStage.options.map((opt) => {
              const isChosen = currentSelection?.id === opt.id
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectOption(opt)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                    isChosen
                      ? opt.complianceRating === 'exemplary'
                        ? 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/20 ring-1 ring-emerald-500'
                        : opt.complianceRating === 'critical_fail'
                        ? 'border-rose-500 bg-rose-50/70 dark:bg-rose-950/20 ring-1 ring-rose-500'
                        : 'border-amber-500 bg-amber-50/70 dark:bg-amber-950/20 ring-1 ring-amber-500'
                      : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 bg-white dark:bg-[#15151c]'
                  }`}
                >
                  <p className="text-sm leading-relaxed text-neutral-900 dark:text-white">
                    &ldquo;{opt.agentUtterance}&rdquo;
                  </p>

                  {/* Immediate Feedback Critique */}
                  {isChosen && (
                    <div className="mt-3 pt-3 border-t border-neutral-200/60 dark:border-neutral-700/60 space-y-2 text-xs animate-fade-in">
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-bold px-2 py-0.5 rounded-md uppercase text-[10px] ${
                            opt.complianceRating === 'exemplary'
                              ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300'
                              : opt.complianceRating === 'critical_fail'
                              ? 'bg-rose-500/20 text-rose-700 dark:text-rose-300'
                              : 'bg-amber-500/20 text-amber-700 dark:text-amber-300'
                          }`}
                        >
                          Rating: {opt.complianceRating.replace('_', ' ')}
                        </span>
                        <span className="text-neutral-500">
                          Empathy: {opt.empathyScore}/5 • FCR: {opt.fcrScore}/5
                        </span>
                      </div>
                      <p className="text-neutral-700 dark:text-neutral-300">{opt.feedback}</p>
                      <p className="text-[11px] font-mono text-neutral-500">
                        SOP Guideline: {opt.complianceNote}
                      </p>
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Interactive Hold Etiquette Simulator */}
          {currentStage.stage === 'probing_hold' && (
            <div className="p-4 rounded-2xl bg-neutral-100 dark:bg-[#1a1a24] border border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-4">
              <div className="space-y-0.5 text-xs">
                <span className="font-bold text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5">
                  <Timer className="w-4 h-4 text-amber-500" />
                  Hold Time Practice (Max 1 to 2 Minutes)
                </span>
                <p className="text-neutral-500">
                  Simulate keeping customer on hold. Check back before 120s!
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setHoldTimerActive(!holdTimerActive)
                  if (!holdTimerActive) setHoldSeconds(35)
                }}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 cursor-pointer"
              >
                {holdTimerActive ? 'Return from Hold' : 'Place on 1-Min Hold'}
              </button>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
            <button
              type="button"
              onClick={handlePrevStage}
              disabled={currentStageIdx === 0}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-neutral-600 dark:text-neutral-300 disabled:opacity-40 cursor-pointer"
            >
              Previous Step
            </button>

            <button
              type="button"
              onClick={handleNextStage}
              disabled={!currentSelection}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity disabled:opacity-40 cursor-pointer shadow-xs"
            >
              {currentStageIdx < scenario.stages.length - 1 ? 'Next Call Stage' : 'Complete Call & Review QA'}
            </button>
          </div>
        </div>
      ) : (
        /* Call Completed Review Screen */
        <div className="bg-white dark:bg-[#121217] border border-neutral-200/80 dark:border-neutral-800/80 rounded-3xl p-6 sm:p-10 space-y-6 text-center animate-fade-in shadow-sm">
          <div className="w-16 h-16 mx-auto rounded-3xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-2 max-w-lg mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Call Completed Successfully!
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
              You navigated all {scenario.stages.length} phases of the Amazon NA Voice Process call flow for {scenario.customerPersona.name}.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto pt-2">
            <div className="p-3 rounded-2xl bg-neutral-50 dark:bg-[#181822] border border-neutral-200 dark:border-neutral-800">
              <span className="text-[11px] text-neutral-400 block font-semibold">Empathy Rating</span>
              <span className="text-xl font-bold font-mono text-emerald-500">{avgEmpathy}%</span>
            </div>
            <div className="p-3 rounded-2xl bg-neutral-50 dark:bg-[#181822] border border-neutral-200 dark:border-neutral-800">
              <span className="text-[11px] text-neutral-400 block font-semibold">Exemplary Steps</span>
              <span className="text-xl font-bold font-mono text-amber-500">{exemplaryCount}</span>
            </div>
            <div className="p-3 rounded-2xl bg-neutral-50 dark:bg-[#181822] border border-neutral-200 dark:border-neutral-800">
              <span className="text-[11px] text-neutral-400 block font-semibold">Critical Fails</span>
              <span className={`text-xl font-bold font-mono ${criticalFailCount > 0 ? 'text-rose-500' : 'text-emerald-500'}`}>
                {criticalFailCount}
              </span>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => handleReset()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry This Scenario</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
