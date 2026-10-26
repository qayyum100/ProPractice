import { createServer } from 'vite'

async function run() {
  console.log('--- Initializing Vite Test Harness ---')
  const server = await createServer({
    server: { middlewareMode: true },
    appType: 'custom'
  })

  try {
    const { runVoiceTestSuite } = await server.ssrLoadModule('/src/lib/__tests__/voiceLogic.test.ts')
    const voiceResult = runVoiceTestSuite()

    const { runEnglishTestSuite } = await server.ssrLoadModule('/src/lib/__tests__/englishLogic.test.ts')
    const englishResult = runEnglishTestSuite()

    const totalPassed = voiceResult.passed + englishResult.passed
    const totalFailed = voiceResult.failed + englishResult.failed

    console.log(`\n========================================`)
    console.log(`COMBINED TEST RESULTS: ${totalPassed} Passed, ${totalFailed} Failed`)
    console.log(`Voice Process Suite: ${voiceResult.passed} Passed, ${voiceResult.failed} Failed`)
    console.log(`English Levels Suite: ${englishResult.passed} Passed, ${englishResult.failed} Failed`)
    console.log(`========================================\n`)

    if (totalFailed > 0) {
      process.exit(1)
    }
  } catch (err) {
    console.error('Test execution failed:', err)
    process.exit(1)
  } finally {
    await server.close()
  }
}

run()
