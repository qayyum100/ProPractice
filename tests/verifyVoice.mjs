import { createServer } from 'vite'

async function run() {
  console.log('--- Initializing Vite Test Harness ---')
  const server = await createServer({
    server: { middlewareMode: true },
    appType: 'custom'
  })

  try {
    const { runVoiceTestSuite } = await server.ssrLoadModule('/src/lib/__tests__/voiceLogic.test.ts')
    const result = runVoiceTestSuite()
    console.log(`\n========================================`)
    console.log(`TEST RESULTS: ${result.passed} Passed, ${result.failed} Failed`)
    console.log(`========================================\n`)

    if (result.failed > 0) {
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
